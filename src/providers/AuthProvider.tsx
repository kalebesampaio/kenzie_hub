import { ReactNode, createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { api } from "../services/api";
import { notify } from "../utils/toast";
interface ListProvaiderProps {
  children: ReactNode;
}

interface DataLogin {
  email?: string;
  password?: string;
}

interface IUser {
  id: number;
  bio: string;
  contact: string;
  course_module: string;
  email: string;
  name: string;
  password: string;
  techs: ITech[];
}
export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUserContext {
  user: IUser | null;
  signIn: (data: DataLogin) => void;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
export interface IToken {
  iat: number;
  exp: number;
  sub: string;
}

export const AuthContext = createContext({} as IUserContext);

export const AuthProvider = ({ children }: ListProvaiderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");

        if (!token) {
          return;
        }

        const { sub }: IToken = jwtDecode(token);

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const response = await api.get(`users/${sub}`);

        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const signIn = async (data: DataLogin) => {
    const response = await api
      .post("/sessions/", data)
      .catch((err) => notify("Login failed"));

    const { user: userResponse, token } = response?.data;
    notify("Login sucess");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    localStorage.setItem("@TOKEN", token);
    localStorage.setItem("@USERID", userResponse.id);

    setUser(userResponse);

    const toNavigate = location.state?.pathname || "/home";

    navigate(toNavigate);
  };

  return (
    <AuthContext.Provider value={{ signIn, user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
