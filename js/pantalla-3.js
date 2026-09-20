(() => {
  "use strict";

  /*
  ============================================================
  PANTALLA 3
  Mantiene exactamente la lógica existente de:
  - Entrada de la persona
  - Aparición del pergamino
  - Cierre del pergamino
  - Aparición del botón final

  La única incorporación es:
  - Precargar Pantalla 4
  - Abrir Pantalla 4 al tocar "Sigue conmigo"
  ============================================================
  */

  const pantalla3 = document.getElementById("pantalla-3");
  const pergamino = document.getElementById("p3-pergamino");
  const botonCerrar = document.getElementById("p3-cerrar");
  const botonSiguiente = document.getElementById("p3-siguiente");

  if (
    !pantalla3 ||
    !pergamino ||
    !botonCerrar ||
    !botonSiguiente
  ) {
    return;
  }


  let activa = false;
  let pergaminoCerrado = false;
  let pantalla4Preparada = false;


  /*
  ============================================================
  ACTIVAR PANTALLA 3
  ============================================================
  */

  function activarPantalla3() {

    if (activa) return;

    activa = true;

    pantalla3.classList.add("activa");

    pantalla3.setAttribute(
      "aria-hidden",
      "false"
    );


    /*
    ------------------------------------------------------------
    PERSONA
    ------------------------------------------------------------
    */

    setTimeout(() => {

      pantalla3.classList.add(
        "mostrar-personaje"
      );

    }, 180);


    /*
    ------------------------------------------------------------
    PERGAMINO
    ------------------------------------------------------------
    */

    setTimeout(() => {

      pantalla3.classList.add(
        "mostrar-pergamino"
      );

      pergamino.setAttribute(
        "aria-hidden",
        "false"
      );

      botonCerrar.focus();

    }, 1300);


    /*
    ------------------------------------------------------------
    PRECARGAMOS PANTALLA 4

    Esto ocurre mientras ella todavía está leyendo
    la carta de Pantalla 3.

    Por eso, cuando posteriormente pulse
    "Sigue conmigo", Pantalla 4 ya estará lista.
    ------------------------------------------------------------
    */

    setTimeout(() => {

      prepararPantalla4();

    }, 900);

  }


  /*
  ============================================================
  CERRAR PERGAMINO
  ============================================================
  */

  function cerrarPergamino() {

    if (pergaminoCerrado) return;

    pergaminoCerrado = true;


    pergamino.classList.add(
      "cerrando"
    );


    pergamino.setAttribute(
      "aria-hidden",
      "true"
    );


    setTimeout(() => {

      pantalla3.classList.remove(
        "mostrar-pergamino"
      );


      /*
      ----------------------------------------------------------
      MOSTRAR BOTÓN
      ----------------------------------------------------------
      */

      setTimeout(() => {

        pantalla3.classList.add(
          "mostrar-boton"
        );

        botonSiguiente.focus();

      }, 250);

    }, 620);

  }


  /*
  ============================================================
  PREPARAR PANTALLA 4
  ============================================================
  */

  function prepararPantalla4() {

    if (pantalla4Preparada) return;

    pantalla4Preparada = true;


    /*
    ------------------------------------------------------------
    CARGAR CSS
    ------------------------------------------------------------
    */

    if (
      !document.querySelector(
        'link[data-pantalla-4-css]'
      )
    ) {

      const link = document.createElement(
        "link"
      );

      link.rel = "stylesheet";

      link.href =
        "./css/pantalla-4.css";

      link.dataset.pantalla4Css =
        "true";

      document.head.appendChild(
        link
      );

    }


    /*
    ------------------------------------------------------------
    CARGAR JAVASCRIPT
    ------------------------------------------------------------
    */

    if (
      !document.querySelector(
        'script[data-pantalla-4-js]'
      )
    ) {

      const script =
        document.createElement(
          "script"
        );

      script.src =
        "./js/pantalla-4.js";

      script.defer = true;

      script.dataset.pantalla4Js =
        "true";

      document.body.appendChild(
        script
      );

    }

  }


  /*
  ============================================================
  ABRIR PANTALLA 4
  ============================================================
  */

  function abrirPantalla4() {

    /*
    ------------------------------------------------------------
    Normalmente Pantalla 4 ya estará precargada.
    ------------------------------------------------------------
    */

    if (
      window.ProyectoHPantalla4 &&
      typeof window.ProyectoHPantalla4.abrir ===
        "function"
    ) {

      window.ProyectoHPantalla4.abrir();

      return;

    }


    /*
    ------------------------------------------------------------
    Por seguridad:
    si todavía no terminó de cargar,
    esperamos unos milisegundos.
    ------------------------------------------------------------
    */

    prepararPantalla4();


    botonSiguiente.disabled = true;


    let intentos = 0;


    const espera = setInterval(() => {

      intentos++;


      if (
        window.ProyectoHPantalla4 &&
        typeof window.ProyectoHPantalla4.abrir ===
          "function"
      ) {

        clearInterval(espera);

        botonSiguiente.disabled = false;

        window.ProyectoHPantalla4.abrir();

        return;

      }


      /*
      ----------------------------------------------------------
      Si después de aproximadamente
      cuatro segundos no cargó,
      reactivamos el botón.
      ----------------------------------------------------------
      */

      if (intentos >= 40) {

        clearInterval(espera);

        botonSiguiente.disabled = false;

      }

    }, 100);

  }


  /*
  ============================================================
  EVENTOS
  ============================================================
  */


  /*
  ------------------------------------------------------------
  X DEL PERGAMINO
  ------------------------------------------------------------
  */

  botonCerrar.addEventListener(
    "click",
    cerrarPergamino
  );


  /*
  ------------------------------------------------------------
  BOTÓN "SIGUE CONMIGO"
  ------------------------------------------------------------
  */

  botonSiguiente.addEventListener(
    "click",
    abrirPantalla4
  );


  /*
  ------------------------------------------------------------
  ESCAPE
  ------------------------------------------------------------
  */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        activa &&
        !pergaminoCerrado
      ) {

        cerrarPergamino();

      }

    }
  );


  /*
  ============================================================
  CASTILLO REVELADO → PANTALLA 3
  ============================================================
  */

  document.addEventListener(
    "p2:castillo-revelado",
    () => {

      setTimeout(
        activarPantalla3,
        1100
      );

    }
  );

})();