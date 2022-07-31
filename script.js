function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var i= (p*t*(r/100));
   
    if (p <= 0 | p== null) 
    {
         alert("Enter a positive number");
         document.getElementById("principal").focus();
         return false;
    }
    var year=new Date().getFullYear() + parseInt(t);
    document.getElementById("result").innerHTML=`<div>If you deposit <span id="highlight" >${p}</span> <br>,at an interest rate of  <span id="highlight" >${r}</span> %.<br>You will receive an amount of <span id="highlight" >${i}</span> ,<br>in the year  <span id="highlight" >${year}</span> <br></div>`;
}
function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}
        
