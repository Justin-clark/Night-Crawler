// ** UNCOMMENT IF-STATEMENT TO SEND OUT EMAILS ** //

//SENDS EMAIL WITH ATTACHED LIST OF INCORECTLY NAMED FILES/FOLDERS//
function alert(){
  var nightCrawler = DocumentApp.getActiveDocument();
  var bodyText = nightCrawler.getBody().getText(); 
  var textLength = bodyText.length;
  //if(textLength>0){
  //  MailApp.sendEmail("Sample Email", "Your Errors, " Hey Blank, How's your day going? Attached is a document containing a list of incorrectly named folders/files.", {
  //    attachments: [nightCrawler],
  //  });
  //}
}
