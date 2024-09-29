//Intialize the slide index
let currentSlideIndex = 0;

//Show and hiden Logic
function showSlide(index){
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");
    //It is true--> it will rest the currentSlideIndex to 0- first Image
    //this loop back to the begining if user click next image.
    if (index >= slides.length){
        currentSlideIndex = 0;
    }
    //if previous button is pressed at first image it goes to last image
    else if(index <0 ){
        currentSlideIndex = slides.length-1;
    }
    //hide each and every slides
    for(i=0;i<slides.length; i++){
        slides[i].style.display = "none";
    }
    //Remove active class from all dots
    for(i=0; i< dots.length;i++){
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    //Display the current slide and set the corresponding dot as active
    slides[currentSlideIndex].style.display = "block";
    dots[currentSlideIndex].className += " dot-active";

    //Assing the current image src to img tap in popup
    const popupImage = document.getElementById("popup-image");
    popupImage.src =slides[currentSlideIndex].src;
}

function changeSlide(n){
    showSlide(currentSlideIndex +=n);
}
//function for jump to specific slide
function currentSlide(n){
    showSlide(currentSlideIndex = n);
}
//Initial Display Setup
showSlide(currentSlideIndex);

//level2 js part start --> for open and close the popup menu

function openPopup(){
    const modal = document.getElementById("imagePopup");
    modal.style.display = "flex";
}
function closePopup(){
    const modal = document.getElementById("imagePopup")
    modal.style.display = "none";
}

