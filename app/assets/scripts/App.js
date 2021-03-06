import '../styles/styles.css' // This adds in our CSS //
import 'lazysizes' // Lazy loading packaging import after 'npm install lazysizes'//
import MobileMenu from './modules/MobileMenu'
import ContactForm from './modules/ContactForm'
import LogoModals from './modules/LogoModals'
import CertificateModals from './modules/CertificateModals'
import BusinessModals from './modules/BusinessModals'
import BusinessDocsModals from './modules/BusinessDocsModals'
import InvitationsModals from './modules/InvitationsModals'
import PublicationsModals from './modules/PublicationsModals'
import WebModals from './modules/WebModals'
import InfoPublicationsModals from './modules/InfoPublicationsModals'
import ModelModals from './modules/ModelModals'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

// Create an Object for our imported js //
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".skills-item"), 75)
new RevealOnScroll(document.querySelectorAll(".qualifications"), 75)
new RevealOnScroll(document.querySelectorAll(".certificates__photo"), 75)
new RevealOnScroll(document.querySelectorAll(".work-history"), 75)

let mobileMenu = new MobileMenu();
let modal

// This will load in the Modal js only when clicked so it doesnt auto load //
document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault()
      if (typeof modal == "undefined") {
        import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        }).catch(() => console.log("There was a problem."))
      } else {
        modal.openTheModal()
      }
    })
  })

// alert("Hello, this is just a test!!!!!!!!") // Test alert for the initial configuration

if (module.hot) {
    module.hot.accept()
}