function BubbleSortByStep (list:number[]){
    // for (let i = 0; i < list.length; i++) {
    //     for (let j = 0; j < list.length - i; j++) {
    //         if(list[j] > list[j+1]){
    //             console.log("Hoán đổi " + list[i] + " với " + list[i + 1]);
    //             let index = list[j];
    //             list[j] = list [j+1];
    //             list[j+1] = index
    //         }
    //     }
    // }
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i; j++) {
            if (list[j]<list[j+1]){
                console.log("Hoán đổi " + list[i] + " với " + list[i + 1]);
                let index = list[j];
                list[j] = list[j+1];
                list[j+1] = index;
            }
        }
    }
    return list;
}
let arr = [8, 3, 6, 1, 4, 10, 2, 50];
console.log(BubbleSortByStep(arr));