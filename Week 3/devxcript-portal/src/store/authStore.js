import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: (userData) => set({ 
    user: userData, 
    isAuthenticated: true 
  }),
  
  logout: () => set({ 
    user: null, 
    isAuthenticated: false 
  }),
  
  // This function is now properly used in the profile component
  updateProfile: (updatedData) => set((state) => ({
    user: { ...state.user, ...updatedData }
  }))
}));

export default useAuthStore;