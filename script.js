// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

let send = document.getElementById('contact_me');
let form = document.getElementById('contactForm');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

send.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('message');

    name = name.value;
    localStorage.setItem('name', name);
    
    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
    
})