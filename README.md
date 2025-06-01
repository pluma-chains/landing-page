# Pluma Chain Landing - Static HTML Export for Cloudflare Pages

This Next.js project is optimized for static HTML export and deployment on Cloudflare Pages.

## Quick Start

### Development

```bash
pnpm install
pnpm dev
```

### Building Static HTML Export

```bash
pnpm run build
```

### Local Preview

```bash
pnpm run serve
```

### Deploy to Cloudflare Pages

```bash
pnpm run deploy
```

## Deployment Configuration

### Cloudflare Pages Settings

- **Build command**: `pnpm run build`
- **Build output directory**: `out`
- **Node.js version**: `18` or higher
- **Environment variables**: Set any required environment variables in the Cloudflare dashboard

### Automatic Deployment

1. Connect your repository to Cloudflare Pages
2. Set the build command to `pnpm run build`
3. Set the build output directory to `out`
4. Deploy automatically on every push to main branch

## Static Export Features

- ✅ **Pure Static HTML**: Complete static site generation
- ✅ **No Server Required**: Works entirely on CDN
- ✅ **Optimized Images**: Custom loader for static assets
- ✅ **SEO Optimized**: Full meta tags and OpenGraph support
- ✅ **Fast Loading**: Optimized for Cloudflare's global CDN
- ✅ **Client-side Routing**: SPA functionality with static files

## Project Structure

- `next.config.mjs` - Configured for static HTML export
- `lib/image-loader.js` - Custom image loader for static assets
- `public/_headers` - Cloudflare-specific headers and caching
- `public/_redirects` - URL redirects and SPA routing
- `out/` - Generated static HTML files (after build)

## Adding New Pages

When adding new pages with dynamic routes, ensure you add `generateStaticParams()` function:

```tsx
export function generateStaticParams() {
  return [
    { slug: "page-slug-1" },
    { slug: "page-slug-2" },
    // Add more static params as needed
  ];
}
```

## Notes

- All images are unoptimized for static export compatibility
- Routes use trailing slashes for consistency
- Client-side routing handled via `_redirects`
- No server-side features (API routes, middleware, etc.)
