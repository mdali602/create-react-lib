import "./App.css";
import SuperLemon from "my-lib";
import Plans, { PlanComponent, TestComponent } from "custom-plans";
import "custom-plans/dist/index.css";

function App() {
  return (
    <div className="App">
      <SuperLemon name="Piyesh" />
      <TestComponent text="Create React Library Example" />
      <PlanComponent name="Premium" />
      <Plans />
    </div>
  );
}

export default App;
