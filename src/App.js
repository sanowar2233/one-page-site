
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Products/Product';
import Main from './Layout/Main';
import Friend from './Components/Friend/Friend';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Post from './Components/post/Post';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {

  const router=createBrowserRouter([

      {path:'/',element:<Main></Main>, children:[
        {path:'/',element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path:'/products', element: <Product></Product>},
      {
        path:'/friend',
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },

        
        element:<Friend></Friend>
      },
      {
        path:'/friend/:friendId',
        loader: async ({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

        },
        element: <FriendDetail></FriendDetail>
      },

      {
        path:'posts',
        loader:async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
         element:<Post></Post>

      },
      {
        path:'/post/:postId',
        loader : async ({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

        },
        element:<PostDetails></PostDetails>
      }

     ]},

  
    {path:'/about', element: <About></About>},
    {path:'*',
   
    
    element: <div>This route not found</div>}


  ])



  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>

    </div>


  );
}

export default App;
