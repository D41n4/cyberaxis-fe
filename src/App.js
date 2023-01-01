import { Route, Routes } from "react-router-dom";
import AuthScreen from "screens/AuthScreen";
import SignedInScreen from "screens/SignedInScreen";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthScreen />} />
      <Route path="/*" element={<SignedInScreen />} />
    </Routes>
  );
}

export default App;
