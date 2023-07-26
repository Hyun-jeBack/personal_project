import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase.js';
// import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useQueryClient, useMutation, useQuery } from 'react-query';
// import { addUser } from '../components/users.js';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../type/type.js';

const JoinMembership = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const navigate = useNavigate();

  // 사용자 인증 정보 확인
 /*  useEffect(() => {
    onAuthStateChanged(auth, user => {
      // console.log(user.email); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      console.log(user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
    });
  }, []); */


  const validateName = (input: string) => {
    // 특수문자와 띄어쓰기를 입력하지 못하는 정규식 패턴
    const pattern = /^[ㄱ-힣a-zA-Z]+$/;
    return pattern.test(input);
  };

  // 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일
  // const pattern = /^[ㄱ-힣a-zA-Z]+$/; // 특수문자 & 띄어쓰기

  const onChange = (event: { target: { name: any; value: any } }) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'name') {
      // 입력값이 특수문자와 띄어쓰기를 제외한 문자로 작성되게
      if (validateName(value)) {
        setNickName(value);
      } else {
        alert('특수문자 및 공백은 사용불가합니다.')
      }
      setIsFormValid(!!value);
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

    // 가입항목을 모두 잘기입했는지 확인
    const isValidName = validateName(nickName);
    const isValidEmail = !!emailRegex.test(email);
    const isValidPassword = password.length >= 8;
    const isValidPasswordCheck = passwordCheck.length >= 8;
  
    // 비밀번호와 비밀번호 확인이 동일한지 검사
    const isPasswordMatch = password === passwordCheck;
  
    // 모든 조건을 만족하는지 검사하고 setIsFormValid 설정
    setIsFormValid(isValidName && isValidEmail && isValidPassword && isValidPasswordCheck && isPasswordMatch);

  };
  

  const signUp = async (email: any, password: any) => {
    try {
      //createUserWithEmailAndPassword 함수를 통해 회원가입을 하게 될 경우, 자동으로 로그인 됩니다.
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { stsTokenMannager, uid } = userCredential;
      // setAuthInfo({ uid, email, authToken: stsTokenManager });
      navigate('/');
      // 회원가입 성공시 userCrendential이라는 객체 안에 다양한 유저 정보가 담김.
      console.log(userCredential);
    } catch ({ code, message }) {
      // alert(errorMessage[code]);
      // console.error(error);
    }
  };

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

    /* const signIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // console.log('click signIn'); // 로그 확인을 위해 추가
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
    navigate('/about');
  }; */

   /*  const logOut = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // console.log('click logOut'); // 로그 확인을 위해 추가

    await signOut(auth);
  };  */

   /* const handleSignUp = () => {
    useEffect(() => {
      onAuthStateChanged(analytics, (user) => {
        // console.log(user.email); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
        console.log(user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      });
    }, []);
  }; */

  return (
    <>
    <div className="joinMembership-tab">
      <section className="account__layout">
        <h1 className="account__header">
          <Link to="/">제로여행</Link>
        </h1>
        <section className="sign-up">
          <div className="base-typography">
            <h2>회원가입</h2>
          </div>
          <form autoComplete="off" method="post">
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">닉네임(8자 이하)</label>
              </div>
              <div className="input__container">
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  value={nickName}
                  onChange={onChange}
                  placeholder="공백 없이 입력해주세요."
                  minLength={0}
                  maxLength={8}
                  autoComplete="off"
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
                <label htmlFor="">비밀번호(최소 8자)</label>
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
              className={`btn--wide ${isFormValid ? 'btn--primary' : ''}`}
              type="submit"
              data-e2e="btn-sign-up">
              회원가입
            </button>
            <Link className={`icon-button icon-button--left `} to="/loginTab">
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
    </>
  );
};

export default JoinMembership;

