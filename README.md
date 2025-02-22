# Alpine JS Data Components

Alpine JS reactive reusable data components. No Shadow-DOM (Full support for global styles).

# Install via CDN

```html
<script defer src="https://unpkg.com/alpinejs-xcomponent@1.x.x/alpine-components.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

# Example
```html
<div x-data="{
    countries: [
        {name: 'Russia', area: 17098246, population: 146150789},
        {name: 'Canada', area: 9984670, population: 41465298},
        {name: 'China', area: 9596960, population: 1408280000},
        {name: 'United States', area: 9525067, population:  340110988},
        {name: 'Brazil', area: 8510346, population:  212583750}
    ]
}">
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Area</th>
            <th>Population</th>
        </tr>
        <template x-for="country in countries">
            <tr x-data="template('country-item')" x-bind="bind" x-model="country"></tr>
        </template>
    </table>
</div>

<template id="country-item">
    <td x-text="props.name"></td>
    <td x-text="props.area"></td>
    <td x-text="props.population"></td>
</template>
```