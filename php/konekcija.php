<?php
header("Access-Control-Allow-Origin: *");
try {
    $con = new PDO("mysql:host=localhost;dbname=it255-dz11", "root", "");
	$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
	echo "Error: " . $e->getMessage();
}
?>