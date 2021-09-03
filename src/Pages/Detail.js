import React, { useEffect, useState } from 'react'; // ,

function Detail() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://json-server--3000.local.webcontainer.io/posts')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} {item.author}
          </li>
        ))}
      </ul>
    );
  }
}

export default Detail;
