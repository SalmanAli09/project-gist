// GistList.js

import React from 'react';

const GistList = ({ gists }) => {
  return (
    <div>
      <h2>List of Gists</h2>
      <ul>
        {gists.map((gist) => (
          <li key={gist.id}>
            <h3>{gist.description}</h3>
            <p>Created: {gist.created_at}</p>
            {/* Display other relevant metadata */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GistList;
