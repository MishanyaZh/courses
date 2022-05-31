const axios = require('axios');

class Students {
  constructor(students) {
    this.id = students.id;
    this.name = students.name;
    this.address = students.address.city;
    this.email = students.email;
    this.phone = students.phone;
  }
}

const getStudents = async () => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users');
  return (users.data = users.data.map(student => new Students(student)));
};
module.exports = {
  getStudents,
};
