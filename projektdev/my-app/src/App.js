import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

  const today = new Date();
  const todayIndex = today.getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;
  const todayName = daysOfWeek[adjustedTodayIndex];

  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem("plans");
    return saved ? JSON.parse(saved) : {};
  });

  const [inputText, setInputText] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [selectedDay, setSelectedDay] = useState(todayName);
  const [showTasks, setShowTasks] = useState(true); // toggle widoczności

  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  const addTask = () => {
    if (!inputText || !inputTime) return;
    const newTask = { description: inputText, time: inputTime, done: false };
    const dayTasks = plans[selectedDay] ? [...plans[selectedDay], newTask] : [newTask];
    const sortedTasks = dayTasks.sort((a, b) => a.time.localeCompare(b.time));
    setPlans({ ...plans, [selectedDay]: sortedTasks });
    setInputText("");
    setInputTime("");
  };

  const toggleTask = (day, index) => {
    const updatedDay = [...plans[day]];
    updatedDay[index].done = !updatedDay[index].done;
    setPlans({ ...plans, [day]: updatedDay });
  };

  const deleteTask = (day, index) => {
    const updatedDay = [...plans[day]];
    updatedDay.splice(index, 1);
    setPlans({ ...plans, [day]: updatedDay });
  };

  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const index = (adjustedTodayIndex + i) % 7;
    return daysOfWeek[index];
  });

  return (
    <div className="container">
      <h1>Plan Dnia - {selectedDay}</h1>

      <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
        {daysOfWeek.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <div className="input-section">
        <input
          type="time"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Wpisz zadanie..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTask}>Dodaj</button>
      </div>

      <button onClick={() => setShowTasks(!showTasks)} style={{ marginBottom: "10px" }}>
        {showTasks ? "🔽 Ukryj zadania" : "▶️ Pokaż zadania"}
      </button>

      {showTasks && (
        <ul>
          {(plans[selectedDay] || []).map((task, index) => (
            <li key={index} className={task.done ? "done" : ""}>
              <span>{task.time} - {task.description}</span>
              <button onClick={() => toggleTask(selectedDay, index)}>✓</button>
              <button onClick={() => deleteTask(selectedDay, index)}>🗑</button>
            </li>
          ))}
        </ul>
      )}

      <div className="week-calendar">
        {next7Days.map((day, i) => (
          <div key={`${day}-${i}`} className="day-block">
            <h3>{i + 1}. {day}</h3>
            {plans[day] && plans[day].length > 0 ? (
              <ul className="tasks-for-day">
                {plans[day]
                  .slice()
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((task, idx) => (
                    <li key={idx} className={task.done ? "done" : ""}>
                      {task.time} - {task.description}
                      <button onClick={() => toggleTask(day, idx)}>✓</button>
                      <button onClick={() => deleteTask(day, idx)}>🗑</button>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="no-tasks">Brak zadań</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
