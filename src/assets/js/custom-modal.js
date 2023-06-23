document.addEventListener('DOMContentLoaded', function() {
    var codeElement = document.getElementById('codeElement');
    var codeLines = codeElement.textContent.trim().split('\n');
    var lineIndex = 0;
  
    function showNextLine() {
      if (lineIndex < codeLines.length) {
        codeElement.innerHTML += codeLines[lineIndex] + '\n';
        lineIndex++;
        setTimeout(showNextLine, 500); // Ajusta el tiempo de espera entre líneas
      }
    }
  
    // Mostrar la primera línea después de un breve retraso
    setTimeout(showNextLine, 500); // Ajusta el tiempo de espera antes de comenzar la animación
  });