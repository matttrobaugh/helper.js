<?php
	$str = "";
	
	for($i=0;$i<10;$i++){
		
		$str2 = "";
		
		for($ii=0;$ii<100000;$ii++){
			
			if($ii % 10 == 0){
				$str2 .= "A";
			}
		}
		
		$str .= $str2 . "<br/>";
	}
	
	print($str);
?>