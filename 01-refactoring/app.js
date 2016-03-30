angular.module("mailApp", ["mail.search"]);



function MailController($scope, AccountService) {
    this.defaultQuery = "defined in main controller"; //private variable
    
    var that = this; 
    
    //private method
    function initMessages() {
        console.log(that);
    };



    
    //TODO refactor folders to objects (with messageCount, etc.)
    
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

    this.currentMessageIndex = 0;

    this.next = function () {
        this.currentMessageIndex++;
        if (this.currentMessageIndex >= this.messages.length)
            this.currentMessageIndex = 0;

        this.currentMessage = this.messages[this.currentMessageIndex]
    }

    this.folders = [
        "Inbox",
        "Trash",
        "Sent"
    ];
    this.customFolders = [
        "Angular",
        "Typescript",
    ];

    this.addFolder = function (newFolderName) {
        this.customFolders.push(newFolderName);
    };

    this.currentFolder = "Inbox";

    this.selectFolder = function (folderName) {
        this.currentFolder = folderName;

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

  


    this.compose = function (template) {
        this.composeActive = true;
    };




    this.reply = function (message) {
        var template = {
            to: message.from,
            subject: "Re: " + message.subject,
            body: ">" + message.body
        };

        this.compose(template);
    };
}

angular.module("mailApp")
    .controller("MailController", MailController);


function ComposeMailController (AccountService){
    this.composeActive = false;
    
    this.accountEmail = AccountService.getAccountEmail();
    
    this.draft = getDefaultMessage();

    function getDefaultMessage() {
        var draft = {
            from: this.accountEmail,
            to: "",
            subject: "",
            body: ""
        };
        return draft;

    };
    
    this.compose = function (template) {
        this.composeActive = true;
        if (template) {
            this.draft.to = template.to;
            this.draft.subject = template.subject;
            this.draft.body = ""; //TODO add signature 
        } else {
            this.draft = getDefaultMessage();
        }

    };

    this.send = function (message) {
        this.composeActive = false; 

        //TODO add to sent
        //close compose  
    };
}
angular.module("mailApp")
    .controller("ComposeMailController", ComposeMailController);

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
