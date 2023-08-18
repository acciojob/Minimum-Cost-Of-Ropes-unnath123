/*let element = document.getElementById("firstb");
let imageurl="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60";

let newelement=document.createElement("img");
newelement.src=imageurl;
element.appendChild(newelement);*/
//let textinput=document.querySelector("input");
//console.log(textinput.value);

function calculateMinCost(){
	let inputele=document.getElementById("rope-lengths");
	let ropel=inputele.value;
	let arr=ropel.split(",");
	
	
	console.log(typeof(arr[0]));
	
	var ans=0;
	let arr12=arr.map(Number);
	//console.log(arr12);
	
	  for(let i=0;i<5;i++){
		  arr12.sort((a,b)=>a-b);
		  if(arr12.length>1){
		  let sum=arr12[0]+arr12[1];
		  ans=ans+sum;
		  console.log(arr12);
		  
		  arr12.splice(0,2);
		  arr12.unshift(sum);
		  
			  
			  
	  }
	  else{
		console.log("else loop "+ans);
		  return ans;
	  }
	  }
	  console.log("return loop"+ans);
	return ans;
	}



//console.log("final answer"+hj);
// 2,4,7,6,9

function clicked112(){
	let mincost=calculateMinCost();
	let finans=document.getElementById("result");
	finans.innerHTML=mincost;
}