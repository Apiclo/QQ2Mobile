<?php

$qq=$_POST['qq'];
if($qq){
	$url='http://'.mt_rand(0,99999999).'.qb-api.com/qb-api.php?mod=cha&qq='.$qq;
	$json = file_get_contents($url);
	$arr = json_decode($json,true);
	$code=$arr['code'];
	$msg=$arr['msg'];
	$p=$arr['data']['mobile'];
	$prnc=$arr['place']['province'];
	$city=$arr['place']['city'];
	$sp=$arr['place']['sp'];
}else{
	$code=-100;
	$msg="请输入QQ";
}
$fh=array("code"=>$code,"msg"=>$msg,"p"=>$p,"prnc"=>$prnc,"city"=>$city,"sp"=>$sp);
die(json_encode($fh));
?>