import './App.css'
import teamsData from './CollegeBasketballTeams.json';


function Header() {
  return (
    <div>
      <h1> NCAA Basketball Teams</h1>
      <p>Explore the teams competing in March Madness!</p>
    </div>
  
  );
}

function TeamCard({school, name, city, state} : {school: string; name: string; city: string; state: string;}) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p><strong>Mascot:</strong> {name}</p>
      <p><strong>Location:</strong> {city}, {state}</p>
    </div>
  );
}

function TeamList() {
  return(
    <div className="team-list">
      {teamsData.teams.map((team) => (
        <TeamCard {...team} />
      ))}
    </div>
  );
}

function App() {

  return (
    <div>
      <Header />
      <TeamList />
    </div>
  );
}

export default App
