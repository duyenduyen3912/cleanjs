// Sử dụng class hoặc Object trong ES6 để làm đẹp lại đoạn code sau

var name = 'John';
var age = 30;

function displayUser() {
  console.log(name + ' is ' + age + ' years old.');
}

function updateUser(newName, newAge) {
  name = newName;
  age = newAge;
}

displayUser();
updateUser('Jane', 25);
displayUser();
