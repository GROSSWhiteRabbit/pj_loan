import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(prev, next, container, animated) {
        super(prev, next, container, animated);
    }


    animate () {
        this.slides.forEach(slide => {
            
            slide.querySelector('.card__title').style.opacity = '0.4';
            slide.querySelector('.card__controls-arrow').style.opacity = '0';
        });
        this.slides[0].querySelector('.card__title').style.opacity = '1';
        this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }

    decorizeSlides (){

        this.slides.forEach(slide=> {
            slide.classList.remove(this.activeClass);
        });

        this.slides[0].classList.add(this.activeClass);
    }

    unlockTimerByMouse() {
        this.container.addEventListener('mouseenter', ()=>{
            clearInterval(this.timer);
        });

        this.container.addEventListener('mouseleave', ()=>{
            clearInterval(this.timer);
            this.timer = setInterval(()=>this.nextSlide(), 3000 );
        });
    }

    prevSlide() {
        this.container.prepend(this.slides[this.slides.length - 1]);
        this.slides.unshift(this.slides[this.slides.length - 1]);
        this.slides.pop(this.slides[this.slides.length - 1]);
        this.decorizeSlides ();
        if(this.animated) {
            this.animate();
        }
    }
    nextSlide() {
        this.container.append(this.slides[0]);
        this.slides.push(this.slides[0]);
        this.slides.shift(this.slides[0]);
        this.decorizeSlides ();
        if(this.animated) {
            this.animate();
        }
    }
    bindTriggers() {
        this.next.addEventListener('click', ()=>{
            this.nextSlide();
        });
        this.prev.addEventListener('click', ()=> {
            this.prevSlide();
        });
    }
    
    deliteBtnFromSlides() {
        const arr = [];
        this.slides.forEach(slide => {
            if (slide.tagName !== 'BUTTON'){
                arr.push(slide);
            }
        });
        this.slides = arr;
    }

    init(){
        this.deliteBtnFromSlides();
        this.decorizeSlides ();
        if(this.animated) {
            this.animate();
        }
        this.container.style.cssText =  `display: flex;
                                        overflow: hidden;
                                        flex-wrap: wrap;
                                        align-items: flex-start;`;
        this.bindTriggers();
        if(this.autoPlay) {
           this.timer = setInterval(()=>this.nextSlide(), 3000 );
           this.unlockTimerByMouse();
        }
    }
}