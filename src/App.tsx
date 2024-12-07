import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import { Home, Test1 } from "./_root/pages";


function App() {
  return (
    <>
      <main className="h-screen w-screen">
        <Routes>
          {/* Public Routes */}
          {/* <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route> */}

          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Test1" element={<Test1 />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
