import './App.css';
import Header from './Components/Header/header';
import Banner from './Components/Banner/banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Editions from './Editions/editions';
import Jamitirmidhi  from'./Books/Jami Tirmidhi/jamitirmidhi' ;
import Sahihbukhari from './Books/Sahih Bukhari/sahihbukhari';
import Malik from './Books/Muwatta Malik/malik';
import Muslim from './Books/Sahih Muslim/muslim';
import Ibnmajah from './Books/Sunan Ibn Majah/ibnmajah';
import Nasai from './Books/Sunan Nasai/nasai';
import Araabudawud from './Books/Sunan Abu Dawud/ara-abudawud/araabudawud';
import Engabudawud from './Books/Sunan Abu Dawud/eng-abudawud/engabudawud';
import Abudawud from './Books/Sunan Abu Dawud/abudawud'
import One from './Books/Sunan Abu Dawud/ara-abudawud/one';
import Ten from './Books/Sunan Abu Dawud/ara-abudawud/ten';
import Thousand from './Books/Sunan Abu Dawud/ara-abudawud/thousand';
import Hundred from './Books/Sunan Abu Dawud/ara-abudawud/hundred';
import OneEng1 from './Books/Sunan Abu Dawud/eng-abudawud/oneEng1';
import TenEng1 from './Books/Sunan Abu Dawud/eng-abudawud/tenEng1';
import HundredEng1 from './Books/Sunan Abu Dawud/eng-abudawud/hundredEng1';
import ThousandEng1 from './Books/Sunan Abu Dawud/eng-abudawud/thousandEng1';
import Aratirmidhi from './Books/Jami Tirmidhi/ara-tirmidhi/aratirmidhi';
import Engtirmidhi from './Books/Jami Tirmidhi/eng-tirmidhi/engtirmidhi';
import One2  from './Books/Jami Tirmidhi/ara-tirmidhi/one2';
import Ten2 from './Books/Jami Tirmidhi/ara-tirmidhi/ten2';
import Hundred2 from './Books/Jami Tirmidhi/ara-tirmidhi/hundred2';
import Thousand2 from './Books/Jami Tirmidhi/ara-tirmidhi/thousand2';
import OneEng2 from './Books/Jami Tirmidhi/eng-tirmidhi/oneEng2';
import TenEng2 from './Books/Jami Tirmidhi/eng-tirmidhi/tenEng2';
import HundredEng2 from './Books/Jami Tirmidhi/eng-tirmidhi/hundredEng2';
import One3 from './Books/Muwatta Malik/ara-malik/one3';
import Aramalik from './Books/Muwatta Malik/ara-malik/aramalik';
import Engmalik from './Books/Muwatta Malik/eng-Malik/engmalik';
import Ten3 from './Books/Muwatta Malik/ara-malik/ten3';
import Hundred3 from './Books/Muwatta Malik/ara-malik/hundred3';
import Thousand3 from './Books/Muwatta Malik/ara-malik/thousand3';
import OneEng3 from './Books/Muwatta Malik/eng-Malik/oneEng3';
import TenEng3 from './Books/Muwatta Malik/eng-Malik/tenEng3';
import HundredEng3 from './Books/Muwatta Malik/eng-Malik/hundredEng3';
import ThousandEng3 from './Books/Muwatta Malik/eng-Malik/thousandEng3';
import Arabukhari from './Books/Sahih Bukhari/ara-bukhari/arabukhari';
import Engbukhari from './Books/Sahih Bukhari/eng-Bukhari/engbukhari';
import One4 from './Books/Sahih Bukhari/ara-bukhari/one4';
import Ten4 from './Books/Sahih Bukhari/ara-bukhari/ten4';
import Hundred4 from './Books/Sahih Bukhari/ara-bukhari/hundred4';
import Thousand4 from './Books/Sahih Bukhari/ara-bukhari/thousand4';
import OneEng4 from './Books/Sahih Bukhari/eng-Bukhari/oneEng4';
import TenEng4 from './Books/Sahih Bukhari/eng-Bukhari/tenEng4';
import HundredEng4 from './Books/Sahih Bukhari/eng-Bukhari/hundredEng4';
import ThousandEng4 from './Books/Sahih Bukhari/eng-Bukhari/thousandEng4';
function App() {
  return (
    <>
      <Header />
      
      <Router>
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route  path="/editions" component={Editions} />
          <Route  path="/Books/Sunan Abu Dawud" component={Abudawud} />
          <Route  path="/:Books/jamitirmidhi" component={Jamitirmidhi} />
          <Route  path="/Books/sahihbukhari" component={Sahihbukhari} />
          <Route  path="/Books/malik" component={Malik} />
          <Route  path="/Books/muslim" component={Muslim} />
          <Route  path="/Books/ibnmajah" component={Ibnmajah} />
          <Route  path="/Books/nasai" component={Nasai} />
          <Route  path="/:Sunan Abu Dawud /ara-abudawud" component={Araabudawud} />
          <Route  path="/:Sunan Abu Dawud/eng-abudawud" component={Engabudawud} />  
          <Route path="/auth/Sunan Abu Dawud/ara-abudawud/One" component={One}  />
          <Route path="/auth/Sunan Abu Dawud/ara-abudawud/Ten" component={Ten}  />
          <Route path="/auth/Sunan Abu Dawud/ara-abudawud/Hundred" component={Hundred}  />
          <Route path="/auth/Sunan Abu Dawud/ara-abudawud/Thousand" component={Thousand}  />
          <Route path="/eng/Sunan Abu Dawud/eng-abudawud/OneEng1" component={OneEng1} />
          <Route path="/eng/Sunan Abu Dawud/eng-abudawud/TenEng1" component={TenEng1} />
          <Route path="/eng/Sunan Abu Dawud/eng-abudawud/HundredEng1" component={HundredEng1} />
          <Route path="/eng/Sunan Abu Dawud/eng-abudawud/ThousandEng1" component={ThousandEng1} />
          <Route path="/:jamitirmidhi/ara-tirmidhi" component={Aratirmidhi} />
          <Route path="/:jamitirmidhi/eng-tirmidhi" component={Engtirmidhi} />
          <Route path="/auth/Jami Tirmidhi/ara-tirmidhi/One2" component={One2} />
          <Route path="/auth/Jami Tirmidhi/ara-tirmidhi/Ten2" component={Ten2} />
          <Route path="/auth/Jami Tirmidhi/ara-tirmidhi/Hundred2" component={Hundred2} />
          <Route path="/auth/Jami Tirmidhi/ara-tirmidhi/Thousand2" component={Thousand2} />
          <Route path="/eng/Jami Tirmidhi/eng-tirmidhi/OneEng2" component={OneEng2} />
          <Route path="/eng/Jami Tirmidhi/eng-tirmidhi/TenEng2" component={TenEng2} />
          <Route path="/eng/Jami Tirmidhi/eng-tirmidhi/HundredEng2" component={HundredEng2} />
          <Route path="/:Malik/ara-malik" component={Aramalik} />
          <Route path="/:Malik/eng-malik" component={Engmalik} />
          <Route path="/auth/Malik/aramalik/One3" component={One3} />
          <Route path="/auth/Malik/aramalik/Ten3" component={Ten3} />
          <Route path="/auth/Malik/aramalik/Hundred3" component={Hundred3} />
          <Route path="/auth/Malik/aramalik/Thousand3" component={Thousand3} />
          <Route path="/eng/Malik/engmalik/OneEng3" component={OneEng3} />
          <Route path="/eng/Malik/engmalik/TenEng3" component={TenEng3} />
          <Route path="/eng/Malik/engmalik/HundredEng3" component={HundredEng3} />
          <Route path="/eng/Malik/engmalik/ThousandEng3" component={ThousandEng3} />
          <Route path="/:Sahihbukhari/ara-bukhari" component={Arabukhari} />
          <Route path="/:Sahihbukhari/eng-bukhari" component={Engbukhari} />
          <Route path="/auth/Sahihbukhari/arabukhari/One4" component={One4} />
          <Route path="/auth/Sahihbukhari/arabukhari/Ten4" component={Ten4} />
          <Route path="/auth/Sahihbukhari/arabukhari/Hundred4" component={Hundred4} />
          <Route path="/auth/Sahihbukhari/arabukhari/Thousand4" component={Thousand4} />
          <Route path="/auth/Sahihbukhari/engbukhari/OneEng4" component={OneEng4} />
          <Route path="/auth/Sahihbukhari/engbukhari/TenEng4" component={TenEng4} />
          <Route path="/auth/Sahihbukhari/engbukhari/HundredEng4" component={HundredEng4} />
          <Route path="/auth/Sahihbukhari/engbukhari/ThousandEng4" component={ThousandEng4} />




          
          

          
    
        </Switch>

      </Router>






    </>




  )
}

export default App;
