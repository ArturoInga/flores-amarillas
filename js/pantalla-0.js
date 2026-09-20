(() => {
  "use strict";


  /*
  ============================================================
  PANTALLA 0
  4 VIDEOS VERTICALES

  VERSIÓN OPTIMIZADA PARA:
  - TABLET
  - CELULAR
  - LAPTOP
  - GITHUB PAGES

  IMPORTANTE:
  NO cambia el diseño visual.
  ============================================================
  */


  const VIDEOS = [
    "./assets/video/pantalla-0/video-01.mp4",
    "./assets/video/pantalla-0/video-02.mp4",
    "./assets/video/pantalla-0/video-03.mp4",
    "./assets/video/pantalla-0/video-04.mp4"
  ];


  /*
  ============================================================
  ESTADO GENERAL
  ============================================================
  */

  let indiceActual = 0;

  let iniciada = false;

  let cambiando = false;

  let terminada = false;

  let temporizadorFallback = null;


  /*
  ============================================================
  PRECARGA INTELIGENTE
  ============================================================
  */

  const videosPreparados =
    new Map();


  let precargaActiva = null;

  let controladorPrecarga = null;

  let precargaPermitida = true;


  /*
  Buffer mínimo antes de permitir
  una descarga secundaria.

  No afecta visualmente nada.
  */

  const BUFFER_SEGURO_SEGUNDOS = 10;


  /*
  ============================================================
  CREAR PANTALLA
  ============================================================
  */

  function crearPantalla() {

    if (
      document.getElementById(
        "pantalla-0"
      )
    ) {
      return;
    }


    const pantalla =
      document.createElement(
        "section"
      );


    pantalla.id =
      "pantalla-0";


    pantalla.className =
      "pantalla-cero";


    pantalla.setAttribute(
      "aria-label",
      "Una introducción especial"
    );


    pantalla.innerHTML = `

      <!-- =================================================
           FONDO
           ================================================= -->

      <div
        class="p0-fondo"
        aria-hidden="true"
      >

        <div
          class="p0-luz p0-luz-1"
        ></div>

        <div
          class="p0-luz p0-luz-2"
        ></div>

        <div
          class="p0-luz p0-luz-3"
        ></div>

        <div
          class="p0-vineta"
        ></div>

      </div>



      <!-- =================================================
           INTRODUCCIÓN
           ================================================= -->

      <div
        class="p0-intro"
      >

        <p
          class="p0-intro-sobre"
        >
          Antes de comenzar
        </p>


        <h1
          class="p0-intro-titulo"
        >
          Tengo algo muy bonito
          preparado para ti…
        </h1>


        <p
          class="p0-intro-texto"
        >
          Pero antes quiero que sigas sintiendo,
          aunque sea por unos minutos,
          el inmenso amor que siento por ti.
        </p>


        <button
          class="p0-empezar"
          id="p0-empezar"
          type="button"
        >

          <span>
            Quiero que veas esto
          </span>

          <span
            aria-hidden="true"
          >
            ❤️
          </span>

        </button>

      </div>



      <!-- =================================================
           ESCENARIO
           ================================================= -->

      <div
        class="p0-escenario"
      >

        <header
          class="p0-video-encabezado"
        >

          <p
            class="p0-video-sobre"
          >
            Un poquito de todo lo que siento por ti
          </p>


          <h2
            class="p0-video-titulo"
          >
            Quédate conmigo un momento ❤️
          </h2>

        </header>



        <!-- =================================================
             TELÉFONO
             ================================================= -->

        <div
          class="p0-telefono-zona"
        >

          <div
            class="p0-telefono"
          >

            <div
              class="p0-video-marco"
            >

              <video
                class="p0-video"
                id="p0-video"
                playsinline
                webkit-playsinline
                preload="auto"
              ></video>


              <div
                class="p0-isla"
                aria-hidden="true"
              ></div>


              <div
                class="p0-video-brillo"
                aria-hidden="true"
              ></div>


              <button
                class="p0-reanudar"
                id="p0-reanudar"
                type="button"
              >
                Continuar ▶
              </button>

            </div>

          </div>

        </div>



        <!-- =================================================
             CTA FINAL
             ================================================= -->

        <div
          class="p0-cierre"
          id="p0-cierre"
        >

          <svg
            class="p0-flecha-final"
            viewBox="0 0 90 30"
            aria-hidden="true"
          >

            <path
              d="
                M2 15
                C24 15 44 15 75 15
                M64 5
                L76 15
                L64 25
              "
            ></path>

          </svg>


          <div
            class="p0-cta-final"
          >

            <button
              class="p0-boton-final"
              id="p0-boton-final"
              type="button"
              aria-label="Toca aquí para continuar"
            >

              <svg
                class="p0-boton-girasol"
                viewBox="0 0 140 140"
                aria-hidden="true"
              >

                <defs>

                  <linearGradient
                    id="p0-petalo-dorado"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      stop-color="#fff5ad"
                    ></stop>

                    <stop
                      offset=".48"
                      stop-color="#ffd957"
                    ></stop>

                    <stop
                      offset="1"
                      stop-color="#e39a24"
                    ></stop>

                  </linearGradient>


                  <linearGradient
                    id="p0-petalo-ambar"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      stop-color="#ffd761"
                    ></stop>

                    <stop
                      offset="1"
                      stop-color="#c9811f"
                    ></stop>

                  </linearGradient>


                  <radialGradient
                    id="p0-centro"
                    cx="38%"
                    cy="34%"
                    r="70%"
                  >

                    <stop
                      stop-color="#9e6737"
                    ></stop>

                    <stop
                      offset=".55"
                      stop-color="#674024"
                    ></stop>

                    <stop
                      offset="1"
                      stop-color="#34231c"
                    ></stop>

                  </radialGradient>

                </defs>


                <g
                  transform="translate(70 70)"
                >

                  <!-- PÉTALOS TRASEROS -->

                  ${Array.from(
                    {
                      length: 18
                    },
                    (_, i) => `

                      <ellipse
                        cx="0"
                        cy="-39"
                        rx="8"
                        ry="27"
                        fill="url(#p0-petalo-ambar)"
                        transform="rotate(${i * 20 + 10})"
                      ></ellipse>

                    `
                  ).join("")}


                  <!-- PÉTALOS DELANTEROS -->

                  ${Array.from(
                    {
                      length: 18
                    },
                    (_, i) => `

                      <ellipse
                        cx="0"
                        cy="-42"
                        rx="8.5"
                        ry="29"
                        fill="url(#p0-petalo-dorado)"
                        stroke="#d79727"
                        stroke-width=".6"
                        transform="rotate(${i * 20})"
                      ></ellipse>

                    `
                  ).join("")}


                  <circle
                    r="28"
                    fill="#bd7e2f"
                  ></circle>


                  <circle
                    r="24"
                    fill="url(#p0-centro)"
                  ></circle>


                  <!-- SEMILLAS -->

                  ${Array.from(
                    {
                      length: 44
                    },
                    (_, i) => {

                      const angulo =
                        i * 137.507764;


                      const radio =
                        Math.sqrt(
                          i / 44
                        ) * 20;


                      const radianes =
                        angulo *
                        Math.PI /
                        180;


                      const x =
                        Math.cos(
                          radianes
                        ) * radio;


                      const y =
                        Math.sin(
                          radianes
                        ) * radio;


                      return `

                        <circle
                          cx="${x.toFixed(2)}"
                          cy="${y.toFixed(2)}"
                          r="1.25"
                          fill="${
                            i % 2
                              ? "#d0964b"
                              : "#80512e"
                          }"
                        ></circle>

                      `;

                    }
                  ).join("")}

                </g>

              </svg>

            </button>


            <p
              class="p0-pulsa"
            >
              Toca aquí
            </p>

          </div>

        </div>



        <!-- =================================================
             INDICADOR
             ================================================= -->

        <div
          class="p0-indicador"
        >

          <span
            class="p0-indicador-numero"
            id="p0-indicador-numero"
          >
            01 / 04
          </span>


          <div
            class="p0-puntos"
            aria-hidden="true"
          >

            <span
              class="p0-punto activo"
            ></span>

            <span
              class="p0-punto"
            ></span>

            <span
              class="p0-punto"
            ></span>

            <span
              class="p0-punto"
            ></span>

          </div>

        </div>

      </div>

    `;


    document.body.appendChild(
      pantalla
    );


    document.body.style.overflow =
      "hidden";


    /*
    ============================================================
    PREPARAR VIDEO 1 DESDE QUE ABRE LA WEB
    ============================================================

    Mientras se lee la introducción,
    el navegador ya puede ir preparando
    el primer video.
    */


    const video =
      obtenerVideo();


    if (video) {

      configurarVideo(
        video
      );


      video.src =
        VIDEOS[0];


      try {

        video.load();

      } catch (error) {

        console.warn(
          "No se pudo preparar video 1.",
          error
        );

      }

    }


    /*
    ============================================================
    MOSTRAR PANTALLA
    ============================================================
    */


    requestAnimationFrame(
      () => {

        pantalla.classList.add(
          "activa"
        );


        const preloader =
          document.getElementById(
            "p0-preloader"
          );


        if (preloader) {

          window.setTimeout(
            () => {

              preloader.remove();

            },
            180
          );

        }

      }
    );


    prepararEventos();


    /*
    Comenzamos a vigilar cuándo
    tenemos suficiente buffer para
    preparar el siguiente video.
    */


    iniciarSistemaPrecarga();

  }


  /*
  ============================================================
  OBTENER VIDEO
  ============================================================
  */

  function obtenerVideo() {

    return document.getElementById(
      "p0-video"
    );

  }


  /*
  ============================================================
  CONFIGURACIÓN GENERAL DEL VIDEO
  ============================================================
  */

  function configurarVideo(
    video
  ) {

    if (!video) {
      return;
    }


    video.preload =
      "auto";


    video.playsInline =
      true;


    video.setAttribute(
      "playsinline",
      ""
    );


    video.setAttribute(
      "webkit-playsinline",
      ""
    );


    video.volume =
      1;


    video.muted =
      false;

  }


  /*
  ============================================================
  EVENTOS
  ============================================================
  */

  function prepararEventos() {

    const empezar =
      document.getElementById(
        "p0-empezar"
      );


    const video =
      obtenerVideo();


    const reanudar =
      document.getElementById(
        "p0-reanudar"
      );


    const finalizar =
      document.getElementById(
        "p0-boton-final"
      );


    if (
      !empezar ||
      !video ||
      !reanudar ||
      !finalizar
    ) {
      return;
    }


    /*
    ============================================================
    BOTÓN INICIAL
    ============================================================
    */


    empezar.addEventListener(
      "click",
      iniciarVideos,
      {
        once: true
      }
    );


    /*
    ============================================================
    FIN DEL VIDEO
    ============================================================
    */


    video.addEventListener(
      "ended",
      manejarFinVideo
    );


    /*
    ============================================================
    VIDEO REPRODUCIENDO
    ============================================================
    */


    video.addEventListener(
      "playing",
      () => {

        limpiarFallback();


        reanudar.classList.remove(
          "visible"
        );


        precargaPermitida =
          true;


        evaluarPrecarga();

      }
    );


    /*
    ============================================================
    BUFFER AVANZA
    ============================================================
    */


    video.addEventListener(
      "progress",
      evaluarPrecarga
    );


    video.addEventListener(
      "canplay",
      evaluarPrecarga
    );


    video.addEventListener(
      "canplaythrough",
      evaluarPrecarga
    );


    /*
    ============================================================
    SI EL VIDEO NECESITA INTERNET

    Frenamos cualquier descarga secundaria
    para darle todo el ancho de banda al
    video que la persona está viendo.
    ============================================================
    */


    video.addEventListener(
      "waiting",
      () => {

        precargaPermitida =
          false;


        abortarPrecargaSecundaria();

      }
    );


    video.addEventListener(
      "stalled",
      () => {

        precargaPermitida =
          false;


        abortarPrecargaSecundaria();

      }
    );


    /*
    ============================================================
    ERROR
    ============================================================
    */


    video.addEventListener(
      "error",
      () => {

        limpiarFallback();


        reanudar.textContent =
          "Continuar ▶";


        reanudar.classList.add(
          "visible"
        );


        console.warn(
          "Error reproduciendo:",
          VIDEOS[indiceActual],
          video.error
        );

      }
    );


    /*
    ============================================================
    BOTÓN CONTINUAR
    ============================================================
    */


    reanudar.addEventListener(
      "click",
      reproducirDesdeInteraccion
    );


    /*
    ============================================================
    TOCAR VIDEO = PAUSA / PLAY
    ============================================================
    */


    video.addEventListener(
      "click",
      () => {

        if (
          terminada ||
          cambiando
        ) {
          return;
        }


        if (
          video.paused
        ) {

          reproducirDesdeInteraccion();

        } else {

          video.pause();

        }

      }
    );


    /*
    ============================================================
    IR A PANTALLA 1
    ============================================================
    */


    finalizar.addEventListener(
      "click",
      finalizarPantalla0,
      {
        once: true
      }
    );

  }


  /*
  ============================================================
  INICIAR VIDEO 1
  ============================================================
  */

  function iniciarVideos() {

    if (iniciada) {
      return;
    }


    iniciada =
      true;


    indiceActual =
      0;


    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      obtenerVideo();


    const reanudar =
      document.getElementById(
        "p0-reanudar"
      );


    if (
      !pantalla ||
      !video ||
      !reanudar
    ) {
      return;
    }


    configurarVideo(
      video
    );


    actualizarIndicador();


    /*
    ============================================================
    PLAY INMEDIATO

    Se solicita dentro del mismo toque
    del usuario.
    ============================================================
    */


    let promesaPlay;


    try {

      promesaPlay =
        video.play();

    } catch (error) {

      reanudar.textContent =
        "Continuar ▶";


      reanudar.classList.add(
        "visible"
      );

    }


    /*
    La animación ocurre después de
    haber solicitado reproducción.
    */


    pantalla.classList.add(
      "reproduciendo"
    );


    if (
      promesaPlay &&
      typeof promesaPlay.then ===
        "function"
    ) {

      promesaPlay
        .then(
          () => {

            reanudar.classList.remove(
              "visible"
            );


            precargaPermitida =
              true;


            evaluarPrecarga();

          }
        )
        .catch(
          error => {

            console.warn(
              "El navegador bloqueó temporalmente el video.",
              error
            );


            reanudar.textContent =
              "Continuar ▶";


            reanudar.classList.add(
              "visible"
            );

          }
        );

    }


    iniciarFallback();

  }


  /*
  ============================================================
  PLAY DESDE INTERACCIÓN
  ============================================================
  */

  function reproducirDesdeInteraccion() {

    const video =
      obtenerVideo();


    const reanudar =
      document.getElementById(
        "p0-reanudar"
      );


    if (
      !video ||
      !reanudar
    ) {
      return;
    }


    limpiarFallback();


    let promesa;


    try {

      promesa =
        video.play();

    } catch (error) {

      reanudar.textContent =
        "Continuar ▶";


      reanudar.classList.add(
        "visible"
      );


      return;

    }


    if (
      promesa &&
      typeof promesa.then ===
        "function"
    ) {

      promesa
        .then(
          () => {

            reanudar.classList.remove(
              "visible"
            );


            precargaPermitida =
              true;


            evaluarPrecarga();

          }
        )
        .catch(
          () => {

            reanudar.textContent =
              "Continuar ▶";


            reanudar.classList.add(
              "visible"
            );

          }
        );

    }


    iniciarFallback();

  }


  /*
  ============================================================
  BUFFER DISPONIBLE
  ============================================================
  */

  function obtenerBufferDisponible(
    video
  ) {

    if (
      !video ||
      !video.buffered ||
      video.buffered.length === 0
    ) {

      return 0;

    }


    try {

      const tiempoActual =
        video.currentTime || 0;


      for (
        let i =
          video.buffered.length - 1;

        i >= 0;

        i--
      ) {

        const inicio =
          video.buffered.start(
            i
          );


        const fin =
          video.buffered.end(
            i
          );


        if (
          tiempoActual >=
            inicio - .25
          &&
          tiempoActual <=
            fin + .25
        ) {

          return Math.max(
            0,
            fin - tiempoActual
          );

        }

      }


      /*
      Si todavía no ha comenzado,
      tomamos el primer rango.
      */


      if (
        tiempoActual <= .25
      ) {

        return video.buffered.end(
          0
        );

      }

    } catch (error) {

      return 0;

    }


    return 0;

  }


  /*
  ============================================================
  SISTEMA DE PRECARGA
  ============================================================
  */

  function iniciarSistemaPrecarga() {

    const video =
      obtenerVideo();


    if (!video) {
      return;
    }


    /*
    Mientras la persona lee la intro,
    esperamos a que el video 1 tenga
    contenido suficiente.

    En ese momento podemos empezar a
    preparar el video 2.
    */


    const vigilar =
      window.setInterval(
        () => {

          if (
            terminada ||
            !document.getElementById(
              "pantalla-0"
            )
          ) {

            clearInterval(
              vigilar
            );


            return;

          }


          evaluarPrecarga();

        },
        900
      );

  }


  /*
  ============================================================
  DECIDIR SI PODEMOS PRECARGAR
  ============================================================
  */

  function evaluarPrecarga() {

    if (
      terminada ||
      !precargaPermitida ||
      precargaActiva !== null
    ) {
      return;
    }


    const siguiente =
      encontrarSiguienteVideoNoPreparado();


    if (
      siguiente === null
    ) {
      return;
    }


    const video =
      obtenerVideo();


    if (!video) {
      return;
    }


    /*
    ============================================================
    ANTES DE QUE EL USUARIO HAGA CLIC

    Si el video 1 ya tiene suficiente buffer,
    usamos el tiempo de lectura de la intro
    para preparar los demás.
    ============================================================
    */


    if (!iniciada) {

      const buffer =
        obtenerBufferDisponible(
          video
        );


      if (
        video.readyState >= 4
        ||
        buffer >=
          BUFFER_SEGURO_SEGUNDOS
      ) {

        precargarVideoCompleto(
          siguiente
        );

      }


      return;

    }


    /*
    ============================================================
    DURANTE REPRODUCCIÓN

    Solo descargamos otro archivo si
    el video actual ya tiene un colchón
    suficiente de contenido.
    ============================================================
    */


    if (
      video.paused
      ||
      video.ended
    ) {
      return;
    }


    const buffer =
      obtenerBufferDisponible(
        video
      );


    /*
    Si el video ya está prácticamente
    totalmente cargado, también podemos
    avanzar con la cola.
    */


    const casiCompleto =
      Number.isFinite(
        video.duration
      )
      &&
      video.duration > 0
      &&
      buffer >=
        Math.max(
          3,
          video.duration -
          video.currentTime -
          1
        );


    if (
      buffer >=
        BUFFER_SEGURO_SEGUNDOS
      ||
      casiCompleto
    ) {

      precargarVideoCompleto(
        siguiente
      );

    }

  }


  /*
  ============================================================
  BUSCAR SIGUIENTE VIDEO
  ============================================================
  */

  function encontrarSiguienteVideoNoPreparado() {

    /*
    Nunca necesitamos volver a preparar
    el video actual.
    */


    for (
      let i =
        indiceActual + 1;

      i < VIDEOS.length;

      i++
    ) {

      if (
        !videosPreparados.has(
          i
        )
      ) {

        return i;

      }

    }


    return null;

  }


  /*
  ============================================================
  DESCARGAR VIDEO SECUNDARIO

  Se descarga UNO por vez.
  ============================================================
  */

  async function precargarVideoCompleto(
    indice
  ) {

    if (
      indice <= indiceActual
      ||
      indice >= VIDEOS.length
      ||
      videosPreparados.has(
        indice
      )
      ||
      precargaActiva !== null
      ||
      !precargaPermitida
    ) {

      return;

    }


    precargaActiva =
      indice;


    controladorPrecarga =
      new AbortController();


    try {

      const respuesta =
        await fetch(
          VIDEOS[indice],
          {

            method:
              "GET",

            cache:
              "force-cache",

            signal:
              controladorPrecarga.signal

          }
        );


      if (
        !respuesta.ok
      ) {

        throw new Error(
          `HTTP ${
            respuesta.status
          }`
        );

      }


      const blob =
        await respuesta.blob();


      /*
      Comprobamos que el video siga siendo
      futuro. Puede ocurrir que mientras
      descargaba ya hayamos avanzado.
      */


      if (
        indice >
        indiceActual
      ) {

        const urlBlob =
          URL.createObjectURL(
            blob
          );


        videosPreparados.set(
          indice,
          urlBlob
        );

      }


    } catch (error) {

      /*
      Si lo abortamos porque el video actual
      necesitaba internet, NO es un error.
      */


      if (
        error &&
        error.name !==
          "AbortError"
      ) {

        console.warn(
          `No se pudo precargar video ${
            indice + 1
          }.`,
          error
        );

      }

    } finally {

      precargaActiva =
        null;


      controladorPrecarga =
        null;


      /*
      Si seguimos teniendo ancho de banda,
      evaluamos el siguiente.

      La descarga sigue siendo secuencial:
      nunca dos videos simultáneos.
      */


      window.setTimeout(
        evaluarPrecarga,
        450
      );

    }

  }


  /*
  ============================================================
  ABORTAR PRECARGA SECUNDARIA
  ============================================================
  */

  function abortarPrecargaSecundaria() {

    if (
      controladorPrecarga
    ) {

      try {

        controladorPrecarga.abort();

      } catch (error) {}

    }


    controladorPrecarga =
      null;


    precargaActiva =
      null;

  }


  /*
  ============================================================
  OBTENER FUENTE DEL VIDEO
  ============================================================
  */

  function obtenerFuenteVideo(
    indice
  ) {

    if (
      videosPreparados.has(
        indice
      )
    ) {

      return videosPreparados.get(
        indice
      );

    }


    return VIDEOS[indice];

  }


  /*
  ============================================================
  LIBERAR VIDEO YA UTILIZADO
  ============================================================
  */

  function liberarVideoPreparado(
    indice
  ) {

    if (
      !videosPreparados.has(
        indice
      )
    ) {
      return;
    }


    const url =
      videosPreparados.get(
        indice
      );


    /*
    Dejamos un pequeño margen antes
    de liberar el Blob.
    */


    window.setTimeout(
      () => {

        try {

          URL.revokeObjectURL(
            url
          );

        } catch (error) {}


        videosPreparados.delete(
          indice
        );

      },
      1200
    );

  }


  /*
  ============================================================
  FIN DE CADA VIDEO
  ============================================================
  */

  function manejarFinVideo() {

    if (
      terminada ||
      cambiando
    ) {
      return;
    }


    /*
    ============================================================
    VIDEO 4
    ============================================================
    */


    if (
      indiceActual ===
      VIDEOS.length - 1
    ) {

      mostrarCierre();

      return;

    }


    cambiando =
      true;


    precargaPermitida =
      false;


    abortarPrecargaSecundaria();


    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      obtenerVideo();


    const reanudar =
      document.getElementById(
        "p0-reanudar"
      );


    if (
      !pantalla ||
      !video ||
      !reanudar
    ) {

      cambiando =
        false;


      return;

    }


    /*
    Guardamos cuál acabamos
    de terminar.
    */


    const indiceAnterior =
      indiceActual;


    pantalla.classList.add(
      "cambiando-video"
    );


    indiceActual++;


    actualizarIndicador();


    /*
    ============================================================
    SI EL VIDEO YA FUE DESCARGADO

    usamos su Blob local.

    Si todavía no estaba listo,
    utilizamos la URL normal.
    ============================================================
    */


    const fuente =
      obtenerFuenteVideo(
        indiceActual
      );


    video.src =
      fuente;


    configurarVideo(
      video
    );


    try {

      video.load();

    } catch (error) {}


    let promesa;


    try {

      promesa =
        video.play();

    } catch (error) {

      reanudar.textContent =
        "Continuar ▶";


      reanudar.classList.add(
        "visible"
      );

    }


    if (
      promesa &&
      typeof promesa.then ===
        "function"
    ) {

      promesa
        .then(
          () => {

            reanudar.classList.remove(
              "visible"
            );


            precargaPermitida =
              true;


            evaluarPrecarga();

          }
        )
        .catch(
          error => {

            console.warn(
              `No se pudo iniciar video ${
                indiceActual + 1
              }.`,
              error
            );


            reanudar.textContent =
              "Continuar ▶";


            reanudar.classList.add(
              "visible"
            );

          }
        );

    }


    /*
    El video anterior ya no
    se necesita.
    */


    liberarVideoPreparado(
      indiceAnterior
    );


    /*
    Dejamos la misma transición visual
    que ya teníamos.
    */


    window.setTimeout(
      () => {

        pantalla.classList.remove(
          "cambiando-video"
        );


        cambiando =
          false;


        precargaPermitida =
          true;


        evaluarPrecarga();

      },
      550
    );


    iniciarFallback();

  }


  /*
  ============================================================
  FALLBACK DEL NAVEGADOR
  ============================================================
  */

  function iniciarFallback() {

    limpiarFallback();


    temporizadorFallback =
      window.setTimeout(
        () => {

          const video =
            obtenerVideo();


          const reanudar =
            document.getElementById(
              "p0-reanudar"
            );


          if (
            !video ||
            !reanudar ||
            terminada
          ) {
            return;
          }


          if (
            video.paused &&
            !video.ended
          ) {

            reanudar.textContent =
              "Continuar ▶";


            reanudar.classList.add(
              "visible"
            );

          }

        },
        2500
      );

  }


  function limpiarFallback() {

    if (
      temporizadorFallback
    ) {

      clearTimeout(
        temporizadorFallback
      );


      temporizadorFallback =
        null;

    }

  }


  /*
  ============================================================
  INDICADOR
  ============================================================
  */

  function actualizarIndicador() {

    const numero =
      document.getElementById(
        "p0-indicador-numero"
      );


    const puntos =
      document.querySelectorAll(
        ".p0-punto"
      );


    if (
      numero
    ) {

      numero.textContent =
        `${String(
          indiceActual + 1
        ).padStart(
          2,
          "0"
        )} / ${String(
          VIDEOS.length
        ).padStart(
          2,
          "0"
        )}`;

    }


    puntos.forEach(
      (
        punto,
        indice
      ) => {

        punto.classList.toggle(
          "activo",
          indice ===
            indiceActual
        );

      }
    );

  }


  /*
  ============================================================
  VIDEO 4 TERMINADO
  ============================================================
  */

  function mostrarCierre() {

    if (
      terminada
    ) {
      return;
    }


    terminada =
      true;


    precargaPermitida =
      false;


    abortarPrecargaSecundaria();


    limpiarFallback();


    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      obtenerVideo();


    const reanudar =
      document.getElementById(
        "p0-reanudar"
      );


    if (!pantalla) {
      return;
    }


    if (
      reanudar
    ) {

      reanudar.classList.remove(
        "visible"
      );

    }


    if (
      video
    ) {

      try {

        video.pause();

      } catch (error) {}

    }


    /*
    Conservamos exactamente el mismo
    comportamiento final.
    */


    window.setTimeout(
      () => {

        pantalla.classList.add(
          "finalizado"
        );

      },
      900
    );

  }


  /*
  ============================================================
  LIMPIAR VIDEOS PRECARGADOS
  ============================================================
  */

  function liberarTodosLosVideos() {

    abortarPrecargaSecundaria();


    videosPreparados.forEach(
      url => {

        try {

          URL.revokeObjectURL(
            url
          );

        } catch (error) {}

      }
    );


    videosPreparados.clear();

  }


  /*
  ============================================================
  PANTALLA 0 → PANTALLA 1
  ============================================================
  */

  async function finalizarPantalla0() {

    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      obtenerVideo();


    if (
      !pantalla
    ) {
      return;
    }


    limpiarFallback();


    precargaPermitida =
      false;


    if (
      video
    ) {

      try {

        video.pause();

      } catch (error) {}

    }


    pantalla.classList.add(
      "saliendo"
    );


    document.dispatchEvent(
      new CustomEvent(
        "p0:completada"
      )
    );


    await esperar(
      1000
    );


    liberarTodosLosVideos();


    pantalla.remove();


    document.body.style.overflow =
      "";

  }


  /*
  ============================================================
  UTILIDAD
  ============================================================
  */

  function esperar(
    milisegundos
  ) {

    return new Promise(
      resolve => {

        window.setTimeout(
          resolve,
          milisegundos
        );

      }
    );

  }


  /*
  ============================================================
  INICIO
  ============================================================
  */

  crearPantalla();

})();
