(() => {
  "use strict";


  /* =========================================================
     PANTALLA 0
     Optimización para tablet / móvil / laptop

     NO cambia:
     - textos
     - diseño
     - teléfono
     - girasol final
     - indicador
     - flujo hacia Pantalla 1
     ========================================================= */


  const VIDEOS = [
    "./assets/video/pantalla-0/video-01.mp4",
    "./assets/video/pantalla-0/video-02.mp4",
    "./assets/video/pantalla-0/video-03.mp4",
    "./assets/video/pantalla-0/video-04.mp4"
  ];


  /*
    El video actual debe tener este colchón
    antes de empezar a preparar el siguiente.
  */

  const BUFFER_SEGURO =
    12;


  let indiceActual =
    0;


  let iniciada =
    false;


  let cambiando =
    false;


  let terminada =
    false;


  let temporizadorFallback =
    null;


  let temporizadorVigilancia =
    null;


  /*
    Solo existe UNA precarga secundaria.
  */

  let precargaVideo =
    null;


  let precargaIndice =
    -1;



  /* =========================================================
     CREAR PANTALLA
     ========================================================= */

  function crearPantalla() {

    if (
      document.getElementById(
        "pantalla-0"
      )
    ) {

      retirarPreloaderCuandoEstilosListos();

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
          Tengo algo muy bonito preparado para ti…
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
    VIDEO 1 SE PREPARA DESDE EL PRIMER MOMENTO
    ============================================================
    */

    const video =
      obtenerVideo();


    if (
      video
    ) {

      configurarVideo(
        video
      );


      video.src =
        VIDEOS[0];


      try {

        video.load();

      } catch (
        error
      ) {

        console.warn(
          "No se pudo iniciar la preparación del video 1.",
          error
        );

      }

    }


    /*
    Los eventos se registran ANTES de comenzar
    cualquier trabajo secundario.
    */

    prepararEventos();


    /*
    Pantalla 0 se vuelve visible únicamente
    cuando su CSS ya está listo.
    */

    retirarPreloaderCuandoEstilosListos(
      () => {

        pantalla.classList.add(
          "activa"
        );

      }
    );


    /*
    Comenzamos a vigilar el buffer.
    */

    vigilarPrecarga();

  }



  /* =========================================================
     RETIRAR PRELOADER
     ========================================================= */

  function retirarPreloaderCuandoEstilosListos(
    antesDeRetirar
  ) {

    const preloader =
      document.getElementById(
        "p0-preloader"
      );


    const enlaceCss =
      document.querySelector(
        'link[data-pantalla-cero="true"]'
      );


    let ejecutado =
      false;


    const terminar =
      () => {

        if (
          ejecutado
        ) {
          return;
        }


        ejecutado =
          true;


        requestAnimationFrame(
          () => {

            if (
              typeof antesDeRetirar ===
              "function"
            ) {

              antesDeRetirar();

            }


            requestAnimationFrame(
              () => {

                if (
                  preloader
                ) {

                  preloader.remove();

                }

              }
            );

          }
        );

      };


    /*
    Si el CSS ya está cargado,
    mostramos Pantalla 0 inmediatamente.
    */

    try {

      if (
        !enlaceCss ||
        enlaceCss.sheet
      ) {

        terminar();

        return;

      }

    } catch (
      error
    ) {

      /*
      Algunos navegadores pueden impedir
      consultar .sheet momentáneamente.
      Seguimos con el evento load.
      */

    }


    if (
      enlaceCss
    ) {

      enlaceCss.addEventListener(
        "load",
        terminar,
        {
          once: true
        }
      );

    }


    /*
    Respaldo para que nunca se quede
    bloqueada la página por un evento load.
    */

    window.setTimeout(
      terminar,
      1600
    );

  }



  /* =========================================================
     OBTENER VIDEO
     ========================================================= */

  function obtenerVideo() {

    return document.getElementById(
      "p0-video"
    );

  }



  /* =========================================================
     CONFIGURACIÓN VIDEO
     ========================================================= */

  function configurarVideo(
    video
  ) {

    if (
      !video
    ) {
      return;
    }


    video.preload =
      "auto";


    video.playsInline =
      true;


    video.controls =
      false;


    video.volume =
      1;


    video.muted =
      false;


    video.setAttribute(
      "playsinline",
      ""
    );


    video.setAttribute(
      "webkit-playsinline",
      ""
    );


    video.setAttribute(
      "disablepictureinpicture",
      ""
    );

  }



  /* =========================================================
     EVENTOS
     ========================================================= */

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

    Tablet:
    pointerup suele responder antes y de
    forma más fiable que depender solo de click.

    click queda como respaldo.
    ============================================================
    */

    const solicitarInicio =
      () => {

        if (
          iniciada
        ) {
          return;
        }


        iniciarVideos();

      };


    if (
      window.PointerEvent
    ) {

      empezar.addEventListener(
        "pointerup",
        solicitarInicio,
        {
          passive: true
        }
      );

    }


    empezar.addEventListener(
      "click",
      solicitarInicio
    );


    /*
    ============================================================
    VIDEO TERMINADO
    ============================================================
    */

    video.addEventListener(
      "ended",
      manejarFinVideo
    );


    /*
    ============================================================
    PRIMER FRAME DISPONIBLE
    ============================================================
    */

    video.addEventListener(
      "loadeddata",
      () => {

        if (
          iniciada &&
          !terminada
        ) {

          mostrarEscenarioCuandoHayaFrame();

        }


        evaluarPrecarga();

      }
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


        mostrarEscenarioCuandoHayaFrame();


        evaluarPrecarga();

      }
    );


    video.addEventListener(
      "progress",
      evaluarPrecarga
    );


    video.addEventListener(
      "canplay",
      evaluarPrecarga
    );


    video.addEventListener(
      "timeupdate",
      evaluarPrecarga
    );


    /*
    ============================================================
    SI EL VIDEO ACTUAL NECESITA RED

    Cancelamos la precarga secundaria.
    El video que Heidi está viendo tiene prioridad.
    ============================================================
    */

    video.addEventListener(
      "waiting",
      detenerPrecargaSecundaria
    );


    video.addEventListener(
      "stalled",
      detenerPrecargaSecundaria
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
          VIDEOS[
            indiceActual
          ],
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
    GIRASOL FINAL
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



  /* =========================================================
     INICIAR VIDEOS
     ========================================================= */

  function iniciarVideos() {

    if (
      iniciada
    ) {
      return;
    }


    /*
    Este valor se establece en el primer
    pointerup/click, así el segundo evento
    no ejecuta nuevamente la función.
    */

    iniciada =
      true;


    indiceActual =
      0;


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


    configurarVideo(
      video
    );


    actualizarIndicador();


    /*
    Al presionar el botón, el video actual
    tiene prioridad total.

    Si estábamos preparando video 2,
    lo detenemos momentáneamente.
    */

    detenerPrecargaSecundaria();


    /*
    ============================================================
    PLAY INMEDIATO

    Esto se ejecuta directamente dentro
    de pointerup/click.

    No hay setTimeout antes del play().
    ============================================================
    */

    let promesa;


    try {

      promesa =
        video.play();

    } catch (
      error
    ) {

      reanudar.textContent =
        "Continuar ▶";


      reanudar.classList.add(
        "visible"
      );


      return;

    }


    /*
    IMPORTANTE:

    NO mostramos inmediatamente el teléfono
    si todavía no existe un frame.

    Esto evita:

      audio funcionando
      +
      teléfono vacío
      +
      pantalla oscura

    La transición sucede cuando el navegador
    realmente tiene una imagen para pintar.
    */

    mostrarEscenarioCuandoHayaFrame();


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


            mostrarEscenarioCuandoHayaFrame();


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



  /* =========================================================
     MOSTRAR TELÉFONO CUANDO EXISTA FRAME REAL
     ========================================================= */

  function mostrarEscenarioCuandoHayaFrame() {

    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      obtenerVideo();


    if (
      !pantalla ||
      !video
    ) {

      return;

    }


    if (
      pantalla.classList.contains(
        "reproduciendo"
      )
    ) {

      return;

    }


    const mostrar =
      () => {

        if (
          terminada ||
          !document.getElementById(
            "pantalla-0"
          )
        ) {

          return;

        }


        pantalla.classList.add(
          "reproduciendo"
        );

      };


    /*
    Chrome moderno / Android:
    esperamos el primer frame que realmente
    vaya a pintar la GPU.
    */

    if (
      typeof video.requestVideoFrameCallback ===
        "function"
      &&
      !video.paused
    ) {

      video.requestVideoFrameCallback(
        () => {

          mostrar();

        }
      );


      return;

    }


    /*
    Respaldo para navegadores anteriores.
    */

    if (
      video.readyState >= 2
    ) {

      requestAnimationFrame(
        mostrar
      );


      return;

    }


    video.addEventListener(
      "loadeddata",
      mostrar,
      {
        once: true
      }
    );

  }



  /* =========================================================
     CONTINUAR DESDE INTERACCIÓN
     ========================================================= */

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


    detenerPrecargaSecundaria();


    let promesa;


    try {

      promesa =
        video.play();

    } catch (
      error
    ) {

      reanudar.classList.add(
        "visible"
      );


      return;

    }


    mostrarEscenarioCuandoHayaFrame();


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


            mostrarEscenarioCuandoHayaFrame();


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



  /* =========================================================
     BUFFER DISPONIBLE
     ========================================================= */

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

      const actual =
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
          actual >=
            inicio - 0.25
          &&
          actual <=
            fin + 0.25
        ) {

          return Math.max(
            0,
            fin - actual
          );

        }

      }


      if (
        actual <= 0.25
      ) {

        return video.buffered.end(
          0
        );

      }

    } catch (
      error
    ) {

      return 0;

    }


    return 0;

  }



  /* =========================================================
     VIGILAR PRECARGA
     ========================================================= */

  function vigilarPrecarga() {

    limpiarVigilancia();


    temporizadorVigilancia =
      window.setInterval(
        () => {

          if (
            terminada ||
            !document.getElementById(
              "pantalla-0"
            )
          ) {

            limpiarVigilancia();

            return;

          }


          evaluarPrecarga();

        },
        850
      );

  }



  function limpiarVigilancia() {

    if (
      !temporizadorVigilancia
    ) {

      return;

    }


    clearInterval(
      temporizadorVigilancia
    );


    temporizadorVigilancia =
      null;

  }



  /* =========================================================
     DECIDIR CUÁNDO PRECARGAR
     ========================================================= */

  function evaluarPrecarga() {

    if (
      terminada ||
      precargaVideo
    ) {

      return;

    }


    const siguiente =
      indiceActual + 1;


    if (
      siguiente >=
      VIDEOS.length
    ) {

      return;

    }


    const video =
      obtenerVideo();


    if (
      !video
    ) {

      return;

    }


    const buffer =
      obtenerBufferDisponible(
        video
      );


    /*
    Mientras se lee la introducción:

    VIDEO 1 tiene prioridad.
    Cuando video 1 ya está bien preparado,
    recién empezamos video 2.

    Durante reproducción:

    exactamente lo mismo.
    */

    const puedePrecargar =

      (
        !iniciada
        &&
        (
          video.readyState >= 4
          ||
          buffer >= BUFFER_SEGURO
        )
      )

      ||

      (
        iniciada
        &&
        !video.paused
        &&
        buffer >= BUFFER_SEGURO
      );


    if (
      puedePrecargar
    ) {

      precargarSiguiente(
        siguiente
      );

    }

  }



  /* =========================================================
     PRECARGAR SOLO EL SIGUIENTE VIDEO
     ========================================================= */

  function precargarSiguiente(
    indice
  ) {

    if (
      indice < 0
      ||
      indice >= VIDEOS.length
      ||
      precargaVideo
      ||
      indice === indiceActual
    ) {

      return;

    }


    precargaIndice =
      indice;


    const video =
      document.createElement(
        "video"
      );


    video.preload =
      "auto";


    video.muted =
      true;


    video.playsInline =
      true;


    video.setAttribute(
      "playsinline",
      ""
    );


    video.setAttribute(
      "aria-hidden",
      "true"
    );


    /*
    Lo dejamos técnicamente presente en el DOM,
    pero completamente invisible.

    Algunos navegadores móviles son más agresivos
    al precargar un <video> que realmente pertenece
    al documento que uno completamente desconectado.
    */

    Object.assign(
      video.style,
      {

        position:
          "fixed",

        width:
          "1px",

        height:
          "1px",

        left:
          "-10px",

        bottom:
          "-10px",

        opacity:
          "0",

        pointerEvents:
          "none"

      }
    );


    video.src =
      VIDEOS[
        indice
      ];


    document.body.appendChild(
      video
    );


    precargaVideo =
      video;


    try {

      video.load();

    } catch (
      error
    ) {

      detenerPrecargaSecundaria();

    }

  }



  /* =========================================================
     DETENER PRECARGA SECUNDARIA
     ========================================================= */

  function detenerPrecargaSecundaria() {

    if (
      !precargaVideo
    ) {

      precargaIndice =
        -1;


      return;

    }


    try {

      precargaVideo.pause();


      precargaVideo.removeAttribute(
        "src"
      );


      precargaVideo.load();

    } catch (
      error
    ) {

    }


    precargaVideo.remove();


    precargaVideo =
      null;


    precargaIndice =
      -1;

  }



  /* =========================================================
     FIN DE CADA VIDEO
     ========================================================= */

  function manejarFinVideo() {

    if (
      terminada ||
      cambiando
    ) {

      return;

    }


    /*
    VIDEO 4
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


    const siguiente =
      indiceActual + 1;


    pantalla.classList.add(
      "cambiando-video"
    );


    /*
    El navegador ya pudo ir preparando
    esta URL mediante el video oculto.
    */

    indiceActual =
      siguiente;


    actualizarIndicador();


    video.src =
      VIDEOS[
        indiceActual
      ];


    configurarVideo(
      video
    );


    try {

      video.load();

    } catch (
      error
    ) {

    }


    /*
    Ahora liberamos la precarga anterior.
    */

    detenerPrecargaSecundaria();


    /*
    Intentamos reproducir el siguiente
    inmediatamente.

    No agregamos 650 ms,
    no agregamos espera artificial.
    */

    let promesa;


    try {

      promesa =
        video.play();

    } catch (
      error
    ) {

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


    /*
    Conservamos tu transición visual,
    pero más corta internamente.
    */

    window.setTimeout(
      () => {

        pantalla.classList.remove(
          "cambiando-video"
        );


        cambiando =
          false;


        evaluarPrecarga();

      },
      360
    );


    iniciarFallback();

  }



  /* =========================================================
     FALLBACK
     ========================================================= */

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


          /*
          No ponemos pantalla de "cargando".

          Solo aparece Continuar si el navegador
          realmente bloqueó o pausó el video.
          */

          if (
            video.paused
            &&
            !video.ended
          ) {

            reanudar.textContent =
              "Continuar ▶";


            reanudar.classList.add(
              "visible"
            );

          }

        },
        2200
      );

  }



  function limpiarFallback() {

    if (
      !temporizadorFallback
    ) {

      return;

    }


    clearTimeout(
      temporizadorFallback
    );


    temporizadorFallback =
      null;

  }



  /* =========================================================
     INDICADOR
     ========================================================= */

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



  /* =========================================================
     VIDEO 4 TERMINADO
     ========================================================= */

  function mostrarCierre() {

    if (
      terminada
    ) {

      return;

    }


    terminada =
      true;


    limpiarFallback();


    limpiarVigilancia();


    detenerPrecargaSecundaria();


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
      !pantalla
    ) {

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

      } catch (
        error
      ) {

      }

    }


    /*
    Mantenemos el mismo comportamiento:
    después del último video aparece
    tu CTA del girasol.
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



  /* =========================================================
     PANTALLA 0 → PANTALLA 1
     ========================================================= */

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


    limpiarVigilancia();


    detenerPrecargaSecundaria();


    if (
      video
    ) {

      try {

        video.pause();

      } catch (
        error
      ) {

      }

    }


    pantalla.classList.add(
      "saliendo"
    );


    /*
    Este evento sigue siendo exactamente
    el que utiliza Pantalla 1.
    */

    document.dispatchEvent(
      new CustomEvent(
        "p0:completada"
      )
    );


    await esperar(
      1000
    );


    pantalla.remove();


    document.body.style.overflow =
      "";

  }



  /* =========================================================
     UTILIDAD
     ========================================================= */

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



  /* =========================================================
     INICIO
     ========================================================= */

  crearPantalla();

})();
