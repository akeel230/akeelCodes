const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}
//typing animation

const texts = ['Software Engineer' , 'IT Student' , 'Writer' , 'Volunteer worker'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
 if (count === texts.length){
   count = 0;
 }
 currentText = texts[count];
 letter = currentText.slice(0, ++index);

 document.querySelector('.typing').textContent = letter;
 if(letter.length === currentText.length){
   count++;
   index = 0;
 }
 setTimeout(type,300)
}());

PageTransitions();