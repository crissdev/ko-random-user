import ko from 'knockout';
import 'knockout-punches';
import 'bootstrap';
import routes from './routes';
import {registerRoutes} from './shared/router';
import titleCase from 'title-case';


// Knockout component loader required for custom components (using SystemJS)
import componentLoader from './shared/component-loader';
ko.components.loaders.unshift(componentLoader);


// Enable KO extensions
ko.punches.enableAll();


// Custom KO filters
ko.filters.titleCase = (value) => titleCase(value);

// Register routes
registerRoutes(routes);


// Register components
import {register as registerComponents} from './components/index';
registerComponents();


export function run() {
  // Bootstrap the application
  ko.applyBindings({});
}
