<?php
// header('Access-Control-Allow-Origin: http://sunny-yoga.net');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json,charset=urt-8');

if (isset($_POST, $_POST['id'], $_POST['name'], $_POST['teacher'], $_POST['day'], $_POST['time'], $_POST['degree'], $_POST['place'])) {
    $host = "db02x.coowo.com";
    $username = "sunnyyoga";
    $password = "5ng47lY*";
    $dbname = "sunnyyoga";

    $conn = new mysqli($host, $username, $password, $dbname);
    $conn->set_charset("utf8");

    // set the PDO error mode to exception
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_POST['id'];
    $name = $_POST['name'];
    $teacher = $_POST['teacher'];
    $day = $_POST['day'];
    $time = $_POST['time'];
    $degree = $_POST['degree'];
    $place = $_POST['place'];
    $desc = $_POST['description'];
    $sql = "SELECT * FROM class WHERE Day=$day AND Time='$time' AND Place=$place";
    $result = $conn->query($sql);
    $sql = "UPDATE class SET Name='$name',Teacher=$teacher,Degree=$degree,Description='$desc' WHERE Day=$day AND Time='$time' AND Place=$place";
    if ($result->num_rows > 0) {
        $sql = "UPDATE class SET Name='$name',Teacher=$teacher,Degree=$degree,Description='$desc' WHERE Day=$day AND Time='$time' AND Place=$place";
    } else {
        $sql = "INSERT INTO class VALUE ($id,'$name','$teacher',$day,'$time',$degree,$place,'$desc')";
    }
    $result = $conn->query($sql);

    echo 'success';
} else {
    echo 'error';
}