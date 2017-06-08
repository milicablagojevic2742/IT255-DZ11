<?php 
	include("konekcija.php");
	
	if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     die();
	}
	
	function checkIfLoggedIn(){
		global $con;
		if(isset($_SERVER['HTTP_TOKEN'])){
			$token = $_SERVER['HTTP_TOKEN'];
			$result = $con->prepare("SELECT * FROM korisnici WHERE token=:token");
			$result->bindParam(":token",$token);
			$result->execute();
			if($data = $result->fetch() > 0)
			{
				return true;
			}
			else{   
				return false;
			}
		}
		else{
			return false;
		}
	}
	
	function login($username, $password){
		global $con;
		$rarray = array();
		if(checkLogin($username, $password)){
			$id = sha1(uniqid());
			$result2 = $con->prepare("UPDATE korisnici SET token=:token WHERE username=:username");
			$result2->bindParam(":token",$id);
			$result2->bindParam(":username",$username);
			$result2->execute();
			$rarray['token'] = $id;
		} else{
			header('HTTP/1.1 401 Unauthorized');
			$rarray['error'] = "Invalid username/password";
		}
		return json_encode($rarray);
	}


	function checkLogin($username, $password){
		global $con;
		$password = md5($password);
		$result = $con->prepare("SELECT * FROM korisnici WHERE username=:username AND password=:password");
		$result->bindParam(":username", $username);
		$result->bindParam(":password", $password);
		$result->execute();
		if($data = $result->fetch() > 0){
			return true;
		}
		else{   
			return false;
		}
	}

	function register($username, $password, $name, $lastname, $email, $phone){
		global $con;
		$rarray = array();
		$errors = "";
		if(checkIfUserExists($username)){
			$errors .= "Username already exists\r\n";
		}
		if(strlen($username) < 5 || $username == ""){
			$errors .= "Username must have at least 5 characters and cannot be empty\r\n";
		}
		if(strlen($password) < 5 || $password == ""){
			$errors .= "Password must have at least 5 characters and cannot be empty\r\n";
		}
		if(strlen($name) < 3 || $name == ""){
			$errors .= "Name must have at least 3 characters and cannot be empty\r\n";
		}
		if(strlen($lastname) < 3 || $lastname == ""){
			$errors .= "Last name must have at least 3 characters and cannot be empty\r\n";
		}
		if(strlen($email) < 3 || $email == ""){
			$errors .= "E-mail must have at least 3 characters and cannot be empty\r\n";
		}
		if($phone == ""){
			$errors .= "Phone cannot be empty\r\n";
		}
		if($errors == ""){
			$stmt = $con->prepare("INSERT INTO korisnici (username, password, name, lastName, email, phone) VALUES (:username, :password, :name, :lastName, :email, :phone)");
			$password =md5($password);
			$stmt->bindParam(":username", $username);
			$stmt->bindParam(":password", $password);
			$stmt->bindParam(":name", $name);
			$stmt->bindParam(":lastName", $lastname);
			$stmt->bindParam(":email", $email);
			$stmt->bindParam(":phone", $phone);
			if($stmt->execute()){
				$id = sha1(uniqid());
				$result2 = $con->prepare("UPDATE korisnici SET token=:token WHERE username=:username");
				$result2->bindParam(":token",$id);
				$result2->bindParam(":username",$username);
				$result2->execute();
				$rarray['token'] = $id;
			}else{
				header('HTTP/1.1 400 Bad request');
				$rarray['error'] = "Database connection error";
			}
		} else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = json_encode($errors);
		}
		
		return json_encode($rarray);
	}
 
	function checkIfUserExists($username){
		global $con;
		$result = $con->prepare("SELECT * FROM korisnici WHERE username=:username");
		$result->bindParam(":username",$username);
		$result->execute();
		if($data = $result->fetch() > 0)
		{
			return true;
		}
		else{   
			return false;
		}
	}
	
	function dodajDelove($name, $price, $manufacturer, $type){
    global $con;
    $rarray = array();
    if(checkIfLoggedIn()){
		$stmt = $con->prepare("INSERT INTO delovi (name, price, manufacturer, type) VALUES (:name, :price, :manufacturer, :type)");
		$stmt->bindParam(":name", $name);
		$stmt->bindParam(":price", $price);
		$stmt->bindParam(":manufacturer", $manufacturer);
		$stmt->bindParam(":type", $type);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
    }

    function getDeo($id){
        global $con;
        $rarray = array();
        if(checkIfLoggedIn()){
			$result = $con->prepare("SELECT * FROM delovi WHERE id=:id");
			$result->bindParam(":id", $id);
			$result->execute();
			while($row = $result->fetch()) {
				$one_deo = array();
				$one_deo['id'] = $row['id'];
				$one_deo['name'] = $row['name'];
				$one_deo['price'] = $row['price'];
				$one_deo['manufacturer'] = $row['manufacturer'];
				
			}
			$rarray['red'] = $one_deo;
			return json_encode($rarray);
		}
	}

    function deleteDeo($id){
        global $con;
        $rarray = array();
        if(checkIfLoggedIn()){
            $result = $con->prepare("DELETE FROM delovi WHERE id=:id");
            $result->bindParam(":id",$id);
            $result->execute();
            $rarray['success'] = "Deleted successfully";
        }
        else{
            $rarray['error'] = "Please log in";
            header('HTTP/1.1 401 Unauthorized');
        }
        return json_encode($rarray);
    }
	
	function promeniDeo($id, $name, $price, $manufacturer, $type){
    global $con;
    $rarray = array();
    if(checkIfLoggedIn()){
		$stmt = $con->prepare("UPDATE delovi SET name=:name, price=:price, manufacturer=:manufacturer, type=:type WHERE id=:id");
		$stmt->bindParam(":id", $id);
		$stmt->bindParam(":name", $name);
		$stmt->bindParam(":price", $price);
		$stmt->bindParam(":manufacturer", $manufacturer);
		$stmt->bindParam(":type", $type);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}
	
?>