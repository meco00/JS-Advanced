function extractText() {
    let items=document.querySelectorAll('#items li');
    
    let result='';
    
    for (const item of items) {
        result+=item.textContent.trim()+'\n';
    }
    
    let resultElement=document.getElementById('result');
    resultElement.textContent=result.trim();


}