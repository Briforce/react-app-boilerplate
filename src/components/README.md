# component structure (you can delete this file)

This folder can serve as the home for components that are agnostic to your application. If using a framework like MUI or Blueprint, consider using this folder to wrap components from those libraries. This allows you to do things like unify styling (i.e. Modifying an Accordion component from MUI to use in your app wherever you decide to use accordions.)

### Consider creating a folder structure for each component as such:

| SmartInput/
  | index.ts - entry point into this component, export anything that needs to be exported here.
  | SmartInput.tsx - The component file for react code.
  | SmartInput.test.tsx - Jest tests for the SmartInput component.