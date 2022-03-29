//Total length the array objects
//On click  move to right or left
Slides = document.getElementsByClassName("Sliders")
SlideNumber = 0
SlideNumberPrev = 1
SlidesLength = (Slides.length)-1

Left_Arrow = document.getElementById("Left_Arrow")
Right_Arrow = document.getElementById("Right_Arrow")

Left_Arrow.addEventListener('click', function(){
    SlideNumber-=1
    if(SlideNumber < 0){
        SlideNumber = SlidesLength
    }
    SlideNumberPrev = SlideNumberPrev-=1
    if(SlideNumberPrev>SlidesLength){
        SlideNumberPrev = 0
    }
    else if(SlideNumberPrev<0){
        SlideNumberPrev = SlidesLength
    }

    PreviousSlide = Slides[SlideNumberPrev]
    CurrentSlide = Slides[SlideNumber]
    PreviousSlide.classList.remove("active");
    CurrentSlide.classList.add("active");
    console.log("prev"+SlideNumberPrev)
    console.log("current"+SlideNumber)

})



Right_Arrow.addEventListener('click', function Right_Arrow(){
    SlideNumber+=1
    if(SlideNumber > SlidesLength){
        SlideNumber = 0
    }
    SlideNumberPrev = SlideNumberPrev+=1
    if(SlideNumberPrev>SlidesLength){
        SlideNumberPrev = 0
    }
    else if(SlideNumberPrev>2){
        SlideNumberPrev = SlidesLength
    }
    PreviousSlide = Slides[SlideNumberPrev]
    CurrentSlide = Slides[SlideNumber]
    PreviousSlide.classList.remove("active");
    CurrentSlide.classList.add("active");
    console.log("prev"+SlideNumberPrev)
    console.log("current"+SlideNumber)
  })

  