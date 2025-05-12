import {supabase} from './supabase';

type SignInWithEmailRequest = {
  email: string;
  password: string;
};

export default {
  signInWithEmail: async (data: SignInWithEmailRequest) => {
    try {
      return supabase.auth.signInWithPassword(data);
    } catch (error) {
      throw error;
    }
  },
  signUpWithEmail: async (data: SignInWithEmailRequest) => {
    try {
      return supabase.auth.signUp(data);
    } catch (error) {
      throw error;
    }
  },
};
