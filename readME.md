Taking a break to have some fun by learning `canvas` tag. Art is my first love, Javascript my second so I've been itching to watch some tutorials and read some the Canvas Docs 


### Walk through 

add ```html <canvas></canvas>``` to body of html 

define `canvas` in js file 

```javascript 
const canvas = document.querySelector('canvas');
```

Canvas is a pixel-based drawing system so you have to define the width and height:

```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

I made a Nav of different colored circles 

```html 
<nav>
    <a href="#" style="background-color: #3b06ff"></a>
    <a href="#" style="background-color: #def626"></a>
    <a href="#" style="background-color: #ffde38"></a>
    <a href="#" style="background-color: #f05c41"></a>
</nav>
```

### Nav Circles 

When you click on the circle, the context stroke color changes 

```javascript 
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        context.strokeStyle = this.style.backgroundColor
    });
})
```




![Demo](https://media.giphy.com/media/3IKUnoXIoGKIM/giphy.gif)
