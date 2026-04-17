var htmlfile = WScript.CreateObject('htmlfile');
htmlfile.write('<meta http-equiv="x-ua-compatible" content="IE=9" />');
var JSON = htmlfile.parentWindow.JSON;

var fs = WScript.CreateObject('Scripting.FileSystemObject');
var text = fs.OpenTextFile('assets/js/main.js', 1).ReadAll();

var reportsMatch = text.match(/const reports = (\[[\s\S]*?\]);/);
var sectorMatch = text.match(/const sectorData = (\[[\s\S]*?\]);/);
var usersMatch = text.match(/const USERS = (\{[\s\S]*?\});/);

if (reportsMatch) {
    fs.OpenTextFile('data/reports.json', 2, true).Write(JSON.stringify(eval(reportsMatch[1]), null, 2));
}

if (sectorMatch) {
    fs.OpenTextFile('data/sectors.json', 2, true).Write(JSON.stringify(eval(sectorMatch[1]), null, 2));
}

if (usersMatch) {
    var u = eval('(' + usersMatch[1] + ')');
    fs.OpenTextFile('data/users.json', 2, true).Write(JSON.stringify(u, null, 2));
}

// Ensure the files were written
WScript.Echo("Success");
