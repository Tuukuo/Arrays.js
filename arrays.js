//find the last element of the following 
let arr1= new Array(3,7,34,90,12);
let slice = arr1.slice(-1);
console.log({slice});

let arr2=new Array(true,"green","where",12,56);
let sliceArray= arr2.slice(-1);
console.log({sliceArray});

//write a js program that will join the following array elements into a string
  let myPets=["Cow","Bird","Snake","Dog"];
 console.log(myPets.join())

 //write a js script to sort the following array items
 let arr3=new Array(-5,9,5,3,2,-3,6,8,4,1);
 let sortedArray=arr3.sort();
 console.log({sortedArray});

 

 //Write a program to remove duplicates from the following array. Console the array without duplicates , and console another array that only contains the duplicates
 let arr= ["boy","man","girl",     "school","girl","woman"];
 console.log({arr});

 function removeDuplicates(arr){
  return[...new Set(arr)]
 }
 console.log(removeDuplicates(arr));

 //write a javascript to search for the following word in the array."food" if the word is present,return it else return "the search word was not found "
let arr5=["the","way","x","4"];
let arrw=arr5.includes("food");
if(w==true){
  console.log("food");
}
else{
  console.log("The search word was not found")
}



//write a js script to sort the following string
let word="renniw"
let x=word.sort();
console.log(x);



