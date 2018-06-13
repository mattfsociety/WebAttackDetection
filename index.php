<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>

    <script type="text/javascript" src="https://l2.io/ip.js?var=userip"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://smtpjs.com/v2/smtp.js"></script>
</head>

<body>
<header>
    <nav>
        <ul>
            <li><a href="index.php">Login</a></li>
        </ul>
    </nav>
</header>

<h1>Login</h1>

<main>
    <form>
        <p>Username</p>
        <input type="text" class="detection"><br>
        <p>Password</p>
        <input type="text" class="detection"><br><br>
        <button type="button" onclick="detectAttack()" href="javascript:void(0)">Login</button>
    </form>

    <script type="text/javascript" src="detector.js"></script>



</main>
</body>
</html>
