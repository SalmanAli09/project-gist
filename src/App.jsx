import React from 'react';
import GistService from './GistService';
import GistList from './GistList';

const App = () => {
  const username = 'SalmanAli09'; // Replace with the desired GitHub username

  const { gists } = GistService({ username });

  return <GistList gists={gists} />;
};

export default App;
