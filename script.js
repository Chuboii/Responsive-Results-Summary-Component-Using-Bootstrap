let num = document.querySelector(".num")
let count = 0

function incre() {
    setInterval(()=>{
    if (count <= 76) {
        num.innerHTML = count++
    }
}, 10)
}

window.addEventListener("load", incre)