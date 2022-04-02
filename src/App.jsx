import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Courses from './views/Courses/Courses';
import CoursePlan from './views/CoursePlan/CoursePlan';
import NewCourse from './views/NewCourse/NewCourse';
import NotFoundPage from './views/NotFoundPage';

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="courseplan" element={<CoursePlan />} />
          <Route path="newcourse" element={<NewCourse />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;