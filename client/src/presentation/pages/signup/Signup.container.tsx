import React, { useCallback } from 'react'

import Signup from './Signup'
import { useDispatch } from 'react-redux'
import { signupEvent } from '../../events/pages/signup'

type ActionParameter<T extends (...args: any[]) => any> = Parameters<T>[0]

const SignupContainer: React.FC = () => {
  const dispatch = useDispatch()
  const signup = useCallback(
    (v: ActionParameter<typeof signupEvent.signup>) => {
      dispatch(signupEvent.signup(v))
    },
    [dispatch]
  )
  return <Signup signup={signup} />
}

export default SignupContainer
