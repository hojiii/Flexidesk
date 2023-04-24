import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import useTrueHook from '../../hooks/useTrueHook';
import {
  StBackground,
  StForm,
  StFormBox,
  StLink,
  StLoginContain,
  StLoginForm,
  StLoginIcon,
  StLoginIconDiv,
  StLongButton,
  StOverall,
  SterrorFont,
} from './UserStyled';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';
import { useValidEmail, useSignUp } from '../../hooks/useSignUpHook';
import LoginModal from '../../features/LoginModal';

function Login() {
  const [user, setUser] = useSignUp({
    email: '',
    password: '',
  });

  const onChangeHandler = e => {
    const { value, name } = e.target;
    setUser(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [emailMsg, validEmail] = useValidEmail();
  const [isError, setIsError] = useState(false);

  const onsubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', user);
      const token = response.headers.authorization;
      const refreshToken = response.headers.refresh_token;
      const payload = jwt_decode(token);

      // cookies에 저장////////////////////////////////////////////////////////////////////////////////////////////////////////////
      cookies.set('token', token.split(' ')[1], { path: '/', maxAge: 3540 });
      cookies.set('refresh_token', refreshToken.split(' ')[1], {
        path: '/',
        maxAge: 3540,
      });
      cookies.set('userId', payload.userId, { path: '/', maxAge: 3540 });
      cookies.set('companyName', String(payload.companyName), {
        path: '/',
        maxAge: 3540,
      });
      cookies.set('username', String(payload.username), {
        path: '/',
        maxAge: 3540,
      });
      cookies.set('role', payload.role, { path: '/', maxAge: 3540 });
      // cookies에 저장////////////////////////////////////////////////////////////////////////////////////////////////////////////
      navi('/adminspace');
    } catch (e) {
      setIsError(true);
    }
  };

  const onClickUserHandler = e => {
    e.preventDefault();
    navi('/signupuser');
  };

  return (
    <StBackground height="100vh">
      <StOverall>
        <div
          style={{
            marginTop: '200px',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <StLoginForm onSubmit={onsubmitHandler} width="420px">
            <StForm>
              <StFormBox>
                <StFont width="100%" align="start" fontSize="28px">
                  로그인
                </StFont>

                <StSmallFont
                  width="100%"
                  align="start"
                  fontSize="1rem"
                  marginTop="10px"
                >
                  이메일 주소와 비밀번호를 입력해주세요.
                </StSmallFont>
              </StFormBox>

              <StLoginContain>
                <StLoginIconDiv>
                  <StLoginIcon src="img/loginIcon3.png" alt="img/loginIcon3" />
                </StLoginIconDiv>

                <Input
                  type="email"
                  value={user.email}
                  onChange={e => {
                    validEmail(e);
                    setUser({ ...user, email: e.target.value });
                  }}
                  name="email"
                  placeholder="이메일"
                  required
                  border="none"
                />
              </StLoginContain>

              <StLoginContain>
                <StLoginIconDiv>
                  <StLoginIcon src="img/loginIcon4.png" alt="img/loginIcon4" />
                </StLoginIconDiv>
                <Input
                  type="password"
                  value={user.password}
                  onChange={onChangeHandler}
                  name="password"
                  placeholder="비밀번호"
                  required
                  border="none"
                />
              </StLoginContain>
              {isError && (
                <StSmallFont
                  width="420px"
                  align="start"
                  fontSize="0.875rem"
                  weight="400"
                  color="red"
                >
                  계정 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시
                  확인해주세요.
                </StSmallFont>
              )}
              <StLongButton> 로그인 </StLongButton>
              <div
              style={{
                display:'flex',
                flexDirection:'row',
              }}>
                <StLink to={'/signup'}> 관리자 회원가입 </StLink>
                <StLink to={'/signupuser'}> 일반 회원가입 </StLink>
                </div>
            </StForm>
          </StLoginForm>
        </div>
      </StOverall>
    </StBackground>
  );
}

export default Login;
