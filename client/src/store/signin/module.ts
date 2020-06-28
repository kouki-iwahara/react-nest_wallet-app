import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TUser = {
  id: string | null
  userName: string | null
}
// 仮で作成（ログイン後にstoreで値を保持する予定）
const signinModule = createSlice({
  name: 'signin',
  initialState: {
    id: null,
    userName: null,
  } as TUser,
  reducers: {
    userData(state: TUser, action: PayloadAction<TUser>) {
      return state
    },
  },
})

export default signinModule
