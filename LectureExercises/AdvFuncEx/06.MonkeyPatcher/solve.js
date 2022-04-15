function solution(input)
{

    if(input=='score')
    {
        let reportUpvotes=this.upvotes;
        let reportDownVotes=this.downvotes;
        const totalVotes=reportUpvotes+reportDownVotes;

        

        const positivePercent= percentage(reportUpvotes,totalVotes);
        const negativePercent = percentage(reportDownVotes,totalVotes);

        const balance=reportUpvotes-reportDownVotes;

        const rating=GetRating();

        function GetRating()
        {
            if(totalVotes < 10)
            {
                return 'new';
            }
            if(positivePercent > 66)
            {
                return 'hot'
            }
            else if(balance >= 0 && totalVotes > 100)
            {
                return 'controversial';
            }
            else if(balance < 0){
                return 'unpopular';
            }

               return 'new';
            

        }

        if(totalVotes > 50 )
        {
            let inflation=Math.ceil(Math.max(reportUpvotes,reportDownVotes) * 0.25);

             reportUpvotes+=inflation;
             reportDownVotes+=inflation;
        }
      

        const array=[reportUpvotes,reportDownVotes,balance,rating];

        return array;


        function percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
         }


         


    }else{

        let arg=input+'s';

        this[arg]+=1;

    }

}


let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};
 solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     
