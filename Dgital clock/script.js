const clock =document.getElementById('clock');
// document.querySelector('#clock')


setInterval(() => {
    let date = new Date();
// console.log(date.toLocaleDateString());
clock.innerHTML = date.toLocaleTimeString();
// clock.innerHTML = date.toLocaleDateString();


}, 1000);