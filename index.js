const item = document.getElementById("-items")
const toggle = document.getElementById("-toggle")

toggle.addEventListener('click', mostrar)

function mostrar(){
    item.classList.toggle("open")
}