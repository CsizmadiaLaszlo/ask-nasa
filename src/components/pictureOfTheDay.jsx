import {useContext, useEffect, useState} from "react";
import {getPictureByDate} from "../services/nasaApiHandler.js";
import {LoadingSpinner} from "./shared.jsx";
import PictureContext from "../context/PictureContext.jsx";

const PictureOfTheDay = () => {
    const {date} = useContext(PictureContext)
    const [pictureData, setPictureData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        getPictureByDate(date)
            .then((data) => {
                setPictureData(data);
            })
            .finally(() => {
                setLoading(false);
                console.log(pictureData)
            });
    }, [date]);
    return (
        loading ?
            <div className={"spinner-container"}>
                {LoadingSpinner()}
            </div>
            :
            <>
                <div className={"picture-data-title-container"}>
                    <h1>{pictureData["title"]}</h1>
                </div>
                <div className="picture-data-container">
                    <div className="picture-details-container">
                        <h3>Explanation:</h3>
                        <p className={"picture-explanation"}>{pictureData["explanation"]}</p>
                    </div>
                    <Picture url={pictureData["url"]}></Picture>
                </div>
            </>
    )
}


export default PictureOfTheDay