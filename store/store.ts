import { create } from "zustand";
import supabase from "../public/config/supabase";

interface User {
  id: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
  profile_img: string;
}

interface AuthState {
  loggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
}

const initialAuthState: AuthState = {
  loggedIn: false,
  user: null,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
};

const useAuth = create<AuthState>((set, get) => ({
  loggedIn: false,
  user: null,
  login: (email: string, password: string) => {
    const user: any = supabase.auth
      .signInWithPassword({ email, password })
      .then(() => {
        set((state: AuthState) => ({
          loggedIn: true,
          user,
        }));
      });
  },
  logout: () => {
    supabase.auth.signOut();
    set((state: AuthState) => ({
      loggedIn: false,
      user: null,
    }));
  },
  signup: (email: string, password: string) => {
    const user: any = supabase.auth.signUp({ email, password }).then(() => {
      set((state: AuthState) => ({
        loggedIn: true,
        user,
      }));
    });
  },
}));

export default useAuth;
