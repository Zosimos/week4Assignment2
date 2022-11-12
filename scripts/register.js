//object literal
let petSalon = {
    //properties
    //name is simple, and only needs one simple property value
    name:"The Fashion Pet",
    //address is more complex, and so we need to create another object within this object to define the various values for address
    address:{
        street:"University",
        number:"262",
        zip:"22400"
    },
    //pets is a long list of data, and therefore an array is needed.
    pets:[
    //curly brackets below here indicate an anonymous object as giving it a name would be redundant
            
        ]
        
}

//+create the constructor+----------------------------------<---day2
//<------parameters (local vars)----->
function Pet(name, age, gender, breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;//*** */
    this.contactPhone=phone;//*** */
}
//create pets----------------
let pet1 = new Pet("scooby", 60, "Male", "Dane", "Grooming", "Shaggy", "555-555-5555");
let pet2 = new Pet("pup", 10, "Male", "Frug", "Groom", "Jim", "555-555-5545");
let pet3 = new Pet("Mr Monk", 12, "Male", "Frug", "Groom", "Canaan", "555-555-5535");
petSalon.pets.push(pet1, pet2, pet3);
console.log(pet1, pet2, pet3);
//register function---------------
//getting the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputContact = document.getElementById("txtContact");
function register(){
    //get the values
    //console.log(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputContact.value);
    //create the obj
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputContact.value);
    //display the obj 
    console.log(thePet);
    //push the obj
    petSalon.pets.push(thePet);
    

    //display the petSalon.pets
    console.log(petSalon.pets);
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("txtContact").value="";
}
// let counter = 0;
//         for (let obj of petSalon.pets) {
//           if (obj.status = 'name') counter++;
//         }
        
//         alert(counter);
//ways of accessing the values in the object. Use period (.) after object name to go down into the property within the object
//console.log(petSalon.address.street);
//accessing a specific name below, by defining the position ([0]) followed by period (.) and then name property. Pay attention to syntax
//console.log(petSalon.pets[0].name);



// function displayNames() {
//     for (let i = 0; i < petSalon.pets.length; i++) {
//         let petNames = petSalon.pets[i].name; // get the name
//         console.log(petNames);
//       }
        
// }
// displayNames();

    //alert to display count of how many pets
    //display the names using a for loop

