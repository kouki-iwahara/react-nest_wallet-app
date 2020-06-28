import { Action } from 'typescript-fsa'
import { Observable } from 'rxjs'

// user
export type TUserRegistInfo = {
  userName: string
  email: string
  password: string
}

// observable
export type TAnyActions<T = any> = Action<T> | Action<T>[]
export type TResAnyActions<T = any> = (res: T) => TAnyActions<T>
export type ActionParameter<T extends (...args: any[]) => any> = Parameters<
  T
>[0]
export type ActionFunction<T extends (...args: any[]) => any> = (
  v: ActionParameter<T>
) => void
export type WrapAction<T extends (...args: any[]) => any> = Action<
  ActionParameter<T>
>
export type TAsyncEpicProp = {
  asyncFunc: Observable<any>
  next?: TResAnyActions | TAnyActions
  error?: TResAnyActions | TAnyActions
  complete?: TAnyActions
}
