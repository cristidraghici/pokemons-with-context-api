import logo from './logo.svg'
import './App.css'

import Search from './components/Search'
import Avatar from './components/Avatar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pokemon avatars with React</h1>

        <img src={logo} className="App-logo" alt="logo" />

        <Search />
        <Avatar />
      </header>
    </div>
  )
}

export default App
