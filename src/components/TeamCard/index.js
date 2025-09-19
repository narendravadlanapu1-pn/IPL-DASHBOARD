import { Link } from 'react-router-dom'
import './index.css'

const TeamCard = ({ details }) => {
  const { id, name, teamImageUrl } = details

  return (
    <Link to={`/teams/${id}`} className="team-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
