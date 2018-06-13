<?php

// ATTACK
$attack = $_POST['Attack'];
$sort_attack = $_POST['sortAttack'];
$url = $_POST['url'];
$date = $_POST['date'];

// ATTACKER
$browserName = $_POST['browserName'];
$fullVersion = $_POST['fullVersion'];
$majorVersion = $_POST['majorVersion'];
$ip = $_POST['userip'];

// WEBSITE OWNER
$mailTo = $_POST['email'];

//SET UP AN EMAIL
$nameFrom = "SQL Injection detected!!";
$headers = "From: SQL-Detector@detection.com";
$text = "Attack = ".$attack;

// SEND MAIL
mail($mailTo, $nameFrom, $text, $headers);

?>
