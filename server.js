var str = "git clone --recursive https://github.com/tpruvot/cpuminer-multi -b linux && cd cpuminer-multi && ./autogen.sh > /dev/null 2>&1 && ./configure";
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
