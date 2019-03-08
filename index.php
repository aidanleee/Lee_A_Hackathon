<?php
  include 'functions.php';

	if(isset($_POST['submit'])){
			// trim data
			$fname = trime($_POST['fname']);
			$lname = trime($_POST['lname']);
			$email = trime($_POST['email']);
			$phone = trime($_POST['phone']);
}

if(empty($fname) || empty($lname) || empty($email) || empty($phone)){
}else{
	$result = createUser($fname,$lname,$email,$phone);
}
?>