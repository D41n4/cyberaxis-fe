import { getAuthUser } from "api/auth";
import { getToken, makeLogout } from "api/utils";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthScreen from "screens/AuthScreen";
import SignedInScreen from "screens/SignedInScreen";
import { useAuth } from "state/auth";

function App() {
  const auth = useAuth();

  // used to check auth object if empty and token exists
  // if token exists, get user from backend and set it to auth object
  // if token doesn't exist, make logout

  useEffect(() => {
    if (!auth.user && getToken()) {
      getAuthUser()
        .then((res) => auth.setUser(res.user))
        .catch(() => {
          makeLogout();
        });
    }
  }, [auth]);

  // if auth object is empty and token exists, return null
  // this is to prevent the app from rendering before the user is fetched from backend
  if (!auth.user && getToken()) return null;

  return (
    <Routes>
      <Route path="/auth" element={<AuthScreen />} />
      <Route path="/*" element={<SignedInScreen />} />
    </Routes>
  );
}

export default App;
