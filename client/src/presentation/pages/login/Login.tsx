import React from 'react'
import { Link } from 'react-router-dom'

import InputEmail from '../../components/atoms/InputText/InputEmail'
import InputPassword from '../../components/atoms/InputText/InputPassword'
import Button from '../../components/atoms/Button/Button'

const Login: React.FC = () => {
  return (
    <div className="container">
      <div>ログイン</div>
      <div>
        <div>
          メールアドレス
          <InputEmail value="" onChange={() => console.log('dammy function')} />
        </div>
        <div>
          パスワード
          <InputPassword
            value=""
            onChange={() => console.log('dammy function')}
          />
        </div>
        <div>
          <Button
            text="ログイン"
            onClick={() => console.log('dammy function')}
          />
        </div>
        <div>
          <Link to="/signup">新規登録はこちら</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
