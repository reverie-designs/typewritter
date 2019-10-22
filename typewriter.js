const sentence  = 'hello there from lighthouse labs \n';
let i = 0;

const printWords = function (string){
  if (i < string.length){
    for (const char of string){
      setTimeout(() =>{
        process.stdout.write(char);
      }, 100*i);  
      i++;  
    };
  };
};

// printWords(sentence);
printWords('Hello Don! \n');

