import { Component } from "react"; 
import TeamCard from "../TeamCard";
import './index.css'

class Home extends Component {
  state = { IplTeams: [] }

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch("https://apis.ccbp.in/ipl")
    const data = await response.json()
    const updateData = data.teams.map(eachCard => ({
      id: eachCard.id,
      name: eachCard.name,
      teamImageUrl: eachCard.team_image_url
    }))
    this.setState({ IplTeams: updateData })
  }

  render() {
    const { IplTeams } = this.state
    return (
      <div className="bg-container">
        <div className="icon-container">
          <img 
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" 
            alt="ipl logo" 
            className="ipl-logo"
          />
          <h1 className="title">IPL DASHBOARD</h1>
        </div>

        <ul className="team-list">
          {IplTeams.map(eachTeam => (
            <TeamCard key={eachTeam.id} details={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
