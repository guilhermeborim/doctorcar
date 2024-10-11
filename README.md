REDUX - PASSO A PASSO

- Primeiro configurar a url_helper
- Segundo configurar o backend_helper
- Terceiro criar a pasta do estado (user, maintenance, vehicle)...
- Quarto criar o arquivo actionTypes.ts e definir elas
  ex:
  `   export const LOGIN = "user/login";`
- Quinta criar o arquivo actions.ts e definir elas
  ex:
  `
  import { getLogin } from "@/src/service/backend_helper";
  import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
  export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (\_, { rejectWithValue }) => {
  try {
  const response = await getLogin();
  return response.data;
  } catch (error: any) {
  return isRejectedWithValue(error.message);
  }

  },
  );
  `

- Sexto criar o arquivo reducer.ts e definir
  `
  import { createSlice } from "@reduxjs/toolkit";
  import { loginAsync } from "./actions";

  // cria o estado inicial
  const initialState = {
  user: null,
  status: "",
  success: false,
  };

  const userSlice = createSlice({
  name: "user",
  initialState,
  // aqui vc coloca os reducers que nao são async
  reducers: {
  logout: (state) => {
  state.user = null;
  },
  },
  // reducers que são async
  extraReducers(builder) {
  builder.addCase(loginAsync.fulfilled, (state, action) => {
  // aqui vc coloca as info que estão vindo da api. data, status etc..
  state.user = action.payload.data;
  state.success = true;
  state.status = action.payload.status;
  });
  builder.addCase(loginAsync.rejected, (state, action) => {
  state.success = false;
  state.status = "rejeitado";
  });
  },
  });

  // aqui só precisa importar o reducer que não são async
  export const { logout } = userSlice.actions;

  export default userSlice.reducer;
  `

  - Sétimo importar o reducer no arquivo reducers.ts

  USANDO NO COMPONENTE

  ex:
  `
  import { useAppDispatch, useTypedSelector } from "@/src/store/store";
  import { loginAsync } from "@/src/store/user/actions";

  const dispatch = useAppDispatch();
  const { user, status, success } = useTypedSelector((state) => state.user);

  const login = () => {
  dispatch(loginAsync());
  };

  console.log("user", user);
  `

TIPAGEM DO DATA REDUCER EX:

`  
  const initialState: {
  data: GetUser | null;
  loading: boolean;
  success: boolean;
  error: boolean;
} = {
  data: null,
  loading: false,
  success: false,
  error: false,
};`
