<?php


$servername = "localhost";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=constructn", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $name = $_POST['contact_name'];
    $email =$_POST['contact_email'];
    $phone = $_POST['contact_phone'];
    $message = $_POST['contact_message'];
    $sql = "INSERT INTO `contact_form`(`name`, `email`, `phone`, `message`) VALUES ('".$name."','".$email."','".$phone."','".$message."')";
    if($conn->exec($sql)){
      $msg_array = array( 'status' => 'true', 'data' => '<i class="glyphicon glyphicon-ok"></i> Thank you ' .$name. '. Your Email was successfully sent!' );
      echo json_encode($msg_array);

  }
    }
catch(PDOException $e)
    {
    $msg= "Connection failed: " . $e->getMessage();
    }

?>
