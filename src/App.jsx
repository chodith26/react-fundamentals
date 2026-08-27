import { HedFun } from './Header.jsx';
import FotFun from './Footer.jsx';
import Profile from './Profile.jsx';
import OmnitrixCharge from './OmnitrixCharge.jsx';

const alienDatabase = [
  { id: 1, name: "Swampfire", species: "Methanosian", bio: "Plant-like alien with fire and regeneration abilities.", imageUrl: "/images/sw.webp" },
  { id: 2, name: "Echo Echo", species: "Sonorosian", bio: "Living soundwaves in a containment suit. Can clone himself.", imageUrl: "/images/echo.webp" },
  { id: 3, name: "Humungousaur", species: "Vaxasaurian", bio: "Giant humanoid dinosaur with incredible super strength.", imageUrl: "/images/hum.jpg" },
  { id: 4, name: "Big Chill", species: "Necrofriggian", bio: "Moth-like alien capable of intangibility and freezing breath.", imageUrl: "/images/bc.png" },
  { id: 5, name: "Spidermonkey", species: "Arachnichimp", bio: "Agile, four-armed monkey capable of shooting strong webs.", imageUrl: "/images/sm.webp" }
];

function App() {
  return (
    <div className="app">
      <HedFun />
      
      <OmnitrixCharge chargeLevel={20}/>
      <OmnitrixCharge chargeLevel={50}/>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
        <Profile 
          name="Ben Tennyson"
          bio="Wielder of the Omnitrix and protector of Earth."
          imageUrl="/images/bt.jpg"
          species="Human"
        />

        <Profile 
          name="Gwen Tennyson"
          bio="Anodite magic user with vast energy manipulation abilities."
          imageUrl="/images/gt.jpg"
          species="Human"
        />

        <Profile 
          name="Kevin Levin"
          bio="Osmosian matter absorber and skilled mechanic."
          imageUrl="/images/ke.jpg"
          species="Osmosian (Human-Alien hybrid)"
        />
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Alien Force Roster</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
        
        {alienDatabase
          .filter(alien => alien.species !== "Sonorosian")
          .map(alien => (
            <Profile
              key={alien.id}
              name={alien.name}
              bio={alien.bio}
              imageUrl={alien.imageUrl}
              species={alien.species}
            />
          ))
        }

      </div>

      <FotFun />
    </div>
  );
}

export default App;