<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$method=$_SERVER['REQUEST_METHOD'];
if($method=="POST"){
$data=json_decode(file_get_contents("php://input"));
$nom=$data->nom;
$prenom=$data->prenom;
$fil=$data->fil;
$idTournoi=$data->IdTournoi;
try{ 
  $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
  $VerfieUser='select reserver from tournoiplayers where nom=:nom and prenom=:prenom and id_tournament="'.$idTournoi.'"';
  $req = $db->prepare($VerfieUser);
  $req ->bindValue(":nom",$nom);
  $req ->bindValue(":prenom",$prenom);
  $req->execute();
  $res = $req->fetchAll();
  if($res!=null){
  $response['data']=array('status'=>'deja');
   echo json_encode($response);
  }
  elseif($res == null){
    $nbPlace='select place from tournoi where id=:idTournoi';
    $req = $db->prepare($nbPlace);
    $req->bindValue(":idTournoi",$idTournoi);
    $req->execute();
    $res = $req->fetchAll();
    if($res[0][0] > 0){
      $req = $db->prepare('insert into tournoiPlayers (id_tournament,nom,prenom,filiere,reserver) values ("'.$idTournoi.'",:nom,:prenom,:fil,"true");');
      $req->bindValue(":nom",$nom);
      $req->bindValue(":prenom",$prenom);
      $req->bindValue(":fil",$fil);
      $req->execute();
      $res = $req->fetchAll();
      $req1 = $db->prepare('UPDATE tournoi set place=( place - 1 ) where id="'.$idTournoi.'";');
      $req1->execute();
      $res1 = $req1->fetchAll();
      $response['data']=array('status'=>"ajouter");
      echo json_encode($response);
    }
    else{
      $response['data']=array('status'=>'0place');
      echo json_encode($response);
    }
  }
}catch(PDOException $e){
 echo $e->getMessage();
 $response['data']=array('status'=>'invalid');
   echo json_encode($response);
}

}


?>