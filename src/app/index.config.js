function config(theme, variant, $logProvider, toastrConfig, themeManagerProvider, $touchProvider, env,
        $locationProvider, $httpProvider, $translateProvider, localStorageServiceProvider, authServiceProvider) {
  'ngInject';

  $touchProvider.enabled = true;

  themeManagerProvider.theme = theme;
  themeManagerProvider.variant = variant;

  $logProvider.debugEnabled(env !== 'production');

  $locationProvider.html5Mode(true);
  $httpProvider.useApplyAsync(true);

  angular.extend(toastrConfig, {
    timeOut: 2000
  });


  localStorageServiceProvider.setPrefix('volumio');

  //i18n Configs
  $translateProvider
          .useStaticFilesLoader({
            prefix: 'app/i18n/locale-',
            suffix: '.json'
          })
          //Back end send default language, this improve translation consistency
          // .determinePreferredLanguage()
          // .preferredLanguage('en')
          .fallbackLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

}

export default config;
