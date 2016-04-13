

function Helper(){
	
	this.name = "helper";
	this.tooltipText = "";
	this.tooltipEvent = null;
	this.tooltipTimeout = null;
	
	
	
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
	
	
	
	this.shuffleArray = function(array){
		
		var i = 0;
		var j = 0;

		// The Fisher-Yates Shuffle:
		for (i=array.length-1; i>0; i--){
			
			j = Math.floor(Math.random() * (i + 1));
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
	
	
	
	this.setTooltip = function(event, text){
		
		this.tooltipText = text;
		this.tooltipEvent = event;
		this.tooltipTimeout = setTimeout(this.name + ".displayTooltip()", 500);
	}
	
	this.displayTooltip = function(){
		
		if(this.tooltipEvent.pageX){
			
			var mouseX = this.tooltipEvent.pageX;
			var mouseY = this.tooltipEvent.pageY;
		}
		else{
			
			var mouseX = this.tooltipEvent.clientX + document.body.scrollLeft - document.body.clientLeft;
			var mouseY = this.tooltipEvent.clientY + document.body.scrollTop - document.body.clientTop;
		}
		
		if(!document.getElementById("helperTooltipDiv")){
			
			var dv = document.createElement("div");
			
			var atr1 = document.createAttribute("id");
			atr1.nodeValue = "helperTooltipDiv";
			dv.setAttributeNode(atr1);
			
			var atr2 = document.createAttribute("style");
			atr2.nodeValue = "background-color: #ffffff; border: solid 1px black; padding: 0px 1px;visibility: hidden; position: absolute; white-space: nowrap;	z-index: 1000;";
			dv.setAttributeNode(atr2);
			
			document.body.appendChild(dv);
		}
		
		var tooltip = document.getElementById("helperTooltipDiv");
		
		tooltip.innerHTML = this.tooltipText;
		
		var browserWidth = this.getBrowserWidth();
		var tooltipWidth = tooltip.offsetWidth;
		
		if(mouseX + tooltipWidth + 20 > browserWidth && tooltipWidth + 10 <= mouseX){
			
			tooltip.style.left = (mouseX - (tooltipWidth + 5)) + "px";
		}
		else{
			
			tooltip.style.left = (mouseX + 15) + "px";
		}
		
		tooltip.style.top = mouseY + "px";
		tooltip.style.visibility = "visible";
	}
	
	this.clearTooltip = function(){
		
		clearTimeout(this.tooltipTimeout);
		document.getElementById("helperTooltipDiv").style.visibility = "hidden";
	}
	
	
	
	this.ajax = function(path, func){
		
		var req;
		
		if (window.ActiveXObject){
			
			req = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else{
			
			req = new XMLHttpRequest();
		}
		
		req.open("GET", path, true);
		
		req.onreadystatechange = function(){
			
			if(req.readyState == 4){
				
				if(req.status == 200){
					
					// request successful
					func(req.responseText);
				}
				else{
					
					// request failed
					func("");
				}
			}
		}
		req.send();
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