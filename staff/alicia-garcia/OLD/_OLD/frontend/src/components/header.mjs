const header = {
    mount: (parentNode, parentName) => {
        const header = document.createElement('header')
        header.className = 'header'

        const logo = parentName !== 'landing'
        switch (parentName) {
            case "home":
                //header de home
                const username = getLoggedUserUsername()
                const welcomeText = createTextContainer('p', `Welcome, ${username}`, '')
                const userButton = createButton(username[0].toUpperCase(), 'header__user-button', () => onUserMenuClick(parentNode))

                header.append(logo, welcomeText, userButton)
                break
            case "landing":
               const joinButton = createButton('Join in!',  function () { navigate('login', 'register') })

                header.appendChild(joinButton)
                break
            case "login":
            /*case "register":
                logo.addEventListener('click', () => navigate(parentName, 'landing'))

                header.appendChild(logo)
                break*/
            default:
                //otro
                break
        }

        parentNode.appendChild(header)
    }
}

export default header