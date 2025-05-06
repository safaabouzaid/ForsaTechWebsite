import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from './components/WhyChoose'
import Statistics from './components/Statistics'
import ForCompanies from "./components/ForCompanies";
import Else from "./components/else";
function App() {
  return (
    <>
    <div className="App">
      
       <Navbar/>
       <Hero/>
       <WhyChoose/>
       <Statistics/>
       <ForCompanies/>
       <Else/>
    
    </div> </>
  );
}

export default App;
