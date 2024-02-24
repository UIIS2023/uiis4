const initSlider=()=>{
    const imageList=document.querySelector(".slider .slike-lista");
    const slideButtons=document.querySelectorAll(".slider .slide-button");
    const sliderScrollbar=document.querySelector(".sadrzaj .slider-scrollbar");
    const scrollbarThumb=sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft=imageList.scrollWidth-imageList.clientWidth;

    slideButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            const direction=button.id==="prev"? -1:1;
            const scrollAmount=imageList.clientWidth*direction;
            imageList.scrollBy({left:scrollAmount,behavior:"smooth"});
        });
    });
    const updateScrollThumbPosition=()=>{
        const scrollPosition=imageList.scrollLeft;
        const thumbPosition=(scrollPosition/maxScrollLeft)*(sliderScrollbar.clientWidth-scrollbarThumb.offsetWidth)
        scrollbarThumb.style.left=`${thumbPosition}px`;
    }
    imageList.addEventListener("scroll",()=>{
        updateScrollThumbPosition();
    });
}
window.addEventListener("load",initSlider);
