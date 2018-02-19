'use strict';

angular.module('journalApp.version', [
  'journalApp.version.interpolate-filter',
  'journalApp.version.version-directive'
])

.value('version', '0.1');