/* 
제일 안위험한거

  const [isFormValid, setIsFormValid] = useState(false);

  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const navigate = useNavigate();

  // 사용자 인증 정보 확인
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      // console.log(user.email); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      console.log(user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
    });
  }, []);

  // 유효성 검사를 위한 Dom 요소 접근
  const nickNameValidationMsgRef = useRef('');

  const validateName = (input: string) => {
    // 특수문자와 띄어쓰기를 입력하지 못하는 정규식 패턴
    const pattern = /^[ㄱ-힣a-zA-Z]+$/;
    return pattern.test(input);
  };

  // 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일
  const pattern = /^[ㄱ-힣a-zA-Z]+$/; // 특수문자 & 띄어쓰기

  const onChange = (event: { target: { name: any; value: any } }) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'name') {
      // 입력값이 특수문자와 띄어쓰기를 제외한 문자로 이루어져 있는지 검사
      // if (validateName(value)) {
      // }
      setNickName(value);
      setIsFormValid(emailRegex.test(value));
    }
    if (name === 'email') {
      setEmail(value);
      setIsFormValid(!!value);
    }
    if (name === 'password') {
      setPassword(value);
      // 비밀번호 입력이 변경되면 비교 검증
      if (value.length > 7) {
        setIsFormValid(value === passwordCheck);
      }
    }
    if (name === 'passwordCheck') {
      setPasswordCheck(value);
      // 비밀번호 확인 입력이 변경되면 비교 검증
      if (value.length > 7) {
        setIsFormValid(password === value);
      }
    }
  };
  

  // const onChange = (event: { target: { name: any; value: any; }; }) => {
  //   const {
  //     target: { name, value },
  //   } = event;
  //   if (name === 'email') {
  //     setEmail(value);
  //   }
  //   if (name === 'password') {
  //     setPassword(value);
  //   }
  // };

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

    const signIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // console.log('click signIn'); // 로그 확인을 위해 추가
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
    navigate('/about');
  };

    const logOut = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // console.log('click logOut'); // 로그 확인을 위해 추가

    await signOut(auth);
  }; 

   const handleSignUp = () => {
    useEffect(() => {
      onAuthStateChanged(analytics, (user) => {
        // console.log(user.email); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
        console.log(user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      });
    }, []);
  };

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
          <form autoComplete="off" method="post">
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">닉네임(8자 이하)</label>
              </div>
              <div className="input__container">
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  value={nickName}
                  onChange={onChange}
                  placeholder="공백 없이 입력해주세요."
                  minLength={0}
                  maxLength={8}
                  autoComplete="off"
                />
              </div>
            </div>
            <p ref={nickNameValidationMsgRef}>특수문자 및 공백은 사용이 불가합니다.</p>
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
                <label htmlFor="">비밀번호(최소 8자)</label>
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
              className={`btn--wide ${isFormValid ? 'btn--primary' : ''}`}
              type="submit"
              data-e2e="btn-sign-up">
              회원가입
            </button>
            <Link className={`icon-button icon-button--left `} to="/loginTab">
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








    const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Invalidate의 과정
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  // 다중 input
  const [inputs, setInputs] = useState({
    user: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const { user, password } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 유효성 검사를 위한 Dom 요소 접근
  const userRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmRef = useRef('');
  const nickNameValidationMsgRef = useRef('');
  const pwValidationMsgRef = useRef('');
  const checkPwValidationMsgRef = useRef('');

  // 정규표현식
  const idCheck = /^(?=.*[a-z])[a-z0-9]{5,20}$/;
  const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  // 유효성 검사
  useEffect(() => {
    if (!idCheck.test(inputs.user)) {
      nickNameValidationMsgRef.current.style.display = 'block';
    } else {
      nickNameValidationMsgRef.current.style.display = 'none';
    }

    if (!pwCheck.test(inputs.password)) {
      pwValidationMsgRef.current.style.display = 'block';
    } else {
      pwValidationMsgRef.current.style.display = 'none';
    }

    if (inputs.password !== confirmPassword) {
      checkPwValidationMsgRef.current.style.display = 'block';
    } else {
      checkPwValidationMsgRef.current.style.display = 'none';
    }
  }, [inputs, confirmPassword]);

  // json server에서 posts 컬렉션 데이터 가져오기
  const { isLoading, isError, data } = useQuery('users', getUsers);
  if (isLoading) return <p>로딩중입니다...</p>;

  // join 버튼 클릭시 유효성 검사 후 json server users 컬렉션에 데이터 추가
  const joinButtonHandler = () => {
    const idValidation = nickNameValidationMsgRef.current.style.display;
    const pwValidation = pwValidationMsgRef.current.style.display;
    const checkPwValidation = checkPwValidationMsgRef.current.style.display;
    const duplicateIdCheck = data.map(userData => {
      return userData.user === inputs.user;
    });
    if (inputs.user === '') {
      alert('아이디를 입력해주세요.');
      userRef.current.focus();
      return false;
    } else if (duplicateIdCheck[0]) {
      alert('사용할 수 없는 아이디입니다.');
    } else if (inputs.password === '') {
      alert('비밀번호를 입력해주세요.');
      passwordRef.current.focus();
      return false;
    } else if (confirmPassword === '') {
      alert('비밀번호 확인을 입력해주세요.');
      passwordConfirmRef.current.focus();
      return false;
    } else if (idValidation === 'none' && pwValidation === 'none' && checkPwValidation === 'none') {
      mutation.mutate({ ...inputs, isLogin: false, id: shortid() });
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } else {
      alert('조건이 맞지 않는 항목이 있습니다.');
    }
  };

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
          <form
            autoComplete="off"
            method="post"
            onSubmit={function (e) {
              e.preventDefault();
            }}>
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">닉네임(8자 이하)</label>
              </div>
              <div className="input__container">
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  value={user}
                  onChange={onChange}
                  placeholder="공백 없이 입력해주세요."
                  minLength={0}
                  maxLength={8}
                  autoComplete="off"
                />
              </div>
            </div>
            <p ref={nickNameValidationMsgRef}>특수문자 및 공백은 사용이 불가합니다.</p>
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
                <label htmlFor="">비밀번호(최소 8자)</label>
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
              className={`btn--wide ${isFormValid ? 'btn--primary' : ''}`}
              type="submit"
              data-e2e="btn-sign-up">
              회원가입
            </button>
            <Link className={`icon-button icon-button--left `} to="/loginTab">
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
*/

