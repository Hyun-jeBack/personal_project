export interface RootState {
  email: any;
  password: string;
  passwordCheck: string;
  nickName: string;
  // 오류메세지
  emailMessage: any;
  passwordMessage: String;
  passwordCheckMessage: String;
  nickNameMessage: String;
  // 유효성 검사
  isEmail: any;
  isNickName: String;
  isPassword: String;
  isPasswordCheck: String;
}
