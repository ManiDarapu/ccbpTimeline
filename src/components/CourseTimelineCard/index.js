// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {card} = props
  const {title, courseTitle, description, duration, tagsList} = card
  return (
    <div>
      <Chrono mode="VERTICAL-ALTERNATING" items={title}>
        <div>
          <div>
            <h1>{courseTitle}</h1>
            <p>
              <AiFillClockCircle />
              {duration}
            </p>
          </div>
          <p>{description}</p>
          {tagsList.map(each => (
            <p>{each.name}</p>
          ))}
        </div>
      </Chrono>
    </div>
  )
}

export default CourseTimelineCard
