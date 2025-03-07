import './App.css';
import teams from './CollegeBasketballTeams.json';

function Welcome() {
  return (
    <div className="container">
      <h1>College Basketball Teams</h1>
    </div>
  );
}

function Team({ team }: { team: any }) {
  return (
    <div className="team-card">
      <h3>School: {team.school}</h3>
      <h3>Mascot: {team.name}</h3>
      <h3>Location: {team.city}, {team.state}</h3>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-list">
      {teams.teams.map((team, index) => (
        <Team key={index} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;