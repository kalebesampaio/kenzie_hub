import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { AuthContext, IToken } from "./AuthProvider";
import jwtDecode from "jwt-decode";
import { notify } from "../utils/toast";

interface ListProvaiderProps {
  children: ReactNode;
}

interface DataTech {
  title?: string;
  status?: string;
}

export interface ITechContext {
  newTech: (data: DataTech) => void;
  deleteTech: () => void;
  isOpenModalCreate: boolean;
  setIsOpenModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isTechs: DataTech[];
  setIsTechs: React.Dispatch<React.SetStateAction<DataTech[]>>;
  isTechId: string;
  setIsTechId: React.Dispatch<React.SetStateAction<string>>;
  updateTech: (data: DataTech) => void;
  techName: string;
  setTechName: React.Dispatch<React.SetStateAction<string>>;
}

export const TechContext = createContext({} as ITechContext);

const TechsProvider = ({ children }: ListProvaiderProps) => {
  const { setUser } = useContext(AuthContext);

  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);
  const [isTechs, setIsTechs] = useState<DataTech[]>([]);
  const [isTechId, setIsTechId] = useState<string>("");
  const [techName, setTechName] = useState<string>("");

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
    }
  };

  const newTech = async (data: DataTech) => {
    try {
      await api.post("/users/techs", data);
      notify("Tech successfully created");
      setIsOpenModalCreate(false);
      loadUser();
    } catch (error) {
      notify("failure to create a new tech");
      console.error(error);
    }
  };
  const deleteTech = async () => {
    try {
      await api.delete(`/users/techs/${isTechId}`);
      notify("tech deleted");
      loadUser();
      setIsOpenModalEdit(false);
    } catch (error) {
      notify("failed to delete");
      console.error(error);
    }
  };
  const updateTech = async (data: DataTech) => {
    try {
      await api.put(`/users/techs/${isTechId}`, data);
      notify("altered technology");
      loadUser();
      setIsOpenModalEdit(false);
    } catch (error) {
      notify("failed to change");
      console.error(error);
    }
  };
  return (
    <TechContext.Provider
      value={{
        newTech,
        deleteTech,
        setIsOpenModalCreate,
        isOpenModalCreate,
        isOpenModalEdit,
        setIsOpenModalEdit,
        isTechs,
        setIsTechs,
        isTechId,
        setIsTechId,
        updateTech,
        techName,
        setTechName,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechsProvider;
