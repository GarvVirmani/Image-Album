const images = [
    {
        src: 'https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'tiger',
    },
    {
        src: 'https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'lion',
    },
]

let currentIndex = 0;
let totalImages = images.length

// navigate to previous image in cyclic order
function nextImageCard() {
    const modifiedIndex = (currentIndex + 1) % (totalImages)
    currentIndex = modifiedIndex;
    changeImageCard()
    loading()
    setTimeout(() => {
        loading()
    }, 1000);
}

// navigate to next image in cyclic order
function previousImageCard() {
    const modifiedIndex = (totalImages + (currentIndex - 1)) % (totalImages)
    currentIndex = modifiedIndex;
    changeImageCard()
    loading()
    setTimeout(() => {
        loading()
    }, 1000);
}

// change the data of imageCard
function changeImageCard() {
    const img = document.querySelector('#image')
    const name = document.querySelector('.description')
    img.src = images[currentIndex].src;
    name.textContent = images[currentIndex].name;
}

// apply loader or remove loader
function loading() {
    const loader = document.querySelector('.loader')
    loader.classList.toggle('active')
}

function addNewImage(event) {
    event.preventDefault()

    const formData = new FormData(event.target);

    // Alternatively, convert the form data to an object and log it
    const { imageName, imageUrl } = Object.fromEntries(formData.entries());

    images.push({
        src: imageUrl,
        name: imageName,
    })

    // clear form input value
    document.querySelector('#imgAddressInput').value = ''
    document.querySelector('#imgNameInput').value = ''

    totalImages++;

    const parent = document.querySelector('.previewArea');
    const imageCard = document.createElement('div')

    imageCard.innerHTML = `
    <h1>Image Added</h1>
<figure class="miniImageCard">
    <img src=${imageUrl}
    alt="photo" id="image" loading="lazy" />
    <figcaption class="description">${imageName}</figcaption>
</figure>
`

    parent.appendChild(imageCard)
    setTimeout(() => {
        imageCard.remove();
    }, 5000);

}
