<?php

// ATTACK
$attack = $_POST['attack'];
$majorAttack = $_POST['majorAttack'];
$url = $_POST['url'];
$date = $_POST['date'];
$inputtype = $_POST['inputType'];

// ATTACKER
$browserName = $_POST['browserName'];
$fullVersion = $_POST['fullVersion'];
$majorVersion = $_POST['majorVersion'];
$ip = $_POST['userip'];

// WEBSITE OWNER
$mailTo = $_POST['email'];

//SET UP AN EMAIL
$nameFrom = $majorAttack." detected!!";
$headers = "From: webattack@noreply.com";
$text = "Hello,\n\nWe've detected a ".$majorAttack." attack at your website. Below are the details.\n\nAttack: ".$attack."\nInput type: ".$inputtype."\nWebsite: ".$url."\nDate: ".$date."\nBrowser: ".$browserName."\nMajor browser version: ".$majorVersion."\nFull browser version: ".$fullVersion."\nIP-Address: ".$ip;

// SEND MAIL
mail($mailTo, $nameFrom, $text, $headers);

?>
