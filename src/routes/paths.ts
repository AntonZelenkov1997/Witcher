import { FC } from "react"
import MainPage from "../pages/MainPage/MainPage"

type pathType = {
    exact?: boolean,
    path: string,
    to?: string,
    component: FC,
    key: string
}

const publicPaths: Array<pathType> = [{
    path: '/',
    component: MainPage,
    exact: true,
    key: 'MainPage'
}]

export default publicPaths