import { useState } from "react";
import NewTaskForm from "../Components/NewTaskForm";
import Tasks from "../Components/Tasks";

function Home() {

    return (
      <div className="container py-5">
        <h1 className="text-primary mb-1">
          Tasks
        </h1>
        <hr className="bg-primary mt-0 mb-5" />
        <NewTaskForm />
        <Tasks />
      </div>
    );
  }
  
  export default Home;
  