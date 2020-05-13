<?php
// header('Access-Control-Allow-Origin: http://sunny-yoga.net');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json,charset=urt-8');

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

$response;

$sql = "SELECT * FROM status WHERE ID=0";
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) {
    $response->Month = $row['Month'];
    $response->Announcement = $row['Announcement'];
}

$sql = "SELECT * FROM teacher";
$result = $conn->query($sql);
$teachers = array();
while($row = $result->fetch_assoc()) {
    array_push($teachers, $row);
}
$response->teachers = $teachers;

$sql = "SELECT * FROM class";
$result = $conn->query($sql);
$classes = array();
while($row = $result->fetch_assoc()) {
    array_push($classes, $row);
}
$response->classes = $classes;

$sql = "SELECT * FROM office";
$result = $conn->query($sql);
$offices = array();
while($row = $result->fetch_assoc()) {
    array_push($offices, $row);
}
$response->offices = $offices;

echo json_encode($response);