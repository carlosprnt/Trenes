// Datos recopilados a 29-10-2026 a partir de fuentes públicas (BOE, Ministerio, Renfe, Adif, prensa).
// Escalas 0-3: gestion = tamaño/peso de organizaciones dirigidas; ferroviaria = experiencia previa en ferrocarril;
// tecnica = formación técnica pertinente para el puesto.
// vinculo: "directo" (trabajó a las órdenes de Puente o en su entorno inmediato), "politico" (cargo de confianza
// de otro gobierno/partido), "prensa" (vínculo solo alegado por prensa), "ninguno" (no documentado).
// judicial: "ninguna" | "archivada" | "investigado" | "condenado".
// Tipos de polémica: "judicial", "prensa" (alegación periodística), "politica" (crítica política/sindical), "hecho" (documentado).

window.FECHA_CORTE = "29 de octubre de 2026";

window.PERSONAS = [
  // ───────────── RENFE ─────────────
  {
    id: "heredia",
    nombre: "Álvaro Fernández Heredia",
    org: "renfe",
    cargo: "Presidente de Renfe-Operadora y de sus sociedades",
    desde: "14-01-2025",
    nombradoPor: "Consejo de Ministros a propuesta de Óscar Puente (RD 30/2025)",
    formacion: "Doctor ingeniero de Caminos (UPM), especialidad infraestructuras del transporte. Profesor y director de máster en la Universidad Europea.",
    trayectoria: [
      "Gerente de la EMT de Madrid (≈2015-2019), operador de autobuses con más de 10.000 empleados.",
      "Gerente de AUVASA, autobuses municipales de Valladolid (2019-2023), con Óscar Puente como alcalde. ≈450 empleados.",
      "Concejal de Más Madrid en el Ayuntamiento de Madrid (2023-2024).",
      "Secretario General de Movilidad Sostenible del Ministerio de Puente (marzo 2024 – enero 2025)."
    ],
    gestion: 3, ferroviaria: 0, tecnica: 3,
    vinculo: "directo",
    vinculoTxt: [
      "Dirigió AUVASA bajo la alcaldía de Puente y después fue alto cargo en su ministerio: vínculo profesional documentado.",
      "La prensa lo describe como hombre de confianza y amigo del ministro (caracterización periodística).",
      "No consta militancia en el PSOE; fue concejal de Más Madrid."
    ],
    judicial: "archivada",
    polemicas: [
      { tipo: "judicial", txt: "2018: investigado por una cuenta de Twitter 'no oficial' del Consorcio de Transportes cuando era gerente de la EMT. El juzgado archivó la causa en abril de 2018." },
      { tipo: "prensa", txt: "The Objective: habría colocado a personas de su entorno (Gálvez, Serrano, Vicent, Obrer) mediante concursos 'a medida'. El Gobierno respondió que fueron convocatorias públicas." },
      { tipo: "prensa", txt: "OKDiario: 28 fichajes directivos en 7 meses (≈2,5 M€) y 313.632 € en cuatro coches de alta gama. No verificado (Maldita lo marca como pendiente)." },
      { tipo: "politica", txt: "Tras Adamuz dijo en el Congreso que Renfe era 'una víctima más'. La Junta de Andalucía pidió su dimisión (29-04-2026)." },
      { tipo: "hecho", txt: "Octubre 2026, ya convocadas las elecciones: crea la 'Oficina del Presidente' y coloca bajo ella Auditoría, Cumplimiento y toda la seguridad (física, en la circulación y ciberseguridad)." }
    ],
    sueldo: { cifra: 189995, txt: "189.995 € brutos/año", anio: "2024 (cifra del puesto; aún sin dato publicado de 2025)", verificado: true },
    veredicto: "parcial",
    valoracion: "Formación técnica muy sólida y experiencia real dirigiendo una gran empresa pública de transporte urbano (EMT Madrid). Ninguna experiencia ferroviaria antes de presidir un operador de ≈4.500 M€ de ingresos con responsabilidad directa en seguridad. Su ascenso sigue una línea personal clara con Puente.",
    fuentes: [
      ["BOE RD 30/2025", "https://www.boe.es/boe/dias/2025/01/15/pdfs/BOE-A-2025-611.pdf"],
      ["CV (Real Instituto Elcano)", "https://media.realinstitutoelcano.org/wp-content/uploads/2025/02/alvaro-fernandez-heredia-cv-es.pdf"],
      ["El Confidencial Digital", "https://www.elconfidencialdigital.com/articulo/politica/oscar-puente-coloca-renfe-alto-cargo-etapa-como-alcalde-valladolid/20250114123652908971.html"],
      ["elDiario.es (archivo 2018)", "https://www.eldiario.es/madrid/querella-emt-twitter-consorcio-transportes_1_2170966.html"],
      ["The Objective (concursos)", "https://theobjective.com/economia/transporte/2025-10-24/presidente-renfe-entorno-puestos-directivos-concursos/"],
      ["The Objective (Oficina del Presidente)", "https://theobjective.com/economia/transporte/2026-10-14/renfe-oficina-presidente-direccion-elecciones/"],
      ["Renfe – retribuciones", "https://www.renfe.com/es/es/grupo-renfe/gobierno-corporativo-y-transparencia/transparencia/renfe-viajeros-sme-sa/retribuciones-autorizaciones-otros-datos-adicionales"]
    ]
  },
  {
    id: "galvez",
    nombre: "José Alfonso Gálvez Salinas",
    org: "renfe",
    cargo: "Director General de Negocios y Operaciones (nº 2 de facto)",
    desde: "Octubre 2025 (en Renfe desde marzo 2025)",
    nombradoPor: "Presidente de Renfe, tras concurso",
    formacion: "Licenciado en Ciencias Ambientales. Máster en Urbanismo (U. Granada) y en Planificación y Operación del Transporte Urbano (U. Pablo de Olavide). No es ingeniero.",
    trayectoria: [
      "Planificación de proyectos de tranvía y metro ligero (Córdoba, Granada, Sevilla).",
      "Jefe de Tráfico de AUVASA (2020-2023) y gerente de AUVASA desde marzo de 2023, sucediendo a Heredia.",
      "Director General de Estrategias de Movilidad del Ministerio de Puente (marzo 2024 – marzo 2025).",
      "Director de Explotación de Renfe (marzo 2025) y DG de Negocios y Operaciones (octubre 2025)."
    ],
    gestion: 1, ferroviaria: 1, tecnica: 1,
    vinculo: "directo",
    vinculoTxt: [
      "Trabajó en AUVASA durante la alcaldía de Puente y fue alto cargo de su ministerio.",
      "Sucedió a Heredia en AUVASA y le siguió a Renfe. La prensa lo califica de hombre de confianza de ambos.",
      "Militancia: no verificada."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "prensa", txt: "The Objective: los requisitos del concurso encajaban 'llamativamente' con su perfil." },
      { tipo: "politica", txt: "Vox preguntó por su nombramiento en el Congreso." }
    ],
    sueldo: { cifra: 140000, txt: "≥140.000 €/año (estimación)", anio: "Fuentes internas citadas por Vozpópuli", verificado: false },
    veredicto: "cuestionable",
    valoracion: "Su experiencia de gestión es en una empresa municipal pequeña (≈450 empleados) y en planificación de metro ligero. Antes de 2025 no había llevado operaciones de ferrocarril pesado, y ahora dirige todas las operaciones de Renfe. Encaja poco con la escala y el riesgo del puesto.",
    fuentes: [
      ["BOE nombramiento DG 2024", "https://boe.es/boe/dias/2024/03/14/pdfs/BOE-A-2024-4969.pdf"],
      ["Forbes", "https://forbes.es/nombramientos/425443/oscar-puente-ficha-a-dos-ex-altos-cargos-del-ayuntamiento-de-valladolid-para-su-ministerio-de-transportes/"],
      ["The Objective", "https://theobjective.com/economia/transporte/2025-10-24/presidente-renfe-entorno-puestos-directivos-concursos/"],
      ["Vozpópuli", "https://www.vozpopuli.com/economia/transporte/renfe-prepara-el-relevo-del-directivo-clave-en-la-contratacion-de-la-amiga-de-koldo-y-abalos.html"]
    ]
  },
  {
    id: "serrano",
    nombre: "Marta Serrano Balbuena",
    org: "renfe",
    cargo: "Directora del Área Técnica, Seguridad y Experiencia",
    desde: "Mayo 2025",
    nombradoPor: "Presidente de Renfe, tras concurso (el primero quedó desierto)",
    formacion: "Ingeniera de Caminos. Diploma UITP en gestión de transporte público.",
    trayectoria: [
      "Directora de Comunicación de la EMT de Madrid.",
      "Directora gerente de la EMT de València.",
      "Secretaria General de Transporte Terrestre del Ministerio de Puente (diciembre 2023 – abril 2025)."
    ],
    gestion: 2, ferroviaria: 1, tecnica: 2,
    vinculo: "directo",
    vinculoTxt: [
      "Fue alta cargo nombrada por Puente en el ministerio.",
      "The Objective la presenta como amiga de Heredia, con quien coincidió en el mundo EMT (alegación de prensa).",
      "Militancia: no verificada."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "prensa", txt: "Ganó el concurso de Renfe mientras se tramitaba su salida del ministerio (The Objective). Vox preguntó en el Congreso." },
      { tipo: "hecho", txt: "No está claro si conserva las funciones de seguridad tras la reorganización de octubre de 2026." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "parcial",
    valoracion: "Tiene experiencia real de gerencia (EMT València) y de alta administración del transporte. Su trayectoria en seguridad ferroviaria operativa es escasa para un área que lleva 'Seguridad' en el nombre.",
    fuentes: [
      ["Valencia Plaza", "https://valenciaplaza.com/marta-serrano-nombrada-gerente-emt"],
      ["CV (Alamys)", "https://www.alamys.org/wp-content/files_mf/1568126450CVMartaSerranoETM.pdf"],
      ["The Objective", "https://theobjective.com/economia/transporte/2025-10-24/presidente-renfe-entorno-puestos-directivos-concursos/"]
    ]
  },
  {
    id: "vicent",
    nombre: "José María Vicent García",
    org: "renfe",
    cargo: "Secretario General y del Consejo",
    desde: "27-07-2026",
    nombradoPor: "Presidente de Renfe, tras convocatoria (12 candidatos, 3 admitidos)",
    formacion: "Licenciatura en Derecho exigida por la plaza (no verificada de forma independiente). No es abogado del Estado.",
    trayectoria: [
      "Secretario General Técnico del Área de Medio Ambiente y Movilidad del Ayuntamiento de Madrid.",
      "Puestos en la Comunidad de Madrid (Sanidad, Dirección General de la Mujer, Salud Pública)."
    ],
    gestion: 2, ferroviaria: 0, tecnica: 1,
    vinculo: "prensa",
    vinculoTxt: [
      "Coincidió con Heredia en el Ayuntamiento de Madrid.",
      "No se le conoce ningún vínculo directo con Puente ni militancia."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "hecho", txt: "Por primera vez en al menos 25 años la plaza no exigía ser abogado del Estado." },
      { tipo: "prensa", txt: "El Español recoge 'indignación' interna: 'el puesto estaba dado desde el primer día'." },
      { tipo: "hecho", txt: "Sustituye a Joaquim Hortalà, que dimitió en junio de 2026 por discrepancias internas (Talgo, filial de autobuses)." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "parcial",
    valoracion: "Gestor con experiencia en la administración pública. Llega sin experiencia ferroviaria ni en derecho societario a un puesto jurídico que históricamente ocupaban abogados del Estado, y se rebajaron los requisitos para la convocatoria.",
    fuentes: [
      ["El Español (requisitos)", "https://www.elespanol.com/invertia/observatorios/movilidad/20260703/indignacion-renfe-primera-vez-no-necesario-abogado-optar-plaza-secretario-general/1003744307041_0.html"],
      ["El Español (nombramiento)", "https://www.elespanol.com/invertia/observatorios/movilidad/20260722/indignacion-renfe-nombramiento-nuevo-secretario-general-puesto-dado-primer-dia/1003744330665_0.html"],
      ["Merca2", "https://www.merca2.es/2026/07/22/renfe-nuevo-secretario-general-ex-madrid-2422086/"]
    ]
  },
  {
    id: "arostegui",
    nombre: "Elena Aróstegui",
    org: "renfe",
    cargo: "Directora de la Oficina del Presidente (jefa de gabinete)",
    desde: "Oficina creada en octubre de 2026",
    nombradoPor: "Presidente de Renfe",
    formacion: "Según la web de Renfe: ingeniera industrial (UPM y École Centrale de Nantes), PDG IESE y Executive MBA IE. Hay dudas sobre si esa ficha está bien asignada, así que no está verificada.",
    trayectoria: [
      "Consultoría, medios locales en Irún, Acciona Infraestructuras (2006-2016) y Cuerpo de Ingenieros de Caminos del Estado, según la misma ficha (no verificado).",
      "Puestos en los ayuntamientos de Irún y Madrid y en Presidencia del Gobierno (no verificado)."
    ],
    gestion: 1, ferroviaria: 0, tecnica: 2,
    vinculo: "ninguno",
    vinculoTxt: [
      "El secretario de Estado José Antonio Santano fue alcalde socialista de Irún, pero ninguna fuente la vincula con él.",
      "No hay vínculo documentado con Puente."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "hecho", txt: "Su oficina absorbe Auditoría Interna, Cumplimiento y la seguridad de Renfe (física, en la circulación y ciberseguridad)." },
      { tipo: "politica", txt: "Se critica que la reorganización se hiciera ya convocadas las elecciones y que la seguridad quede bajo el gabinete del presidente." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "sin-datos",
    valoracion: "No hay datos fiables suficientes. Si su biografía es la publicada, tiene un perfil técnico pertinente. El problema estructural es otro: la seguridad ferroviaria queda bajo un gabinete político.",
    fuentes: [
      ["The Objective (14-10-2026)", "https://theobjective.com/economia/transporte/2026-10-14/renfe-oficina-presidente-direccion-elecciones/"],
      ["The Objective (29-10-2026)", "https://theobjective.com/economia/transporte/2026-10-29/puente-otorga-control-seguridad-renfe/"],
      ["Renfe – información institucional", "https://grupo.renfe.com/es/es/gobierno-y-transparencia/informacion-institucional/renfe-operadora"]
    ]
  },
  {
    id: "montana",
    nombre: "Carles Montaña Montaña",
    org: "renfe",
    cargo: "Director de Emergencias Operativas y Seguridad",
    desde: "28-07-2026",
    nombradoPor: "Comité de dirección, tras convocatoria externa",
    formacion: "Periodista y consultor de comunicación (biografía autodeclarada).",
    trayectoria: [
      "≈30 años como consultor internacional de comunicación de crisis, corporativa y política.",
      "Ha trabajado en accidentes aéreos mortales (Kenyon International). Docente de comunicación de crisis (escuela UAM/El País)."
    ],
    gestion: 1, ferroviaria: 0, tecnica: 0,
    vinculo: "ninguno",
    vinculoTxt: ["No consta ningún vínculo político."],
    judicial: "ninguna",
    polemicas: [
      { tipo: "prensa", txt: "El Español: sorpresa y malestar interno por nombrar a un consultor de comunicación para el área de seguridad, siete meses después de Adamuz." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "cuestionable",
    valoracion: "Es un perfil sólido para la gestión y la comunicación de crisis. No es un experto en seguridad ferroviaria operativa, y el puesto lleva 'Seguridad' en su denominación.",
    fuentes: [
      ["El Español", "https://www.elespanol.com/invertia/observatorios/movilidad/20260730/renfe-nombra-nuevo-director-emergencias-operativas-consultor-comunicacion-empresas/1003744338310_0.html"],
      ["Bio Kenyon International", "https://kenyoninternational.com/about-us/our-team/carles-montana"]
    ]
  },
  {
    id: "vicente",
    nombre: "Miguel Ángel Vicente",
    org: "renfe",
    cargo: "Director General de Renfe Viajeros",
    desde: "Julio 2025",
    nombradoPor: "Órganos de gobierno de Renfe",
    formacion: "Ingeniero industrial.",
    trayectoria: [
      "Más de 20 años en Renfe: producción, planificación operativa y dirección técnica.",
      "Director técnico y de operaciones de Renfe Viajeros antes del ascenso."
    ],
    gestion: 2, ferroviaria: 3, tecnica: 3,
    vinculo: "ninguno",
    vinculoTxt: ["No consta ningún vínculo político."],
    judicial: "ninguna",
    polemicas: [
      { tipo: "hecho", txt: "Sustituye a Rafael Cortés (procedente de Avanza), que salió a los nueve meses." }
    ],
    sueldo: { cifra: null, txt: "No publicado individualmente", anio: "", verificado: false },
    veredicto: "cualificado",
    valoracion: "Ferroviario de carrera. Es el perfil más experimentado en ferrocarril de la primera línea de Renfe.",
    fuentes: [
      ["elEconomista", "https://www.eleconomista.es/transportes-turismo/noticias/13467988/07/25/renfe-sustituye-al-director-de-viajeros-rafael-cortes-nueve-meses-despues-de-ficharlo.html"],
      ["Forbes", "https://forbes.es/nombramientos/765382/renfe-vuelve-a-cambiar-a-los-responsables-de-sus-negocios-de-viajeros-y-de-mercancias/"]
    ]
  },
  {
    id: "leza",
    nombre: "Imanol Leza",
    org: "renfe",
    cargo: "Director General de Renfe Mercancías",
    desde: "Julio 2025",
    nombradoPor: "Órganos de gobierno de Renfe",
    formacion: "No verificada.",
    trayectoria: [
      "Más de 30 años en movilidad, infraestructuras y tecnología.",
      "Puestos directivos en Euskotren, Eptisa Cinsa y el Gobierno Vasco.",
      "Responsable del mercado francés de Renfe antes del nombramiento."
    ],
    gestion: 2, ferroviaria: 2, tecnica: 1,
    vinculo: "ninguno",
    vinculoTxt: ["No consta ningún vínculo con Puente."],
    judicial: "ninguna",
    polemicas: [
      { tipo: "hecho", txt: "Es el quinto responsable de Renfe Mercancías en diez años." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "cualificado",
    valoracion: "Tiene experiencia directiva en un operador ferroviario regional (Euskotren) y en el negocio internacional de Renfe.",
    fuentes: [
      ["Ara", "https://en.ara.cat/society/changes-at-renfe-s-top-management-the-heads-of-passenger-and-freight-services-have-been-replaced_1_5447920.html"]
    ]
  },
  {
    id: "bosch",
    nombre: "Ismael Bosch",
    org: "renfe",
    cargo: "Consejero de Renfe Viajeros",
    desde: "12-08-2025",
    nombradoPor: "Grupo Renfe / Ministerio",
    formacion: "No consta formación técnica relacionada con el transporte.",
    trayectoria: [
      "Responsable de redes sociales del Ayuntamiento de Valladolid (2015-2018).",
      "Jefe de gabinete de Óscar Puente en la alcaldía.",
      "Exmiembro del Comité Federal del PSOE."
    ],
    gestion: 0, ferroviaria: 0, tecnica: 0,
    vinculo: "directo",
    vinculoTxt: [
      "Fue jefe de gabinete de Puente en Valladolid: vínculo directo documentado.",
      "Fue miembro del Comité Federal del PSOE."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "prensa", txt: "El Español: 'Puente coloca al community manager del Ayuntamiento de Valladolid como consejero de la filial de Renfe'." }
    ],
    sueldo: { cifra: 11994, txt: "Hasta 11.994 €/año en dietas", anio: "Tope para consejeros de filiales del grupo 1 de Renfe (≈1.000-1.090 € por reunión, máx. 11)", verificado: true },
    veredicto: "cuestionable",
    valoracion: "No se le conoce experiencia en transporte, ferrocarril ni gestión empresarial. Es el caso más claro de nombramiento por proximidad personal y política al ministro.",
    fuentes: [
      ["El Español", "https://www.elespanol.com/castilla-y-leon/region/valladolid/20250820/puente-coloca-community-manager-ayuntamiento-valladolid-consejero-filial-renfe/1003743893579_0.html"],
      ["Valencia Plaza", "https://valenciaplaza.com/valenciaplaza/empresas1/renfe-nombra-tres-nuevos-consejeros-en-su-filial-de-viajeros"],
      ["Vozpópuli (dietas)", "https://www.vozpopuli.com/economia/transporte/los-consejeros-de-renfe-cobran-1000-euros-por-reunion-con-las-incidencias-disparadas.html"]
    ]
  },

  // ───────────── ADIF ─────────────
  {
    id: "marco",
    nombre: "Luis Pedro Marco de la Peña",
    org: "adif",
    cargo: "Presidente de Adif y Adif Alta Velocidad",
    desde: "17-09-2024",
    nombradoPor: "Consejo de Ministros a propuesta de Óscar Puente",
    formacion: "Ingeniero de Caminos, Canales y Puertos (Universidad de Cantabria, 1993).",
    trayectoria: [
      "Jefe de obra en Ferrovial (1994-1999) y otros puestos en constructoras privadas.",
      "Director general de Euskal Trenbide Sarea, el gestor de la red ferroviaria vasca (2009-2013).",
      "Viceconsejero de Infraestructuras y Transportes del Gobierno Vasco (2020-2024), en la cuota del PSE-EE."
    ],
    gestion: 3, ferroviaria: 3, tecnica: 3,
    vinculo: "politico",
    vinculoTxt: [
      "Lo propuso Puente. No hay otro vínculo documentado con el ministro.",
      "Fue viceconsejero a propuesta del consejero socialista Iñaki Arriola. Militancia: no verificada.",
      "No consta relación con Ábalos, Koldo, Cerdán ni Pardo de Vera."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "politica", txt: "CCOO (enero de 2026) y las víctimas de Adamuz piden su dimisión. En el Senado negó 'mala praxis' y descartó dimitir (27-04-2026)." },
      { tipo: "hecho", txt: "Dijo que dimitiría 'desde el minuto cero' si se le atribuía responsabilidad en Adamuz. La CIAF apunta a una rotura de carril, es decir, a la infraestructura." },
      { tipo: "politica", txt: "Tras el accidente de Urda (28-10-2026) se multiplican las peticiones de cese. La querella de Vox va contra el puesto de mando de Atocha, no contra él por su nombre." },
      { tipo: "hecho", txt: "Bruselas cuestiona la falta de independencia de la cúpula de Adif respecto del Ministerio." }
    ],
    sueldo: { cifra: 195263, txt: "195.263 € brutos/año", anio: "2025 (Portal de Transparencia vía Sueldos Públicos, 1 fuente)", verificado: true },
    veredicto: "cualificado",
    valoracion: "Es el perfil técnico más completo de las dos cúpulas: ingeniero de Caminos, dirigió un gestor de red ferroviaria y tuvo cargos de gestión pública. Su nombramiento fue político y sin concurso. Tras dos accidentes masivos en nueve meses, su posición es muy frágil.",
    fuentes: [
      ["Ministerio – nota de nombramiento", "https://www.transportes.gob.es/ministerio/comunicacion/sala-prensa/mar-17092024-1833"],
      ["Perfil Adif AV", "https://www.adifaltavelocidad.es/w/luis-pedro-marco-de-la-pe%C3%B1a"],
      ["Diario del Puerto (viceconsejero)", "https://www.diariodelpuerto.com/maritimo/arriola-confia-a-luis-pedro-marco-de-la-pena-la-politica-de-transportes-del-gobierno-vasco-LSGD16002665187772760"],
      ["El Español (Senado)", "https://www.elespanol.com/invertia/observatorios/movilidad/20260427/presidente-adif-reitera-no-mala-praxis-adamuz-confia-analisis-carril-conocer-verdad/1003744224153_0.amp.html"],
      ["Sueldos Públicos", "https://www.sueldospublicos.com/tag/luis-pedro-marco-pena"],
      ["Infobae (sueldo 2024)", "https://www.infobae.com/espana/2026/01/26/cuanto-cobra-el-presidente-de-adif-pedro-marco-de-la-pena-es-uno-de-los-cargos-mejor-pagados-del-estado/"]
    ]
  },
  {
    id: "bandera",
    nombre: "Ángel García de la Bandera",
    org: "adif",
    cargo: "Director General de Operaciones y Explotación (circulación, centros de control y mantenimiento)",
    desde: "20-03-2026",
    nombradoPor: "Presidente de Adif, tras convocatoria INT26/01",
    formacion: "Ingeniero de Montes (U. Córdoba) y doctor en Geografía (U. Sevilla), según Adif.",
    trayectoria: [
      "En Adif desde 2010: gestión de tráfico en Valencia, director de Gestión de Capacidad (2018-2022), subdirector de Estaciones Sur (2022-2024) y director de Tráfico (2024-2026).",
      "Director gerente de Ferrocarrils de la Generalitat Valenciana (2015-2017), con el Gobierno de Ximo Puig."
    ],
    gestion: 2, ferroviaria: 3, tecnica: 2,
    vinculo: "prensa",
    vinculoTxt: [
      "The Objective afirma, con fuentes anónimas, que Puente 'impulsó su ascenso' y que en la plantilla se le ve 'afín al Ministerio'.",
      "Fue gerente de FGV durante un gobierno del PSPV. No consta militancia."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "prensa", txt: "Fuentes internas tachan las convocatorias de 'teledirigidas' y le atribuyen poca experiencia en mantenimiento." },
      { tipo: "hecho", txt: "Los centros de control dependen de él. En Urda, el puesto de mando de Atocha ordenó reanudar la marcha tras la caída del LZB. No consta que él diera ni participara en esa orden." },
      { tipo: "hecho", txt: "Sustituye a Raúl Míguez, cesado en enero de 2026 por la crisis de Rodalies (exmano derecha de Pardo de Vera, que después fue recolocado en Adif)." }
    ],
    sueldo: { cifra: 98130, txt: "≈98.130 € + variable (referencia)", anio: "Banda de convocatorias de dirección de Adif (74.104 € de base + 24.026 € de complemento). No verificado para 2026", verificado: false },
    veredicto: "cualificado",
    valoracion: "Tiene mucha experiencia ferroviaria en tráfico y capacidad, y ha dirigido un operador ferroviario (FGV). Es menos sólido en mantenimiento de infraestructura. Las críticas apuntan a la afinidad política de su ascenso, no a su currículum.",
    fuentes: [
      ["Adif – convocatoria INT26/01", "https://www.adif.es/en/w/int26/01-convocatoria-de-director-general-de-operaciones-y-explotaci%C3%B3n"],
      ["elEconomista", "https://www.eleconomista.es/transportes-turismo/noticias/13834426/03/26/adif-nombra-a-angel-de-la-bandera-como-nuevo-director-general-de-operaciones-y-explotacion.html"],
      ["Vía Libre (ficha)", "https://vialibre-ffe.com/ficha_prota.asp?cod=953"],
      ["The Objective (20-03-2026)", "https://theobjective.com/economia/transporte/2026-03-20/adif-cupula-puente-accidente-adamuz/"],
      ["The Objective (29-10-2026)", "https://theobjective.com/gente/2026-10-29/quien-es-angel-garcia-de-la-bandera-el-alto-cargo-de-adif-al-que-ahora-todos-miran-con-lupa-tras-el-accidente-de-tren-de-toledo/"]
    ]
  },
  {
    id: "llamas",
    nombre: "Luis Llamas Martínez",
    org: "adif",
    cargo: "DG de Planificación, Proyectos y Construcción; DG de Adif AV",
    desde: "Marzo 2025",
    nombradoPor: "Presidente de Adif",
    formacion: "No verificada.",
    trayectoria: [
      "En el sector ferroviario desde 2000 (consultor en Tifsa).",
      "Ha dirigido proyectos internacionales como el AVE Haramain (Arabia Saudí)."
    ],
    gestion: 2, ferroviaria: 3, tecnica: 2,
    vinculo: "ninguno",
    vinculoTxt: ["No consta ningún vínculo político."],
    judicial: "ninguna",
    polemicas: [
      { tipo: "prensa", txt: "The Objective (1 fuente): su hermano, Juan José Llamas, fue nombrado coordinador de Adif AV en abril de 2025." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "cualificado",
    valoracion: "Perfil técnico y ferroviario de carrera, adecuado para el puesto.",
    fuentes: [
      ["Adif – nuevas direcciones generales", "https://www.adif.es/w/adif-finaliza-el-proceso-de-reestructuraci%C3%B3n-de-su-organigrama-con-el-nombramiento-de-cinco-direcciones-generales"],
      ["Trenvista", "https://www.trenvista.net/en/news/flash/new-adif-general-managers/"],
      ["The Objective", "https://theobjective.com/economia/transporte/2025-05-06/encargado-alta-velocidad-adif-hermano-director-general/"]
    ]
  },
  {
    id: "gonzalez",
    nombre: "Elena González Gómez",
    org: "adif",
    cargo: "DG de Viajeros y Desarrollo de Negocio",
    desde: "12-12-2025",
    nombradoPor: "Presidente de Adif, tras concurso",
    formacion: "Doctora ingeniera de Caminos (UPM).",
    trayectoria: [
      "En Adif desde 2004.",
      "Directora de Operaciones de Integración y Grupo Societario (2017-2025)."
    ],
    gestion: 2, ferroviaria: 3, tecnica: 3,
    vinculo: "ninguno",
    vinculoTxt: ["No consta ningún vínculo político."],
    judicial: "ninguna",
    polemicas: [
      { tipo: "hecho", txt: "Sustituye a Juan Pablo Villanueva, destituido en julio de 2025 y señalado en prensa por presuntos amaños de contratos en 2019-2021." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "cualificado",
    valoracion: "Técnica de carrera con larga experiencia en la casa. Su perfil es adecuado.",
    fuentes: [
      ["Adif", "https://www.adif.es/w/dg-viajeros-desarrollo-negocio"],
      ["The Objective", "https://theobjective.com/economia/transporte/2025-12-21/adif-cupula-directiva-amanos/"]
    ]
  },
  {
    id: "casillas",
    nombre: "Concepción Casillas Martín",
    org: "adif",
    cargo: "DG corporativa de Gestión de Personas, Estrategia y Seguridad",
    desde: "2024 (funciones ampliadas en marzo de 2025)",
    nombradoPor: "Presidencia de Adif",
    formacion: "Licenciada en Derecho. Máster en asesoría jurídica de empresas y curso superior de seguridad integral (UPM).",
    trayectoria: [
      "En Renfe y Adif desde 1996.",
      "Directora de Planificación, Organización y Administración (2018-2024)."
    ],
    gestion: 2, ferroviaria: 2, tecnica: 1,
    vinculo: "prensa",
    vinculoTxt: [
      "Articulo14 y otros medios la describen como 'militante socialista de Ávila' (no verificado).",
      "El Debate le atribuye un papel en la llegada de Pardo de Vera (alegación de prensa).",
      "Sustituyó a Michaux Miranda, citado como imputado en el caso Koldo."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "prensa", txt: "The Objective: la colocación de su hijo como jefe de área de estaciones en Madrid y Yeda (Arabia Saudí)." }
    ],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "parcial",
    valoracion: "Tiene una larga experiencia en gestión de recursos humanos y en lo jurídico dentro del sector. Le falta perfil técnico en seguridad ferroviaria, que es parte del nombre de su dirección.",
    fuentes: [
      ["Vía Libre (ficha)", "https://vialibre-ffe.com/ficha_prota.asp?cod=988"],
      ["Articulo14", "https://www.articulo14.es/economia/concepcion-casillas-una-directiva-de-la-casa-vinculada-al-psoe-para-defender-la-seguridad-de-adif-20260126.html"],
      ["The Objective (hijo)", "https://theobjective.com/economia/transporte/2025-07-30/adif-hijo-directora-recursos-humanos-jefe-estaciones-arabia-saudi/"]
    ]
  },
  {
    id: "cepeda",
    nombre: "Manuel Martínez Cepeda",
    org: "adif",
    cargo: "DG corporativo Financiero, Compras y Sistemas",
    desde: "Marzo 2025",
    nombradoPor: "Presidente de Adif",
    formacion: "Licenciado en Ciencias Económicas y Empresariales (UCM). Auditor.",
    trayectoria: [
      "Más de 30 años en Renfe y Adif.",
      "Director de Sistemas Contables (2000-2004), de Tesorería y Contabilidad (2005-2020) y de Operaciones Comerciales (2020-2025)."
    ],
    gestion: 2, ferroviaria: 3, tecnica: 3,
    vinculo: "ninguno",
    vinculoTxt: ["No consta ningún vínculo político."],
    judicial: "ninguna",
    polemicas: [],
    sueldo: { cifra: null, txt: "No publicado", anio: "", verificado: false },
    veredicto: "cualificado",
    valoracion: "Perfil financiero de carrera dentro del sector, adecuado para el puesto.",
    fuentes: [["Vía Libre (ficha)", "https://vialibre-ffe.com/ficha_prota.asp?cod=896"]]
  },
  {
    id: "almenar",
    nombre: "Salvador Almenar",
    org: "adif",
    cargo: "Director de Gabinete de Presidencia, Comunicación y RR. II. (de él depende Seguridad en la Circulación)",
    desde: "Septiembre 2025 (director de Comunicación desde octubre de 2024)",
    nombradoPor: "Presidente de Adif",
    formacion: "Periodista (URJC).",
    trayectoria: [
      "Director del Diari La Veu (2017-2019).",
      "Jefe de gabinete de la Conselleria de Justicia (2020-2022) y director general de Interior de la Generalitat Valenciana (2022-2023), con Ximo Puig.",
      "Asesor de la delegada del Gobierno en la Comunitat Valenciana, Pilar Bernabé (PSPV)."
    ],
    gestion: 1, ferroviaria: 0, tecnica: 0,
    vinculo: "politico",
    vinculoTxt: [
      "Fue alto cargo de un gobierno del PSPV y asesor de una delegada del Gobierno socialista: vínculo político documentado.",
      "The Objective lo sitúa 'muy vinculado al entorno de Puente' (1 fuente)."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "judicial", txt: "El Colegio de Periodistas de Andalucía recurrió su proceso de selección ante lo contencioso-administrativo (exigía nivel C2 de una lengua cooficial). No es una causa penal." },
      { tipo: "prensa", txt: "Técnicos de Adif rechazan que la Seguridad en la Circulación dependa de un periodista (The Objective)." },
      { tipo: "prensa", txt: "Según The Objective, depende de él Ignacio Zaldívar, investigado en el caso Koldo, que sigue trabajando en Adif." }
    ],
    sueldo: { cifra: 104086, txt: "104.086 €/año (dotación de la plaza)", anio: "Plaza de director de Comunicación de Adif en 2024 (El Debate)", verificado: true },
    veredicto: "cuestionable",
    valoracion: "Como responsable de comunicación su perfil encaja. Como superior jerárquico de la Seguridad en la Circulación no tiene ninguna formación ni experiencia ferroviaria, y es una de las críticas más repetidas tras Adamuz y Urda.",
    fuentes: [
      ["Dircomfidencial", "https://dircomfidencial.com/comunicacion/adif-nombra-director-de-comunicacion-a-un-ex-alto-cargo-del-gobierno-valenciano-20241008-1128/"],
      ["Valencia Plaza", "https://valenciaplaza.com/valenciaplaza/comunitat-valenciana1/el-valenciano-salva-almenar-asciende-a-jefe-de-gabinete-de-adif"],
      ["The Objective (seguridad)", "https://theobjective.com/economia/transporte/2026-02-12/expertos-adif-periodista-responsable-seguridad/"],
      ["The Objective (Zaldívar)", "https://theobjective.com/economia/transporte/2026-04-10/exdirectivo-salpicado-jesica-mano-derecha-adif/"],
      ["El Debate (plaza)", "https://www.eldebate.com/economia/20241008/adif-adapta-plaza-director-comunicacion-poder-fichar-alguien-cercano-ximo-puig_233702.html"]
    ]
  },
  {
    id: "villar",
    nombre: "María Dolores Villar",
    org: "adif",
    cargo: "Secretaria General (elegida provisionalmente)",
    desde: "27-10-2026",
    nombradoPor: "Presidente de Adif, tras convocatoria exprés (16-10 a 21-10)",
    formacion: "No verificada.",
    trayectoria: [
      "Coordinadora de Asuntos Jurídicos de la Representación Permanente de España ante la UE (hasta agosto de 2026).",
      "Sustituye a Irene Bonet Tous, abogada del Estado, que se marcha al sector privado."
    ],
    gestion: 1, ferroviaria: 0, tecnica: 2,
    vinculo: "ninguno",
    vinculoTxt: ["No consta ningún vínculo político."],
    judicial: "ninguna",
    polemicas: [
      { tipo: "politica", txt: "Relevo hecho a semanas de las elecciones del 29-N, con una convocatoria de cinco días (The Objective, 1 fuente)." }
    ],
    sueldo: { cifra: 131368, txt: "≈131.368 €/año (referencia)", anio: "Convocatoria antigua del puesto: 82.105 € + 49.263 € de complemento. No verificado", verificado: false },
    veredicto: "sin-datos",
    valoracion: "Tiene experiencia jurídica en la administración europea. No hay datos suficientes para valorar más.",
    fuentes: [
      ["The Objective", "https://theobjective.com/economia/transporte/2026-10-26/adif-secretario-general-semanas-elecciones/"],
      ["Demócrata", "https://www.democrata.es/europa/sonsoles-centeno-vuelve-administracion-como-coordinadora-juridica-espana-ue/"]
    ]
  },

  // ───────────── MINISTERIO ─────────────
  {
    id: "puente",
    nombre: "Óscar Puente Santiago",
    org: "ministerio",
    cargo: "Ministro de Transportes y Movilidad Sostenible (en funciones de campaña; cabeza de lista del PSOE por Valladolid el 29-N)",
    desde: "Noviembre 2023",
    nombradoPor: "Presidente del Gobierno",
    formacion: "Licenciado en Derecho (U. Valladolid).",
    trayectoria: [
      "Abogado (1995-2015). Militante del PSOE desde 1990.",
      "Alcalde de Valladolid (2015-2023). Secretario general del PSOE de la provincia de Valladolid.",
      "Diputado desde julio de 2023 y ministro desde noviembre de 2023."
    ],
    gestion: 2, ferroviaria: 0, tecnica: 0,
    vinculo: "directo",
    vinculoTxt: [
      "Es el centro de la red: propone a los presidentes de Renfe y Adif y nombra a la cúpula del ministerio.",
      "Al menos cuatro altos cargos del grupo Renfe vienen de su etapa en Valladolid o de su ministerio."
    ],
    judicial: "ninguna",
    polemicas: [
      { tipo: "politica", txt: "Víctimas de Adamuz, CSIF y la oposición piden su dimisión. Tras Urda atribuye el accidente a una 'decisión humana inexplicable' del centro de control de Adif y descarta dimitir." },
      { tipo: "judicial", txt: "Vox ha presentado una querella contra él por Urda. Es una querella de un partido, no una imputación judicial." },
      { tipo: "politica", txt: "Un senador del PP: 'Lo único que funciona en Adif, Renfe y el ministerio son los enchufes'." }
    ],
    sueldo: { cifra: 81837, txt: "81.837 € brutos/año", anio: "2024 (Portal de Transparencia). Estimación propia para 2026: ≈85.100 €", verificado: true },
    veredicto: "na",
    valoracion: "Es un cargo político electo, así que no se le aplica el criterio de idoneidad técnica. Su responsabilidad es política: elegir y supervisar a las cúpulas de Renfe y Adif.",
    fuentes: [
      ["La Moncloa – biografía", "https://www.lamoncloa.gob.es/gobierno/Paginas/biografias-xv-legislatura/ministro-oscar-puente.aspx"],
      ["Crónica Económica (sueldo)", "https://cronicaeconomica.com/salarios-de-altos-cargos"],
      ["El Español (candidatura)", "https://www.elespanol.com/alicante/20261009/oscar-puente-descarta-ir-alicante-entenderia-mal-no-encabezara-lista-valladolid/1003744415343_0.html"],
      ["elDiario.es (Urda)", "https://www.eldiario.es/castilla-la-mancha/averia-tecnica-cadena-errores-humanos-provocaron-fatal-accidente-urda_1_13621405.html"]
    ]
  }
];

// Trayectorias que conectan con Puente. tipo: "doc" = documentado, "prensa" = solo alegado por prensa.
window.RED = [
  { id: "heredia", tipo: "doc", pasos: ["AUVASA (Ayto. Valladolid)", "SG Movilidad Sostenible", "Presidente de Renfe"] },
  { id: "galvez", tipo: "doc", pasos: ["AUVASA (Ayto. Valladolid)", "DG Estrategias de Movilidad", "Nº 2 de Renfe"] },
  { id: "bosch", tipo: "doc", pasos: ["Redes sociales Ayto. Valladolid", "Jefe de gabinete del alcalde", "Consejero Renfe Viajeros"] },
  { id: "serrano", tipo: "doc", pasos: ["EMT València", "SG Transporte Terrestre", "Directora Técnica y Seguridad, Renfe"] },
  { id: "marco", tipo: "doc", pasos: ["Viceconsejero vasco (cuota PSE)", "Propuesto por Puente", "Presidente de Adif"] },
  { id: "vicent", tipo: "prensa", pasos: ["Ayto. Madrid (con Heredia)", "Concurso con requisitos rebajados", "Secretario General de Renfe"] },
  { id: "almenar", tipo: "prensa", pasos: ["Alto cargo Generalitat (PSPV)", "Dircom de Adif", "Jefe de gabinete de Adif"] },
  { id: "bandera", tipo: "prensa", pasos: ["Gerente FGV (gob. PSPV)", "Director de Tráfico de Adif", "DG Operaciones de Adif"] }
];

window.CASOS = [
  { nombre: "José Luis Ábalos", rol: "Exministro de Transportes (2018-2021)", estado: "condenado",
    txt: "El Tribunal Supremo lo condenó el 22-06-2026 a 24 años y 3 meses por organización criminal, cohecho, tráfico de influencias y malversación. El 14-10-2026 rechazó su incidente de nulidad. Solo le queda el recurso de amparo ante el Tribunal Constitucional.",
    url: "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Noticias-Judiciales/El-Tribunal-Supremo-condena-al-exministro-Jose-Luis-Abalos-y-a-su-exasesor-Koldo-Garcia-a-24-anos-y-19-anos-de-prision--respectivamente--por-delitos-de-organizacion-criminal--cohecho--malversacion-y-trafico-de-influencias" },
  { nombre: "Koldo García", rol: "Exasesor de Ábalos; exconsejero de Renfe Mercancías y vocal de Puertos del Estado", estado: "condenado",
    txt: "Condenado a 19 años y 8 meses en la misma sentencia. Fue consejero de Renfe Mercancías (2019-2021) a propuesta de Ábalos. En Puertos del Estado cobró 18.616 € por 8 reuniones.",
    url: "https://www.vozpopuli.com/espana/gobierno-sanchez-defendio-escrito-idoneidad-koldo-consejero-renfe.html" },
  { nombre: "Isabel Pardo de Vera", rol: "Presidenta de Adif (2018-2021) y secretaria de Estado de Transportes", estado: "investigado",
    txt: "Investigada en la Audiencia Nacional por la contratación de Jésica Rodríguez y por presuntos amaños de obra pública. Tiene retirado el pasaporte. En octubre de 2026 ofreció colaborar con Anticorrupción y afirmó que Ábalos le pidió colocar a personas afines al PSOE (es su versión).",
    url: "https://www.eldiario.es/politica/juez-retira-pasaporte-expresidenta-adif-imputada-caso-koldo_1_12480512.html" },
  { nombre: "Ignacio Zaldívar", rol: "Exsubdirector de Gestión Administrativa de Adif", estado: "investigado",
    txt: "La Sala confirmó el 9-10-2026 su imputación por tráfico de influencias en el enchufe de Jésica. Según The Objective, sigue trabajando en Adif como gerente de área.",
    url: "https://www.infobae.com/espana/agencias/2026/10/09/la-audiencia-nacional-confirma-la-imputacion-de-jessica-y-un-ex-alto-cargo-de-adif/" },
  { nombre: "Jésica Rodríguez", rol: "Contratada en Ineco y Tragsatec (2019-2021)", estado: "investigado",
    txt: "Investigada por malversación. El Supremo dio por probado que cobró ≈44.000 € sin trabajar, y Ábalos y Koldo deben indemnizar a las dos empresas públicas.",
    url: "https://www.vozpopuli.com/espana/politica/abalos-y-koldo-indemnizaran-con-44000-euros-a-las-empresas-publicas-ineco-y-tragsatec-por-enchufar-a-jessica.html" },
  { nombre: "Santos Cerdán", rol: "Ex secretario de Organización del PSOE", estado: "investigado",
    txt: "Investigado por presunto amaño de obra pública por 537-637 M€, incluidas obras de Adif (soterramiento de Murcia) y los túneles de Belate. Según la UCO tenía el 45 % de Servinabar. Está en libertad provisional. En octubre de 2026 Acciona admitió pagos de 1,96 M€ a Servinabar. Acciona no está imputada.",
    url: "https://www.eldiario.es/economia/13-obras-recoge-informe-uco-tumbado-cerdan-suman-637-millones-e-incluyen-fondos-europeos_1_12380100.html" },
  { nombre: "Javier Herrero", rol: "Exdirector general de Carreteras", estado: "investigado",
    txt: "Investigado por amaño de obra pública. Tiene retirado el pasaporte desde julio de 2025.",
    url: "https://www.publico.es/politica/tribunales/juez-caso-koldo-cita-declarar-proximo-21-julio-javier-herrero-isabel-pardo-de-vera.html" },
  { nombre: "Michaux Miranda", rol: "Exdirector general de Gestión de Personas de Adif", estado: "investigado",
    txt: "Citado como imputado en el caso Koldo y destituido en agosto de 2024. No se ha verificado cómo está la causa en 2026.",
    url: "https://theobjective.com/economia/transporte/2024-09-06/jefe-adif-imputado-caso-koldo-destitucion/" },
  { nombre: "Ángel Contreras", rol: "Presidente de Adif (diciembre 2023 – septiembre 2024)", estado: "prensa",
    txt: "Puente lo cesó a los nueve meses. Un informe de la UCO lo sitúa en una comida con Koldo, y la prensa le atribuye presuntos amaños por 48,4 M€. Él califica la relación de 'social'. No consta imputación.",
    url: "https://theobjective.com/espana/politica/2024-09-13/puente-adif-senalado-caso-koldo/" },
  { nombre: "Juan Pablo Villanueva", rol: "Exdirector general de Adif", estado: "prensa",
    txt: "Destituido en julio de 2025 y señalado en prensa por presuntos amaños de contratos en 2019-2021. Firmó la adjudicación de la obra de Adamuz. No consta imputación.",
    url: "https://www.vozpopuli.com/espana/politica/dos-exdirectivos-de-adif-senalados-por-amanar-contratos-firmaron-la-obra-de-la-via-de-adamuz-adjudicada-a-la-trama-koldo.html" },
  { nombre: "Isaías Táboas", rol: "Presidente de Renfe (2018-2023)", estado: "prensa",
    txt: "Dimitió por los trenes de Cantabria y Asturias que no cabían en los túneles. Según la UCO, Koldo le pasó el CV de Claudia Montes, que después entró en Logirail (filial de Renfe). No consta imputación.",
    url: "https://www.moncloa.com/2025/04/10/caso-koldo-claudia-logirail-3220910/" }
];

// Sueldos conocidos (brutos anuales, €). verificado=false => estimación o referencia no confirmada.
window.SUELDOS = [
  { label: "Presidente de Adif (Marco de la Peña)", valor: 195263, anio: "2025", verificado: true, nota: "Portal de Transparencia vía Sueldos Públicos" },
  { label: "Presidente de Renfe (puesto)", valor: 189995, anio: "2024", verificado: true, nota: "Portal de Transparencia. Último año publicado" },
  { label: "DG Negocios y Operaciones Renfe (Gálvez)", valor: 140000, anio: "2025", verificado: false, nota: "'No menos de' según fuentes de Vozpópuli" },
  { label: "Secretaría General de Adif", valor: 131368, anio: "ref.", verificado: false, nota: "Banda de una convocatoria anterior" },
  { label: "Directivo medio de 1er nivel de Renfe", valor: 125000, anio: "2016-21", verificado: true, nota: "Media calculada por Maldita" },
  { label: "Dircom Adif (plaza de Almenar)", valor: 104086, anio: "2024", verificado: true, nota: "Dotación publicada de la plaza" },
  { label: "Director general de Adif", valor: 98130, anio: "ref.", verificado: false, nota: "Base + complemento, sin variable" },
  { label: "Ministro (Óscar Puente)", valor: 81837, anio: "2024", verificado: true, nota: "Portal de Transparencia" },
  { label: "Consejero de filial Renfe (máx.)", valor: 11994, anio: "anual", verificado: true, nota: "Dietas, ≈1.090 € por reunión" }
];

window.HISTORICO = [
  ["Presidencia de Renfe", "2021", "171.341 €", "Isaías Táboas"],
  ["Presidencia de Renfe", "2022", "≈179.970 €", "Táboas / Raül Blanco"],
  ["Presidencia de Renfe", "2023", "186.172 €", "Raül Blanco"],
  ["Presidencia de Renfe", "2024", "189.995 €", "Raül Blanco"],
  ["Presidencia de Renfe", "2025", "No publicado", "Álvaro Fernández Heredia"],
  ["Presidencia de Adif", "2021", "173.827 €", "Pardo de Vera / Domínguez"],
  ["Presidencia de Adif", "2022", "≈179.911 €", "María Luisa Domínguez"],
  ["Presidencia de Adif", "2023", "173.434 €", "Domínguez (hasta el 7-12)"],
  ["Presidencia de Adif", "2024", "135.611 € + 54.300 €", "Contreras (ene-sep) + Marco de la Peña (sep-dic)"],
  ["Presidencia de Adif", "2025", "195.263 €", "Luis Pedro Marco de la Peña"]
];
