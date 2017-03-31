'use strict';

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 290, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);


  var max = 0;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var histogramWidth = 40;
  var indent = 90;
  var initialX = 140;

  for (i = 0; i < times.length; i++) {
    time = times[i];
    var name = names[i];
    var height = time / max * histogramHeight;
    var columnX = initialX + indent * i;
    var columnY = 240 - height;
    var topLabelY = 230 - height;
    var bottomLabelY = 120 + histogramHeight;


    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,255, ' + Math.random() + ')';
    }
    ctx.fillRect(columnX, columnY, histogramWidth, height);

    ctx.fillStyle = '#000'
    ctx.fillText(time.toFixed(0), columnX, topLabelY);
    ctx.fillText(name, columnX, bottomLabelY);
  }
};


