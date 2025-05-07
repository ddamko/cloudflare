addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    // Route /bab/* to app-one.pages.dev
    if (url.pathname.startsWith('/bab/')) {
      const newUrl = `https://bab.pages.dev${url.pathname.replace('/bab', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }
  
    // Route /app-two/* to app-two.pages.dev
    if (url.pathname.startsWith('/bsw/')) {
      const newUrl = `https://bsw.pages.dev${url.pathname.replace('/bsw', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }
  
    // Fallback for root or unmatched paths
    return event.respondWith(
      new Response('Not Found', { status: 404 })
    );
  });