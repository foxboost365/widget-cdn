/**
 * Blooming Widget Loader - Cache-busting automatique
 * Ce fichier charge widget-core.js et widget.css avec un timestamp
 */
(function() {
  var config = window.BloomingWidgetConfig || {};
  var baseUrl = config.baseUrl || 'https://zjlhpnnjfiwmugvpqsld.supabase.co/storage/v1/object/public/widget-assets';
  var timestamp = Date.now();

  // Charger le CSS avec cache-busting
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = baseUrl + '/widget.css?' + timestamp;
  document.head.appendChild(link);

  // Charger le JS avec cache-busting
  var script = document.createElement('script');
  script.src = baseUrl + '/widget-core.js?' + timestamp;

  // Transférer les data-attributes du script original
  var currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  if (currentScript) {
    var attrs = currentScript.attributes;
    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].name.startsWith('data-')) {
        script.setAttribute(attrs[i].name, attrs[i].value);
      }
    }
  }

  document.head.appendChild(script);
})();
