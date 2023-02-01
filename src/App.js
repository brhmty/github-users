import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="w-screen h-screen bg-[#EFF4FB]">
      <Header />
      <main className="w-3/4 h-min mt-12 mx-auto">
        <FormInput />
      </main>
    </div>
  );
}

export default App;
