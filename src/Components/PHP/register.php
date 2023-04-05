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
$nom=$data->nom;
$prenom=$data->prenom;
$email=$data->email;
try{ 
  $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
  $VerfieUser='select username from users where username=:username';
  $req = $db->prepare($VerfieUser);
  $req ->bindValue(":username",$username);
  $req->execute();
  $res = $req->fetchAll();
  if($res!=null){
 $response['data']=array('status'=>'username already exist');
   echo json_encode($response);
  }
  else{
 $req = $db->prepare('insert into users (nom,prenom,username,password,email,role) values(:nom,:prenom,:username,:password,:email,"etudiant");');
 $req ->bindValue(":nom",$nom);
 $req ->bindValue(":prenom",$prenom);
 $req ->bindValue(":password",$password);
 $req ->bindValue(":username",$username);
 $req ->bindValue(":email",$email);
 $req->execute();
 $res = $req->fetchAll();
 $response['data']=array('status'=>'valid');
   echo json_encode($response);
  }
}catch(PDOException $e){
 echo $e->getMessage();
 $response['data']=array('status'=>'invalid');
   echo json_encode($response);
}

}


?>