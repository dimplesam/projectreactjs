import Addition from "../Components/Addition";
import ArrayMapDemo from "../Components/ArrayMapDemo";
import Counter from "../Components/Counter";
import Destructuring from "../Components/Destructuring";
import FormDemo from "../Components/FormDemo";
import FornHandling from "../Components/FornHandling";
import ImageGallery from "../Components/ImageGallery";
import LightBulb from "../Components/LightBulb";
import MUiComponents from "../Components/MUiComonents";
import Props2 from "../Components/Porps2";
import Products from "../Components/Products";
import Props from "../Components/Props";
import PropsDemo3 from "../Components/PropsDemo3";
import Task from "../Components/Task";
import UseContext from "../Components/UseContext";
import UseEffectDemo from "../Components/UseEffectDemo";
import UseEffectDemo2 from "../Components/UseEffectDemo2";
import UseStateDemo from "../Components/UseStateDemo";
import Home from "../Pages/Home";
import Tabs from "../Tabs";

export const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/array-map-demo",
    component: ArrayMapDemo,
  },
  {
    id: 3,
    path: "/products",
    component: Products,
  },
  {
    id: 4,
    path: "/Props",
    component: Props,
  },
  {
    id: 5,
    path: "/Props2",
    component: Props2,
  },
  {
    id: 6,
    path: "/use-state",
    component: UseStateDemo,
  },
  {
    id: 7,
    path: "/counter",
    component: Counter,
  },
  {
    id: 8,
    path: "/gallery",
    component: ImageGallery,
  },
  {
    id: 9,
    path: "/use-effect",
    component: UseEffectDemo,
  },
  {
    id: 10,
    path: "/use-effect2",
    component: UseEffectDemo2,
  },
  {
    id: 11,
    path: "/mui",
    component: MUiComponents,
  },
  {
    id: 12,
    path: "/props3",
    component: PropsDemo3,
  },
  {
    id: 13,
    path: "/destructuring",
    component: Destructuring,
  },
  {
    id: 14,
    path: "/use-context",
    component: UseContext,
  },
  {
    id: 15,
    path: "/tabs",
    component: Tabs,
  },
  {
    id: 16,
    path: "/addition",
    component: Addition,
  },
  {
    id: 17,
    path: "/light",
    component: LightBulb,
  },
  {
    id: 18,
    path: "/task",
    component: Task,
  },
  {
    id: 19,
    path: "/form",
    component: FormDemo,
  },
  {
    id: 20,
    path: "/form-handling",
    component: FornHandling,
  },
];
