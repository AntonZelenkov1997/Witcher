import { useContext } from "react"
import store from "../../store/store"

const useStore = () => {
    return useContext(store);
}

export default useStore