import Tracker from "./Tracker";
import { useSelector, useDispatch } from "react-redux";
import { fetchIpAddress, selectIpData, selectTrackerError, selectTrackerStatus } from './trackerSlice';
import { useState, useEffect } from "react";

function TrackerContainer() {
    const dispatch = useDispatch();
    const trackerStatus = useSelector(selectTrackerStatus);
    const trackerError = useSelector(selectTrackerError);
    const ipAddressData = useSelector(selectIpData);
    console.log("inside, ", trackerStatus);

    const defaultPosition = {
        long: '',
        lat: '',
    }

    const [position, setPosition] = useState(defaultPosition);
    console.log(position);

    const defaultResultValues = {
        ip: '',
        location: '',
        timezone: '',
        isp: '',
    }

    const [resultFields, setResultFields] = useState(defaultResultValues);

    useEffect(() => {
        if (trackerStatus === 'idle') {
            dispatch(fetchIpAddress())
        }
        if (trackerStatus === 'succeeded') {
            setResultFields((resultFields) => ({
                ...resultFields,
                ip: ipAddressData.ip,
                location: ipAddressData.location.city + ', ' + ipAddressData.location.region + " " + ipAddressData.location.postalCode,
                timezone: ipAddressData.location.timezone,
                isp: ipAddressData.isp,
            }))
            setPosition((position) => ({
                ...position,
                lat: ipAddressData.location.lat,
                long: ipAddressData.location.lng,
            }))
        } 
    }, [trackerStatus, dispatch]);


    console.log(resultFields);

    return (
        <Tracker 
            resultFields={resultFields}
        />
    )
}

export default TrackerContainer;