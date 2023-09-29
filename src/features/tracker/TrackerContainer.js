import Tracker from "./Tracker";
import { useSelector, useDispatch } from "react-redux";
import { fetchIpAddress, selectIpData, selectTrackerError, selectTrackerStatus } from './trackerSlice';
import { useState, useEffect } from "react";

function TrackerContainer() {
    const dispatch = useDispatch();
    const trackerStatus = useSelector(selectTrackerStatus);
    const trackerError = useSelector(selectTrackerError);
    const ipAddressData = useSelector(selectIpData);

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
        if (userInput.match(/[a-z]/i)) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInput();
        dispatch(fetchIpAddress(userInput));
    }

    useEffect(() => {
        if (trackerStatus === 'idle') {
            dispatch(fetchIpAddress())
        }
        if (trackerStatus === 'succeeded') {
            if (ipAddressData.location.lat !== 0 || 
                ipAddressData.location.lng !== 0 ||
                ipAddressData.location.timezone !== "" ||
                ipAddressData.isp !== "")
                setResultFields((prevState) => ({
                    ...prevState,
                    ip: ipAddressData.ip,
                    location: ipAddressData.location.city + ', ' + ipAddressData.location.region + ' ' + ipAddressData.location.postalCode,
                    timezone: ipAddressData.location.timezone,
                    isp: ipAddressData.isp,
                    lat: ipAddressData.location.lat,
                    lng: ipAddressData.location.lng,
                }))
            else {
                setInputError((inputError) => ({
                    ...inputError,
                    errorMessage: 'IP Address is not accessable',
                }))
            }
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