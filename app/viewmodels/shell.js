define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Hello', moduleId: 'viewmodels/hello', nav: true },
                { route: 'search', title:'Search', moduleId: 'viewmodels/search', nav: true },
                { route: 'trondheim', title:'Trondheim', moduleId: 'viewmodels/trondheim', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});