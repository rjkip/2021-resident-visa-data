/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/share-processing-details')) {
    return new Response('<a href="https://forms.gle/TLTNxgHiyNhibGy26">Google Forms</a>', {
      status: 302,
      headers: { location: 'https://forms.gle/TLTNxgHiyNhibGy26' },
    });
  }

  return await resolve(event);
}
