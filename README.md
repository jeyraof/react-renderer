React Renderer
==============

Rendering utility to prepend, append react-object to container.


##### Example

```javascript

var React = require('react');
var ReactRenderer = require('react-renderer');

var ExampleBox = React.createClass({
  render: function() {
    return (
      <div className="message-box">
      	<div className="message">Pthis.props.message}</div>
      </div>
    )
  }
});

ReactRenderer.render(<ExampleBox message="render!">, document.getElementById('react-div'));
ReactRenderer.append(<ExampleBox message="append!">, document.getElementById('react-div'));
ReactRenderer.prepend(<ExampleBox message="prepend!">, document.getElementById('react-div'));
ReactRenderer.prepend(<ExampleBox message="render-2!">, document.getElementById('react-div'));
```

or

```javascript

var React = require('React');
var ReactRenderer = require('ReactRenderer');
var rendererParams = {
  wrapperClass: 'boxbox'
}
var rr = ReactRenderer.constructor(rendererParams);

var ExampleBox = React.createClass({
  render: function() {
    return (
      <div className="message-box">
      	<div className="message">Pthis.props.message}</div>
      </div>
    )
  }
});

rr.render(<ExampleBox message="render!">, document.getElementById('react-div'));
rr.append(<ExampleBox message="append!">, document.getElementById('react-div'));
rr.prepend(<ExampleBox message="prepend!">, document.getElementById('react-div'));
rr.prepend(<ExampleBox message="render-2!">, document.getElementById('react-div'));
```
