const os = require('os');

console.log('운영체제 정보 ------------------------');
console.log('os.arch(): ', os.arch()); //process.arch
console.log('os.platform(): ', os.platform()); //process.platform
console.log('os.type() : ' ,os.type() ); // 운영체제 종류
console.log('os.uptime(): ' , os.uptime()); // 부팅이후 흐른시간
console.log('os.hostname():' , os.hostname()); //컴퓨터이름
console.log('os.release():',os.release());// 운영체제 버전

/*경로*/

console.log('경로 ------------------------');
console.log('os.homedir():', os.homedir()); // 홈디렉토리 경로
console.log('os.tmpdir(): ', os.tmpdir()); // 임시파일 저장경로

/*cpu 정보*/
console.log('cpu정보 ------------------------');
console.log('os.cpus():', os.cpus()); // 컴퓨터 코어정보
console.log('op.cpu().length:' , os.cpus().length);

/*메모리정보*/
console.log('메모리정보정보 ------------------------');
console.log('os.freemem():', os.freemem());// 사용가능한 메모리
console.log('os.totalmem():', os.totalmem()); // 전체메모리
