import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from "./Banner";
import AlExcellence from './AiCourse';


function AIExcellenceMain() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Banner />
            <AlExcellence />
          </>
        }
      />
    </Routes>
  );
}

export default AIExcellenceMain;
