     var e1entry = 1
     var area1 = 'GlowBear Indevelopment Edition <br> A simple JavaScript based web terminal that supports commands and stuff <br> Use help command for command listing'
     var ynh = 'GlowBear Help <br> Commands: <br> write {insert string message here} (Prints the message to the console)'
     var dowrite = 'hi'
     document.getElementById('echo1').innerHTML = area1;
          
     function setcp(p) {
     	cprocess = p
     	document.getElementById('gbtitle').innerHTML = 'GlowBear [' + cprocess + ']';
     	document.title = 'GlowBear [' + cprocess + ']';
     }
     document.getElementById('echo1').innerHTML = 'ECHO1';
     function validecho1() {
          e1entry = document.getElementById('echo1form').value;
          area1 = area1 + ' <br/> >' + e1entry;
          if(e1entry == 'help'){
             setcp('help')
	     area1 = area1 + ' <br/> ' + ynh;
          }else{
             if (e1entry.substring(0, 5) == "write") {
             	setcp('write')
             	dowrite = e1entry.substring(6)
             	area1 = area1 + ' <br/> ' + dowrite;
             	
             	
             }else{
             setcp('notvalid')
	     area1 = area1 + ' <br/> ' + e1entry + ' is not a valid GlowBear command';
             }
          }
          document.getElementById('echo1').innerHTML = area1;
     }
