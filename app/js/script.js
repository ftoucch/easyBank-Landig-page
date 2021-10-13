
class mobileMenu {
    constructor()
    {
        
        this.btnHamburger = document.querySelector('#btnHamburger'); 
        this.Header = document.querySelector('.header'); 
        this.overlay = document.querySelector('.overlay');
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
            this.Header.classList.remove('open');
            this.overlay.classList.remove('fade-in');
            this.overlay.classList.add('fade-out');
        }
        else
        {
            this.Header.classList.add('open'); // open menu
            this.overlay.classList.remove('fade-out');
            this.overlay.classList.add('fade-in');

        }
    }
}

var HamburgerAnimation = new mobileMenu();