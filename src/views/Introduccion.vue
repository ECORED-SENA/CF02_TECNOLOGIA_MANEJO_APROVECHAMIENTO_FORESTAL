<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La valoración de los ecosistemas conforme a la normativa ambiental es fundamental para promover el desarrollo sostenible. Este proceso articula las disposiciones legales con el reconocimiento del valor intrínseco y funcional de la naturaleza, de manera que la biodiversidad y sus servicios ecosistémicos formen parte de la planificación territorial y de las decisiones sobre el uso de los recursos naturales.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 En este contexto, la legislación ambiental orienta la prevención, evaluación y compensación de las afectaciones derivadas de las actividades humanas. Su articulación con criterios científicos de conservación contribuye a proteger los ecosistemas y a fortalecer la responsabilidad de quienes intervienen en el territorio. Asimismo, el estudio de la biodiversidad permite conocer las condiciones, la diversidad y la vulnerabilidad de los hábitats.
          p.mb-0 El reconocimiento de la flora y la fauna, las especies endémicas y las interacciones ecológicas facilita la identificación de áreas prioritarias para la conservación, la restauración y el manejo productivo sostenible. Al integrar este conocimiento con la normativa vigente, la valoración ecosistémica aporta elementos para tomar decisiones fundamentadas, gestionar los riesgos ambientales y promover la resiliencia de las comunidades, mediante una gestión responsable del patrimonio natural a largo plazo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="max-width: 400px").m-auto
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
