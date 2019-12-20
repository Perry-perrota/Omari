
var dueDate=new Date(2019,20,12);
var  todayDate=new Date();

var dateDiff=dueDate.valueOf()-todayDate.valueOf();
var dateDiffDays=dateDiff/1000/60/60/24;
var roundDateDiffDays=Math.round(dateDiffDays);
console.log("the days remaining are"+""+ roundDateDiffDays);

var para=document.createElement("p");
var element=document.getElementById("dayss").innerHTML=roundDateDiffDays+" days to go";
var node=document.createTextNode(roundDateDiffDays);
