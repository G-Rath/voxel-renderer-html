require.config({
  paths: {
    'jquery': 'lib/jquery-2.1.1.min',
    'three': 'lib/three.r68.min',
    'pixi': 'lib/pixi-v3.0.11'
  },
  shim: {
    'three': {
      exports: 'THREE'
    }
  }
});

require(["jquery", "demo/Demo"], function($, Demo) {
  var app;
  $(document).ready(function() {});
  app = new Demo();
  return window.app = app;
});

//# sourceMappingURL=boot.js.map
