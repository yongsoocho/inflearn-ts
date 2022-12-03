// 타입 주석
const a: number = Number("1");
const b: string = String(123);
const c: boolean = true;

// any - 다들어감 어떤 것이든.. 피하자
// number - int Long(big int ) smallint
// string - "" '' ``
// boolean - true false .... 0 1
// object - {} any .. 쓰지마세요!! 모든 에러의 근원이 될 수 있습니다!!

// 타입 추론
let d = 1;
