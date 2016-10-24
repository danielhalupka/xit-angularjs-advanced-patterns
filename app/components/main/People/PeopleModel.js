
var PeopleModel = Class.extend({
    _peopleService:null,
    _people:[],
    
    refreshPeople: function (callback) {
        var self = this;
        this._peopleService.getPeople(function(people){
             self._people = people; 
        });
    }
   

});

(function () {

    var PeopleModelProvider = Class.extend({
        instance: new PeopleModel(),
        $get: ['PeopleService',
            function (PeopleService) {
                this.instance._peopleService = PeopleService;
                this.instance.refreshPeople();
                return this.instance;
            }]
    });

    angular.module('main.PeopleModel', ['main.PeopleService'])
            .provider('PeopleModel', PeopleModelProvider);
}());