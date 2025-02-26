import { createContext } from "react";
import StudentResult from "./StudentResult";

export const ResultPublish = createContext();

const COE = () => {
  return (
    <ResultPublish.Provider value={{ sgpa: "10 SGPA", cgpa: "10 CGPA" }}>
      <h1>Results Published</h1>
      <StudentResult />
    </ResultPublish.Provider>
  );
};

export default COE;