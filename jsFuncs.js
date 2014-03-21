import System.IO;

var path = "testDirectory/";
function getFilesInDir()
{
	var info = new DirectoryInfo(path);
	var fileInfo = info.GetFiles();
	for (file in fileInfo) print (file);
}