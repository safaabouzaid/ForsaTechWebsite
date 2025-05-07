import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from './components/WhyChoose'
import Statistics from './components/Statistics'
import ForCompanies from "./components/ForCompanies";
import Else from "./components/Else";
import ContactUs from "./components/ContactUs";
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
       <ContactUs/>
    
    </div> </>
  );
}

export default App;
