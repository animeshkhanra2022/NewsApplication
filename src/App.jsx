import { useState } from 'react'
import News from './components/News'
import Layout from './components/Layout'
import LoadingBar from 'react-top-loading-bar';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'



const App = () => {
  const pagesize = 15;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const [progress, setProgress] = useState(0)



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route exact path='' element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pagesize} country={"us"} category={"general"} />} />
        <Route exact path='business' element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} pageSize={pagesize} country={"us"} category={"business"} />} />
        <Route exact path='entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} pageSize={pagesize} country={"us"} category={"entertainment"} />} />
        <Route exact path='health' element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} pageSize={pagesize} country={"us"} category={"health"} />} />
        <Route exact path='science' element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} pageSize={pagesize} country={"us"} category={"science"} />} />
        <Route exact path='sports' element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} pageSize={pagesize} country={"us"} category={"sports"} />} />
        <Route exact path='technology' element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} pageSize={pagesize} country={"us"} category={"technology"} />} />
      </Route>
    )
  )


  return (
    <>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <RouterProvider router={router} />
    </>
  )

}

export default App