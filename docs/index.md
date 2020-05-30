# Utility Framework

This framework was designed to allow for easy customisation and expansion. It allows you to easily create the classes you need for your project. Utility frameworks are built on the idea that you shouldn't have to write any css &mdash; that it can all be done using html classes. Working in such a way makes prototyping much easier than ever before.

## Settings

There are only a handfull of system wide settings. All other settings are either variable- or module-dependent.

### Details

variable | value type | action | default
:---|:---|:---|:---
`$framework-setting-buildResponsive` | boolean | whether to build responsive classes or not | `true`
`$framework-setting-flexColumns` | integer | up to how many columns a flex grid should have | `12`
`$framework-setting-gridColumns` | integer | up to how many columns a css grid should have | `12`
`$framework-setting-module-className-Convention` | string | how class names should look<br>`camelCase` / `kebabCase` / `snakeCase` | `camelCase`
`$framework-setting-module-classSeparator` | string | how class names should be separated | `-`
`$framework-setting-className-transformNegativeValues` | boolean | whether to transform negative values in class names or not | `true`
`$framework-setting-className-negativeValuesPrefix` | string | when negative values are transformed what prefix should they use | `n`

## Maps

variable | function
:---|:---
`$variable-map-borderRadius` | `borderRadius($keys...)`
`$variable-map-borderWidth` | `borderWidth($keys...)`
`$variable-map-breakpoint` | `breakpoint($keys...)`
`$variable-map-color` | `color($keys...)`
`$variable-map-fontFamily` | `fontFamily($keys...)`
`$variable-map-fontSize` | `fontSize($keys...)`
`$variable-map-lineHeight` | `lineHeight($keys...)`
`$variable-map-size` | `size($keys...)`
`$variable-map-space` | `space($keys...)`
`$variable-map-zIndex` | `zIndex($keys...)`

## Modules

#### Legend
- `^` &mdash; indicates a position (can be omitted): `Y`, `X`, `T`, `R`, `B`, `L`, `TL`, `TR`, `BL`, `BR`
- `#` &mdash; indicates a numbered value

class | property
:---|:---
**text** ||
`.fc-` | `color`
`.ff-` | `font-family`
`.f-#` | `font-size`
`.fw-` | `font-weight`
`.fs-` | `font-style`
`.tt-` | `text-transform`
`.lh-#` | `line-height`
`.ls-#` | `letter-spacing`
`.wb-` | `word-break`
`.ws-` | `white-space`
**background** ||
`.bg-` | `background-color`
`.bp-` | `background-position`
`.bs-` | `background-size`
**border** ||
`.bc^-` | `border-color`
`.br^-#` | `border-radius`
`.bw^-#` | `border-width`
**space** ||
`.m^-#` | `margin`
`.p^-#` | `padding`
**size** ||
`.w^-#` | `width`
`.h^-#` | `height`
**position** ||
`.x^-#` | `position`
`.tr-#` | `translate()`
**flex** ||
`.fxd-` | `flex-direction`
`.fxw-` | `flex-wrap`
`.fxg-` | `padding` &ndash; *flex gap*
**grid**||
`.gdc-` | `grid-template-columns`
`.gds-` | `grid-column`
`.gdf-` | `grid-auto-flow`
`.gdg-` | `grid-gap`
**align** ||
`.at-` | `text-align`
`.av-` | `vertical-align`
`.ac-` | `align-content`
`.ai-` | `align-items`
`.as-` | `align-self`
`.jc-` | `justify-content`
`.ji-` | `justify-items`
`.js-` | `justify-self`
**other** ||
`.c-` | `cursor`
`.dp-` | `display`
`.op-#` | `opacity`
`.or-#` | `order`
`.of-` | `overflow`
`.rt-#` | `rotate`
`.vs-` | `visibility`
`.z-#` | `z-index`

### Responsivity

breakpoint | size | class
:---|:---|:---
small | `40rem` or `640px` | `.sm:`
medium | `48rem` or `768px` | `.md:`
large | `64px` or `1024px` | `.lg:`
extra large | `80rem` or `1280px` | `.xl:`

### States

Each state has an available class which can be added. These are placed after the responsive class or if there is no class right at the beginning. An example would be changing the background colour on hover on a monitor: `.lg:hover:bg-blue-700`