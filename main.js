canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
lastX,lastY;
mouseE="empty";
colour="black";
width=2;
canvas.addEventListener("mousedown",myMousedown);
function myMousedown(e){
    colour=document.getElementById("myColour").value;
    width=document.getElementById("myWidth").value;
    mouseE="mousedown"
}
canvas.addEventListener("mouseup",myMouseup);
function myMousedown(e){
    mouseE="mouseup"
}
canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e){
    mouseE="mouseleave"
}
canvas.addEventListener("mousemove",myMousemove);
function myMousemove(e){
    currentX=e.clientX-offsetLeft;
    currentY=e.clientY-offsetTop;
    if(mouseE=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;
        ctx.arc(currentX,currentY,40,0,2*Math.PI);
    }
    console.log("last position of x and y coordinates=");
    console.log("x="+lastX+"y="+lastY);
    ctx.moveTo(lastX,lastY);
    console.log("current position of x and y coordinates=");
    console.log("x="+currentX+"y="+currentY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
    lastX=currentX;
    lastY=currentY;
}
function clear(){
    canvas.clearRect();
}