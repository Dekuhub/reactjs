// import './App.css'
// import { Button , H1 , Main  } from './assets/Component/components'
// const App = () => {
//     return (
//         <>
// <H1 text="Нет H2"/>
//  <Main>

// <Button text="Вру H1" />

//  </Main> 
//     </>

//     )
//   }



// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


import './App.css'
import { Page1 } from './pages/page1'
import { Page2 } from './pages/page2'
import { store } from './store/index'
import { PageFetch } from './pages/PageFetch'


function App () {
  return (
  <>
<BrowserRouter>
  <Provider store={store}>
    <Routes>
      <Route path='/' element={<Page1/>} />
      <Route path='/page1' element={<Page1/>} />
      <Route path='/page2' element={<Page2/>} />
      <Route path='/fetch' element={<PageFetch/>} />
    </Routes>
  </Provider>
</BrowserRouter>
  </>
  )
}

export default App