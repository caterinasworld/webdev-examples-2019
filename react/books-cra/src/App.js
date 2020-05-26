import React, { useState, useEffect } from 'react';
import './index.css';
import Book from './Book';

export default function App(props) {
  let [books, setBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = 'https://anapioficeandfire.com/api/books/';
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          // console.log(item.name);
        });

        setBooks(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [1]);

  return (
    <div className='App'>
      <h1>{props.name}</h1>
      {isLoading && <p>Data Loading...</p>}
      <Book data={books} />
    </div>
  );
}
