// Write your code here
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const callAccordingly = each => {
    if (each.categoryId === 'COURSE') {
      return <CourseTimelineCard key={each.id} card={each} />
    }
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={each.id} card={each} />
    }
    return null
  }

  return (
    <div>
      <div>
        <h1>
          MY JOURNEY OF <br /> CCBP 4.O
        </h1>
        {timelineItemsList.map(each => callAccordingly(each))}
      </div>
    </div>
  )
}

export default TimelineView
