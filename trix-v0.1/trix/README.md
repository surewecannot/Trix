# Trix v0.1

Trix is a self-hosted business workspace/CRM foundation designed to grow into a full Bitrix24-style platform while remaining your own codebase and data.

## Included in this starter
- Next.js App Router + TypeScript
- Responsive desktop/mobile web UI
- Login/sign-up with Supabase Auth
- Dashboard shell
- CRM navigation for contacts, companies, leads, deals and activities
- Standalone output enabled for self-hosting/Docker
- Supabase browser client using a publishable key only
- Existing Trix database migration included under `supabase/migrations/`

## Configure Supabase
Copy `.env.example` to `.env.local` and set:

`NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co`
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY`

Do not put a service-role/secret key in the browser or in `NEXT_PUBLIC_*` variables.

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Android-only workflow
1. Upload this ZIP to a GitHub repository named `trix` from your Android phone.
2. In GitHub, open the repository and choose **Add file → Upload files** if available; if GitHub only accepts individual files in your mobile view, use the repository's web upload flow or GitHub's mobile/browser desktop view.
3. Connect the repository to Vercel and add the two Supabase environment variables.
4. Deploy. The web app is responsive and is the first application layer for the future native Android app.

## Roadmap
CRM records → pipeline/Kanban → tasks/projects → calendar → messaging/email/SMS/phone adapters → files → automations/workflows → reporting → administration → Android app → Docker/self-hosted distribution.
