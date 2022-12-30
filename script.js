var request = new XMLHttpRequest();
request.open("GET", "MOCK_DATA.json", false);
request.send(null);
var Data = JSON.parse(request.responseText);



let table = document.querySelector('table');
let btn = document.getElementById('btn-search');
//first print all
Data.forEach(function (e) {
    let pass = 'Passed';
    if (!e.passing) {
        pass = "Failed"
    }
    let name = e.first_name + "  " + e.last_name

    let tem = `
    
    <tr>
            <td>${e.id}</td>
            <td>${name}</td>
            <td>${e.gender}</td>
            <td>${e.class}</td>
            <td>${e.marks}</td>
            <td>${pass}</td>
            <td>${e.email}</td>
</tr>
    `

    table.innerHTML += tem
});

//This is show when we not do any task
function show()
{
    let input = document.getElementById('input').value;
    if(input!=''){
        table.innerHTML=""
    }
    if(input==''){
        Data.forEach(function (e) {
            let pass = 'Passed';
            if (!e.passing) {
                pass = "Failed"
            }
            let name = e.first_name + "  " + e.last_name
        
            let tem = `
            
            <tr>
                    <td>${e.id}</td>
                    <td>${name}</td>
                    <td>${e.gender}</td>
                    <td>${e.class}</td>
                    <td>${e.marks}</td>
                    <td>${pass}</td>
                    <td>${e.email}</td>
        </tr>
            `
        
            table.innerHTML += tem
        });
        
    }
}

//Search Bar
let serach = document.getElementById('btn-search');
serach.addEventListener('click', function () {
    table.innerHTML = "";
    let input = document.getElementById('input').value.toUpperCase();
    Data.forEach(function (e) {
        if (input.includes(e.first_name.toUpperCase()) || input.includes(e.last_name.toUpperCase()) || input.includes(e.email.toUpperCase())) {
            let pass = 'Passed';
            if (!e.passing) {
                pass = "Failed"
            }
            let name = e.first_name + "  " + e.last_name

            let tem = `
    
    <tr>
            <td>${e.id}</td>
            <td>${name}</td>
            <td>${e.gender}</td>
            <td>${e.class}</td>
            <td>${e.marks}</td>
            <td>${pass}</td>
            <td>${e.email}</td>
    </tr>
    `

            table.innerHTML += tem
        }
    })



})

// sort by ascending
let asd=document.getElementById('btn1');
asd.addEventListener('click', function()
{
    table.innerHTML="";
    let data1=[...Data];
    data1.sort(compare1);
    data1.forEach(function (e) {
        let pass = 'Passed';
        if (!e.passing) {
            pass = "Failed"
        }
        let name = e.first_name + "  " + e.last_name
    
        let tem = `
        
        <tr>
                <td>${e.id}</td>
                <td>${name}</td>
                <td>${e.gender}</td>
                <td>${e.class}</td>
                <td>${e.marks}</td>
                <td>${pass}</td>
                <td>${e.email}</td>
    </tr>
        `
    
        table.innerHTML += tem
    });

})
//compare method
function compare1(a,b)
{
    const bandA = a.first_name.toUpperCase();
    const bandB = b.first_name.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  
}
// sort by descending

let ads=document.getElementById('btn2');
ads.addEventListener('click', function()
{
    table.innerHTML="";
    let data1=[...Data];
    data1.sort(compare2);
    data1.forEach(function (e) {
        let pass = 'Passed';
        if (!e.passing) {
            pass = "Failed"
        }
        let name = e.first_name + "  " + e.last_name
    
        let tem = `
        
        <tr>
                <td>${e.id}</td>
                <td>${name}</td>
                <td>${e.gender}</td>
                <td>${e.class}</td>
                <td>${e.marks}</td>
                <td>${pass}</td>
                <td>${e.email}</td>
    </tr>
        `
    
        table.innerHTML += tem
    });

})
//compare decresing
function compare2(a,b)
{
    const bandA = a.first_name.toUpperCase();
    const bandB = b.first_name.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  
}

