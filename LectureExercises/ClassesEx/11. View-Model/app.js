class Textbox {
    constructor(selector,regex)
    {
        this._elements=document.querySelectorAll(selector);
        this._invalidSymbols=regex;
        this.prepareEventListeners();

    }
    get elements()
    {
        return this._elements;
    }


    get value()
    {
        return this._elements[0].value;
    }
    
    set value(val)
    {
        Array.from(this._elements).forEach(e=> e.value = val);
    }

    prepareEventListeners()
    {
        Array.from(this.elements).forEach(el=>el.addEventListener('change',e=> this.value= el.value));
    }
    isValid(){

        return !this._invalidSymbols.test(this._elements[0].value);

    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

Array.from(inputs).forEach(e=>e.addEventListener('click',function(){console.log(textbox.value);}));
