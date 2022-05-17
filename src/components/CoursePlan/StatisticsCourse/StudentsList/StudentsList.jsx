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
              <h4>{student.name}</h4>
              <div>{student.address.city}</div>
              <div>{student.email}</div>
              <div>{student.phone}</div>
            </Item>
          ))
        )}
      </List>
    </>
  );
};

export default StudentsList;
