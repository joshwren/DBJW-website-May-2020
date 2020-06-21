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
        <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
        <div class="wrapper wrapper--narrow">
          <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
        </div>

        <div class="wrapper">
          <form action="" class="contact-form">
            <div class="row row--gutters generic-content-container">
              <div class="row__col-md-6">
                <input type="text" name="name" placeholder="Your name" required>
                <input type="email" name="email" placeholder="Your email" required>
                <input type="tel" name="tel" placeholder="Your telephone number" required>
              </div>

              <div class="row__col-md-6">
                <div class="input-block">
                  <textarea name="comment" placeholder="Your comment" required></textarea>
                </div>
              </div>
            </div>

            <div class="row row__b-margin-med">
              <div class="row__col-md-12">
                <button class="btn btn--submit">Send</button>
              </div>
            </div>
          </form>
        </div>

        <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Connect <strong>with me</strong></h2>
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