<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
require_once("konekcija.php");

$stmt = $con->prepare("SELECT id, name, price, manufacturer, type FROM delovi");
$stmt->execute();

while($data = $stmt->fetch()) {
    $nesto[] = array('id' => $data["id"], 'name' => $data["name"], 'price' => $data["price"], 'manufacturer' => $data["manufacturer"], 'type' => $data["type"]);
        
}

echo json_encode($nesto);
?>
