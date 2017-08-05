var str = "wine --help";
require('child_process').exec(str, { stdio: [0, 1, 2] });
