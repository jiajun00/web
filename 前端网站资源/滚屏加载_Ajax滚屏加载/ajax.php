<?php

$host = "localhost";
$db_user = "sucaihuo";//用户名
$db_pass = "123456";//密码
$db_name = "demo";//数据库名

$link = mysql_connect($host, $db_user, $db_pass);
mysql_select_db($db_name, $link);
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");


$page = intval($_GET['page']);  //获取请求的页数 

$pagenum = 12; //每页数量
$start = ($page - 1) * $pagenum;
$query = mysql_query("SELECT * FROM food ORDER BY id ASC LIMIT $start," . $pagenum . "");
$arr = array();
while ($row = mysql_fetch_array($query)) {
    $arr[] = array(
        'id' => $row['id'],
        'title' => $row['title']
        
    );
}
if ($arr) {
    echo json_encode($arr);  //转换为json数据输出 
}
?>
