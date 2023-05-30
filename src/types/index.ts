export enum EUserRole {
    SUPERADMIN = 'SUPERADMIN',
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    STUDENT = 'STUDENT',
  }

export interface ITimetableData {
  id: number,
  time: Date,
  disciplineId:number
}

export interface ITimetableResponse extends Array<ITimetableData>{}