<?php
    include('connect.php');

    function createUser($fname,$lname,$email,$phone){
        $create_user_query = "INSERT INTO user(fname,lname,email,phone)";
        $create_user_query.= "VALUES(:fname,:lname,:email,:phone)";

        $create_user_set = $pdo->prepare($create_user_query);
        $create_user_set->execute(
            array(
                ':fname'=>$fname,
                ':lname'=>$lname,
                ':email'=>$email,
                ':phone'=>$phone
            )
            );
    }
?>