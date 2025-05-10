import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const WorkGalleryAdmin = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [workGallery, setWorkGallery] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState('');

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/admin/${user.email}`)
                .then(res => res.json())
                .then(data => setIsAdmin(data.isAdmin));
        }
    }, [user]);

    const fetchGallery = () => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setWorkGallery(data));
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this gallery item?");
  if (!confirmDelete) return;

  try {
    const res = await fetch(`http://localhost:5000/gallery/${id}`, {
      method: 'DELETE',
    });
    const result = await res.json();

    if (result.deletedCount > 0) {
      alert('Gallery item deleted!');
      setWorkGallery(prevGallery => prevGallery.filter(item => item._id !== id));
    } else {
      alert('Failed to delete. Item may not exist.');
    }
  } catch (error) {
    console.error('Delete error:', error);
    alert('Failed to delete the gallery item. Please try again.');
  }
};


    return (
        <div className="p-4">
            {isAdmin && (
                <div className="border p-4 rounded-lg shadow bg-white">
                    <h2 className="text-xl font-semibold mb-4">Add to Gallery</h2>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target;
                            const title = form.title.value;
                            const subtitle = form.subtitle.value;
                            const photo = form.image_url.value;

                            const newItem = { title, subtitle, photo };
                            const res = await fetch('http://localhost:5000/gallery', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(newItem),
                            });

                            const result = await res.json();
                            if (result.insertedId) {
                                alert('Gallery item added!');
                                form.reset();
                                fetchGallery(); // Refresh
                            }
                        }}
                    >
                        <input type="text" name="title" placeholder="Title" required className="input input-bordered w-full mb-2" />
                        <input type="text" name="subtitle" placeholder="Subtitle" required className="input input-bordered w-full mb-2" />
                        <input type="url" name="image_url" placeholder="Photo URL" required className="input input-bordered w-full mb-2" />
                        <button type="submit" className="btn btn-success mt-2">Add to Gallery</button>
                    </form>

                    <div className="mt-8">
  <h3 className="text-lg font-bold mb-4">Remove From Gallery</h3>
  <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Subtitle</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {workGallery.map(item => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.subtitle}</td>
            <td>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

                </div>
            )}
        </div>
    );
};

export default WorkGalleryAdmin;
