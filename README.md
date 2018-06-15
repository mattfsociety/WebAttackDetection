# Web Attack Detection 
  
This README file is about the Web Attack Detection. The Web Attack Detection can detect a SQL Injection and XSS attack at your 
website and will send you an email when your website has been attacked. It can detect these attacks as well as via textfields as via the URL-bar.  
  
## Getting Started  
  
Follow the next steps to install the Web Attack Detection library correctly!  
  
### Installing  
  First, you have to make a 404 error page if you don't have this already. Make sure your .htaccess file knows this page.
  
  
Second, add these lines of code in the head-element of every page:  
  
```  
<script type="text/javascript" src="https://l2.io/ip.js?var=userip"></script>  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  
<script src="https://smtpjs.com/v2/smtp.js"></script>  
```  
  
After you downloaded the files to your server you have to make a link to the library (do this on every page).  
  
```  
<script type="text/javascript" src="detector.js"></script>  
```  
  
Give all the inputfields and textboxes you want to be detected for a web attack the same class, named 'detection'.  
Give the button that is connected to these input fields 'onclick="detectAttack()"'.  
  
```  
<input type="text" class="detection"><br>  
<button type="button" onclick="detectAttack()" href="javascript:void(0)">Login</button>  
```  
  
At this moment, the library can check all the inputfields and the URL-bar.
You just have to tell the library where he has to send an allert to. You can do this in de JavaScript file.  
In the top of the file is a var named 'email'. Change the hashtag to your email.  
  
```  
var email = "helloworld@gmail.com";  
```  
  
  
## And now?  
  
Congratulations! You correctly installed the Web Attack Detection tool!<br>  
Whenever someone puts malicious code in your inputfields that are connected to the library, you will get an alert via 
email. We will tell you the browsername, browserversion, major browser version and ip-address of the attacker and the 
link and date/time of the attack.  
  
## Demo  
##### 1# You installed the Web Attack Detection tool successfullly<br>
![Demo 1](http://www.blueram.nl/Test/Cyber/demo/demo1.PNG)
  
##### 2# The attacker inputs his SQL Injection to log in as the Admin.<br>
  ![Demo 2](http://www.blueram.nl/Test/Cyber/demo/demo2.PNG)

##### 3# You will receive an email in your inbox!
![Demo 3](http://www.blueram.nl/Test/Cyber/demo/demo3.PNG)<br>

##### 4# We will give you information about the attack and attacker
![Demo 4](http://www.blueram.nl/Test/Cyber/demo/demo4.PNG)<br>
## Important  
  
The Web Attack Detection tool does NOT work on a local server. There is also a PhP
 file that will send the email to the owner of the website. Because of that, the files
 have to be on a webserver that supports mailing.  
  
## Built With  
  
* [PhPStorm](https://www.jetbrains.com/phpstorm/) - The software development program  
* [L2.IO](https://l2.io/) - Get IP-address of the attacker  
  
## Versioning  
  
I used [GitHub](https://github.com/mattfsociety) for versioning. For the versions available, see the [tags on this repository](https://github.com/mattfsociety/WebAttackDetection/tags).   
  
## Authors  
  
* **Matt Timmermans** - [GitHub](https://github.com/mattfsociety)  
  
## License  
  
This project is licensed under Matt Timmermans.
