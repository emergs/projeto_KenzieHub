import { ReactNode, useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

interface IUserWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

interface IUserTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: IUserTechs[];
  works: IUserWorks[];
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

interface IUserContext {
  addCount: () => void;
  deleteUserStorage: () => void;
  closeModalCreate: () => void;
  closeModalUpdate: () => void;
  getEvent: (event: string) => void;
  getIdTech: (id: string, title: string) => void;
  openModalCreate: () => void;
  openModalUpdate: () => void;
  updateTech: (data: IUserUpdateTech) => void;
  createTech(data: ICreateTech): Promise<void>;
  userLogin: (data: IUserLogin) => void;
  registerUser: (data: IUserRegister) => void;
  loading: boolean;
  modalCreateIsOpen: boolean;
  modalUpdateIsOpen: boolean;
  titleTech: string;
  user: IUser;
  navigateToRegister: () => void;
  backToLogin: () => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserRegister {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUpadateTech {
  name: string;
  status: string;
}

export interface ICreateTech {
  title: string;
  status: string;
}

type IUserUpdateTech = Omit<IUpadateTech, "name">;

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [idTech, setIdTech] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [titleTech, setTitleTech] = useState<string>("");
  const [modalCreateIsOpen, setCreateIsOpen] = useState<boolean>(false);
  const [modalUpdateIsOpen, setUpdateIsOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = JSON.parse(localStorage.getItem("@kenzieHubTOKEN") || "{}");
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@kenzieHubTOKEN");
          localStorage.removeItem("@kenzieHubUSERID");
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [count]);

  const userLogin = async (data: IUserLogin) => {
    try {
      const request = await api.post("/sessions", data);
      toast.success("Login realizado com sucesso");
      navigate("../dashboard", { replace: true });
      setUser(request.data.user);
      localStorage.setItem(
        "@kenzieHubTOKEN",
        JSON.stringify(request.data.token)
      );
      localStorage.setItem(
        "@kenzieHubUSERID",
        JSON.stringify(request.data.user.id)
      );
    } catch {
      toast.error("Usuário não cadastrado");
    }
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      const request = await api.post("/users", data);
      if (request) {
        navigate("../login", { replace: true });
        toast.success("Usuario criado com sucesso!");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const deleteUserStorage = () => {
    navigate("../Login", { replace: true });
    localStorage.removeItem("@kenzieHubTOKEN");
    localStorage.removeItem("@kenzieHubUSERID");
    // setUser([])
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const navigateToRegister = () => {
    navigate("../register", { replace: true });
  };

  const backToLogin = () => {
    navigate("../login", { replace: true });
  };

  function openModalCreate() {
    setCreateIsOpen(true);
  }

  function openModalUpdate() {
    setUpdateIsOpen(true);
  }

  function closeModalCreate() {
    setCreateIsOpen(false);
  }

  function closeModalUpdate() {
    setUpdateIsOpen(false);
  }

  const createTech = async (data: ICreateTech): Promise<void> => {
    const token = JSON.parse(localStorage.getItem("@kenzieHubTOKEN") || "{}");
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.post("/users/techs", data);
        toast.success("Tecnologia criada com sucesso");
        addCount();
        closeModalCreate();
      } catch (error) {
        console.error(error);
        toast.error("Erro ao criar tecnologia");
      }
    }
  };

  function getIdTech(id: string, title: string) {
    setIdTech(id);
    setTitleTech(title);
  }

  function getEvent(event: string) {
    setEvent(event);
  }

  const updateTech = async (data: IUserUpdateTech) => {
    const up = { status: data.status };

    const token = JSON.parse(localStorage.getItem("@kenzieHubTOKEN") || "{}");
    if (event === "updateTech") {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        await api.put(`/users/techs/${idTech}`, up);
        setIdTech("");
        setCount(count + 1);
        setUpdateIsOpen(false);
        toast.success("Status da tecnologia alterado com sucesso");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.delete(`/users/techs/${idTech}`);
        setIdTech("");
        setCount(count + 1);
        setUpdateIsOpen(false);
        toast.success("Tecnologia deletada com sucesso");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        deleteUserStorage,
        addCount,
        openModalCreate,
        openModalUpdate,
        closeModalCreate,
        closeModalUpdate,
        modalCreateIsOpen,
        modalUpdateIsOpen,
        getIdTech,
        getEvent,
        updateTech,
        loading,
        titleTech,
        navigateToRegister,
        registerUser,
        backToLogin,
        createTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
