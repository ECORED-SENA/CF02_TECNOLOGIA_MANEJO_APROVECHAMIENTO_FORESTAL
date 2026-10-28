export default {
  global: {
    Name: 'Caracterización ambiental y ordenamiento ecológico del territorio',
    Description:
      'Este componente aborda la caracterización biofísica y socioambiental del territorio mediante el reconocimiento de la biodiversidad, el muestreo de suelo y agua y el uso de herramientas cartográficas. Integra criterios de conectividad ecológica, capacidad de carga y normativa ambiental para orientar decisiones de conservación, manejo sostenible y ordenamiento del territorio en el contexto del desarrollo de sistemas agroforestales. ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Caracterización ambiental, muestreo de campo y ordenamiento ecológico del territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Biodiversidad: flora y fauna',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructura ecológica principal (EEP)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Suelos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instrumental de precisión	',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normativa sobre seguridad y salud en el trabajo (SST)',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Cartografía, interpretación espacial y gestión de intervenciones ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodologías de interpretación ambiental	',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias de intervención ambiental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estimación de cargas contaminantes y marco normativo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Límites Máximos Permisibles de Vertimientos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Cartografía y herramientas de sistemas de información geográfica (SIG)',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aforo',
      significado:
        'procedimiento utilizado para medir el caudal de una corriente hídrica, es decir, el volumen de agua que pasa por una sección durante un tiempo determinado.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'variabilidad de los seres vivos que comprende la diversidad genética, de especies y de ecosistemas presentes en un territorio.',
    },
    {
      termino: 'Carga contaminante',
      significado:
        'cantidad de un contaminante aportada al agua, suelo o atmósfera durante un intervalo de tiempo determinado.',
    },
    {
      termino: 'Conectividad ecosistémica',
      significado:
        'relación entre áreas naturales de un paisaje que favorece la continuidad de los hábitats y las interacciones ecológicas.',
    },
    {
      termino: 'Corredor biológico',
      significado:
        'franja de territorio que conecta áreas de importancia ecológica y contribuye a reducir el aislamiento de los hábitats.',
    },
    {
      termino: 'Escala cartográfica',
      significado:
        'relación proporcional entre una distancia representada en un mapa y su equivalente real en el terreno.',
    },
    {
      termino: 'Estructura ecológica principal (EEP)',
      significado:
        'red de espacios naturales y corredores ecológicos que contribuyen al mantenimiento de la biodiversidad y los servicios ecosistémicos del territorio.',
    },
    {
      termino: 'Fragmentación del paisaje',
      significado:
        'proceso mediante el cual un hábitat continuo se divide en áreas o parches aislados, generalmente como consecuencia de actividades humanas.',
    },
    {
      termino: 'Georreferenciación',
      significado:
        'procedimiento que permite asignar coordenadas geográficas a elementos del territorio mediante un sistema de referencia espacial.',
    },
    {
      termino: 'Horizonte edáfico',
      significado:
        'capa del perfil del suelo que presenta características particulares relacionadas con su composición y sus procesos de formación.',
    },
    {
      termino: 'Inventario botánico',
      significado:
        'levantamiento cualitativo y cuantitativo de la flora presente en un área determinada para caracterizar su biodiversidad, estructura y estado de conservación.',
    },
    {
      termino: 'Licenciamiento ambiental',
      significado:
        'procedimiento mediante el cual la autoridad ambiental competente evalúa y autoriza determinados proyectos, obras o actividades que pueden generar impactos ambientales significativos.',
    },
    {
      termino: 'Mitigación',
      significado:
        'conjunto de acciones orientadas a reducir la magnitud, duración o intensidad de los impactos ambientales que no pueden evitarse.',
    },
    {
      termino: 'Sistema de gestión de seguridad y salud en el trabajo (SG-SST)',
      significado:
        'proceso organizado por etapas que comprende políticas, capacitaciones y evaluaciones de riesgos para prevenir accidentes y enfermedades laborales.',
    },
    {
      termino: 'Sistema de información geográfica (SIG)',
      significado:
        'conjunto de equipos, programas informáticos, datos, metodologías y recursos humanos que permite recopilar, almacenar, analizar y representar información geográfica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centros para el Control y la Prevención de Enfermedades. (s. f.). Colombia: información de salud para viajeros.',
      link: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/colombia',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1959, 17 de enero). Ley 2 de 1959. Sobre economía forestal de la Nación y conservación de recursos naturales renovables.',
      link: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-2-1959.pdf',
    },
    {
      referencia:
        'Gómez Giraldo, J. C.. (2013). Manual de prácticas de campo y del laboratorio de suelos. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/handle/11404/2785',
    },
    {
      referencia:
        'InputWebb. (2025, 2 de febrero). Software GIS gratuito: Las mejores opciones para tus proyectos geoespaciales.',
      link: 'https://inputwebb.com/software-gis-gratuito/',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales. (2021). Protocolo de monitoreo y seguimiento del agua.',
      link: 'https://ideam.gov.co/nuestra-entidad/hidrologia/protocolo-de-monitoreo-y-seguimiento-del-agua',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi. (2021, 16 de junio). Resolución 370 de 2021. Por medio de la cual se establece el sistema de proyección cartográfica oficial para Colombia.',
      link: 'https://redgeodesica.igac.gov.co/documentos/resolucion_370_de_2021.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s. f.). Estructura ecológica en áreas urbanas.',
      link: 'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/estructura-ecologica-en-areas-urbanas/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2012). Política nacional para la gestión integral de la biodiversidad y sus servicios ecosistémicos (PNGIBSE).',
      link: 'https://www.minambiente.gov.co/wp-content/uploads/2022/07/3.-PNGIBSE.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015, 17 de marzo). Resolución 631 de 2015. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.',
      link: 'https://www.minambiente.gov.co/documento-normativa/resolucion-631-de-2015/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018, 18 de mayo). Resolución 883 de 2018. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas marinas y se dictan otras disposiciones.',
      link: 'https://www.minambiente.gov.co/documento-entidad/resolucion-883-de-2018/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021, 6 de julio). Resolución 699 de 2021. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales de aguas residuales domésticas tratadas al suelo y se dictan otras disposiciones.',
      link: 'https://www.minambiente.gov.co/documento-normativa/resolucion-0699-de-2021/',
    },
    {
      referencia:
        'Morales, P. A., Cardona, D., Álvarez, C. M., & Corredor, D. R.. (2020). Estructura ecológica principal para el ordenamiento territorial. En L. A. Moreno y G. I. Andrade (Eds.), Biodiversidad 2019: Estado y tendencias de la biodiversidad continental de Colombia. Instituto de Investigación de Recursos Biológicos Alexander von Humboldt.',
      link: 'https://reporte.humboldt.org.co/biodiversidad/2019/cap4/404/',
    },
    {
      referencia:
        'Naciones Unidas. (1992). Convenio sobre la Diversidad Biológica.',
      link: 'https://www.cbd.int/doc/legal/cbd-es.pdf',
    },
    {
      referencia:
        'Natural Resources Conservation Service. (s. f.). The twelve orders of soil taxonomy. U.S. Department of Agriculture.',
      link: 'https://www.nrcs.usda.gov/resources/education-and-teaching-materials/the-twelve-orders-of-soil-taxonomy',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). Trabajo de campo. En Inventario forestal nacional: Manual de campo.',
      link: 'https://www.fao.org/4/ae578s/AE578S04.htm',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (s. f.). Glosario. En Código Sanitario para los Animales Terrestres.',
      link: 'https://www.woah.org/fileadmin/Home/esp/Health_standards/tahc/current/es_glossaire.htm',
    },
    {
      referencia:
        'Portillo, G.. (2023, 16 de junio). Horizontes del suelo: estructura y factores. EcologíaVerde.',
      link: 'https://ecologiaverde.elperiodico.com/horizontes-del-suelo-estructura-y-factores-4453.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2007, 20 de septiembre). Decreto 3600 de 2007. Por el cual se reglamentan las disposiciones de las Leyes 99 de 1993 y 388 de 1997 relativas a las determinantes de ordenamiento del suelo rural y se adoptan otras disposiciones.',
      link: 'https://www.minvivienda.gov.co/normativa/decreto-3600-2007',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015a, 26 de mayo). Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo.',
      link: 'https://normograma.sena.edu.co/compilacion/docs/decreto_1072_2015.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015b, 26 de mayo). Decreto 1076 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
      link: 'https://normograma.sena.edu.co/compilacion/docs/decreto_1076_2015.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015c, 26 de mayo). Decreto 1077 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio.',
      link: 'https://normograma.sena.edu.co/compilacion/docs/decreto_1077_2015.htm',
    },
    {
      referencia:
        'Proyecto QGIS. (s. f.-a). Datos ráster. En Documentación de QGIS 3.44.',
      link: 'https://docs.qgis.org/3.44/es/docs/gentle_gis_introduction/raster_data.html',
    },
    {
      referencia:
        'Proyecto QGIS. (s. f.-b). Datos vectoriales. En Documentación de QGIS 3.44.',
      link: 'https://docs.qgis.org/3.44/es/docs/gentle_gis_introduction/vector_data.html',
    },
    {
      referencia:
        'Royal Botanic Gardens, Kew. (s. f.). Pueraria montana var. lobata. Plants of the World Online.',
      link: 'https://powo.science.kew.org/taxon/967441-1',
    },
    {
      referencia:
        'Salcedo, M.. (2025, 21 de junio). Flora. Enciclopedia Concepto.',
      link: 'https://concepto.de/flora/',
    },
    {
      referencia:
        'Vallejo Climent, P.. (2022, 27 de septiembre). 10 aplicaciones GIS en la nube para publicar mapas. MappingGIS.',
      link: 'https://mappinggis.com/2022/09/10-aplicaciones-gis-en-la-nube-para-publicar-mapas-en-la-web/',
    },
    {
      referencia:
        'Villarreal, H., Álvarez, M., Córdoba, S., Escobar, F., Fagua, G., Gast, F., Mendoza, H., Ospina, M., & Umaña, A. M.. (2006). Manual de métodos para el desarrollo de inventarios de biodiversidad (2.ª ed.). Instituto de Investigación de Recursos Biológicos Alexander von Humboldt.',
      link: 'https://sib.gob.ar/archivos/IAVH-00288.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
