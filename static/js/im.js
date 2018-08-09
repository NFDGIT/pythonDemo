var host ='';
var port ='';

function connectSocketServer() {

   host = document.forms["socketForm"]["socketHost"].value;
   port = document.forms["socketForm"]["socketPort"].value;

   alert("host:"+host+"port:"+port);
}
function sendMsg(){
   host = document.forms["msgForm"]["msgHost"].value;
   host = document.forms["msgForm"]["msgContent"].value;

}
function receive() {
    
    
}
