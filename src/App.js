import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FormBook from "./components/form/FormBook";
import Book from "./components/book/Book";
import Books from "./components/books/Books";
import FormUser from "./components/form/FormUser";
import User from "./components/user/User";
import Users from "./components/users/Users";
import AppLayout from "./components/appLayout/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/books/:bookId',
        element: <Book />
      },
      {
        path: '/books/new',
        element: <FormBook />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/users/:userId',
        element: <User />
      },
      {
        path: '/users/new',
        element: <FormUser />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
