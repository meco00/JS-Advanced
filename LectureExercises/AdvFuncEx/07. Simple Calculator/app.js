function calculator() {
    
    let selectors=[];

    function init(selector1, selector2, resultSelector){
        const firstSelector=document.querySelector(selector1);
        const secondSelector=document.querySelector(selector2);
        const result=document.querySelector(resultSelector);

        selectors=[firstSelector,secondSelector,result];
    }

    function manipulate(method){
        const firstSelectorValue=Number(selectors[0].value);
        const secondSelectorValue=Number(selectors[1].value);
        if(method=='add')
        {
            selectors[2].value= firstSelectorValue+secondSelectorValue;
        }
        else{
            selectors[2].value= firstSelectorValue-secondSelectorValue;
        }
    }


    function add()
    {
       manipulate('add');
    }

    function subtract()
    {
        manipulate('subtract');

    }


    return {
        init,
        add,
        subtract
    }

}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


