/* eslint-disable react/prop-types */
const Task = (props) => {
    const taskStyle = []
    if (props.task.complete) {
        taskStyle.push("finishedTask")
    }
    return (
        <div className="taskBox">
        <span className={taskStyle.join(" ")}>{props.task.text}</span>
        <input className={"form-check-input"} checked={props.task.complete} type="checkbox" onChange={ () => {
        props.handleCheckbox(props.i)
        }} />

        <button className={"btn btn-danger btn-sm"} onClick={() => { props.handleDeleteTask(props.i) }} >Delete</button>
        </div>
    )
}

export default Task