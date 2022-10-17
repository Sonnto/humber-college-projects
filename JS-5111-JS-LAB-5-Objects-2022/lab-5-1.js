//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
let myObject = {
  age: 28,
  name: "Anthony",
  favPet: "dog",
  favColour: "blue",
  intro: () =>
    alert(
      `Hello, my name is ${myObject.name} and my favourite pet animal is a ${myObject.favPet}.`
    ),
};
console.log(myObject.age);

// alert(
//   `Hello, my name is ${myObject.name} and my favourite pet animal is a ${myObject.favPet}.`
// );

myObject.intro();
