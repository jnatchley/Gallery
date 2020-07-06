var x = 1;
function myFunction()
{
    if (x == 1) {
        document.querySelector("#main-pic").src="https://picsum.photos/200";
        x++;
    }
    else if (x == 2)
    {
        document.querySelector("#main-pic").src="https://picsum.photos/200";
        x--;
    }
}
 
var t = setInterval(myFunction, 3000);