function doGet(){
  //var html = HtmlService.createHtmlOutputFromFile('index');
  var html = HtmlService.createTemplateFromFile('index');
  html.data = {
    email: Session.getActiveUser().getEmail()
  }
  var output = html.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  return output;
  
}

function test1(){
  Logger.log(getPosts());
}
function getPosts(){
  var ss = SpreadsheetApp.openById('1_nGL6C5Ge6F7FrdSd96mgf9U_ehNPxXfH40atjcdg0c');
  var sheet = ss.getSheetByName('posts');
  var rows = sheet.getDataRange().getValues();
  var posts = rows.slice(1);
  var json = JSON.stringify(posts);
  return json;
}



//function doSomething() {
//  Logger.log('I was called!');
//}

function lesson4(){ //should be doGet
  var html = HtmlService.createHtmlOutput("hello world 2");
  return html;
}







function lesson3(){
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(['Hello','World',5000,sheet.getName()]);
  Logger.log(sheet.getName());
}