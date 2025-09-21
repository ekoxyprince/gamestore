import React from "react";
import { useSegments, useRouter } from "expo-router";
import useAuthStore from "@/stores/useAuthStore";

const AuthContext = React.createContext({
  isAuth: false,
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const auth = useAuthStore().auth;
  const rootSegment = useSegments();

  React.useEffect(() => {
    if (auth.isAuth && rootSegment[0] == undefined) {
      router.replace("/(main)/home");
    }
    if (!auth.isAuth && rootSegment[0] != "(auth)") {
      return router.replace("/(auth)/signin");
    }
    if (auth.isAuth && rootSegment[0] == "(auth)") {
      return router.replace("/(main)/home");
    }
  }, [rootSegment, auth]);
  return (
    <AuthContext.Provider value={{ isAuth: auth.isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
