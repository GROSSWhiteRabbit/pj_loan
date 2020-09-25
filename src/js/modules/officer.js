export default class Officer {
    constructor({container, trigger}) {
        this.container = document.querySelector(container); 
        try{
            this.items = this.container.querySelectorAll('.officer__card-item');
            this.trigger = this.container.querySelector(trigger);
        } catch(e){}
        this.indexNextItem = 0;
    }

    bindTriger() {
        this.trigger.addEventListener('click', ()=>{
            this.showNextItem();
            
        });
    }
    showNextItem() {
        if ( this.indexNextItem < this.items.length-1) {
            this.items[this.indexNextItem].style.display = '';
            this.indexNextItem += 1;
            if ( this.indexNextItem == this.items.length-1) {
                this.items[this.indexNextItem].style.display = 'none';
            }
        }
    }

    init() {
        try {
            this.items.forEach((item, i) => {
                if (i != (this.items.length - 1) ){
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                }
                
            });
            this.bindTriger();
        } catch(e){}

    }
}
