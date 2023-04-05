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
$imgPath=$data->imgPath;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 if(isset($NomClub)){
 $req = $db->prepare('insert into clubs (titleClub,infoClub,domaine,email,imgClub) values (:titleClub,:infoClub,:domaine,:email,:imgClub);');
 $req->bindValue(":titleClub",$NomClub);
 $req->bindValue(":infoClub",$infoClub);
 $req->bindValue(":domaine",$DomaineClub);
 $req->bindValue(":email",$ClubEmail);
 $req->bindValue(":imgClub",$imgPath);
 $req->execute();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
  }
}catch(PDOException $e){
 $response['data']=$e;
   echo json_encode($response);
}



?>