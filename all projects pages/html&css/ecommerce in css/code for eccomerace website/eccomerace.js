var bar = document.getElementById('bar');
var close = document.getElementById('close')
var nav = document.querySelector('.navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// var bar = document.getElementById('bar');
// var nav = document.querySelector('.navbar'); // Use querySelector to select by class
// var close = document.getElementById('close'); // Add a variable for the close button

// if (bar && nav && close) { // Check if elements exist
//     bar.addEventListener('click', () => {
//         nav.classList.toggle('active'); // Toggle the "active" class on the navbar
//     });

//     close.addEventListener('click', () => {
//         nav.classList.remove('active'); // Remove the "active" class on the navbar to hide it
//     });
// }
