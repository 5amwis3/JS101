function generateUUID() {
  const usableChars = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  const sections = [8, 12, 16, 20];
  let code = '';

  for (index = 1; index <= 32; ++index) {
    let randomChar = usableChars[Math.floor(Math.random() * 16)];
    code += randomChar;

    if(sections.includes(index)) code += '-'; 
  } 

  console.log(code);
}

generateUUID();
generateUUID();
generateUUID();
generateUUID();