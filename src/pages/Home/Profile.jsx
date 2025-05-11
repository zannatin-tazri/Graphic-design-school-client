import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/users', formData);
            console.log('User added/updated:', res.data);

            const existingUserIndex = users.findIndex(user => user.email === formData.email);

            if (existingUserIndex !== -1) {
                setUsers((prevUsers) => {
                    const updatedUsers = [...prevUsers];
                    updatedUsers[existingUserIndex] = res.data;
                    return updatedUsers;
                });
            } else {
                setUsers((prevUsers) => [...prevUsers, res.data]);
            }

            setFormData({ name: '', phone: '', email: '' });
        } catch (err) {
            console.error('Error adding user:', err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
            <h1 className='text-3xl font-semibold font-serif text-gray-700'>Update user information</h1>
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <label className="input input-bordered">
                        <input
                            type="text"
                            name="name"
                            className="grow"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered">
                        <input
                            type="number"
                            name="phone"
                            className="grow"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered">
                        <input
                            type="email"
                            name="email"
                            className="grow"
                            placeholder="Enter your currently using email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" className="btn text-white bg-gray-700 w-full">Submit</button>
                </form>
            </div>

            <div className="mt-10 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">Users</h2>
                {users.length > 0 ? (
                    <ul className="space-y-4">
                        {users.map((user, index) => (
                            <li key={index} className="p-4 bg-white rounded-lg shadow">
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">No information added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
