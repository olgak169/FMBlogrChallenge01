let helper = document.getElementById('width')
window.addEventListener('resize', () => {
helper.innerHTML = window.innerWidth;
})
let close_btn = document.querySelector('.menu-close')
let open_btn = document.querySelector('.menu-open')
let nav = document.querySelector('nav')
let links = document.querySelectorAll('.nav-link')

open_btn.addEventListener('click', () => {
    open_btn.style.display = 'none'
    close_btn.classList.add('open')
    nav.classList.add('open')
})

close_btn.addEventListener('click', () => {
    open_btn.style.display = 'block'
    close_btn.classList.remove('open')
    nav.classList.remove('open')
    closeLinks()
})

links.forEach((link) => {

    link.addEventListener('click', () => {
        closeLinks()
        openLinks(link)
    })
})

function openLinks(link_active) {
    let arrow = link_active.parentNode.querySelector('.img-mobile')
    let sub_menu = link_active.parentNode.querySelector('.sub-nav')
    arrow.classList.add('rotate')
    sub_menu.style.display = 'block'
    link_active.classList.add('active')
}

function closeLinks() {
    links.forEach((link) => {
        let arrow = link.parentNode.querySelector('.img-mobile')
        let sub_menu = link.parentNode.querySelector('.sub-nav')
        link.classList.remove('active')
        arrow.classList.remove('rotate')
        sub_menu.style.display = 'none'
    })
}
