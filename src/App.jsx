import React, { useState } from 'react';
import GistService from './GistService';
import GistList from './GistList';

const App = () => {
  const [username, setUsername] = useState('');
  const [showGistDetails, setShowGistDetails] = useState(false);
  const [selectedGist, setSelectedGist] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleButtonClick = () => {
    setShowGistDetails(true);
  };

  const handleGistSelect = (gist) => {
    setSelectedGist(gist);
  };

  const { gists } = GistService({ username });

  return (
    <>
      <div className="main">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter username"
        />
        <button onClick={handleButtonClick}>Show Gist Details</button>
        {showGistDetails && (
          <GistList gists={gists} onSelect={handleGistSelect} />
        )}
        {selectedGist && (
          <div>
            <h2>{selectedGist.name}</h2>
            <p>{selectedGist.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
