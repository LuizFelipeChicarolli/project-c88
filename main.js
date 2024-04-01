var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;


  canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");

 color = "black";
 widthLine = 1;
 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        
        mouseEvent = "mousedown";
    }
 /*
 Crie um event listener para "mousemove"
 e chame a função my_mousemove
 */
 canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posicao das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }



 /*Crie um event listener para "mouseup"
 e chame a função my_mouseup*/

 canvas.addEventListener("mouseup", my_mouseup);
 //Crie uma função chamada my_mouseup com o evento como parâmetro.
 function my_mouseup(e)
 {
     mouseEvent = "mouseup";
 }
 //Atribua "mouseUP" ao mouseEvent dentro da função*/

 /*Crie uma event listener para "mouseleave"
 e chame a função my_mouseleave*/
 canvas.addEventListener("mouseleave", my_mouseleave);

 //Crie uma função chamada my_mouseleave com event de parâmetro.
 function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
 //Atribua "mouseleave" ao mouseEvent
 //dentro da função
 //*/

  function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }
