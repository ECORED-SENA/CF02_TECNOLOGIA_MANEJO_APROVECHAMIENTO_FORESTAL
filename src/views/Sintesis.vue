<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo..
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual presenta la caracterización ambiental y el ordenamiento ecológico del territorio mediante dos ejes complementarios. El primero integra el reconocimiento de la biodiversidad, la estructura ecológica principal, el estudio del suelo y del agua, el uso de instrumentos de precisión y la seguridad y salud en el trabajo. Estos contenidos permiten caracterizar las condiciones del territorio y obtener información de campo. El segundo articula las metodologías de interpretación ambiental, las estrategias de intervención, la estimación de cargas contaminantes, los límites permisibles de vertimientos y las herramientas cartográficas y de sistemas de información geográfica. Su integración permite analizar la información territorial y orientar decisiones de conservación, manejo e intervención conforme a los requisitos ambientales.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
