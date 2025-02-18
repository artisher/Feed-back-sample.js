
var pos = 0;
var Status = "";
function myMove() {
    if (Status != ""){
     return;
    }
    var elem = document.getElementById('mover');
    switch (pos){
        case 0 : 
        Status = "top To down";
        break;
        case 450 : 
        Status =  "down To top ";
        break;
    }

    var id = setInterval(tekoon, 5);
    function tekoon() {
        switch (Status)  {
         case "top To down":
             pos++;
             elem.style.top = pos + "px";
             elem.style.left = pos + "px";
             if ( pos == 450){
                clearInterval(id);
                Status = "";
             }
         break; 
         case "down To top ":
             pos--;
             elem.style.top = pos + "px";
             elem.style.left = pos + "px";
             if ( pos == 0){
                clearInterval(id);
                Status = "";
             }
             break;
     
        }
     
     
     }



}

