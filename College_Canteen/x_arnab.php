<?php
    $fullname=$_POST['fullname'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    
    $sekchy=new mysqli('localhost','root','','test');
    if($sekchy->connect_error){
        die('Connection Failed :'.$sekchyy->connect_error);
}else{
    $stml = $sekchy->prepare("insert into registration(fullname,email,password,number)
    values(?,?,?)");
    $stml->bind_param("sss",$fullname, $email, $password);
    $stml->execute();
    //echo "Registered Successfully..";
    $stml->close();
    $stml->close();
}
?>