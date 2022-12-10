


let array=[{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
console.log(array);


//Use the map function to iterate over all of the ages and make it an Int instead of the string.
function myfunction(num){
    num.age=parseInt(num.age);//this changes each age into integer
}

array.map(myfunction); //here we change the age from string to integer.
console.log(array);



//Use the forEach function to edit the object which has the name john and change his age from 18 to 19

array.forEach(function(e){
    if(e.name=="john"){
        e.age=19;
    }
});
console.log(array);

//Use the spread operator to append into the array another object of the same structure of your choice

const obj=[{id:4,name:"mark",age:22,profession:"tester"}];
let newarray=[...array,...obj];
console.log(newarray)


// DOM TASK
alert("Select a profession");

function hide(){
    
    document.getElementById("pclass1").style.display='block';
    document.getElementById("pclass2").style.display='block';
    document.getElementById("pclass3").style.display='block';
    
}

function show()
{
    let click=document.getElementById("select");
    var text = click.options[click.selectedIndex].text;
    console.log(text)
    
    if(text=="Developer"){
        document.getElementById("pclass3").style.display='none';
        
    }
    if(text=="Admin"){
        document.getElementById("pclass1").style.display='none';
        document.getElementById("pclass2").style.display='none';
    }
    
}






