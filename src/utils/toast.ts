import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (type: string) => {
  if (type === "Login sucess") {
    toast.success("Login realizado com sucesso!", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "Login failed") {
    toast.error("Ops! Algo deu errado", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "Successfully registered") {
    toast.success("Conta criada com sucesso!", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "failed to register") {
    toast.error("Ops! Algo deu errado", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }

  if (type === "Tech successfully created") {
    toast.success("Tecnologia criada com sucesso!", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "failure to create a new tech") {
    toast.error("Ops! Algo deu errado", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "tech deleted") {
    toast.success("Tecnologia deletada", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "failed to delete") {
    toast.error("Ops! Algo deu errado", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "altered technology") {
    toast.success("Tecnologia modificada com sucesso!", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
  if (type === "failed to change") {
    toast.error("Ops! Algo deu errado", {
      style: {
        background: "#343B41",
        color: "#F8F9FA",
      },
    });
  }
};
