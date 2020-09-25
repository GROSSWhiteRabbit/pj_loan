

export default class PlayVideo {
    constructor(trigers, overlay){
        this.btns = document.querySelectorAll(trigers);
        this.overlay = document.querySelector(overlay);
        this.close =  this.overlay.querySelectorAll('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    onPlayerStateChange(state) {
        if (this.activeBtn.closest('.module__video-item') && this.activeBtn.closest('.module__video-item').getAttribute('data-disabled')  !== 'true') {
            if (state.data == 0) {
                if ( this.activeBtn.closest('.module__video-item').nextElementSibling.classList.contains('module__video-item')){
                    const nextElement = this.activeBtn.closest('.module__video-item').nextElementSibling,
                        svg = this.activeBtn.querySelector('svg').cloneNode(true);
                    nextElement.style.filter = 'none';
                    nextElement.style.opacity = '1';
                    nextElement.querySelector('.play__circle').classList.remove('closed');
                    nextElement.querySelector('svg').remove();
                    nextElement.querySelector('.play__circle').append(svg);
                    nextElement.querySelector('.play__text').textContent = 'play video';
                    nextElement.setAttribute('data-disabled', 'false');
                }
                
            }
        }
        
    }

    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
          });
          
    }
    bindClose() {
        this.close.forEach(clos => {
            clos.addEventListener('click', ()=>{
                this.overlay.style.display = 'none';
                this.player.pauseVideo();
            });
        });
    }

    bindTrigers() {
        this.btns.forEach((btn, i) => {
            try {
                const nextElement = btn.closest('.module__video-item').nextElementSibling;
                if (i%2 == 0) {
                    nextElement.setAttribute('data-disabled', 'true');
                }
            } catch(e){}

            btn.addEventListener('click', ()=>{
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled' ) != 'true' ){
                    this.activeBtn = btn;


                    if(this.path === btn.getAttribute('data-url')){
                        this.overlay.style.display = 'flex';
                    } else {
                        this.path = btn.getAttribute('data-url');
    
                        if(this.player) {
                            this.player.loadVideoById({videoId: this.path});
                            this.overlay.style.display = 'flex';
                        } else {
                            this.createPlayer( this.path);
                            this.overlay.style.display = 'flex';
                        }
                        
                    
    
                    }
                }
                
                
            });
        });
    }
    init() {
        if(this.btns.length>0) {
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            this.bindTrigers();
            this.bindClose();
        }
        

    }
    
}