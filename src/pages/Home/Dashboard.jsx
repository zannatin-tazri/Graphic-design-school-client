import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert('User promoted to admin successfully!');
          // Refetch users to update UI
          fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold my-4">User Management Dashboard</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Role</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u._id}>
                <th>{index + 1}</th>
                <td>{u.email}</td>
                <td>{u.role === 'admin' ? 'Admin' : 'User'}</td>
                <td>
                  {u.role !== 'admin' && (
                    <button
                      onClick={() => handleMakeAdmin(u._id)}
                      className='btn btn-sm btn-primary bg-gray-800'
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
