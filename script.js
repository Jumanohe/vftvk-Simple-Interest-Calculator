function compute()
{
	var principal= document.getElementById("principal").value;
  if(principal<=0){
  	alert("Please enter a positive number")
    document.getElementById("principal").focus();
    return
  }
  var rate= document.getElementById("rate").value;
  var years=document.getElementById("years").value;
  var year=new Date().getFullYear()+parseInt(years);
  var interest=principal*rate*years/100;
  document.getElementById("result").innerText="If you deposit "+principal+", at an interest rate of "+rate+"%. \n You will recieve an aumont of "+interest+ "\n in the year "+ year+".\n" ;
  
}

function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
