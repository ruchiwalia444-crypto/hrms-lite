import './App.css';
import Attendence from './pages/Attendence';
import Employees from "./pages/Employees";

function App() {
  return (
    <div className="App">
      <h1>HRMS Lite</h1>
      <Employees />
      <Attendence />
    </div>
  );
}

export default App;