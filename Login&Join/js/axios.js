const catImage = document.querySelector("main .container .cat-img");

axios ({
  url: 'https://api.thecatapi.com/v1/images/search?size=ful',
  method: 'get',
}).then(response => {
  catImage.src = response.data[0].url;
});
