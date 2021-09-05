const allBox = document.querySelectorAll("section span");
window.onload = () =>
{ //once window loaded
  for (let i = 0; i < allBox.length; i++)
   { //add onclick attribute in all available span
    allBox[i].setAttribute("onclick", "clickedBox(this)");

  }

}
function clickedBox(element)
{
  var x=element.innerHTML;
//document.getElementById("box100").innerHTML+=x;

 if(x=='C')
  {
      document.getElementById("box100").innerHTML="";
  }
  else if(x=='=')
  {
    solve();
  }
  else if(x=='X')
  {
    var k= document.getElementById("box100").innerHTML;
    k= k.substring(0, k.length - 1);
    document.getElementById("box100").innerHTML=k;
   //alert(k);
  }
  else
  {
    display(x);
  }
}

function display(val)
{
    document.getElementById("box100").innerHTML+=val;
    //alert(y);
  //  y=y+val;
}
function solve()
{
  let x = document.getElementById("box100").innerHTML
             let y = eval(x)
             document.getElementById("box100").innerHTML = y
}
