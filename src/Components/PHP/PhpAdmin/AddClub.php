<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$data=json_decode(file_get_contents("php://input"));
$NomClub=$data->NomClub;
$infoClub=$data->infoClub;
$DomaineClub=$data->DomaineClub;
$ClubEmail=$data->ClubEmail;

try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('insert into clubs (nom,Presentation,Objectifs,Modalites) values ("'.$NomFiliere.'","'.$Presentation.'","'.$Objectifs.'","'.$Modalite.'");');
 $req->execute();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
}catch(PDOException $e){
 $response['data']=$e;
   echo json_encode($response);
}



?>