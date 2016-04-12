

function Helper(){
	
	this.name = "helper";
	
	
	
	this.getBrowserWidth = function(){
		
		var w = 0;
		
		if (window.innerWidth){
			
			w = window.innerWidth;
		}
		else if(document.documentElement.clientWidth && document.documentElement.clientWidth!=0){
			
			w = document.documentElement.clientWidth;
		}
		else if(document.body.clientWidth){
			
			w = document.body.clientWidth;
		}
		
		return w;
	}
	
	this.getBrowserHeight = function(){
		
		var h = 0;
		
		if (window.innerHeight){
			
			h = window.innerHeight;
		}
		else if(document.documentElement.clientHeight && document.documentElement.clientHeight!=0){
			
			h = document.documentElement.clientHeight;
		}
		else if(document.body.clientHeight){
			
			h = document.body.clientHeight;
		}
		
		return h;
	}
	
	

	this.alertLog = function(logText){
	
		if(!document.getElementById("alertLogViewer")){
		
			var dv = document.createElement("div");
			
			var atr1 = document.createAttribute("id");
			atr1.nodeValue = "alertLog_createElement";
			dv.setAttributeNode(atr1);
			
			document.body.appendChild(dv);
			
			document.getElementById("alertLog_createElement").innerHTML = '<div id="alertLogViewer" style="width:250px;border:solid 1px black;padding:1px;position:absolute;top:20px;left:20px;z-index:2;background-color:white;opacity:0.5;filter:Alpha(opacity=50);resize:both;" onmouseover="' + this.name + '.alertLog_opaquify()" onmouseout="' + this.name + '.alertLog_translucify()" onClick="' + this.name + '.alertLog_changeSide()"></div>';
		}
		
		var viewer = document.getElementById("alertLogViewer");
		if(viewer.innerHTML != ""){
		
			viewer.innerHTML += "<br/>";
		}
		viewer.innerHTML += logText;
	}
	
	this.alertLog_opaquify = function(){
	
		document.getElementById("alertLogViewer").style.filter = "Alpha(opacity=100)";
		document.getElementById("alertLogViewer").style.opacity = "1.0";
	}

	this.alertLog_translucify = function(){
	
		document.getElementById("alertLogViewer").style.filter = "Alpha(opacity=50)";
		document.getElementById("alertLogViewer").style.opacity = "0.5";
	}
	
	this.alertLog_changeSide = function(){
	
		var viewer = document.getElementById("alertLogViewer");
		
		if(viewer.style.left == "20px"){
			
			var w = this.getBrowserWidth();
			
			if(w > 0){
				
				viewer.style.left = (w - 274) + "px";
			}
			else{
				
				return;
			}
		}
		else{
		
			viewer.style.left = "20px";
		}
	}

}