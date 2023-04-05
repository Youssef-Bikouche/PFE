<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );
$data=json_decode(file_get_contents("php://input"));
$id=$data->filiereID;
$Typecour=$data->Typecour;
try{ $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('select * from cours where id_filiere="'.$id.'" and type=:Typecour order by module');
 $req ->bindValue(":Typecour",$Typecour);
 $req->execute();
 $res = $req->fetchAll();
 $response['data']=$res;
   echo json_encode($response);
}catch(PDOException $e){
 echo $e->getMessage();
 $response['data']=array('status'=>'invalid');
   echo json_encode($response);
}
?>