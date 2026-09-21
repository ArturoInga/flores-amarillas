(() => {
  "use strict";

  const VIDEOS = [
    "./assets/video/pantalla-0/video-01.mp4",
    "./assets/video/pantalla-0/video-02.mp4",
    "./assets/video/pantalla-0/video-03.mp4",
    "./assets/video/pantalla-0/video-04.mp4"
  ];

  const BUFFER_SEGURO = 12;

  let indiceActual = 0;
  let iniciada = false;
  let cambiando = false;
  let terminada = false;
  let temporizadorFallback = null;
  let precargaIndice = null;
  let precargaVideo = null;
  const preparados = new Set();

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

      <div
        class="p0-fondo"
        aria-hidden="true"
      >

        <div class="p0-luz p0-luz-1"></div>
        <div class="p0-luz p0-luz-2"></div>
        <div class="p0-luz p0-luz-3"></div>

        <div class="p0-vineta"></div>

      </div>


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


    const video =
      obtenerVideo();


    /*
    =============================================
    PREPARAR VIDEO 1 DESDE QUE ABRE PANTALLA 0
    =============================================
    */

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

      }

    }


    prepararEventos();


    requestAnimationFrame(
      () => {

        pantalla.classList.add(
          "activa"
        );


        /*
        El preloader solo evita el parpadeo
        de Pantalla 1.

        Apenas Pantalla 0 está lista,
        se elimina.
        */

        const preloader =
          document.getElementById(
            "p0-preloader"
          );


        if (
          preloader
        ) {

          setTimeout(
            () => {

              preloader.remove();

            },
            80
          );

        }

      }
    );


    /*
    Mientras se lee la introducción
    vamos vigilando si podemos preparar
    el siguiente video.
    */

    vigilarPrecarga();

  }



  function obtenerVideo() {

    return document.getElementById(
      "p0-video"
    );

  }



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



  /* =========================================
     EVENTOS
     ========================================= */

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
    IMPORTANTE:
    el play ocurre directamente
    dentro del toque.
    */

    empezar.addEventListener(
      "click",
      iniciarVideos,
      {
        once: true
      }
    );


    video.addEventListener(
      "ended",
      manejarFinVideo
    );


    video.addEventListener(
      "playing",
      () => {

        limpiarFallback();


        reanudar.classList.remove(
          "visible"
        );


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
    Si el video ACTUAL necesita internet,
    detenemos cualquier descarga secundaria.
    */

    video.addEventListener(
      "waiting",
      detenerPrecargaSecundaria
    );


    video.addEventListener(
      "stalled",
      detenerPrecargaSecundaria
    );


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


    reanudar.addEventListener(
      "click",
      reproducirDesdeInteraccion
    );


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


    finalizar.addEventListener(
      "click",
      finalizarPantalla0,
      {
        once: true
      }
    );

  }



  /* =========================================
     INICIAR VIDEOS
     ========================================= */

  function iniciarVideos() {

    if (
      iniciada
    ) {
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
    =============================================
    CAMBIO IMPORTANTE PARA TABLET

    No esperamos transiciones.

    Primero solicitamos PLAY directamente
    desde el toque del usuario.
    =============================================
    */

    let promesaPlay;


    try {

      promesaPlay =
        video.play();

    } catch (
      error
    ) {

      reanudar.classList.add(
        "visible"
      );

    }


    /*
    Después del play hacemos aparecer
    visualmente el teléfono.
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

    } catch (
      error
    ) {

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



  /* =========================================
     BUFFER
     ========================================= */

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
        actual <=
        0.25
      ) {

        return video.buffered.end(
          0
        );

      }

    } catch (
      error
    ) {

    }


    return 0;

  }



  /* =========================================
     PRECARGA CONTROLADA
     ========================================= */

  function vigilarPrecarga() {

    const intervalo =
      setInterval(
        () => {

          if (
            terminada ||
            !document.getElementById(
              "pantalla-0"
            )
          ) {

            clearInterval(
              intervalo
            );


            return;

          }


          evaluarPrecarga();

        },
        900
      );

  }



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
      ||
      preparados.has(
        siguiente
      )
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
    ANTES DEL TOQUE:
    aprovechamos el tiempo de lectura.

    DURANTE EL VIDEO:
    solo preparamos el siguiente cuando
    el actual tiene 12 s de colchón.
    */

    const puedePrecargar =

      (
        !iniciada
        &&
        (
          video.readyState >= 3
          ||
          buffer >= 6
        )
      )

      ||

      (
        iniciada
        &&
        !video.paused
        &&
        buffer >=
          BUFFER_SEGURO
      );


    if (
      puedePrecargar
    ) {

      precargarSiguiente(
        siguiente
      );

    }

  }



  function precargarSiguiente(
    indice
  ) {

    if (
      indice >=
        VIDEOS.length
      ||
      preparados.has(
        indice
      )
      ||
      precargaVideo
    ) {

      return;

    }


    precargaIndice =
      indice;


    precargaVideo =
      document.createElement(
        "video"
      );


    precargaVideo.preload =
      "auto";


    precargaVideo.muted =
      true;


    precargaVideo.playsInline =
      true;


    precargaVideo.setAttribute(
      "playsinline",
      ""
    );


    precargaVideo.src =
      VIDEOS[
        indice
      ];


    const terminar =
      () => {

        if (
          !precargaVideo
        ) {
          return;
        }


        preparados.add(
          indice
        );


        limpiarPrecargadorSinCancelarCache();


        if (
          !iniciada
        ) {

          setTimeout(
            evaluarPrecarga,
            250
          );

        }

      };


    const comprobar =
      () => {

        if (
          !precargaVideo
        ) {
          return;
        }


        let buffer =
          0;


        try {

          if (
            precargaVideo
              .buffered
              .length
          ) {

            buffer =
              precargaVideo
                .buffered
                .end(
                  precargaVideo
                    .buffered
                    .length - 1
                );

          }

        } catch (
          error
        ) {

        }


        if (
          precargaVideo.readyState >= 4
          ||
          buffer >= BUFFER_SEGURO
        ) {

          terminar();

        }

      };


    precargaVideo.addEventListener(
      "canplaythrough",
      terminar,
      {
        once: true
      }
    );


    precargaVideo.addEventListener(
      "progress",
      comprobar
    );


    precargaVideo.addEventListener(
      "canplay",
      comprobar
    );


    try {

      precargaVideo.load();

    } catch (
      error
    ) {

      limpiarPrecargadorSinCancelarCache();

    }

  }



  function limpiarPrecargadorSinCancelarCache() {

    if (
      !precargaVideo
    ) {
      return;
    }


    /*
    No quitamos el src.

    El navegador puede conservar en caché
    lo que ya preparó.
    */

    precargaVideo =
      null;


    precargaIndice =
      null;

  }



  function detenerPrecargaSecundaria() {

    if (
      !precargaVideo
    ) {
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


    precargaVideo =
      null;


    precargaIndice =
      null;

  }



  /* =========================================
     CAMBIAR DE VIDEO
     ========================================= */

  function manejarFinVideo() {

    if (
      terminada ||
      cambiando
    ) {

      return;

    }


    if (
      indiceActual ===
      VIDEOS.length - 1
    ) {

      mostrarCierre();


      return;

    }


    cambiando =
      true;


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
      !pantalla ||
      !video ||
      !reanudar
    ) {

      cambiando =
        false;


      return;

    }


    pantalla.classList.add(
      "cambiando-video"
    );


    indiceActual++;


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
    No introducimos una espera artificial.
    Intentamos el siguiente inmediatamente.
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


    setTimeout(
      () => {

        pantalla.classList.remove(
          "cambiando-video"
        );


        cambiando =
          false;


        evaluarPrecarga();

      },
      420
    );


    iniciarFallback();

  }



  /* =========================================
     FALLBACK DE REPRODUCCIÓN
     ========================================= */

  function iniciarFallback() {

    limpiarFallback();


    temporizadorFallback =
      setTimeout(
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
          Solo aparece si el navegador
          realmente dejó el video pausado.

          No mostramos ninguna pantalla
          de "cargando".
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



  /* =========================================
     INDICADOR
     ========================================= */

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



  /* =========================================
     FINAL
     ========================================= */

  function mostrarCierre() {

    if (
      terminada
    ) {
      return;
    }


    terminada =
      true;


    limpiarFallback();


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


    setTimeout(
      () => {

        pantalla.classList.add(
          "finalizado"
        );

      },
      900
    );

  }



  /* =========================================
     PANTALLA 0 → PANTALLA 1
     ========================================= */

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



  function esperar(
    milisegundos
  ) {

    return new Promise(
      resolve => {

        setTimeout(
          resolve,
          milisegundos
        );

      }
    );

  }



  crearPantalla();

})();
