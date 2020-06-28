import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputText from '../../components/atoms/InputText/InputText'
import InputEmail from '../../components/atoms/InputText/InputEmail'
import InputPassword from '../../components/atoms/InputText/InputPassword'
import Button from '../../components/atoms/Button/Button'
import { signupEvent } from '../../events/pages/signup'
import { TUserRegistInfo, ActionFunction } from '../../../types'

type TProps = {
  signup: ActionFunction<typeof signupEvent.signup>
}

const Signup: React.FC<TProps> = ({ signup }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // 新規登録
  const onSignup = () => {
    const userInfo: TUserRegistInfo = {
      userName,
      email,
      password,
    }
    signup(userInfo)
  }
  return (
    <div className="container">
      <div>新規登録</div>
      <div>
        <div>
          ユーザー名
          <InputText
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          メールアドレス
          <InputEmail
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          パスワード
          <InputPassword
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <Button text="新規登録" onClick={onSignup} />
        </div>
        <div>
          <Link to="/">ログインはこちら</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
