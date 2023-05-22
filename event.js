<!DOCTYPE html>
<html>
<head>
<title>JavaScript Events</title>
</head>
<body>
<h1>JavaScript Events</h1>
<p>This page demonstrates the different types of events that can occur in JavaScript.</p>

<h2>Click Event</h2>
<button onclick="alert('You clicked the button!')">Click Me</button>

<h2>Mouseover Event</h2>
<div onmouseover="this.style.backgroundColor = 'red'">
  <p>This text will turn red when you mouse over it.</p>
</div>

<h2>Keydown Event</h2>
<input type="text" onkeydown="console.log('You pressed a key!')">

<h2>Load Event</h2>
<script>
  window.onload = function() {
    console.log('The page has loaded!');
  };
</script>
</body>
</html>
