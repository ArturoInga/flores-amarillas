(() => {

  "use strict";


  const rutaMusica =
    "./assets/audio/musica-1.mp3";


  const volumenPantalla1 =
    .32;


  const duracionFade =
    2600;


  const audio =
    document.getElementById(
      "musica-fondo"
    );


  const control =
    document.getElementById(
      "control-musica"
    );


  const estado =
    document.getElementById(
      "estado-musica"
    );


  if (!audio) {
    return;
  }


  audio.src =
    rutaMusica;


  audio.loop =
    true;


  audio.volume =
    0;


  let frameFade =
    null;


  let iniciada =
    false;



  /* =========================================================
     PAUSAR ANIMACIONES CUANDO LA PESTAÑA NO SE VE
     ========================================================= */

  document.addEventListener(
    "visibilitychange",
    () => {

      document.documentElement
        .classList.toggle(
          "en-pausa",
          document.hidden
        );

    }
  );



  /* =========================================================
     FADE DE VOLUMEN
     ========================================================= */

  function cambiarVolumen(
    desde,
    hasta,
    duracion
  ) {

    if (
      frameFade !== null
    ) {

      cancelAnimationFrame(
        frameFade
      );


      frameFade =
        null;

    }


    const inicio =
      performance.now();



    function animar(
      ahora
    ) {

      const progreso =
        Math.min(
          (
            ahora -
            inicio
          )
          /
          duracion,
          1
        );


      const suavizado =
        progreso *
        progreso *
        (
          3 -
          2 *
          progreso
        );


      audio.volume =
        desde +
        (
          hasta -
          desde
        )
        *
        suavizado;


      if (
        progreso < 1
      ) {

        frameFade =
          requestAnimationFrame(
            animar
          );

      } else {

        audio.volume =
          hasta;


        frameFade =
          null;

      }

    }


    frameFade =
      requestAnimationFrame(
        animar
      );

  }



  /* =========================================================
     REPRODUCIR
     ========================================================= */

  async function reproducirMusica() {

    if (
      !audio.paused
    ) {

      return;

    }


    try {

      audio.volume =
        .01;


      await audio.play();


      iniciada =
        true;


      cambiarVolumen(
        .01,
        volumenPantalla1,
        duracionFade
      );


      if (estado) {

        estado.textContent =
          "";

      }


      actualizarControl();

    } catch {

      if (estado) {

        estado.textContent =
          "No se pudo reproducir la música. Puedes intentarlo de nuevo.";

      }

    }

  }



  /* =========================================================
     CONTROL
     ========================================================= */

  function actualizarControl() {

    if (!control) {
      return;
    }


    control.textContent =
      audio.paused
        ? "Activar música"
        : "Pausar música";


    control.setAttribute(
      "aria-pressed",
      String(
        !audio.paused
      )
    );

  }



  if (control) {

    control.hidden =
      false;


    control.addEventListener(
      "click",
      () => {

        if (
          audio.paused
        ) {

          reproducirMusica();

        } else {

          audio.pause();

        }

      }
    );

  }



  audio.addEventListener(
    "play",
    actualizarControl
  );


  audio.addEventListener(
    "pause",
    actualizarControl
  );



  /* =========================================================
     INICIO DESDE PANTALLA 1
     ========================================================= */

  document.addEventListener(
    "flores:abrir",
    () => {

      if (
        !iniciada
      ) {

        reproducirMusica();

      }

    }
  );


  actualizarControl();


})();