import { draftMode, cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get('sanity-preview-secret');
  const pathname = url.searchParams.get('sanity-preview-pathname') || '/';

  if (!secret) {
    return new Response('Missing secret', { status: 401 });
  }

  const dm = await draftMode();
  dm.enable();

  // Fix SameSite for iframe usage (Presentation Tool embeds the site)
  const cookieStore = await cookies();
  const cookie = cookieStore.get('__prerender_bypass');
  if (cookie) {
    cookieStore.set({
      name: '__prerender_bypass',
      value: cookie.value,
      httpOnly: true,
      path: '/',
      secure: false,
      sameSite: 'lax',
    });
  }

  redirect(pathname);
}
