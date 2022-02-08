import CustomerPage from './CustomerPage'
import DoorDeliveryPage from './DoorDeliveryPage'
import SelectVehiclePage from './SelectVehiclePage'
import StartPage from './StartPage'
import SummaryPage from './SummaryPage'
import SwitchCarsPage from './SwitchCarsPage'
import {Main} from './components/styles/Main.styled'

function App() {
  return (
    <Main>
      <StartPage/>
      <SelectVehiclePage/>
      <DoorDeliveryPage/>
      <SwitchCarsPage/>
      <SummaryPage/>
      <CustomerPage/>
    </Main>
  );
}

export default App;
