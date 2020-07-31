<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'>
    
      <title>DBJW Webfolio</title>
    
      <!-- Tab icon image link -->
      <link rel="shortcut icon" type="image/png" href="assets/images/logos/DBJW_logo.png">
    
      <!-- Custom style sheet location -->
      <link rel="stylesheet" href="message-sent.css">
    
      <meta name="keywords" content="graphic design, website design, website development, great graphic design">
      <meta name="description" content="Designs by Josh Wren. Highly Experienced Graphic and Web Designer. Highly Experienced Web Developer.">
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

  <div class="message-sent">
    <!-- HEADER START -->
    <div class="message-sent__large-hero">
      
      <img src="assets/images/icons/message-sent.svg" class="message-sent__icon">

      <picture>
        <source srcset="
        assets/images/celebration_banner.jpg 1920w, 
        assets/images/celebration_banner.jpg 3840w" 
        media="(min-width: 1380px)"> <!-- Large screen sizes -->
        <source srcset="
        assets/images/celebration_banner.jpg 1380w, 
        assets/images/celebration_banner.jpg 2760w" 
        media="(min-width: 990px)"> <!-- Medium screen sizes -->
        <source srcset="
        assets/images/celebration_banner.jpg 990w, 
        assets/images/celebration_banner.jpg 1980w" 
        media="(min-width: 640px)"> <!-- Small screen sizes -->
        <img srcset="
        assets/images/celebration_banner.jpg 640w, 
        assets/images/celebration_banner.jpg 1280w" 
        alt="" class="message-sent__banner-image"> <!-- Smallest screen sizes -->
      </picture>
      <a href="index.html">
        <div class="message-sent__close">X</div>
      </a>
    </div>
    <!-- HEADER END -->
    <!-- TEXT START -->
    <div class="message-sent__content">
      <h2 class="message-sent-title"><strong>Success!</strong><br><span>Message Sent</span></h2>
      
      <p>Your message has been successfully sent.</p>
      <hr>
      <p>Thank you for contacting me. I will be in touch with you very soon.</p>

      <a href="index.html" class="btn__back">
          <p><span>&#8604;</span> Take me back</p> 
      </a>
    </div>
    <!-- TEXT END -->
  </div>
</div>
<!-- CONTENT END HERE -->

<!-- Your custom JS -->
<script>

</script>
</html>

<?php
}
?>

</body>
