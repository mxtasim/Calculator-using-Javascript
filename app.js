(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clr = document.querySelector('.clear');
    let del = document.querySelector('.delete');
    let total = document.querySelector('.total');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    total.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "Empty";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clr.addEventListener('click', function(e) {
        screen.value = "";
    })

    del.addEventListener('click', function(e) {
        screen.value = screen.value.slice(0, -1);
      });
      

})();