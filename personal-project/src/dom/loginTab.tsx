import { Link } from 'react-router-dom';

const LoginTab = () => {
  return (
    <>
      {/*       <div className="login-tab">
        <h2 className="main-logo">
          <Link to="/">제로여행</Link>
        </h2>
        <span className="login-taxt">───&nbsp; 로그인 &nbsp;───</span>
        <input type="text" className="id-input" placeholder="아이디를 입력하세요." />
        <input type="text" className="password-input" placeholder="비밀번호를 입력하세요." />
        <button className="login-button">로그인</button>
        <span className="or-text">또는</span>
        <div className="google-login">google-login</div>
        <Link to="/joinMembership">회원가입하기</Link>
      </div> */}
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
                <button className="btn--google btn--wide" type="button">
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
