import './App.css';
import { useState } from 'react';
import Card from './Card';


function App() {

  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsInit(false);

    if (userName === "") {
      setIsEmpty(true);
      return;
    }

    try {
      setError(false);
      setIsEmpty(false);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        throw new Error("User Not Found");
      }
      const info = await res.json();
      setData(info);
    } catch (err) {
      setError(true);
    }
  }

  const renderContent = () => {
    if (isInit) {
      return <p>No user yet. Try searching for "octocat".</p>
    }

    if (isEmpty) {
      return <p>Please enter a GitHub username.</p>;
    }

    if (!data) return;

    return <Card data={data} />
  }
  return (
    <div className='container'>
      <h1>GitHub User Finder</h1>
      <p>Search a GitHub username to see profile details.</p>
      <form onSubmit={handleSubmit}>
        <input id='search' name='username' type='text' placeholder="e.g. torvalds, gaearon, octocat" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
        <button type='submit'>Search</button>
      </form>
      {renderContent()}
    </div>
  );
}

export default App;
