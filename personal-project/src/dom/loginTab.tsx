import { GoogleAuthProvider, browserSessionPersistence, setPersistence, signInWithPopup } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const LoginTab = () => {


const [userData, setUserData] = useState('');
const navigate = useNavigate();

const handleGoogleLogin = () => {
  const provider = new GoogleAuthProvider(); // provider 구글 설정
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err);
      });

  })
  }

  useEffect(() => {
    console.log('userData changed:', userData);
    if (userData) {
      // 로그인이 완료되면 메인 페이지로 이동
      navigate('/');
    }
  }, [userData])
  

  return (
    <>
      <div className="login-tab">
        <main>
          <section className="account__layout">
            <h1 className="main-logo">
              <Link to="/">제로여행</Link>
            </h1>
            <section className="sign-in">
              <div className="base-typography">
                <h2>로그인</h2>
              </div>
              <section className="sign-in-google undefined">
                <button onClick={handleGoogleLogin} className="btn--google btn--wide" type="button">
                  <img
                    src="https://festival-moa-fc37b.firebaseapp.com/images/Google.jpeg"
                    alt="google-logo"
                    className="google-logo"
                  />
                  google 로그인
                </button>
              </section>
              <hr className="sign-in__divider" />
              <form>
                <div className="sign-in-form__block">
                  <div className="base-typography base-typography--label sign-in-form__label">
                    <label htmlFor="">이메일</label>
                  </div>
                  <div className="input__container">
                    <input
                      id="user-email"
                      name="user-email"
                      type="email"
                      placeholder="이메일 주소를 입력해 주세요."
                      minLength={0}
                      maxLength={524288}
                    />
                  </div>
                </div>
                <div className="sign-in-form__block">
                  <div className="base-typography base-typography--label sign-in-form__label">
                    <label htmlFor="">비밀번호</label>
                  </div>
                  <div className="input__container">
                    <input
                      id="user-password"
                      name="user-password"
                      type="password"
                      placeholder="비밀번호를 입력해 주세요."
                      minLength={0}
                      maxLength={524288}
                    />
                  </div>
                </div>
                <div className="sign-in-form__help">
                  <label className="checkbox">
                    <input type="checkbox" className="checkbox__trigger a11y" name="" value="자동로그인" />
                    {/* <i className="checkbox__icon">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 4L3.5 7L9.5 1" stroke="white"></path>
                      </svg>
                    </i> */}
                    <span className="checkbox__label">자동 로그인</span>
                  </label>
                </div>
                <button className="btn btn__with-icon--left btn--wide" type="submit" data-e2e="sign-in-btn">
                  로그인
                </button>
              </form>
              <p className="sign-in__sign-up-btn">
                <Link className="text-button text-button--primary" type="button" to="/joinMembership">
                  이메일로 회원가입
                </Link>
              </p>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default LoginTab;
