function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    let schimb = e.keyCode;
    schimb100 = schimb + 100;


    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const audio2 = document.querySelector(`audio[data-key="${schimb100}"]`);



    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    if (!audio2) return;
    key.classList.add('playing');

    //timpul pentru reinceperea sunetului
    audio.currentTime = 0;
    audio2.currentTime = 0;

    let verificare = document.querySelector(`div[data-key="13"]`);
    let iHaveClass = verificare.classList.contains(`cheangeSong`);


    if (iHaveClass == true) {
        console.log(`are`);
        audio2.play();
    } else audio.play(), console.log(`NU are`);




};

function addClass(key1) {
    if (key1.keyCode == "13") {
        const cheangeClass = document.querySelector(`div[data-key="${key1.keyCode}"]`);
        //cheangeClass.classList.add('cheangeSong');
        cheangeClass.classList.toggle(`cheangeSong`)
    }
}





const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', addClass);




///add anader song 
// window.addEventListener(`keydown`, function (e) {

//     console.log(e.keyCode);
//     let der1 = e.keyCode;

//     let der = der1 + 100;
//     console.log(der1)
//     const audio = document.querySelector(`audio[data-key="${der}"]`);
//     console.log(der);

//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     key.classList.add('playing');

//     //timpul pentru reinceperea sunetului
//     audio.currentTime = 0;
//     audio.play();
// })


// function cheangeTheSong(x) {
//     console.log(x.keyCode)
//     if (x.keyCode === 13 || x.keyCode === 113) {
//         let der1 = x.keyCode;
//         let der = der1 + 100;
//         console.log(der)

//     } else console.log("nu este");

// }

//window.addEventListener('keydown', cheangeTheSong);

