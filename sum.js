function superDigit(n, k) {
    // Write your code here
    
  
    let sum=n.split("").reduce((a,b)=>Number(a)+Number(b))

    sum*=k
    
    num=sum
    function superD(num){
        let sum=0

        if (Number(num)<10){
            return num
        }
        while(num>0){
            let z= num%10;
            sum+=z;
            num=parseInt(num/10)
            
        }
        return superD(sum)
    }
    return superD(num)
}



let n="3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736" ,k=100000;
console.log(superDigit(n, k))
