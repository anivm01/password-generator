const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
                    "a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
                    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    "A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
                    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
                    ".", "/", ";", ":", "'", "?", ",", "<", ">"]
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")

function generate() {
    let pass1 = []
    for (let i = 0; i < 9; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1
        pass1 += [characters[randomIndex]]
    }
    password1.value = pass1
    
    let pass2 = []
    for (let i = 0; i < 9; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1
        pass2 += [characters[randomIndex]]
    }
    password2.value = pass2
    
    let pass3 = []
    for (let i = 0; i < 9; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1
        pass3 += [characters[randomIndex]]
    }
    password3.value = pass3
    
    let pass4 = []
    for (let i = 0; i < 9; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) + 1
        pass4 += [characters[randomIndex]]
    }
    password4.value = pass4
}


    function SelfCopy(copyText)
  {
      navigator.clipboard.writeText(copyText);
      alert("You just copied this: (" + copyText + ").");
  }