import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Body from "../components/read/Read";
import data from "../components/read/Read_dummy";

const Read = () => {
  return (
    <>
      <Header/>
      <Body data={data}/>
      <Footer/>
    </>
  )
};

export default Read;
