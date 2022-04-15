function extract(content) {


    const text=content;

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

extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).');