var sum=(x,y)=>{
    //  inp=document.getElementById("input1").value;
    //  inp2=document.getElementById("input2").value;

     return (x+y);


}

var result=()=>{
   let inp=parseInt(document.getElementById("input1").value);
   let inp2=parseInt(document.getElementById("input2").value);
   let res=document.getElementById("result");
   let result = sum(inp,inp2);
   res.value=result;
}




