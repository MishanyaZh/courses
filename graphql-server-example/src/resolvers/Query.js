const { getStudents } = require('../students/getStudents');

async function students(parent, args) {
  const users = await getStudents();
  return users;
}

module.exports = {
  students,
};
