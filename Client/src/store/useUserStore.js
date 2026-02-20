import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginApi, registerApi, logoutApi } from "../api/authApi";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      // REGISTER
      register: async (name, email, password) => {
        try {
          const res = await registerApi({ name, email, password });

            const { token, ...user } = res.data; 

           set({ user, token });
          
        } catch (error) {
      const message = error.response?.data?.message || "Registration failed. Try again.";
        throw new Error(message);
          
        }
  
},

      // LOGIN
      login: async (email, password) => {
        try {
          const res = await loginApi({ email, password });

          const { token, ...user } = res.data; 

          set({ user, token });
        } catch (error) {
          const message = error.response?.data?.message || "Login failed. Try again.";
          throw new Error(message);
        }
 
},

      // LOGOUT
      logout: async () => {
        try {
          await logoutApi();
        } catch (e) {
          // even if the server call fails, still clear locally
        }

        set({ user: null, token: null });
      },
    }),
    {
      name: "auth-storage", 
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);