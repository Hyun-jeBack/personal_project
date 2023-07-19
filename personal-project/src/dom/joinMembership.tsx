import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.tsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const JoinMembership = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const onChange = (event: { target: { name: any; value: any } }) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'passwordCheck') {
      setPasswordCheck(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    // 한글인지 체크 (한글은 2바이트, 영문 및 숫자는 1바이트로 처리)
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value);
    // 스페이스바 입력 막기
    if (event.key === ' ' || (isKorean && event.key === 'Spacebar')) {
      event.preventDefault();
    }
  };

  const signUp = async () => {
    try {
      //createUserWithEmailAndPassword 함수를 통해 회원가입을 하게 될 경우, 자동으로 로그인 됩니다.
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // 회원가입 성공시 userCrendential이라는 객체 안에 다양한 유저 정보가 담김.
      console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
  };

  // 사용자 인증 정보 확인
  useEffect(() => {
    setIsFormValid(Boolean(email && password && passwordCheck && name));
    onAuthStateChanged(auth, user => {
      // console.log(user.email); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      console.log(user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
    });
  }, []);

  // const signUp = (event) => {
  //   event.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // 회원가입 성공시
  //       console.log(userCredential);
  //     })
  //     .catch((error) => {
  //       // 회원가입 실패시
  //       console.error(error);
  //     });
  // };

  /*   const signIn = async event => {
    event.preventDefault();
    // console.log('click signIn'); // 로그 확인을 위해 추가
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
    navigate('/about');
  }; */

  /*   const logOut = async event => {
    event.preventDefault();
    // console.log('click logOut'); // 로그 확인을 위해 추가

    await signOut(auth);
  }; */

  /*   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    useEffect(() => {
      onAuthStateChanged(analytics, (user) => {
        // console.log(user.email); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
        console.log(user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      });
    }, []);
  }; */

  return (
    <div className="joinMembership-tab">
      <section className="account__layout">
        <h1 className="account__header">
          <Link to="/">제로여행</Link>
        </h1>
        <section className="sign-up">
          <div className="base-typography">
            <h2>회원가입</h2>
          </div>
          <form autoComplete="off">
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">이름</label>
              </div>
              <div className="input__container">
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={onChange}
                  placeholder="한글로 공백 없이 입력해주세요."
                  minLength={0}
                  maxLength={16}
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">이메일</label>
              </div>
              <div className="sign-up-form__wrapper">
                <div className="input__container">
                  <input
                    id="user-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    placeholder="이메일 주소를 입력해 주세요."
                    minLength={5}
                    maxLength={524288}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">비밀번호</label>
              </div>
              <div className="input__container">
                <input
                  id="user-password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onChange}
                  placeholder="비밀번호를 입력해주세요."
                  minLength={8}
                  maxLength={524288}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">비밀번호 확인</label>
              </div>
              <div className="input__container">
                <input
                  id="user-password-check"
                  name="passwordCheck"
                  type="password"
                  value={passwordCheck}
                  onChange={onChange}
                  placeholder="비밀번호를 다시 입력해주세요."
                  minLength={8}
                  maxLength={524288}
                  autoComplete="off"
                />
              </div>
            </div>
            <button
              onClick={signUp}
              className="btn btn__with-icon--left sign-up-form__btn--submit btn--primary btn--wide"
              type="submit"
              data-e2e="btn-sign-up">
              회원가입
            </button>
            <Link className={`icon-button icon-button--left ${isFormValid ? 'btn--primary' : ''}`} to="/loginTab">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.20711 12.5L8.85355 15.1465L8.14645 15.8536L4.29289 12L8.14645 8.14647L8.85355 8.85358L6.20711 11.5L20 11.5V12.5L6.20711 12.5Z"
                  fill="black"></path>
              </svg>
              로그인으로 돌아가기
            </Link>
          </form>
        </section>
      </section>
      <div className="toast-ui"></div>
    </div>
  );
};

export default JoinMembership;
