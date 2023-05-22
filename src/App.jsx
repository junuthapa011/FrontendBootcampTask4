import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <html>
    <body>
      <header>
        <h1>Welcome to my Website!!!</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div>
    <section>
      
      <p>
        <h3>Paragraph 1</h3>
        <p>Nulla feugiat leo eu mauris finibus, at consectetur leo bibendum.</p>
      </p>
    </section>

    <section>
      <p>
        <h3>Paragraph 2</h3>
        <p>Sed vitae tortor ac nisl tempor finibus nec id quam.</p>
      </p>
      
      <p>
        <h3>Paragraph 3</h3>
        <p>Quisque volutpat magna nec lacus sollicitudin rhoncus.</p>
      </p>
    </section>
    </div>

    <footer>Copyright © 2023</footer>
      </body>
    </html>
    </>
  )
}

export default App
