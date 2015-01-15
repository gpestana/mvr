var $container = $('#container');

$container.masonry({
  columnWidth:  60, //110
  gutter:       10,
  itemSelector: '.item',
  animate: true,
  animationOptions: {
    duration: 700,
    queue: true
  }
})

