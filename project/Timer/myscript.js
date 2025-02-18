
//mytime  میگه بیا این تایمر رو بریز تو این متغیر که بتونی کنترل کنی 
var myTime = setInterval(myfunc,1000)// میگه بیا هر 1 ثانیه این تابیع رو اجرا کن
function myfunc(){
  var t= new Date();
  document.getElementById('demo').innerHTML=t;
}

function stopper (){
  clearInterval(myTime); // بیا این متغیر رو متوقف کن
}