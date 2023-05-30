import { AxiosResponse } from "axios";
import api from "../axios";
import { ITimetableResponse } from "@/types";

export const useFetchTimetableData =async (groupId:string, startTime: Date, endTime:Date):Promise<AxiosResponse<ITimetableResponse>> => {
    const _data = await api.get(`lessons/${groupId}`,{params:{
        filters: {
            startTime: startTime,
            endTime:endTime
        },
        limit: 20,
        page: 1
    }})
    return _data
}
