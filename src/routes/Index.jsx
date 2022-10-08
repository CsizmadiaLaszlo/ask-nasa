import {useState} from 'react'
import PictureContext from "../context/PictureContext.jsx";
import DayChooser from "../components/dayChooser.jsx";
import PictureOfTheDay from "../components/pictureOfTheDay.jsx";

const Index = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    
    return (
        <PictureContext.Provider value={{date, setDate}}>
            <div className="daily-picture-container">
                <div className="daily-menu">
                    <p className={"daily-menu-text"}>Discover the cosmos!<br/> Each day a different image or photograph
                        of
                        our fascinating universe is featured, along with a brief explanation written by a professional
                        astronomer.</p>
                    <div className={"daily-menu-picker"}>
                        <DayChooser/>
                    </div>
                </div>
                <div className="daily-main">
                    <PictureOfTheDay/>
                </div>
            </div>
        </PictureContext.Provider>
    )
}

export default Index
