import Slider from './slider';

export default class MainSlider extends Slider  {
     constructor ( btn, activeClass) {
         super(btn, activeClass);
     }
     showSlide(n) {
        if (n > this.slides.length) {
            n = 1;
        }
        if (n < 1){
            n = this.slides.length;
        }
        try{
            if (n == 3) {
                setTimeout(()=>{
                    this.popupBlock.style.opacity = '1';
                    this.popupBlock.classList.add('animated', 'fadeInUp');

                },3000);
            } else {
                this.popupBlock.style.opacity = '0';
                this.popupBlock.classList.remove('fadeInUp');
            }

        } catch(e){}
        
        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('slideInUp');
        });
        this.slides[n-1].style.display = 'block';
        this.slides[n-1].classList.add('animated','slideInUp');
        this.slideIndex = n;
    }




    plusSlide(n) {
        this.showSlide(this.slideIndex + n);
    }
    render(){
        this.popupBlock = document.querySelector('.hanson');

        this.btns.forEach(btn => {
            btn.addEventListener('click', ()=>{
                this.plusSlide(1);
            });
            btn.parentNode.previousElementSibling.addEventListener('click', ()=>{
                this.showSlide(1);
            });
        });


        
    }
}