//sort the marks
let mark=document.getElementById('btn3');
mark.addEventListener('click', function()
{
    table.innerHTML="";
    let data1=[...Data];
    data1.sort(compare3);
    data1.forEach(function (e) {
        let pass = 'Passed';
        if (!e.passing) {
            pass = "Failed"
        }
        let name = e.first_name + "  " + e.last_name
    
        let tem = `
        
        <tr>
                <td>${e.id}</td>
                <td>${name}</td>
                <td>${e.gender}</td>
                <td>${e.class}</td>
                <td>${e.marks}</td>
                <td>${pass}</td>
                <td>${e.email}</td>
    </tr>
        `
    
        table.innerHTML += tem
    });

})
//sort 
function compare3(a,b)
{
    const bandA = a.marks;
    const bandB = b.marks;
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  
}

//sort by passing 
let pass=document.getElementById('btn4');
pass.addEventListener('click', function()
{
    table.innerHTML="";
    let data1=[...Data];
    
    data1.forEach(function (e) {
        let pass = 'Passed';
        if (!e.passing) {
            pass = "Failed"
        }
        let name = e.first_name + "  " + e.last_name
    
        let tem = `
        
        <tr>
                <td>${e.id}</td>
                <td>${name}</td>
                <td>${e.gender}</td>
                <td>${e.class}</td>
                <td>${e.marks}</td>
                <td>${pass}</td>
                <td>${e.email}</td>
    </tr>
        `
        if(pass=='Passed')
        {
            table.innerHTML += tem
        }
        
    });

})

//sort by class
let cla=document.getElementById('btn5');
cla.addEventListener('click', function()
{
    table.innerHTML="";
    let data1=[...Data];
    data1.sort(compare4);
    data1.forEach(function (e) {
        let pass = 'Passed';
        if (!e.passing) {
            pass = "Failed"
        }
        let name = e.first_name + "  " + e.last_name
    
        let tem = `
        
        <tr>
                <td>${e.id}</td>
                <td>${name}</td>
                <td>${e.gender}</td>
                <td>${e.class}</td>
                <td>${e.marks}</td>
                <td>${pass}</td>
                <td>${e.email}</td>
    </tr>
        `
    
        table.innerHTML += tem
    });

})

function compare4(a,b)
{
    const bandA = a.class;
    const bandB = b.class;
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  
}

//sort by gender
let gender=document.getElementById('btn6');
gender.addEventListener('click', function()
{
    table.innerHTML="";
    let data1=[...Data];
    
    data1.forEach(function (e) {
        let pass = 'Passed';
        if (!e.passing) {
            pass = "Failed"
        }
        let name = e.first_name + "  " + e.last_name
    
        let tem = `
        
        <tr>
                <td>${e.id}</td>
                <td>${name}</td>
                <td>${e.gender}</td>
                <td>${e.class}</td>
                <td>${e.marks}</td>
                <td>${pass}</td>
                <td rowspan="7">${e.email}</td>
    </tr>
        `
        if(e.gender=='Male')
        {
            table.innerHTML += tem
        }
        
    });

    let tem=`
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
    `;
    //here add space
    for(let i=0;i<3;i++)
    {
        table.innerHTML+=tem;
    }

    data1.forEach(function (e) {
        let pass = 'Passed';
        if (!e.passing) {
            pass = "Failed"
        }
        let name = e.first_name + "  " + e.last_name
    
        let tem = `
        
        <tr>
                <td>${e.id}</td>
                <td>${name}</td>
                <td>${e.gender}</td>
                <td>${e.class}</td>
                <td>${e.marks}</td>
                <td>${pass}</td>
                <td rowspan="7">${e.email}</td>
    </tr>
        `
        if(e.gender=='Female')
        {
            table.innerHTML += tem
        }
        
    });


})
