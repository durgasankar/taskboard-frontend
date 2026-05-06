import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const Registration = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const TaskDetailsPage = lazy(() => import("./pages/TaskDetailsPage"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={ <>Loading...</> }  >
        <Routes>
          <Route path='/' element={ <Navigate to='/signin' replace /> } />
          <Route path="/signup" element={ <Registration /> } />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/tasks'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <ProtectedRoute>
                <TaskDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
