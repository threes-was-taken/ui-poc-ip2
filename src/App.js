/* import HomeButtons from './components/buttons/HomeButtons'*/
import PageHeader from './components/PageHeader'
import './css/App.css'

function App() {
  return (
    <div className="App">
      <PageHeader />
     {/*  <HomeButtons /> this is still bugged, something wrong with render func even though it should be correct */}
    </div>
  )
}

export default App
