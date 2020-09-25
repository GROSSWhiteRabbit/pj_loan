export default class Slider {
    constructor({container=null,
        btnsNext = null,
        btnsPrev = null,
         next=null,
         prev=null,
        activeClass,
        animated,
    autoPlay} = {}){
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;} catch(e){}
        this.btnsNext = document.querySelectorAll(btnsNext);
        this.btnsPrev = document.querySelectorAll(btnsPrev);
        this.popupBlock = document.querySelector('.hanson');
        this.next = document.querySelectorAll(next);
        this.prev = document.querySelectorAll(prev);
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.animated = animated;
        this.autoPlay = autoPlay;
    }

    
}