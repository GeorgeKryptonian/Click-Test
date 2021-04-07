let num = 0;
let c = document.querySelector('#click');
function isClick() {
    c.textContent = `${++num}`;
    console.log(num);
}
