document.addEventListener("keydown", (e)=>{
    console.log(e)
    if(e.key === "b"){
        document.body.style.background = "#000"
    }
    if(e.key === "y"){
        document.body.style.background = "yellow"
    }
})


const btn = document.querySelector("button")


btn.addEventListener('keyup', (e)=>{
    console.log(e.key);
    
    fave()
})




const fave = ()=>{
    console.log("we are the people!")
}