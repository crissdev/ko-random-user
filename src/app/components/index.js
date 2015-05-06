import ko from 'knockout';


// Register custom KO components (require a different component loader)
//
export function register() {
  var components = [
    { selector: 'cko-view-switch', descriptor: 'app/components/view-switch' },
    { selector: 'fork-me-ribbon', descriptor: 'app/components/fork-me-ribbon' }
  ];
  for (let {selector, descriptor} of components) {
    ko.components.register(selector, { component: descriptor });
  }
}
