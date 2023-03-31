<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header ("Content-Type: application json; charset=UTF-8" );

  /****************** */
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
   // $data=json_decode(file_get_contents("php://input"));
    $imgFile = $_FILES["image"];
    if ($imgFile["error"] === UPLOAD_ERR_OK) {
     $response['data']=array('status'=>$imgFile);
     echo json_encode($response);
      $destination = 'C:\xampp\htdocs\pfe\public\Clubs\\' . $imgFile["name"];
      if (move_uploaded_file($imgFile["tmp_name"], $destination)) {
       $response['data']=array('status'=>'File saved successfully');
       echo json_encode($response);
      } else {
       $response['data']=array('status'=>'Error: Unable to save file.');
       echo json_encode($response);
      }
    } else {
     $response['data']=array('status'=>'Error: Error:');
     echo json_encode($response);
    }
  }

?>