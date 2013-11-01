define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Hello', moduleId: 'viewmodels/hello', nav: true },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});