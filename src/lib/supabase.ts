import "react-native-url-polyfill/auto";

import * as SecureStore from "expo-secure-store";

import { createClient } from "@supabase/supabase-js";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://smynkeweckalcsmuetzz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteW5rZXdlY2thbGNzbXVldHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMDQyNjEsImV4cCI6MjAyNjc4MDI2MX0.2d_gorjC7SUPGZZ2TyAvoOEWOhT9irOwUVsuh4LjkFg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
