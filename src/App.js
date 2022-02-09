import CustomerPage from './CustomerPage'
import DoorDeliveryPage from './DoorDeliveryPage'
import SelectVehiclePage from './SelectVehiclePage'
import StartPage from './StartPage'
import SummaryPage from './SummaryPage'
import SwitchCarsPage from './SwitchCarsPage'
import Loader from './Loader'
import {Main} from './components/styles/Main.styled'
import {useState, useEffect} from 'react'

function App() {
    const [isLoading, setIsLoading] = useState(true);
    
    const handleLoading = () => {
    setIsLoading(false);
    }

  useEffect(()=>{
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
    },[])

  return isLoading ? (
    <Loader/>)
    :
    (<Main>
      <StartPage/>
      <SelectVehiclePage/>
      <DoorDeliveryPage/>
      <SwitchCarsPage/>
      <SummaryPage/>
      <CustomerPage/>
    </Main>
  )
}


export default App;
