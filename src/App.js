import "./App.css";
import React, { useReducer, createContext } from "react";
import PageLogin from "./pages/PageLogin";
import PageDashboard from "./pages/PageDashboard";
import PageError from "./pages/PageError";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//InjectedIn--index.js

export const MainContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setName": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "setCInitial": {
      return {
        ...state,
        cInitial: action.payload,
      };
    }
    case "setRepoInfo": {
      return {
        ...state,
        repoInfo: action.payload,
      };
    }
  }
}

const defaultState = {
  name: "",
  cInitial: "",
  repoInfo: "",
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <BrowserRouter>
      <MainContext.Provider
        value={{
          dispatch,
          state,
        }}
      >
        <Routes>
          <Route path="/" element={<PageDashboard />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
