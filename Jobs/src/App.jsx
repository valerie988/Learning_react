import { useState, useEffect } from "react";
import "./App.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function crackeddevs() {
      const response = await fetch(`https://api.crackeddevs.com/v1/get-jobs`, {
        headers: {
          "api-key": `ee84fee0-5859-48ff-a56b-f13930b9edc4`,
        },
      });

      if (response.ok) {
        const data = await response.json().then((data) => setJobs(data))
        
      } else {
        console.log("HTTP-Error: " + response.status);
      }
    }
    crackeddevs();
  }, []);

  return (
    <div>
      <h1>Welcome to JobWave</h1>
      {jobs?.map((item) => (
        <article key={item.id} className="container">
            <h3>
              Company Name: <span>{item.company}</span>
            </h3>
            <h3>
              Post: <span>{item.title}</span>
            </h3>
            <h3>
              Payment_type: <span>{item.payment_type}</span>
            </h3>
            <h3>
              Skill_level: <span>{item.skill_level}</span>
            </h3>
            <h3>
              Job_type: <span>{item.job_type}</span>
            </h3>

          <div>
            <a href={item.apply_url}>
              <button>Apply Now</button>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};
export default Jobs;
