function mudarCor() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var body = document.querySelector('body');
  
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        switch (checkbox.id) {
          case 'checkbox1':
            body.style.backgroundColor = 'rgb(184, 153, 219)';
            body.style.color = 'white';
            break;
          case 'checkbox2':
            body.style.backgroundColor = 'rgb(230, 231, 176)';
            body.style.color = 'black';
            break;
          case 'checkbox3':
            body.style.backgroundColor = 'rgb(172, 228, 211)';
            body.style.color = 'black';
            break;
          case 'checkbox4':
            body.style.backgroundColor = 'rgb(233, 142, 136)';
            body.style.color = 'white';
            break;
          case 'checkbox5':
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            break;
        }
      }
    });
  }