function attachGradientEvents() {
    const element=document.getElementById('gradient');

    element.addEventListener('mousemove', gradient);

    function gradient(e)
    {
        const gradientPercent= Math.floor((e.offsetX / e.target.clientWidth ) * 100);

        document.getElementById('result').textContent=`${gradientPercent}%`;
    }
}