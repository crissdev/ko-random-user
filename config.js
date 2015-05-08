System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "src/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
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