/* 
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    // 한글인지 체크 (한글은 2바이트, 영문 및 숫자는 1바이트로 처리)
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value);
    // 스페이스바 입력 막기
    if (event.key === ' ' || (isKorean && event.key === 'Spacebar')) {
      event.preventDefault();
    }
  };
*/

/* 
  const [isFormValid, setIsFormValid] = useState(false);
  // const history = useHistory();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordCheck, setPasswordCheck] = useState('');

  //  리덕스 스토어에 저장한 요소를 useselector로 불러
  const {
    // 이메일,닉네임,비밀번호,비밀번호 확인
    email,
    password,
    passwordCheck,
    nickName,
    // 오류메세지
    emailMessage,
    passwordMessage,
    passwordCheckMessage,
    nickNameMessage,
    // 유효성 검사
    isEmail,
    isNickName,
    isPassword,
    isPasswordCheck,
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const onChangeEmail = useCallback((event: { target: { value: any } }) => {
    dispatch({ type: 'CHANGE_EMAIL', payload: event.target.value });
    dispatch({
      type: 'CHANGE_EMAIL_MESSAGE',
      payload: event.target.value,
    });
  }, []);

  const onChangeNickname = useCallback((event: { target: { value: any } }) => {
    dispatch({ type: 'CHANGE_NICKNAME', payload: event.target.value });
    dispatch({
      type: 'CHANGE_NICKNAME_MESSAGE',
      payload: event.target.value,
    });
  }, []);

  const onChangePassword = useCallback((event: { target: { value: any } }) => {
    dispatch({ type: 'CHANGE_PASSWORD', payload: event.target.value });
    dispatch({
      type: 'CHANGE_PASSWORD_MESSAGE',
      payload: event.target.value,
    });
  }, []);
  // 비밀번호 확인은 비밀번호를 종속성으로 둡니다.
  const onChangePasswordCheck = useCallback(
    (event: { target: { value: any } }) => {
      dispatch({ type: 'CHANGE_PASSWORDCHECK', payload: event.target.value });
      dispatch({
        type: 'CHANGE_PASSWORDCHECK_MESSAGE',
        payload: event.target.value,
      });
    },
    [password]
  );
  const navigate = useNavigate();

  // const validateName = (input: string) => {
  //   // 특수문자와 띄어쓰기를 입력하지 못하는 정규식 패턴
  //   const pattern = /^[ㄱ-힣a-zA-Z]+$/;
  //   return pattern.test(input);
  // };

  // const onChange = (event: { target: { name: any; value: any } }) => {
  //   const {
  //     target: { name, value },
  //   } = event;
  //   if (name === 'name') {
  //     // 입력값이 특수문자와 띄어쓰기를 제외한 문자로 이루어져 있는지 검사
  //     if (validateName(value)) {
  //       setName(value);
  //     }
  //   }
  //   if (name === 'email') {
  //     setEmail(value);
  //   }
  //   if (name === 'password') {
  //     setPassword(value);
  //     // 비밀번호 입력이 변경되면 비교 검증
  //     setIsFormValid(value === passwordCheck);
  //   }
  //   if (name === 'passwordCheck') {
  //     setPasswordCheck(value);
  //     // 비밀번호 확인 입력이 변경되면 비교 검증
  //     setIsFormValid(password === value);
  //   }
  // };
  // // 사용자 인증 정보 확인
  // useEffect(() => {
  //   // setIsFormValid(Boolean(email && password && passwordCheck && name));
  //   setIsFormValid(password !== '' && password === passwordCheck);
  //   onAuthStateChanged(auth, user => {
  //     // console.log(user.email); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
  //     console.log(user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
  //   });
  // }, []);

  // const signUp = async () => {
  //   if (isFormValid) {
  //   } else {
  //     alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
  //   }
  //   try {
  //     //createUserWithEmailAndPassword 함수를 통해 회원가입을 하게 될 경우, 자동으로 로그인 됩니다.
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     // 회원가입 성공시 userCrendential이라는 객체 안에 다양한 유저 정보가 담김.
  //     console.log(userCredential);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

    const signIn = async event => {
    event.preventDefault();
    // console.log('click signIn'); // 로그 확인을 위해 추가
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
    navigate('/about');
  };

    const logOut = async event => {
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
  };

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
          <form autoComplete="off" method="post">
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">닉네임(8자 이하)</label>
              </div>
              <div className="input__container">
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  value={nickName}
                  onChange={onChangeNickname}
                  placeholder="공백 없이 입력해주세요."
                  minLength={0}
                  maxLength={8}
                  autoComplete="off"
                />
              </div>
              {nickName.length > 0 && <span className={`${isNickName ? 'error' : 'success'}`}>{nickNameMessage}</span>}
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
                    onChange={onChangeEmail}
                    placeholder="이메일 주소를 입력해 주세요."
                    minLength={5}
                    maxLength={524288}
                    autoComplete="off"
                  />
                </div>
              </div>

              {email.length > 0 && <span className={`${isEmail ? 'error' : 'success'}`}>{emailMessage}</span>}
            </div>
            <div className="sign-up-form__block">
              <div className="base-typography base-typography--label sign-up-form__label">
                <label htmlFor="">비밀번호(최소 8자)</label>
              </div>
              <div className="input__container">
                <input
                  id="user-password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="비밀번호를 입력해주세요."
                  minLength={8}
                  maxLength={524288}
                  autoComplete="off"
                />
              </div>

              {password.length > 0 && <span className={`${isPassword ? 'error' : 'success'}`}>{passwordMessage}</span>}
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
                  onChange={onChangePasswordCheck}
                  placeholder="비밀번호를 다시 입력해주세요."
                  minLength={8}
                  maxLength={524288}
                  autoComplete="off"
                />
              </div>
              {passwordCheck.length > 0 && (
                <span className={`${isPasswordCheck ? 'error' : 'success'}`}>{passwordCheckMessage}</span>
              )}
            </div>
            <button
              onClick={async event => {
                event.preventDefault();

                if (!email || !nickName || !passwordCheck || !password) {
                  alert('빈칸을 채워주세요!');
                } else {
                  try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const collectionRef = collection(db, 'users');
                    await addDoc(collectionRef, {
                      email: email,
                      nickName: nickName,
                    });
                    // 가입이 정상적으로 되면 로그인 페이지로 넘어갑니다.
                    navigate('/loginTab', {
                      state: { email: email, nick: nickName },
                    });
                    // 버튼을 누르면 인풋창이 빈칸으로 초기화됩니다.
                    dispatch({ type: 'CLEAR' });
                  } catch (error) {
                    console.error(error);
                  }
                }
              }}
              className={`btn--wide ${isFormValid ? 'btn--primary' : ''}`}
              type="submit"
              data-e2e="btn-sign-up">
              회원가입
            </button>
            <Link className={`icon-button icon-button--left `} to="/loginTab">
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
*/
