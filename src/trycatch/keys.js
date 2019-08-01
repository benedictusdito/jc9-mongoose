let person = {
  name: "Alvin",
  age: 27,
  email: "alvin@gmail.com",
  password: ""
};

let result = Object.keys(person);

result.forEach(key => {
  if (!person[key]) {
    delete person[key];
  }
});
console.log(person);
