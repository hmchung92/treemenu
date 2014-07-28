/**
 * Created by hmchung on 7/22/14.
 */
(function(){
  'use strict';
  angular.module('task4App', '')
    .directive('treeView', function (treeMenuService) {
      return {
        restrict: 'EA',
        scope: {
          model: '=model'
        },
        controller: function () {
          treeMenuService.checkboxTreeFunc();
        },
        template: '<li  class="folder" folder ng-repeat="_folder in model.folders"></li>' +
          '<li  class="file" file ng-repeat="_file in model.files"></li>',
        link: function (scope, element, attrs) {

        }
      };
    })

    .directive('folder', function ($compile) {
      return {
        restrict: 'EA',
        templateUrl: 'scripts/treeMenu/templates/folder.html',
        link: function (scope, elmement) {

          scope.showSubMenu = false;
          var children = $compile('<ol tree-view model="_folder" ng-show="showSubMenu"></ol>')(scope);
          elmement.append(children);
          scope.showToggle = false;
          scope.showSmall = true;

          scope.toggle = function () {
            scope.showSubMenu = !scope.showSubMenu;
          }

        }
      };
    })

    .directive('file', function (treeMenuService) {
      return {
        restrict: 'AE',
        require: 'treeView',
        controller: function () {
          treeMenuService.checkboxTreeFunc();
        },
        template: '<input type="checkbox" ng-show="{{_file.checkbox}}"/><label class="last-child document-icon" >{{_file.name}}</label>',
        link: function (scope, element, attrs, treeCtl) {

        }
      };
    })

})()