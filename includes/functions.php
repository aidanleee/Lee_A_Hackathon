<?php
    include('connect.php');

        function signUp($conn) {
            $newUserQuery = $conn->prepare("INSERT INTO user (first_name, last_name, email, phone ) VALUES (:fname, :lname, :electronmail, :telphone)");
            $newUserResult = $newUserQuery->execute(array(
                ':fname' => $_POST['first_name'],
                ':lname' => $_POST['last_name'],
                ':electronmail' => $_POST['email'],
                ':telphone' => $_POST['phone']
            ));

            if ($newUserResult) {
                // success
                return array('result' => $newUserResult);
            } else {
                // failure
                return array('result' => false);
            }
        }