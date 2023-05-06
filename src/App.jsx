import { BrowserRouter } from "react-router-dom";
import { About, Contact, Services, Feedbacks, Bank, Navbar, Works, MoneyCanvas } from "./components";
function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
        <div className="bg-bank-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Bank />
        </div>
        <About />
        <Services />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <MoneyCanvas />
        </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
