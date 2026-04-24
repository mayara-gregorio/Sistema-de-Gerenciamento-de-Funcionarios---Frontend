import { AuthProvider } from "./provider/authProvider";
import { AppRoutes } from "./routes";

export default function App(){
  return(
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}