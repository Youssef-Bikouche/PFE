<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$data=json_decode(file_get_contents("php://input"));
$NomTournoi=$data->NomTournoi;
$infoTournoi=$data->infoTournoi;
$nbrPlace=$data->NbrPlace;
$Delais=$data->Delais;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 if(isset($NomTournoi)){
 $req = $db->prepare('insert into tournoi (nom,info,place,date) values ("'.$NomTournoi.'","'.$infoTournoi.'","'.$nbrPlace.'","'.$Delais.'");');
 $req->execute();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
  }
}catch(PDOException $e){
 $response['data']=$e;
   echo json_encode($response);
}



?>