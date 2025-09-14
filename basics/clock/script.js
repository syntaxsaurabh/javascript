let buttons = document.querySelectorAll('.buttons');
let body = document.querySelector('body'); 

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(event) {
        let color= event.currentTarget.id;
        body.style.backgroundColor=color;

        if (event.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        if (event.target.id === 'green') {
            body.style.backgroundColor = 'green';
        }
        if (event.target.id === 'black') {
            body.style.backgroundColor = 'black';
        }
    });
});