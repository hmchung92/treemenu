/**
 * Created by hmchung on 7/22/14.
 */
(function () {
  'use strict';
  angular
    .module('task4App', '')
    .controller('TreeMenuCtrl', function ($scope) {
      $scope.directory = {
        'name': 'Root',
        'checkbox': true,
        'folderIcon': 'fa fa-folder',
        'fileIcon': 'fa fa-file',
        'folders': [
          {
            'name': 'FolderA',
            'checkbox': true,
            'toggle': true,
            'folders': [
              {'name': 'FolderA-1', 'checkbox': true, 'files': []},
              {'name': 'FolderA-2', 'checkbox': true, 'files': []},
              {
                'name': 'FolderA-3',
                'checkbox': true,
                'toggle': true,
                'folders': [
                  {'name': 'FolderA-1', 'checkbox': false, 'files': [], 'toggle': false},
                  {'name': 'FolderA-2', 'checkbox': true, 'files': [], 'toggle': false},
                  {
                    'name': 'FolderA-3',
                    'checkbox': true,
                    'toggle': true,
                    'files': [
                      {'name': 'FileA', 'checkbox': true},
                      {'name': 'FileB', 'checkbox': true}
                    ]
                  }
                ],
                'files': [
                  {'name': 'FileA', 'checkbox': true},
                  {'name': 'FileB', 'checkbox': true}
                ]
              }
            ],
            'files': []
          },
          {
            'name': 'FolderC',
            'checkbox': false,
            'toggle': true,
            'folders': [],
            'files': [
              {'name': 'File C-1', 'checkbox': true},
              {'name': 'File C-2', 'checkbox': true},
              {'name': 'File C-3', 'checkbox': true}
            ]
          }
        ]
      };
      $scope.nodes = $scope.directory;

    })

})();
