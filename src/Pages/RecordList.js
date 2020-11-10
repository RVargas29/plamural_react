import { useEffect } from "react";
import { useState } from "react";
import { getRecordCards } from "../api/record_cards";

const RecordList = () => {

    var [records, setRecords] = useState(null);
    var [loaded, setLoaded] = useState(false)
    useEffect(() => {
        getRecordCards()
        .then((res) => {
            setRecords(res)
            setLoaded(true)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    if(loaded) {
        return (
            <h1>This is the records screen</h1>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
    
}

export default RecordList;