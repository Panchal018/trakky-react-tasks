import React from "react";
import Home from "./assets/components/MobileUI/Home";
import Form from "./assets/components/MobileUI/ServiceForm/Form";
import SwiggyAppPage from "./assets/components/SwiggyClone/SwiggyAppPage";
import ServiceTable from "./assets/components/ServiceTable/ServiceTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter basename="/trakky-react-tasks">
     <SwiggyAppPage />
      <Home />
      <Form />
     
      {/* <ServiceForm /> */}
      <ServiceTable />
      </BrowserRouter>
    </>
  );
}

export default App;
