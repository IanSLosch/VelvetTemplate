<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {
	require("class.phpmailer.php"); //you have to download this plugin from github.com - link is in documentation
	
	$name = 	$_POST['name'];
	$email = 	$_POST['email'];
	$phone = 	$_POST['phone'];
	$message = 	$_POST['message'];
	
	$mail = new PHPMailer();
	
	$mail->From = $email;
	$mail->CharSet = "UTF-8";
	$mail->FromName = $email;
	$mail->addAddress("youremail@company.com"); 
	
	$mail->IsHTML(true);
	$mail->Subject = $name." sent you an email";
	
	$mail->Body = $message."<br><br>".$name."<br>".$email."<br>".$phone."<br>";

	$mail->send();
}
?>   
            