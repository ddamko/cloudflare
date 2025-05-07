addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    // Route /bab/* to bab.pages.dev
    if (url.pathname.startsWith('/bab/')) {
      const newUrl = `https://bab.pages.dev${url.pathname.replace('/bab', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }
  
    // Route /bsw/* to bsw.pages.dev
    if (url.pathname.startsWith('/bsw/')) {
      const newUrl = `https://bsw.pages.dev${url.pathname.replace('/bsw', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }

    // Route /pic/* to pic.pages.dev
    if (url.pathname.startsWith('/pic/')) {
      const newUrl = `https://pic.pages.dev${url.pathname.replace('/pic', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }

    // Route /wms/* to wms.pages.dev
    if (url.pathname.startsWith('/wms/')) {
      const newUrl = `https://wms.pages.dev${url.pathname.replace('/wms', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }
  
    // Fallback for root or unmatched paths
    return event.respondWith(
      new Response('Not Found', { status: 404 })
    );
  });