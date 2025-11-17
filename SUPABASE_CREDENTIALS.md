# Supabase Credentials - TrouveUnCadeau.xyz

> ⚠️ **TEMPORARY CREDENTIALS** - These will be rotated before production launch
> Created: November 16, 2025
> Status: Development/Testing Only

## Project Information

- **Project Name**: trouveuncadeau-prod
- **Project ID**: kngvuirpetmocxvssfiw
- **Organization**: TrouveUnCadeau (Free Tier)
- **Region**: Americas
- **Database**: PostgreSQL (Nano - Free Tier)

## API Configuration

### Supabase URL
```
https://kngvuirpetmocxvssfiw.supabase.co
```

### Environment Variables

Add these to your `.env.local` file:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://kngvuirpetmocxvssfiw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<see_supabase_dashboard>
SUPABASE_SERVICE_ROLE_KEY=<see_supabase_dashboard>
DATABASE_URL=<see_project_settings>
```

## Access Information

### Dashboard Access
- **URL**: https://supabase.com/dashboard/project/kngvuirpetmocxvssfiw
- **API Keys**: https://supabase.com/dashboard/project/kngvuirpetmocxvssfiw/settings/api-keys
- **Auth**: GitHub OAuth (trouveuncadeau.xyz@gmail.com)

### API Keys Location

All API keys are available in the Supabase dashboard:
1. Navigate to Project Settings > API
2. **Anon/Public Key**: Safe for client-side use with RLS enabled
3. **Service Role Key**: Server-side only, bypasses RLS

### Database Password

The database password was auto-generated during project creation.
Retrieve from: Project Settings > Database > Connection String

## Security Notes

1. ✅ Row Level Security (RLS) policies are configured in migration files
2. ✅ Anon key is safe for client-side with proper RLS
3. ⚠️ Service Role key must NEVER be exposed to client
4. ⚠️ These are temporary development keys
5. 🔄 Plan to rotate all keys before production launch (Nov 30)

## Migration Status

- ✅ Initial schema created: `supabase/migrations/20251116000000_initial_schema.sql`
- ⏳ Pending: Deploy migrations to Supabase project
- ⏳ Pending: Test database connection

## Next Steps

1. Deploy database schema migrations
2. Configure authentication providers
3. Set up storage buckets for images
4. Test RLS policies
5. Rotate keys before production

---

**Last Updated**: November 16, 2025, 22:30 EST
**Updated By**: Comet (Autonomous Setup)      
