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
// nav.forEach((el) => observer.observe(el))
const main = document.querySelectorAll('main')
main.forEach((el) => observer.observe(el))