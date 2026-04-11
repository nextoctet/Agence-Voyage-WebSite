import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['fr', 'ar', 'en'],
  defaultLocale: 'fr'
});
 
export const config = {
  // Kay-طبق l-lugha 3la ga3 l-pages
  matcher: ['/', '/(fr|ar|en)/:path*']
};