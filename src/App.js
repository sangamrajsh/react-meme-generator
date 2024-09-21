import React from "react"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="flex flex-col">
      <Header/>
      <section className="grow md:w-2/3 sm:w-4/5 w-full lg:w-3/5 xl:w-2/5  mx-auto shadow-2xl shadow-purple-900">
       <Main/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
