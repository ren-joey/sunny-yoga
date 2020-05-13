<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json,charset=urt-8');

if (isset($_POST, $_POST['month'])) {
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

    $month = $_POST['month'];
    $sql = "UPDATE status SET Month=$month WHERE ID=0";
    $conn->query($sql);

    echo 'success';
} else {
    echo 'error';
}