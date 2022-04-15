function extract(content) {

    let item=document.getElementById(content);

    const text=item.textContent;

    const regex=/\(([^)]+)\)/g;

    let result=[];

    let match=regex.exec(text);

    while(match) {
        result.push(match[1]);
        match = regex.exec(text);
      }
    

      console.log(result);
    return result.join(';');
}