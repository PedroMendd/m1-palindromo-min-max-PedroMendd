function isPalindrome(str){
    str = str.replace(/\s/g, '').toUpperCase()

    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
  

function arrayMaxMin(arr){
    let min = arr[0]
    let max = arr[0]

    for (let i = 0; i <= arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        } else if (arr[i] > max){
            max = arr[i]
        }
    }

    return [min, max]
}
