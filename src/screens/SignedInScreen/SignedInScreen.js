import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "state/auth";
import { NavBar } from "./comps";

function SignedInScreen() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default SignedInScreen;
