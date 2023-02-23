<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );
$method=$_SERVER['REQUEST_METHOD'];
if($method=="POST"){
 $data=json_decode(file_get_contents("php://input"));
$username=$data->username;
$password=$data->password;

try{ $db = new PDO('mysql:host=localhost;dbname=react', 'root', '');
 $req = $db->prepare('insert into users (username,password) values("'.$username.'","'.$password.'");');
 $req->execute();
 $res = $req->fetchAll();
 $response['data']=array('status'=>'valid');
   echo json_encode($response);
}catch(PDOException $e){
 echo $e->getMessage();
 $response['data']=array('status'=>'invalid');
   echo json_encode($response);
}

}


?>