class Modal {
    constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.events()
    }
  
    events() {
      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())
  
      // pushes any key
      document.addEventListener("keyup", e => this.keyPressHandler(e))
    }
  
    keyPressHandler(e) {
      if (e.keyCode == 27) {
        this.closeTheModal()
      }
    }
  
    openTheModal() {
      this.modal.classList.add("modal--is-visible")
    }
  
    closeTheModal() {
      this.modal.classList.remove("modal--is-visible")
    }
  
    injectHTML() {
      document.body.insertAdjacentHTML('beforeend', `
      <div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--blue section-title--less-margin">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="43.628px" height="41.677px" viewBox="3.98 -0.034 43.628 41.677" enable-background="new 3.98 -0.034 43.628 41.677"
            xml:space="preserve">
          <path d="M43.255,17.938c-1.868,0-3.448,1.182-4.066,2.834l-4.964-0.484c-0.098-2.43-1.252-4.584-3.024-6.012l3.468-5.789
            c0.382,0.109,0.777,0.187,1.194,0.187c2.404,0,4.354-1.949,4.354-4.354c0-2.404-1.949-4.354-4.354-4.354s-4.354,1.95-4.354,4.354
            c0,1.18,0.474,2.247,1.236,3.031l-3.459,5.772c-0.979-0.417-2.058-0.649-3.189-0.649c-1.947,0-3.733,0.685-5.135,1.825l-2.772-2.586
            c0.327-0.611,0.53-1.298,0.53-2.04c0-2.404-1.949-4.353-4.353-4.353c-2.404,0-4.353,1.949-4.353,4.353
            c0,2.404,1.949,4.353,4.353,4.353c0.85,0,1.636-0.253,2.306-0.674l2.768,2.583c-0.935,1.325-1.488,2.938-1.488,4.684
            c0,0.498,0.052,0.982,0.137,1.455l-6.112,2.008C11.201,22.89,9.862,22.1,8.334,22.1c-2.405,0-4.354,1.949-4.354,4.354
            c0,2.404,1.949,4.354,4.354,4.354s4.354-1.95,4.354-4.354c0-0.084-0.02-0.163-0.025-0.246l6.126-2.013
            c1.325,2.701,4.095,4.566,7.308,4.566c0.284,0,0.565-0.015,0.843-0.044l1.032,4.716c-1.4,0.725-2.368,2.169-2.368,3.854
            c0,2.404,1.949,4.354,4.354,4.354c2.404,0,4.354-1.95,4.354-4.354c0-2.339-1.847-4.231-4.159-4.335l-1.045-4.773
            c2.435-0.97,4.285-3.077,4.903-5.668l4.962,0.483c0.338,2.067,2.119,3.649,4.282,3.649c2.404,0,4.353-1.949,4.353-4.354
            S45.66,17.938,43.255,17.938z"/>
          </svg>
             Connect <strong>With Me</strong></h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">Connect with me in a different way!</p>
          </div>
    
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/joshua-wren/" class="social-icons__icon" target="blank"><img src="assets/images/icons/linkedin.svg" alt="Linkedin link"></a>
            <a href="https://www.facebook.com/joshua.wren.75" class="social-icons__icon" target="blank"><img src="assets/images/icons/facebook.svg" alt="Facebook link"></a>
            <a href="https://www.instagram.com/joshuawren4/" class="social-icons__icon" target="blank"><img src="assets/images/icons/instagram.svg" alt="Instagram link"></a>
            <a href="https://github.com/joshwren" class="social-icons__icon" target="blank"><img src="assets/images/icons/github.svg" alt="GitHub link"></a>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>
      `)
    }
  }

  
  export default Modal