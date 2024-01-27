import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./main/Main";
import HeroMain from "../Hero/HeroMain";
import Kitchen from "../Kitchen/Kitchen";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <HeroMain />,
        },
        {
          path: "/kitchen",
          element: <Kitchen />,
        },
      ],
    },
  ]);

  export default router;