import { Route, Routes } from 'react-router-dom'
import { routes } from './helpers/routes'

function App() {

  return (
    <div className='wrapper'>
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.path} />
        ))}
      </Routes>
    </div>
  )
}

export default App
