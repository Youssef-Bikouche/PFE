<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

$method=$_SERVER['REQUEST_METHOD'];
if($method=="POST"){
  $data=json_decode(file_get_contents("php://input"));
  $username=$data->username;
  $password=$data->password;
 try{ $db = new PDO('mysql:host=localhost;dbname=pfe', 'root', '');
  $req = $db->prepare('select username,id,role from users where username=:username and password=:password');
  $req ->bindValue(":username",$username);
  $req ->bindValue(":password",$password);
  $req->execute();
  $res = $req->fetchAll();

if($res!=null){
   if(isset($res) && $res[0][0]==$username){
    $response['data']=array('status'=>'valid','id'=>$res[0][1],'role'=>$res[0][2]);
    echo json_encode($response);
  } else {
    // Return error message
    $response['data']=array('status'=>'invalid');
    echo json_encode($response);
  }
}
else{
  $response['data']=array('status'=>'invalid');
  echo json_encode($response);
}
}catch(PDOException $e){
  $response['data']=array('status'=>'error in connection');
    echo json_encode($response);
}

}
?>