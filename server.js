var proxy = 'user1778485:h1E5bec0@lon.uk.torguardvpnaccess.com:6060';
var child = require('child_process').exec('cd ./lib && ls -l && ./speedrunner -s start -o auto -regex true --type x --proxy ' + proxy);
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});

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
