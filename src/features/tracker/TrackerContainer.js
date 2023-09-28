import Tracker from "./Tracker";
import { useSelector, useDispatch } from "react-redux";
import { fetchIpAddress, selectIpData, selectTrackerError, selectTrackerStatus } from './trackerSlice';
import { useState, useEffect } from "react";

function TrackerContainer() {
    const dispatch = useDispatch();
    const trackerStatus = useSelector(selectTrackerStatus);
    const trackerError = useSelector(selectTrackerError);
    const ipAddressData = useSelector(selectIpData);
    // console.log("inside, ", trackerStatus);

    const defaultResultValues = {
        ip: '',
        location: '',
        timezone: '',
        isp: '',
        lat: '',
        lng: '',
    }

    const defaultError = {
        errorMessage: '',
    }

    const [resultFields, setResultFields] = useState(defaultResultValues);
    const [userInput, setUserInput] = useState("");
    const [inputError, setInputError] = useState(defaultError);

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const validateInput = () => {
        const digitCount = userInput.match(/\d/g)?.length || 0;
        console.log('digitCount', digitCount)
        if (isNaN(userInput) || digitCount < 10) {
            setInputError((inputError) => ({
                ...inputError,
                errorMessage: 'Please enter a valid IP Address',
            }))
        } else {
            setInputError((inputError) => ({
                ...inputError,
                errorMessage: '',
            }))
        }
    }

    console.log("input", userInput);
    console.log("error", inputError);

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInput();
    }

    useEffect(() => {
        if (trackerStatus === 'idle') {
            console.log("called");
            dispatch(fetchIpAddress())
        }
        if (trackerStatus === 'succeeded') {
            setResultFields((prevState) => ({
                ...prevState,
                ip: ipAddressData.ip,
                location: ipAddressData.location.city + ', ' + ipAddressData.location.region + ' ' + ipAddressData.location.postalCode,
                timezone: ipAddressData.location.timezone,
                isp: ipAddressData.isp,
                lat: ipAddressData.location.lat,
                lng: ipAddressData.location.lng,
            }))
        } else {
            console.log(trackerError);   
        }
    }, [trackerStatus, dispatch]);


    return (
        <Tracker 
            resultFields={resultFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputError={inputError}
        />
    )
}

export default TrackerContainer;