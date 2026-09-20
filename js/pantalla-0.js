(() => {
  "use strict";


  /*
  ============================================================
  PANTALLA 0
  ============================================================
  */


  const VIDEOS = [
    "./assets/video/pantalla-0/video-01.mp4",
    "./assets/video/pantalla-0/video-02.mp4",
    "./assets/video/pantalla-0/video-03.mp4",
    "./assets/video/pantalla-0/video-04.mp4"
  ];


  let indiceActual = 0;

  let iniciada = false;

  let cambiando = false;

  let terminada = false;


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

      <!-- FONDO -->

      <div
        class="p0-fondo"
        aria-hidden="true"
      >

        <div class="p0-luz p0-luz-1"></div>
        <div class="p0-luz p0-luz-2"></div>
        <div class="p0-luz p0-luz-3"></div>

        <div class="p0-vineta"></div>

      </div>



      <!-- INTRO -->

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



      <!-- ESCENARIO -->

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



        <!-- TELÉFONO -->

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
                preload="metadata"
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



        <!-- CTA FINAL -->

        <div
          class="p0-cierre"
          id="p0-cierre"
        >

          <!-- Flecha completa, sin cortes -->

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

              <!-- GIRASOL -->

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

                  <!-- pétalos traseros -->

                  ${Array.from(
                    { length: 18 },
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


                  <!-- pétalos delanteros -->

                  ${Array.from(
                    { length: 18 },
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


                  <!-- semillas -->

                  ${Array.from(
                    { length: 44 },
                    (_, i) => {

                      const a =
                        i * 137.507764;


                      const r =
                        Math.sqrt(i / 44) * 20;


                      const rad =
                        a * Math.PI / 180;


                      const x =
                        Math.cos(rad) * r;


                      const y =
                        Math.sin(rad) * r;


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



        <!-- INDICADOR -->

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

            <span class="p0-punto activo"></span>
            <span class="p0-punto"></span>
            <span class="p0-punto"></span>
            <span class="p0-punto"></span>

          </div>

        </div>

      </div>

    `;


    document.body.appendChild(
      pantalla
    );


    document.body.style.overflow =
      "hidden";


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

          setTimeout(
            () => {

              preloader.remove();

            },
            180
          );

        }

      }
    );


    prepararEventos();

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
      document.getElementById(
        "p0-video"
      );


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
      "error",
      () => {

        reanudar.textContent =
          "No pude cargar este video";


        reanudar.classList.add(
          "visible"
        );

      }
    );


    reanudar.addEventListener(
      "click",
      async () => {

        reanudar.classList.remove(
          "visible"
        );


        try {

          await video.play();

        } catch (error) {

          reanudar.classList.add(
            "visible"
          );

        }

      }
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

          video
            .play()
            .catch(
              () => {

                reanudar.classList.add(
                  "visible"
                );

              }
            );

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


  /*
  ============================================================
  COMENZAR VIDEOS
  ============================================================
  */

  async function iniciarVideos() {

    if (iniciada) {
      return;
    }


    iniciada = true;


    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      document.getElementById(
        "p0-video"
      );


    if (
      !pantalla ||
      !video
    ) {
      return;
    }


    pantalla.classList.add(
      "reproduciendo"
    );


    indiceActual = 0;


    actualizarIndicador();


    video.src =
      VIDEOS[
        indiceActual
      ];


    video.volume = 1;

    video.muted = false;

    video.load();


    await esperar(
      650
    );


    intentarReproducir();

  }


  /*
  ============================================================
  PLAY
  ============================================================
  */

  async function intentarReproducir() {

    const video =
      document.getElementById(
        "p0-video"
      );


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


    try {

      await video.play();


      reanudar.classList.remove(
        "visible"
      );

    } catch (error) {

      reanudar.textContent =
        "Continuar ▶";


      reanudar.classList.add(
        "visible"
      );

    }

  }


  /*
  ============================================================
  FIN DE VIDEO
  ============================================================
  */

  async function manejarFinVideo() {

    if (
      terminada ||
      cambiando
    ) {
      return;
    }


    /*
    Último video.
    */

    if (
      indiceActual ===
      VIDEOS.length - 1
    ) {

      mostrarCierre();

      return;

    }


    cambiando = true;


    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      document.getElementById(
        "p0-video"
      );


    if (
      !pantalla ||
      !video
    ) {
      return;
    }


    pantalla.classList.add(
      "cambiando-video"
    );


    await esperar(
      700
    );


    indiceActual++;


    actualizarIndicador();


    video.src =
      VIDEOS[
        indiceActual
      ];


    video.load();


    try {

      await video.play();

    } catch (error) {

      const reanudar =
        document.getElementById(
          "p0-reanudar"
        );


      if (reanudar) {

        reanudar.textContent =
          "Continuar ▶";


        reanudar.classList.add(
          "visible"
        );

      }

    }


    requestAnimationFrame(
      () => {

        pantalla.classList.remove(
          "cambiando-video"
        );

      }
    );


    await esperar(
      350
    );


    cambiando = false;

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


    if (numero) {

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

    if (terminada) {
      return;
    }


    terminada = true;


    const pantalla =
      document.getElementById(
        "pantalla-0"
      );


    const video =
      document.getElementById(
        "p0-video"
      );


    if (!pantalla) {
      return;
    }


    if (video) {

      video.pause();

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
      document.getElementById(
        "p0-video"
      );


    if (!pantalla) {
      return;
    }


    if (video) {

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


    pantalla.remove();


    document.body.style.overflow =
      "";

  }


  /*
  ============================================================
  UTILIDAD
  ============================================================
  */

  function esperar(ms) {

    return new Promise(
      resolve => {

        setTimeout(
          resolve,
          ms
        );

      }
    );

  }


  crearPantalla();

})();