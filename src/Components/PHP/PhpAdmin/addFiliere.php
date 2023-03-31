<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$data=json_decode(file_get_contents("php://input"));
$NomFiliere=$data->NomFiliere;
$Presentation=$data->Presentation;
$Objectifs=$data->Objectifs;
$Modalite=$data->Modalite;
$Poursuite=$data->Poursuite;
$ResponsableNom=$data->ResponsableNom;
$ResponsableEmail=$data->ResponsableEmail;
$diplome=$data->DiplomeType;
$imgPath=$data->imgPath;
/******************** */
$M1=$data->M1;
$M2=$data->M2;
$M3=$data->M3;
$M4=$data->M4;
$M5=$data->M5;
$M6=$data->M6;
$M7=$data->M7;
$M8=$data->M8;
$M9=$data->M9;
$M10=$data->M10;
$M11=$data->M11;
$M12=$data->M12;
$M13=$data->M13;
$M14=$data->M14;
$M15=$data->M15;
$M16=$data->M16;
/********************* */

if(isset($NomFiliere)){
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('insert into filiere (nom,Presentation,Objectifs,Modalites,Poursuite,Responsable,email,Diplome,pathImg) values ("'.$NomFiliere.'","'.$Presentation.'","'.$Objectifs.'","'.$Modalite.'","'.$Poursuite.'","'.$ResponsableNom.'","'.$ResponsableEmail.'","'.$diplome.'","'.$imgPath.'");');
 $req->execute();
 $req2 = $db->prepare('select id from filiere where nom="'.$NomFiliere.'" and Diplome="'.$diplome.'"');
 $req2->execute();
 $res = $req2->fetchAll();
  $id=$res[0]["id"];
 $req3 = $db->prepare('insert into semestres (id_filiere,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,M11,M12,M13,M14,M15,M16) values ("'.$id.'","'.$M1.'","'.$M2.'","'.$M3.'","'.$M4.'","'.$M5.'","'.$M6.'","'.$M7.'","'.$M8.'","'.$M9.'","'.$M10.'","'.$M11.'","'.$M12.'","'.$M13.'","'.$M14.'","'.$M15.'","'.$M16.'");');
 $req3->execute();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
}catch(PDOException $e){
 $response['data']=$e;
   echo json_encode($response);
}

}

?>