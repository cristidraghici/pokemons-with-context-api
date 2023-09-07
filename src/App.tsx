import '@picocss/pico'
import './App.css'

import Search from './components/Search'
import Avatar from './components/Avatar'

function App() {
  return (
    <div className="App">
      <article>
        <header>Pokemon avatars with React</header>
        <Search />
        <Avatar />
      </article>
    </div>
  )
}

export default App
