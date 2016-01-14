/**
 * Created by WangMing on 16/1/14.
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['leaflet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('leaflet'));
  } else if (typeof root !== 'undefined' && root.L) {
    // Browser globals (root is window)
    root.L.echartsLayer3 = factory(L);
  }
}(this, function(L) {
  L.EchartsLayer3 = L.Class.extend({});
  L.echartsLayer3 = function(map, ec) {
    return new L.EchartsLayer3(map, ec);
  };
  return L.echartsLayer3;
}));