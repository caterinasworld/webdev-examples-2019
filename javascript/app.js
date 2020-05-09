const url = 'https://anapioficeandfire.com/api/books/';

let app = document.querySelector('#books');

console.log('test');

let fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data); // array of 10 objects
      data.forEach((item) => {
        console.log(item);
        let div = document.createElement('div');
        div.innerText = `${item.name} - ${item.numberOfPages} pages`;
        app.append(div);
      });
    })
    .catch((error) => console.log(error))
    .finally(() => {
      app.removeChild(document.querySelector('#loading'));
    });
};

fetchData(url);
