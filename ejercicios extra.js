


array= [1,1,3,4,1,4,2,3]
export const countRepeats = (array) => {
     let results = [];
     for (let j = 0; j <array.length; j++){
         for (let i = j+1; i <array.length; i++){
            if (array[j] ==array[i]){
             results.push(array[i:+1]);
         }
        }
     }
  return [...new Set(results)];
 }; 