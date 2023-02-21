const moon = document.getElementById('moon');
const stars = document.getElementById('stars');
const mountains_behind = document.getElementById('mountains_behind')
const text = document.getElementById('text')


window.addEventListener('scroll', ()=>{
    const value = this.scrollY;
    stars.style.left = '${value*0.45}px';
    moon.style.top = '${value*1.05}px';
    mountains_behind.style.top = '${value*0.2}px';
    text.style.right = '$value*3}px';
    text.style.marginTop = '${value}px';
})