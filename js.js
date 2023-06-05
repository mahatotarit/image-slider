const slides  = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach(
    (slides,index) =>{
       slides.style.left = `${index * 100}%`;
    }
)

const slide_image  = () =>{
    slides.forEach((slide) =>{
        slide.style.transform = `translateX(-${counter * 100}%`;
    })
}

const gotnext = () =>{
    if(counter != (slides.length-1)){
        counter++;
        slide_image();
    }
}
const gotpre = () =>{
    if(counter != 0){
        counter--;
        slide_image();
    }
}

let pre_back = 0;
setInterval(() => {
    if(pre_back == 0 ){
        if(counter != (slides.length-1)){
            counter++;
            slide_image();
        }else{
            pre_back = 1;
        }
    }

    if(pre_back == 1 ){
        if(counter != 0){
            counter--;
            slide_image();
        }else{
            pre_back = 0;
            counter++;
            slide_image();
        }
    }
}, 10000);