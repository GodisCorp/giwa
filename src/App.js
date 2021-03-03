import './App.css';
import FormInput from './FormInput.js';

function App() {
  return (
    <div className="App">
      <FormInput name={"firstname"} />
      <FormInput name={"lastname"} />
      <FormInput name={"shop no."} />
      <FormInput name={"self/proxy"} />
      <FormInput name={"phone no."} />
    </div>
  );
}

export default App;
