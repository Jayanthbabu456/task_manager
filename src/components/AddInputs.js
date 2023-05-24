import React, { useEffect, useState } from "react";
import Card from "./Card";
import Buttons from "./Buttons";

const AddInputs = ({ add, tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please enter a task and description.");
      return;
    }
    const id = tasks.length === 0 ? 1 : tasks.length + 1;
    const details = {
      id: id,
      task: title,
      desc: description,
      complete: false,
    };
    setTasks([...tasks, details]);

    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => (t.id === id ? false : true)));
  };

  const handleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: true } : t)));
  };

  return (
    <div>
      <div className="flex flex-col space-y-6 px-10 py-5">
        {add === true ? (
          <>
            <input
              type="text"
              placeholder="Enter a Task..."
              value={title}
              className="w-[full] px-[15px] py-[10px] text-[20px] bg-[#000] border-2 border-[#c89666] outline-none rounded-md text-[#ccc] shadow1 whitespace-normal"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description..."
              value={description}
              className="w-[full] px-[15px] py-[10px] text-[20px] bg-[#000] border-2 border-[#c89666] outline-none rounded-md text-[#ccc] shadow1 whitespace-normal"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Buttons
              handleSave={handleSave}
              setTitle={setTitle}
              setDescription={setDescription}
            />
          </>
        ) : null}
      </div>
      {tasks.length === 0 ? (
        <div className=" w-full h-[380px] px-[10px] rounded-md flex flex-col justify-center items-center">
          <p className="text-[30px] font-medium text-[#fff]">
            No tasks yet. Start by adding a task.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-auto px-[35px] py-10">
          {tasks.map((t) => (
            <Card
              title={t.task}
              description={t.desc}
              key={t.id}
              handleDelete={() => handleDelete(t.id)}
              handleComplete={() => handleComplete(t.id)}
              complete={t.complete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddInputs;
