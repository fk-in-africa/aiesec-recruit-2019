
if( window.matchMedia('(min-width:992px)').matches ){
var flag=false;

document.getElementById("box").addEventListener("click",function(){
    flag=!flag;
        if(flag){
            document.getElementById("box").className="afterR1";
            document.getElementById("box1").className="afterG1";
            document.getElementById("box2").className="afterB1";

            document.getElementById("menR1").className="afterMen1";
            document.getElementById("menR2").className="afterMen2";
            document.getElementById("menR3").className="afterMen3";
        }
        else{
            document.getElementById("box").className="";
            document.getElementById("box1").className="";
            document.getElementById("box2").className="";

            document.getElementById("menR1").className="";
            document.getElementById("menR2").className="";
            document.getElementById("menR3").className="";
        }
    });

    document.getElementById("box1").addEventListener("click",function(){
        flag=!flag;
        if(flag){
            document.getElementById("box").className="afterR2";
            document.getElementById("box1").className="afterG2";
            document.getElementById("box2").className="afterB2";

            document.getElementById("menG1").className="afterMen1";
            document.getElementById("menG2").className="afterMen2";
            document.getElementById("menG3").className="afterMen3";

            document.getElementById("menB3").className="";
        }
        else{
            document.getElementById("box").className="";
            document.getElementById("box1").className="";
            document.getElementById("box2").className="";

            document.getElementById("menG1").className="";
            document.getElementById("menG2").className="";
            document.getElementById("menG3").className="";
        }
    });

    document.getElementById("box2").addEventListener("click",function(){
        flag=!flag;
        if(flag){
            document.getElementById("box").className="afterR3";
            document.getElementById("box1").className="afterG3";
            document.getElementById("box2").className="afterB3";

            document.getElementById("menB1").className="afterMen1";
            document.getElementById("menB2").className="afterMen2";
            document.getElementById("menB3").className="afterMen3";
        }
        else{
            document.getElementById("box").className="";
            document.getElementById("box1").className="";
            document.getElementById("box2").className="";

            document.getElementById("menB1").className="";
            document.getElementById("menB2").className="";
            document.getElementById("menB3").className="";
        }
    });
}