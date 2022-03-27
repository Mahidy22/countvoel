
let inputInfo = document.querySelector('#inputValue')
let checkBtn = document.querySelector('#checkBtn')
let counting = document.querySelector('#count');
let setInput = 0;

checkBtn.addEventListener('click',()=>{
    inputInfo.textContent = inputInfo.value ;
    setInput = String(inputInfo.value);

    function countVowel(str){
        let vowel = 'aeiouAEIOU';
        let count = 0;

        for(i = 0; i < str.length; i++){
            if(vowel.indexOf(str[i]) !== -1){
                count++
            }
        }
        return count

    }
    let vowelCount = countVowel(setInput);
    counting.innerHTML = vowelCount
})