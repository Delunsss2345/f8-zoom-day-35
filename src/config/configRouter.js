import Buttons from "@/pages/Buttons";
import Counter from "@/pages/Counter";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Profile from "@/pages/Profile";
import Todo from "@/pages/Todo";
import Weather from "@/pages/Weather";

const routerConfig = [
  { path: "/", element: Home },
  { path: "/counter", element: Counter },
  { path: "/todo", element: Todo },
  { path: "/profile", element: Profile },
  { path: "/products", element: Products },
  { path: "/weather", element: Weather },
  { path: "/buttons", element: Buttons },
];

export default routerConfig;
