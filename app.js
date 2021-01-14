const hum_icon = document.querySelector('#nav-bar .nav-bar .nav-list .humburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');



hum_icon.addEventListener('click' , ()=>{
nav_list.classList.toggle('open');
hum_icon.classList.toggle('active');
});