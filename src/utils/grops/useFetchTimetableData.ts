import { AxiosResponse } from "axios";
import api from "../axios";
import { ITimetableResponse } from "@/types";

const useFetchTimetableData = async (groupId: string): Promise<AxiosResponse<ITimetableResponse>> => {
  const _data = await api.get(`lessons/${groupId}`, {});
  return _data;
};

export default useFetchTimetableData;
