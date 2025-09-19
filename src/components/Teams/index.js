import { Component } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

class Teams extends Component {
  state = { teamData: null };

  async componentDidMount() {
    this.getTeamsData();
  }

  getTeamsData = async () => {
    const { id } = this.props;
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
    const data = await response.json();

    this.setState({ teamData: data });
  };

  render() {
    const { teamData } = this.state;

    if (!teamData) {
      return <h2 className="loading">Loading...</h2>;
    }

    const { team_banner_url, latest_match_details, recent_matches } = teamData;

    // ✅ destructuring latest match
    const {
      competing_team,
      competing_team_logo,
      date,
      venue,
      result,
      first_innings,
      second_innings,
      man_of_the_match,
      umpires,
      match_status,
    } = latest_match_details;

    return (
      <div className="team-details-container">
        {/* Banner */}
        <img src={team_banner_url} alt="team banner" className="team-banner" />

        {/* Latest Match */}
        <h1 className="latest-heading">Latest Match</h1>
        <div className="match-card">
          <div className="match-info">
            <h2 className="team-name">{competing_team}</h2>
            <p className="match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <div className="match-logo">
            <img
              src={competing_team_logo}
              alt={competing_team}
              className="team-logo"
            />
          </div>
        </div>

        {/* Extra details */}
        <div className="extra-details">
          <p><b>First Innings:</b> {first_innings}</p>
          <p><b>Second Innings:</b> {second_innings}</p>
          <p><b>Man of the Match:</b> {man_of_the_match}</p>
          <p><b>Umpires:</b> {umpires}</p>
          <p><b>Status:</b> {match_status}</p>
        </div>

        {/* Recent Matches Grid */}
        <h2 className="recent-heading">Recent Matches</h2>
        <div className="recent-grid">
          {recent_matches.map(match => (
            <div key={match.id} className="recent-card">
              <img
                src={match.competing_team_logo}
                alt={match.competing_team}
                className="recent-logo"
              />
              <h3>{match.competing_team}</h3>
              <p>{match.result}</p>
              <p className={match.match_status === "Won" ? "status-won" : "status-lost"}>
                {match.match_status}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function TeamsWrapper() {
  const { id } = useParams();
  return <Teams id={id} />;
}

export default TeamsWrapper;
