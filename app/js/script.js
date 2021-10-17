
class mobileMenu {
    constructor()
    {
        this.body = document.querySelector('body');
        this.btnHamburger = document.querySelector('#btnHamburger'); 
        this.Header = document.querySelector('.header'); 
        this.overlay = document.querySelector('.overlay');
        this.fadeElems = document.querySelectorAll('.has-fade');
        this.event();
    }

    event()
    {
        this.btnHamburger.addEventListener('click', this.OpenOverlay.bind(this));
    }

    OpenOverlay()
    {
        if(this.Header.classList.contains('open')) // close menu
        {
            this.body.classList.remove('noscroll');
            this.Header.classList.remove('open');
            this.fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
            })
            
        }
        else
        {   
            this.body.classList.add('noscroll');
            this.Header.classList.add('open'); // open menu
            this.fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

            });
            
        }
    }
}

var HamburgerAnimation = new mobileMenu();