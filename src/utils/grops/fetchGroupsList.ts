import { AxiosResponse } from "axios";
import api from "../axios";
import { IGroupsData, ITimetableResponse } from "@/types";

export const fetchGroupsData = async (
): Promise<AxiosResponse<IGroupsData[]> | undefined> => {
  try {
     
    return await api.get(`groups`);;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
