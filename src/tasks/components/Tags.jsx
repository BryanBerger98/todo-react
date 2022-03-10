import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";

function Tags(props) {

    const tasksContext = useContext(TasksContext);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(tasksContext.getTags());
    }, [tasksContext]);

    return(
        <>
            {tags && tags.length > 0 ?
            <div className="d-flex mb-5 ">
                <span className="badge bg-secondary me-2 fs-5 cursor-pointer" onClick={() => props.onFilterTasksByTag('*')}>All</span>
                {tags.map((tag, index) => (
                    <span key={tag + index} className="badge bg-secondary me-2 fs-5 cursor-pointer" onClick={() => props.onFilterTasksByTag(tag)}>{tag}</span>
                ))}
            </div>
            : null}
        </>
    );

}

export default Tags;