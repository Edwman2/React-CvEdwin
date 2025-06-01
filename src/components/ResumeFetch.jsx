import { useEffect, useState } from 'react';

export default function ResumeFetch() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch('/data/resume.json')
      .then((response) => response.json())
      .then((data) => setResumeData(data))
      .catch((error) => console.error("error fetching resume data:", error))
  }, []);

  if (!resumeData) return <p>Loading...</p>;

  return (
      <div className="grid-container">
        <div className="jobs">
          <h1>Where I've Worked</h1>
          {resumeData.work_experience.map((job, index) => (
            <div className="job" key={job.id}>
              <h2>{job.company}</h2>
              <h3>{job.period}</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>

        <div className="education">
          <h1>Education</h1>
          {resumeData.education.map((edu, index) => (
            <div className="education-content" key={edu.id}>
              <h2>{edu.school}</h2>
              <h3>{edu.period}</h3>
              <p>{edu.program}</p>
            </div>
          ))}
        </div>

        <div className="languages">
          <h1>Language Skills</h1>
          <h2>Swedish - {resumeData.language_skills.Swedish}</h2>
          <h2>English - {resumeData.language_skills.English}</h2>
        </div>
      </div>
  );
}
