if (window.matchMedia("(min-width: 550px)").matches){
    const leftDiv = document.querySelector('.left');
    const imagesDiv = document.querySelector('.images');
    const leftDivHeight = leftDiv.offsetHeight;
    imagesDiv.style.height = leftDivHeight + 'px';}