Section with title:
```js
const options = [
  {"key": "1", "onClick": function(){ alert('Hello option 1!'); }, "text": "Option 1"},
  {"key": "2", "onClick": function(){ alert('Hello option 2!'); }, "text": "Option 2"}
];
<Section title="Awesome title" options={options} />
```

Section without title:
```js
const options = [
  {"key": "1", "onClick": function(){ alert('Hello option 1!'); }, "text": "Option 1"},
  {"key": "2", "onClick": function(){ alert('Hello option 2!'); }, "text": "Option 2"}
];
<Section options={options} />
```
