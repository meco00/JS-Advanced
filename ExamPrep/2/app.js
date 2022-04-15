class Story {

    #commentIndex;

    constructor(title,creator)
    {
       this.title=title;
       this.creator=creator;
       this._comments=[];
       this._likes=[];
       this.#commentIndex=1;
    }

    get likes()
    {
        let message='';
        if(this._likes.length==0)
        {
           message=`${this.title} has 0 likes`;
        }
        else if(this._likes.length==1)
        {
           message=`${this._likes[0]} likes this story!`;
        }
        else{
            message=`${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }

       return message;

    }

    like(username)
    {
        if(this._likes.includes(username))
        {
            throw new Error('You can\'t like the same story twice!');
        }
        if(username==this.creator)
        {
            throw new Error('You can\'t like your own story!');
        }
        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }
    dislike(username)
    {
        if(this._likes.includes(username)==false)
        {
            throw new Error('You can\'t dislike this story!');
        }

       this._likes = this._likes.filter(u=> u != username);

        return `${username} disliked ${this.title}`;

    }
    comment (username, content, id)
    {
        const currentComment=this._comments.find(c=> c.Id==id);

        if(currentComment == undefined)
        {
            this._comments.push({
                Id:this.#commentIndex,
                Username : username,
                Content: content,
                repliesIdCounter: this.#commentIndex++ + 0.1,
                Replies:[]

            });

            return `${username} commented on ${this.title}`;
        }

        currentComment.Replies.push({

            Id: currentComment.repliesIdCounter,
            Username:username,
            Content:content

        });

        currentComment.repliesIdCounter+=0.1;


        return 'You replied successfully';

    }
    toString(sortingType)
    {
        
        const sortingFunc = 
        {
            'asc': (a,b)=> a.Id-b.Id,
            'desc' :  (a,b)=> b.Id-a.Id,
            'username' : (a,b)=> (a.Username).localeCompare(b.Username)

        };

        const delegate = sortingFunc[sortingType];


        this._comments.sort(delegate)
            .forEach(c=> c.Replies
                .sort(delegate));


        let result=[`Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            'Comments:'
            ];

            this._comments.forEach(c=>{
                result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
                
                c.Replies.forEach(r=>{
                    result.push(`--- ${(r.Id).toFixed(1)}. ${r.Username}: ${r.Content}`);
                })

            })


            return result.join('\n');


    }


}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
//console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


