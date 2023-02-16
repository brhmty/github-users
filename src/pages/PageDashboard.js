import React from "react";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import UserInfoSection from "../components/userInfo/UserInfoSection";
import URPreviewSection from "../components/URPreviewSection";
import ChartSection from "../components/ChartSection";
import Footer from "../components/Footer";
//InjectedIn--App.js

function PageDashboard() {
  return (
    <div className="w-screen min-h-min bg-[#EFF4FB]">
      <Header />
      <main className="w-[87%] lg:mt-20 md:mt-16 sm:mt-8 mt-8 mx-auto">
        <FormInput />
        <UserInfoSection />
        <URPreviewSection />
        <ChartSection />
        <ChartSection />
        <Footer />
      </main>
    </div>
  );
}

export default PageDashboard;
