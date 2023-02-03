import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import RepoInfoSection from "./components/RepoInfoSection";
import URPreviewSection from "./components/URPreviewSection";

function App() {
  return (
    <div className="w-screen h-screen bg-[#EFF4FB]">
      <Header />
      <main className="w-[87%] h-min lg:mt-20 md:mt-16 sm:mt-8 mt-8 mx-auto">
        <FormInput />
        <RepoInfoSection />
        <URPreviewSection />
      </main>
    </div>
  );
}

export default App;
