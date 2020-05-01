var value=100;
//export { value };
function randomValue(randomNum) {
    //alert("randomValue before "+value);
    window.value=randomNum;
    //alert("randomValue after "+value);
}

$(document).ready(function(){
     var now = new Date();
      var randomNum = '';
      randomNum += Math.round(Math.random()*9);
      randomNum += Math.round(Math.random()*9);
      randomNum += now.getTime();
      randomValue(randomNum);
      var elem = document.getElementById("ID_UNIQUE").value = randomNum;
      
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
        var username = document.loginform.user.value;
        var password = document.loginform.pwd.value;
        //alert("un="+username + " ,pw = "+password.length);
        var un = username; 
        var pwd_mithu = "735666";
        var pwd_gopi1 = "251288";
        var pwd_gopi2 = "572788";
        var pwd_gopi3 = "327331";
        var pwd_gopi4 = "688448";
        var pwd_gopi5 = "798111";
        var pwd_gopi6 = "712781";
        var pwd_gopi7 = "107332";
        var pwd_gopi8 = "702566";
        var pwd_gopi9 = "517038";
        var pwd_gopi10 = "674380";
        var pwd_gopi11 = "516013";
        var pwd_gopi12 = "746459";
        var pwd_gopi13 = "621932";
        var pwd_gopi14 = "146107";
        var pwd_gopi15 = "323810";
        var pwd_gopi16 = "801203";
        var pwd_gopi17 = "568839";
        var pwd_gopi18 = "704797";
     if(password.length >= 6 ){
        //if(isNaN(password)){
         if(password.length == 6){
             if(isNaN(password)){
               alert ("Please enter Passowrd only six digit number..! Your entered Pwd : "+password);
            return false;
             }
             else{
                  if (pwd_mithu == password) {
            return true;
          }else if (pwd_gopi1 == password) {
            return true;
          }else if (pwd_gopi2 == password) {
            return true;
          }else if (pwd_gopi3 == password) {
            return true;
          }else if (pwd_gopi4 == password) {
            return true;
          }else if (pwd_gopi5 == password) {
            return true;
          }else if (pwd_gopi6 == password) {
            return true;
          }else if (pwd_gopi7 == password) {
            return true;
          }else if (pwd_gopi8 == password) {
            return true;
          }else if (pwd_gopi9 == password) {
            return true;
          }else if (pwd_gopi10 == password) {
            return true;
          }else if (pwd_gopi11 == password) {
            return true;
          }else if (pwd_gopi12 == password) {
            return true;
          }else if (pwd_gopi13 == password) {
            return true;
          }else if (pwd_gopi14 == password) {
            return true;
          }else if (pwd_gopi15 == password) {
            return true;
          }else if (pwd_gopi16 == password) {
            return true;
          }else if (pwd_gopi17 == password) {
            return true;
          }else if (pwd_gopi18 == password) {
            return true;
          }
          else {
              alert ("Seems your ID : "+password+" not yet registered, contact admin or enter Admin CTS ID : 735666 ");
            return false;
          }
             }
          }else{
            alert ("Please enter only six digit ID as Password...!");
            return false;
          }
        }else{
            alert ("Login was unsuccessful, Please glance once on Suggestion link...!");
            return false;
       }
  }