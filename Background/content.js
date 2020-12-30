


browser.runtime.onMessage.addListener(gotmsg);
var value=0;
function gotmsg(message,sender,sendResponse){
  
    
    if(value==0){
       
        document.body.style.backgroundColor="#242124";
        document.body.style.color="";
        document.body.style.backgroundColor
        var d=document.querySelector("div");
        var p=document.querySelectorAll("p");
        var head=document.querySelector("header");
        var h1=document.querySelectorAll("h1");
        var h2=document.querySelectorAll("h2");
        var code=document.querySelectorAll("code");
        d.style.backgroundColor="";
        for(var i=0;i<p.length;i++){
            p[i].style.color="white";
        }
        for(var i=0;i<h1.length;i++){
            h1[i].style.backgroundColor="white";
        }
        for(var i=0;i<h2.length;i++){
            h2[i].style.backgroundColor="white";
        }
        for(var i=0;i<code.length;i++){
            code[i].style.backgroundColor="black";
        }
        head.style.background="white"
        value=1;
    }
    
    else{
        document.body.style.backgroundColor="";
        document.body.style.color="";
        document.body.style.backgroundColor
        var d=document.querySelector("div");
        var p=document.querySelectorAll("p");
        var head=document.querySelector("header");
        var h1=document.querySelectorAll("h1");
        var h2=document.querySelectorAll("h2");
        var code=document.querySelectorAll("code");
        d.style.backgroundColor="";
        for(var i=0;i<p.length;i++){
            p[i].style.color="";
        }
        for(var i=0;i<h1.length;i++){
            h1[i].style.backgroundColor="";
        }
        for(var i=0;i<h2.length;i++){
            h2[i].style.backgroundColor="";
        }
        for(var i=0;i<code.length;i++){
            code[i].style.backgroundColor="";
        }
        head.style.background=""
        value=0;
    }
}