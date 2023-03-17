const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
}) 
const nav = document.querySelectorAll('nav')
nav.forEach((el) => observer.observe(el))
const main = document.querySelectorAll('main')
main.forEach((el) => observer.observe(el))
const images = document.querySelectorAll('.images')
images.forEach((el) => observer.observe(el))
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const click = () => {
    burger.classList.toggle('close')
    menu.classList.toggle('open')
}
burger.addEventListener("click", click)