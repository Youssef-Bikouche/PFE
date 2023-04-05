<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$method=$_SERVER['REQUEST_METHOD'];
if($method=="POST"){
$data=json_decode(file_get_contents("php://input"));
$user=$data->user;
$id=$data->id;
$comment=$data->comment;
$rating=$data->rating;
$posted=date('Y-m-d h:m:i A').PHP_EOL;
try{ 
 $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
 $req = $db->prepare('insert into reviews (id_user,user,comment,rating,posted) values("'.$id.'","'.$user.'",:comment,:rating,"'.$posted.'")');
 $req ->bindValue(":comment",$comment);
 $req ->bindValue(":rating",$rating);
 
 $req->execute();
 $res=$req->fetchAll();
 $response['data']=array('status'=>'ok');
   echo json_encode($response);
}catch(PDOException $e){
 $response['data']=array('status'=>'not ok');
   echo json_encode($response);
}

}


?>