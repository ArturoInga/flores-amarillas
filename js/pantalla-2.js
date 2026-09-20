(() => {

  "use strict";


  const NS =
    "http://www.w3.org/2000/svg";


  const pantalla2 =
    document.getElementById(
      "pantalla-2"
    );


  const campo =
    document.getElementById(
      "p2-campo-girasoles"
    );


  const audio =
    document.getElementById(
      "musica-fondo"
    );


  const castillo =
    document.getElementById(
      "p2-castillo-contenedor"
    );


  if (!pantalla2 || !campo) {
    return;
  }



  const frases = [

    {
      texto:
        "¿Cómo te amo? Déjame contar las maneras.",

      referencia:
        "Elizabeth Barrett Browning — Soneto 43"
    },

    {
      texto:
        "Te amo hasta la profundidad, la anchura y la altura que mi alma puede alcanzar.",

      referencia:
        "Elizabeth Barrett Browning — Soneto 43"
    },

    {
      texto:
        "Ven a vivir conmigo y sé mi amor.",

      referencia:
        "Christopher Marlowe — The Passionate Shepherd to His Love"
    },

    {
      texto:
        "Si alguna vez dos fueron uno, entonces nosotros.",

      referencia:
        "Anne Bradstreet — To My Dear and Loving Husband"
    },

    {
      texto:
        "Mi verdadero amor tiene mi corazón, y yo tengo el suyo.",

      referencia:
        "Sir Philip Sidney — My True Love Hath My Heart"
    },

    {
      texto:
        "Te seguiré amando, amor mío, hasta que todos los mares se sequen.",

      referencia:
        "Robert Burns — A Red, Red Rose"
    },

    {
      texto:
        "No necesito la luz del sol ni de la luna si puedo tenerte a ti.",

      referencia:
        "John Donne — The Bait"
    },

    {
      texto:
        "Si nuestros dos amores son uno, y tú y yo amamos por igual, ninguno puede morir.",

      referencia:
        "John Donne — The Good-Morrow"
    },

    {
      texto:
        "Eres para mis pensamientos lo que el alimento es para la vida.",

      referencia:
        "William Shakespeare — Soneto 75"
    },

    {
      texto:
        "No desearía ninguna compañía en el mundo salvo la tuya.",

      referencia:
        "William Shakespeare — La tempestad"
    },

    {
      texto:
        "A ti amaré, y contigo quiero llevar mi vida.",

      referencia:
        "William Shakespeare"
    },

    {
      texto:
        "No amo nada en el mundo tanto como te amo a ti.",

      referencia:
        "William Shakespeare — Mucho ruido y pocas nueces"
    },

    {
      texto:
        "Te amo con tanto de mi corazón que no queda nada de él para protestar.",

      referencia:
        "William Shakespeare — Mucho ruido y pocas nueces"
    },

    {
      texto:
        "Mi amor es tan profundo como el mar. Cuanto más te doy, más tengo, porque ambos son infinitos.",

      referencia:
        "William Shakespeare — Romeo y Julieta"
    },

    {
      texto:
        "Duda de que las estrellas sean fuego, pero nunca dudes de que te amo.",

      referencia:
        "William Shakespeare — Hamlet"
    },

    {
      texto:
        "Eres más hermosa y más dulce que un día de verano.",

      referencia:
        "William Shakespeare — Soneto 18"
    },

    {
      texto:
        "Te beso con un corazón que permanece constante.",

      referencia:
        "William Shakespeare"
    },

    {
      texto:
        "Debes permitirme decirte cuánto te admiro y cuánto te amo.",

      referencia:
        "Jane Austen — Orgullo y prejuicio"
    },

    {
      texto:
        "Me atraviesas el alma. Soy mitad agonía, mitad esperanza.",

      referencia:
        "Jane Austen — Persuasión"
    },

    {
      texto:
        "Eres mi corazón, mi vida, mi único pensamiento.",

      referencia:
        "Arthur Conan Doyle — The White Company"
    },

    {
      texto:
        "Llevo tu corazón conmigo; lo llevo en mi corazón.",

      referencia:
        "E. E. Cummings — i carry your heart with me"
    },

    {
      texto:
        "Te amo sin saber cómo, ni cuándo, ni de dónde; te amo directamente, sin problemas ni orgullo.",

      referencia:
        "Pablo Neruda — Soneto XVII"
    },

    {
      texto:
        "¿Qué vale toda la belleza del mundo si tú no me besas?",

      referencia:
        "Percy Bysshe Shelley — Love’s Philosophy"
    },

    {
      texto:
        "Envejece conmigo. Lo mejor aún está por venir.",

      referencia:
        "Robert Browning — Rabbi Ben Ezra"
    }

  ];



  const flores = [

    [7, 28, 100, 5, .76],
    [16, 30, 110, 5, .78],
    [26, 27, 105, 5, .76],
    [36, 30, 108, 5, .78],
    [45, 26, 98, 5, .74],
    [55, 28, 104, 5, .75],
    [66, 29, 109, 5, .78],
    [77, 27, 102, 5, .76],

    [5, 17, 145, 7, .94],
    [14, 19, 152, 7, .95],
    [24, 16, 142, 7, .94],
    [34, 20, 150, 7, .96],
    [44, 17, 140, 7, .93],
    [56, 18, 145, 7, .94],
    [67, 20, 152, 7, .96],
    [79, 17, 143, 7, .94],

    [4, 2, 198, 9, 1],
    [15, 4, 218, 9, 1],
    [27, 1, 207, 9, 1],
    [39, 4, 221, 9, 1],
    [52, 2, 213, 9, 1],
    [65, 4, 222, 9, 1],
    [79, 1, 207, 9, 1],
    [94, 3, 202, 9, 1]

  ];



  let pergamino;
  let textoPergamino;
  let referenciaPergamino;
  let botonCerrar;
  let capaEfectos;

  let instruccion;
  let instruccionTitulo;
  let instruccionSubtitulo;
  let instruccionNumero;
  let instruccionBarra;

  let florActiva = null;

  let cerrando = false;

  let completadas = 0;

  let castilloRevelado = false;



  function crearSVG(
    nombre,
    atributos = {}
  ) {

    const elemento =
      document.createElementNS(
        NS,
        nombre
      );


    Object.entries(
      atributos
    ).forEach(
      ([clave, valor]) => {

        elemento.setAttribute(
          clave,
          valor
        );

      }
    );


    return elemento;

  }



  function crearBibliotecaGirasol() {

    const biblioteca =
      crearSVG(
        "svg",
        {
          width: "0",
          height: "0",
          "aria-hidden": "true"
        }
      );


    biblioteca.style.position =
      "absolute";


    biblioteca.style.pointerEvents =
      "none";


    const defs =
      crearSVG(
        "defs"
      );



    const dorado =
      crearSVG(
        "linearGradient",
        {
          id:
            "p2-petalo-dorado",

          x1: "0",
          y1: "-160",
          x2: "0",
          y2: "-40",

          gradientUnits:
            "userSpaceOnUse"
        }
      );


    dorado.append(

      crearSVG(
        "stop",
        {
          "stop-color":
            "#fff3a6"
        }
      ),

      crearSVG(
        "stop",
        {
          offset: ".43",
          "stop-color":
            "#ffd54e"
        }
      ),

      crearSVG(
        "stop",
        {
          offset: "1",
          "stop-color":
            "#e3a018"
        }
      )

    );



    const ambar =
      crearSVG(
        "linearGradient",
        {
          id:
            "p2-petalo-ambar",

          x1: "0",
          y1: "-160",
          x2: "0",
          y2: "-40",

          gradientUnits:
            "userSpaceOnUse"
        }
      );


    ambar.append(

      crearSVG(
        "stop",
        {
          "stop-color":
            "#ffe072"
        }
      ),

      crearSVG(
        "stop",
        {
          offset: "1",
          "stop-color":
            "#d99219"
        }
      )

    );



    const verde =
      crearSVG(
        "linearGradient",
        {
          id:
            "p2-verde",

          x1: "0",
          y1: "0",
          x2: "1",
          y2: "1"
        }
      );


    verde.append(

      crearSVG(
        "stop",
        {
          "stop-color":
            "#a6c56d"
        }
      ),

      crearSVG(
        "stop",
        {
          offset: ".5",
          "stop-color":
            "#70964c"
        }
      ),

      crearSVG(
        "stop",
        {
          offset: "1",
          "stop-color":
            "#3e6a3d"
        }
      )

    );



    const centro =
      crearSVG(
        "radialGradient",
        {
          id:
            "p2-centro",

          cx: "40%",
          cy: "35%",
          r: "70%"
        }
      );


    centro.append(

      crearSVG(
        "stop",
        {
          "stop-color":
            "#ad7440"
        }
      ),

      crearSVG(
        "stop",
        {
          offset: ".72",
          "stop-color":
            "#684227"
        }
      ),

      crearSVG(
        "stop",
        {
          offset: "1",
          "stop-color":
            "#39251f"
        }
      )

    );



    const semillas =
      crearSVG(
        "pattern",
        {
          id:
            "p2-semillas",

          width: "9",
          height: "9",

          patternUnits:
            "userSpaceOnUse",

          patternTransform:
            "rotate(32)"
        }
      );


    semillas.append(

      crearSVG(
        "ellipse",
        {
          cx: "2",
          cy: "3",
          rx: "1.6",
          ry: "2.7",
          fill: "#d1a05c"
        }
      ),

      crearSVG(
        "ellipse",
        {
          cx: "7",
          cy: "7",
          rx: "1.35",
          ry: "2.3",
          fill: "#85552d"
        }
      )

    );


    defs.append(
      dorado,
      ambar,
      verde,
      centro,
      semillas
    );



    const symbol =
      crearSVG(
        "symbol",
        {
          id:
            "p2-modelo-girasol",

          viewBox:
            "0 0 500 600"
        }
      );



    symbol.append(

      crearSVG(
        "ellipse",
        {
          cx: "250",
          cy: "568",
          rx: "100",
          ry: "17",
          fill:
            "rgba(74,82,47,.13)"
        }
      )

    );



    symbol.append(

      crearSVG(
        "path",
        {
          d:
            "M247 560 C232 462 278 333 250 184",

          fill:
            "none",

          stroke:
            "#557944",

          "stroke-width":
            "14",

          "stroke-linecap":
            "round"
        }
      ),

      crearSVG(
        "path",
        {
          d:
            "M244 557 C232 458 273 335 247 191",

          fill:
            "none",

          stroke:
            "#aec482",

          "stroke-width":
            "3",

          "stroke-linecap":
            "round"
        }
      )

    );



    symbol.append(

      crearSVG(
        "path",
        {
          d:
            "M249 420 C210 372 146 350 108 366 C130 433 199 458 249 420Z",

          fill:
            "url(#p2-verde)"
        }
      ),

      crearSVG(
        "path",
        {
          d:
            "M244 418 Q177 401 118 369 M199 401 L178 378 M178 394 L151 378 M215 410 L191 429",

          fill:
            "none",

          stroke:
            "#d4dfa0",

          "stroke-width":
            "2",

          opacity:
            ".55"
        }
      )

    );



    symbol.append(

      crearSVG(
        "path",
        {
          d:
            "M254 355 C280 307 342 286 380 302 C358 365 302 394 254 355Z",

          fill:
            "url(#p2-verde)"
        }
      ),

      crearSVG(
        "path",
        {
          d:
            "M258 354 Q321 330 371 307 M293 340 L302 314 M319 330 L334 308 M289 342 L318 356",

          fill:
            "none",

          stroke:
            "#d4dfa0",

          "stroke-width":
            "2",

          opacity:
            ".55"
        }
      )

    );



    const cabeza =
      crearSVG(
        "g",
        {
          transform:
            "translate(250 182)"
        }
      );



    for (
      let i = 0;
      i < 24;
      i++
    ) {

      const grupo =
        crearSVG(
          "g",
          {
            transform:
              `rotate(${i * 15 + 7.5})`
          }
        );


      grupo.append(

        crearSVG(
          "path",
          {
            d:
              "M0 -43 C-24 -57 -35 -91 -20 -118 Q-7 -141 -2 -151 Q28 -132 29 -109 C30 -83 21 -56 0 -43Z",

            fill:
              "url(#p2-petalo-ambar)"
          }
        )

      );


      cabeza.append(
        grupo
      );

    }



    for (
      let i = 0;
      i < 21;
      i++
    ) {

      const grupo =
        crearSVG(
          "g",
          {
            transform:
              `rotate(${i * (360 / 21)})`
          }
        );


      grupo.append(

        crearSVG(
          "path",
          {
            d:
              "M0 -43 C-24 -57 -35 -91 -20 -118 Q-7 -141 -2 -151 Q28 -132 29 -109 C30 -83 21 -56 0 -43Z",

            fill:
              "url(#p2-petalo-dorado)",

            stroke:
              "rgba(183,128,23,.18)",

            "stroke-width":
              ".8"
          }
        )

      );


      cabeza.append(
        grupo
      );

    }



    cabeza.append(

      crearSVG(
        "circle",
        {
          r: "69",
          fill:
            "#bd7d25"
        }
      ),

      crearSVG(
        "circle",
        {
          r: "64",
          fill:
            "url(#p2-centro)"
        }
      ),

      crearSVG(
        "circle",
        {
          r: "59",
          fill:
            "url(#p2-semillas)",
          opacity: ".82"
        }
      ),

      crearSVG(
        "circle",
        {
          r: "63",
          fill: "none",

          stroke:
            "#e0ac49",

          "stroke-width":
            "2",

          opacity:
            ".55"
        }
      )

    );


    symbol.append(
      cabeza
    );


    defs.append(
      symbol
    );


    biblioteca.append(
      defs
    );


    document.body.append(
      biblioteca
    );

  }



  function crearCampo() {

    const fragmento =
      document.createDocumentFragment();


    flores.forEach(
      (config, indice) => {

        const [
          x,
          y,
          tamano,
          profundidad,
          opacidad
        ] = config;


        const flor =
          document.createElement(
            "div"
          );


        flor.className =
          "p2-flor";


        flor.dataset.indice =
          String(indice);


        flor.dataset.completada =
          "false";


        flor.setAttribute(
          "role",
          "button"
        );


        flor.setAttribute(
          "tabindex",
          "0"
        );


        flor.setAttribute(
          "aria-label",
          `Abrir mensaje del girasol ${indice + 1}`
        );


        flor.style.setProperty(
          "--x",
          `${x}%`
        );


        flor.style.setProperty(
          "--y",
          `${y}%`
        );


        flor.style.setProperty(
          "--tamano",
          `${tamano}px`
        );


        flor.style.setProperty(
          "--profundidad",
          String(profundidad)
        );


        flor.style.setProperty(
          "--opacidad",
          String(opacidad)
        );


        flor.style.setProperty(
          "--rotacion",
          `${-2.5 + Math.random() * 5}deg`
        );


        flor.style.setProperty(
          "--velocidad",
          `${7.2 + Math.random() * 3}s`
        );


        flor.style.setProperty(
          "--retraso",
          `${-Math.random() * 4}s`
        );



        const svg =
          crearSVG(
            "svg",
            {
              viewBox:
                "0 0 500 600",

              "aria-hidden":
                "true"
            }
          );


        const uso =
          crearSVG(
            "use",
            {
              href:
                "#p2-modelo-girasol"
            }
          );


        svg.append(
          uso
        );


        flor.append(
          svg
        );


        fragmento.append(
          flor
        );

      }
    );


    campo.append(
      fragmento
    );

  }



  function crearInterfaz() {

    instruccion =
      document.createElement(
        "div"
      );


    instruccion.className =
      "p2-instruccion";


    instruccion.setAttribute(
      "aria-live",
      "polite"
    );


    instruccion.innerHTML = `

      <span
        class="p2-instruccion-icono"
        aria-hidden="true"
      >
        🌻
      </span>

      <span
        class="p2-instruccion-contenido"
      >

        <span
          class="p2-instruccion-titulo"
          id="p2-instruccion-titulo"
        >
          Descubre los girasoles
        </span>

        <span
          class="p2-instruccion-subtitulo"
          id="p2-instruccion-subtitulo"
        >
          Cada uno guarda algo para ti
        </span>

        <span
          class="p2-instruccion-barra"
          aria-hidden="true"
        >

          <span
            class="p2-instruccion-barra-relleno"
            id="p2-instruccion-barra"
          ></span>

        </span>

      </span>

      <span
        class="p2-instruccion-contador"
      >

        <strong
          id="p2-instruccion-numero"
        >
          0
        </strong>

        <small>
          de 24
        </small>

      </span>

    `;



    capaEfectos =
      document.createElement(
        "div"
      );


    capaEfectos.className =
      "p2-efectos";


    capaEfectos.id =
      "p2-efectos";



    pergamino =
      document.createElement(
        "div"
      );


    pergamino.className =
      "p2-pergamino";


    pergamino.id =
      "p2-pergamino";


    pergamino.setAttribute(
      "role",
      "dialog"
    );


    pergamino.setAttribute(
      "aria-modal",
      "true"
    );


    pergamino.setAttribute(
      "aria-hidden",
      "true"
    );


    pergamino.innerHTML = `

      <div
        class="p2-pergamino-marco"
        aria-hidden="true"
      ></div>

      <button
        class="p2-pergamino-cerrar"
        id="p2-pergamino-cerrar"
        type="button"
        aria-label="Cerrar mensaje"
      >
        ✕
      </button>

      <span
        class="p2-pergamino-corazon"
        aria-hidden="true"
      >
        ♥
      </span>

      <p
        class="p2-pergamino-frase"
        id="p2-pergamino-frase"
      ></p>

      <p
        class="p2-pergamino-referencia"
        id="p2-pergamino-referencia"
      ></p>

    `;


    pantalla2.append(
      instruccion,
      capaEfectos,
      pergamino
    );



    instruccionTitulo =
      document.getElementById(
        "p2-instruccion-titulo"
      );


    instruccionSubtitulo =
      document.getElementById(
        "p2-instruccion-subtitulo"
      );


    instruccionNumero =
      document.getElementById(
        "p2-instruccion-numero"
      );


    instruccionBarra =
      document.getElementById(
        "p2-instruccion-barra"
      );


    textoPergamino =
      document.getElementById(
        "p2-pergamino-frase"
      );


    referenciaPergamino =
      document.getElementById(
        "p2-pergamino-referencia"
      );


    botonCerrar =
      document.getElementById(
        "p2-pergamino-cerrar"
      );

  }



  function actualizarInstruccion() {

    instruccionNumero.textContent =
      String(completadas);


    const porcentaje =
      (
        completadas /
        flores.length
      ) *
      100;


    instruccionBarra.style.setProperty(
      "--p2-progreso",
      `${porcentaje}%`
    );


    instruccionBarra.style.width =
      `${porcentaje}%`;


    if (
      completadas ===
      flores.length
    ) {

      instruccionTitulo.textContent =
        "Los encontraste todos ✨";


      instruccionSubtitulo.textContent =
        "Ahora mira el castillo";


      instruccion.classList.add(
        "completada"
      );


      window.setTimeout(
        () => {

          instruccion.classList.add(
            "oculta"
          );

        },
        2700
      );

    }

  }



  function revelarCastillo() {

    if (
      castilloRevelado ||
      !castillo
    ) {

      return;

    }


    castilloRevelado =
      true;


    castillo.classList.add(
      "revelado"
    );


    castillo.style.opacity =
      "1";


    castillo.style.filter =
      "blur(0px) saturate(1) brightness(1) contrast(1)";


    castillo.style.transform =
      "translateX(-50%) scale(1)";


    const svgCastillo =
      castillo.querySelector(
        ".p2-castillo"
      );


    if (svgCastillo) {

      svgCastillo.style.opacity =
        "1";

    }


    document.dispatchEvent(

      new CustomEvent(
        "p2:castillo-revelado"
      )

    );

  }



  function obtenerViewport() {

    if (
      window.visualViewport
    ) {

      return {

        izquierda:
          window.visualViewport.offsetLeft,

        arriba:
          window.visualViewport.offsetTop,

        ancho:
          window.visualViewport.width,

        alto:
          window.visualViewport.height

      };

    }


    return {

      izquierda: 0,
      arriba: 0,

      ancho:
        window.innerWidth,

      alto:
        window.innerHeight

    };

  }



  function ajustarPergamino() {

    pergamino.classList.remove(
      "compacto"
    );


    const viewport =
      obtenerViewport();


    if (
      pergamino.offsetHeight >
      viewport.alto - 54

      ||

      pergamino.offsetWidth >
      viewport.ancho - 36
    ) {

      pergamino.classList.add(
        "compacto"
      );

    }

  }



  function posicionarPergamino(
    flor
  ) {

    const rect =
      flor.getBoundingClientRect();


    const viewport =
      obtenerViewport();


    const ancho =
      pergamino.offsetWidth || 400;


    const alto =
      pergamino.offsetHeight || 190;


    const margen =
      27;


    const separacion =
      20;


    const izquierda =
      viewport.izquierda;


    const arriba =
      viewport.arriba;


    const derecha =
      izquierda +
      viewport.ancho;


    const abajo =
      arriba +
      viewport.alto;


    const centroX =
      rect.left +
      rect.width / 2;


    const centroY =
      rect.top +
      rect.height / 2;


    let x =
      izquierda +
      viewport.ancho / 2;


    let y =
      arriba +
      viewport.alto / 2;



    if (
      viewport.ancho <= 720
    ) {

      x =
        izquierda +
        viewport.ancho / 2;


      y =
        arriba +
        viewport.alto * .44;

    }


    else if (
      derecha -
      rect.right >=
      ancho +
      separacion
    ) {

      x =
        rect.right +
        separacion +
        ancho / 2;


      y =
        centroY;

    }


    else if (
      rect.left -
      izquierda >=
      ancho +
      separacion
    ) {

      x =
        rect.left -
        separacion -
        ancho / 2;


      y =
        centroY;

    }


    else if (
      rect.top -
      arriba >=
      alto +
      separacion
    ) {

      x =
        centroX;


      y =
        rect.top -
        separacion -
        alto / 2;

    }


    else if (
      abajo -
      rect.bottom >=
      alto +
      separacion
    ) {

      x =
        centroX;


      y =
        rect.bottom +
        separacion +
        alto / 2;

    }



    const mitadAncho =
      ancho / 2;


    const mitadAlto =
      alto / 2;


    x =
      Math.max(
        izquierda +
        mitadAncho +
        margen,

        Math.min(
          derecha -
          mitadAncho -
          margen,

          x
        )
      );


    y =
      Math.max(
        arriba +
        mitadAlto +
        margen,

        Math.min(
          abajo -
          mitadAlto -
          margen,

          y
        )
      );


    pergamino.style.setProperty(
      "--pergamino-x",
      `${x}px`
    );


    pergamino.style.setProperty(
      "--pergamino-y",
      `${y}px`
    );

  }



  function abrirPergamino(
    flor
  ) {

    if (
      cerrando ||
      florActiva ||
      flor.dataset.completada === "true"
    ) {

      return;

    }


    const indice =
      Number(
        flor.dataset.indice
      );


    const mensaje =
      frases[indice];


    if (!mensaje) {
      return;
    }


    florActiva =
      flor;


    flor.classList.add(
      "seleccionada"
    );


    textoPergamino.textContent =
      mensaje.texto;


    referenciaPergamino.textContent =
      mensaje.referencia;


    pergamino.classList.remove(
      "cerrando"
    );


    pergamino.setAttribute(
      "aria-hidden",
      "false"
    );


    ajustarPergamino();


    posicionarPergamino(
      flor
    );


    requestAnimationFrame(
      () => {

        requestAnimationFrame(
          () => {

            pergamino.classList.add(
              "abierto"
            );


            botonCerrar.focus();

          }
        );

      }
    );

  }



  function crearPetalosDespedida(
    flor
  ) {

    const rect =
      flor.getBoundingClientRect();


    const rectPantalla =
      pantalla2.getBoundingClientRect();


    const origenX =
      rect.left -
      rectPantalla.left +
      rect.width * .5;


    const origenY =
      rect.top -
      rectPantalla.top +
      rect.height * .22;


    const cantidad =
      9;


    for (
      let i = 0;
      i < cantidad;
      i++
    ) {

      const petalo =
        document.createElement(
          "span"
        );


      petalo.className =
        "p2-petalo-despedida";


      const angulo =
        Math.PI *
        2 *
        (
          i /
          cantidad
        )
        +
        Math.random() *
        .45;


      const distancia =
        65 +
        Math.random() *
        115;


      petalo.style.setProperty(
        "--inicio-x",
        `${origenX}px`
      );


      petalo.style.setProperty(
        "--inicio-y",
        `${origenY}px`
      );


      petalo.style.setProperty(
        "--viaje-x",
        `${
          Math.cos(angulo) *
          distancia
        }px`
      );


      petalo.style.setProperty(
        "--viaje-y",
        `${
          Math.sin(angulo) *
          distancia -
          30 -
          Math.random() *
          45
        }px`
      );


      petalo.style.setProperty(
        "--giro",
        `${
          180 +
          Math.random() *
          420
        }deg`
      );


      petalo.style.setProperty(
        "--duracion",
        `${
          1.1 +
          Math.random() *
          .75
        }s`
      );


      petalo.style.setProperty(
        "--ancho",
        `${
          8 +
          Math.random() *
          6
        }px`
      );


      petalo.addEventListener(
        "animationend",
        () => {

          petalo.remove();

        },
        {
          once: true
        }
      );


      capaEfectos.append(
        petalo
      );

    }

  }



  function despedirFlor(
    flor
  ) {

    crearPetalosDespedida(
      flor
    );


    flor.classList.remove(
      "seleccionada"
    );


    flor.classList.add(
      "desapareciendo"
    );


    flor.dataset.completada =
      "true";


    flor.removeAttribute(
      "tabindex"
    );


    completadas += 1;


    actualizarInstruccion();



    document.dispatchEvent(

      new CustomEvent(
        "p2:girasol-completado",
        {

          detail: {

            completadas,

            total:
              flores.length,

            progreso:
              completadas /
              flores.length

          }

        }
      )

    );



    window.setTimeout(
      () => {

        flor.remove();

      },
      920
    );



    if (
      completadas ===
      flores.length
    ) {

      window.setTimeout(
        () => {

          revelarCastillo();


          document.dispatchEvent(

            new CustomEvent(
              "p2:bosque-completado"
            )

          );

        },
        900
      );

    }

  }



  function cerrarPergamino() {

    if (
      !florActiva ||
      cerrando
    ) {

      return;

    }


    cerrando =
      true;


    const flor =
      florActiva;


    pergamino.classList.remove(
      "abierto"
    );


    pergamino.classList.add(
      "cerrando"
    );


    pergamino.setAttribute(
      "aria-hidden",
      "true"
    );


    window.setTimeout(
      () => {

        pergamino.classList.remove(
          "cerrando"
        );


        despedirFlor(
          flor
        );


        florActiva =
          null;


        cerrando =
          false;

      },
      330
    );

  }



  campo.addEventListener(
    "click",
    event => {

      const flor =
        event.target.closest(
          ".p2-flor"
        );


      if (
        flor &&
        campo.contains(
          flor
        )
      ) {

        abrirPergamino(
          flor
        );

      }

    }
  );



  campo.addEventListener(
    "keydown",
    event => {

      if (
        event.key !== "Enter" &&
        event.key !== " "
      ) {

        return;

      }


      const flor =
        event.target.closest(
          ".p2-flor"
        );


      if (!flor) {
        return;
      }


      event.preventDefault();


      abrirPergamino(
        flor
      );

    }
  );



  function bajarMusicaPantalla2() {

    if (
      !audio ||
      audio.paused
    ) {

      return;

    }


    const desde =
      audio.volume;


    const hasta =
      .19;


    const inicio =
      performance.now();


    const duracion =
      1600;



    function animar(
      ahora
    ) {

      const t =
        Math.min(
          (
            ahora -
            inicio
          )
          /
          duracion,
          1
        );


      const suave =
        t *
        t *
        (
          3 -
          2 *
          t
        );


      audio.volume =
        desde +
        (
          hasta -
          desde
        )
        *
        suave;


      if (
        t < 1
      ) {

        requestAnimationFrame(
          animar
        );

      }

    }


    requestAnimationFrame(
      animar
    );

  }



  let pantallaActivada =
    false;


  const observador =
    new MutationObserver(
      () => {

        if (
          pantalla2.classList.contains(
            "activa"
          )
          &&
          !pantallaActivada
        ) {

          pantallaActivada =
            true;


          bajarMusicaPantalla2();

        }

      }
    );


  observador.observe(
    pantalla2,
    {
      attributes:
        true,

      attributeFilter:
        ["class"]
    }
  );



  crearBibliotecaGirasol();

  crearCampo();

  crearInterfaz();

  actualizarInstruccion();



  botonCerrar.addEventListener(
    "click",
    cerrarPergamino
  );



  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        florActiva
      ) {

        cerrarPergamino();

      }

    }
  );



  function recolocarPergamino() {

    if (
      florActiva &&
      pergamino.classList.contains(
        "abierto"
      )
    ) {

      ajustarPergamino();


      posicionarPergamino(
        florActiva
      );

    }

  }


  window.addEventListener(
    "resize",
    recolocarPergamino
  );


  if (
    window.visualViewport
  ) {

    window.visualViewport
      .addEventListener(
        "resize",
        recolocarPergamino
      );

  }


})();