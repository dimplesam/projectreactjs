import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";

function App() {
  // console.log(routes);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              Component={route.component}
            />
          );
        })}

        {/* <Route path="/" Component={Home} />
        <Route path="/array-map-demo" Component={ArrayMapDemo} />
        <Route path="/products" Component={Products} />
        <Route path="/Props" Component={Props} />
        <Route path="/Props2" Component={Props2} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
