import { AxiosResponse } from "axios";
import api from "../axios";
import { ITimetableResponse } from "@/types";

export const FetchTimetableData = async (
  groupId: string,
  startTime: Date,
  endTime: Date
): Promise<AxiosResponse<ITimetableResponse> | null> => {
  try {
    const _data = await api.get(`lessons/${groupId}`, ({
      params: {
          startTime: startTime,
          endTime: endTime,
        limit: 20,
        page: 1,
      },
    }));
    return _data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
