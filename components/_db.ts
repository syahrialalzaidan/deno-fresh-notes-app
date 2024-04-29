import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.42.7'

const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_KEY')!
)

export { supabase }