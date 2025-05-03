const { createClient } = require('@supabase/supabase-js');

const connectDB = async () => {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
  console.log('Supabase connected successfully');
  return supabase;
};

module.exports = { connectDB };
