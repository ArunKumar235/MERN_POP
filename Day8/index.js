// document.getElementsByClassName('click')[0].addEventListener('click', function() {
//     let num = document.getElementById('para').innerHTML;
//     num = parseInt(num) + 1;
//     document.getElementById('para').innerHTML = num;
// });
// document.getElementsByClassName('click')[1].addEventListener('click', function() {
//     let num = document.getElementById('para').innerHTML;
//     num = parseInt(num) - 1;
//     document.getElementById('para').innerHTML = num;
// });
// document.getElementsByClassName('click')[2].addEventListener('click', function() {
//     document.getElementById('para').innerHTML = 0;
// });

document.getElementById('title').setAttribute('style', 'color: red; text-align: center;');

Array.from(document.getElementsByClassName('click')).forEach(function(element) {
    element.addEventListener('click', function() {
        let num = parseInt(document.getElementById('para').innerHTML);
        switch(element.innerHTML) {
            case 'Add value':
                num += 1;
                break;
            case 'Subtract value':
                num -= 1;
                break;
            case 'Reset':
                num = 0;
                break;
        }
        document.getElementById('para').innerHTML = num;
    });
});