
import AuthContext from '../../context/AuthContext/AuthContext';
import { useEffect, useState, useContext } from 'react';


const WorkGalleryAdmin = () => {

    const { user } = useContext(AuthContext); 
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
            if (user?.email) {
                fetch(`http://localhost:5000/users/admin/${user.email}`)
                    .then(res => res.json())
                    .then(data => setIsAdmin(data.isAdmin));
            }
        }, [user]);
    return (
        <div>
            {isAdmin && (
                <div className="my-8 mx-4 border p-4 rounded-lg shadow bg-white">
                    <h2 className="text-xl font-semibold mb-4">Add to Gallery</h2>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target;
                            const title = form.title.value;
                            const subtitle = form.subtitle.value;
                            const photo = form.photo.value;

                            const newItem = { title, subtitle, photo};
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

                                // Refresh gallery after adding
                                fetch('http://localhost:5000/gallery')
                                    .then(res => res.json())
                                    .then(data => setWorkGallery(data));
                            }
                        }}
                    >
                        <input type="text" name="title" placeholder="Title" required className="input input-bordered w-full mb-2" />
                        <input type="text" name="subtitle" placeholder="Subtitle" required className="input input-bordered w-full mb-2" />
                        <input type="url" name="photo" placeholder="Photo URL" required className="input input-bordered w-full mb-2" />
                        <button type="submit" className="btn btn-success mt-2">Add to Gallery</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default WorkGalleryAdmin;