<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$data=json_decode(file_get_contents("php://input"));
$idQuestion=$data->idQuestion;
$reponse=$data->reponse;
$nom=$data->username;
$posted=date('Y-m-d h:m:i A').PHP_EOL;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('insert into reponses (idQuestion,nom,reponse,likes,posted) values ("'.$idQuestion.'","'.$nom.'","'.$reponse.'","22","'.$posted.'");');
 $req->execute();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
}catch(PDOException $e){
 $response['data']=array('status'=>'not ok');
   echo json_encode($response);
}



?>