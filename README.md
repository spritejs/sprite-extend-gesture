# Sprite Gesture

SpriteJS Gesture extension based on [winter-gestures](https://github.com/wintercn/gesture).

## Usage

From CDN

```html
<script src="https://unpkg.com/spritejs/dist/spritejs.js"></script>
<script src="https://s1.ssl.qhres.com/static/3e1daa16083e79b4.js"></script>
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
      html, body {
          width:100%;height:100%;margin:0;
      }
      html,body {
          margin: 0 0 0 0;
          padding: 0 0 0 0;
          width:100%;
          height:100%;
          overflow:hidden;
      }
      body {
          -webkit-user-select: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          -webkit-touch-callout: none;
          -webkit-text-size-adjust: none;
      }
  </style>
  <script type="text/javascript">
      // 关闭选择
      document.addEventListener('selectstart', (e) => { e.preventDefault() });
      // 避免鼠标变成文本选择形状
      document.addEventListener('mousedown', (e) => { e.preventDefault() });
      // 避免上下滚屏
      document.addEventListener('touchmove', (e) => { e.preventDefault() }, {passive: false});
      // 避免双击缩放
      document.addEventListener('touchstart', (e) => { e.preventDefault() }, {passive: false});
  </script>
</head>
<body>
  <script src="https://unpkg.com/spritejs/dist/spritejs.js"></script>
  <script src="https://s1.ssl.qhres.com/static/3e1daa16083e79b4.js"></script>
  <div id="container"></div>
  <script>
    const imgUrl = 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg';
    const {Scene, Sprite, Gesture} = spritejs;
    const paper = new Scene('#container', {viewport: [400, 400]});

    const sprite = new Sprite(imgUrl);
    sprite.attr({
      bgcolor: '#fff',
      pos: [0, 0],
      size: [400, 400],
      borderRadius: '200',
    });

    paper.layer().appendChild(sprite);
    Gesture.subscribe(sprite);
    sprite.on('dual', (event) => {
      if(event.type === 'dual') {
        console.log(sprite.attr('transform'));
        sprite.attr('transform', [event.transform[0][0], event.transform[1][0],
          event.transform[0][1], event.transform[1][1],
          event.transform[0][2], event.transform[1][2]]);
        //sprite.attr("transform", {rotate: event.rotate / Math.PI * 180});
      }
    });
  </script>
</body>
</html>
```
