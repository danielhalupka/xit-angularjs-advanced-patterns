
var PeopleService = Class.extend({
    getPeople: function (callback) {
        this.$http.get(appConfig.appEndpointList[appConfig.activeServer]['getPeople']).success(function (result) {
            callback(result);
        });
    },
    setPerson: function (volaco, callback) {
        this.$http.post("url").success(function (result) {
            callback(result);
        });
    }

});

(function () {

    var PeopleServiceProvider = Class.extend({
        instance: new PeopleService(),
        $get: ['$http', function ($http) {
                this.instance.$http = $http;
                return this.instance;
            }]
    });

    angular.module('main.PeopleService', [])
            .provider('PeopleService', PeopleServiceProvider);
}());