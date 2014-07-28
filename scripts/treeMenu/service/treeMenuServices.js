/**
 * Created by hmchung on 7/28/14.
 */
(function () {
  'use strict';
  angular
    .module('task4App', '')

    .service('treeMenuService', function () {
      this.checkboxTreeFunc = function () {
        var checboxTree = function () {
          // Use click better change
          angular.element('input[type="checkbox"]').click(function () {
            var checked = angular.element(this).prop("checked"),
              container = angular.element(this).parent();
//            siblings = container.siblings();

            container.find('input[type="checkbox"]').prop({
              indeterminate: false,
              checked: checked
            });

            function checkSiblings(el) {
              var parent = el.parent().parent(),
                all = true;

              el.siblings().each(function () {
                return all = (angular.element(this).children('input[type="checkbox"]').prop("checked") === checked);
              });

              if (all && checked) {
                parent.children('input[type="checkbox"]').prop({
                  indeterminate: false,
                  checked: checked
                });
                checkSiblings(parent);
              } else if (all && !checked) {
                parent.children('input[type="checkbox"]').prop("checked", checked);
                parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
                checkSiblings(parent);
              } else {
                el.parents("li").children('input[type="checkbox"]').prop({
                  indeterminate: true,
                  checked: false
                });
              }
            }

            checkSiblings(container);
          });
        };

        checboxTree();
      };
    })

})();