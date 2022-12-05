import "./gitSate.css";
const Github = () => {
  return (
    <div className="github">
      <div className="state">
        <h1>My GitHub State</h1>
        <div className="images" data-aos="flip-up">
          <img
            src="https://github-readme-stats.vercel.app/api?username=0alex-2&show_icons=true&locale=en"
            alt="git_state" data-aos="fade-right" className="stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=0alex-2&show_icons=true&locale=en&layout=compact"
            alt="langState" data-aos="fade-left" className="lang"
          />
        </div>
      </div>
    </div>
  );
};
export default Github;
