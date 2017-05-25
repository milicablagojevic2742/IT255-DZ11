<?php 
header("Access-Control-Allow-Origin: *");
require_once("konekcija.php");

if ( isset($_POST['name']) && isset($_POST['price']) && isset($_POST['manufacturer']) && isset($_POST['type'])) {
    $name = $_POST['name'];
	$price = $_POST['price'];
	$manufacturer = $_POST['manufacturer'];
    $type = $_POST['type'];
	
    $stmt = $con->prepare("INSERT INTO Delovi (name, price, manufacturer, type) VALUES (:name, :price, :manufacturer, :type)");
	$stmt->bindParam(":name", $name);
    $stmt->bindParam(":price", $price);
    $stmt->bindParam(":manufacturer", $manufacturer);
    $stmt->bindParam(":type", $type);
    
    $stmt->execute();
    echo "Uspesan upis";
		
}

?>