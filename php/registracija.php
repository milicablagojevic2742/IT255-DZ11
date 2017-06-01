<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');  
include("funkcije.php");
 
if(isset($_POST['name']) && isset($_POST['lastName']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])&& isset($_POST['phone'])){
    
$name = $_POST['name'];
$lastname = $_POST['lastName'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$phone = $_POST['phone'];
echo register($username, $password, $name, $lastname, $email, $phone);
 
}
?>