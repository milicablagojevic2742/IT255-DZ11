<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
	include("funkcije.php");
	
	if (isset($_POST['id']) && isset($_POST['name']) && isset($_POST['price']) && isset($_POST['manufacturer']) && isset($_POST['type'])) {
		$id = $_POST['id'];
		$name = $_POST['name'];
		$price = $_POST['price'];
		$manufacturer = $_POST['manufacturer'];
		$type = $_POST['type'];
		
		echo promeniDeo($id, $name, $price, $manufacturer, $type);
	}
?>