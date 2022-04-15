function getArticleGenerator(articles) {
  
    const article=articles;
  
    const resultDiv= document.querySelector('#content');

    return ()=>{
        if(article.length!=0)
        {

            let currentArticleText= article.shift();
        
            const currentArticle=document.createElement('article');
            currentArticle.textContent=currentArticleText;

            resultDiv.appendChild(currentArticle);

        }
    }

}
