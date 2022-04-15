function deleteByEmail() {

    const input=document.querySelector('input[name="email"]');

    const emailText=input.value;

    const items=Array.from(document.querySelector('tbody').children)
    .filter(r=> r.children[1].textContent == emailText);

    items.forEach(r=> r.remove());

    let result = items.length > 0 ? 'Deleted.':'Not found.';

    document.getElementById('result').textContent=result;

}