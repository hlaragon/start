/*
Upper Corner Live clock script credit: JavaScript Kit (www.javascriptkit.com)
More free scripts here!

The following is the clock script:
*/

function show5(){
if (!document.layers&&!document.all&&!document.getElementById)
return

 var Digital=new Date()
 var hours=Digital.getHours()
 var minutes=Digital.getMinutes()
 var seconds=Digital.getSeconds()

var dn="PM"
if (hours<12)
dn="AM"
if (hours>12)
hours=hours-12
if (hours==0)
hours=12

 if (minutes<=9)
 minutes="0"+minutes
 if (seconds<=9)
 seconds="0"+seconds
//change font size here to your desire


myclock=""+hours+":"+minutes+":"
 +seconds+" "+dn+""
if (document.layers){
document.layers.date.document.write(myclock)
document.layers.date.document.close()
}
else if (document.all)
date.innerHTML=myclock
else if (document.getElementById)
document.getElementById("time").innerHTML=myclock
setTimeout("show5()",1000)
}


window.onload=show5