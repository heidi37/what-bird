const button = document.querySelector('button')
const image = document.querySelector('img')
const latinName = document.getElementById('latinName')


button.addEventListener('click', () => {
  const birdName = document.querySelector('input').value
  fetch(`https://bird-api-hdc8.onrender.com/api/birds/${birdName}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    latinName.textContent = data.latinName
    image.style.display = "block";
    image.src = data.image
  })
})