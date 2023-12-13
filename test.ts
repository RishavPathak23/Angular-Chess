// Import zone.js for Angular testing.
import 'zone.js/testing';

// Import the Angular testing modules.
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Initialize Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Find all the tests in the current file and run them.
const context = (require as any ).context('./', true, /\.spec\.ts$/);
context.keys().map(context);
