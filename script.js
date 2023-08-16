
function calculateMinCost(arr) {
  //your code here
  let ans=0;
  let arr1=[]; 
	for(let i=0;i<5;i++){
		arr.sort((a,b)=>a-b);
		if(arr.length>1){
		let sum=arr[0]+arr[1];
		ans=ans+sum;
		
		arr.splice(0,2);
		arr.unshift(sum);
		
			
			
	}
	else{
		return ans;
	}
	}
  return ans;
}  
