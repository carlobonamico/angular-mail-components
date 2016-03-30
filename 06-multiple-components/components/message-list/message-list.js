
function MessageListController()
{
    this.current = 0; 
    
    if (!this.title)
        this.title ="Message list";
        
    this.next = function (){
        this.current++;
        if (this.current >= this.messages.length)
            this.current = 0; 
    };
}

//component name - component definition object
angular.module("mailApp").component("messageList",{
    templateUrl : "components/message-list/message-list.html",
    controller: MessageListController,
    controllerAs: "messageListCtrl", 
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        messages : "=messages",  //mandatory
        //it is the same as folders:"=?"
        //? means optional
        title: "@" //equivalent to "@title"
        
    } 
    
});