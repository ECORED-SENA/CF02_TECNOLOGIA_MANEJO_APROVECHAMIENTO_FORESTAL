<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Caracterización ambiental, muestreo de campo y ordenamiento ecológico del territorio
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La caracterización ambiental, el muestreo de campo y el ordenamiento ecológico del territorio constituyen procesos complementarios para la gestión sostenible de los recursos naturales. En los sistemas agroforestales, permiten identificar las condiciones biofísicas y socioambientales, obtener información verificable sobre los ecosistemas y orientar decisiones de conservación, manejo productivo y planificación territorial.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Biodiversidad: flora y fauna
      p.mb-5 La biodiversidad comprende la variabilidad de los seres vivos, sus características genéticas y los ecosistemas que integran. En un territorio agroforestal, el reconocimiento de la flora y la fauna permite identificar especies, relaciones ecológicas y ambientes asociados a la producción, como base para su caracterización y conservación (Naciones Unidas, 1992).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Niveles de biodiversidad
      p.mb-5 El estudio de la biodiversidad distingue tres niveles complementarios para caracterizar la vida en un territorio. Estos permiten diferenciar la variabilidad entre individuos, la variedad de especies y las comunidades biológicas que conforman los ecosistemas, sin considerar estos niveles como componentes aislados. Los niveles de biodiversidad se diferencian por los siguientes aspectos: 
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
                  h4.text-center Diversidad genética
                  .caja-2_p
                    p.mb-0.text-center Corresponde a la variabilidad de la información genética entre individuos de una misma especie. 
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img4.png', alt="" ).m-auto
                  h4.text-center Diversidad de especies
                  .caja-2_p
                    p.mb-0.text-center Comprende la variedad de especies presentes en un hábitat o una región determinada. 
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img5.png', alt="" ).m-auto
                  h4.text-center Diversidad de ecosistemas
                  .caja-2_p
                    p.mb-0.text-center Se refiere a la variedad de comunidades biológicas y sus interacciones con el entorno físico. 
      p.mb-5 La biodiversidad es dinámica e interdependiente, pues cambia mediante procesos evolutivos y ecológicos, y los organismos mantienen relaciones entre sí y con su entorno. Su distribución geográfica es desigual, con una elevada riqueza de especies en numerosas regiones tropicales y neotropicales. Además, contribuye al funcionamiento de los ecosistemas mediante procesos como la polinización, la regulación climática, la purificación del agua y la formación del suelo (Ministerio de Ambiente y Desarrollo Sostenible, 2012). 
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Marco normativo y políticas de manejo 
      p.mb-5 El marco normativo y las políticas de manejo orientan la protección de la biodiversidad y el uso sostenible de los recursos naturales. Los principales referentes se organizan en tres categorías: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img6.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Convenios internacionales ").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El Convenio sobre la Diversidad Biológica (CDB) promueve la conservación y el uso sostenible de la biodiversidad (Naciones Unidas, 1992). La Convención CITES regula el comercio internacional de especies incluidas en sus apéndices (Secretaría CITES, s. f.), mientras que la Convención de Ramsar fomenta la conservación y el uso racional de los humedales (Secretaría de la Convención sobre los Humedales, s. f.). 
            .row(titulo="Normativa nacional (Colombia) ").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La Ley 99 de 1993 establece fundamentos para la gestión ambiental y la organización del Sistema Nacional Ambiental (SINA). El Decreto 1076 de 2015 reúne disposiciones reglamentarias del sector ambiente. Asimismo, la Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos (PNGIBSE) orienta su conservación y uso sostenible (Congreso de la República de Colombia, 1993; Ministerio de Ambiente y Desarrollo Sostenible, 2012; Presidencia de la República de Colombia, 2015). 
            .row(titulo="Estrategias de conservación ").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden el establecimiento y la gestión de áreas protegidas, articuladas mediante el Sistema Nacional de Áreas Protegidas (SINAP), la conectividad mediante corredores biológicos, la delimitación y protección de páramos y los planes de restauración ecológica. Estas acciones contribuyen a mantener la biodiversidad y los servicios ecosistémicos (Ministerio de Ambiente y Desarrollo Sostenible, 2012) 
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fauna
      p.mb-5 La fauna comprende el conjunto de animales que habitan en una región geográfica durante un período determinado. Su estudio permite reconocer las especies que coexisten en un territorio y clasificarlas según el ambiente que ocupan, su relación con los seres humanos y su origen geográfico. Para su caracterización inicial, la fauna puede distinguirse según su domesticación y origen geográfico, mediante las siguientes categorías: 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Fauna silvestre")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fauna silvestre
              p.mb-0 Comprende animales de especies no domesticadas que desarrollan sus procesos de vida en condiciones naturales, sin depender directamente del manejo humano. Estas especies mantienen relaciones ecológicas con los ambientes que habitan. 
        .py-3.py-md-4(titulo="Fauna doméstica ")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fauna doméstica 
              p.mb-0 Incluye animales pertenecientes a especies sometidas a procesos de domesticación y adaptadas a la convivencia con los seres humanos. Entre sus ejemplos se encuentran las mascotas y los animales de producción ganadera. 
        .py-3.py-md-4(titulo="Fauna introducida ")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fauna introducida 
              p.mb-0 Comprende especies trasladadas fuera de su distribución natural por intervención humana, de manera intencional o accidental. Su origen geográfico constituye un criterio independiente de su condición doméstica o silvestre. 
      p.mb-5 Según el ambiente que habita, la fauna puede agruparse en las siguientes categorías: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fauna selvática
                  p.mb-0 Comprende a los animales que habitan en regiones selváticas, especialmente en zonas tropicales con abundante vegetación. Entre sus representantes se encuentran las aves tropicales, los jaguares y los caimanes. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fauna xerófila
                  p.mb-0 Está integrada por animales adaptados a desiertos y zonas áridas, caracterizadas por la escasez de humedad y vegetación. Incluye determinadas especies de lagartijas, serpientes y zorros. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fauna polar
                  p.mb-0 Comprende animales adaptados a las condiciones extremas de las regiones polares. Entre sus representantes se encuentran los osos polares del Ártico, los pingüinos de regiones australes y diversas especies de focas. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fauna de alta montaña
                  p.mb-0 Está integrada por animales adaptados a las condiciones de las regiones montañosas elevadas, caracterizadas por bajas temperaturas y condiciones ambientales particulares. Entre sus representantes se encuentra el cóndor andino. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fauna marina
                  p.mb-0 Comprende a los animales que habitan en mares y océanos. Incluye peces, estrellas de mar, corales, medusas y mamíferos marinos, como las ballenas y las orcas. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fauna terrestre
                  p.mb-0 Comprende animales que desarrollan sus actividades principalmente en ambientes terrestres, incluidos el suelo y la vegetación. Entre sus representantes se encuentran numerosos insectos, reptiles, aves y mamíferos. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fauna urbana
                  p.mb-0 Comprende animales que habitan en ciudades y otros asentamientos humanos. Incluye especies silvestres adaptadas a estos ambientes, como algunas palomas y gorriones, así como animales domésticos, entre ellos perros y gatos. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
      p Estas agrupaciones ambientales no son excluyentes, pues una misma especie puede ocupar distintos hábitats. 
      p Según su relación con los seres humanos, se distinguen tres categorías de fauna: silvestre, doméstica y asilvestrada. Esta última comprende animales de especies domesticadas que viven sin supervisión ni control humano y pueden establecer poblaciones que se reproducen libremente. Esto ocurre, por ejemplo, con algunas poblaciones de gatos domésticos que viven de manera independiente (Organización Mundial de Sanidad Animal, s. f.). 
      p.mb-5 Según su origen geográfico, las especies animales se distinguen en dos categorías: 
      .bg-2
        .px-5
          .row.justify-content-center.align-items-center.cursor-pointer.mb-4.mb-md-4.mb-5
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-left")
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img17.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Fauna autóctona
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Fauna autóctona
                    p.mb-0 Comprende especies animales que pertenecen naturalmente a una región, sin haber sido trasladadas allí por intervención humana. Por ejemplo, el jaguar, también conocido como yaguareté, es una especie autóctona del continente americano. 
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-right")
              .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador2 = false")
                .indicador--hover(v-if="mostrarIndicador2")
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img18.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Fauna exótica
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Fauna exótica
                    p.mb-0 Comprende especies animales introducidas fuera de su distribución natural mediante actividades humanas, de manera intencional o accidental. Por ejemplo, el ganado bovino es una especie introducida en Colombia. Esta clasificación es independiente de su condición doméstica o silvestre (Secretaría del Convenio sobre la Diversidad Biológica, 2002).
      p.mb-5 La diversidad de fauna presente en distintas regiones geográficas y ecosistemas puede reconocerse mediante los siguientes ejemplos: 
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img19.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Fauna marina del golfo de México 
              p.mb-0 En el golfo de México habitan mamíferos marinos, peces, reptiles y diversos invertebrados. Entre los ejemplos se encuentran los delfines de Fraser, los manatíes del Caribe, los atunes de aleta azul, las tortugas de carey, crustáceos y moluscos.  
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="zoom-in")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img20.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Fauna de interés para la conservación en la Amazonía 
              p.mb-0 En la selva amazónica habitan especies cuya conservación requiere especial atención, como los tapires sudamericanos, las nutrias gigantes, los guacamayos jacinto y los monos araña. Su protección contribuye a conservar la biodiversidad y los hábitats de la región. 
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-right")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img21.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Fauna terrestre de la sabana africana 
              p.mb-0 La sabana africana alberga animales adaptados a paisajes abiertos, con pastizales y árboles dispersos. Entre ellos se encuentran elefantes, rinocerontes blancos, cebras, avestruces de cuello rojo, jirafas, así como numerosas especies de insectos y pequeños roedores. 
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Flora
      p La flora es el conjunto de especies vegetales de una región. Su nombre proviene de Flora, diosa romana vinculada con las flores. Las plantas cumplen funciones esenciales en los ecosistemas y presentan características que permiten reconocer su diversidad, procedencia y relación con las actividades agrícolas (Salcedo, 2025).
      p.mb-5 Las principales características de la flora se relacionan con su nutrición, permanencia en el sustrato y capacidad de adaptación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Nutrición autótrofa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Nutrición autótrofa
              p.mb-0 La mayoría de las plantas elaboran materia orgánica mediante la fotosíntesis, proceso que aprovecha el agua y la luz solar para su nutrición.
        .py-3.py-md-4(titulo="Permanencia en el sustrato")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Permanencia en el sustrato
              p.mb-0 Por lo general, las plantas permanecen sujetas a un sustrato, como el suelo o las rocas, sin desplazarse de un hábitat a otro.
        .py-3.py-md-4(titulo="Diversidad y adaptación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Diversidad y adaptación
              p.mb-0 La flora presenta adaptaciones al clima y al suelo. Por ejemplo, la venus atrapamoscas (Dionaea muscipula) posee hojas modificadas para capturar presas.
      p.mb-5 La flora puede clasificarse según su origen geográfico y las formas de cultivo y manejo, mediante las siguientes categorías:
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img25.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Flora nativa
              p.mb-0 Comprende las especies vegetales originarias de una región, sin haber sido introducidas por intervención humana. En zonas desérticas, por ejemplo, determinadas especies de cactus forman parte de la flora nativa y presentan adaptaciones a esas condiciones ambientales.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="zoom-in")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img26.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Flora exótica
              p.mb-0 Comprende especies vegetales introducidas fuera de su distribución natural. Algunas pueden convertirse en invasoras y desplazar la flora local. Un ejemplo es el kudzu (Pueraria montana var. lobata), planta trepadora originaria de Asia que puede afectar otros ecosistemas.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-right")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/img27.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Flora agrícola
              p.mb-0 Agrupa especies vegetales cultivadas intencionalmente para satisfacer necesidades humanas, como el maíz. Esta categoría responde al cultivo y manejo de las plantas, no a su origen geográfico. Por tanto, una especie agrícola también puede ser nativa o exótica.
      p.mb-5 La flora es importante porque desempeña un papel fundamental en las cadenas alimentarias, pues numerosas plantas producen materia orgánica que sirve de alimento a otros organismos. También proporciona alimentos y compuestos de interés medicinal, tiene usos ornamentales y participa en manifestaciones culturales, como el arte, los rituales y las festividades (Salcedo, 2025).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inventario botánico
      p El inventario botánico consiste en el levantamiento cualitativo y cuantitativo de la flora presente en un área determinada, con el propósito de caracterizar su biodiversidad, estructura y estado de conservación. Para organizar esta información, se emplean criterios taxonómicos y técnicas de delimitación, como los cuadrantes y transectos.
      p.mb-5 El reconocimiento y registro de las especies vegetales se apoya en los siguientes conceptos y métodos:
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img28.png', alt="" ).m-auto
                  h4.text-center Taxonomía
                  .caja-2_p
                    p.mb-0.text-center La taxonomía permite identificar, clasificar y nombrar las plantas mediante categorías jerárquicas. En la nomenclatura binomial, el nombre científico de una especie combina el género y el epíteto específico. Esto facilita organizar la información botánica, desde grupos generales hasta especies particulares.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img29.png', alt="" ).m-auto
                  h4.text-center Método de cuadrantes
                  .caja-2_p
                    p.mb-0.text-center Consiste en delimitar un área cuadrada o rectangular mediante un marco de madera o metal, estacas o cuerdas. Permite contar los organismos presentes y estimar su agrupación. Se utiliza especialmente en terrenos uniformes, como pastizales, sabanas o zonas con vegetación pequeña. 
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img30.png', alt="" ).m-auto
                  h4.text-center Método de transectos
                  .caja-2_p
                    p.mb-0.text-center Consiste en trazar una línea recta en una dirección fija mediante una cinta métrica o cuerda. Permite registrar los organismos que la tocan o cruzan y estudiar cambios entre ambientes, como desde la orilla de un río hasta el interior del bosque. 
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Estructura ecológica principal (EEP)
      p.mb-5 La estructura ecológica principal (EEP) constituye una red de espacios naturales y corredores ecológicos esenciales para mantener la biodiversidad y los servicios ecosistémicos. Es un eje para el ordenamiento territorial que prioriza la protección de la naturaleza frente a intervenciones urbanísticas y de infraestructura, y orienta el uso sostenible de los recursos naturales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto y características clave
      p.mb-5 La estructura ecológica principal comprende ecosistemas naturales y seminaturales cuya ubicación, extensión y conectividad favorecen la conservación y el uso sostenible de los recursos naturales. Su funcionamiento depende de las relaciones entre sus componentes y de los procesos ecológicos que sustentan el territorio (Ministerio de Ambiente y Desarrollo Sostenible, s. f.). Las características principales de la estructura ecológica principal son:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
                  h4.text-center Sistémica
                  .caja-2_p
                    p.mb-0.text-center Funciona como una red de elementos ecológicos interconectados, en lugar de áreas naturales aisladas.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img32.png', alt="" ).m-auto
                  h4.text-center Multiescalar
                  .caja-2_p
                    p.mb-0.text-center Se identifica en distintas escalas territoriales, como la regional, municipal y urbana, según las necesidades de planificación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img33.png', alt="" ).m-auto
                  h4.text-center Resiliente
                  .caja-2_p
                    p.mb-0.text-center Contribuye a amortiguar los efectos de las perturbaciones climáticas, mediante la regulación de temperaturas y el control de inundaciones.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img34.png', alt="" ).m-auto
                  h4.text-center Proveedora de servicios ecosistémicos
                  .caja-2_p
                    p.mb-0.text-center Sustenta recursos y procesos esenciales, como el abastecimiento de agua, la purificación del aire y la polinización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Usos y aspectos normativos
      p Los usos de la estructura ecológica principal dependen de las características de sus áreas y de las disposiciones ambientales aplicables. Su manejo comprende medidas de preservación, restauración y aprovechamiento sostenible, que orientan las actividades permitidas y las restricciones necesarias para proteger los ecosistemas.
      p.mb-5 Los principales enfoques de manejo son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Preservación y conservación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img35.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Preservación y conservación
              p.mb-0 Comprende áreas de protección estricta donde se restringen las intervenciones humanas incompatibles con los objetivos de conservación, con el fin de mantener los ecosistemas.
        .py-3.py-md-4(titulo="Restauración")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img36.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Restauración
              p.mb-0 Se aplica en zonas degradadas que requieren acciones de recuperación ecológica para restablecer sus condiciones ambientales.
        .py-3.py-md-4(titulo="Uso sostenible")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img37.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Uso sostenible
              p.mb-0 Permite actividades de bajo impacto, como el ecoturismo, la investigación científica y la producción agroecológica controlada, cuando son compatibles con las disposiciones ambientales.
      p.mb-5 El marco normativo colombiano establece disposiciones para incorporar la estructura ecológica principal en la planificación y el ordenamiento territorial: 
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img38.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Decreto 3600 de 2007 
            p.mb-0.text-center Establece disposiciones para incorporar la estructura ecológica principal en el ordenamiento del suelo rural y su consideración en los planes de ordenamiento territorial (POT). Estas disposiciones fueron compiladas en el Decreto 1077 de 2015 (Presidencia de la República de Colombia, 2007, 2015). 
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img39.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Determinantes ambientales 
            p.mb-0.text-center Los planes de ordenamiento territorial deben respetar las determinantes ambientales establecidas por las autoridades competentes, como las corporaciones autónomas regionales, especialmente aquellas relacionadas con la conservación y protección de los recursos naturales (Congreso de la República de Colombia, 1997). 
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Corredores biológicos y conectividad ecosistémica
      p La estructura ecológica principal integra espacios naturales cuya distribución en el territorio influye en sus relaciones ecológicas. Para comprender esta organización, se consideran los corredores biológicos y la conectividad ecosistémica, dos conceptos relacionados con la articulación de los hábitats y la conservación de los ecosistemas.
      p.mb-5 Estos conceptos permiten comprender las conexiones entre los espacios naturales del territorio:
      .bg-2
        .px-5
          .row.justify-content-center.align-items-center.cursor-pointer.mb-4.mb-md-4.mb-5
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-left")
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img40.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Corredores biológicos
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Corredores biológicos
                    p.mb-0 Son franjas de territorio que conectan áreas de importancia ecológica, como parques naturales y reservas, y contribuyen a disminuir el aislamiento de los hábitats.
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-right")
              .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador2 = false")
                .indicador--hover(v-if="mostrarIndicador2")
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img41.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Conectividad ecosistémica
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Conectividad ecosistémica
                    p.mb-0 Se refiere a las conexiones entre áreas naturales dentro de un paisaje, que permiten comprender las relaciones y la continuidad de los hábitats.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fragmentación del paisaje
      p La fragmentación del paisaje ocurre cuando un hábitat continuo se divide en parches aislados. Generalmente, se relaciona con actividades humanas, como la construcción de carreteras, la expansión urbana y la agricultura intensiva. Este proceso modifica la continuidad de los ecosistemas y puede afectar a las poblaciones que los habitan.
      p.mb-5 Para conocer la conectividad estructural y funcional, el intercambio genético y los efectos de la fragmentación sobre la biodiversidad, se invita a reproducir este pódcast:
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-3(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img42.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;La estructura ecológica principal y la conectividad del territorio&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img43.png" style="max-width: 510px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimientos técnicos para la gestión
      p.mb-5 La delimitación y gestión de la estructura ecológica principal requiere identificar las condiciones ambientales del territorio, evaluar la conectividad y establecer prioridades de conservación. Para ello, se emplean herramientas de análisis y seguimiento organizadas en cuatro fases técnicas. Las fases y los métodos correspondientes son:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Fases técnicas para la gestión de la estructura ecológica principal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Fase técnica
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Métodos comunes
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 1. Identificación y diagnóstico
                      td.ajuste-border-tabla.texto-left Caracterizar la base geomorfológica, hidrológica y biológica del territorio.
                      td.texto-left Sistemas de información geográfica (SIG), sensores remotos e índices de vegetación (NDVI).
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 2. Evaluación de conectividad
                      td.ajuste-border-tabla.texto-left Determinar el aislamiento de los parches de bosque o humedales.
                      td.texto-left Análisis de grafos y modelación de corredores por resistencia del paisaje (Circuitscape).
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 3. Priorización de áreas
                      td.ajuste-border-tabla.texto-left Clasificar los suelos según su valor ecosistémico y aptitud para conservación, restauración o uso sostenible.
                      td.texto-left Matrices de decisión multicriterio y evaluación de servicios ecosistémicos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 4. Implementación y monitoreo
                      td.ajuste-border-tabla.texto-left Ejecutar planes de manejo y evaluar su efectividad.
                      td.texto-left Indicadores de deforestación, riqueza de especies endémicas y calidad del agua.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El ordenamiento ecológico
          p.mb-5 El ordenamiento ecológico es una herramienta de planificación territorial que orienta el uso y la ocupación del suelo con criterios de conservación y aprovechamiento sostenible de los recursos naturales. Comprende la identificación de áreas protegidas, reservas forestales y otras categorías de manejo, así como el reconocimiento de las transformaciones ambientales causadas por actividades humanas. Los principales elementos del ordenamiento ecológico son:
          .row.align-items-center.mb-0
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img44.png", alt="" style="width: 320px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Áreas protegidas").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Son espacios geográficos delimitados para conservar los ecosistemas y sus funciones. En Colombia, las categorías de áreas protegidas se organizan mediante el Sistema Nacional de Áreas Protegidas (SINAP), conforme a sus objetivos de conservación (Presidencia de la República de Colombia, 2015a).
                .row(titulo="Reservas forestales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Son zonas públicas o privadas destinadas principalmente a conservar o recuperar la cobertura boscosa y los servicios hidrológicos. Entre ellas se encuentran las reservas establecidas por la Ley 2.ª de 1959 (Congreso de la República de Colombia, 1959).
                .row(titulo="Distritos de Manejo Integrado (DMI)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Son áreas protegidas destinadas a la preservación, restauración y uso sostenible de ecosistemas estratégicos. Su zonificación permite definir espacios para conservación, recreación y actividades productivas compatibles con los objetivos ambientales (Presidencia de la República de Colombia, 2015a).
                .row(titulo="Cambios de uso del suelo y degradación antrópica").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Los cambios de uso del suelo transforman áreas naturales en zonas agrícolas, ganaderas o de infraestructura. La degradación antrópica comprende daños causados por actividades humanas, como la deforestación, la tala selectiva y la erosión, que reducen la biodiversidad y los servicios ecosistémicos.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Suelos	
      p.mb-5 El suelo es un cuerpo natural dinámico compuesto por minerales, materia orgánica, agua y gases, que sustenta la vida vegetal. Su caracterización comprende los tipos de suelo, sus horizontes, propiedades y métodos de muestreo. También incluye procedimientos de aforo, análisis del agua y rotulado de muestras utilizados en las actividades de campo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos y características de suelos
      p Los suelos se clasifican según sus propiedades y horizontes diagnósticos. El Departamento de Agricultura de Estados Unidos (USDA) distingue doce órdenes, cuyas características permiten identificar diferencias en su formación, composición y condiciones ambientales. 
      p.mb-5 Los doce órdenes de suelos presentan las siguientes características:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Entisoles e inceptisoles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Son suelos jóvenes con poco desarrollo de horizontes. Los entisoles pueden presentar un desarrollo prácticamente inexistente, mientras que los inceptisoles tienen horizontes poco desarrollados.
            .row(titulo="Mollisoles y vertisoles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los mollisoles son suelos oscuros, ricos en materia orgánica y altamente fértiles, típicos de praderas. Los vertisoles son arcillosos, se expanden con la humedad y se agrietan al secarse.
            .row(titulo="Andisoles y aridisoles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los andisoles se desarrollan a partir de cenizas volcánicas y tienen alta capacidad de retención de fósforo. Los aridisoles son propios de climas áridos y presentan acumulación de sales o carbonatos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img45.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img46.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Alfisoles y ultisoles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Son suelos con acumulación de arcilla en el subsuelo, producto de procesos de lavado. Los ultisoles presentan mayor acidez y meteorización.
            .row(titulo="Oxisoles e histosoles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los oxisoles son suelos tropicales muy meteorizados, ricos en óxidos de hierro y aluminio. Los histosoles son suelos orgánicos, como las turberas, saturados de agua durante gran parte del año.
            .row(titulo="Espodosoles y gelisoles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los espodosoles son suelos ácidos, generalmente asociados con climas fríos, que acumulan materia orgánica y aluminio en el subsuelo. Los gelisoles presentan permafrost o terreno permanentemente congelado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Horizontes edáficos
      p.mb-5 Un perfil de suelo es una sección vertical que permite identificar sus horizontes. Cada capa presenta características relacionadas con la materia orgánica, los minerales y los procesos de formación del suelo (Portillo, 2023). Los principales horizontes que pueden conformar el perfil del suelo son:
      .bg-1
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img47.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Horizonte O. Capa orgánica
                p.mb-0.text-center Capa superficial formada por hojarasca y materia orgánica parcialmente descompuesta.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img48.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Horizonte A. Capa mineral superficial
                p.mb-0.text-center Contiene materia orgánica acumulada, presenta color oscuro y registra una elevada actividad biológica.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img49.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Horizonte E. Zona de lavado
                p.mb-0.text-center Horizonte de eluviación, generalmente claro, donde se pierden arcilla, hierro y materia orgánica.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img50.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Horizonte B. Zona de acumulación
                p.mb-0.text-center Recibe materiales procedentes de los horizontes superiores, mediante procesos de iluviación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img51.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Horizonte C. Material parental
                p.mb-0.text-center Comprende roca madre meteorizada o fragmentada, sin cambios químicos profundos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img52.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Horizonte R. Roca madre
                p.mb-0.text-center Corresponde a la roca consolidada que no ha sufrido meteorización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Propiedades del suelo
      p.mb-5 Las propiedades físicas y químicas permiten caracterizar la composición y el comportamiento del suelo. Entre ellas se encuentran la textura, la estructura, el pH, la salinidad y la disponibilidad de nutrientes. Las principales propiedades físicas y químicas del suelo son:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Propiedades físicas y químicas del suelo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Propiedades físicas
                      th.texto-left Propiedades químicas
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Textura: proporción de arena, limo y arcilla.
                      td.texto-left pH: grado de acidez o alcalinidad que influye en la disponibilidad de nutrientes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Estructura: agrupación de las partículas en agregados.
                      td.texto-left Capacidad de intercambio catiónico (CIC): capacidad para retener y liberar cationes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Densidad aparente: relación entre la masa de suelo seco y su volumen total.
                      td.texto-left Salinidad y conductividad eléctrica (CE): relacionadas con la concentración de sales disueltas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Porosidad: espacio ocupado por aire y agua.
                      td.texto-left Materia orgánica: aporte de carbono y nitrógeno.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Permeabilidad: capacidad para transmitir agua y aire.
                      td.texto-left Macro y micronutrientes: concentración de N, P, K, Ca, Mg, S, Fe, entre otros.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Métodos de análisis de suelo
          p Los análisis de suelo utilizan métodos físicos, químicos y biológicos para determinar sus características. La técnica seleccionada depende de la propiedad que se requiere evaluar y del objetivo del estudio.
          p.mb-5 Los métodos de análisis se clasifican según las propiedades evaluadas:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Métodos físicos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img53.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Métodos físicos
                  p.mb-0 Incluyen el método del hidrómetro de Bouyoucos o el de la pipeta para determinar la textura, y el método del cilindro de volumen conocido para medir la densidad aparente (Gómez Giraldo, 2013).
            .py-3.py-md-4(titulo="Métodos químicos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img54.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Métodos químicos
                  p.mb-0 Emplean extracciones con soluciones reactivas, como los métodos Bray u Olsen para determinar el fósforo y el acetato de amonio para analizar los cationes intercambiables del suelo (Gómez Giraldo, 2013).
            .py-3.py-md-4(titulo="Métodos biológicos y avanzados")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img55.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Métodos biológicos y avanzados
                  p.mb-0 Comprenden la medición de la respiración microbiana, mediante pruebas como Haney, y la secuenciación genética del ADN para caracterizar el microbioma del suelo, con metodologías como BeCrop, de Biome Makers.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de perforación y muestreo
      p.mb-5 La perforación y el muestreo permiten extraer muestras o estudiar el perfil del suelo. Según las condiciones del terreno y la profundidad requerida, se emplean técnicas manuales o mecánicas. Las principales técnicas utilizadas para la extracción de muestras son:
      .bg-2
        .px-5
          .row.justify-content-center.align-items-center.cursor-pointer.mb-4.mb-md-4.mb-5
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-left")
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img56.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Técnicas manuales
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Técnicas manuales
                    p.mb-0 Comprenden calicatas, como fosas de 1 × 1 × 1 m, y barrenos holandeses o helicoidales, empleados para estudiar el perfil y extraer muestras a diferentes profundidades.
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-right")
              .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador2 = false")
                .indicador--hover(v-if="mostrarIndicador2")
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img57.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Técnicas mecánicas
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Técnicas mecánicas
                    p.mb-0 Emplean equipos motorizados de rotación o percusión, con coronas de diamante o cucharas partidas (SPT), para estudios geotécnicos profundos o en suelos compactos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de aforos
      p.mb-5 Un aforo mide el caudal de una corriente hídrica: el volumen de agua que pasa por una sección en determinado tiempo. Los métodos se clasifican en directos e indirectos o continuos. Los principales métodos de aforo se clasifican de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aforo directo: volumétrico
                  p.mb-0 Consiste en medir el tiempo (t) que tarda una corriente en llenar un recipiente de volumen conocido (V). El caudal se calcula mediante Q = V/t. Es adecuado para caudales pequeños, inferiores a 10 L/s.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img58.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aforo directo: por velocidad
                  p.mb-0 Utiliza un molinete o correntómetro para medir la velocidad del agua en diferentes puntos y subsecciones del cauce. El caudal se calcula sumando el producto del área por la velocidad de cada subsección: Q = Σ (Aᵢ × Vᵢ).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img59.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aforo directo: con flotadores
                  p.mb-0 Es un método aproximado que consiste en medir el tiempo que tarda un objeto flotante en recorrer una distancia conocida. Permite estimar la velocidad superficial del agua en el cauce.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img60.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aforo directo: químico o por trazadores
                  p.mb-0 Consiste en introducir una sustancia de concentración conocida, como sal o rodamina, en la corriente hídrica. El caudal se determina a partir de la dilución del trazador registrada aguas abajo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img61.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aforo indirecto: estructuras hidráulicas
                  p.mb-0 Utiliza estructuras fijas, como vertederos y canaletas Parshall, que permiten determinar el caudal a partir de la altura del agua y las relaciones hidráulicas establecidas para cada estructura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img62.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aforo indirecto: estaciones limnimétricas y limnigráficas
                  p.mb-0 Emplea sensores o reglas graduadas para registrar el nivel del agua. Estos datos se convierten en valores de caudal mediante una curva de gasto previamente calibrada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img63.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características fisicoquímicas en aforos
      p.mb-5 Durante los aforos pueden medirse parámetros fisicoquímicos del agua mediante sondas multiparamétricas. Estos registros permiten caracterizar las condiciones de la corriente durante la medición del caudal. Los principales parámetros fisicoquímicos evaluados son:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img64.png', alt="" ).m-auto
                  h4.text-center Temperatura y pH
                  .caja-2_p
                    p.mb-0.text-center Permiten caracterizar las condiciones térmicas y el grado de acidez o alcalinidad del agua, relacionados con su equilibrio químico.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img65.png', alt="" ).m-auto
                  h4.text-center Conductividad eléctrica (CE)
                  .caja-2_p
                    p.mb-0.text-center Es un indicador relacionado con la concentración de sustancias disueltas. Se utiliza en el aforo químico mediante la inyección de sal.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img66.png', alt="" ).m-auto
                  h4.text-center Oxígeno disuelto (OD) y turbidez
                  .caja-2_p
                    p.mb-0.text-center Aportan información sobre la calidad ambiental del agua y la presencia de partículas en suspensión, incluidos los sedimentos transportados por la corriente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de toma de muestra en terreno y análisis
      p.mb-5 La toma y el análisis de muestras de agua permiten determinar sus características fisicoquímicas. Los procedimientos varían según la profundidad de recolección y los parámetros que se requiera evaluar. Las actividades comprenden la recolección de muestras y su posterior análisis:
      .bg-2
        .px-5
          .row.justify-content-center.align-items-center.cursor-pointer.mb-4.mb-md-4.mb-5
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-left")
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img67.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Toma de muestras
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Toma de muestras
                    p.mb-0 Se utilizan botellas lastradas, como Van Dorn o Niskin, para recolectar agua a profundidades específicas. También se emplean muestreadores integradores cuando se requiere determinar sedimentos suspendidos a lo largo de la columna de agua.
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-right")
              .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador2 = false")
                .indicador--hover(v-if="mostrarIndicador2")
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img68.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Técnicas de análisis
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Técnicas de análisis
                    p.mb-0 Comprenden mediciones in situ, como pH y oxígeno disuelto, y análisis de laboratorio, como espectrofotometría para nutrientes, cromatografía para contaminantes orgánicos y gravimetría para sólidos suspendidos totales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protocolos de rotulado de muestras
      p.mb-5 El rotulado garantiza la identificación, trazabilidad y cadena de custodia de las muestras de agua y suelo. Cada recipiente debe etiquetarse inmediatamente después de la recolección, con tinta indeleble. El rótulo de cada muestra debe contener la siguiente información:
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img69.png', alt="" ).m-auto
                  h4.text-center Identificación y ubicación
                  .caja-2_p
                    p.mb-0.text-center Código único de la muestra, nombre del proyecto o predio, sitio de monitoreo, coordenadas geográficas (GPS) y profundidad u horizonte del muestreo.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img70.png', alt="" ).m-auto
                  h4.text-center Registro de recolección
                  .caja-2_p
                    p.mb-0.text-center Fecha y hora exactas de la toma de muestra, junto con el nombre del técnico responsable del procedimiento.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img71.png', alt="" ).m-auto
                  h4.text-center Análisis y conservación
                  .caja-2_p
                    p.mb-0.text-center Tipo de análisis solicitado —físico, químico o microbiológico— y preservantes o condiciones de conservación aplicadas, como ácido nítrico o refrigeración a 4 °C, según corresponda.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Instrumental de precisión	
      p.mb-5 El instrumental de precisión permite obtener datos métricos, espaciales y dasométricos necesarios para caracterizar el territorio y los recursos forestales. Su utilización requiere seguir las especificaciones del fabricante y comprobar los parámetros de calibración o configuración, con el fin de reducir errores y garantizar la calidad de las mediciones realizadas en campo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Instrumental dasométrico y topográfico
      p.mb-5 La dasometría se encarga de medir árboles y masas forestales, considerando diámetros, alturas, espesores de corteza y volúmenes de madera. Por su parte, la topografía mide ángulos, distancias y altitudes para representar la superficie terrestre mediante planos y mapas. Los principales instrumentos utilizados en las mediciones dasométricas y topográficas son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Hipsómetros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img72.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Hipsómetros
              p.mb-0 Instrumentos ópticos o láser utilizados para medir la altura de los árboles y las pendientes del terreno. Su calibración requiere verificar el inclinómetro en ángulos conocidos de 0° y 45°, según las especificaciones del equipo.
        .py-3.py-md-4(titulo="Forcípulas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img73.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Forcípulas
              p.mb-0 Calibradores de gran tamaño que permiten medir el diámetro a la altura del pecho (DAP) de los árboles. Requieren comprobar el paralelismo entre sus brazos fijo y móvil para evitar errores de medición.
        .py-3.py-md-4(titulo="Cintas métricas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img74.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cintas métricas
              p.mb-0 Herramientas de lona, fibra de vidrio o acero utilizadas para medir distancias y circunferencias, mediante cintas diamétricas. Requieren comprobar posibles elongaciones por tensión física o deformaciones térmicas.
        .py-3.py-md-4(titulo="Brújulas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img75.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Brújulas
              p.mb-0 Dispositivos de orientación magnética que permiten determinar rumbos y azimuts. Para obtener direcciones verdaderas, se debe considerar la declinación magnética local, según las coordenadas geográficas de la zona de trabajo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Instrumental de posicionamiento espacial
      p.mb-5 El sistema de posicionamiento global (GPS) emplea receptores satelitales para la navegación y el registro de coordenadas de puntos, líneas y polígonos. Su utilización requiere configurar el sistema de referencia y comprobar los parámetros relacionados con la recepción y distribución de los satélites. Los parámetros críticos de configuración y verificación del GPS son:
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Sistema de referencia (datum)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe configurarse según la cartografía oficial del territorio. En Colombia se utiliza MAGNA-SIRGAS, mientras que WGS 84 constituye un sistema de referencia geodésico de alcance global.
            .row(titulo="Máscara de elevación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Generalmente, se configura en 15° para excluir satélites ubicados a baja elevación, cuyas señales pueden introducir errores por trayectorias múltiples.
            .row(titulo="Dilución de precisión de la posición (PDOP)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es un indicador relacionado con la geometría de los satélites utilizados para determinar una posición. El experto propone mantener valores inferiores a 4 como criterio de calidad geométrica de las mediciones.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img76.png", alt="" style="width: 280px").m-auto
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Normativa sobre seguridad y salud en el trabajo (SST)	
      p.mb-5 El trabajo en entornos naturales implica exposición a terrenos irregulares, condiciones ambientales adversas y diversos factores de riesgo. La seguridad y salud en el trabajo (SST) establece medidas para prevenir accidentes y enfermedades laborales, promover el autocuidado y garantizar condiciones seguras durante las actividades de campo, contribuyendo a reducir el ausentismo laboral.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetivos principales de SST
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img77.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p La seguridad y salud en el trabajo busca proteger la integridad física y el bienestar del personal mediante acciones preventivas y el cumplimiento de las disposiciones legales vigentes. Los principales objetivos de la seguridad y salud en el trabajo son:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Prevenir accidentes y enfermedades laborales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Garantizar espacios seguros y adecuados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Promover el autocuidado y la salud integral.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cumplir con la normatividad legal vigente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Responsabilidades clave
      p.mb-5 La prevención de riesgos laborales requiere la participación de empleadores y trabajadores. Cada uno tiene responsabilidades específicas para mantener condiciones seguras durante el desarrollo de las actividades. Las responsabilidades se distribuyen de la siguiente manera:
      .bg-2
        .px-5
          .row.justify-content-center.align-items-center.cursor-pointer.mb-4.mb-md-4.mb-5
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-left")
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img78.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Empleadores
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Empleadores
                    p.mb-0 Deben proporcionar elementos de protección personal, evaluar los riesgos laborales y capacitar al personal en las medidas de seguridad correspondientes.
            .col-lg-4.col-md-6.mb-3.mb-md-3(data-aos="flip-right")
              .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador2 = false")
                .indicador--hover(v-if="mostrarIndicador2")
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t1/img79.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                  h4.text-center.mb-0 Trabajadores
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center
                    h5.box___card_phote_h5.text-center Trabajadores
                    p.mb-0 Deben utilizar correctamente los equipos de seguridad, participar en las capacitaciones e informar oportunamente sobre los peligros identificados durante sus actividades.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sistema de gestión de seguridad y salud en el trabajo (SG-SST)
      .caja-5(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-5_p
            p En Colombia, el SG-SST organiza las medidas de prevención mediante un proceso desarrollado por etapas. Su implementación comprende políticas, actividades de capacitación y evaluaciones de riesgos (Presidencia de la República de Colombia, 2015). El sistema comprende los siguientes elementos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Políticas de seguridad y planes de emergencia.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Capacitaciones obligatorias para el personal.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evaluaciones periódicas de riesgos. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img80.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ergonomía y mecánica corporal
      p.mb-5 La ergonomía y la mecánica corporal contribuyen a prevenir lesiones musculoesqueléticas durante el levantamiento de cargas, los desplazamientos y las actividades prolongadas en campo. Su aplicación comprende las siguientes prácticas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Posturas ergonómicas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img81.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Posturas ergonómicas
              p.mb-0 Al levantar herramientas o muestras del suelo, se deben flexionar las rodillas, mantener la espalda alineada y aprovechar la fuerza de las piernas para manipular la carga.
        .py-3.py-md-4(titulo="Marcha en terrenos inclinados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img82.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Marcha en terrenos inclinados
              p.mb-0 Se recomienda mantener el centro de gravedad bajo, dar pasos cortos y firmes, y utilizar morrales con ajustes pectorales y lumbares para reducir la sobrecarga de la columna.
        .py-3.py-md-4(titulo="Pausas activas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img83.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Pausas activas
              p.mb-0 Se propone realizar estiramientos musculares de 5 a 10 minutos por cada 2 horas de marcha continua o digitación de datos en dispositivos móviles de captura.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gestión del riesgo biológico
      p.mb-5 Las actividades de campo pueden implicar contacto con animales, insectos, aguas contaminadas y vegetación que representan riesgos para la salud. Su prevención requiere identificar los peligros presentes y aplicar medidas de protección adecuadas. Los riesgos biológicos y las principales medidas preventivas comprenden:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img84.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Riesgos biológicos comunes
            p.mb-0.text-center Incluyen mordeduras o picaduras de animales ponzoñosos, como serpientes y escorpiones; picaduras de insectos vectores asociados con enfermedades como dengue, malaria y leishmaniasis; e infecciones por contacto con aguas contaminadas o vegetación urticante.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img85.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Métodos de protección
            p.mb-0.text-center Comprenden el uso de repelentes con DEET, según las indicaciones del fabricante, y la inspección previa de terrenos con vegetación densa mediante herramientas de apoyo. También se requiere portar un botiquín de primeros auxilios y seguir los protocolos médicos establecidos para la atención de emergencias.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de protección individual (EPI) y bioseguridad
      p.mb-5 Los elementos de protección individual reducen la exposición a peligros durante las actividades de campo. Su selección depende de los riesgos identificados e incluye equipos de seguridad, vestuario adecuado y procedimientos de limpieza y desinfección. Los principales elementos y medidas de protección son:
      .ajuste_final_tema
        .bg-slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Casco de seguridad
                    p.mb-0 Debe contar con barbuquejo de tres puntos para proteger contra la caída de ramas u objetos en zonas boscosas o terrenos escarpados.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img86.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Botas de seguridad
                    p.mb-0 Se utilizan botas de caña alta y suela antideslizante. En zonas húmedas o con presencia de serpientes, pueden complementarse con polainas de protección.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img87.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Ropa de trabajo técnica
                    p.mb-0 Comprende camisas de manga larga y pantalones resistentes al desgarro, como los elaborados con tejido #[i ripstop], además de protección contra la radiación ultravioleta (UV).
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img88.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Protocolos de bioseguridad
                    p.mb-0 Incluyen la limpieza y desinfección del calzado y las herramientas, como machetes, barrenos y tijeras de podar, con productos como alcohol al 70 % o amonios cuaternarios, según el protocolo aplicable, para reducir la dispersión de patógenos entre parcelas y ecosistemas.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img89.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t1/audios/audio-ej.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
