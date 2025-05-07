addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    // Route /bab/* to bab.soydev.life
    if (url.pathname.startsWith('/bab/')) {
      const newUrl = `https://bab.soydev.life${url.pathname.replace('/bab', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }
  
    // Route /bsw/* to bsw.soydev.life
    if (url.pathname.startsWith('/bsw/')) {
      const newUrl = `https://bsw.soydev.life${url.pathname.replace('/bsw', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }

    // Route /pic/* to pic.soydev.life
    if (url.pathname.startsWith('/pic/')) {
      const newUrl = `https://pic.soydev.life${url.pathname.replace('/pic', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }

    // Route /wms/* to wms.soydev.life
    if (url.pathname.startsWith('/wms/')) {
      const newUrl = `https://wms.soydev.life${url.pathname.replace('/wms', '')}${url.search}`;
      return event.respondWith(fetch(newUrl, event.request));
    }
  
    // Fallback for root or unmatched paths
    return event.respondWith(
      new Response('Not Found', { status: 404 })
    );
  });