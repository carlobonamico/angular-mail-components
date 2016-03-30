angular.module("mailApp", ["mail.search"]);

/*
function FolderService()
{
    var folders = [];
    
    this.loadFolders = function(){
        folders.push("Inbox");
        folders.push("Drafts");
        folders.push("Sent");
        return folders;
    };

    this.getFolders = function(){
        return folders; 
    }        
}
angular.module("mailApp").service("FolderService",FolderService);
*/
/* Main page controller, coordinates all the other components  */
function MailController()
{
    this.defaultQuery = "js";
    
    //TODO load messages list from service
    this.messages = [
        {
            to: "carlo.bonamico@gmail.com",
            from: "sonia.pini@nispro.it",
            subject: "Angular 1.5",
            body: " a b c "
        },
        {
            to: "carlo.bonamico@gmail.com",
            from: "carlo.bonamico@nispro.it",
            subject: "Typescript",
            body: " a b c d e f  "
        },
        {
            to: "carlo.bonamico@gmail.com",
            from: "sonia.pini@nispro.it",
            subject: "Flexbox how-to",
            body: " a b c d e f  "
        },
        {
            to: "carlo.bonamico@gmail.com",
            from: "sonia.pini@nispro.it",
            subject: "Re: ES6 tutorial",
            body: " a b c d e f  "
        }
        
    ];

    this.delete = function (message) {
        var index = this.messages.indexOf(message);
        if (index != -1) {
            this.messages.splice(index, 1);
        }
    };

    //TODO load data from services (or backend)
    this.folders = [
        "Inbox",
        "Trash",
        "Sent"
    ];
    this.customFolders = [
        "Angular",
        "Typescript",
    ];
    
    this.selectFolder = function (folderName) {
        this.messageListTitle = folderName;
        
        //TODO load data from services (or backend)
        this.messages = [
            {
                to: "carlo.bonamico@gmail.com",
                from: "sonia.pini@nispro.it",
                subject: folderName + " 1",
                body: " a b c "
            },
            {
                to: "carlo.bonamico@gmail.com",
                from: "carlo.bonamico@nispro.it",
                subject: folderName + " 2",
                body: " a b c d e f  "
            },
            {
                to: "carlo.bonamico@gmail.com",
                from: "sonia.pini@nispro.it",
                subject: folderName + " 3",
                body: " a b c "
            },
            {
                to: "carlo.bonamico@gmail.com",
                from: "carlo.bonamico@nispro.it",
                subject: folderName + " 4",
                body: " a b c d e f  "
            },
            {
                to: "carlo.bonamico@gmail.com",
                from: "sonia.pini@nispro.it",
                subject: folderName + " 5",
                body: " a b c "
            },
            {
                to: "carlo.bonamico@gmail.com",
                from: "carlo.bonamico@nispro.it",
                subject: folderName + " 6",
                body: " a b c d e f  "
            },

        ];

    };

  
    this.reply = function (message){
        //TODO optional lab: delegate reply to MessageReplyService
        var template = {
            to: message.from,
            subject: "Re: " + message.subject,
            body: ">" + message.body
        };
        this.compose(template);
        
    };

    this.forward = function (message){
        //TODO optional lab:
        
    };
    
    this.closeComposer = function (message) {
        this.composeActive = false; 

        //TODO add to sent
        //close compose  
    };
    
    this.compose = function (template) {
        this.composeActive = false; 
    
        if (template) {
            this.draft.to = template.to;
            this.draft.subject = template.subject;
            this.draft.body = ""; //TODO add signature 
        } 
    };

//too on search results
//        this.messageListTitle = folderName;


}

angular.module("mailApp")
    .controller("MailController", MailController);

console.log("aa");
function AccountServiceImpl(){
        var accountEmail = "carlo.bonamico@gmail.com";
        
        this.getAccountEmail = function ()
        {
            return accountEmail;
        };
}

angular.module("mailApp")
    .service("AccountService", AccountServiceImpl);

function AccountController(AccountService) {
    this.accountEmail = AccountService.getAccountEmail();
}

angular.module("mailApp")
    .controller("AccountController", AccountController);

