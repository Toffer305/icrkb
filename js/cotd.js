Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); // padding
  };

d = new Date();

var superpass1 = d.yyyymmdd() * 686572;
var superpass2 = d.yyyymmdd() * 283848;
var superpass3 = d.getFullYear().toString().substr(2,2) * (d.getMonth()+1).toString() * d.getDate() * 8888; 

document.getElementById("sp1").innerHTML = superpass1.toString().slice(-6);
document.getElementById("sp2").innerHTML = superpass2.toString().slice(-6);
document.getElementById("sp3").innerHTML = superpass3.toString().slice(-6);