//Decode a song to remove 'WUB' and replace it with spaces.


function songDecoder(song){
  
  while (song.indexOf('WUB') !== -1) {
    let index = song.indexOf('WUB')
    let arr = song.split('');
    arr.splice(index, 3);
    arr.splice(index, 0, 1);
    song = arr.join('');
  }
    
   let song1 = song.replace(/1/g, ' ');
   
   
   
   while(song1.indexOf('  ') !== -1) {
     let index = song1.indexOf('  ');
     let arr = song1.split('');
     arr.splice(index, 1);
     song1 = arr.join('');
   }
 
   
   if (song1[0] === ' ') {
     let arr = song1.split('');
     arr.splice(0,1);
     song1 = arr.join('');
   }
     
   if(song1[song1.length -1] === ' ') {
     let arr = song1.split('');
     arr.splice(song1.length-1,1);
     song1 = arr.join('');        
   }
    
 
   return song1
}

//Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).


function divisors(integer) {
  let list = [];
  for (let i=2; i<integer; i++) {
    if (integer % i === 0) {
      list.push(i);
    }
   }
   
   return list.length > 0 ? list : `${integer} is prime`;
};


//Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.


function digPow(n, p){
  let arr = String(n).split('');
  let sum = 0;
  
  for (let i=0; i<arr.length; i++){
    sum = sum +Math.pow(arr[i], p++);
  }
  
  if (sum % n === 0) {
    return sum / n
  } else {
    return -1
  }
}