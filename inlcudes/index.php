<?php
    include ' functions.php';

    if(isset($_POST['submit'])) {
		$fname = trim($_POST['fname']);
		$lname = trim($_POST['lname']);
		$email = trim($_POST['email']);
		$number = trim($_POST['number']);

?>