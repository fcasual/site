let sacrifice = document.querySelector('.sacrifice');
let header = document.querySelector('.header');
let html = document.querySelector('html');

sacrifice.onclick = function() {
    header.classList.remove('header');
    header.classList.add('header-demonic');
    header.textContent = 'вы пожертвовали ребенка';
};

document.querySelector('.sacrifice1').onclick = function(){
    document.querySelector('.sacrifice1').textContent = 'кликоблуд';
};
