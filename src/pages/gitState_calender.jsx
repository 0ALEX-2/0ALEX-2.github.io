import "./gitSate.css";
import GitHubCalendar from "react-github-calendar";
const Github = () => {

  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };

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
      <h1>My GitHub Calendar</h1>
      <div className="container" >
      <GitHubCalendar
        username="0ALEX-2"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
      </div>
    </div>
  );
};
export default Github;
