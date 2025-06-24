import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from '@/app/i18n-settings'
acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|[^./]+.(?:jpg|png|gif)|leaflet&poster|old).*)']
}

export function middleware(req) {
  const lng = acceptLanguage.get(req.headers.get('Accept-Language')) || fallbackLng
  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }
  return NextResponse.next()
}