let stack = [];
let register = 0;

function minilang(str) {
  str.split(' ').forEach(command => {
    switch (command) {
      case 'PUSH':
        pushCMD(register);
        break;
      case 'ADD':
        addCMD(stack.pop());
        break;
      case 'SUB':
        subCMD(stack.pop());
        break;
      case 'MULT':
        multCMD(stack.pop());
        break;
      case 'DIV':
        divCMD(stack.pop());
        break;
      case 'REMAINDER':
        remainderCMD(stack.pop());
        break;
      case 'POP':
        popCMD(stack.pop());
        break;
      case 'PRINT':
        printCMD(register);
        break; 
      default:
        register = Number(command, 10);
    }
  });
  return register;
}

let pushCMD = regValue => stack.push(regValue);
let addCMD = stack => register = register + stack;
let subCMD = stack => register = register - stack;
let multCMD = stack => register = register * stack;
let divCMD = stack => register = parseInt(register / stack, 10);
let remainderCMD = stack => register = parseInt(register % stack, 10);
let popCMD = stackvalue => register = stackvalue;
let printCMD = register => console.log(register);

console.log('----------');
minilang('PRINT');
// 0
console.log('----------');
minilang('5 PUSH 3 MULT PRINT');
// 15
console.log('----------');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
console.log('----------');
minilang('5 PUSH POP PRINT');
// 5
console.log('----------');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7
console.log('----------');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6
console.log('----------');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12
console.log('----------');
minilang('-3 PUSH 5 SUB PRINT');
// 8
console.log('----------');
minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)