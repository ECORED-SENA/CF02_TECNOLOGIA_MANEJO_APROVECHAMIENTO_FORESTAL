<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Cartografía, interpretación espacial y gestión de intervenciones ambientales
      p.mb-5 La cartografía, la interpretación espacial y la gestión de intervenciones ambientales integran información geográfica, análisis territorial y planificación para evaluar, diseñar y ejecutar acciones relacionadas con el medio ambiente. Su aplicación permite diagnosticar las condiciones del territorio mediante representaciones cartográficas y análisis espaciales, y orientar decisiones de manejo ambiental acordes con las características de cada zona.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Metodologías de interpretación ambiental	
      p.mb-5 Las metodologías de interpretación ambiental combinan técnicas cuantitativas y herramientas geoespaciales para analizar, caracterizar y delimitar componentes biofísicos y socioeconómicos del territorio. Mediante procedimientos sistemáticos, permiten transformar los datos territoriales en información útil para comprender la dinámica de los ecosistemas y orientar decisiones de planificación ambiental.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto y usos principales
      p.mb-5 La interpretación ambiental transforma los datos territoriales y bióticos en información útil para comprender los ecosistemas y orientar la planificación ambiental. Los principales usos de la interpretación ambiental son:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img1.png', alt="" ).m-auto
                  h4.text-center Ordenamiento y conservación
                  .caja-2_p
                    p.mb-0.text-center Permite diseñar planes de ordenamiento territorial (POT) y delimitar áreas destinadas a la conservación de los ecosistemas.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
                  h4.text-center Evaluación y planificación de proyectos
                  .caja-2_p
                    p.mb-0.text-center Facilita la elaboración de evaluaciones de impacto ambiental (EIA) y la planificación de proyectos agroforestales o de infraestructura socioambiental.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de análisis espacial
      p.mb-5 El análisis espacial relaciona datos geográficos para identificar condiciones ambientales y características del territorio mediante diferentes técnicas de interpretación. Las principales técnicas de análisis espacial son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Superposición de capas
                  p.mb-0 Consiste en cruzar información cartográfica de suelos, pendientes, cobertura vegetal e hidrología para identificar áreas con determinadas aptitudes o condiciones de vulnerabilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Áreas de influencia
                  p.mb-0 Permite generar franjas de protección o zonas de influencia alrededor de elementos territoriales, como cuerpos de agua, vías y áreas protegidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interpolación espacial
                  p.mb-0 Estima variables continuas, como precipitación, temperatura y contaminación, a partir de puntos de muestreo. Entre sus métodos se encuentran #[i Kriging] e IDW.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Teledetección e índices espectrales
                  p.mb-0 Emplea imágenes satelitales y sensores remotos para calcular índices de vegetación, como NDVI y SAVI, utilizados para monitorear su estado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sistemas de medición y referencia
      p.mb-5 Los sistemas de medición y referencia permiten localizar puntos del territorio y calcular distancias, áreas y perímetros mediante coordenadas y unidades de medida. Los principales sistemas y unidades utilizados en la interpretación ambiental son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img7.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Sistemas de coordenadas geográficas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten localizar puntos mediante latitud y longitud, expresadas en grados, minutos y segundos. Estas coordenadas se relacionan con sistemas de referencia geodésicos, como WGS 84.
            .row(titulo="Sistemas de coordenadas proyectadas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representan la superficie terrestre en un plano mediante coordenadas X y Y, expresadas en metros. Entre ellos se encuentran las proyecciones UTM y MAGNA-SIRGAS / Origen-Nacional, que permiten calcular distancias, perímetros y áreas (Instituto Geográfico Agustín Codazzi [IGAC], 2021).
            .row(titulo="Unidades de medida").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las superficies se expresan en hectáreas (ha), metros cuadrados (m²) y kilómetros cuadrados (km²), según la extensión del territorio y la escala del proyecto.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Delimitación de áreas y polígonos topográficos
      p.mb-5 La delimitación territorial establece fronteras ambientales y representa áreas mediante polígonos topográficos, considerando criterios ambientales, administrativos y coordenadas de referencia. La delimitación de áreas y polígonos topográficos comprende los siguientes procedimientos:
      .row.justify-content-center.mb-0
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Delimitación de áreas
                p.mb-0 Se establecen fronteras ambientales a partir de criterios geomorfológicos, como las divisorias de aguas; bióticos, como los ecosistemas estratégicos; o político-administrativos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img8.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Definición de polígonos topográficos
                p.mb-0 Se representan las áreas mediante figuras geométricas cerradas, conformadas por vértices con coordenadas conocidas de norte, este y cota.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Levantamiento topográfico
                p.mb-0 Se obtienen los datos espaciales mediante estaciones totales, receptores GNSS/GPS de precisión o técnicas de fotogrametría aérea.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img10.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Cálculo de área y perímetro
                p.mb-0 Se calculan las superficies y los perímetros a partir de las coordenadas de los vértices, mediante fórmulas de geometría analítica o programas SIG y CAD.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Estrategias de intervención ambiental
      p.mb-5 Las estrategias de intervención ambiental comprenden planes y acciones dirigidos a prevenir, mitigar, corregir o compensar los impactos negativos sobre los ecosistemas. Su aplicación busca proteger los componentes ambientales y promover la sostenibilidad mediante diferentes niveles de intervención, políticas de biodiversidad y prácticas de manejo adoptadas por comunidades y organizaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Niveles de intervención (jerarquía de impacto)
      p.mb-5 La jerarquía de impacto organiza las medidas de intervención ambiental según su finalidad, desde la prevención de los daños hasta la compensación de los impactos que persisten. Los niveles de intervención ambiental se organizan de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Prevención
                p.mb-0 Consiste en adoptar medidas anticipadas para evitar que el daño o la contaminación se produzcan en su fuente, mediante estrategias como el diseño limpio y los planes de manejo ambiental.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Mitigación
                p.mb-0 Comprende acciones orientadas a reducir la magnitud, duración o intensidad de los impactos ambientales que no pueden evitarse.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Corrección
                p.mb-0 Busca restaurar o recuperar los componentes ambientales afectados mediante la aplicación de tecnologías de remediación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Compensación
                p.mb-0 Procura mantener la biodiversidad y los servicios ecosistémicos equivalentes cuando los impactos no pueden evitarse ni corregirse por completo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipologías
      p.mb-5 La gestión ambiental también incorpora políticas de biodiversidad, técnicas de adopción y el concepto de resiliencia ecosistémica, relacionados con la conservación y sostenibilidad de los ecosistemas. Los principales elementos relacionados con estas estrategias son:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Políticas de biodiversidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Políticas de biodiversidad
              p.mb-0 Comprenden instrumentos normativos y directrices nacionales e internacionales sobre conservación in situ y ex situ, uso sostenible de la fauna y flora, y conectividad ecológica. Entre sus referentes se encuentran el Convenio sobre la Diversidad Biológica (CDB) y el Marco Mundial de Biodiversidad de Kunming-Montreal.
        .py-3.py-md-4(titulo="Técnicas de adopción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Técnicas de adopción
              p.mb-0 Son metodologías para integrar buenas prácticas ambientales en comunidades y empresas. Incluyen educación ambiental participativa, acuerdos voluntarios de producción limpia (APL) y pagos por servicios ambientales (PSA).
        .py-3.py-md-4(titulo="Resiliencia ecosistémica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Resiliencia ecosistémica
              p.mb-0 Es la capacidad de un ecosistema para absorber perturbaciones, adaptarse y reorganizarse frente a cambios o tensiones, sin perder su estructura básica, funcionamiento ni relaciones de retroalimentación esenciales.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Estimación de cargas contaminantes y marco normativo
      p.mb-5 La estimación de cargas contaminantes permite determinar la masa de un contaminante aportada al agua, suelo o atmósfera durante un intervalo de tiempo. En descargas con caudal medible, se utiliza la relación básica carga = concentración × caudal, considerando las unidades correspondientes. Su determinación comprende criterios de estimación, herramientas de procesamiento de datos y elementos normativos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios de estimación
      p.mb-5 Las cargas contaminantes pueden estimarse mediante mediciones directas o métodos indirectos, según las características de la actividad y los datos disponibles. Los criterios de estimación se clasifican de la siguiente manera:
      .bg-2
        .px-5
          .row.justify-content-center.align-items-center.cursor-pointer.mb-4.mb-md-4.mb-5
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-left")
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t2/img19.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Medición directa
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Medición directa
                    p.mb-0 Utiliza balances de materia y monitoreos de campo, mediante muestreos representativos y aforos que permiten determinar el aporte de contaminantes.
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-right")
              .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador2 = false")
                .indicador--hover(v-if="mostrarIndicador2")
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t2/img20.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Métodos indirectos
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Métodos indirectos
                    p.mb-0 Emplean factores de emisión o vertido estandarizados por sector industrial o volumen de producción para estimar las cargas contaminantes.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas de procesamiento de datos
      p.mb-5 El procesamiento de datos ambientales utiliza herramientas de cálculo, programas estadísticos y sistemas de información geográfica para apoyar la estimación de cargas contaminantes. Las principales herramientas utilizadas son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hojas de cálculo
                  p.mb-0 Permiten organizar y procesar los datos obtenidos durante la estimación de cargas contaminantes mediante hojas de cálculo avanzadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Programas estadísticos
                  p.mb-0 Comprenden herramientas como R y Python, utilizadas para el procesamiento y análisis estadístico de los datos ambientales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas de información geográfica (SIG)
                  p.mb-0 Incluyen programas como QGIS y ArcGIS, que pueden integrarse con modelos de dispersión o simulación hídrica, como QUAL2K y SWMM.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos normativos
      p.mb-5 El marco normativo contempla disposiciones relacionadas con los vertimientos, la calidad ambiental y las autorizaciones requeridas para desarrollar proyectos con posibles impactos ambientales. Los principales elementos normativos son:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img24.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Límites permisibles de vertimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establecen la concentración o masa máxima permitida de contaminantes descargados al alcantarillado o a cuerpos de agua. Incluyen parámetros como DBO₅, DQO, sólidos suspendidos totales (SST), grasas y aceites.
            .row(titulo="Normas de calidad ambiental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Definen los niveles máximos aceptables de contaminantes en medios receptores, como aire, agua y suelo, para proteger la salud humana y los ecosistemas.
            .row(titulo="Licenciamiento ambiental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la autorización otorgada por la autoridad ambiental competente para ejecutar determinados proyectos, con fundamento en la evaluación de sus impactos ambientales y las medidas del Plan de Manejo Ambiental (PMA).
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Límites Máximos Permisibles de Vertimientos	
      p.mb-5 Los límites máximos permisibles de vertimientos regulan la concentración de contaminantes descargados a cuerpos de agua y sistemas de alcantarillado público. En Colombia, la Resolución 631 de 2015 establece los parámetros aplicables a estas descargas, mientras que otras disposiciones regulan los vertimientos a aguas marinas y al suelo. Los aspectos clave de la normativa colombiana sobre vertimientos son:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Resolución 631 de 2015").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece los parámetros y valores límites máximos permisibles para vertimientos puntuales de aguas residuales domésticas y no domésticas a cuerpos de agua superficiales y al alcantarillado público. Define valores según las actividades económicas (Ministerio de Ambiente y Desarrollo Sostenible, 2015).
            .row(titulo="Resolución 883 de 2018").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece los parámetros y valores límites máximos permisibles para vertimientos puntuales a cuerpos de aguas marinas, complementando la regulación ambiental relacionada con la calidad del recurso hídrico (Ministerio de Ambiente y Desarrollo Sostenible, 2018).
            .row(titulo="Resolución 699 de 2021").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece los parámetros y valores límites máximos permisibles para los vertimientos puntuales de aguas residuales domésticas tratadas al suelo (Ministerio de Ambiente y Desarrollo Sostenible, 2021).
            .row(titulo="Obligaciones industriales y comerciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las actividades industriales y comerciales deben cumplir los parámetros establecidos para sus vertimientos, mediante el tratamiento de las aguas residuales cuando sea necesario, antes de descargarlas al alcantarillado o a fuentes hídricas.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img25.png", alt="" style="width: 350px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normas de calidad ambiental (recurso hídrico)
      p.mb-5 Las normas de calidad ambiental establecen criterios para determinar las condiciones que debe cumplir un cuerpo de agua según sus usos. Los principales elementos normativos relacionados con la calidad del recurso hídrico son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Criterios de calidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Criterios de calidad
              p.mb-0 Establecen las condiciones del agua según su uso: consumo humano, actividades agrícolas, pecuarias y recreativas, y preservación de flora y fauna.
        .py-3.py-md-4(titulo="Decreto 1076 de 2015")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Decreto 1076 de 2015
              p.mb-0 Regula los usos del agua, el ordenamiento del recurso hídrico y los criterios de calidad aplicables según su destinación.
        .py-3.py-md-4(titulo="Planes de Ordenamiento del Recurso Hídrico (PORH)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Planes de Ordenamiento del Recurso Hídrico (PORH)
              p.mb-0 Son instrumentos elaborados por las autoridades ambientales competentes para orientar los usos del agua y establecer objetivos de calidad de los cuerpos hídricos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Licenciamiento ambiental
      p.mb-5 El licenciamiento ambiental regula la autorización previa de proyectos, obras o actividades que puedan causar deterioro grave a los recursos naturales o modificaciones considerables al paisaje. Los principales elementos del licenciamiento ambiental son:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Autoridades y marco normativo
                  p.mb-0 La licencia ambiental es otorgada por la autoridad competente, como la Autoridad Nacional de Licencias Ambientales (ANLA) o las corporaciones autónomas regionales (CAR). Su régimen se encuentra reglamentado en el Decreto 1076 de 2015.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estudio de Impacto Ambiental (EIA)
                  p.mb-0 Es un requisito para solicitar la licencia ambiental. Evalúa los impactos abióticos, bióticos y socioeconómicos del proyecto e incluye el Plan de Manejo Ambiental (PMA), con las medidas correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Permisos ambientales asociados
                  p.mb-0 La licencia incorpora los permisos necesarios para el uso, aprovechamiento o afectación de recursos naturales, como concesiones de agua, vertimientos, ocupación de cauces, emisiones atmosféricas y aprovechamiento forestal, según las características del proyecto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img31.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Cartografía y herramientas de sistemas de información geográfica (SIG)
      p.mb-5 La cartografía representa la superficie terrestre mediante mapas, mientras que los sistemas de información geográfica (SIG) permiten recopilar, almacenar, analizar y presentar datos espaciales. Estas herramientas facilitan la identificación de características ambientales, el seguimiento de cambios territoriales y la medición de superficies, mediante técnicas de georreferenciación, análisis cartográfico y procesamiento de información geográfica.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto y características principales
      p.mb-5 Un SIG integra equipos, programas informáticos, datos geográficos, metodologías de análisis y recurso humano. Su funcionamiento se basa en características que permiten localizar, organizar y relacionar la información territorial. Las principales características de los sistemas de información geográfica son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Georreferenciación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Georreferenciación
              p.mb-0 Asigna coordenadas reales a los elementos representados mediante sistemas de referencia geodésicos, como WGS 84 y MAGNA-SIRGAS.
        .py-3.py-md-4(titulo="Modelo de datos dual")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 1.
                span Mapa vectorial
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/img33.png', alt='Mapa de Estados Unidos que representa sus divisiones territoriales mediante polígonos de diferentes colores, delimitados por fronteras estatales. Ilustra el modelo de datos vectorial utilizado en cartografía y sistemas de información geográfica (SIG) para representar superficies. Incluye orientación norte y escala gráfica expresada en kilómetros y millas.').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Modelo de datos dual
              p.mb-0 Organiza la información en formato vectorial, mediante puntos, líneas y polígonos, o en formato ráster, compuesto por celdas o píxeles.
        .py-3.py-md-4(titulo="Superposición por capas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img34.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Superposición por capas
              p.mb-0 Permite integrar diferentes capas de información geográfica para analizar las relaciones entre las características ambientales y territoriales de una zona.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de trazabilidad, delimitación y medición espacial
      p Estas técnicas permiten identificar transformaciones del territorio, establecer límites y calcular dimensiones espaciales. Su aplicación combina información geográfica, instrumentos de posicionamiento y herramientas de análisis cartográfico.
      p.mb-5 Para conocer la trazabilidad, delimitación y medición del territorio mediante imágenes satelitales, GNSS y modelos digitales, se invita a reproducir este video:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Técnicas de trazabilidad, delimitación y medición espacial”
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escalas de representación
      p.mb-5 La escala expresa la relación entre una distancia representada en el mapa y su equivalente real en el terreno. Se calcula mediante E = d/D, donde E es la escala, d es la distancia en el mapa y D es la distancia real, expresadas en las mismas unidades. Las escalas cartográficas se clasifican según su rango, nivel de detalle y aplicación:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Clasificación de las escalas cartográficas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tipo de escala
                      th.ajuste-border-tabla.texto-left Rango habitual
                      th.ajuste-border-tabla.texto-left Nivel de detalle
                      th.texto-left Aplicación común
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Grande
                      td.ajuste-border-tabla.texto-left 1:500 a 1:10.000
                      td.ajuste-border-tabla.texto-left Alto detalle
                      td.texto-left Catastro, diseño urbano y parcelas agrícolas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mediana
                      td.ajuste-border-tabla.texto-left 1:25.000 a 1:100.000
                      td.ajuste-border-tabla.texto-left Detalle moderado
                      td.texto-left Ordenamiento territorial y cuencas hidrográficas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pequeña
                      td.ajuste-border-tabla.texto-left 1:250.000 a 1:1.000.000 o menores
                      td.ajuste-border-tabla.texto-left Generalizado
                      td.texto-left Cartografía departamental, nacional o mundial.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales programas de mapas y SIG
          p.mb-5 Los programas de cartografía y SIG se agrupan en opciones comerciales, herramientas libres y plataformas en la nube. Cada categoría ofrece funciones para representar y analizar información geográfica. Los principales programas y plataformas utilizados son:
          .row.align-items-center.mb-0
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img35.png", alt="" style="width: 300px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Programas comerciales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 ArcGIS Pro, desarrollado por Esri, permite representar, analizar y modelar datos geográficos en 2D, 3D y 4D. Es utilizado en empresas e instituciones gubernamentales para el procesamiento de información espacial.
                .row(titulo="Programas libres y de código abierto").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 QGIS ofrece herramientas vectoriales, ráster y complementos para análisis geográfico. GRASS GIS permite procesar imágenes y datos espaciales; gvSIG facilita la gestión y edición cartográfica; y SAGA GIS se especializa en análisis geocientíficos y del terreno.
                .row(titulo="Plataformas en la nube y web").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 ArcGIS Online permite crear, compartir y publicar mapas interactivos. CARTO se orienta al análisis espacial y la inteligencia de localización, mientras que Mapbox facilita el diseño de mapas personalizados para aplicaciones web y móviles.
        
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
