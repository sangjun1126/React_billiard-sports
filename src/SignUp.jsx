import React, { useState } from 'react';
import './SignUp.css'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validateForm = () => {
    if (!name || !email || !password) {
      setError('모든 필드를 입력해주세요.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('유효한 이메일을 입력해주세요.');
      return false;
    }
    if (password.length < 6) {
      setError('비밀번호는 6자리 이상이어야 합니다.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 폼 데이터를 처리하는 로직
      setMessage('가입이 완료되었습니다.');
    }
  };

  return (
    <div>
      <h1>회원 가입 페이지에요</h1>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          이메일:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          비밀번호:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default Signup;
