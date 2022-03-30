//Total length the array objects
//On click  move to right or left
Slides = document.getElementsByClassName("Sliders")
SlideNumber = 0
SlidesLength = (Slides.length)-1

Left_Arrow = document.getElementById("Left_Arrow")
Right_Arrow = document.getElementById("Right_Arrow")
Left_Arrow.addEventListener('click', function(){
    SlideNumber-=1
    if(SlideNumber<0){
        SlideNumber = SlidesLength
    }else if(SlideNumber>SlidesLength){
        SlideNumber = 0
    }
    console.log("real"+SlideNumber)
    l = SlideNumber+1
    if(l>SlidesLength){
        l = 0
    }
    console.log("past"+l)
    Slides[SlideNumber].classList.add("active")
    Slides[l].classList.remove("active")
})



Right_Arrow.addEventListener('click', function Right_Arrow(){
    SlideNumber+=1
    if(SlideNumber > SlidesLength){
        SlideNumber = 0
    }
    l = SlideNumber-1
    if(l>SlidesLength){
        l = 0
    }else if(l<0){
        l=SlidesLength
    }
    console.log("real"+SlideNumber)
    console.log("past"+l)
    Slides[SlideNumber].classList.add("active")
    Slides[l].classList.remove("active")
  })
  