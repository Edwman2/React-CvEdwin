import "../Resume.css";
import ResumeFetch from "../components/ResumeFetch";

export default function Resume() {
  return (
    <main>
      <section className="cv" id="cv">
        <div className="content">
          <h1>Resume</h1>
          <div className="profile">
            <h2>Edwin Torres</h2>
            <h3>.NET Fullstack-developer student</h3>
            <h4>Chas Academy</h4>
          </div>
        </div>
        <ResumeFetch />
      </section>
    </main>
  );
}
