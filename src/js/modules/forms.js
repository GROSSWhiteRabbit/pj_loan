
export default class Forms {
    constructor(formsSelector) {
        this.forms = document.querySelectorAll(formsSelector);
        this.path = 'assets/question.php';
        this.message = {
            loading: 'Loading...',
            success: 'OK!!',
            failure: 'Oops!! Failed!!',
        };
        this.emailImputs = document.querySelectorAll('[name="email"]');
    }

    maskForPhone(){
        function setCursorPosition(pos, elem){
            elem.focus();
            console.log(elem);
    
            if(elem.setSelectionRange) {
                elem.setSelectionRange(pos,pos);
            } else {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }
    
        function createMask(event){
            
            let matrix = '+1 (___) ___-____',
            i = 0,
            dif = matrix.replace(/\D/gi, ''),
            val = this.value.replace(/\D/gi, '');
    
            if(val.length <= dif.length){
                val = dif;
            }
            this.value =  matrix.replace(/./ig, function(a) {
    
              return  /[_\d]/.test(a) && i<val.length ? val.charAt(i++): i >= val.length ? '' : a;
            });
    
            if (event.type == 'blur') {
                if(this.value.length === 2) {
                    this.value = '';
                }
            }else {
                setCursorPosition(this.value.length, this);
            }
    
        }
        const inputs = document.querySelectorAll('[name="phone"]');
            inputs.forEach(input => {
                input.addEventListener('focus', createMask);
                input.addEventListener('input', createMask);
                input.addEventListener('blur', createMask);
                input.addEventListener('click', createMask);
            });
    }
    
    prohibitCyrillicForEmail(){
        this.emailImputs.forEach(imput=>{
            imput.addEventListener('input', ()=>{
                imput.value = imput.value.replace(/[а-я ё]/gi, '');
            });
        });
        
    }

   async postData(url, data) {
     let  response = await fetch(url, {
                                            method: 'POST',
                                            body: data
                                        });
     if(!response.ok) {
            throw(`POST Erorr url:${url}  status:${response.status}`);
        }
     return await response.text();
    }

    bindForm() {
        this.prohibitCyrillicForEmail();
        this.maskForPhone();
        this.forms.forEach(form=>{
            form.addEventListener('submit', (e)=> {

                e.preventDefault();


                const messageBlock = document.createElement('div'),
                      dataForm = new FormData(form);


                form.append(messageBlock);
                messageBlock.style.cssText = `
                color:#9ec73d; 
                text-align:center;
                font-size: 58px`;

                messageBlock.textContent = this.message.loading;

                




                this.postData(this.path, dataForm)
                .then((res)=>{
                    console.log(res);
                    messageBlock.textContent = this.message.success;
                }).catch((e)=> {
                    console.error(e); 
                    messageBlock.textContent = this.message.failure;
                }).finally(()=>{
                    form.reset();
                    setTimeout(()=>{
                        messageBlock.remove(); 
                    }, 3000);
                });
            });
        });
    }
}