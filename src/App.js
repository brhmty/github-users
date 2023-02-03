import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import ProfileInfoSection from "./components/ProfileInfoSection";

function App() {
  return (
    <div className="w-screen h-screen bg-[#EFF4FB]">
      <Header />
      <main className="w-[87%] h-min mt-20 mx-auto">
        <FormInput />
        <ProfileInfoSection />
      </main>
    </div>
  );
}

export default App;
