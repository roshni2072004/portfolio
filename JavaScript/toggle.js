const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('nav-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})