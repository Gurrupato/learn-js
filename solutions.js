export const rectPerimeter = (x, y) => 2*x + 2*y;

export const rectArea = (x, y) => x*y;

export const triArea = (x, y) => (x*y)/2;

export const ringArea = (x,y) => (Math.PI * y ** 2) - (Math.PI * x ** 2);

export const f2c = (x) => (x -32)*(5/9);

export const c2f = (x) => (x *(9/5))+32;

export const makeName = (name1, name2) => `${name2}, ${name1}`

export const ellide = (S, N) => S.substr(0, N)+"...";

export const longer = (x, y) => (y.length > x.length ? y : x);

export const mid3 = (x, y, z) => (x>=y && y>=z ? y : z>=y && y>=x ? y: y>=x && x>=z ? x : z>=x && x>=y ? x : z);

export const lastFirst = (name= {first, last}, vacio= 2) => (name.last==null && name.first==null ? `` 
                                                            :name.last==null ? `${name.first}`
                                                            : name.first==null ? `${name.last}`
                                                            :`${name.last}, ${name.first}`);

export const subArray = (array1,array2) => (array2.length == 0 ? [] : [array1[array2[0]], array1[array2[1]]]);

// export const over21 = (person) => (person[0].age >= 21 && person[1].age >= 21 && person[2].age >= 21 ? [person[0],person[1],person[2]] 
//                                 : person[0].age >= 21 && person[1].age >= 21 ? [person[0],person[1]] 
//                                 : person[1].age >= 21 && person[2].age >= 21 ? [person[1],person[2]] 
//                                 : []);

export const over21 = (person) => (person.filter((p) => p["age"] >= 21));

export const product = (product) => product[0]*product[1]*product[2]*product[3]*product[4]