<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("funkcije.php");


if ( isset($_POST['name']) && isset($_POST['price']) && isset($_POST['manufacturer']) && isset($_POST['type'])) {
    $name = $_POST['name'];
	$price = $_POST['price'];
	$manufacturer = $_POST['manufacturer'];
    $type = $_POST['type'];
	
    echo dodajDelove($name, $price, $manufacturer, $type);
		
}

?>