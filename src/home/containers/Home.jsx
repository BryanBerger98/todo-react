import TaskFormModal from "../../tasks/components/TaskFormModal";
import Tasks from "../../tasks/containers/Tasks";

function Home() {

    return (
        <div className="container py-5">
            <div className="d-flex mb-1">
                <h1 className="text-primary mb-0">Tasks</h1>
                <button type="button" className="btn btn-primary ms-auto my-auto" data-bs-toggle="modal" data-bs-target="#taskFormModal">New Task</button>
            </div>
            <hr className="bg-primary mt-0 mb-5" />
            <Tasks />
            <TaskFormModal modalId="taskFormModal" task={null} button={{name: 'New Task', class: 'btn btn-primary ms-auto my-auto'}} />
        </div>
    );
  }
  
  export default Home;
  