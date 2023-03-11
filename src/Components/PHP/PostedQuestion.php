<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$method=$_SERVER['REQUEST_METHOD'];
if($method=="POST"){
 $data=json_decode(file_get_contents("php://input"));
$nom=$data->username;
$question=$data->QuestionPosed;
$filier=$data->selectedOption;
$id=$data->id;
$posted=date('Y-m-d h:m:i A').PHP_EOL;
try{ $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('insert into questions (nom,question,filiere,posted,id_User) values("'.$nom.'","'.$question.'","'.$filier.'","'.$posted.'","'.$id.'");');
 $req->execute();
 $res=$req->fetchAll();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
}catch(PDOException $e){
 $response['data']=array('status'=>'not ok');
   echo json_encode($response);
}

}


?>