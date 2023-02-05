import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "state/auth";
import Layout from "components/Layout";
import HomeScreen from "screens/HomeScreen";

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
      </Routes>
    </Layout>
  );
}

export default SignedInScreen;
