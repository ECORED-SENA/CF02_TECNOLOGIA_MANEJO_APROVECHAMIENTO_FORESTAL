<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de conocimientos sobre caracterización ambiental y ordenamiento ecológico del territorio',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar los conocimientos adquiridos sobre biodiversidad, caracterización ambiental, suelos, cartografía, normativa ambiental y estrategias de intervención, mediante un cuestionario de selección múltiple que permita verificar la comprensión de los conceptos y procedimientos desarrollados en el componente formativo. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué nivel de biodiversidad describe las diferencias hereditarias entre individuos de una misma especie?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diversidad de especies de un territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diversidad genética entre individuos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diversidad de ecosistemas de una zona.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diversidad de hábitats de un paisaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes descripciones corresponde a la flora exótica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Especie cultivada para el consumo humano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Especie originaria de la región estudiada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Especie adaptada a condiciones de sequía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Especie introducida fuera de su área natural.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica permite registrar los organismos que tocan o cruzan una línea trazada en un terreno natural?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transectos trazados sobre el terreno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuadrantes delimitados sobre el suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calicatas excavadas dentro del terreno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Parcelas registradas en planos del área.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué característica de la estructura ecológica principal se relaciona con su capacidad para amortiguar perturbaciones ambientales, como las inundaciones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organización multiescalar del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funcionamiento sistémico de las áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resiliencia ante perturbaciones ambientales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Provisión de servicios ecosistémicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿En qué fase de gestión de la estructura ecológica principal se clasifican las zonas según su valor ecosistémico y aptitud para la conservación, restauración o uso sostenible?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Priorización de áreas para manejo ambiental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Identificación y diagnóstico del territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluación de conectividad entre hábitats.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Implementación y monitoreo de acciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué horizonte del suelo se caracteriza por la pérdida de arcilla, hierro y materia orgánica mediante procesos de lavado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Horizonte O, con acumulación orgánica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Horizonte B, con acumulación de minerales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Horizonte C, con material parental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Horizonte E, con lavado de materiales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Durante un aforo volumétrico, un recipiente de 24 litros tarda 4 segundos en llenarse. ¿Cuál es el caudal calculado mediante Q = V/t?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '4 litros por segundo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '6 litros por segundo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '8 litros por segundo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '12 litros por segundo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes conjuntos de datos permite identificar y ubicar una muestra durante su traslado al laboratorio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del recipiente, marca y volumen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pendiente del terreno, textura y pH.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Código de muestra, sitio y coordenadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cobertura vegetal, relieve y drenaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué instrumento se utiliza para determinar directamente el diámetro a la altura del pecho (DAP) de un árbol?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Brújula para orientar el levantamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hipsómetro para determinar la altura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Molinete para determinar la velocidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Forcípula para medir el diámetro del árbol.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Según las responsabilidades de seguridad y salud en el trabajo, ¿qué actividad corresponde al empleador?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Suministrar equipos de protección y capacitar al personal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Informar sobre peligros identificados durante las labores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar correctamente los equipos de seguridad recibidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Participar en las capacitaciones de seguridad programadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué técnica de análisis espacial permite cruzar información cartográfica sobre suelos, pendientes, cobertura vegetal e hidrología?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interpolación de variables ambientales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delimitación de áreas de influencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Superposición de capas temáticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estimación mediante índices espectrales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de coordenadas permite representar posiciones mediante valores X y Y expresados en metros?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Coordenadas geográficas expresadas en grados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coordenadas proyectadas expresadas en metros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Coordenadas geográficas expresadas en minutos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Coordenadas geográficas expresadas en segundos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Una intervención ambiental busca disminuir la intensidad de un impacto que no pudo evitarse. ¿A qué nivel de la jerarquía de impacto corresponde?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prevención de los efectos ambientales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mitigación de los impactos previstos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Corrección de los daños producidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compensación de los efectos residuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿A qué categoría pertenecen los acuerdos voluntarios de producción limpia (APL) y los pagos por servicios ambientales (PSA) en el contenido del componente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Criterios para analizar la calidad del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Categorías destinadas a protección estricta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnicas para adoptar prácticas ambientales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Métodos para medir dimensiones del terreno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué procedimiento corresponde a un método indirecto para estimar cargas contaminantes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar directamente el caudal de descarga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar aforos y muestreos en el terreno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Efectuar balances de materia con mediciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar factores sectoriales de emisión o vertido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la relación básica utilizada para estimar la tasa de carga contaminante en una descarga con caudal medible, considerando unidades compatibles?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Concentración × caudal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Concentración ÷ caudal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Concentración + caudal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Concentración − caudal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué disposición colombiana establece parámetros y valores límites máximos permisibles para vertimientos puntuales a cuerpos de aguas superficiales y sistemas de alcantarillado público?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución 883 de 2018.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolución 699 de 2021.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución 631 de 2015.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Decreto 1076 de 2015.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué estudio se requiere para solicitar una licencia ambiental y evaluar los impactos abióticos, bióticos y socioeconómicos de un proyecto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informe de caudales y aforos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estudio de impacto ambiental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Inventario de muestras de suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro de parámetros del GPS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cómo se organiza la información geográfica en el modelo de datos ráster de un sistema de información geográfica (SIG)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Matriz de celdas o píxeles espaciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Conjunto de líneas de un levantamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Base de coordenadas de un receptor GNSS.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Red de polígonos digitalizados en un mapa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'En la clasificación cartográfica desarrollada en el componente, ¿cómo se categoriza una escala de 1:50.000?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escala grande de alto detalle.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escala pequeña de detalle general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Escala topográfica de detalle local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Escala mediana de detalle moderado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
