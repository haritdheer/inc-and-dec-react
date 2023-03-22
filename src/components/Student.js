
import Comp from "./Comp"
import propTypes from 'prop-types'
const Student = (props) => {
  return (
    <>
    <div>Student</div>
    <h1>{props.name}</h1>
    <h1>{props.branch}</h1>
    <Comp branch={props.branch}/>
    </>
  )
}

Student.propTypes={
  name:propTypes.string,
  branch:propTypes.string

}

export default Student