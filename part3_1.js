function difference(arr){
    arr.sort();
    dif = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i]-arr[j]==-2){
                box = [];
                box[0] = arr[i];
                box[1] = arr[j];
                dif.push(box)
            }
        }
    }
    console.log(dif)

}

num = [1,2,3,4]
num2 = [4,1,2,3]
num3 = [1,23,3,4,7]
num4 = [4,3,1,5,6]

difference(num)
difference(num2)
difference(num3)
difference(num4)