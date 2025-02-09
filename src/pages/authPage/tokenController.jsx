import axios from "axios";

// const APP_URL = "http://glovo";

//const loginForm = document.getElementById('loginForm');
//const loginInput = document.getElementById('login');
//const passwordInput = document.getElementById('password');

//loginForm.addEventListener('submit', async(event) => {
//    event.preventDefault();
//    const login = loginInput.value;
//    const password = passwordInput.value;
//    await loginInfo(login ,password);
//})

export const loginInfo = async (name, password) => {
  try {
    const tokenResponse = await axios.post("http://glovo/api/login", {
      name,
      password,
    });
    return tokenResponse.data; // Возвращаем весь объект ответа
  } catch (error) {
    console.error("Ошибка при получении токена:", error);
    throw error; // Пробрасываем ошибку дальше
  }
};

export const logout = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const logoutToken = await axios.post(
      "http://glovo/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    localStorage.removeItem("accessToken");
  } catch {
    console.error("не существует или не существовало токена");
  }
};

//export const  = async() => {
//    try {
//        const refresh = async() => {
//        const refreshQuery = axios.post(APP_URL + '/refershToken' ,{} , {
//            headers: {Authorization :`Bearer ${localStorage.getItem('accessToken')}` }
//        });
//        localStorage.setItem('accessToken', refreshQuery.data.access_token);
//        }
//    } catch {
//        console.error('Ошибка обновления токена , возможно он не сущетсвует')
//    }
//    return refreshQuery.data.access_token;
//}
