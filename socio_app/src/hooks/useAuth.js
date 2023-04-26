import { useState, useEffect } from "react";
import { auth } from "../api/firebase";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return currentUser;
};

export  {useAuth};
