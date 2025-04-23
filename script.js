function operacao(valor) {
      const display = document.getElementById("display");
      if (valor === 'C') display.value = '';
      else if (valor === '←') display.value = display.value.slice(0, -1);
      else display.value += valor;
    }
    
    function calcular() {
      try {
        const display = document.getElementById("display");
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Erro";
      }
    }
