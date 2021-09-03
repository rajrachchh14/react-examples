import React, { useEffect, useState } from 'react'; // ,

function Detail() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://apitesting78.000webhostapp.com/api/Item')
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },

        error => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
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
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

export default Detail;
