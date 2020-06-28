import axios from 'axios'
import { TUserRegistInfo } from '../../../types'

const registUser = async (user: TUserRegistInfo) => {
  // FIXME: 疎通確認
  const res = await axios.post('/regist', { user })
  return res
}

export const signupService = {
  registUser,
}
