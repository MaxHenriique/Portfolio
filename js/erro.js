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