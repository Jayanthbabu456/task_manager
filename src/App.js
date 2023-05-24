import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddInputs from "./components/AddInputs";
import Login from "./Login";
import Header from "./components/Header";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/app"
          element={
            isLoggedIn ? (
              <div className="bg-gradient-to-b from-[#e1b382] to-[#c89666] w-[100vw] h-[100vh] flex justify-center items-center overflow-y-auto ">
                <div className="bg-[#12343b] w-[330px] h-[550px] p-[30px] shadow mb-[10px]  rounded-md overflow-y-auto md:w-[60vw] md:h-[650px]">
                  <Header handleAdd={handleAdd} />
                  <AddInputs add={add} tasks={tasks} setTasks={setTasks} />
                </div>
              </div>
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
