<?php 
header("Access-Control-Allow-Origin: *");
require_once("konekcija.php");

$stmt = $con->prepare("SELECT name, price, manufacturer, type FROM Delovi");
$stmt->execute();

while($data = $stmt->fetch()) {
    $nesto[] = array('name' => $data["name"], 'price' => $data["price"], 'manufacturer' => $data["manufacturer"], 'type' => $data["type"]);
        
}

echo json_encode($nesto);
?>
