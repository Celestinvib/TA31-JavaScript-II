
const dateRegex = /^[\d]{2}[/][\d]{2}[/][\d]{4}$/;

console.log("20/10/2022 -> "+dateRegex.test('20/10/2022'));
console.log("2010/2022 -> "+dateRegex.test('2010/2022'));


const emailRegex = /^[a-z0-9.-]+@+[a-z0-9]+\.[a-z]{2,3}$/i

console.log("Email.suarez-valencia@gmail.com -> "+emailRegex.test('Email.suarez-valencia@gmail.com'));
console.log("Emailsuarezvalencia@gm@ail.com -> "+emailRegex.test('Emailsuarezvalencia@gm@ail.com'));
console.log("Email+suarezvalencia@gmail.com -> "+emailRegex.test('Email+suarezvalencia@gmail.com'));


const regReplace1 = /&/g
const regReplace2 = /\\/g
const regReplace3 = /</g
const regReplace4 = />/g

console.log( "Maria & Jose \n-> "+"Maria & Jose".replace(regReplace1, "&amp;"));
console.log( "\\login \n-> "+"\\login".replace(regReplace2, "&quot;"));
console.log( "0 < 1 \n-> "+"0 < 1".replace(regReplace3, "&lt;"));
console.log( "1 > 0 \n-> "+"1 > 0".replace(regReplace4, "&gt;"));


function correctFormat(user) {
    const spaceRegex = / /g;

    userParts = user.split(" ");

    user = userParts[1] + " " + userParts[0];

    return user.replace(spaceRegex, ", "); 
}

console.log("John Cena -> "+correctFormat("John Cena"));


const scriptRegex = /<script[^]*>.*<\/script[^>]*>/g;

let maliciousCode = "Este libro lo vendo porque <script src='http://mydomain.com/urchin.js'></script> no tengo espacio"

console.log( maliciousCode+"\n -> "+maliciousCode.replace(scriptRegex, ""));

