
import { Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import SellComponent from "./Component/SellComponent";
import WithdrawComponent from "./Component/WithdrawComponent";


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<SellComponent/>}></Route>
     </Routes>
     <Routes>
     <Route path="/withdraw" element={<WithdrawComponent/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
