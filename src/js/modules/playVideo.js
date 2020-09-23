

export default class PlayVideo {
    constructor(trigers, overlay){
        this.btns = document.querySelectorAll(trigers);
        this.overlay = document.querySelector(overlay);
        this.close =  this.overlay.querySelectorAll('.close');
    }

    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
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
        console.log(this.btns);
        this.btns.forEach(btn => {
            btn.addEventListener('click', ()=>{
                if(this.path === btn.getAttribute('data-url')){
                    this.overlay.style.display = 'flex';
                } else {
                    this.path = btn.getAttribute('data-url');
                
                    this.createPlayer( this.path);
                   
                    this.overlay.style.display = 'flex';
                }
                
            });
        });
    }
    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTrigers();
        this.bindClose();

    }
    
}