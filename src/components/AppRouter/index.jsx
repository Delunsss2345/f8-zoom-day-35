import Navigation from "@/components/Navigation";
import routerConfig from "@/config/configRouter";
import { BrowserRouter, Route, Routes } from "react-router";
import Container from "../Container";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <HashRouter>
        <Routes>
          {routerConfig.map(({ path, element: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Container>
                  <Component />
                </Container>
              }
            />
          ))}
        </Routes>
      </HashRouter>
    </BrowserRouter>
  );
};
export default AppRouter;
