import React, { useEffect, useState } from 'react';

const GistService = ({ username }) => {
  const [gists, setGists] = useState([]);

  useEffect(() => {
    const fetchGists = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/gists`, {
          headers: {
            Authorization: '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',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setGists(data);
        } else {
          console.error('Error fetching gists:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching gists:', error);
      }
    };

    fetchGists();
  }, [username]);

  return { gists };
};

export default GistService;
