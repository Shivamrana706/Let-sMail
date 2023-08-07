import './App.css';
import { Route, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'
import { routes } from './routes/routes';
// import ErrorComponent from './common/errorComponent';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to={`${routes.emails.path}/inbox`} />
    },
    {
      path: '/',
      element: <routes.main.element />,
      children: [
        {
          path: `${routes.emails.path}/:type`,
          element: <routes.emails.element />
        },
        {
          path: `${routes.viewEmails.path}`,
          element: <routes.viewEmails.element />
        },
      ],
    },
    {
      path: '/*',
      element: <Navigate to={`${routes.emails.path}/inbox`} />
    }
  ]
  // createRoutesFromElements(
  //   <Route>
  //     {/* <Route to={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} errorElement={<ErrorComponent />} /> */}
  //     <Route to={routes.main.path} element={<Main />} errorElement={<ErrorComponent />}>
  //       {/* <Route to={`${routes.emails.path}/:type`} element={<ListEmails />} errorElement={<ErrorComponent />} />
  //       <Route to={routes.viewEmails.path} element={<ViewEmails />} errorElement={<ErrorComponent />} /> */}
  //     </Route>

  //     {/* <Route to={routes.invalid.path} element={<ErrorComponent />} /> */}
  //   </Route>
  // )
)
function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<CircularProgress color='success'
        style={{ display: 'flex', justifyContent: 'center' }} />} />
      {/* <Main /> */}
    </>
  );
}

export default App;
