<img src="https://raw.githubusercontent.com/RiotGear/rg-sidemenu/master/demo/img/example.png" width="500px" />

## Use

Add this to your Riot app markup

```html
<rg-sidemenu sidemenu="{ sidemenu }"></rg-sidemenu>
```

and add this to your JavaScript

```javascript
this.sidemenu = {
  header: 'Side Menu',
  expanded: false,
  items: [
    { text: 'Item 1', action: function () {} },
    { text: 'Item 2', action: function () {} }
  ]
};
```

To make the menu slide in and out toggle the expanded property

```javascript
this.sidemenu.expanded = true|false;
```