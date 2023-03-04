<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );
$data=json_decode(file_get_contents("php://input"));
$search=$data->searchFiliere;
try{ $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
  if($search===''){
    $req = $db->prepare('select * from questions order by posted desc');
  }
  else{
   $req = $db->prepare('select * from questions where filiere="'.$search.'"order by posted desc');
  }
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