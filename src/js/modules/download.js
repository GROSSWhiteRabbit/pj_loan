export default class Download {
    constructor (triggers) {
        this.triggers = document.querySelectorAll(triggers);
        this.path =  'assets/img/Bitmap.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', 'nice_pictures');
        link.style.display = 'none';

        document.body.append(link);
        link.click();
        link.remove();
    }

    init() {
        this.triggers.forEach((btn)=>{
            btn.addEventListener('click', ()=> {
                this.downloadItem(this.path);
            });
        });
    }
}