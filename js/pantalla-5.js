(() => {
  "use strict";


  /*
  ============================================================
  PANTALLA 5
  ============================================================

  SECUENCIA:

  1. Aparece imagen.
  2. Aparece título.
  3. Pausa de lectura.
  4. Frases una por una desde el lado izquierdo.
  5. Cada frase permanece suficiente tiempo.
  6. Al terminar:
     - aparecen TODAS las frases,
     - cuatro a la izquierda,
     - cuatro a la derecha.
  7. Pausa.
  8. Gran cierre:
     - fondo se desenfoca,
     - frases pierden protagonismo,
     - imagen se mantiene nítida,
     - imagen crece suavemente,
     - aparece "Te amo, mi Heidy ❤️" arriba,
     - aparece contador abajo a la derecha,
     - solamente días, horas y minutos,
     - aparece despedida.

  ============================================================
  */


  const RUTA_MUSICA_3 =
    "./assets/audio/musica-3.mp3";


  const RUTA_IMAGEN =
    "./assets/img/pantalla-5/imagen-central.png";


  /*
  ============================================================
  FRASES
  ============================================================
  */

  const FRASES = [

    {
      texto:
        "Nunca dejaría a mi hermosa chica. Tenemos un baile pendiente.",

      personaje:
        "Steve Rogers",

      heroe:
        "Capitán América"
    },


    {
      texto:
        "Tú eres mi camino, y siempre serás mi camino.",

      personaje:
        "Peter Parker",

      heroe:
        "Spider-Man"
    },


    {
      texto:
        "Te amo. Te amo en todos los universos.",

      personaje:
        "Stephen Strange",

      heroe:
        "Doctor Strange"
    },


    {
      texto:
        "Solo te siento a ti. Eres mi tristeza y mi esperanza, pero, sobre todo, eres mi amor.",

      personaje:
        "Vision",

      heroe:
        "WandaVision"
    },


    {
      texto:
        "Te amo tres millones.",

      personaje:
        "Tony Stark",

      heroe:
        "Iron Man"
    },


    {
      texto:
        "No quiero un trono. Solo quiero que estés bien.",

      personaje:
        "Loki Laufeyson",

      heroe:
        "Loki"
    },


    {
      texto:
        "Tú me volviste digno.",

      personaje:
        "Thor Odinson",

      heroe:
        "Thor"
    },


    {
      texto:
        "Tus locuras van con mis locuras.",

      personaje:
        "Wade Wilson",

      heroe:
        "Deadpool"
    }

  ];


  /*
  ============================================================
  TIEMPOS
  ============================================================

  Los tiempos son intencionalmente más lentos
  para que todo pueda leerse sin presión.
  ============================================================
  */


  /*
  Imagen.
  */

  const RETRASO_IMAGEN =
    300;


  /*
  Después entra el título.
  */

  const RETRASO_TITULO =
    1550;


  /*
  Esperamos después del título
  antes de comenzar las frases.
  */

  const ESPERA_DESPUES_TITULO =
    4300;


  /*
  Cada frase permanece visible.
  */

  const DURACION_FRASE =
    4800;


  /*
  Tiempo para retirar una frase.
  */

  const DURACION_SALIDA =
    750;


  /*
  Pausa pequeña entre frases.
  */

  const PAUSA_ENTRE_FRASES =
    320;


  /*
  Al terminar la frase 8.
  */

  const PAUSA_ANTES_RESUMEN =
    1200;


  /*
  Las ocho frases juntas permanecen
  unos segundos.
  */

  const DURACION_RESUMEN =
    5200;


  /*
  Pequeña pausa antes del final.
  */

  const PAUSA_ANTES_FINAL =
    900;


  /*
  ============================================================
  ESTADO
  ============================================================
  */

  let pantallaCreada =
    false;


  let pantallaAbierta =
    false;


  let secuenciaIniciada =
    false;


  let intervaloContador =
    null;


  /*
  ============================================================
  CREAR PANTALLA
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
      "pantalla-5";


    pantalla.className =
      "pantalla-cinco";


    pantalla.setAttribute(
      "aria-hidden",
      "true"
    );


    pantalla.innerHTML = `

      <!-- ===============================================
           FONDO
           =============================================== -->

      <div
        class="p5-fondo"
        aria-hidden="true"
      >

        <div
          class="
            p5-luz
            p5-luz-1
          "
        ></div>


        <div
          class="
            p5-luz
            p5-luz-2
          "
        ></div>


        <div
          class="
            p5-luz
            p5-luz-3
          "
        ></div>


        <div
          class="p5-vineta"
        ></div>

      </div>



      <!-- ===============================================
           TÍTULO
           =============================================== -->

      <header
        class="p5-encabezado"
      >

        <p
          class="p5-sobretitulo"
        >
          Hay tantas formas de decirte lo especial que eres
        </p>


        <h2
          class="p5-titulo"
        >
          Te admiro más de lo que imaginas
        </h2>


        <p
          class="p5-subtitulo"
        >
          Eres maravillosa. Te amo con toda mi alma.
        </p>

      </header>



      <!-- ===============================================
           IMAGEN PRINCIPAL
           =============================================== -->

      <div
        class="p5-imagen-contenedor"
        id="p5-imagen-contenedor"
      >

        <div
          class="p5-imagen-halo"
          aria-hidden="true"
        ></div>


        <img
          class="p5-imagen"
          src="${RUTA_IMAGEN}"
          alt=""
          draggable="false"
        >

      </div>



      <!-- ===============================================
           FRASE INDIVIDUAL
           =============================================== -->

      <div
        class="p5-frase-individual"
        id="p5-frase-individual"
      >

        <p
          class="p5-frase-texto"
          id="p5-frase-texto"
        ></p>


        <div
          class="p5-frase-linea"
        ></div>


        <p
          class="p5-frase-firma"
        >

          <span
            id="p5-personaje"
          ></span>


          <span
            aria-hidden="true"
          >
            ·
          </span>


          <strong
            id="p5-heroe"
          ></strong>

        </p>

      </div>



      <!-- ===============================================
           TODAS LAS FRASES
           =============================================== -->

      <div
        class="p5-resumen-frases"
        id="p5-resumen-frases"
        aria-hidden="true"
      >

        <!-- IZQUIERDA -->

        <div
          class="
            p5-resumen-columna
            p5-resumen-izquierda
          "
        >

          ${FRASES.slice(0,4).map(
            frase => `

              <article
                class="p5-resumen-item"
              >

                <p
                  class="p5-resumen-texto"
                >
                  “${frase.texto}”
                </p>


                <p
                  class="p5-resumen-firma"
                >
                  ${frase.personaje}
                  <span>·</span>
                  <strong>
                    ${frase.heroe}
                  </strong>
                </p>

              </article>

            `
          ).join("")}

        </div>



        <!-- DERECHA -->

        <div
          class="
            p5-resumen-columna
            p5-resumen-derecha
          "
        >

          ${FRASES.slice(4,8).map(
            frase => `

              <article
                class="p5-resumen-item"
              >

                <p
                  class="p5-resumen-texto"
                >
                  “${frase.texto}”
                </p>


                <p
                  class="p5-resumen-firma"
                >
                  ${frase.personaje}
                  <span>·</span>
                  <strong>
                    ${frase.heroe}
                  </strong>
                </p>

              </article>

            `
          ).join("")}

        </div>

      </div>



      <!-- ===============================================
           FINAL
           =============================================== -->

      <div
        class="p5-final"
        id="p5-final"
      >

        <div
          class="p5-final-resplandor"
          aria-hidden="true"
        ></div>



        <!-- =============================================
             MENSAJE FINAL
             ============================================= -->

        <h3
          class="p5-mensaje-final"
        >
          Te amo, mi Heidy
          <span>❤️</span>
        </h3>



        <!-- =============================================
             CONTADOR
             ============================================= -->

        <div
          class="p5-contador-bloque"
        >

          <p
            class="p5-contador-titulo"
          >
            Nuestro próximo capítulo comienza en
          </p>


          <div
            class="p5-contador"
            aria-label="Cuenta regresiva al 30 de septiembre"
          >


            <!-- DÍAS -->

            <div
              class="p5-tiempo"
            >

              <strong
                id="p5-dias"
              >
                00
              </strong>


              <span>
                DÍAS
              </span>

            </div>



            <span
              class="p5-separador"
              aria-hidden="true"
            >
              :
            </span>



            <!-- HORAS -->

            <div
              class="p5-tiempo"
            >

              <strong
                id="p5-horas"
              >
                00
              </strong>


              <span>
                HORAS
              </span>

            </div>



            <span
              class="p5-separador"
              aria-hidden="true"
            >
              :
            </span>



            <!-- MINUTOS -->

            <div
              class="p5-tiempo"
            >

              <strong
                id="p5-minutos"
              >
                00
              </strong>


              <span>
                MIN
              </span>

            </div>

          </div>


          <p
            class="p5-fecha-meta"
          >
            30 · SEPTIEMBRE
          </p>


          <p
            class="p5-despedida"
          >
            Espero que te haya gustado mucho ❤️
          </p>

        </div>

      </div>

    `;


    recorrido.appendChild(
      pantalla
    );


    pantallaCreada =
      true;

  }


  /*
  ============================================================
  ABRIR PANTALLA
  ============================================================
  */

  function abrir() {

    if (pantallaAbierta) {
      return;
    }


    crearPantalla();


    const pantalla5 =
      document.getElementById(
        "pantalla-5"
      );


    const pantalla4 =
      document.getElementById(
        "pantalla-4"
      );


    if (!pantalla5) {
      return;
    }


    pantallaAbierta =
      true;


    /*
    ------------------------------------------------------------
    MÚSICA.
    ------------------------------------------------------------
    */

    activarMusica3();


    /*
    ------------------------------------------------------------
    Pantalla 4 sale.
    ------------------------------------------------------------
    */

    if (pantalla4) {

      pantalla4.classList.add(
        "p4-saliendo-p5"
      );

    }


    /*
    ------------------------------------------------------------
    Pantalla 5 entra.
    ------------------------------------------------------------
    */

    pantalla5.classList.add(
      "activa"
    );


    pantalla5.setAttribute(
      "aria-hidden",
      "false"
    );


    /*
    ------------------------------------------------------------
    Primero la imagen.
    ------------------------------------------------------------
    */

    setTimeout(() => {

      pantalla5.classList.add(
        "mostrar-imagen"
      );

    }, RETRASO_IMAGEN);


    /*
    ------------------------------------------------------------
    Después el título.
    ------------------------------------------------------------
    */

    setTimeout(() => {

      pantalla5.classList.add(
        "mostrar-titulo"
      );

    }, RETRASO_TITULO);


    /*
    ------------------------------------------------------------
    Retiramos Pantalla 4.
    ------------------------------------------------------------
    */

    setTimeout(() => {

      if (!pantalla4) {
        return;
      }


      pantalla4.classList.remove(
        "activa",
        "mostrar-personaje",
        "p4-saliendo-p5"
      );


      pantalla4.setAttribute(
        "aria-hidden",
        "true"
      );

    }, 950);


    /*
    ------------------------------------------------------------
    Frases.

    Esperamos después de que el título
    ya apareció.
    ------------------------------------------------------------
    */

    if (!secuenciaIniciada) {

      secuenciaIniciada =
        true;


      const inicioFrases =
        RETRASO_TITULO +
        ESPERA_DESPUES_TITULO;


      setTimeout(
        iniciarSecuencia,
        inicioFrases
      );

    }

  }


  /*
  ============================================================
  MÚSICA 3
  ============================================================
  */

  function activarMusica3() {

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
      RUTA_MUSICA_3;


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
            0.26,
            1900
          );

        })
        .catch(() => {});

    }

  }


  /*
  ============================================================
  FADE DE AUDIO
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
  SECUENCIA DE FRASES
  ============================================================
  */

  async function iniciarSecuencia() {

    const frase =
      document.getElementById(
        "p5-frase-individual"
      );


    const texto =
      document.getElementById(
        "p5-frase-texto"
      );


    const personaje =
      document.getElementById(
        "p5-personaje"
      );


    const heroe =
      document.getElementById(
        "p5-heroe"
      );


    if (
      !frase ||
      !texto ||
      !personaje ||
      !heroe
    ) {
      return;
    }


    /*
    ------------------------------------------------------------
    Una frase a la vez.
    ------------------------------------------------------------
    */

    for (
      let indice = 0;
      indice < FRASES.length;
      indice++
    ) {

      const actual =
        FRASES[indice];


      texto.textContent =
        `“${actual.texto}”`;


      personaje.textContent =
        actual.personaje;


      heroe.textContent =
        actual.heroe;


      /*
      ----------------------------------------------------------
      Entrada desde la izquierda.
      ----------------------------------------------------------
      */

      frase.classList.remove(
        "saliendo"
      );


      void frase.offsetWidth;


      frase.classList.add(
        "visible"
      );


      /*
      ----------------------------------------------------------
      Tiempo suficiente para leer.
      ----------------------------------------------------------
      */

      await esperar(
        DURACION_FRASE
      );


      /*
      ----------------------------------------------------------
      Salida.
      ----------------------------------------------------------
      */

      frase.classList.remove(
        "visible"
      );


      frase.classList.add(
        "saliendo"
      );


      await esperar(
        DURACION_SALIDA
      );


      frase.classList.remove(
        "saliendo"
      );


      await esperar(
        PAUSA_ENTRE_FRASES
      );

    }


    /*
    ------------------------------------------------------------
    Terminó la última.
    ------------------------------------------------------------
    */

    await esperar(
      PAUSA_ANTES_RESUMEN
    );


    mostrarTodasLasFrases();

  }


  /*
  ============================================================
  MOSTRAR LAS OCHO FRASES
  ============================================================
  */

  async function mostrarTodasLasFrases() {

    const pantalla =
      document.getElementById(
        "pantalla-5"
      );


    const resumen =
      document.getElementById(
        "p5-resumen-frases"
      );


    if (
      !pantalla ||
      !resumen
    ) {
      return;
    }


    resumen.setAttribute(
      "aria-hidden",
      "false"
    );


    pantalla.classList.add(
      "resumen-activo"
    );


    /*
    ------------------------------------------------------------
    Mantener composición completa.
    ------------------------------------------------------------
    */

    await esperar(
      DURACION_RESUMEN
    );


    /*
    ------------------------------------------------------------
    Pausa antes del gran final.
    ------------------------------------------------------------
    */

    await esperar(
      PAUSA_ANTES_FINAL
    );


    iniciarFinal();

  }


  /*
  ============================================================
  FINAL
  ============================================================
  */

  function iniciarFinal() {

    const pantalla =
      document.getElementById(
        "pantalla-5"
      );


    if (!pantalla) {
      return;
    }


    /*
    ------------------------------------------------------------
    Todo el efecto final depende
    de esta clase.
    ------------------------------------------------------------
    */

    pantalla.classList.add(
      "final-activo"
    );


    iniciarContador();

  }


  /*
  ============================================================
  CONTADOR
  ============================================================
  */

  function iniciarContador() {

    actualizarContador();


    if (intervaloContador) {

      clearInterval(
        intervaloContador
      );

    }


    /*
    ------------------------------------------------------------
    Ya no mostramos segundos.

    Por eso no necesitamos actualizar
    la interfaz cada segundo.

    Actualizamos cada 30 segundos.
    ------------------------------------------------------------
    */

    intervaloContador =
      setInterval(
        actualizarContador,
        30000
      );

  }


  /*
  ============================================================
  ACTUALIZAR CUENTA REGRESIVA
  ============================================================
  */

  function actualizarContador() {

    const ahora =
      new Date();


    let anio =
      ahora.getFullYear();


    /*
    ------------------------------------------------------------
    Septiembre es el mes 8 en JS.

    Meta:
    30 de septiembre
    00:00:00.
    ------------------------------------------------------------
    */

    let objetivo =
      new Date(
        anio,
        8,
        30,
        0,
        0,
        0,
        0
      );


    /*
    ------------------------------------------------------------
    Si ya pasó este año,
    utilizamos el próximo.
    ------------------------------------------------------------
    */

    if (
      objetivo.getTime() <=
      ahora.getTime()
    ) {

      objetivo =
        new Date(
          anio + 1,
          8,
          30,
          0,
          0,
          0,
          0
        );

    }


    const diferencia =
      Math.max(
        0,
        objetivo.getTime() -
        ahora.getTime()
      );


    /*
    ------------------------------------------------------------
    Usamos minutos como unidad mínima.
    ------------------------------------------------------------
    */

    const totalMinutos =
      Math.floor(
        diferencia /
        60000
      );


    const dias =
      Math.floor(
        totalMinutos /
        1440
      );


    const horas =
      Math.floor(
        (
          totalMinutos %
          1440
        ) /
        60
      );


    const minutos =
      totalMinutos %
      60;


    actualizarNumero(
      "p5-dias",
      dias
    );


    actualizarNumero(
      "p5-horas",
      horas
    );


    actualizarNumero(
      "p5-minutos",
      minutos
    );

  }


  /*
  ============================================================
  ACTUALIZAR NÚMERO
  ============================================================
  */

  function actualizarNumero(
    id,
    numero
  ) {

    const elemento =
      document.getElementById(
        id
      );


    if (!elemento) {
      return;
    }


    const nuevoValor =
      String(
        numero
      ).padStart(
        2,
        "0"
      );


    if (
      elemento.textContent ===
      nuevoValor
    ) {
      return;
    }


    elemento.textContent =
      nuevoValor;


    elemento.classList.remove(
      "cambio"
    );


    void elemento.offsetWidth;


    elemento.classList.add(
      "cambio"
    );

  }


  /*
  ============================================================
  ESPERAR
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


  /*
  ============================================================
  API
  ============================================================
  */

  window.ProyectoHPantalla5 = {
    abrir
  };


  document.dispatchEvent(
    new CustomEvent(
      "p5:lista"
    )
  );

})();