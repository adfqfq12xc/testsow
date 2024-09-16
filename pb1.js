const f=(a)=>{
    a=a.trim()
    if(a.length>256 || a.length===0)
    {
        console.log("Not Valid");
        return false
    }

    
    const arr1=a.split("@")
    if(arr1.length!==2 || arr1[0]==='' || arr1[1]===''){
        console.log("Not Valid");   
        return false
    }
    const arr2=arr1[1].split('.')
 
    
    if(arr2.length<2 || arr2[0]==='' || arr2[-1].slice(arr2[1].length-3)!=='com' ){
        console.log("Not Valid");   
        return false
    }
    console.log("Valid");
    return true

    


}
f("john.doe@gmail.com")
f("john@doe@gmail.com")
f("john.doe@gmail.c")
f("john@.com")