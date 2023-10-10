const cl = console.log;
var fname = "Jhon";
var lname = "Doe";
var nativePlace = "Puna";
var profile = "MEAN Stack Developer"
// Hello There, I'm Jhon Doe, From Puna 
// and I'm Mean Stack Developer By Profession
// let result = "Hello There, I'm " + fname + " " + lname
//     + ", From " + nativePlace + " and I'm " + profile + " by Profession."

let result = `Hello There, I'm ${fname} ${lname}, form ${nativePlace} and I'm ${profile} by profession.`

const info1 = document.getElementById("info1");

info1.innerHTML = result;


let person = {
    fname: "Jhon",
    lname: "Doe",
    age: 33,
    nativePlace: "Puna",
    profile: "MEAN Stack Developer",
    child: {
        fname: "May",
        lname: "Doe",
        age: 4,
    }
}

// Hello There, I'm Jhon Doe, From Puna 
// and I'm Mean Stack Developer By Profession. I have a daughter, who is 4 years old.
// Her name is may Doe

let result2 = `Hello There, I'm ${person.fname} ${person.lname}, From ${person.nativePlace} and
                    I'm ${person.profile} by profession. I have a daughter, Who is ${person.child.age}
                    years old. Her name is ${person.child.fname} ${person.child.lname}
                `;

cl(result2);

const info2 = document.getElementById("info2");
info2.innerHTML = result2;