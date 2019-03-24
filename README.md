# soomgo-form

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Typography
- Use the typography component anywhere in the application where there is text.  
- Use the different breakpoints and classes to create responsive and consistant texts.  

### Breakpoints
Same breakpoints as Vuetify :

| code | range |
| ------------ | ------------ |
| xs | < 600 |
| sm | 600 > < 960 |
| md | 960 > < 1264 |
| lg | 1264 > < 1904 |
| xl | > 1904 |

### Classes
Availables classes:
> wg-heading-1  
wg-heading-2  
wg-heading-3  
wg-heading-3-light  
wg-heading-4  
wg-heading-4-light  
wg-heading-5  
wg-heading-5-light  
wg-heading-6  
wg-heading-6-light  
wg-body-1  
wg-body-1-light  
wg-body-2  
wg-body-2-light  
wg-default  
wg-hidden  

Availables colors:
> lightbrown  
lightred  
gray  
lightgray  
steelblue  

Reference : 
https://app.zeplin.io/project/5bcff3e933a8342f1c37cfa5/screen/5c10ba8b5366b7aee1692304  

### Styles
> width  

The width prop will be forwared as the typography style.  


### Usage
```javascript
<typography xs="wg-body-1" md="wg-heading-5" lightbrown width="120%">
  안녕
</typography>
```
- The classes will apply in the "and-up" order (xs > sm > md > lg > xl).  
- If only xs is provied, the class associated will be used for every breakpoints.  
- If no breakpoint is provided wg-default is used.  
- Use wg-hidden to hide a text for a certain breakpoint.  

### Overriding with classes
You can add as many classes as you want to customize the typography when needed :
```javascript
<typography class="class1 class2">
  안녕
</typography>
```
```css
.class1 {
  color: $red;
}

.class2 {
  display: inline-block;
}
```

## Custom Button
- Use the custom-button component anywhere in the application where there is button.

### Usage
```javascript
<custom-button sm steelblue>
  안녕
</custom-button>
```
- The default size is medium(md).
- The default background color is white.

## v-flex, v-checkbox, v-radio, v-input, v-text-field
- I referred the concept of these components from [vuetify](https://vuetifyjs.com/ko/getting-started/quick-start).
- So, the usage is almost simillar with vuetify ui components.