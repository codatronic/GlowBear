     var e1entry = 1
     var area1 = 'GlowBear Indevelopment Edition <br> A simple JavaScript based web terminal that supports commands and stuff <br> Use help command for command listing'
     var dowrite = 'hi'
     var c1 = 'hi'
     var ca = 'hi'
     var l = 1
     document.getElementById('echo1').innerHTML = area1;
          
     function setcp(p) { // set the currently running process
     	cprocess = p
     	document.getElementById('gbtitle').innerHTML = 'GlowBear [' + cprocess + ']';
     	document.title = 'GlowBear [' + cprocess + ']';
     }
     document.getElementById('echo1').innerHTML = 'ECHO1';
     function validecho1() { // validate commands
          e1entry = document.getElementById('echo1form').value;
          area1 = area1 + ' <br/> >' + e1entry;
          if(e1entry == 'help'){
             setcp('help')
	     area1 = area1 + ' <br/> ' + 'GlowBear Help <br> Commands: <br> write {insert string message here} (Prints the message to the console) <br> repo (Takes you to the GitHub repository)';
	     document.getElementById('echo1').innerHTML = area1;
          }else{
             if (e1entry.substring(0, 6) == "write ") {
             	setcp('write')
             	dowrite = e1entry.substring(6)
             	area1 = area1 + ' <br/> ' + dowrite;
             }else{
             	if (e1entry == "repo") {
             		window.location.assign('https://github.com/codatronic/GlowBear')
             	}else{
             		if (e1entry.substring(0,9) == "compound ") {
             			// do stuff
             			c1 = e1entry.substring(9);
             			ca = c1.split(',');
             			l = ca.length;
             			for(i = 0; i < l; i++){
             				// other stuff
             				document.getElementById('echo1form').innerHTML = ca[i];
             				validecho1()
             				
             			}
             			
             		}else{
             setcp('notvalid')
	     area1 = area1 + ' <br/> ' + e1entry + ' is not a valid GlowBear command';
             }
          }
          document.getElementById('echo1').innerHTML = area1;
     }
    }
     function blink1() {
     	blinkback = area1
     	area1 = area1 + ' <br/> ' + '>';
     	setTimeout('blink2()', '1000')
     	document.getElementById('echo1').innerHTML = area1;
     }
     function blink2() {
     	    area1 = blinkback;
     	    document.getElementById('echo1').innerHTML = area1;
     }
