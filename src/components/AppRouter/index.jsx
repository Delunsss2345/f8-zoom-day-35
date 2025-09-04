import Navigation from "@/components/Navigation";
import routerConfig from "@/config/configRouter";
import { HashRouter, Route, Routes } from "react-router";
import Container from "../Container";

const AppRouter = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
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
    </>
  );
};
export default AppRouter;
