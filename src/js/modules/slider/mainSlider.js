import Slider from './slider';

export default class MainSlider extends Slider  {
     constructor ( btnsNext, activeClass, btnsPrev) {
         super(btnsNext, activeClass, btnsPrev);
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
                if(this.popupBlock){
                    setTimeout(()=>{
                        this.popupBlock.style.opacity = '1';
                        this.popupBlock.classList.add('animated', 'fadeInUp');
    
                    },3000);
                }

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

    bindTriggers(){
        try{
            this.btnsPrev.forEach(btn =>{ 
                btn.addEventListener('click', (e)=>{
                    e.preventDefault();
                    this.plusSlide(-1);
                });
            });
        } catch(e){}
        this.btnsNext.forEach(btn => {
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                this.plusSlide(1);
            });
            if (btn.parentNode.previousElementSibling.classList.contains('logo')){

                btn.parentNode.previousElementSibling.addEventListener('click', ()=>{
                    this.showSlide(1);
                });
                
            }

        });
    }

    render(){
        try{ 
            if(this.container) {
                this.popupBlock = document.querySelector('.hanson');
            
                this.bindTriggers();
            // this.showSlide(this.slideIndex);
            }
        } catch(e ){console.error(e);}


        
    }
}