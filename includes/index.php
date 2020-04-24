<?php
	include('functions.php');

	if (isset($_GET['add_user'])) {
		$result = signUp($pdo);
	}

	echo json_encode($result);

