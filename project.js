const calculate= () =>{

    let operation = document.querySelector("#myselection").value;
    let num1 = document.querySelector("#num1").value ;
    let num2 = document.querySelector("#num2").value ;

    if(num1=== '' || num2 === '')
    {
        alert("One or more field is empty") ;
        return ;
    }
    
    num1= parseFloat(num1) ;
    num2= parseFloat(num2) ;

    let ans = 0.00;
    if(operation === 'add')
    {
        
      ans = num1 + num2 ;
    }

    else if(operation === 'sub')
    {
        ans= num1 - num2 ;
    }

    else if(operation === 'mul')
    {
        ans= num1 * num2 ;
    }

    else if(operation === 'div')
    {
        ans= num1/num2 ;
    }

    document.querySelector("#ans").innerHTML= ` Result is : ${ans}` ;

}