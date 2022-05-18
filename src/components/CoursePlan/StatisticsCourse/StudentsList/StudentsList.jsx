import React, { useEffect, useState } from 'react';

import { List, Item } from './StudentsList.styled';

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
            <Item key={student.id}>
              <h3>name: {student.name}</h3>
              <div>city: {student.address.city}</div>
              <div>email: {student.email}</div>
              <div>phone: {student.phone}</div>
            </Item>
          ))
        )}
      </List>
    </>
  );
};

export default StudentsList;
