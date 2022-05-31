const colors = ["green", "red", "blue", "yellow", "aquamarine", "blanchedalmond", 
                "maroon", "violet", "white", "black", "purple", "crimson",
                "chartreuse", "burlywood", "aqua", "pink"]
                
const btn = document.getElementById("btn")
btn.addEventListener("click", function (){
    const randomNumber = getrandomNumber();
    document.body.style.color = colors[randomNumber]
})
function getrandomNumber(){
    return Math.floor(Math.random() * colors.length)
} 