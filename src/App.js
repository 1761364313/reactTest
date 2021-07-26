import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Nav from './component/nav'
import Header from './component/header'
import Pages from './router/index'

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <section className="right">
          <Header />
          <Pages />
        </section>
      </Router>
    </div>
  )
}

export default App
