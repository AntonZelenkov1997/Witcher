import { FC } from "react";
import MainPage from "../pages/MainPage/MainPage";
import RequestPage from "../pages/RequestPage/RequestPage";

type pathType = {
  exact?: boolean;
  path: string;
  to?: string;
  component: FC;
  key: string;
};

const publicPaths: Array<pathType> = [
  {
    path: "/",
    component: MainPage,
    exact: true,
    key: "MainPage",
  },
  {
    path: "/request",
    component: RequestPage,
    exact: false,
    key: "RequestPage",
  },
];

export default publicPaths;
