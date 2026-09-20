(() => {
  "use strict";


  /*
  ============================================================
  PANTALLA 4
  ============================================================

  - Imagen única de la persona con flores.
  - Música 2.
  - Carta en formato carrusel.
  - X para avanzar a Pantalla 5.

  ============================================================
  */


  const RUTA_MUSICA_2 =
    "./assets/audio/musica-2.mp3";


  const RUTA_PERSONA =
    "./assets/img/pantalla-4/personaje/persona-flores.png";


  /*
  ============================================================
  TEXTO
  ============================================================
  */

  const PARRAFOS = [

    `Hoy, 21 de septiembre, quiero regalarte flores amarillas de una manera un poquito diferente. Tal vez no pueda colocarlas ahora mismo entre tus manos, pero quise construir para ti un pequeño lugar donde pudieras encontrarlas, aunque fuese detrás de una pantalla. Cada detalle, cada flor y cada parte de este pequeño regalo virtual llevó tiempo, esfuerzo y, sobre todo, muchísimo cariño, porque quería hacer algo que naciera de mí y que estuviera pensado únicamente para ti.`,


    `Para mí, cada una de estas flores representa un poquito de esa luz que tienes, incluso en aquellos días en los que tú misma no logras verla. Admiro profundamente tu valentía, no porque nunca tengas miedo, porque nunca te canses o porque todo te resulte sencillo, sino porque incluso cuando la vida pesa demasiado, sigues intentando avanzar. He visto tu forma de luchar, de caer y volver a levantarte, y quizá tú no siempre seas consciente de todo el potencial que tienes, pero yo sí puedo verlo.`,


    `Quiero que estas flores amarillas también te recuerden que no tienes que demostrarle nada a nadie para ser extraordinaria. Ya lo eres por todo lo que llevas dentro, por tus sueños, por tu forma de sentir, por tu corazón y por esa convicción que aparece una y otra vez cuando decides no rendirte. Yo siempre voy a querer verte creciendo, alcanzando aquello que deseas y descubriendo todo lo que eres capaz de conseguir.`,


    `Y también quiero agradecerte, porque mientras yo admiraba tu fuerza, muchas veces fuiste tú quien me dio fuerzas a mí. Llegaste a mi vida en momentos en los que necesitaba una mano, una palabra o simplemente una razón para volver a mirar hacia adelante. Quizá nunca pueda explicarte completamente cuánto me ayudaste, pero una parte muy bonita de la persona que soy hoy también existe porque tú estuviste ahí.`,


    `Por eso quise esforzarme en hacerte este pequeño detalle. Puede que sean flores digitales, que no tengan un tallo que puedas sostener ni pétalos que puedas tocar, pero detrás de cada una hay horas, intentos, ideas y muchísimo amor. Quería que, de alguna manera, pudieras sentir que mientras iba construyendo todo esto, en cada pequeño detalle estaba pensando en ti, en tu sonrisa y en lo mucho que significas para mí.`,


    `Así que si algún día dudas de ti, recuerda estas flores. Para mí eres mi admiración, mi maravilla y una de las personas más especiales que la vida pudo poner en mi camino. Y mientras tú sigas escribiendo tu propia historia, con sus capítulos bonitos, difíciles, inesperados y maravillosos, yo quiero estar a tu lado, apoyándote y recordándote siempre lo increíble que eres.`,


    `Te amo mucho. ❤️`

  ];


  /*
  ============================================================
  ESTADO
  ============================================================
  */

  let pantallaCreada = false;

  let pantallaAbierta = false;

  let indiceActual = 0;

  let cambiandoPagina = false;

  let pantalla5Preparada = false;


  /*
  ============================================================
  CREAR PANTALLA 4
  ============================================================
  */

  function crearPantalla() {

    if (pantallaCreada) {
      return;
    }


    const recorrido =
      document.getElementById(
        "recorrido"
      );


    if (!recorrido) {
      return;
    }


    const pantalla =
      document.createElement(
        "section"
      );


    pantalla.id =
      "pantalla-4";


    pantalla.className =
      "pantalla-cuatro";


    pantalla.setAttribute(
      "aria-hidden",
      "true"
    );


    pantalla.innerHTML = `

      <!-- ===============================================
           CIELO
           =============================================== -->

      <div
        class="p4-cielo"
        aria-hidden="true"
      >

        <div class="p4-sol"></div>

        <div class="p4-nube p4-nube-1"></div>
        <div class="p4-nube p4-nube-2"></div>
        <div class="p4-nube p4-nube-3"></div>
        <div class="p4-nube p4-nube-4"></div>
        <div class="p4-nube p4-nube-5"></div>


        <svg
          class="p4-brisa"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >

          <path
            d="
              M-100 220
              C180 125
              350 300
              620 205
              S960 180
              1210 235
            "
          ></path>


          <path
            d="
              M760 350
              C1010 260
              1230 430
              1710 280
            "
          ></path>


          <path
            d="
              M-100 520
              C180 430
              420 600
              730 490
            "
          ></path>


          <path
            d="
              M560 690
              C850 600
              1130 760
              1640 640
            "
          ></path>

        </svg>

      </div>



      <!-- ===============================================
           COLINAS
           =============================================== -->

      <div
        class="p4-colinas"
        aria-hidden="true"
      >

        <div class="p4-colina p4-colina-1"></div>
        <div class="p4-colina p4-colina-2"></div>
        <div class="p4-colina p4-colina-3"></div>
        <div class="p4-colina p4-colina-4"></div>

      </div>



      <!-- ===============================================
           VALLE
           =============================================== -->

      <div
        class="p4-valle"
        aria-hidden="true"
      ></div>



      <!-- ===============================================
           PERSONA CON FLORES
           =============================================== -->

      <div
        class="p4-personaje"
        id="p4-personaje"
        aria-hidden="true"
      >

        <div
          class="p4-personaje-sombra"
        ></div>


        <div
          class="p4-personaje-movimiento"
        >

          <img
            class="p4-personaje-img"
            src="${RUTA_PERSONA}"
            alt=""
            draggable="false"
          >

        </div>

      </div>



      <!-- ===============================================
           CARTA
           =============================================== -->

      <aside
        class="p4-carta"
        id="p4-carta"
        role="dialog"
        aria-labelledby="p4-titulo"
      >

        <div
          class="p4-carta-marco"
          aria-hidden="true"
        ></div>



        <!-- =============================================
             X
             ============================================= -->

        <button
          class="p4-cerrar"
          id="p4-cerrar"
          type="button"
          aria-label="Cerrar carta y continuar"
        >
          ✕
        </button>



        <span
          class="p4-carta-flor"
          aria-hidden="true"
        >
          🌻
        </span>


        <p
          class="p4-carta-sobre"
        >
          Para ti
        </p>


        <h2
          class="p4-titulo"
          id="p4-titulo"
        >
          Mi Heidy ❤️
        </h2>



        <div
          class="p4-texto-contenedor"
        >

          <p
            class="p4-texto"
            id="p4-texto"
            aria-live="polite"
          ></p>

        </div>



        <!-- =============================================
             CONTROLES
             ============================================= -->

        <div
          class="p4-controles"
        >

          <button
            class="
              p4-boton
              p4-boton-anterior
            "
            id="p4-anterior"
            type="button"
            aria-label="Ver párrafo anterior"
          >

            <span aria-hidden="true">
              ←
            </span>

            <span>
              Anterior
            </span>

          </button>



          <div
            class="p4-contador"
            id="p4-contador"
            aria-hidden="true"
          >
            1 / ${PARRAFOS.length}
          </div>



          <button
            class="
              p4-boton
              p4-boton-siguiente
            "
            id="p4-siguiente"
            type="button"
            aria-label="Ver siguiente párrafo"
          >

            <span>
              Siguiente
            </span>

            <span aria-hidden="true">
              →
            </span>

          </button>

        </div>



        <!-- =============================================
             INDICADORES
             ============================================= -->

        <div
          class="p4-progreso"
          id="p4-progreso"
          aria-label="Progreso de la carta"
        >

          ${PARRAFOS.map(
            (_, indice) => `

              <button
                class="
                  p4-progreso-punto
                  ${
                    indice === 0
                      ? "activo"
                      : ""
                  }
                "
                type="button"
                data-indice="${indice}"
                aria-label="Ir al texto ${indice + 1}"
              ></button>

            `
          ).join("")}

        </div>

      </aside>

    `;


    recorrido.appendChild(
      pantalla
    );


    pantallaCreada = true;


    prepararCarrusel();

    prepararPantalla5();


    const cerrar =
      document.getElementById(
        "p4-cerrar"
      );


    if (cerrar) {

      cerrar.addEventListener(
        "click",
        abrirPantalla5
      );

    }

  }


  /*
  ============================================================
  PREPARAR PANTALLA 5
  ============================================================
  */

  function prepararPantalla5() {

    if (pantalla5Preparada) {
      return;
    }


    pantalla5Preparada = true;


    /*
    ------------------------------------------------------------
    CSS
    ------------------------------------------------------------
    */

    if (
      !document.querySelector(
        'link[data-pantalla-5-css]'
      )
    ) {

      const link =
        document.createElement(
          "link"
        );


      link.rel =
        "stylesheet";


      link.href =
        "./css/pantalla-5.css";


      link.dataset.pantalla5Css =
        "true";


      document.head.appendChild(
        link
      );

    }


    /*
    ------------------------------------------------------------
    JS
    ------------------------------------------------------------
    */

    if (
      !document.querySelector(
        'script[data-pantalla-5-js]'
      )
    ) {

      const script =
        document.createElement(
          "script"
        );


      script.src =
        "./js/pantalla-5.js";


      script.defer =
        true;


      script.dataset.pantalla5Js =
        "true";


      document.body.appendChild(
        script
      );

    }

  }


  /*
  ============================================================
  ABRIR PANTALLA 5
  ============================================================
  */

  function abrirPantalla5() {

    if (
      window.ProyectoHPantalla5 &&
      typeof window.ProyectoHPantalla5.abrir ===
        "function"
    ) {

      window.ProyectoHPantalla5.abrir();

      return;

    }


    prepararPantalla5();


    const boton =
      document.getElementById(
        "p4-cerrar"
      );


    if (boton) {
      boton.disabled = true;
    }


    let intentos = 0;


    const espera =
      setInterval(() => {

        intentos++;


        if (
          window.ProyectoHPantalla5 &&
          typeof window.ProyectoHPantalla5.abrir ===
            "function"
        ) {

          clearInterval(
            espera
          );


          if (boton) {
            boton.disabled = false;
          }


          window.ProyectoHPantalla5.abrir();

          return;

        }


        if (intentos >= 50) {

          clearInterval(
            espera
          );


          if (boton) {
            boton.disabled = false;
          }

        }

      }, 100);

  }


  /*
  ============================================================
  ABRIR PANTALLA 4
  ============================================================
  */

  function abrir() {

    if (pantallaAbierta) {
      return;
    }


    crearPantalla();


    const pantalla4 =
      document.getElementById(
        "pantalla-4"
      );


    const pantalla3 =
      document.getElementById(
        "pantalla-3"
      );


    if (!pantalla4) {
      return;
    }


    pantallaAbierta =
      true;


    activarMusica2();


    if (pantalla3) {

      pantalla3.classList.add(
        "p3-saliendo-p4"
      );

    }


    pantalla4.classList.add(
      "activa"
    );


    pantalla4.setAttribute(
      "aria-hidden",
      "false"
    );


    setTimeout(() => {

      pantalla4.classList.add(
        "mostrar-personaje"
      );

    }, 180);


    setTimeout(() => {

      if (!pantalla3) {
        return;
      }


      pantalla3.classList.remove(
        "activa",
        "mostrar-personaje",
        "mostrar-pergamino",
        "mostrar-boton",
        "p3-saliendo-p4"
      );


      pantalla3.setAttribute(
        "aria-hidden",
        "true"
      );

    }, 760);


    indiceActual =
      0;


    setTimeout(() => {

      mostrarPagina(
        0,
        false
      );

    }, 700);

  }


  /*
  ============================================================
  MÚSICA 2
  ============================================================
  */

  function activarMusica2() {

    const audio =
      document.getElementById(
        "musica-fondo"
      );


    if (!audio) {
      return;
    }


    try {

      audio.pause();

    } catch (error) {}


    audio.src =
      RUTA_MUSICA_2;


    audio.loop =
      true;


    audio.volume =
      0;


    audio.load();


    const intento =
      audio.play();


    if (
      intento &&
      typeof intento.then ===
        "function"
    ) {

      intento
        .then(() => {

          animarVolumen(
            audio,
            0.24,
            1600
          );

        })
        .catch(() => {});

    }

  }


  /*
  ============================================================
  FADE DE VOLUMEN
  ============================================================
  */

  function animarVolumen(
    audio,
    destino,
    duracion
  ) {

    const inicio =
      performance.now();


    const inicial =
      audio.volume;


    function animar(tiempo) {

      const progreso =
        Math.min(
          (
            tiempo -
            inicio
          ) /
          duracion,
          1
        );


      audio.volume =
        inicial +
        (
          destino -
          inicial
        ) *
        progreso;


      if (progreso < 1) {

        requestAnimationFrame(
          animar
        );

      }

    }


    requestAnimationFrame(
      animar
    );

  }


  /*
  ============================================================
  CARRUSEL
  ============================================================
  */

  function prepararCarrusel() {

    const anterior =
      document.getElementById(
        "p4-anterior"
      );


    const siguiente =
      document.getElementById(
        "p4-siguiente"
      );


    const puntos =
      document.querySelectorAll(
        ".p4-progreso-punto"
      );


    if (
      !anterior ||
      !siguiente
    ) {
      return;
    }


    anterior.addEventListener(
      "click",
      () => {

        if (
          indiceActual <= 0 ||
          cambiandoPagina
        ) {
          return;
        }


        mostrarPagina(
          indiceActual - 1
        );

      }
    );


    siguiente.addEventListener(
      "click",
      () => {

        if (
          indiceActual >=
            PARRAFOS.length - 1 ||
          cambiandoPagina
        ) {
          return;
        }


        mostrarPagina(
          indiceActual + 1
        );

      }
    );


    puntos.forEach(
      punto => {

        punto.addEventListener(
          "click",
          () => {

            if (cambiandoPagina) {
              return;
            }


            const nuevoIndice =
              Number(
                punto.dataset.indice
              );


            if (
              Number.isNaN(
                nuevoIndice
              )
            ) {
              return;
            }


            mostrarPagina(
              nuevoIndice
            );

          }
        );

      }
    );


    actualizarControles();

  }


  /*
  ============================================================
  TECLADO
  ============================================================
  */

  document.addEventListener(
    "keydown",
    event => {

      const pantalla =
        document.getElementById(
          "pantalla-4"
        );


      if (
        !pantalla ||
        !pantalla.classList.contains(
          "activa"
        )
      ) {
        return;
      }


      if (
        event.key ===
        "ArrowRight"
      ) {

        const siguiente =
          document.getElementById(
            "p4-siguiente"
          );


        if (siguiente) {
          siguiente.click();
        }

      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        const anterior =
          document.getElementById(
            "p4-anterior"
          );


        if (anterior) {
          anterior.click();
        }

      }

    }
  );


  /*
  ============================================================
  MOSTRAR PÁGINA
  ============================================================
  */

  function mostrarPagina(
    nuevoIndice,
    animar = true
  ) {

    if (
      nuevoIndice < 0 ||
      nuevoIndice >=
        PARRAFOS.length
    ) {
      return;
    }


    const carta =
      document.getElementById(
        "p4-carta"
      );


    const texto =
      document.getElementById(
        "p4-texto"
      );


    if (
      !carta ||
      !texto
    ) {
      return;
    }


    if (!animar) {

      indiceActual =
        nuevoIndice;


      texto.textContent =
        PARRAFOS[
          indiceActual
        ];


      actualizarControles();

      actualizarEstiloFinal();

      return;

    }


    cambiandoPagina =
      true;


    carta.classList.add(
      "cambiando"
    );


    setTimeout(() => {

      indiceActual =
        nuevoIndice;


      texto.textContent =
        PARRAFOS[
          indiceActual
        ];


      actualizarControles();

      actualizarEstiloFinal();


      carta.classList.remove(
        "cambiando"
      );


      setTimeout(() => {

        cambiandoPagina =
          false;

      }, 380);

    }, 320);

  }


  /*
  ============================================================
  CONTROLES
  ============================================================
  */

  function actualizarControles() {

    const anterior =
      document.getElementById(
        "p4-anterior"
      );


    const siguiente =
      document.getElementById(
        "p4-siguiente"
      );


    const contador =
      document.getElementById(
        "p4-contador"
      );


    const puntos =
      document.querySelectorAll(
        ".p4-progreso-punto"
      );


    if (anterior) {

      anterior.disabled =
        indiceActual === 0;

    }


    if (siguiente) {

      const ultimo =
        indiceActual ===
        PARRAFOS.length - 1;


      siguiente.disabled =
        ultimo;


      siguiente.innerHTML =
        ultimo
          ? `
              <span>Fin</span>
              <span aria-hidden="true">❤️</span>
            `
          : `
              <span>Siguiente</span>
              <span aria-hidden="true">→</span>
            `;

    }


    if (contador) {

      contador.textContent =
        `${indiceActual + 1} / ${PARRAFOS.length}`;

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


        punto.classList.toggle(
          "completado",
          indice <
            indiceActual
        );

      }
    );

  }


  /*
  ============================================================
  ÚLTIMO PÁRRAFO
  ============================================================
  */

  function actualizarEstiloFinal() {

    const carta =
      document.getElementById(
        "p4-carta"
      );


    if (!carta) {
      return;
    }


    carta.classList.toggle(
      "ultimo-parrafo",
      indiceActual ===
        PARRAFOS.length - 1
    );

  }


  /*
  ============================================================
  API
  ============================================================
  */

  window.ProyectoHPantalla4 = {
    abrir
  };


  document.dispatchEvent(
    new CustomEvent(
      "p4:lista"
    )
  );

})();