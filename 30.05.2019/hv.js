// 7. tapşiriq...


// var a=[1,2,5,8,3,9,11,12,14]

// var even=[]
// var odd=[]

// for(var i=0; i<a.length; i++){
//     if(a[i]%2==0)
//     even.push(a[i])
//     else{
//         odd.push(a[i])
//     }
// }
// console.log(even, odd)


// 6. tapşiriq...


// var a=[1,2,5,7,3,9,11,12,9,13]
// var max1 = a[0]
// var max2 = a[0]
// for(var i=0;i<a.length;i++){
//     if(a[i]>max1){
//       max1=a[i]
//     }
// }
// for(i=0;i<a.length;i++){
//     if(a[i]>max2 && a[i]<max1){
//         max2=a[i]
//     }
// }
// console.log(max1*max2)


// 5. tapşiriq...

// var a = 1

// for(var c = 1; c <= 5; c++){
//     a= a * c
// }

// console.log(a)


// 4. tapşiriq...


// var a = [36, 9, 4, 28, 55, 7, 11, 24,]

// min = a[0]

// for(var i=0; i<a.length; i++){
//     if(a[i]<min){
//         min=a[i]
//     }
    
// }
// console.log(min)



// 3. tapşiriq...


// var a = [3, 5, 9, 2, 14, 8, 18]

// max = a[0]

// for(var i=0; i<a.length; i++){
//     if(a[i]>max){
//         max=a[i]
//     }
// }console.log(max)



// 1. tapşiriq..


var a = 268901
b = 0

if(a>=0){
while(a>0){
    c=a%10;
    a=(a-c)/10;
    b++;
}
console.log(b);
}
else{console.log(bitti)}