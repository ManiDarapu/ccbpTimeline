// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {card} = props
  const {
    title,
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = card
  return (
    <div>
      <Chrono mode="VERTICAL-ALTERNATING" items={title}>
        <img src={imageUrl} className="image" alt={projectTitle} />
        <div>
          <div>
            <h1>{projectTitle}</h1>
            <p>
              <AiFillCalendar />
              {duration}
            </p>
          </div>
          <p>{description}</p>
          <button type="button">{projectUrl}</button>
        </div>
      </Chrono>
    </div>
  )
}

export default ProjectTimelineCard
