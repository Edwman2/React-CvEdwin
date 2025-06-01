import { useEffect, useState } from "react";
import "../Portfolio.css";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Edwman2/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid-container">
      {loading ? (
        <div className="loadingMessage">Loading projects...</div>
      ) : (
        repos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <img src={repo.owner.avatar_url} alt="github-avatar" />
            <h1>{repo.name}</h1>

            <a href={repo.html_url} target="_blank" className="github-icon" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </a>

            <label htmlFor={`modal-toggle-${repo.id}`} className="read-more">
              Read More
            </label>

            <input type="checkbox" id={`modal-toggle-${repo.id}`} className="modal-toggle" hidden />

            <div className="modal">
              <div className="modal-content">
                <h2>{repo.name}</h2>
                <p>{repo.description ? repo.description : "No description available."}</p>

                <label htmlFor={`modal-toggle-${repo.id}`} className="close-button">
                  Close
                </label>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
