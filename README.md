# 🖼️ **Image Album**

Welcome to the **Image Album** project! This web application allows you to browse through a collection of images, navigate between them, and even add new images to the gallery. The project is built using HTML, CSS, and JavaScript. The app allows for a dynamic and interactive user experience with a cyclic image navigation system.

---

## 🚀 **Features**

- **View Images**: Browse through a gallery of images.
- **Cyclic Navigation**: Move between images using next/previous buttons.
- **Add New Images**: Add your own images to the album with a simple form.
- **Loader Animation**: Smooth transitions with a loading animation.

---


## 🏞️ App Functionality
# 📸 Viewing Images
 - When you load the app, you will see an image card with an image and its description.
 - You can navigate between images using the Previous and Next buttons.
 - The images are displayed in a cyclic manner — once you reach the last image, it loops back to the first.
# ➕ Adding New Images
 - You can add new images to the album by entering the Image URL and Image Name in the provided form.
 - Upon submission, the image will appear in the album for 5 seconds before disappearing.
# 🔄 Loading Spinner
 - A loading spinner appears during transitions between images to enhance the user experience.
 - The spinner is toggled on and off when navigating through images.
# 💻 Code Walkthrough
## 🖼️ Images Array
 - This array holds the images and their names:

const images = [
    { src: 'https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format&fit=crop&q=60', name: 'Tiger' },

    { src: 'https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=600&auto=format&fit=crop&q=60', name: 'Lion' }
];

# 🔄 Image Navigation
 - The functions nextImageCard and previousImageCard allow users to cycle through the images. They modify the currentIndex to point to the next or previous image, and update the display accordingly.

# 🖼️ Change Image
 - The function changeImageCard updates the image and description on the page.


function changeImageCard() {

    const img = document.querySelector('#image');

    const name = document.querySelector('.description');

    img.src = images[currentIndex].src;

    name.textContent = images[currentIndex].name;

}

# 🔄 Loading Animation
 - The loading function toggles the visibility of the loading spinner when transitioning between images.


function loading() {

    const loader = document.querySelector('.loader');

    loader.classList.toggle('active');

}

# ➕ Adding New Images
 - The addNewImage function allows users to add a new image with a name and URL to the images array.


    images.push({ src: imageUrl, name: imageName });
    totalImages++;

    // Update preview area with new image
    const parent = document.querySelector('.previewArea');
    const imageCard = document.createElement('div');
    imageCard.innerHTML = `
        <h1>Image Added</h1>
        <figure class="miniImageCard">
            <img src="${imageUrl}" alt="photo" loading="lazy" />
            <figcaption class="description">${imageName}</figcaption>
        </figure>
    `;
    parent.appendChild(imageCard);
    setTimeout(() => { imageCard.remove(); }, 5000);
}
# 📷 Video


https://github.com/user-attachments/assets/a9d22686-9f29-44a4-8bfd-57a76927f23a


## 🧑‍💻 Technologies Used
 - HTML for structuring the page.
 - CSS for styling the layout and creating responsive design.
 - JavaScript for implementing dynamic image display, navigation, and interaction.


# 📋 Contributing
We welcome contributions! Feel free to fork the repository, create a branch, and submit pull requests.



