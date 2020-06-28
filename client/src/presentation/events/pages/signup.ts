import actionCreatorFactory from 'typescript-fsa'
import { TUserRegistInfo } from '../../../types'

const actionCreator = actionCreatorFactory('[events/pages/signup]')
const actions = {
  signup: actionCreator<TUserRegistInfo>('SIGUNUP'),
}

export const signupEvent = actions
