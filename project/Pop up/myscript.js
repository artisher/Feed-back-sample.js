var txt;
function myfun1c(){
   if (confirm("choose 1 of this")) {
txt = " you pressed yes ";
  }
  else {
    txt = " you pressed no ";

}
document.getElementById("demo").innerHTML=txt
}
function myfunc (){
var person = prompt("plz enter your name here : ") // برای ورودی گرفتن در پاپ آپ
if (person == null || person == " "|| person == "  "|| person == "   "){
  document.getElementById("demo")
document.getElementById('demo').innerHTML=("plz enter right name");
}
else {
  if(confirm("are you sure?")){  // برای تایید گرفتن از کاربر 
  document.getElementById("demo").innerHTML=("HELLO "+person);
}
else {
  document.getElementById("demo").innerHTML=("ok enter another Name")
}
}
}