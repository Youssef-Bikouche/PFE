<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );
$data=json_decode(file_get_contents("php://input"));
$id=$data->id;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('DELETE from cours where id=:id');
 $req->bindValue(":id",$id);
 $req->execute();
 $response['data']=array('status'=>'valid delete');
   echo json_encode($response);
}catch(PDOException $e){
 echo $e->getMessage();
 $response['data']=array('status'=>'invalid');
   echo json_encode($response);
}
?>