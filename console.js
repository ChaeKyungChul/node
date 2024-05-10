const string = 'abcde';
const num = 1;
const bool = true;
const obj = {
    outside: {
        inside: {
            key : 'value'

        }
    }
}
const member = [
    {name : '홍길동', age:400},
    {name : '김철수', age:40}
];

console.time('전체 시간');
console.log('출력되는 로그');
console.log(string, num, bool);
console.error('에러메세지가 나오면 error에 출력');
console.table(member);
console.dir(obj);

console.time('시간 측정');
for(let i = 0; i < 1000000; i++){}
console.timeEnd('시간측정');
