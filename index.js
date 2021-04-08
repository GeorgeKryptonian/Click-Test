let num = 0;
let c = document.querySelector('#clickBtn');
let r = document.querySelector('#clickReload');
let w = document.querySelector('#wrapper');
function isClick() {
    c.textContent = `${++num}`;
    console.log(num);
    setTimeout(() => {
        w.classList.add('wrapper-col');
        c.classList.add('click-btn-orange');
        c.textContent = `${num / 10} CPS`;
        c.removeAttribute('onclick', isClick);
        r.hidden = false;
    }, 10000);
}
function isReload() {
    location.reload();
}
