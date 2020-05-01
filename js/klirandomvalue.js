

$(document).ready(function(){
     //var now = new Date();
     var d = new Date();
     var h = d.getHours();
     var m = d.getMinutes();
     var s = d.getSeconds();
     var hms=h+" "+m+" "+s;
    // alert(hms);
      //var randomNum = '';
     // randomNum += Math.round(Math.random()*9);
     // randomNum += Math.round(Math.random()*9);
      //randomNum = now.getTime();
      //randomValue(randomNum);
      var elem = document.getElementById("ID_UNIQUE").value = hms;
      
  $("#hide").click(function(){
	  $("#log").show();
	    $("#sinup").hide();
  });
  $("#show").click(function(){
    $("#sinup").show();
    $("#log").hide();
  });
});

function validateCredentials() {
        var username = document.loginform.aaaa.value;
        var password = document.loginform.bbbb.value;
        //alert("un="+username + " ,pw = "+password.length);
        var un = username; 
        var pwd_mithu = "mithu";
        var pwd_kli = "puja";
     if(password.length >= 4 ){
         if (pwd_mithu == password) {
            return true;
          }else if (pwd_kli == password) {
            return true;
          }
          else {
              alert ("Seems your ID : "+password+" not yet registered, contact Admin !");
            return false;
          }
        }else{
            alert ("Login was unsuccessful, Please glance once on Suggestion link...!");
            return false;
       }
  }
	    