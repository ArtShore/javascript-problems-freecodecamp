function rot13(str) {
    // A-Z = 65-90
    let newCode;
    let regex = /\s|\W/;
    let decipher = str
        .split("")
        .map(char => {
            if (!regex.test(char)) {
                newCode = char.charCodeAt(0) - 13;
                if (newCode < 65) {
                    newCode += 26;
                }
                return String.fromCharCode(newCode);
            } else {
                return char;
            } 
        })
        .join("");
    return decipher;
}
  
  
  console.log(rot13("SERR CVMMN!"));