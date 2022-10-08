import {createContext} from "react";

const PictureContext = createContext({
    date: new Date().toISOString().slice(0, 10),
    setDate: () => {}
});

export default PictureContext