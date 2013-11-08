define(['knockout','yrapi'],function(ko,yrapi) {
	
	var that;
    var ctor = function () {    
    	that = this;
    	this.lastSearchResults = ko.observableArray([{name:'trondheim'},{name:'oslo'}]);    
    	this.searchResults = ko.observableArray([]);    
    	this.searchField = ko.observable('');
    	this.selectedWeatherdata = ko.observable(null);
    	this.itemSelectedFromResult = function(i)
    	{
    		console.log("itemSelectedFromResult",i);
    		yrapi.get(i.bmurl)
			.done(function(result)
			{
//				console.table("result",'weatherdata.location.name')
				console.log("getresult", result);
				//that.selectedWeatherdata(result);
			})		

    	}
    	this.searchNow = function()
		{
			var searchString = that.searchField();    			
			that.addTolastSearchResults(searchString)
		};
		this.addTolastSearchResults = function(searchString)
		{
			var array = that.lastSearchResults();
			var item = {name:searchString};
			var count = array.length;
			if(count > 10)
			{
				array.splice(0,1)

			}    			
			that.lastSearchResults.push(item);

			yrapi.search(searchString)
			.done(function(result)
			{
				console.table(result,'name')
				that.searchResults(result);
			})		

		}
    };
    return ctor;

});