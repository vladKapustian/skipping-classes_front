export enum EUserRole {
  SUPERADMIN = "SUPERADMIN",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export interface ITimetableData {
  id: number;
  time: Date;
  disciplineId: number;
}

export interface ITimetableResponse extends Array<ITimetableData> {}

export interface IGroupsData {
  id: number
  name: string
}

export interface IGroupsSelectPreparedData{
  id: number
  label: string
  value:string
}
