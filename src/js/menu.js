const siteMenu = () => {
    // Get elemnts from DOM
    const menu = document.querySelector('.site-menu')
    const hamburger = document.querySelector('.site-menu__hamburger')

    // Toggle class
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--active')
    }

    // Add eventlistener
    hamburger.addEventListener('click', toggleMenu)

}

siteMenu()