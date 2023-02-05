import { getAuthUser } from "api/auth";
import { getToken, makeLogout } from "api/utils";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthScreen from "screens/AuthScreen";
import SignedInScreen from "screens/SignedInScreen";
import { useAuth } from "state/auth";

function App() {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user && getToken()) {
      getAuthUser()
        .then((res) => auth.setUser(res.user))
        .catch(() => {
          makeLogout();
        });
    }
  }, [auth]);

  if (!auth.user && getToken()) return null;

  return (
    <Routes>
      <Route path="/auth" element={<AuthScreen />} />
      <Route path="/*" element={<SignedInScreen />} />
    </Routes>
  );
}

export default App;
