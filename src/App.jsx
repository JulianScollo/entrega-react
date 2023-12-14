import './App.css'
import Navbar from './componentes/NavBar/Navbar'
import ItemListContainer from './componentes/ItemListContainer'


function App() {
  
  return (
      <div id='app'>
      <Navbar />
      <ItemListContainer producto="Futuros productos"/>
      </div>
  ) 
}

export default App
