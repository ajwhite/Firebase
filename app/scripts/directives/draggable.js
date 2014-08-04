(function () {
  'use strict';
  angular.module('firebaseApp').directive('draggable', function (MyFirebase, $timeout) {
    return {
      restrict: 'A',
      link: function (scope, el) {
        var clickPos = {},
            pos,
            initialValue,
            firebase = MyFirebase('cursor');
        scope.dragging = false;
        scope.syncing = false;

        firebase.ref.on('value', function (d){
          if (!initialValue) {
            initialValue = d.val()
          } else if (!scope.dragging) {
            pos = d.val();
            el.css('left', pos.x + 'px');
            el.css('top', pos.y + 'px');
            scope.syncing = true;
          }
        });

        el.css('position', 'absolute');
        el.on('mousedown', function (e) {
          scope.dragging = true;
          scope.syncing = false;
          clickPos = {x: e.offsetX, y: e.offsetY};
        });
        el.on('mousemove', function (e) {
          if (scope.dragging) {
            var x = e.pageX - clickPos.x,
                y = e.pageY - clickPos.y;
            el.css('left', x + 'px');
            el.css('top', y + 'px');
            firebase.obj.x = x;
            firebase.obj.y = y;
            firebase.obj.$save();
          }
        });
        el.on('mouseup', function () {
          scope.dragging = false;
        });
      }
    }
  });
})();
