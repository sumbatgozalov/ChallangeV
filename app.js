// Task shortest


// let Shortest = (sentence) => {
//     let shortest = sentence.split(" ");
  
//     shortest = shortest.filter((word) => word.trim() !== "");
  
//     let reduced = shortest.reduce((current, next) => {
//       return current.length > next.length ? next : current;
//     });
  
//     return reduced.length;
//   };
  
//   console.log(
//     Shortest("   Now   I     will try to find the lentgh of the shortest word")
//   );

// task add zeros 
// let  nonzeros= arr=> {
//     const withoutZeros = arr.sort((a, b) => a - b).filter((e) => e !== 0);
//     const onlyZeros = arr.filter((e) => e === 0);
//     withoutZeros.push(...onlyZeros);
//     return withoutZeros;
//   }
//   console.log(nonzeros([1, 3, 2, 0, 4, 5, 7, 0, 6, 0, 8]));


// Find that vowels
// const findlengthofvowels = (arr) => {
//     const regEx = /[aeiou]/gi;
  
//     const matched = arr.match(regEx);
  
//     if (matched) {
//       return matched.length;
//     } else {
//       return 0;
//     }
//   };
  
//   console.log(findlengthofvowels("AsUdsafaEsfUIO"));
//   console.log(findlengthofvowels("What Am I dOing here???"));
//   console.log(findlengthofvowels("Wht m  dng hr???"));

// Task century 

// const century = (year) => {
//     return Math.floor((year-1) / 100)+1 ;
//   };
  
//   console.log(century(1001));

// task first non-repetead 
// const firstnonrepeat = str=>{
//     for(let i=0;i<str.length;i++){
//       let letter = str[i];
//       if(str.indexOf(letter)==i && str.indexOf(letter,i+1)==-1){
//         return letter;
//       }
//     }return "_"
//   }
  
//   console.log(firstnonrepeat("Street, is one of the main place you hould be aware of"));