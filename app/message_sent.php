<!-- ! tab creates a new boiler plate -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- Tab icon image link -->
  <link rel="shortcut icon" type="image/png" href="img/Logo/DBJW_logo.png">

  <!-- FontAwesome style links https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself -->
  <link href="assets/fontawesome-free-5.12.0-web/css/all.css" rel="stylesheet">

  <!-- Ekko Lightbox style links https://cdnjs.com/libraries/ekko-lightbox -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" integrity="sha256-HAaDW5o2+LelybUhfuk0Zh2Vdk8Y2W2UeKmbaXhalfA=" crossorigin="anonymous" />

  <!-- Bootstrap CSS styles -->
  <link rel="stylesheet" href="css/bootstrap.css">

  <!-- Custom style sheet location -->
  <link rel="stylesheet" href="css/style.css">

  <!-- Add Bootstrap links https://getbootstrap.com/docs/4.4/getting-started/introduction/ -->
  <title>DBJW Webfolio | Message Sent</title>
</head>
<body>
  <!-- PHP FORM SEND SCRIPT START HERE -->

<?php
if(isset($_POST['email'])) {
 
    // Email send details along with the subject line
    $email_to = "joshua@advancedgraphics.com.au";
    $email_subject = "Email from DBJW Portfolio website";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

<!DOCTYPE html>
<html>

<!-- CONTENT START HERE -->

<!-- HEADER NAVIGATION START -->
<div class="container dropshadow">
  <!-- Image Carousel -->
  <div id="myCarousel" class="carousel slide d-sm-none d-md-block" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item item active">
        <img class="d-block img-fluid" src="img/Images/Carousel_images/Hand_sketching_MEDRES.jpg" alt="Sketching in a sketch book">
      </div>

      <div class="carousel-item item">
        <img class="d-block img-fluid" src="img/Images/Carousel_images/Graphic_Design_publication_MEDRES.jpg" alt="Graphic Design publication">
      </div>

      <div class="carousel-item item">
        <img class="d-block img-fluid" src="img/Images/Carousel_images/Web_development_MEDRES.jpg" alt="Web development coding">
      </div>

      <div class="carousel-item item">
        <img class="d-block img-fluid" src="img/Images/Carousel_images/DO_MORE_MEDRES.jpg" alt="DO MORE on computer screen">
      </div>
    </div>

    <!-- CONTROLS -->
    <a href="#myCarousel" class="carousel-control-prev" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>

    <a href="#myCarousel" class="carousel-control-next" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>

  <!-- Navigation -->
  <header id="main-header">
    <div class="row no-gutters">
      <div class="col-lg-5 logo-div bg-dark d-flex align-items-center justify-content-center">
        <img src="img/Logo/DBJW_logo.png" alt="Designs By Josh Wren logo">
      </div>

      <div class="col-lg-7">
        <div class="d-flex flex-column">

          <div class="pt-4 px-4 bg-dark text-orange text-uppercase  text-align-centre-xs text-md-center text-lg-left">
              <h1 class="display-4 font-weight-500">Josh Wren</h1>
          </div>

          <div class="py-3 px-4 bg-dark text-orange text-align-centre-xs text-md-center text-lg-left">
            <h3>DESIGNER // DEVELOPER</h3>
          </div>

          <div class="pb-4 pt-2 px-4 bg-dark text-orange text-align-centre-xs text-md-center text-lg-left">
              <a href="https://www.linkedin.com/in/joshua-wren/" class="text-orange">
                <i class="fab fa-linkedin fa-lg mr-3"></i>
              </a>

              <a href="https://www.facebook.com/joshua.wren.75" class="text-orange">
                <i class="fab fa-facebook fa-lg"></i>
              </a>
          </div>

          <div>
            <div class="d-flex flex-row text-white align-items-stretch text-center">
              <div class="port-item-contact p-4 bg-primary nav-div">
                <a href="index.html"></a>
                <i class="fas fa-home fa-2x d-block"></i>
                <span class="d-none d-sm-block">Take me home</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- HEADER NAVIGATION END -->

  <!-- CONTACT START -->
  <div id="contact">
    <div class="card card-body p-5">
      <div class="alert alert-success mt-4">
        <h4 class="alert-heading">Success!</h4>
        <p>Your message has been successfully sent.</p>
        <hr>
        <p class="mb-0">Thank you for contacting me. I will be in touch with you very soon.</p>
      </div>
    </div>
  </div>
  <!-- CONTACT END -->

  <!-- FOOTER START -->
  <footer id="main-footer" class="p-5 bg-dark text-white">
    <div class="row">
      <div class="col-md-6 text-md-left text-sm-center">
        <a href="img/CV/Joshua_Wren's_CV.pdf" target="blank" class="btn btn-outline-light">
          <i class="fas fa-cloud mr-2"></i>Download Resume
        </a>
      </div>

      <div class="col-md-6 text-md-right text-sm-center">
        <p>
          Copyright &copy; <span id="year"></span> DESIGNS BY JOSH WREN | ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  </footer>
  <!-- FOOTER END -->
</div>

<!-- Jquery JS (best to use the MINIFIED version) http://code.jquery.com/ -->
<script src="http://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

<!-- Bootstrap JS (best to not use the SLIM version as it will not include some effects) https://getbootstrap.com/docs/4.4/getting-started/introduction/ -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<!-- Ekko Lightbox JS (best to use the MINIFIED version) https://cdnjs.com/libraries/ekko-lightbox -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js" integrity="sha256-Y1rRlwTzT5K5hhCBfAFWABD4cU13QGuRN6P5apfWzVs=" crossorigin="anonymous"></script>

<!-- Your custom JS -->
<script>
  // Image Carousel script
  $('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
  });
  // Image Carousel image styles
  $.each( jQuery('.carousel .item'), function( i, val ) {
    $(this).css('background-image','url('+$(this).find('img').attr('src')+')').css('background-size','cover').find('img').css('visibility','hidden');
  });

  // This collapses other visible divs for the nav
  $('.port-item').click(function() {
    $('.collapse').collapse('hide');
  });

  // Ekko Lightbox initialising script
  $(document).on('click', '[data-toggle="lightbox"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });

  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());

  // Alert bar close script
  $('#myAlert').on('closed.bs.alert', function () {
    console.log('Alert closed...');
  })
</script>

</html>


<?php
}
?>

</body>