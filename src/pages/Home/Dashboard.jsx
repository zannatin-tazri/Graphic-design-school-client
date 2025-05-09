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

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Manage User/Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u._id}>
                <th>{index + 1}</th>
                <td>{u.email}</td>
                <td><button className='btn btn-primary bg-gray-800'>Make admin</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
