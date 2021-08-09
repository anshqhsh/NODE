//항상 큰 프로젝트를 할 땐 한 파일 내에 모듈로 관리해주면 좋다 
let count = 0;
export function increase(){
    count++;
}

export function getCount(){
    return count
}