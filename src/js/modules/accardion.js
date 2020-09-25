export default class Accardion {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    init() {

        this.triggers.forEach(triger => {
            const accordBody = triger.nextElementSibling,
                  svgPlus = triger.querySelector('svg path:first-child');
            triger.addEventListener('click', ()=>{

                accordBody.classList.toggle('show');
                if (accordBody.classList.contains('show')) {
                    triger.querySelector('svg path:first-child').remove();
                } else {
                    triger.querySelector('svg').prepend(svgPlus);
                    
                }
            });
        });
    }
}