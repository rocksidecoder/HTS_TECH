import { createClient } from '@supabase/supabase-js'
import { APP_CONFIG } from '../config/index.js';

export const supabase = createClient(APP_CONFIG.SUPABASE_URL, APP_CONFIG.SUPABASE_KEY)