const popup = document.querySelector('.gallery-popup-body')
const galleryImgs = document.querySelectorAll('.imag')
const popUpImage = document.querySelector('.popup-image')
const prevBtn = document.querySelector('.prev-img')
const nextBtn = document.querySelector('.next-img')
const closePopUp = document.querySelector('.close-image')

let currentImgIndex;

const nextImg = () => {
    if (currentImgIndex === galleryImgs.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    popUpImage.src = galleryImgs[currentImgIndex].src;
};

const previousImg = () => {
    if (currentImgIndex === 0) {
        currentImgIndex = galleryImgs.length - 1;
    } else {
        currentImgIndex--;
    }
    popUpImage.src = galleryImgs[currentImgIndex].src;
};

const closePopup = () => {
    popup.style.display = 'none';
};

galleryImgs.forEach((imag, index) => {
    const showPopup = (e) => {
        popup.style.display = 'flex';
        popUpImage.src = e.target.src;
        currentImgIndex = index;
    };//Pobranie src klikniętego zdjęcia i indexu

    imag.addEventListener("click", showPopup);
});

closePopUp.addEventListener("click", closePopup);

prevBtn.addEventListener("click", nextImg);

nextBtn.addEventListener("click", previousImg);