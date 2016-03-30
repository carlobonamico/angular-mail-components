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
    
    this.messages = [
      {
          to: "carlo.bonamico@gmail.com",
          from: "test@test.com",
          subject: "Hello World",
          body: " a b c "
      } , 
      {
          to: "carlo.bonamico@gmail.com",
          from: "test@test.com",
          subject: "Hello World 2",
          body: " a b c d e f  "
      } , 
      {
          to: "carlo.bonamico@gmail.com",
          from: "test@test.com",
          subject: "Hello World 32",
          body: " a b c d e f  "
      } ,
      {
          to: "carlo.bonamico@gmail.com",
          from: "test@test.com",
          subject: "Hello World123 2",
          body: " a b c d e f  "
      } 
        
    ];
}
angular.module("mailApp").controller("MailController", MailController);
