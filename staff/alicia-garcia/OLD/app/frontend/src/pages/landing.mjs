import header from '../components/header.mjs';
import { createContainer, createTextContainer ,createButton} from '../lib.mjs'
import navigate from '../navigate.mjs';


const landing = {

    mount: (body) => {
        console.info('landing mounted')
        const generalLandingContainer = createContainer('');
        generalLandingContainer.id = 'landing'


        //var generalLandingContainer =createContainer('');//contendor landing 

        var landingContainer1 = createContainer('lanContainer_1');
        
        var landingContainer2 = createContainer('lanContainer_2');
    
        //div img de fondo opaca
        var backImage = document.createElement('div') //img 
        backImage.className = 'imgBack';
        
        //img icono principal
        var iconoImg = document.createElement('img') //img 
        iconoImg.className = 'icon';
        iconoImg.src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';

        // titulo principal
        var landingTitle = createTextContainer('h1', 'YOGA TERAPIA', 'titleLanding');
            
        //botón de inicio app llama vista siguiente
        var joinButton = createButton('COMENZAMOS!', 'joinButton', function () { navigate('landing', 'register') })

        landingContainer1.appendChild(iconoImg);
        landingContainer2.appendChild(landingTitle);
        landingContainer2.appendChild(joinButton);
        generalLandingContainer.append(backImage,landingContainer1,landingContainer2)
    
        body.appendChild(generalLandingContainer);
   
    },
    dismount: () => {
        console.info('landing dismounted')
        const landing = document.getElementById('landing');
        landing.remove()
    },
    update: (body) => {
        landing.dismount();
        landing.mount(body);
    },

}
/*
    function renderHomePage() {
        var homePage = createHomePage();
        body.appendChild(homePage)
    }

*/


export default landing
