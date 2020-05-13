<?php
// header('Access-Control-Allow-Origin: http://sunny-yoga.net');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json,charset=urt-8');

if (isset($_POST, $_POST['day'], $_POST['time'], $_POST['place'])) {
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

    $day = $_POST['day'];
    $time = $_POST['time'];
    $place = $_POST['place'];
    $sql = "DELETE FROM class WHERE Day=$day AND Time='$time' AND Place=$place";
    $result = $conn->query($sql);

    echo 'success';
} else {
    echo 'error';
}