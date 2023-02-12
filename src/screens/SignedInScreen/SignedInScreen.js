import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "state/auth";
import Layout from "components/Layout";
import HomeScreen from "screens/HomeScreen";
import SettingsScreen from "screens/SettingsScreen";
import PreferencesScreen from "screens/PreferencesScreen";

function SignedInScreen() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/my-account" element={<SettingsScreen />} />
        <Route path="/preferences" element={<PreferencesScreen />} />
      </Routes>
    </Layout>
  );
}

export default SignedInScreen;
