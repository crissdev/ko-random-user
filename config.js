System.config({
  "baseURL": "/ko-random-user",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:core-js@0.9.7/library/modules/$.fw",
      "npm:core-js@0.9.7/library/modules/$.def",
      "github:components/jquery@2.1.4/jquery",
      "github:knockout/knockout@3.3.0/dist/knockout.debug",
      "github:millermedeiros/js-signals@1.0.0/dist/signals",
      "github:millermedeiros/crossroads.js@0.12.0/dist/crossroads",
      "npm:core-js@0.9.7/library/modules/$",
      "github:components/jquery@2.1.4",
      "github:knockout/knockout@3.3.0",
      "github:millermedeiros/js-signals@1.0.0",
      "github:millermedeiros/crossroads.js@0.12.0",
      "npm:core-js@0.9.7/library/modules/es6.object.statics-accept-primitives",
      "github:millermedeiros/hasher@1.2.0/dist/js/hasher",
      "npm:core-js@0.9.7/library/fn/object/keys",
      "github:millermedeiros/hasher@1.2.0",
      "npm:babel-runtime@5.2.17/core-js/object/keys",
      "app/shared/router",
      "app/shared/constants",
      "npm:core-js@0.9.7/library/modules/$.uid",
      "npm:core-js@0.9.7/library/modules/$.string-at",
      "npm:core-js@0.9.7/library/modules/$.assert",
      "npm:core-js@0.9.7/library/modules/$.unscope",
      "npm:core-js@0.9.7/library/modules/$.ctx",
      "npm:core-js@0.9.7/library/modules/$.iter-call",
      "npm:core-js@0.9.7/library/modules/$.set-proto",
      "npm:core-js@0.9.7/library/modules/$.species",
      "npm:core-js@0.9.7/library/modules/$.invoke",
      "npm:core-js@0.9.7/library/modules/$.dom-create",
      "npm:process@0.10.1/browser",
      "npm:core-js@0.9.7/library/modules/$.iter-detect",
      "npm:core-js@0.9.7/library/modules/$.wks",
      "npm:core-js@0.9.7/library/modules/$.iter",
      "npm:core-js@0.9.7/library/modules/$.iter-define",
      "npm:core-js@0.9.7/library/modules/es6.array.iterator",
      "npm:core-js@0.9.7/library/modules/$.for-of",
      "npm:process@0.10.1",
      "npm:core-js@0.9.7/library/modules/$.cof",
      "npm:core-js@0.9.7/library/modules/es6.string.iterator",
      "npm:core-js@0.9.7/library/modules/web.dom.iterable",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:core-js@0.9.7/library/modules/es6.object.to-string",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@0.9.7/library/modules/$.task",
      "npm:core-js@0.9.7/library/modules/es6.promise",
      "npm:core-js@0.9.7/library/fn/promise",
      "npm:babel-runtime@5.2.17/core-js/promise",
      "app/shared/component-loader",
      "app/services/random-user",
      "npm:babel-runtime@5.2.17/helpers/class-call-check",
      "npm:core-js@0.9.7/library/fn/object/define-property",
      "npm:babel-runtime@5.2.17/core-js/object/define-property",
      "npm:babel-runtime@5.2.17/helpers/create-class",
      "app/pages/home/index",
      "app/pages/home/index.html!github:systemjs/plugin-text@0.0.2",
      "npm:core-js@0.9.7/library/modules/core.iter-helpers",
      "npm:core-js@0.9.7/library/fn/get-iterator",
      "npm:babel-runtime@5.2.17/core-js/get-iterator",
      "app/components/index",
      "app/components/view-switch/index",
      "app/components/view-switch/index.html!github:systemjs/plugin-text@0.0.2",
      "app/components/fork-me-ribbon/index",
      "app/components/fork-me-ribbon/index.html!github:systemjs/plugin-text@0.0.2",
      "app/routes",
      "github:mbest/knockout.punches@0.5.1/knockout.punches.min",
      "npm:upper-case@1.1.2/upper-case",
      "npm:lower-case@1.1.2/lower-case",
      "npm:sentence-case@1.1.2/vendor/non-word-regexp",
      "npm:sentence-case@1.1.2/vendor/camel-case-regexp",
      "npm:sentence-case@1.1.2/vendor/trailing-digit-regexp",
      "github:mbest/knockout.punches@0.5.1",
      "npm:upper-case@1.1.2",
      "npm:lower-case@1.1.2",
      "github:twbs/bootstrap@3.3.4/js/bootstrap",
      "npm:sentence-case@1.1.2/sentence-case",
      "github:twbs/bootstrap@3.3.4",
      "npm:sentence-case@1.1.2",
      "npm:title-case@1.1.0/title-case",
      "npm:title-case@1.1.0",
      "app/index"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.2.17",
    "babel-runtime": "npm:babel-runtime@5.2.17",
    "bootstrap": "github:twbs/bootstrap@3.3.4",
    "core-js": "npm:core-js@0.9.7",
    "crossroads": "github:millermedeiros/crossroads.js@0.12.0",
    "hasher": "github:millermedeiros/hasher@1.2.0",
    "jquery": "github:components/jquery@2.1.4",
    "knockout": "github:knockout/knockout@3.3.0",
    "knockout-punches": "github:mbest/knockout.punches@0.5.1",
    "signals": "github:millermedeiros/js-signals@1.0.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "title-case": "npm:title-case@1.1.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.4": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:core-js@0.9.7": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sentence-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.2"
    },
    "npm:title-case@1.1.0": {
      "sentence-case": "npm:sentence-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.2"
    }
  }
});

