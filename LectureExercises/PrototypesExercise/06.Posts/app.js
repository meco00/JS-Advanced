function solution()
{

class Post{
    constructor(title,content)
    {
        this.title=title;
        this.content=content;
    }

    toString()
    {

        let result=[`Post: ${this.title}`,`Content: ${this.content}`];

        return result.join('\n');


    }
}


class SocialMediaPost extends Post{
    constructor(title,content,likes,dislikes)
    {
        super(title,content);
        this.likes=likes;
        this.dislikes=dislikes;
        this.comments=[];
    }

    addComment(comment)
    {
        this.comments.push(comment);
    }

    toString()
    {
        let result=[super.toString()];
        
        result.push(`Rating: ${this.likes - this.dislikes}`);

        if(this.comments.length > 0)
        {
            result.push(`Comments:`);
            this.comments.forEach(c=>{
            result.push(` * ${c}`);
            });

        }

        return result.join('\n')
        

    }
}

class BlogPost extends Post{
    constructor(title,content,views)
    {
        super(title,content);
        this.views=views;
    }

    view()
    {
        this.views++;
        return this;
    }

    toString()
    {
        let result=[super.toString()];
        
        result.push(`Views: ${this.views}`);

        return result.join('\n');

    }
}

return{
    Post,
    SocialMediaPost,
    BlogPost
}

}

const classes = solution();
let post = new classes.Post("Post", "Content");

//console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.BlogPost("TestTitle", "TestContent", 1);

scm.view();

let test  =  scm.view();

console.log(test.toString());
