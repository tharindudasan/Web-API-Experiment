const ball = document.getElementById('cursor');
let tmId = null;
addEventListener('mousemove', (eventData) => {
    ball.style.left = `${eventData.pageX}px`;
    ball.style.top = `${eventData.pageY}px`;
    if (tmId) {
        clearTimeout(tmId);
        tmId = null;
    }
    ball.style.opacity = 1;
    // clearTimeout(ballElm);
    console.log('ball waren');
    ballElm = setTimeout(() => {
        ball.style.opacity = 0;
        console.log('ball  nati una');
    }, 5000);
});

document.body.addEventListener('mouseleave', () => {
    ball.style.opacity = 0;


});
document.body.addEventListener('mouseenter', () => {
    ball.style.opacity = 1;
});
// let x = 0;
// const tmrId = setTimeout(() => {
//     console.log('Bombe pipuruwa');
// }, 5000);

// const stopBtn = document.querySelector('#btn');
// stopBtn.addEventListener('click', () => {
//     clearTimeout(tmrId);
//     console.log('Niskiriya kara atea')
// });




