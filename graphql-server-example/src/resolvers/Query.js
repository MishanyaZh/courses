const { getStudents } = require('../students/getStudents');

async function students(parent, args) {
  //   return {
  //     id: 1,
  //     name: 'Misha',
  //     address: [{ city: 'Gorzow' }],
  //     email: 'email.com',
  //     phone: '777 777 777',
  //   };
  const users = await getStudents();
  //   console.log(users);
  return users;
}

module.exports = {
  students,
};
