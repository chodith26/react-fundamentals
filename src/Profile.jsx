import { useState } from 'react';

function Profile({ name, bio, imageUrl, isAlien, isFavorite, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(bio);

  return (
    <div style={{ 
      position: 'relative', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '16px', 
      width: '250px', 
      textAlign: 'center', 
      background: '#fff' 
    }}>
      
      <button 
        onClick={() => setIsEditing(!isEditing)} 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer',
          fontSize: '1.2em'
        }}
        title={isEditing ? "Save" : "Edit Bio"}
      >
        {isEditing ? "✅" : "🖉"}
      </button>

      <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
      <h3>{name}</h3>
      
      {isEditing ? (
        <input 
          value={editedBio} 
          onChange={(e) => setEditedBio(e.target.value)} 
          style={{ width: '90%', padding: '4px', marginBottom: '8px', textAlign: 'center' }}
        />
      ) : (
        <p>{editedBio}</p>
      )}
      
      <button 
        onClick={onToggle} 
        style={{ marginTop: '10px', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', background: isFavorite ? '#ffdf00' : '#f0f0f0' }}
      >
        {isFavorite ? "⭐ Favorited" : "☆ Favorite"}
      </button>
    </div>
  );
}

export default Profile;