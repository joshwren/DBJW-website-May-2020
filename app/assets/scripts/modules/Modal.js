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
           viewBox="0 0 43.628 41.676" enable-background="new 3.981 -0.034 43.628 41.676"
          xml:space="preserve">
            <g>
              <circle cx="26.097" cy="20.618" r="8.144"/>
              <circle cx="43.255" cy="22.291" r="4.353"/>
              <circle cx="35.863" cy="4.32" r="4.354"/>
              <circle cx="14.367" cy="9.673" r="4.353"/>
              <circle cx="8.334" cy="26.454" r="4.354"/>
              <circle cx="29.958" cy="37.288" r="4.354"/>
              
                <line fill="none" stroke-width="2.2337" stroke-miterlimit="10" x1="8.334" y1="26.454" x2="26.098" y2="20.618"/>
              
                <line fill="none" stroke-width="2.2337" stroke-miterlimit="10" x1="14.367" y1="9.673" x2="26.098" y2="20.618"/>
              <line fill="none" stroke-width="2.2337" stroke-miterlimit="10" x1="26.098" y1="20.618" x2="35.864" y2="4.32"/>
              
                <line fill="none" stroke-width="2.2337" stroke-miterlimit="10" x1="43.255" y1="22.291" x2="26.098" y2="20.618"/>
              
                <line fill="none" stroke-width="2.2337" stroke-miterlimit="10" x1="29.958" y1="37.288" x2="26.33" y2="20.708"/>
            </g>
            </svg>
             Get in <strong>Touch</strong></h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
          </div>
    
          <div class="social-icons">
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>
      `)
    }
  }

  
  export default Modal