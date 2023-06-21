import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./providers/AuthProvider";
import TechsProvider from "./providers/TechProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <AuthProvider>
        <TechsProvider>
          <RoutesMain />
        </TechsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
