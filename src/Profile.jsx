import Card from './Card.jsx';

function Profile({ name, bio, imageUrl, species, size = 150 }) {
  return (
    <Card>
      <img
        src={imageUrl}
        alt={"Avatar of " + name}
        style={{ width: size, height: size, borderRadius: '50%', backgroundColor: '#e0e0e0' }}
      />
      <h2 style={{ margin: '12px 0' }}>{name}</h2>
      <p style={{ color: '#666' }}>{bio}</p>
      <p style={{ fontWeight: 'bold' }}>Species: {species}</p>
    </Card>
  );
}

export default Profile;