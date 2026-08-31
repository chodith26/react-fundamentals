import { useState } from 'react';
import { HedFun } from './Header.jsx';
import FotFun from './Footer.jsx';
import Profile from './Profile.jsx';
import OmnitrixCharge from './OmnitrixCharge.jsx';

const initialAliens = [
  { id: 1, name: "Swampfire", species: "Methanosian", bio: "Plant-like alien with fire and regeneration abilities.", imageUrl: "/images/sw.webp" },
  { id: 2, name: "Echo Echo", species: "Sonorosian", bio: "Living soundwaves in a containment suit. Can clone himself.", imageUrl: "/images/echo.webp" },
  { id: 3, name: "Humungousaur", species: "Vaxasaurian", bio: "Giant humanoid dinosaur with incredible super strength.", imageUrl: "/images/hum.jpg" },
  { id: 4, name: "Big Chill", species: "Necrofriggian", bio: "Moth-like alien capable of intangibility and freezing breath.", imageUrl: "/images/bc.png" },
  { id: 5, name: "Spidermonkey", species: "Arachnichimp", bio: "Agile, four-armed monkey capable of shooting strong webs.", imageUrl: "/images/sm.webp" }
];

function App() {
  const [favorites, setFavorites] = useState([]);
  const [aliens, setAliens] = useState(initialAliens);
  const [newName, setNewName] = useState('');
  const [newSpecies, setNewSpecies] = useState('');
  const [facts, setFacts] = useState([
    { id: 1, text: "The Omnitrix was created by Azmuth, a Galvan." },
    { id: 2, text: "Ben's middle name is Kirby." }
  ]);
  const [newFact, setNewFact] = useState('');
  const favoriteCount = favorites.length;

  function handleAddFact(e){
    e.preventDefault();
    const factObject = { id: Date.now(), text: newFact };
    setFacts([...facts, factObject]);
    setNewFact('');
  }
  
  function handleToggleFavorite(id){
    if(favorites.includes(id)){
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }
  return (
    <div className="app">
      <HedFun />
      <OmnitrixCharge />
      <h3>Total Favorited Characters: {favoriteCount}</h3>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
        <Profile 
          name="Ben Tennyson"
          bio="Wielder of the Omnitrix and protector of Earth."
          imageUrl="/images/bt.jpg"
          isFavorite={favorites.includes("ben")}
          onToggle={() => handleToggleFavorite("ben")}
        />

        <Profile 
          name="Gwen Tennyson"
          bio="Anodite magic user with vast energy manipulation abilities."
          imageUrl="/images/gt.jpg"
          isFavorite={favorites.includes("gwen")}
          onToggle={() => handleToggleFavorite("gwen")}
        />

        <Profile 
          name="Kevin Levin"
          bio="Osmosian matter absorber and skilled mechanic."
          imageUrl="/images/ke.jpg"
          isFavorite={favorites.includes("kevin")}
          onToggle={() => handleToggleFavorite("kevin")}
        />
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Alien Force Roster</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
        
        {aliens
          .filter(alien => alien.species !== "Sonorosian") 
          .map(alien => (
            <Profile 
              key={alien.id}
              name={alien.name}
              bio={`${alien.species} - ${alien.bio}`}
              imageUrl={alien.imageUrl}
              isFavorite={favorites.includes(alien.id)}
              onToggle={() => handleToggleFavorite(alien.id)}
            />
          ))
        }

      </div>
      <h2>Ben 10 Fun Facts</h2>
      <form onSubmit={handleAddFact}>
        <input type="text" value={newFact} onChange={(e) => setNewFact(e.target.value)}/>
        <button type='submit'>Add Fact</button>
      </form>

      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        {facts.map(fact => (
          <li key={fact.id}>{fact.text}</li>
        ))}
      </ul>

      <FotFun />
    </div>
  );
}


export default App;