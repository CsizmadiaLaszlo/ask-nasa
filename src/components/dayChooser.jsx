import {useContext, useState} from "react";
import PictureContext from "../context/PictureContext.jsx";
import DatePicker from 'react-date-picker';
import {formatDate} from "../services/helpers.js";


const DayChooser = () => {
    const [dateValue, setDateValue] = useState(new Date(Date.now()));
    const {setDate} = useContext(PictureContext)

    return (
        <div>
            <p>Pick a date:</p>
            <DatePicker
                clearIcon={null}
                minDate={new Date("1995-06-20")}
                maxDate={new Date(Date.now())}
                onChange={(value) => {
                    if (!value){
                        value = new Date(Date.now());
                    }
                setDateValue(value);
                setDate(formatDate(value));
            }} value={dateValue}/>
        </div>
    )
}

export default DayChooser