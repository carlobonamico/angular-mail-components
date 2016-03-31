
function MailSearchController()
{
    if (!this.defaultQuery)
        this.defaultQuery="in:inbox";
    
    this.query = this.defaultQuery;
}


//mailSearch is the name in the html (- becomes uppercase letter)
angular.module("mailApp").directive("mailSearch", function(){
    //directive constructor function
    console.log("mailSearch directive"); 
    
    //returns a directive definition object (DDO) or directive config
    return {
        templateUrl : "components/mail-search/mail-search.html",
        controller : MailSearchController, 
        controllerAs: "mailSearchCtrl",
        restrict: "E", 
        bindToController: {
            defaultQuery : "=defaultQuery"
        }
        
    };
});