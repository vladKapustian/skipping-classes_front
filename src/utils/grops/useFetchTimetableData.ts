import api from "../axios";

const useFetchTimetableData =async (groupId:number) => {
    return api.get(`lessons/${groupId}`, {
        
    })
}

export default useFetchTimetableData