# Pluma Chain Landing - Cloudflare Pages Deployment

This Next.js project is optimized for deployment on Cloudflare Pages.

## Quick Start

### Development
```bash
pnpm install
pnpm dev
```

### Building for Cloudflare Pages
```bash
pnpm run build
```

### Local Preview with Cloudflare
```bash
pnpm run preview
```

### Deploy to Cloudflare Pages
```bash
pnpm run deploy
```

## Deployment Configuration

### Cloudflare Pages Settings
- **Build command**: `pnpm run build`
- **Build output directory**: `dist`
- **Node.js version**: `18` or higher
- **Environment variables**: Set any required environment variables in the Cloudflare dashboard

### Automatic Deployment
1. Connect your repository to Cloudflare Pages
2. Set the build command to `pnpm run build`
3. Set the build output directory to `dist`
4. Deploy automatically on every push to main branch

## Features Optimized for Cloudflare Pages
- ✅ Static export configuration
- ✅ Optimized image handling
- ✅ Proper caching headers
- ✅ Client-side routing support
- ✅ Security headers
- ✅ Performance optimizations

## Project Structure
- `next.config.mjs` - Configured for static export
- `public/_headers` - Cloudflare-specific headers
- `public/_redirects` - URL redirects and SPA routing
- `wrangler.toml` - Cloudflare Workers configuration

## Notes
- Images are unoptimized for static export compatibility
- All routes use trailing slashes for consistency
- Client-side routing is handled via `_redirects`