<?php
    $name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
    $tg = trim($_POST["telegram"]);

	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html;charset=utf-8 \r\n";

	$message = "<p>Lead</p>
    <p><strong>Name:</strong> $name</p>;
    <p><strong>Email:</strong> $email</p>;
	<p><strong>Telegram:</strong> $tg</p>";

	mail( "contact@paribus.io", "Paribus",
	    $message, $headers );
?>
