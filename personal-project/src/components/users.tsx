import axios from 'axios';

// User 데이터 가져오기
const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
  return response.data;
};

// User 데이터 추가하기
const addUser = async (newUser: any) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, newUser);
};

// User 데이터 수정하기
const editUser = async (loginUser: { id: any; isLogin: any }) => {
  const { id, isLogin } = loginUser;
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, {
    isLogin,
  });
};

export { getUsers, addUser, editUser };
