describe("mailApp Test", function() {
  var mockMessages, mockMessage;
  describe("MailController Test", function() {
    
    beforeEach(module('mailApp'));

    beforeEach(inject(function($controller, AccountService, MessageService) {
      mockMessage = {
                to: "carlo.bonamico@gmail.com",
                from: "sonia.pini@nispro.it",
                subject: "Angular 1.5",
                body: " a b c "
            };
      mockMessages = [mockMessage];

      this.AccountService = AccountService;
      this.MessageService = MessageService;
      
      // TODO create here spyOn to test controller in solation

      this.MailController = $controller('MailController',{
        AccountService: this.AccountService,
        MessageService: this.MessageService
      });
    }));

    it("should call getAccountEmail on initializion phase", function(){
      // TODO testare che la funzione getAccountEmail sia chiamata
    });

    it("should call getMessages when select Inbox folder", function(){
      this.MailController.selectFolder("Inbox");
      expect(this.MessageService.getMessages).toHaveBeenCalled();
    });

    it("should have the mockMessage when gselect Inbox folder", function(){
      this.MailController.selectFolder("Inbox");
      expect(this.MailController.messages).toBe(mockMessages);
    });


    it("when Inbox folder is select should delete the right message.", function() {
      // TODO testare che la funzione delete cancelli effettivamente il messaggio
      this.MailController.selectFolder("Inbox");
      
    });

  });
});