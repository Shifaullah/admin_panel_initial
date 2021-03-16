<?php 

if(isset($_GET['PN']) && !empty($_GET['PN'])){
	$page = $_GET['PN'];
	$pages = scandir('pages');
	if(in_array($page.'.php', $pages)){
		require_once ("pages/$page.php");
	}else{
		echo "<img src='img/404.gif' width='100%'>";
		die();
	}
}else{
	require_once "pages/home.php";
}


 ?>