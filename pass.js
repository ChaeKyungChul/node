//폴더와 파일

const path = require('path');
const str = __filename;

//경로 구분자 윈도우 구분자 c:\\window\, 리눅스 c:/linex/
console.log('path.sep(): ', path.sep);
console.log('path.delimiter(): ', path.delimiter); // 환경변수 구분자
console.log('------------------------');
console.log('path.dirname(): ' , path.dirname(str)); //파일이 위치한 폴더까지의 경로
console.log('path.extname(): ' , path.extname(str));//파일의 확장자
console.log('path.basename(): ', path.basename(str));//path.basename(str, 'jpg')처럼 두번쨰 인자로 확장자를 쓸수 있다.
/*
 path.parse(경로); 파일경로를 root, dir, base, ext, name 으로 분리

*/

