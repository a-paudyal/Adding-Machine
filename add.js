var sum = 0;
var click = 0;
function add(x)
{
  sum = sum + x;
  click = click + 1;
  print(sum);
}

function print()
{
  document.getElementById("output").innerHTML = "Sum: " + sum;
  document.getElementById("count").innerHTML = "Click: " + click;
}

function clearIt()
{
  sum=0;
  click=0;
  document.getElementById("output").innerHTML = " ";
  document.getElementById("count").innerHTML = " ";
}
