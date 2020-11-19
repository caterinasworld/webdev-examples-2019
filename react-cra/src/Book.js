import React from 'react';
import './index.css';

export default function Book(props) {
  let list = props.data.map((item, index) => {
    return (
      <li key={index} className='book'>
        {item.name}
      </li>
    );
  });

  return <ol className='booklist'>{list}</ol>;
}
