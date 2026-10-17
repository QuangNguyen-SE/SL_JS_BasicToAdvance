let textareas = document.getElementById("st");
textareas.addEventListener("input", ()=>{
    console.clear();
    console.log(textareas.value);
});

let userInput = document.getElementById("userInput");

function isWordChar(wo){
    return wo !== undefined && /\w/.test(wo);
}

// Dùng đệ quy, recursion function
// start=0 chỉ có trong JS chạy đc nếu là java thì phải dùng phương pháp overloading
// 2 hàm trùng tên, nhưng 1 thằng sẽ gọi thằng kia, với tham số đầu vào mặc định là 0
/**
 * function callBackSearchString(sentece, words){
 *      return callBackSearchString (sentence, words, 0);
 * }
 */
// Thật ra start = 0 không cần thiết, nhưng nó lại an toàn khi chạy
function callBackSearchString(sentence, words, start=0){
    if(words ==="") return 0;
    const pos = sentence.indexOf(words, start);
    if(pos === -1) return 0;
    const before = sentence[pos - 1];                 
    const after = sentence[pos + words.length]; 

    const isWholeWord = !isWordChar(before) && !isWordChar(after);
    return (isWholeWord?1:0)+callBackSearchString(sentence, words, pos+words.length);
    
}

function handleClick(){
    document.getElementById("rs").textContent=callBackSearchString(textareas.value, userInput.value, 0);
}


