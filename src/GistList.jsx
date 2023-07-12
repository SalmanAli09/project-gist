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
            <p>Updated: {gist.updated_at}</p>
            {gist.language && <p>Language: {gist.language}</p>}
            {gist.forks && <p>Forks: {gist.forks}</p>}
            <p>Comments: {gist.comments}</p>
            <p>Files: {Object.keys(gist.files).length}</p>
            <p>Public: {gist.public ? 'Yes' : 'No'}</p>
            <p>Owner: {gist.owner.login}</p>
            <p>URL: <a href={gist.html_url}>{gist.html_url}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GistList;
