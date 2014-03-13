     var e1entry = 1
     var area1 = 'LOL'
     var ynh = 'U NEED HELPS'
     var dowrite = 'hi'
          
     function setcp(p) {
     	cprocess = p
     	document.getElementById('gbtitle').innerHTML = 'GlowBear [' + cprocess + ']';
     	document.title = 'GlowBear [' + cprocess + ']';
     }
     document.getElementById('echo1').innerHTML = 'ECHO1';
     function validecho1() {
          e1entry = document.getElementById('echo1form').value;
          if(e1entry == 'help'){
             setcp('help')
	     area1 = area1 + ' <br/> ' + ynh;
          }else{
             if (e1entry.substring(0, 5) == "write") {
             	setcp('dowrite')
             	dowrite = e1entry.substring(6)
             	area1 = area1 + ' <br/> ' + dowrite;
             	
             	
             }else{
             setcp('notvalid')
	     area1 = area1 + ' <br/> ' + e1entry;
	     area1 = area1 + ' <br/> ' + e1entry + ' is not a valid GlowBear command';
             }
          }
          document.getElementById('echo1').innerHTML = area1;
     }
