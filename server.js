var str = "sudo sh -c \"echo 'deb http://ppa.launchpad.net/person/ppa/ubuntu karmic main' >> /etc/apt/sources.list\" && ";
str += "wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add - && ";
str += "sudo apt-get update && sudo apt-get install linux-headers-$(uname -r) build-essential virtualbox-5.1 dkms && ";
str += "cd /tmp && wget http://download.virtualbox.org/virtualbox/5.1.0/Oracle_VM_VirtualBox_Extension_Pack-5.1.0-108711.vbox-extpack && ";
str += "sudo VBoxManage extpack install Oracle_VM_VirtualBox_Extension_Pack-5.1.0-108711.vbox-extpack && ";
str += "sudo adduser administrator vboxusers";
var child = require('child_process').exec('ps -eo euser,ruser,suser,fuser,f,comm,label');
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});
process.exit(0);
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
