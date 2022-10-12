
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Grandpa from './component/Grandpa.js/Grandpa';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Main from './layout/Main';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('tshirts.json'),
          element:<Home></Home>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'/grandpa',
          element:<Grandpa></Grandpa>
        }
      ],
      
    },
    {
      path:'/try',
      element:<div><h1>This is with out header</h1></div>
      
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
