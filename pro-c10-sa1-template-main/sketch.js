var marks =[20,30,40,56,78]
var sum=0
function setup() 
{
  createCanvas(400,400);
  console.log(marks)
  for(var i=0;i<marks.length;i++){
    sum=sum+marks[i]
  }
  console.log(sum)
}

function draw() 
{
background(51);

}

