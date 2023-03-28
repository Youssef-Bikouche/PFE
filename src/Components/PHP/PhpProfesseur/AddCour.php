<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$data=json_decode(file_get_contents("php://input"));
$NomCour=$data->nomcour;
$coursemester=$data->courSemester;
$courModule=$data->courModule;
$courFiliere=$data->courFiliere;
$path=$data->pathcour;
$date=date('Y-m-d h:m:i A').PHP_EOL;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 if(isset($NomCour)){
 $req = $db->prepare('insert into cours (NomCour,Semester,module,id_filiere,date,path) values ("'.$NomCour.'","'.$coursemester.'","'.$courModule.'","'.$courFiliere.'","'.$date.'","'.$path.'");');
 $req->execute();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
  }
}catch(PDOException $e){
 $response['data']=$e;
   echo json_encode($response);
}



?>