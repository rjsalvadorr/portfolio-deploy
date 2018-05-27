<?php
	header('Content-Type: application/json');
	header("Access-Control-Allow-Origin: *");
	$indicatorText = "ELEGANT AND GRACEFUL";
	$mainText = "Quick, put on your powdered wig! Because Radio Flipsnèque is playing music from the 80's. The 1780's, of course.";
	$buttonText = "Partake in the musick of true aristocrats";
	$obj = array("indicatorText" => $indicatorText, "mainText" => $mainText, "buttonText" => $buttonText);
	print json_encode($obj, JSON_UNESCAPED_UNICODE);
?>