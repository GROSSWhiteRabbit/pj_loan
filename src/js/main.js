import MainSlider from './modules/slider/mainSlider';
import PlayVideo from './modules/playVideo';
import MiniSlider from './modules/slider/miniSlider';
import Officer from './modules/officer';

window.addEventListener('DOMContentLoaded', ()=>{
'use strict';

const slider = new MainSlider({container:'.page', btns:'.next'});
slider.render();
const player = new PlayVideo('.showup .play','.overlay');
player.init();

const showupSlider = new MiniSlider({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    animated: true
});

showupSlider.init();


const modulesSlider =  new MiniSlider({
    container: '.modules__content-slider',
    next: '.modules .slick-next',
    prev: '.modules .slick-prev',
    animated: true,
    autoPlay: true
});

modulesSlider.init();

const feedSlider =  new MiniSlider({
    container: '.feed__slider',
    next: '.feed .slick-next',
    prev: '.feed .slick-prev',
    activeClass: 'feed__item-active'
});

feedSlider.init();

new Officer({
    container: '.officerold', 
    trigger: '.card__click'
}).init();

new Officer({
    container: '.officernew', 
    trigger: '.card__click'
}).init();




});
