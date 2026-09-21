(() => {

  "use strict";


  /* =========================================================
     RUTAS DE MÚSICA
     ========================================================= */

  const rutaMusica1 =
    "./assets/audio/musica-1.mp3";


  const rutaMusica2 =
    "./assets/audio/musica-2.mp3";


  const rutaMusica3 =
    "./assets/audio/musica-3.mp3";



  /* =========================================================
     VOLUMEN
     ========================================================= */

  const volumenPantalla1 =
    .32;


  const volumenPantalla4 =
    .24;


  const volumenPantalla5 =
    .26;


  const duracionFade =
    2600;



  /* =========================================================
     AUDIO PRINCIPAL EXISTENTE
     ========================================================= */

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



  /* =========================================================
     CONFIGURACIÓN MÚSICA 1
     ========================================================= */

  audio.src =
    rutaMusica1;


  audio.loop =
    true;


  audio.volume =
    0;


  audio.muted =
    false;



  let frameFade =
    null;


  let iniciada =
    false;



  /* =========================================================
     AUDIOS DEDICADOS
     ========================================================= */

  let musica2 =
    null;


  let musica3 =
    null;



  /* =========================================================
     CREAR / PRECARGAR MÚSICA 2
     ========================================================= */

  function prepararMusica2() {

    if (
      musica2 instanceof HTMLAudioElement
    ) {

      return musica2;

    }


    musica2 =
      new Audio(
        rutaMusica2
      );


    musica2.preload =
      "auto";


    musica2.loop =
      true;


    musica2.volume =
      volumenPantalla4;


    musica2.muted =
      false;


    window.ProyectoHMusica2 =
      musica2;


    try {

      musica2.load();

    } catch (error) {}


    return musica2;

  }



  /* =========================================================
     CREAR / PRECARGAR MÚSICA 3
     ========================================================= */

  function prepararMusica3() {

    if (
      musica3 instanceof HTMLAudioElement
    ) {

      return musica3;

    }


    musica3 =
      new Audio(
        rutaMusica3
      );


    musica3.preload =
      "auto";


    musica3.loop =
      true;


    musica3.volume =
      volumenPantalla5;


    musica3.muted =
      false;


    window.ProyectoHMusica3 =
      musica3;


    try {

      musica3.load();

    } catch (error) {}


    return musica3;

  }



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
     REPRODUCIR MÚSICA 1
     ========================================================= */

  async function reproducirMusica() {

    if (
      !audio.paused
    ) {

      return;

    }


    try {

      audio.muted =
        false;


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

    } catch (error) {

      if (estado) {

        estado.textContent =
          "No se pudo reproducir la música. Puedes intentarlo de nuevo.";

      }


      console.warn(
        "No se pudo iniciar musica-1.mp3",
        error
      );

    }

  }



  /* =========================================================
     INICIAR MÚSICA 2
     ========================================================= */

  function iniciarMusica2() {

    const pista =
      prepararMusica2();


    if (!pista) {
      return;
    }


    /*
      Detenemos Música 1.
    */

    try {

      audio.pause();

    } catch (error) {}


    /*
      IMPORTANTÍSIMO:

      Pantalla 4 y Pantalla 5 todavía pueden
      intentar manipular #musica-fondo.

      Lo dejamos silenciado para que no pueda
      duplicarse con nuestros audios dedicados.
    */

    audio.muted =
      true;


    /*
      Si Música 3 estuviera sonando,
      también la detenemos.
    */

    if (
      musica3 instanceof HTMLAudioElement
    ) {

      try {

        musica3.pause();

      } catch (error) {}

    }


    pista.loop =
      true;


    pista.muted =
      false;


    pista.volume =
      volumenPantalla4;


    /*
      Este play() ocurre directamente
      durante el clic de "Sigue conmigo".
    */

    const intento =
      pista.play();


    if (
      intento &&
      typeof intento.catch ===
        "function"
    ) {

      intento.catch(
        error => {

          console.warn(
            "No se pudo reproducir musica-2.mp3.",
            error
          );

        }
      );

    }

  }



  /* =========================================================
     INICIAR MÚSICA 3
     ========================================================= */

  function iniciarMusica3() {

    const pista =
      prepararMusica3();


    if (!pista) {
      return;
    }


    /*
      Detenemos Música 2.
    */

    if (
      musica2 instanceof HTMLAudioElement
    ) {

      try {

        musica2.pause();

      } catch (error) {}

    }


    /*
      El audio original se mantiene apagado,
      porque Pantalla 5 todavía puede intentar
      usarlo internamente.
    */

    try {

      audio.pause();

    } catch (error) {}


    audio.muted =
      true;


    pista.loop =
      true;


    pista.muted =
      false;


    pista.volume =
      volumenPantalla5;


    /*
      Este play() ocurre directamente
      durante el clic de la X de Pantalla 4.
    */

    const intento =
      pista.play();


    if (
      intento &&
      typeof intento.catch ===
        "function"
    ) {

      intento.catch(
        error => {

          console.warn(
            "No se pudo reproducir musica-3.mp3.",
            error
          );

        }
      );

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



  /* =========================================================
     PRECARGAR MÚSICA 2

     Cuando Pantalla 2 termina de revelar el castillo,
     Pantalla 3 está por comenzar.

     Aprovechamos ese momento para preparar Música 2.
     ========================================================= */

  document.addEventListener(
    "p2:castillo-revelado",
    () => {

      prepararMusica2();

    }
  );



  /* =========================================================
     PRECARGAR MÚSICA 3

     Pantalla 4 lanza este evento cuando su JS
     ya está listo.

     Así Música 3 puede empezar a prepararse
     antes de tocar la X.
     ========================================================= */

  document.addEventListener(
    "p4:lista",
    () => {

      prepararMusica3();

    }
  );



  /* =========================================================
     CAPTURAR CLICS REALES

     Usamos fase de captura.

     Esto significa que la música empieza ANTES
     de que los scripts de Pantalla 3 o Pantalla 4
     hagan sus transiciones.

     Es mucho más fiable en:
     - Chrome
     - tablets
     - navegadores móviles
     - laptops
     ========================================================= */

  document.addEventListener(
    "click",
    event => {

      const objetivo =
        event.target instanceof Element
          ? event.target
          : null;


      if (!objetivo) {
        return;
      }



      /* =====================================================
         PANTALLA 3 → PANTALLA 4
         ===================================================== */

      const botonPantalla4 =
        objetivo.closest(
          "#p3-siguiente"
        );


      if (botonPantalla4) {

        iniciarMusica2();

        /*
          Mientras Música 2 está sonando,
          empezamos a preparar Música 3.
        */

        window.setTimeout(
          prepararMusica3,
          700
        );


        return;

      }



      /* =====================================================
         PANTALLA 4 → PANTALLA 5
         ===================================================== */

      const botonPantalla5 =
        objetivo.closest(
          "#p4-cerrar"
        );


      if (botonPantalla5) {

        iniciarMusica3();

      }

    },
    true
  );



  /* =========================================================
     RESPALDO PARA TOUCH

     Algunos navegadores antiguos de tablet
     gestionan mejor touchend que click.
     ========================================================= */

  document.addEventListener(
    "touchend",
    event => {

      const objetivo =
        event.target instanceof Element
          ? event.target
          : null;


      if (!objetivo) {
        return;
      }


      const botonPantalla4 =
        objetivo.closest(
          "#p3-siguiente"
        );


      if (
        botonPantalla4 &&
        (
          !musica2 ||
          musica2.paused
        )
      ) {

        iniciarMusica2();

        return;

      }


      const botonPantalla5 =
        objetivo.closest(
          "#p4-cerrar"
        );


      if (
        botonPantalla5 &&
        (
          !musica3 ||
          musica3.paused
        )
      ) {

        iniciarMusica3();

      }

    },
    {
      capture: true,
      passive: true
    }
  );



  /* =========================================================
     ESTADO INICIAL
     ========================================================= */

  actualizarControl();


})();
