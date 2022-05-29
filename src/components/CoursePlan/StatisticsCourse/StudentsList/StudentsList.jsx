import React, { useEffect, useState } from 'react';

import { List } from './StudentsList.styled';

import StudentCard from './StudentCard/StudentCard';

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setStudents(json));
  }, []);

  return (
    <>
      <List>
        {students.length === 0 ? (
          <div>L o a d i n g . . .</div>
        ) : (
          students.map(student => (
            <StudentCard
              key={student.id}
              name={student.name}
              city={student.address.city}
              email={student.email}
              phone={student.phone}
            />
          ))
        )}
      </List>
    </>
  );
};

export default StudentsList;
