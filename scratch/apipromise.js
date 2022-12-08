fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => {
    const container = document.querySelector(".container");

    for (let i = 0; i < json.length - 1; i++) {
        const p= document.createElement('p');
        p.innerText = json[i].title;

        container.append(p);
    }
});