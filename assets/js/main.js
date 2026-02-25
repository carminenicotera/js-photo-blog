const endpoint = "https://lanciweb.github.io/demo/api/pictures/"
console.log(endpoint);

const rowEl = document.querySelector('.row')
console.log(rowEl);

fetch(endpoint)
  .then(result => result.json())
  .then(data => {
    console.log(data);

    data.forEach(element => {
      console.log(element);
      const { title, date, url } = element;
      const markup = `<div class="col">
            <div class="card">
              <img src="./assets/img/pin.svg" alt="pin" class="pin">
              <div class="card-body">
                <img src=${url} alt="img" class="card-img-top">
                <h3 class="date">${date}</h3>
                <h2 class="title card-text"><strong>${title}</strong></h2>
              </div>
            </div>
          </div>`
      console.log(markup);
      rowEl.innerHTML += markup;
    });
  })