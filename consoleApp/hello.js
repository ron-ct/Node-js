#!/usr/bin/env node

//The first line #!/usr/bin/env node is known as hashbang

//pass a name on the command line
//process.argv property returns an array containing command line arguments
// element 0 is node command, element 1 is the script your running (hello.js), element 2 is the first arguement passed and so on

const nameArg = (process.argv[2] || 'John');//if no arguement is passed then use the default name John

const sentence = capitalize(process.argv[3]);
//output message
console.log(`Hello ${nameArg}`);
console.log(`${sentence}`);

function capitalize(str){
    return str.trim().toLowerCase().split(' ').map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}