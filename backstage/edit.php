<?php
// $posts = new stdClass();
// $method = $_POST('method');
$data = json_decode($_POST['data']);

// $fp2 = fopen('test.json', 'w');
// fwrite($fp2, 'good');
// fclose($fp2);

$fp = fopen('class.json', 'w');
fwrite($fp, json_encode($data));
fclose($fp);
