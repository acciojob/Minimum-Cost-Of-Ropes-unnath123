function calculateMinCost(arr) {
  //your code here
  let ans=0;
  let arr1=[]; 
	for(let i=0;i<5;i++){
		arr.sort((a,b)=>a-b);
		if(arr.length>1){
		let sum=arr[0]+arr[1];
		ans=ans+sum;
		console.log(sum);
		arr.splice(0,2);
		arr.unshift(sum);
		
			console.log(arr.sort((a,b)=>a-b));
			
	}
	else{
		return ans;
	}
	}
  return ans;
}  