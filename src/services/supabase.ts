import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.EXPO_PUBLIC_SUPBASE_URL ?? ""
const supabaseKey = process.env.EXPO_PUBLIC_SUPBASE_ANON_KEY ?? ""

export const supabase = createClient(supabaseUrl, supabaseKey)