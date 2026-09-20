(() => {

  "use strict";


  /* =========================================================
     PANTALLA 0
     =========================================================
     ÚNICAMENTE carga la introducción.
     NO modifica visualmente Pantalla 1.
     ========================================================= */


  function cargarPantalla0() {

    if (
      document.getElementById(
        "pantalla-0"
      )
    ) {
      return;
    }


    /*
      Pequeña cubierta instantánea para evitar
      que Pantalla 1 aparezca durante unas
      milésimas antes de Pantalla 0.
    */

    if (
      !document.getElementById(
        "p0-preloader"
      )
    ) {

      const preloader =
        document.createElement(
          "div"
        );


      preloader.id =
        "p0-preloader";


      Object.assign(
        preloader.style,
        {

          position:
            "fixed",

          inset:
            "0",

          zIndex:
            "999999",

          background:
            "#070914",

          pointerEvents:
            "none"

        }
      );


      document.body.appendChild(
        preloader
      );

    }


    /*
      CSS Pantalla 0.
    */

    let css =
      Array.from(
        document.querySelectorAll(
          'link[rel="stylesheet"]'
        )
      ).find(
        link =>
          link.href.includes(
            "pantalla-0.css"
          )
      );


    function cargarJS() {

      const yaExiste =
        Array.from(
          document.scripts
        ).some(
          script =>
            script.src.includes(
              "pantalla-0.js"
            )
        );


      if (yaExiste) {
        return;
      }


      const script =
        document.createElement(
          "script"
        );


      script.src =
        "./js/pantalla-0.js";


      script.dataset.pantalla0 =
        "true";


      script.onerror =
        () => {

          const preloader =
            document.getElementById(
              "p0-preloader"
            );


          if (preloader) {

            preloader.remove();

          }

        };


      document.body.appendChild(
        script
      );

    }


    if (!css) {

      css =
        document.createElement(
          "link"
        );


      css.rel =
        "stylesheet";


      css.href =
        "./css/pantalla-0.css";


      css.dataset.pantalla0 =
        "true";


      css.addEventListener(
        "load",
        cargarJS,
        {
          once: true
        }
      );


      css.addEventListener(
        "error",
        cargarJS,
        {
          once: true
        }
      );


      document.head.appendChild(
        css
      );

    } else {

      cargarJS();

    }


    /*
      Protección adicional.
    */

    setTimeout(
      cargarJS,
      1200
    );

  }


  cargarPantalla0();



  /* =========================================
     PANTALLA 1 ORIGINAL
     ========================================= */


  const NS =
    "http://www.w3.org/2000/svg";


  const movimientoReducido =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );



  /* =========================================
     ELEMENTOS
     ========================================= */

  const jardin =
    document.getElementById(
      "jardin"
    );


  const girasol =
    document.getElementById(
      "girasol"
    );


  const capa =
    document.getElementById(
      "petalos-sueltos"
    );


  const boton =
    document.getElementById(
      "abrir-sorpresa"
    );


  const campoGirasoles =
    document.getElementById(
      "campo-girasoles"
    );


  const pantalla1 =
    document.getElementById(
      "pantalla-1"
    );


  const pantalla2 =
    document.getElementById(
      "pantalla-2"
    );



  /* =========================================
     OPTIMIZACIÓN
     ========================================= */

  const TOTAL_SEMILLAS_PRINCIPAL =
    320;


  const TOTAL_SEMILLAS_SECUNDARIO =
    150;



  /* =========================================
     CREAR SVG
     ========================================= */

  function svg(
    nombre,
    atributos = {}
  ) {

    const elemento =
      document.createElementNS(
        NS,
        nombre
      );


    for (
      const [clave, valor]
      of
      Object.entries(
        atributos
      )
    ) {

      elemento.setAttribute(
        clave,
        valor
      );

    }


    return elemento;

  }



  /* =========================================
     PÉTALOS DE GIRASOL
     ========================================= */

  function dibujarPetalosEnGrupo(
    grupo,
    cantidad,
    desfase,
    rellenoId
  ) {

    for (
      let i = 0;
      i < cantidad;
      i++
    ) {

      const giro =
        svg(
          "g",
          {

            transform:
              `rotate(${
                (i * 360)
                /
                cantidad
                +
                desfase
              })`

          }
        );


      const petalo =
        svg(
          "g",
          {

            class:
              "petalo",

            style:
              `--demora:${
                -i * 0.18
              }s`

          }
        );


      petalo.append(

        svg(
          "path",
          {

            d:
              "M0 -43 C-24 -56 -36 -92 -20 -119 Q-7 -142 -2 -151 Q29 -133 29 -109 C31 -84 21 -56 0 -43Z",

            fill:
              `url(#${rellenoId})`,

            stroke:
              "#c68d2233",

            "stroke-width":
              ".7"

          }
        ),


        svg(
          "path",
          {

            d:
              "M0 -57 Q6 -97 -2 -135",

            class:
              "vena-petalo"

          }
        )

      );


      giro.append(
        petalo
      );


      grupo.append(
        giro
      );

    }

  }



  /* =========================================
     SEMILLAS
     ========================================= */

  function dibujarSemillasEnGrupo(
    grupo,
    total
  ) {

    const colores = [

      "#d4a05a",
      "#ad793f",
      "#ba894b",
      "#80542e"

    ];


    for (
      let i = 0;
      i < total;
      i++
    ) {

      const angulo =
        i * 137.507764;


      const radianes =
        angulo *
        Math.PI /
        180;


      const radio =

        Math.sqrt(
          i / total
        )

        *

        59;


      const x =
        Math.cos(
          radianes
        )
        *
        radio;


      const y =
        Math.sin(
          radianes
        )
        *
        radio;


      grupo.append(

        svg(
          "ellipse",
          {

            cx:
              x,

            cy:
              y,

            rx:
              1.1
              +
              radio / 85,

            ry:
              1.7
              +
              radio / 70,

            fill:
              colores[
                i % 4
              ],

            transform:
              `rotate(${
                angulo + 35
              } ${x} ${y})`

          }
        )

      );

    }

  }



  /* =========================================
     GIRASOL PRINCIPAL
     ========================================= */

  function poblarGirasolPrincipal() {

    const petalosTraseros =
      document.getElementById(
        "petalos-traseros"
      );


    const petalosDelanteros =
      document.getElementById(
        "petalos-delanteros"
      );


    const semillas =
      document.getElementById(
        "semillas"
      );


    dibujarPetalosEnGrupo(
      petalosTraseros,
      24,
      7.5,
      "petalo-ambar"
    );


    dibujarPetalosEnGrupo(
      petalosDelanteros,
      21,
      0,
      "petalo-dorado"
    );


    dibujarSemillasEnGrupo(
      semillas,
      TOTAL_SEMILLAS_PRINCIPAL
    );

  }



  /* =========================================
     GRADIENTES GIRASOLES SECUNDARIOS
     ========================================= */

  function crearDefs(
    prefijo
  ) {

    const defs =
      svg(
        "defs"
      );



    const gradPetaloDorado =
      svg(
        "linearGradient",
        {

          id:
            `${prefijo}-petalo-dorado`,

          x1:
            "0",

          y1:
            "-155",

          x2:
            "0",

          y2:
            "-40",

          gradientUnits:
            "userSpaceOnUse"

        }
      );


    gradPetaloDorado.append(

      svg(
        "stop",
        {
          "stop-color":
            "#fff2a6"
        }
      ),

      svg(
        "stop",
        {

          offset:
            ".4",

          "stop-color":
            "#ffd34f"

        }
      ),

      svg(
        "stop",
        {

          offset:
            "1",

          "stop-color":
            "#e7a21b"

        }
      )

    );



    const gradPetaloAmbar =
      svg(
        "linearGradient",
        {

          id:
            `${prefijo}-petalo-ambar`,

          x1:
            "0",

          y1:
            "-155",

          x2:
            "0",

          y2:
            "-40",

          gradientUnits:
            "userSpaceOnUse"

        }
      );


    gradPetaloAmbar.append(

      svg(
        "stop",
        {

          "stop-color":
            "#ffda64"

        }
      ),

      svg(
        "stop",
        {

          offset:
            "1",

          "stop-color":
            "#d98b17"

        }
      )

    );



    const gradVerde =
      svg(
        "linearGradient",
        {

          id:
            `${prefijo}-verde`,

          x1:
            "0",

          y1:
            "0",

          x2:
            "1",

          y2:
            "1"

        }
      );


    gradVerde.append(

      svg(
        "stop",
        {

          "stop-color":
            "#a2bd67"

        }
      ),

      svg(
        "stop",
        {

          offset:
            ".5",

          "stop-color":
            "#6d934b"

        }
      ),

      svg(
        "stop",
        {

          offset:
            "1",

          "stop-color":
            "#3d673c"

        }
      )

    );



    const gradCentro =
      svg(
        "radialGradient",
        {

          id:
            `${prefijo}-centro-flor`,

          cx:
            "40%",

          cy:
            "35%",

          r:
            "70%"

        }
      );


    gradCentro.append(

      svg(
        "stop",
        {

          "stop-color":
            "#976035"

        }
      ),

      svg(
        "stop",
        {

          offset:
            "1",

          "stop-color":
            "#3c2925"

        }
      )

    );



    const gradSombra =
      svg(
        "radialGradient",
        {

          id:
            `${prefijo}-sombra-suelo`

        }
      );


    gradSombra.append(

      svg(
        "stop",
        {

          "stop-color":
            "#7b8154",

          "stop-opacity":
            ".18"

        }
      ),

      svg(
        "stop",
        {

          offset:
            "1",

          "stop-color":
            "#7b8154",

          "stop-opacity":
            "0"

        }
      )

    );


    defs.append(

      gradPetaloDorado,
      gradPetaloAmbar,
      gradVerde,
      gradCentro,
      gradSombra

    );


    return defs;

  }



  /* =========================================
     CABEZA GIRASOL SECUNDARIO
     ========================================= */

  function crearGrupoCabeza(
    prefijo,
    semillasTotal
  ) {

    const contenedor =
      svg(
        "g",
        {

          transform:
            "translate(250 180)"

        }
      );


    const cabeza =
      svg(
        "g",
        {

          class:
            "cabeza"

        }
      );


    const petalosTraseros =
      svg(
        "g"
      );


    const petalosDelanteros =
      svg(
        "g"
      );


    const semillas =
      svg(
        "g"
      );


    dibujarPetalosEnGrupo(
      petalosTraseros,
      22,
      7.5,
      `${prefijo}-petalo-ambar`
    );


    dibujarPetalosEnGrupo(
      petalosDelanteros,
      20,
      0,
      `${prefijo}-petalo-dorado`
    );


    dibujarSemillasEnGrupo(
      semillas,
      semillasTotal
    );


    cabeza.append(

      petalosTraseros,

      petalosDelanteros,

      svg(
        "circle",
        {

          r:
            "68",

          fill:
            "#bd7e24"

        }
      ),

      svg(
        "circle",
        {

          r:
            "63",

          fill:
            `url(#${prefijo}-centro-flor)`

        }
      ),

      semillas,

      svg(
        "circle",
        {

          r:
            "63",

          fill:
            "none",

          stroke:
            "#e4b54e",

          "stroke-width":
            "2",

          opacity:
            ".55"

        }
      )

    );


    contenedor.append(
      cabeza
    );


    return contenedor;

  }



  /* =========================================
     PLANTA SECUNDARIA
     ========================================= */

  function crearPlanta(
    prefijo,
    semillasTotal
  ) {

    const planta =
      svg(
        "g",
        {

          class:
            "planta"

        }
      );


    planta.append(

      svg(
        "path",
        {

          d:
            "M247 556 C229 451 281 332 250 183",

          fill:
            "none",

          stroke:
            "#547842",

          "stroke-width":
            "13",

          "stroke-linecap":
            "round"

        }
      ),

      svg(
        "path",
        {

          d:
            "M244 552 C229 449 276 330 247 190",

          fill:
            "none",

          stroke:
            "#a2b878",

          "stroke-width":
            "3",

          "stroke-linecap":
            "round"

        }
      )

    );



    const hojaIzquierda =
      svg(
        "g",
        {

          class:
            "hoja hoja-izquierda"

        }
      );


    hojaIzquierda.append(

      svg(
        "path",
        {

          d:
            "M249 416 C214 370 145 345 111 362 C130 428 197 459 249 416Z",

          fill:
            `url(#${prefijo}-verde)`

        }
      ),

      svg(
        "path",
        {

          d:
            "M245 415 Q177 400 119 366 M199 400 L181 374 M176 392 L152 375 M217 408 L192 428 M184 396 L158 408",

          fill:
            "none",

          stroke:
            "#d0dc98",

          "stroke-width":
            "1.7",

          opacity:
            ".55"

        }
      )

    );



    const hojaDerecha =
      svg(
        "g",
        {

          class:
            "hoja hoja-derecha"

        }
      );


    hojaDerecha.append(

      svg(
        "path",
        {

          d:
            "M254 354 C279 307 339 287 377 301 C355 362 303 393 254 354Z",

          fill:
            `url(#${prefijo}-verde)`

        }
      ),

      svg(
        "path",
        {

          d:
            "M257 354 Q320 329 369 306 M293 339 L301 313 M318 329 L332 306 M287 342 L316 355 M319 328 L347 330",

          fill:
            "none",

          stroke:
            "#d0dc98",

          "stroke-width":
            "1.7",

          opacity:
            ".55"

        }
      )

    );


    planta.append(

      hojaIzquierda,

      hojaDerecha,

      crearGrupoCabeza(
        prefijo,
        semillasTotal
      )

    );


    return planta;

  }



  /* =========================================
     CREAR GIRASOL SECUNDARIO
     ========================================= */

  function crearGirasolSecundario(
    config,
    indice
  ) {

    const prefijo =
      `sec-${indice}`;


    const contenedor =
      document.createElement(
        "div"
      );


    contenedor.className =
      "girasol-item";


    contenedor.style.setProperty(
      "--x",
      config.x
    );


    contenedor.style.setProperty(
      "--y",
      config.y
    );


    contenedor.style.setProperty(
      "--ancho",
      config.ancho
    );


    contenedor.style.setProperty(
      "--opacidad",
      String(
        config.opacidad ?? 1
      )
    );


    contenedor.style.setProperty(
      "--z",
      String(
        config.z ?? 14
      )
    );


    contenedor.style.setProperty(
      "--duracion",
      config.duracion ?? "8s"
    );


    contenedor.style.setProperty(
      "--rot",
      config.rot ?? "0deg"
    );



    const flor =
      svg(
        "svg",
        {

          class:
            "girasol-secundario",

          viewBox:
            "0 0 500 600",

          "aria-hidden":
            "true"

        }
      );


    flor.append(

      crearDefs(
        prefijo
      ),

      svg(
        "ellipse",
        {

          cx:
            "250",

          cy:
            "566",

          rx:
            "120",

          ry:
            "20",

          fill:
            `url(#${prefijo}-sombra-suelo)`

        }
      ),

      crearPlanta(
        prefijo,
        TOTAL_SEMILLAS_SECUNDARIO
      )

    );


    contenedor.append(
      flor
    );


    return contenedor;

  }



  /* =========================================
     DISTRIBUCIÓN ORIGINAL DEL BOSQUE
     ========================================= */

  function poblarCampo() {

    const configuraciones = [

      {
        x: "5%",
        y: "13%",
        ancho: "148px",
        opacidad: .95,
        z: 15,
        duracion: "8.8s",
        rot: "-2deg"
      },

      {
        x: "9%",
        y: "14%",
        ancho: "162px",
        opacidad: .98,
        z: 15,
        duracion: "8.2s",
        rot: "1deg"
      },

      {
        x: "13%",
        y: "12%",
        ancho: "128px",
        opacidad: .94,
        z: 15,
        duracion: "8.9s",
        rot: "-1deg"
      },

      {
        x: "18%",
        y: "15%",
        ancho: "182px",
        opacidad: 1,
        z: 15,
        duracion: "8.1s",
        rot: "1deg"
      },

      {
        x: "24%",
        y: "13%",
        ancho: "170px",
        opacidad: .98,
        z: 15,
        duracion: "8.6s",
        rot: "-1deg"
      },

      {
        x: "29%",
        y: "11%",
        ancho: "124px",
        opacidad: .93,
        z: 15,
        duracion: "9s",
        rot: "2deg"
      },

      {
        x: "35%",
        y: "13%",
        ancho: "160px",
        opacidad: .97,
        z: 15,
        duracion: "8.5s",
        rot: "-2deg"
      },

      {
        x: "41%",
        y: "12%",
        ancho: "144px",
        opacidad: .95,
        z: 15,
        duracion: "8.9s",
        rot: "1deg"
      },

      {
        x: "47%",
        y: "14%",
        ancho: "130px",
        opacidad: .92,
        z: 15,
        duracion: "9.1s",
        rot: "-1deg"
      },

      {
        x: "51%",
        y: "13%",
        ancho: "122px",
        opacidad: .90,
        z: 15,
        duracion: "9s",
        rot: "1deg"
      },

      {
        x: "55%",
        y: "11%",
        ancho: "116px",
        opacidad: .88,
        z: 15,
        duracion: "9.2s",
        rot: "-2deg"
      },

      {
        x: "60%",
        y: "12%",
        ancho: "156px",
        opacidad: .96,
        z: 15,
        duracion: "8.7s",
        rot: "1deg"
      },

      {
        x: "66%",
        y: "13%",
        ancho: "166px",
        opacidad: .98,
        z: 15,
        duracion: "8.2s",
        rot: "-2deg"
      },

      {
        x: "72%",
        y: "11%",
        ancho: "142px",
        opacidad: .95,
        z: 15,
        duracion: "8.8s",
        rot: "1deg"
      },

      {
        x: "78%",
        y: "13%",
        ancho: "180px",
        opacidad: .98,
        z: 15,
        duracion: "8.1s",
        rot: "-1deg"
      },

      {
        x: "84%",
        y: "12%",
        ancho: "136px",
        opacidad: .95,
        z: 15,
        duracion: "8.9s",
        rot: "2deg"
      },

      {
        x: "89%",
        y: "14%",
        ancho: "166px",
        opacidad: .97,
        z: 15,
        duracion: "8.4s",
        rot: "-1deg"
      },

      {
        x: "95%",
        y: "13%",
        ancho: "144px",
        opacidad: .94,
        z: 15,
        duracion: "9.2s",
        rot: "1deg"
      },

      {
        x: "99%",
        y: "11%",
        ancho: "118px",
        opacidad: .9,
        z: 15,
        duracion: "9.5s",
        rot: "-2deg"
      },


      /* FILA MEDIA */

      {
        x: "11%",
        y: "22%",
        ancho: "112px",
        opacidad: .82,
        z: 12,
        duracion: "9.4s",
        rot: "-1deg"
      },

      {
        x: "22%",
        y: "24%",
        ancho: "122px",
        opacidad: .84,
        z: 12,
        duracion: "8.9s",
        rot: "2deg"
      },

      {
        x: "31%",
        y: "23%",
        ancho: "108px",
        opacidad: .82,
        z: 12,
        duracion: "9.3s",
        rot: "-2deg"
      },

      {
        x: "39%",
        y: "22%",
        ancho: "118px",
        opacidad: .83,
        z: 12,
        duracion: "9.1s",
        rot: "1deg"
      },

      {
        x: "49%",
        y: "23%",
        ancho: "106px",
        opacidad: .80,
        z: 12,
        duracion: "9.4s",
        rot: "-1deg"
      },

      {
        x: "54%",
        y: "22%",
        ancho: "98px",
        opacidad: .78,
        z: 12,
        duracion: "9.5s",
        rot: "1deg"
      },

      {
        x: "61%",
        y: "22%",
        ancho: "116px",
        opacidad: .83,
        z: 12,
        duracion: "9.2s",
        rot: "-1deg"
      },

      {
        x: "70%",
        y: "23%",
        ancho: "106px",
        opacidad: .81,
        z: 12,
        duracion: "9.5s",
        rot: "1deg"
      },

      {
        x: "79%",
        y: "23%",
        ancho: "114px",
        opacidad: .8,
        z: 12,
        duracion: "9.8s",
        rot: "-1deg"
      },

      {
        x: "88%",
        y: "24%",
        ancho: "102px",
        opacidad: .78,
        z: 12,
        duracion: "10s",
        rot: "1deg"
      }

    ];



    const fragmento =
      document.createDocumentFragment();



    configuraciones.forEach(
      (configuracion, indice) => {

        fragmento.append(

          crearGirasolSecundario(
            configuracion,
            indice
          )

        );

      }
    );


    campoGirasoles.append(
      fragmento
    );

  }



  /* =========================================
     PÉTALOS VOLANDO
     ========================================= */

  function soltarPetalo() {

    if (

      movimientoReducido.matches

      ||

      document.hidden

      ||

      capa.childElementCount >= 14

    ) {

      return;

    }



    const flor =
      girasol.getBoundingClientRect();


    const area =
      jardin.getBoundingClientRect();



    const petalo =
      document.createElement(
        "span"
      );


    petalo.className =
      "petalo-volando";


    petalo.style.left =

      `${
        flor.left
        -
        area.left
        +
        flor.width * .72
      }px`;


    petalo.style.top =

      `${
        flor.top
        -
        area.top
        +
        flor.height * .23
      }px`;


    petalo.style.setProperty(
      "--dx",
      `${
        80
        +
        Math.random()
        *
        150
      }px`
    );


    petalo.style.setProperty(
      "--dy",
      `${
        140
        +
        Math.random()
        *
        170
      }px`
    );


    petalo.style.setProperty(
      "--giro",
      `${
        160
        +
        Math.random()
        *
        260
      }deg`
    );


    petalo.style.setProperty(
      "--duracion",
      `${
        4
        +
        Math.random()
        *
        2
      }s`
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


    capa.append(
      petalo
    );

  }



  /* =========================================
     BRISA AUTOMÁTICA
     ========================================= */

  let intervalo;



  function actualizarBrisa() {

    clearInterval(
      intervalo
    );


    if (

      movimientoReducido.matches

      ||

      document.hidden

    ) {

      capa.replaceChildren();

      return;

    }


    intervalo =
      setInterval(
        soltarPetalo,
        3400
      );

  }



  /* =========================================
     INICIALIZACIÓN
     ========================================= */

  poblarGirasolPrincipal();

  poblarCampo();



  movimientoReducido.addEventListener(
    "change",
    actualizarBrisa
  );


  document.addEventListener(
    "visibilitychange",
    actualizarBrisa
  );


  actualizarBrisa();



  /* =========================================
     BOTÓN PRINCIPAL
     ========================================= */

  let cambiandoPantalla =
    false;



  boton.addEventListener(
    "click",
    () => {


      if (
        cambiandoPantalla
      ) {

        return;

      }


      cambiandoPantalla =
        true;



      /* =====================================
         1. INICIAR MÚSICA
         ===================================== */

      document.dispatchEvent(

        new CustomEvent(
          "flores:abrir"
        )

      );



      /* =====================================
         2. RÁFAGA DE PÉTALOS
         ===================================== */

      for (
        let i = 0;
        i < 6;
        i++
      ) {

        setTimeout(
          soltarPetalo,
          i * 70
        );

      }



      /* =====================================
         3. TRANSICIÓN
         ===================================== */

      if (
        !pantalla1
        ||
        !pantalla2
      ) {

        return;

      }


      pantalla1.classList.add(
        "saliendo"
      );



      /* =====================================
         4. PANTALLA 2
         ===================================== */

      setTimeout(
        () => {


          pantalla2.classList.add(
            "activa"
          );


          pantalla2.setAttribute(
            "aria-hidden",
            "false"
          );


        },
        330
      );


    }
  );


})();