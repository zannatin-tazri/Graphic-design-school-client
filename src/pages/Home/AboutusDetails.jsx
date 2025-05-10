import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
// import { AuthContext } from '../../providers/AuthProvider';

const AboutusDetails = () => {
  const { user } = useContext(AuthContext);
  const [aboutData, setAboutData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/aboutus')
      .then(res => res.json())
      .then(data => {
        setAboutData(data);
        if (data.length > 0) setNewDescription(data[0].description); // initialize
      });

    // Check admin
    fetch(`http://localhost:5000/users/admin/${user?.email}`)
      .then(res => res.json())
      .then(data => setIsAdmin(data.isAdmin));
  }, [user]);

  const handleSaveDescription = async () => {
    const res = await fetch(`http://localhost:5000/aboutus/${aboutData[0]._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: newDescription }),
    });
    const result = await res.json();
    if (result.modifiedCount > 0) {
      setAboutData(prev => [{ ...prev[0], description: newDescription }]);
      setEditMode(false);
    }
  };

  const handleSavePhoto = async () => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      const res = await fetch(`http://localhost:5000/aboutus/photo/${aboutData[0]._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photo_url: base64Image }),
      });
      const result = await res.json();
      if (result.modifiedCount > 0) {
        setAboutData(prev => [{ ...prev[0], photo_url: base64Image }]);
        setSelectedImage(null);
        setPreviewImage(null);
      }
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col text-center">
        <h1 className='text-gray-800 text-3xl text-center mt-4 font-sans font-bold'>About Us</h1>
      {aboutData.map(item => (
        <div key={item._id} className="bg-white shadow p-6 rounded-lg mb-6 w-full max-w-xl">
          <img src={item.photo_url} alt="About us" className="w-96 h-96 object-cover rounded mb-4 mx-auto" />
          

          {!editMode ? (
            <p className="text-gray-700 mt-2 whitespace-pre-line">{item.description}</p>
          ) : (
            <textarea
              className="w-full border p-2 mt-2"
              rows="5"
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
            ></textarea>
          )}

          {isAdmin && (
            <div className="mt-4 flex flex-col gap-2">
              {!editMode ? (
                <button onClick={() => setEditMode(true)} className="btn btn-sm btn-warning">Edit About Us</button>
              ) : (
                <button onClick={handleSaveDescription} className="btn btn-sm btn-success">Save</button>
              )}

              <label className="btn btn-sm btn-info">
               Update Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    setSelectedImage(e.target.files[0]);
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </label>

              {previewImage && (
                <>
                  <img src={previewImage} alt="Preview" className="w-48 mx-auto mt-2 rounded" />
                  <button onClick={handleSavePhoto} className="btn btn-sm btn-success">Save Photo</button>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutusDetails;
