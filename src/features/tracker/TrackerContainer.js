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

    const [resultFields, setResultFields] = useState(defaultResultValues);

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
    console.log("re, ", resultFields);
    return (
        <Tracker 
            resultFields={resultFields}
        />
    )
}

export default TrackerContainer;