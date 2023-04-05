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
$typecour=$data->typecour;
$idprof=$data->idprof;
$date=date('Y-m-d h:m:i A').PHP_EOL;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 if(isset($NomCour)){
 $req = $db->prepare('insert into cours (NomCour,Semester,module,id_filiere,date,path,type,id_prof) values (:NomCour,:Semester,:courModule,:courFiliere,:date,:path,:typecour,:idprof);');
 $req->bindValue(':NomCour',$NomCour);
 $req->bindValue(':Semester',$coursemester);
 $req->bindValue(':courModule',$courModule);
 $req->bindValue(':courFiliere',$courFiliere);
 $req->bindValue(':date',$date);
 $req->bindValue(':path',$path);
 $req->bindValue(':typecour',$typecour);
 $req->bindValue(':idprof',$idprof);
 $req->execute();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
  }
}catch(PDOException $e){
 $response['data']=$e;
   echo json_encode($response);
}



?>