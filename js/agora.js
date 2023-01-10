
// BARRA DE PROFISSAO 
const btn1 = document.querySelector('.design');
const btn2 = document.querySelector('.front');
const btn3 = document.querySelector('.back');
const btn4 = document.querySelector('.full');
const barra = document.querySelector('.select')

document.getElementById("default").click();

btn1.onclick = function(){
    this.classList.toggle('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');

    barra.classList.toggle('active1');
    barra.classList.remove('active2');
    barra.classList.remove('active3');
    barra.classList.remove('active4');
}

btn2.onclick = function(){
    this.classList.toggle('active');
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');

    barra.classList.remove('active1');
    barra.classList.toggle('active2');
    barra.classList.remove('active3');
    barra.classList.remove('active4');
}

btn3.onclick = function(){
    this.classList.toggle('active');
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn4.classList.remove('active');

    barra.classList.remove('active1');
    barra.classList.remove('active2');
    barra.classList.toggle('active3');
    barra.classList.remove('active4');
}

btn4.onclick = function(){
    this.classList.toggle('active');
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');

    barra.classList.remove('active1');
    barra.classList.remove('active2');
    barra.classList.remove('active3');
    barra.classList.toggle('active4');
}

const ux = document.querySelector('#ux-design')
const front = document.querySelector('#front-end')
const back = document.querySelector('#back-end')
const full = document.querySelector('#full-stack')

btn1.addEventListener('click', () => troca(ux, front, back, full))
btn2.addEventListener('click', () => troca(front, ux, back, full))
btn3.addEventListener('click', () => troca(back, front, ux, full))
btn4.addEventListener('click', () => troca(full, front, back, ux))

function troca (active, disable1, disable2, disable3){
    active.classList.add('active');
    disable1.classList.remove('active');
    disable2.classList.remove('active');
    disable3.classList.remove('active');
}





const icones = document.querySelectorAll('.box-skill');
const img = document.querySelectorAll('.box-skill img');

const iconescolors = ['html', 'css', 'javascript', 'react', 'bootstrap', 'java', 'git', 'sql', 'pen', 'photoshop', 'illustrator', 'after effects', 'premiere', 'figma', 'adobe xd', 'sketch']

icones.forEach(icon => { 
    icon.addEventListener('mouseover', () => {

        // switch(icon){

        //     case icones[0]: 
        //     img[0].src="/img/icons/html.png"
        //     break

        //     case icones[1]: 
        //     img[1].src="/img/icons/css.png"
        //     break

        //     case icones[2]: 
        //     img[2].src="/img/icons/javascript.png"
        //     break

        //     case icones[3]: 
        //     img[3].src="/img/icons/react.png"
        //     break

        //     case icones[4]: 
        //     img[4].src="/img/icons/bootstrap.png"
        //     break

        //     case icones[5]: 
        //     img[5].src="/img/icons/java.png"
        //     break

        //     case icones[6]: 
        //     img[6].src="/img/icons/git.png"
        //     break

        //     case icones[7]: 
        //     img[7].src="/img/icons/sql.png"
        //     break

        // }


        for(let i = 0; i <= icones.length; i++){

            if(icones[i] == icon ){

                img[i].src=`/img/icons/${iconescolors[i]}.png`
            }
        }
        

    })


    icon.addEventListener('mouseout', () => {

        // switch(icon){

        //     case icones[0]: 
        //     img[0].src="/img/iconsdark/html dark.png"
        //     break

        //     case icones[1]: 
        //     img[1].src="/img/iconsdark/css dark.png"
        //     break

        //     case icones[2]: 
        //     img[2].src="/img/iconsdark/javascript dark.png"
        //     break

        //     case icones[3]: 
        //     img[3].src="/img/iconsdark/react dark.png"
        //     break

        //     case icones[4]: 
        //     img[4].src="/img/iconsdark/bootstrap dark.png"
        //     break

        //     case icones[5]: 
        //     img[5].src="/img/iconsdark/java dark.png"
        //     break

        //     case icones[6]: 
        //     img[6].src="/img/iconsdark/git dark.png"
        //     break

        //     case icones[7]: 
        //     img[7].src="/img/iconsdark/sql dark.png"
        //     break

        // }


        for(let i = 0; i <= icones.length; i++){

            if(icones[i] == icon ){

                img[i].src=`/img/iconsdark/${iconescolors[i]} dark.png`
            }
        }

    })
})



// DARK MODE 
const btn = document.querySelector('.btn');
const html = document.querySelector('html');
const modelight = document.querySelector('#light');
const modedark = document.querySelector('#dark');

btn.onclick = function(){
    this.classList.toggle('active');
    html.classList.toggle('dark-mode');
    modelight.classList.toggle('active')
    modedark.classList.toggle('active')

}

var i = 1;
div_to_clone = jQuery('.projeto__imagem__bolinhaLinguagem');
for (i=1;i<10;i++){
  appendto = jQuery('.projeto__imagem__bolinhaLinguagem').eq(jQuery('.projeto__imagem__bolinhaLinguagem').length-1);
  div_to_clone.clone().appendTo(appendto);
}