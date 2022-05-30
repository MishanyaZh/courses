const axios = require('axios');

class Students {
  constructor(students) {
    this.id = students.id;
    this.name = students.name;
    // this.address = students.address.city;
    this.email = students.email;
    this.phone = students.phone;
    // this.students = students.results.map(student => new Students(student));
  }
}

const getStudents = async () => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   console.log(students);
  return new Students(users);
  //   return users;
};
module.exports = {
  getStudents,
};
