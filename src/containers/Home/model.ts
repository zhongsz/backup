export interface User {
  id: number,
  nm: string,
  pp: string,
  tm: string
}

export interface UserAction {
  type: string
  payload?: any
}

export interface Article{
  id:string,
  name:string,
  createDate?:Date,
  modifiedDate?:Date,
  introduction?:string,
  DetailInfo?:string,
  creator?:string
}

export interface Archive{
  id:string,
  name:string  
}

export interface Recents{
  Articles:Array<Article>,
  Archives:Array<Archive>
}