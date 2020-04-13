function randomNumber(){
    let max = document.getElementById("maxNumber").value;
    let min = document.getElementById("minNumber").value;
    let random;

    if(max < min){
        alert('The max number cannot be less that the min number')
    }else if(max > 100 && min > 100){
        alert('Both max and min is greater than 100');
    }else if(max < 1 && min < 1){
        alert('Both max and min is less than 1');
    }else if(max > 100){
        alert('Max number is greater than 100');
    }else if(max < 1){
        alert('Max number is less than 1');
    }else if (min > 100){
        alert('Min number is greater than 100')
    }else if(min < 1){
        alert('Min number is less than 1');
    }else if (max >= 1 && max <= 100 && min >= 1 && min <= 100 ){
        random = Math.round(Math.random() * (max - min) + min);
        alert('Your random number is '+random);
    }
    

};