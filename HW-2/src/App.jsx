import './App.css';
import UserCard from './components/UserCard';
import Button from './components/Button';

function App() {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com' },
  ];

  return (
    <div className="App">
      <h1>User List</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email} />
        ))}
      </div>
      <Button text="Click Me!" />
    </div>
  );
}

export default App;
