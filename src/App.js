import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import RepoInfoSection from "./components/RepoInfoSection";
import URPreviewSection from "./components/URPreviewSection";
import ChartSection from "./components/ChartSection";
import Footer from "./components/Footer";
//InjectedIn--index.js

function App() {
  return (
    <div className="w-screen min-h-min bg-[#EFF4FB]">
      <Header />
      <main className="w-[87%] lg:mt-20 md:mt-16 sm:mt-8 mt-8 mx-auto">
        <FormInput />
        <RepoInfoSection />
        <URPreviewSection />
        <ChartSection />
        <ChartSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
