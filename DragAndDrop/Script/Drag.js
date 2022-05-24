const Element = document.querySelectorAll("#Data")
const Drop = document.querySelectorAll("#Drop")


const Drag = (event) =>{
    event.dataTransfer.setData("text/html", event.target.id)
    //console.log(event.dataTransfer.setData("text/html", Element.id))
    //console.log(event.target.id)
    //console.log(event)
    console.log(event)
}

const AllowDrop = event =>{
    event.preventDefault()
    event.target.style.backgroundColor = "#f7f7f7"
}

const DragLeave = (event) =>{
    event.target.style.backgroundColor = "#fff"
    //console.log(event.dataTransfer.setData("text/html", Element.id))
    //console.log(event.target.id)
    //console.log(event)
}
const DragEnd= (event) =>{
    event.target.style.backgroundColor = "#343"
    //console.log(event.dataTransfer.setData("text/html", Element.id))
    //console.log(event.target.id)
    //console.log(event)
}


const Drops = event =>{
    event.preventDefault()
    Dropped = event.dataTransfer.getData("text/html")
    event.target.appendChild(document.getElementById(Dropped))
    event.target.style.backgroundColor = "#ffffff"
}

//Element.forEach(element => {
//    element.addEventListener("dragstart", Drag)
//});
//Drop.forEach(drop =>{
//    drop.addEventListener("dragover", AllowDrop)
//    drop.addEventListener("dragleave", DragLeave)
//    drop.addEventListener("drop", Drops)
//})
for(let i=0; i<Element.length; i++){
    Element[i].addEventListener("dragstart", Drag)
}

for(let i=0; i<Drop.length; i++){
    Drop[i].addEventListener("dragover", AllowDrop)
    Drop[i].addEventListener("dragleave", DragLeave)
    Drop[i].addEventListener("drop", Drops)
}
//Element.addEventListener("dragstart", Drag)
//Drop.addEventListener("dragover", AllowDrop)
//Drop.addEventListener("drop", Drops)
