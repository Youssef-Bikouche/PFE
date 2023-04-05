<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );
$data=json_decode(file_get_contents("php://input"));
$id=$data->id;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('select COUNT(reponse) from reponses inner join questions on reponses.idQuestion = questions.id where reponses.idQuestion=:id;');
 $req ->bindValue(":id",$id);
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