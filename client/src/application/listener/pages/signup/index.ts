import actionCreatorFactory, { AnyAction } from 'typescript-fsa'
import { mergeMap } from 'rxjs/operators'
import { ofAction } from 'typescript-fsa-redux-observable-of-action'
import { combineEpics, Epic } from 'redux-observable'
import { signupEvent } from '../../../../presentation/events/pages/signup'
import { signupService } from '../../../services/signup'
import { AppState } from '../../../../store'

const actionCreator = actionCreatorFactory()
const _actions = {
  // 未実装： ユーザ登録が終わったら発火する
  _registUserDone: actionCreator<any>('registUserDone'),
}

const signup: Epic<AnyAction, AnyAction, AppState> = (action$) =>
  action$.pipe(
    ofAction(signupEvent.signup),
    mergeMap(async ({ payload }) => {
      const registdUser = await signupService.registUser(payload)
      return registdUser
    }),
    mergeMap((value) => {
      // 未実装
      return [_actions._registUserDone(value.data)]
    })
  )

export const signupEpics = combineEpics(signup)
