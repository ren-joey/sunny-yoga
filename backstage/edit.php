<?php
// $posts = new stdClass();
// $method = $_POST('method');
// $data = json_decode($_POST['data']);

// $fp2 = fopen('test.json', 'w');
// fwrite($fp2, 'good');
// fclose($fp2);

if (isset($_POST['account']) && isset($_POST['password'])) {
    if ($_POST['account'] === 'admin' && $_POST['password'] === '12345678') {
        $fp = fopen('class.json', 'w');
        fwrite($fp, $_POST['data']);
        fclose($fp);

        echo '修改完成';
    } else {
        echo '帳號或密碼錯誤';
    }
} else {
    echo '請輸入帳號密碼';
}

// include $_POST['data'];
// include $data;