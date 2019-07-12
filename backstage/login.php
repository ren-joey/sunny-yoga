<?php
$account = $_POST['account'];
$password = $_POST['password'];

if ($account === 'root' && $password === 'sunnyyoga') {
    header("Location: classEditor.php");
} else {
    echo '帳號或密碼錯誤';
}