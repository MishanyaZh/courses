import React, { useEffect, useState } from 'react';

import { List } from './StudentsList.styled';
import Grid from '@mui/material/Grid';

import StudentCard from './StudentCard/StudentCard';

// import { useQuery, gql } from '@apollo/client';

// const Students_QUERY = gql`
//   {
//     students {
//       id
//       name
//       email
//       phone
//       address {
//         city
//       }
//     }
//   }
// `;
const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setStudents(json));
  }, []);

  // const { loading, error, data } = useQuery(Students_QUERY);
  // console.log(data);

  return (
    <>
      <List>
        <Grid container spacing={2}>
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
                bgcolor={'rgba(0, 172, 193, 1)'}
              />
            ))
          )}
        </Grid>
      </List>
    </>
  );
};

export default StudentsList;
