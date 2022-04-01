import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div>
        <div>
          <p>Kursy</p>
          <NavLink to="/newcourse">Dodaj kurs</NavLink>
          {/* <NavLink to="/courseplan">CoursePlan</NavLink> */}
        </div>
      </div>
    </>
  );
};

export default Main;
