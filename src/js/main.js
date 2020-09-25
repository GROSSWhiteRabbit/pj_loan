import MainSlider from './modules/slider/mainSlider';
import PlayVideo from './modules/playVideo';
import MiniSlider from './modules/slider/miniSlider';
import Officer from './modules/officer';
import Forms from './modules/forms';
import Accardion from './modules/accardion';
import Download from './modules/download';

    window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';

    const slider = new MainSlider({container:'.page', btnsNext:'.next'});
    slider.render();

    const moduleSlider = new MainSlider({container:'.moduleapp', btnsNext:'.next', btnsPrev: '.prev' });
    moduleSlider.render();


    new PlayVideo('.showup .play','.overlay').init();
    new PlayVideo('.module__video-item .play','.overlay').init();


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

    new Forms('.form').bindForm();  

    new Accardion('.module__info-show').init();

    new Download('.download').init();


});
