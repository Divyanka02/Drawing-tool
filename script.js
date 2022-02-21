

var drawing=false;
var context;

window.onload = function(){
     //Back Button
     document.getElementById('btnBack').addEventListener('click', function(){
        document.getElementById('myCanvas').style.display = "block";
        document.getElementById('savearea').style.display = "none";
        document.getElementById('tools').style.display = "block";
        
    }, false);
    //claer button
   document.getElementById('btnClear').addEventListener('click',function(){
        context.clearRect(0,0, context.canvas.width, context.canvas.height);  
    },false);

    //Line width
    document.getElementById('lineWidth').addEventListener('change',function(){
        context.lineWidth=document.getElementById('lineWidth').value;
    },false);

//color
document.getElementById('colorChange').addEventListener('change',function(){
    context.strokeStyle=document.getElementById('colorChange').value;
},false);


 //Save
 document.getElementById('btnSave').addEventListener('click', function(){
    document.getElementById('myCanvas').style.display = "none";
    document.getElementById('savearea').style.display = "block";
    document.getElementById('tools').style.display = "none";
    Savecanvas(canvas,"sketch","png");
    /*var dataURL = document.getElementById('myCanvas').toDataURL();
    document.getElementById('canvasImg').src = dataURL;*/
      
}, false);


    //size canvas
    context = document.getElementById('myCanvas').getContext("2d");
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight-60;

    //mouse movement
    document.onmousemove= handleMouseMove;
    document.onmousedown= handleDown;
    document.onmouseup =handleUp;

    //styleline

    context.strokeStyle="black";
    context.lineJoin="round";
    context.lineWidth="3";


}

function handleMouseMove(e){
    console.log(e.clientX,e.clientY);
    if(drawing)
    {
        context.lineTo(e.clientX,e.clientY);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX,e.clientY);
    }
    else{
        context.moveTo(e.clientX,e.clientY);
    }
}

function  handleDown(e){

    drawing =!drawing;
    console.log(drawing);
    context.moveTo(e.clientX,e.clientY);
    context.beginPath();

}
function handleUp(e){
    drawing =!drawing;
    console.log(drawing);   
};

