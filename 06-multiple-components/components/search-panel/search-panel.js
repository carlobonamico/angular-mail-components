angular.module("mail.search",[]);

angular.module("mail.search")
    .component("searchPanel", //becomes search-panel in html 
    {
        controller: SearchPanelController, 
        controllerAs: "searchPanelCtrl",
        templateUrl: "components/search-panel/search-panel.html",
        bindings: {
            "defaultQuery" : "=", //input parameter, with data binding
            "onSearchResults" : "&", //callback
            "onSearchStart" : "&",
        }
   
    });

function SearchPanelController(){

    if (this.defaultQuery)
    {
        this.query = this.defaultQuery;
    } else{
        this.query ="";
    }

    this.search = function (query) {
        this.onSearchStart({
            query : query
        });
        
        //TODO replace this with a call to MessageSearchService.searchMessages(query)
        this.messages = [
            {
                to: "carlo.bonamico@gmail.com",
                from: "sonia.pini@nispro.it",
                subject: query + " 1",
                body: " a b c "
            },
            {
                to: "carlo.bonamico@gmail.com",
                from: "carlo.bonamico@nispro.it",
                subject: query + " 2",
                body: " a b c d e f  "
            },
            {
                to: "carlo.bonamico@gmail.com",
                from: "sonia.pini@nispro.it",
                subject: query + " 3",
                body: " a b c d e f  "
            },

        ];
        
        this.onSearchResults({
            results : this.messages
        });
    };
}

