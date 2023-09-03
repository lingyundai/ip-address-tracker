import Tracker from "./Tracker";
import { useSelector, useDispatch } from "react-redux";
import { fetchIpAddress, getTrackerStatus, getTrackerError, getIpAddressData } from './trackerSlice';
import { useState } from "react";

function TrackerContainer() {
    const dispatch = useDispatch();
    const trackerStatus = useSelector(getTrackerStatus);
    const trackerError = useSelector(getTrackerError);
    const ipAddressData = useSelector(getIpAddressData);

    const defaultResultValue = {
        ip: '',
        location: '',
        timezone: '',
        isp: '',
    }

    const [resultFields, setResultFields] = useState(defaultResultValue);


    useEffect(() => {
        if (trackerStatus === 'idle') {
            dispatch(fetchIpAddress())
        }
    }, [postStatus, dispatch])

    if (trackerStatus === 'succeeded') {
        console.log(ipAddressData);
        setResultFields({
            ...resultFields,
            ip: ipAddressData.ip,
            location: ipAddressData.location.city + ', ' + ipAddressData.location.region + " " + ipAddressData.location.postalCode,
            timezone: ipAddressData.location.timezone,
            isp: ipAddressData.isp,
        })
    } 

    console.log(resultFields);

    return (
        <Tracker 
            resultFields={resultFields}
        />
    )
}

export default TrackerContainer;