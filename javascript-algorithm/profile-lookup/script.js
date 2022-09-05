// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];



function lookUpProfile(name, prop){
// Only change code below this line
    
    let respon = "";

    for (let i = 0; i < contacts.length; i++) {

        // console.log(name);
      if(contacts[i].firstName == name){

        if(contacts[i].hasOwnProperty(prop)){
            respon = contacts[i][prop];
            return respon;
        } else {
            respon = "No such property";
            return respon;
        }

      } else {
            respon = "No such contact";
      }

    }

    return respon;

// Only change code above this line
}

lookUpProfile("Bob", "potato");