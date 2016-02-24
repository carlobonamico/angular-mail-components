angular.module("mailApp",[]);


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


/* Main page controller, coordinates all the other components  */
function MailController(FolderService){
    this.defaultQuery = "js";
    
    //loads data from services (or backend)
    this.folders = FolderService.loadFolders();
    
}
angular.module("mailApp").controller("MailController", MailController);

