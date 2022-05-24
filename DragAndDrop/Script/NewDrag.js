const Element = document.querySelectorAll("#Data")
const Drop = document.querySelectorAll("#Drop")

let DraggedItem = null
for(let i=0; i<Element.length; i++){
    const Item = Element[i]
    Item.addEventListener("dragstart", () =>{
        console.log("DragStart")
        DraggedItem = Item
        console.log(DraggedItem)
        setTimeout(()=>{
            Item.style.display = "none"
        },0)
    })
    Item.addEventListener("dragend", ()=>{
        console.log("dragend")
        setTimeout(()=>{
            DraggedItem.style.display = "block"
            DraggedItem = null
        },0)
    })

    for (let j=0; j<Drop.length; j++){
    const list = Drop[j]

    list.addEventListener("dragover", (e)=>{
        e.preventDefault()
    })
    list.addEventListener("dragenter", (e)=>{
        e.preventDefault()
    })
    list.addEventListener("drop", ()=>{
        console.log("Drop")
        list.append(DraggedItem)
    })
    }
}