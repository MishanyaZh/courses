import React, { useEffect, useState } from 'react';

import { List } from './StudentsList.styled';
import Grid from '@mui/material/Grid';

import StudentCard from './StudentCard/StudentCard';

import { useQuery, gql } from '@apollo/client';
const Students_QUERY = gql`
  {
    students {
      id
      name
      email
      phone
      address
    }
  }
`;

const StudentsList = () => {
  // const [students, setStudents] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(json => setStudents(json));
  // }, []);

  const { loading, error, data } = useQuery(Students_QUERY);

  return (
    <>
      <List>
        <Grid container spacing={2}>
          {loading === true ? (
            <div>L o a d i n g . . .</div>
          ) : (
            data.students.map(student => (
              <StudentCard
                key={student.id}
                name={student.name}
                city={student.address}
                // city={student.address.city} --- only fetch
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
