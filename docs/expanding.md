# Expanding

Expanding on the current framework with your own variables and modules is as simple as following the examples below. Each map requires a function which is used to call it, and a mixin to display the variables. Mixins are then build, and rather than using the value directly, they should run through the function to ensure it checks whether to use a variable or the direct value. Then each file should be imported and included in the load process.

#### Why the long winded naming conventionts?

In order to allow for maximum customisation, each variable is named according to whether it belongs to a variable or a module. This allows for values to later be overriden as needed. It's recommended that they remain independent but they can work off each other.

## Settings

### Framework
`$framework-setting-settingName`

### Variable
`$setting-variable-variableName-settingName`

### Module
`$setting-module-moduleName-settingName`

## Variable

#### Map
`$variable-map-variableName`

#### Function
`@function variableName`

#### File

```scss
/** variables/_variableName.scss **/

// Map
$variable-map-variableName: (
    
) !default;

// Function
@function funcName($keys...) {
    @return variable-get($variable-map-variableName, $keys...);
}
```

#### Installation

```scss
/** _framework.scss **/

// Variables
@import "variables/_variableName";
```

#### Usage

```scss
tag {
    property: funcName('var');
    // output -- property: varValue;
}
```

## Module

#### Acronym
`$acronymModule` + `Name`

#### Map
`$mapModule` + `Name`

#### File

```scss
/** utilities/_utilityName.scss **/

// Acronym
$module-acronym-moduleName: '' !default;

// Settings
$module-setting-moduleName-settingName: '' !default;

// Map
$module-map-moduleName: () !default;

// Mixin
@mixin module-moduleName($breakpoint: null, $action: null) {
    // FROM $module-map-moduleName
    @include class-generate($module-acronym-moduleName, 'property', $module-map-moduleName, $breakpoint, $action);
}
```

#### Installation

```scss
/** _framework.scss **/

// Modules
@import "modules/moduleName";

    // LOAD Non-Responsive Modules
    // @include module-moduleName;

    // LOAD Responsive Modules
    @if $framework-setting-buildResponsive == true {
        @each $breakpoint-key, $breakpoint-value in $variable-map-breakpoint {
            @media all and (min-width: #{$breakpoint-value}) {
                // @include moduleName($breakpoint: $breakpoint-key, $action: null);

                // LOAD Responsive Actions Individually
                // @include module-moduleName($breakpoint: $breakpoint-key, $action: 'hover');

                // LOAD Responsive Actions Multiple
                // $responsive-actions: ('hover', 'active');
                // @each $action in $responsive-actions {
                //     @include module-moduleName($breakpoint: $breakpoint-key, $action: $action);
                // }
            }
        }
    }

    // LOAD Actions Individually without Responsiveness
    // @include module-moduleName($breakpoint: null, $action: 'hover');

    // LOAD Responsive Actions Multiple without Responsiveness
    // $responsive-actions: ('hover', 'active');
    // @each $action in $responsive-actions {
    //     @include module-moduleName($breakpoint: null, $action: $action);
    // }
```