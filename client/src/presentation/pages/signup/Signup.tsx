import React from 'react'
import { Link } from 'react-router-dom'

import InputText from '../../components/atoms/InputText/InputText'
import InputEmail from '../../components/atoms/InputText/InputEmail'
import InputPassword from '../../components/atoms/InputText/InputPassword'
import Button from '../../components/atoms/Button/Button'

const Signup: React.FC = () => {
  return (
    <div className="container">
      <div>新規登録</div>
      <div>
        <div>
          ユーザー名
          <InputText value="" onChange={() => console.log('dammy function')} />
        </div>
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
            text="新規登録"
            onClick={() => console.log('dammy function')}
          />
        </div>
        <div>
          <Link to="/">ログインはこちら</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
