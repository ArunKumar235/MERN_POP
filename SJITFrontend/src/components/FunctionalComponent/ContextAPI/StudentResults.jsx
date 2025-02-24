import { useContext } from "react";
import { ResPub } from "../COE";

const StudentResults  = () => {
    const result = useContext(ResPub);
    console.log(result);
    return (
        <div>
            <h1>Results:</h1>
            <h2>SGPA: {result.sgpa}</h2>
            <h2>CGPA: {result.cgpa}</h2>
        </div>
    );
}

export default StudentResults;