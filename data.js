/* ============================================================
   MEDCORE — datos del curso
   Semanas y lecturas extraídas del sílabo real (calendarización
   del ciclo). EPOC y Asma Bronquial tienen contenido completo
   de estudio (3 modos); el resto de los temas del sílabo están
   listados como parte del cronograma pero aún no tienen su
   ficha de estudio profunda — se va completando enfermedad por
   enfermedad a medida que se agreguen los PPT de cada clase.
   ============================================================ */

const CURSO = {
  "nombre": "Medicina Interna I",
  "codigo": "MH-701",
  "ciclo": "VII",
  "silabo": "2026-2",
  "universidad": "Universidad Científica del Sur",
  "docenteResponsable": "Dra. Dauma Gastiaburú Rodríguez",
  "creditos": 10,
  "horasTotales": "208 horas (112 teóricas, 96 prácticas)",
  "formulaEvaluacion": "ED (0%) + EC1 (10%) + EC2 (10%) + EP1 (18%) + EC3 (10%) + EC4 (10%) + EC5 (10%) + EP2 (12%) + EIF (20%)"
};

const SEMANAS = [
  {
    "id": "semana-01",
    "numero": 1,
    "titulo": "Neumología",
    "rango": "17 – 21 ago",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Anatomía y fisiología del aparato respiratorio / Exámenes de ayuda diagnóstica en Neumología: radiografía de tórax, tomografía, espirometría (capacidades pulmonares), toracocentesis, broncoscopía",
        "vinculos": [
          { "tipo": "tema", "id": "anatofisio-respiratorio" },
          { "tipo": "tema", "id": "examenes-diagnostico-neumo" }
        ]
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Bronquitis Aguda y Crónica. Bronquiectasias / Neumonía Adquirida en la Comunidad. / Asma Bronquial: etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento, complicaciones y prevención",
        "vinculos": [
          { "tipo": "enfermedad", "id": "bronquitis-bronquiectasias" },
          { "tipo": "enfermedad", "id": "neumonia-nac" },
          { "tipo": "enfermedad", "id": "asma-bronquial" }
        ]
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Control de lectura: Womack, J., & Kropa, J. (2022). Community-Acquired Pneumonia in Adults / Neumonía Intrahospitalaria y Atípicas / EXPOSICIÓN: VOLÚMENES Y CAPACIDADES PULMONARES",
        "vinculos": [
          { "tipo": "lectura", "id": "lectura-s1-3" },
          { "tipo": "enfermedad", "id": "neumonia-intrahospitalaria" }
        ]
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [],
    "exposiciones": [
      "EXPOSICIÓN: VOLÚMENES Y CAPACIDADES PULMONARES"
    ],
    "evaluaciones": [
      "Evaluación Diagnóstica — 0% de la nota final"
    ],
    "lecturas": [
      "lectura-s1-3"
    ],
    "enfermedades": [
      "asma-bronquial",
      "bronquitis-bronquiectasias",
      "neumonia-nac",
      "neumonia-intrahospitalaria"
    ],
    "temas": [
      "anatofisio-respiratorio",
      "examenes-diagnostico-neumo"
    ]
  },
  {
    "id": "semana-02",
    "numero": 2,
    "titulo": "Neumología",
    "rango": "24 – 28 ago",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO: IMÁGENES / Análisis de Gases Arteriales: Bases Fisiopatológicas e interpretación clínica",
        "vinculos": [ { "tipo": "taller", "id": "taller-imagenes-s2" }, 
          { "tipo": "tema", "id": "analisis-gases-arteriales" },
          { "tipo": "tema", "id": "examenes-diagnostico-neumo" }
        ]
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Control de lectura: Raymond, T., & Peterson, T. (2023). Chronic Asthma Treatment: Common Q / Enfermedad Pulmonar Obstructiva Crónica / Enfermedades Pleurales: Neumotórax, Hemotórax, Derrame Pleural y Empiema. Etiología, fisiopatología, cuadro clínico, tratamiento, complicaciones y prevención.",
        "vinculos": [
          { "tipo": "lectura", "id": "lectura-s2-5" },
          { "tipo": "enfermedad", "id": "epoc" },
          { "tipo": "enfermedad", "id": "enfermedades-pleurales" }
        ]
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "TALLER APLICATIVO: ANÁLISIS DE GASES ARTERIALES / Tuberculosis Pulmonar. Epidemiología, etiología, cuadro clínico, diagnóstico, tratamiento, complicaciones y prevención / EXPOSICIÓN: NEUMONÍA ADQUIRIDA EN LA COMUNIDAD",
        "vinculos": [ { "tipo": "taller", "id": "taller-aga1-s2" }, 
          { "tipo": "tema", "id": "analisis-gases-arteriales" },
          { "tipo": "enfermedad", "id": "tuberculosis-pulmonar" }
        ]
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER APLICATIVO: IMÁGENES",
      "TALLER APLICATIVO: ANÁLISIS DE GASES ARTERIALES"
    ],
    "exposiciones": [
      "EXPOSICIÓN: NEUMONÍA ADQUIRIDA EN LA COMUNIDAD"
    ],
    "evaluaciones": [
      "🔬 Examen práctico calificado — Neumología (mitad de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s2-5"
    ],
    "enfermedades": [
      "epoc",
      "enfermedades-pleurales",
      "tuberculosis-pulmonar"
    ],
    "temas": [
      "analisis-gases-arteriales"
    ]
  },
  {
    "id": "semana-03",
    "numero": 3,
    "titulo": "Neumología",
    "rango": "31 ago – 4 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Control de lectura: Hartman-Adams, H., Gerbo, R. M., & George, S. (2022). Tuberculosis: Co / Insuficiencia Respiratoria Aguda. Síndrome de Distrés Respiratorio del Adulto",
        "vinculos": [
          { "tipo": "lectura", "id": "lectura-s3-7" },
          { "tipo": "enfermedad", "id": "insuficiencia-respiratoria-aguda" }
        ]
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO:  ANÁLISIS DE GASES ARTERIALES 2 / Enfermedad Pulmonar Intersticial Difusa / Síndrome de apnea-hipopnea obstructiva del sueño (SAHOS).",
        "vinculos": [ { "tipo": "taller", "id": "taller-aga2-s3" }, 
          { "tipo": "tema", "id": "analisis-gases-arteriales" },
          { "tipo": "enfermedad", "id": "epid" },
          { "tipo": "enfermedad", "id": "saos" }
        ]
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Enfermedades respiratorias ocupacionales / TALLER APLICATIVO: CASOS CLÍNICOS / REPASO",
        "vinculos": [ { "tipo": "taller", "id": "taller-casos-clinicos-s3" }, 
          { "tipo": "enfermedad", "id": "enfermedades-respiratorias-ocupacionales" }
        ]
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER APLICATIVO:  ANÁLISIS DE GASES ARTERIALES 2",
      "TALLER APLICATIVO: CASOS CLÍNICOS"
    ],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 1 — Actividades Módulo 1 (Neumología) — 10% de la nota final"
    ,
      "🔬 Examen práctico calificado — Neumología (final de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s3-7"
    ],
    "enfermedades": [
      "epid",
      "saos",
      "insuficiencia-respiratoria-aguda",
      "enfermedades-respiratorias-ocupacionales"
    ]
  },
  {
    "id": "semana-04",
    "numero": 4,
    "titulo": "Cardiología",
    "rango": "7 – 11 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Anatomía, semiología y fisiología Cardiaca: estructura del corazón y de los grandes vasos. Ciclo cardiaco y hemodinamia. Examen físico. / Exámenes de ayuda diagnóstica en Cardiología: Radiografía, Ecocardiograma, Doppler, Holter, MAPA, prueba de esfuerzo y cateterismo."
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "EKG normal I / EKG normal II / Cardiopatía Coronaria Isquémica: Infarto Agudo de Miocardio (IMA). Fisiopatología de la angina e IMA. Diagnóstico, tipos y manejo inicial."
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Control de lectura: Achar, S. A., Kundu, S., & Norcross, W. A. (2005). Diagnosis of acute  / Hipertensión Arterial. Diagnóstico, clasificación y tratamiento / EXPOSICIÓN: ELECTROCARDIOGRAMA NORMAL: ORIGEN DE LAS ONDAS, MEDIDAS, EJE, RITMO, FRECUENCIA"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [],
    "exposiciones": [
      "EXPOSICIÓN: ELECTROCARDIOGRAMA NORMAL: ORIGEN DE LAS ONDAS, MEDIDAS, EJE, RITMO, FRECUENCIA"
    ],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s4-12"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-05",
    "numero": 5,
    "titulo": "Cardiología",
    "rango": "14 – 18 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO: EKG / Enfermedades del Pericardio: Pericarditis, Taponamiento Pericárdico y Pericarditis constrictiva crónica."
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Taquiarritmias y Bradiarritmias / EKG: Trastornos de la conducción / Control de lectura: Diagnóstico y guía terapéutica del paciente con taponamiento cardiaco "
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "ENDOCARDITIS INFECCIOSA / Tromboembolismo pulmonar / EXPOSICIÓN: ELECTROCARDIOGRAMA: ARRITMIAS"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER APLICATIVO: EKG"
    ],
    "exposiciones": [
      "EXPOSICIÓN: ELECTROCARDIOGRAMA: ARRITMIAS"
    ],
    "evaluaciones": [
      "🔬 Examen práctico calificado — Cardiología (mitad de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s5-14"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-06",
    "numero": 6,
    "titulo": "Cardiología",
    "rango": "21 – 25 set",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Control de lectura: Hebbar K., &  Hueston, W. (2002). Management of Common Arrythmias: Sup / Insuficiencia Cardiaca. Fisiopatología. Clasificación. Manejo Farmacológico"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Valvulopatía aórtica y mitral:  manifestaciones clínicas y enfoque diagnóstico / Valvulopatía tricuspídea y pulmonar:  manifestaciones clínicas y enfoque diagnóstico / TALLER APLICATIVO: EKG ARRITMIAS"
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Shock cardiogénico. Soporte hemodinámico y tratamiento específico / Enfermedad Vascular Periférica. / TALLER APLICATIVO: EKG PATOLÓGICO"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER APLICATIVO: EKG ARRITMIAS",
      "TALLER APLICATIVO: EKG PATOLÓGICO"
    ],
    "exposiciones": [],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s6-16"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-07",
    "numero": 7,
    "titulo": "Cardiología",
    "rango": "28 set – 2 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Cardiopatías congénitas cianótica / Cardiopatías congénitas acianótica"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Control de lectura: Ford, B., Lara, S., & Park, J. (2022). Heart murmurs in children: Eval / Miocardiopatía Dilatada, No dilatada, Restrictiva. EKG Hipertróficas"
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Miocardiopatías- Miocardiopatía Hipertrófica / REPASO"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 2 — Actividades Módulo 2 (Cardiología) — 10% de la nota final"
    ,
      "🔬 Examen práctico calificado — Cardiología (final de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s7-20"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-08",
    "numero": 8,
    "titulo": "Examen Parcial",
    "rango": "Semana de evaluación",
    "dias": [
      
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "EXAMEN PARCIAL: NEUMOLOGÍA Y CARDIOLOGÍA (SEMANA DEL 5 AL 11 DE OCTUBRE)",
      "Evaluación Parcial 1 — Examen teórico Módulos 1-2 — 18% de la nota final"
    ],
    "lecturas": [],
    "enfermedades": []
  },
  {
    "id": "semana-09",
    "numero": 9,
    "titulo": "Nefrología",
    "rango": "12 – 16 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Glomerulopatías I: Glomerulopatías Primarias / Glomerulopatías II: Glomerulopatías Secundarias"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Insuficiencia Renal Aguda. Etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento y prevención / Gasometría metabólica: Bases fisiopatológicas e interpretación clínica / Control de lectura: Glomerulonephritis: an Approach to the KDIGO 2021 Guidelines."
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Alteraciones del equilibrio hidroelectrolítico: sodio: etiología, diagnóstico y tratamiento. / Alteraciones del equilibrio hidroelectrolítico: potasio: etiología, diagnóstico y tratamiento. / Alteraciones del equilibrio hidroelectrolítico: calcio y magnesio: etiología, diagnóstico y tratamiento."
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [],
    "lecturas": [
      "lectura-s9-24"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-10",
    "numero": 10,
    "titulo": "Nefrología",
    "rango": "19 – 23 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "TALLER APLICATIVO: GASES ARTERIALES / Síndrome nefrótico: etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento, pronóstico y prevención"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Control de lectura: Braun, M., Barstow, C. & Pyzocha, N. (2015). Diagnosis and management  / Síndrome nefrítico: etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento, pronóstico y prevención / Infección del Tracto Urinario. Etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento y prevención."
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "EXPOSICIÓN: ANÁLISIS DE GASES ARTERIALES / Nefropatía Diabética / Litiasis Renal y Uropatía obstructiva"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER APLICATIVO: GASES ARTERIALES"
    ],
    "exposiciones": [
      "EXPOSICIÓN: ANÁLISIS DE GASES ARTERIALES"
    ],
    "evaluaciones": [
      "🔬 Examen práctico calificado — Nefrología (mitad de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s10-27"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-11",
    "numero": 11,
    "titulo": "Nefrología",
    "rango": "26 – 30 oct",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Control de lectura: Gross, J. L., De Azevedo, M. J., Silveiro, S. P., Canani, L. H., Caram / Enfermedad Renal Crónica. Etiología, fisiopatología, cuadro clínico, diagnóstico, tratamiento y prevención"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Tuberculosis renal y vías urinarias / EXPOSICIÓN: CORRECCIÓN DE TRASTORNOS HIDROELECTROLÍTICOS / TALLER APLICATIVO CASOS CLÍNICOS"
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Enfermedades sistémicas y su compromiso renal / TALLER APLICATIVO:  TRASTORNOS DE ELECTROLITOS / REPASO"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER APLICATIVO CASOS CLÍNICOS",
      "TALLER APLICATIVO:  TRASTORNOS DE ELECTROLITOS"
    ],
    "exposiciones": [
      "EXPOSICIÓN: CORRECCIÓN DE TRASTORNOS HIDROELECTROLÍTICOS"
    ],
    "evaluaciones": [
      "Evaluación continua 3 — Actividades Módulo 3 (Nefrología) — 10% de la nota final"
    ,
      "🔬 Examen práctico calificado — Nefrología (final de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s11-29"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-12",
    "numero": 12,
    "titulo": "Gastroenterología",
    "rango": "2 – 6 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Enfermedad por Reflujo gastroesofágico: anatomía, fisiopatología, manifestaciones digestivas y extradigestivas, plan de trabajo diagnóstico, tratamiento y complicaciones / Trastornos motores del esófago. Anatomía, fisiología, fisiopatología, cuadro clínico, clasificación, procedimientos diagnósticos, tratamiento. Acalasia"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Gastritis Aguda y Crónica: definición, fisiopatología, cuadro clínico, clasificación, procedimientos diagnósticos, tratamiento y complicaciones / Enfermedad Úlcero Péptica: Duodenal y Gástrica. Fisiopatología, cuadro clínico, procedimientos diagnósticos, tratamiento y complicaciones / Enfermedad Inflamatoria Intestinal. Fisiopatología, cuadro clínico, procedimientos diagnósticos, tratamiento y complicaciones"
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "TALLER CASOS CLÍNICOS: Trastornos funcionales del aparato digestivo: dispepsia funcional, síndrome de intestino irritable / Hepatitis viral aguda y crónica. Patogenia, factores de riesgo, procedimientos diagnósticos, evolución, tratamiento y complicaciones / Control de lectura: PANCREATITIS AGUDA"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER CASOS CLÍNICOS: Trastornos funcionales del aparato digestivo: dispepsia funcional, síndrome de intestino irritable"
    ],
    "exposiciones": [],
    "evaluaciones": [
      "🔬 Examen práctico calificado — Gastroenterología (mitad de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s12-34"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-13",
    "numero": 13,
    "titulo": "Gastroenterología",
    "rango": "9 – 13 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Pancreatitis: Aguda y Crónica / Colecistitis, Colangitis y Colédocolitiasis"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Cirrosis hepática. Fisiopatología, cuadro clínico, procedimientos diagnósticos, tratamiento y complicaciones. Hipertensión portal / TALLER (CLASE INVERTIDA) Tuberculosis Enteroperitoneal / Hemorragia digestiva alta y baja."
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Absceso hepático / Diarrea Aguda y Crónica / Control de lectura: HEMORRAGIA DIGESTIVA ALTA"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [
      "TALLER (CLASE INVERTIDA) Tuberculosis Enteroperitoneal"
    ],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 4 — Actividades Módulo 4 (Gastroenterología) — 10% de la nota final"
    ,
      "🔬 Examen práctico calificado — Gastroenterología (final de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s13-37"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-14",
    "numero": 14,
    "titulo": "Gastroenterología",
    "rango": "16 – 20 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Anatomofisiología y semiología de la piel. Estructura y función de la piel y anexos. Lesiones elementales / Métodos diagnósticos en Dermatología"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Enfermedades bacterianas de la piel: impétigo, ectima, foliculitis, erisipela y celulitis / Acné. Rosácea. Erupciones acneiformes / Discromías de la piel: hipocromías e hipercromías"
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "Urticaria: Aguda – Crónica / Dermatitis: Seborreica, de contacto, atópica y dishidrótica / Control de lectura: INFECCIONES DE LA PIEL"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "Evaluación continua 5 — Actividades Módulo 5 (Dermatología) — 10% de la nota final"
    ,
      "🔬 Examen práctico calificado — Dermatología (mitad de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [
      "lectura-s14-40"
    ],
    "enfermedades": []
  },
  {
    "id": "semana-15",
    "numero": 15,
    "titulo": "Dermatología",
    "rango": "23 – 27 nov",
    "dias": [
      {
        "dia": "Lunes",
        "tipo": "teoria",
        "tema": "Micosis: Tiñas, Candidiasis y Esporotricosis / Enfermedades virales de la piel: molusco contagioso, verrugas, herpes simple y herpes zoster"
      },
      {
        "dia": "Miércoles",
        "tipo": "teoria",
        "tema": "Enfermedades ampollares: pénfigo vulgar, pénfigo foliáceo, penfigoide ampular, dermatitis herpetiforme / Enfermedades parasitarias de la piel: acarosis y pediculosis"
      },
      { "dia": "Jueves", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" },
      {
        "dia": "Viernes",
        "tipo": "teoria+hospital",
        "tema": "EVALUACIÓN CONTINUA 6: NEFROLOGÍA, GASTROENTEROLOGÍA Y DERMATOLOGÍA"
      },
      { "dia": "Sábado", "tipo": "hospital", "tema": "Actividad hospitalaria — pendiente de agregar (falta el documento con la información real de tu sede)" }
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "EVALUACIÓN CONTINUA 6: NEFROLOGÍA, GASTROENTEROLOGÍA Y DERMATOLOGÍA",
      "Evaluación Parcial 2 — Examen teórico Módulos 3-4-5 — 12% de la nota final"
    ,
      "🔬 Examen práctico calificado — Dermatología (final de módulo, evaluación cruzada, en sede hospitalaria)"],
    "lecturas": [],
    "enfermedades": []
  },
  {
    "id": "semana-16",
    "numero": 16,
    "titulo": "Dermatología",
    "rango": "Semana de evaluación",
    "dias": [
      
    ],
    "talleres": [],
    "exposiciones": [],
    "evaluaciones": [
      "EXAMEN INTEGRADO FINAL: TODOS LOS MÓDULOS (SEMANA DEL 30 NOVIEMBRE AL 6 DE DICIEMBRE)",
      "Evaluación Final — Examen integrado (todos los módulos) — 20% de la nota final"
    ],
    "lecturas": [],
    "enfermedades": []
  }
];

const ENFERMEDADES = [
  {
  "id": "epoc",
  "nombre": "EPOC (Enfermedad Pulmonar Obstructiva Crónica)",
  "area": "Neumología",
  "semanas": [
    "semana-02"
  ],
  "favorito": false,
  "estudiado": false,
  "ilustracion": "assets/epoc-airway.svg",
  "relacionadas": [
    {
      "id": "asma-bronquial",
      "relacion": "Principal diagnóstico diferencial — ambas cursan con obstrucción de la vía aérea, pero se distinguen por reversibilidad y edad de inicio"
    }
  ],
  "profundo": {
    "definicion": "Condición pulmonar heterogénea caracterizada por síntomas respiratorios crónicos (disnea, tos, producción de esputo y/o exacerbaciones) debido a anomalías de las vías aéreas y/o alvéolos que provocan limitación persistente, a menudo progresiva, del flujo aéreo. <span class=\"fuente-ampliada\">Esta limitación se debe a una respuesta inflamatoria anormal de la vía aérea y el parénquima pulmonar frente a partículas o gases nocivos.</span>",
    "epidemiologia": "Una de las principales causas de morbimortalidad a nivel mundial. Más frecuente en mayores de 40 años con historia de tabaquismo significativo.",
    "etiologiaFactoresRiesgo": [
      "La EPOC resulta de interacciones gen-ambiente que ocurren a lo largo de la vida del individuo (GETomics), que pueden dañar los pulmones y/o alterar sus procesos normales de desarrollo/envejecimiento",
      "Principales exposiciones ambientales: tabaquismo e inhalación de partículas tóxicas y gases de la contaminación del aire",
      "Factores prenatales y de primera infancia: el tabaquismo materno durante el embarazo conduce a mayor riesgo de función pulmonar reducida, alterando potencialmente el desarrollo pulmonar",
      "Factores de mediana edad: los síntomas respiratorios crónicos antes de los 50 años se asocian con el inicio y progresión de la EPOC — la hipersecreción mucosa crónica suele PRECEDER al desarrollo de la obstrucción del flujo aéreo",
      "Factores de edad avanzada: solo la mitad de los adultos mayores con EPOC tienen la trayectoria típica de disminución acelerada de la función pulmonar; la otra mitad nunca alcanzó la función pulmonar máxima normal en la adultez temprana",
      "<span class=\"fuente-ampliada\">Déficit de alfa-1 antitripsina — causa genética específica; sospechar en EPOC de inicio temprano (<45 años) sin tabaquismo significativo</span>"
    ],
    "endotiposInflamacion": "La EPOC involucra una inflamación compleja: neutrófilos, macrófagos, eosinófilos, células T CD4+, células T CD8+, monocitos, mastocitos y células linfoides innatas. La EPOC eosinofílica representa una entidad DISTINTA del 'asma eosinofílica', con diferente biología y respuesta al tratamiento.",
    "criteriosDiagnosticos": "En el contexto clínico apropiado, la presencia de limitación al flujo aéreo no completamente reversible (FEV1/FVC < 0.7 post broncodilatador, medida por espirometría) confirma el diagnóstico de EPOC. La espirometría forzada es OBLIGATORIA para establecer el diagnóstico — no basta con la clínica.",
    "catScore": "Cuestionario CAT (COPD Assessment Test): 8 ítems que evalúan el estado de salud del paciente con EPOC. Puntuación de 0 a 40, correlaciona bien con el SGRQ. Un punto de corte de CAT ≥10 (equivalente a SGRQ ≥25) se considera el umbral para iniciar tratamiento regular de los síntomas, incluyendo la disnea. <span class=\"fuente-ampliada\">Se recomienda usar una evaluación multidimensional, ya que pacientes con mMRC bajo también pueden tener otros síntomas relevantes de EPOC no capturados por esa escala.</span>",
    "fisiopatologia": {
      "resumen": "La exposición crónica a partículas nocivas desencadena inflamación sostenida de la vía aérea, con dos componentes que coexisten en proporción variable: enfermedad de la pequeña vía aérea (bronquiolitis) y destrucción del parénquima (enfisema).",
      "explicacionExtendida": "El diagrama de tu clase muestra la cascada completa, célula por célula: el humo de tabaco/biomasa activa directamente el epitelio (libera IL-6, CXCL1, CXCL8 — atrayendo neutrófilos), los macrófagos (liberan MCP-1, PAF, TGF-β) y los mastocitos (liberan histamina, PG-D2, y activan células dendríticas y linfocitos T). Los linfocitos CD8+ liberan perforina/granzima B, y junto con CD4+ activan linfocitos B (IL-6) — toda esta señalización converge en un grupo común de mediadores finales: LTB4, IL-8, TNF-α, MMPs, HNE, IL-17A, INF-γ. Estos mediadores actúan sobre DOS estructuras distintas y explican por qué el EPOC es tan heterogéneo entre pacientes: sobre los <strong>bronquiolos</strong> producen fibrosis, hipersecreción mucosa, contracción del músculo liso e inflamación (el fenotipo 'bronquitis crónica'); sobre el <strong>parénquima</strong> producen enfisema e inflamación (el fenotipo 'enfisematoso'). Ambas vías terminan en el mismo resultado funcional: obstrucción respiratoria — por eso dos pacientes con EPOC pueden verse clínicamente muy distintos (uno más tosedor-abotagado, otro más disneico-soplador rosado) y aun así tener el mismo diagnóstico espirométrico.\n\n<span class=\"fuente-ampliada\">Mecanísticamente, el desequilibrio entre proteasas (elastasa neutrofílica, MMPs) y antiproteasas (como la alfa-1 antitripsina) es lo que explica por qué el daño del parénquima es progresivo e irreversible: cada episodio inflamatorio (cada exacerbación) destruye un poco más de matriz elástica alveolar de la que el cuerpo puede reparar. Esto también explica por qué dejar de fumar detiene la progresión pero no revierte el daño ya hecho — el objetivo del tratamiento nunca es 'curar' el enfisema ya establecido, sino evitar que seque avance más rápido de lo esperado por la edad.</span>",
      "cascada": [
        {
          "paso": "Factor desencadenante",
          "detalle": "Humo de tabaco / partículas inhaladas — interacción gen-ambiente (GETomics)"
        },
        {
          "paso": "Reprogramación epitelial",
          "detalle": "Lesión oxidativa de células basales en vía aérea pequeña (<2mm); pérdida de células secretoras y ciliadas"
        },
        {
          "paso": "Células y mediadores activados",
          "detalle": "Neutrófilos, macrófagos, linfocitos T CD8+; liberan TNF-α, IL-1β, IL-6, IL-8, proteasas de serina (MMP, elastasa neutrofílica)"
        },
        {
          "paso": "Efecto tisular",
          "detalle": "Desequilibrio proteasa/antiproteasa → destrucción de matriz elástica alveolar (enfisema) + hipersecreción/remodelación de vía pequeña"
        },
        {
          "paso": "Cambio fisiológico",
          "detalle": "Atrapamiento aéreo, hiperinsuflación, ↓ retracción elástica, limitación al flujo espiratorio"
        },
        {
          "paso": "Manifestación clínica",
          "detalle": "Disnea progresiva, tos crónica, uso de musculatura accesoria, exacerbaciones"
        }
      ],
      "imagenes": [
        {
          "src": "assets/epoc/epoc-patogenia-diagrama.jpg",
          "caption": "Diagrama de patogenia (de tu clase) — cómo el humo activa cada célula y qué citoquina libera cada una, hasta converger en obstrucción respiratoria",
          "explicacion": "Léelo de arriba hacia abajo: el humo (cuadro superior) es el único desencadenante, pero activa a la vez 4 tipos de células distintas (epitelio, macrófagos, mastocitos, y a través de estos, linfocitos T y B). Fíjate que TODAS las flechas, sin importar de qué célula salgan, terminan convergiendo en el mismo grupo de mediadores finales (LTB4, IL-8, TNF-α, MMPs, HNE, IL-17A, INF-γ) — esto es clave para entender por qué el daño no depende de una sola vía, sino de una respuesta inflamatoria en red. Luego, ese mismo grupo de mediadores se bifurca hacia DOS órganos diana distintos: bronquiolos (fibrosis + hipersecreción + contracción muscular = el fenotipo 'bronquítico') y parénquima (enfisema = el fenotipo 'enfisematoso'). Ambos caminos terminan en el mismo resultado funcional: obstrucción respiratoria. Si te preguntan por qué el EPOC es una enfermedad 'heterogénea', la respuesta visual está aquí: es una sola cascada inflamatoria que se expresa de forma distinta según qué órgano diana predomine en cada paciente."
        }
      ]
    },
    "clinica": [
      {
        "signo": "Disnea",
        "detallePPT": "Síntoma cardinal y causa importante de discapacidad — el paciente la describe como mayor esfuerzo para respirar, pesadez en el pecho o falta de aire. Progresiva en el tiempo, empeora con el ejercicio, es persistente.",
        "mecanismo": "Hiperinsuflación dinámica → ↑ trabajo respiratorio para movilizar el mismo volumen corriente."
      },
      {
        "signo": "Tos crónica",
        "detallePPT": "Suele ser el primer síntoma. Puede ser intermitente al inicio y luego estar presente todos los días; productiva o no productiva.",
        "mecanismo": "Estimulación de receptores de la vía aérea por hipersecreción mucosa e inflamación crónica."
      },
      {
        "signo": "Expectoración",
        "detallePPT": "Producción regular de esputo durante 3 o más meses en 2 años consecutivos. Difícil de evaluar porque el paciente a veces traga el esputo en vez de expectorarlo.",
        "mecanismo": "Hipersecreción mucosa por hiperplasia de células caliciformes."
      },
      {
        "signo": "Sibilancias recurrentes",
        "detallePPT": "Empeoran con el ejercicio.",
        "mecanismo": "Turbulencia del flujo aéreo a través de la vía estrechada."
      },
      {
        "signo": "Fatiga",
        "detallePPT": "Sensación subjetiva de cansancio o agotamiento que afecta la capacidad del paciente para realizar actividades diarias y su calidad de vida.",
        "mecanismo": "<span class=\"fuente-ampliada\">Hipoxemia crónica + desacondicionamiento muscular progresivo por el sedentarismo secundario a la disnea.</span>"
      },
      {
        "signo": "Infecciones recurrentes del tracto respiratorio inferior",
        "detallePPT": "Antecedente que aumenta la probabilidad de EPOC cuando se combina con los demás indicadores.",
        "mecanismo": "<span class=\"fuente-ampliada\">Aclaramiento mucociliar dañado por la inflamación crónica y la reprogramación epitelial.</span>"
      }
    ],
    "examenFisico": [
      "Tórax en tonel (hiperinsuflación)",
      "Espiración prolongada con labios fruncidos",
      "↓ murmullo vesicular, roncantes/sibilantes",
      "Signo de Hoover (movimiento paradójico de la parrilla costal inferior)"
    ],
    "semiologia": {
      "inspeccion": "Observa el patrón respiratorio antes de tocar al paciente: tórax en tonel (aumento del diámetro anteroposterior por hiperinsuflación), uso de músculos accesorios, respiración con labios fruncidos, y el signo de Hoover — depresión paradójica de la parrilla costal inferior durante la inspiración (diafragma aplanado por hiperinsuflación crónica).",
      "palpacion": "Expansión torácica DISMINUIDA y simétrica (a diferencia de un derrame/neumotórax, que es asimétrica). Frémito vocal disminuido de forma difusa por la hiperinsuflación.",
      "percusion": "Hipersonoridad difusa por atrapamiento de aire; límites pulmonares inferiores descendidos (diafragma aplanado y bajo).",
      "auscultacion": "Murmullo vesicular disminuido de forma difusa, espiración prolongada, roncantes/sibilantes si hay broncoespasmo asociado. En EPOC muy avanzado el tórax puede sonar casi 'silencioso' — signo de gravedad, no de mejoría (tan poco flujo de aire que ni genera ruido)."
    },
    "diagnostico": "La espirometría forzada que muestre un FEV1/FVC post-broncodilatador < 0.7 es OBLIGATORIA para establecer el diagnóstico. Se debe considerar el diagnóstico de EPOC en cualquier paciente con disnea, tos crónica/esputo, antecedentes de infecciones recurrentes del tracto respiratorio inferior, o antecedente de exposición a factores de riesgo. La evaluación inicial debe determinar: gravedad de la obstrucción (GOLD 1-4), impacto en el estado de salud (mMRC/CAT), y riesgo de eventos futuros (exacerbaciones) — esto guía la terapia.",
    "historiaClinica": "Debe incluir: exposición a factores de riesgo, antecedentes médicos (eventos precoces, asma, alergias, infecciones respiratorias), antecedentes familiares de EPOC u otra enfermedad respiratoria crónica, patrón de desarrollo de los síntomas, antecedentes de exacerbaciones/hospitalizaciones previas, comorbilidades, impacto en la vida del paciente, apoyo social y familiar, y posibilidades de reducción de factores de riesgo.",
    "biomarcadoresEImagenes": "Eosinófilos en sangre: ampliamente usado pero limitado por variabilidad diurna y no especificidad. Óxido nítrico exhalado (FeNO): más estable en EPOC estable, su rol como predictor para tratamientos como dupilumab aún no está dilucidado. TC/RM: permiten estudio in vivo de la relación estructura-función; hallazgo clave — hasta 70% menos bronquiolos terminales en pacientes con EPOC que en controles, y la pérdida de vías respiratorias puede ocurrir temprano en la enfermedad.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Sospecha clínica: disnea progresiva + tos crónica + antecedente de exposición a factores de riesgo"
      },
      {
        "tipo": "paso",
        "texto": "Espirometría post-broncodilatador — OBLIGATORIA para confirmar"
      },
      {
        "tipo": "decision",
        "texto": "¿FEV1/FVC < 0.70 post-broncodilatador?",
        "salidas": [
          {
            "etiqueta": "NO",
            "texto": "EPOC descartado — buscar otra causa de disnea",
            "color": "mint"
          },
          {
            "etiqueta": "SÍ",
            "texto": "Confirma EPOC → clasificar GOLD 1-4 (espirometría) + grupo A/B/E (síntomas + exacerbaciones)",
            "color": "coral"
          }
        ]
      },
      {
        "tipo": "paso",
        "texto": "Tratamiento inicial según grupo: A = broncodilatador simple · B = LABA+LAMA · E = LABA+LAMA (+GCI si eosinófilos ≥300)"
      },
      {
        "tipo": "decision",
        "texto": "¿Persisten síntomas o exacerbaciones tras tratamiento inicial?",
        "salidas": [
          {
            "etiqueta": "Disnea persistente",
            "texto": "Escalar a LABA+LAMA si estaba en monoterapia",
            "color": "coral"
          },
          {
            "etiqueta": "Exacerbaciones persistentes",
            "texto": "Escalar a LABA+LAMA → +GCI si eosinófilos ≥100 → considerar roflumilast/macrólido si persiste con triple terapia",
            "color": "alert"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "Asma bronquial",
      "Bronquiectasias",
      "Insuficiencia cardiaca",
      "Bronquiolitis obliterante"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Cese absoluto de tabaquismo — la intervención clave para todos los pacientes que continúan fumando",
        "Rehabilitación pulmonar: programas de 6-8 semanas con sesiones supervisadas (entrenamiento físico + educación + apoyo nutricional/psicosocial), seguidos de mantenimiento a largo plazo",
        "Vacunación: COVID-19, antineumocócica, antigripal (anual), Tdap, herpes zóster, y virus sincitial respiratorio (VSR) según recomendaciones nacionales",
        "Educación para el autocuidado, actividad física regular, nutrición adecuada, apoyo psicosocial"
      ],
      "farmacologico": [
        "Grupo A: broncodilatador (acción corta o prolongada) según efecto sobre la disnea",
        "Grupo B: combinación LABA+LAMA como opción preferida (alternativa: broncodilatador de acción prolongada en monoterapia)",
        "Grupo E: LABA+LAMA como opción preferida; considerar LABA+LAMA+GCI si eosinófilos ≥300 células/µl",
        "Escalamiento por disnea persistente: a dos broncodilatadores de acción prolongada (LABA+LAMA)",
        "Escalamiento por exacerbaciones persistentes: LABA+LAMA → +GCI si eosinófilos ≥100 → considerar roflumilast o macrólido según perfil del paciente si persiste con triple terapia",
        "Oxigenoterapia a largo plazo si: PaO2 ≤55 mmHg o SatO2 ≤88% (con o sin hipercapnia), o PaO2 55-60 mmHg con hipertensión pulmonar/edema periférico/policitemia — mejora la supervivencia",
        "Ventilación no invasiva (VMNI) si: hipercapnia crónica grave (PaCO2 ≥53 mmHg) + antecedente de hospitalización por insuficiencia respiratoria aguda — reduce mortalidad y reingresos"
      ]
    },
    "exacerbaciones": {
      "definicion": "Evento caracterizado por disnea y/o tos y expectoración que empeoran durante menos de 14 días.",
      "clasificacion": [
        [
          "Leve",
          "Tratada solo con broncodilatadores de acción corta (SABA)"
        ],
        [
          "Moderada",
          "SABA + corticosteroides orales ± antibióticos"
        ],
        [
          "Grave",
          "Requiere hospitalización o visita a emergencias; puede asociarse a insuficiencia respiratoria aguda"
        ]
      ],
      "criteriosAnthonisen": "<span class=\"fuente-ampliada\">Los criterios de Anthonisen (aumento de disnea, aumento del volumen de esputo, esputo purulento) ayudan a decidir el uso de antibióticos — con los 3 presentes, especialmente la purulencia, está indicado el antibiótico empírico.</span>"
    },
    "intervencionesQueReducenMortalidad": [
      "Triple terapia inhalada (LABA+LAMA+GCI) en pacientes sintomáticos con antecedente de exacerbaciones frecuentes/graves",
      "Dejar de fumar — reduce la mortalidad general",
      "Rehabilitación pulmonar iniciada durante la hospitalización o poco después del alta",
      "Oxigenoterapia en pacientes con hipoxemia crónica grave",
      "Ventilación no invasiva en pacientes con hipercapnia marcada"
    ],
    "complicaciones": [
      "Cor pulmonale",
      "Insuficiencia respiratoria aguda sobre crónica",
      "Neumotórax espontáneo (bulas)",
      "Comorbilidades: enfermedad cardiovascular (cardiopatía isquémica, insuficiencia cardiaca, arritmias, HTA), cáncer de pulmón (especialmente con enfisema), sarcopenia/disfunción muscular, síndrome metabólico, depresión/ansiedad, osteoporosis — influyen en mortalidad y hospitalizaciones independientemente de la gravedad de la obstrucción"
    ],
    "prevencion": "Cese de tabaquismo (principal factor modificable) y reducción de exposición a biomasa, contaminación ocupacional y ambiental. Vacunación según esquema recomendado.",
    "perlasProfundo": "El FEV1/FVC post-broncodilatador < 0.70 confirma EPOC, pero la elección del tratamiento y el pronóstico dependen más de la clasificación GOLD por síntomas y riesgo de exacerbaciones (grupo A/B/E) que del FEV1 aislado.",
    "tablasClinicas": [
      {
        "titulo": "1️⃣ Primero: ¿qué tan obstruido está? — Clasificación GOLD por espirometría",
        "contexto": "Una vez que la espirometría confirma EPOC (FEV1/FVC<0.7), el PRIMER número que necesitas es el FEV1 (% del predicho) — esto te da el estadio GOLD 1-4, que mide qué tan dañada está la vía aérea de forma objetiva y reproducible, sin depender de lo que el paciente reporte sentir.",
        "columnas": [
          "Estadio",
          "Gravedad",
          "Criterio espirométrico"
        ],
        "filas": [
          [
            "GOLD 1",
            "Leve",
            "FEV1 ≥ 80% del valor de referencia"
          ],
          [
            "GOLD 2",
            "Moderada",
            "50% ≤ FEV1 < 80% del valor de referencia"
          ],
          [
            "GOLD 3",
            "Grave",
            "30% ≤ FEV1 < 50% del valor de referencia"
          ],
          [
            "GOLD 4",
            "Muy grave",
            "FEV1 < 30% del valor de referencia"
          ]
        ],
        "nota": "<span class=\"fuente-ampliada\">Ojo: el GOLD 1-4 clasifica la OBSTRUCCIÓN, pero por sí solo NO decide el tratamiento — para eso necesitas además saber cómo se siente el paciente y cuántas exacerbaciones ha tenido (siguiente tabla).</span>"
      },
      {
        "titulo": "2️⃣ Segundo: ¿cómo se siente el paciente? — Escala de disnea mMRC",
        "contexto": "El FEV1 mide daño estructural, pero dos pacientes con el MISMO FEV1 pueden sentirse completamente distinto — por eso GOLD exige medir también el impacto funcional real con una escala de síntomas. La mMRC es la más simple: describe qué actividad le provoca disnea al paciente, en 5 grados.",
        "columnas": [
          "Grado",
          "Descripción"
        ],
        "filas": [
          [
            "Grado 0",
            "Ausencia de disnea, excepto al realizar ejercicio intenso"
          ],
          [
            "Grado 1",
            "Disnea al andar deprisa o al subir una pendiente poco pronunciada"
          ],
          [
            "Grado 2",
            "Incapacidad de mantener el paso de otras personas de la misma edad caminando en llano, o necesidad de parar a descansar al andar en llano al propio paso"
          ],
          [
            "Grado 3",
            "Necesidad de parar a descansar al andar unos 100 metros o a los pocos minutos de andar en llano"
          ],
          [
            "Grado 4",
            "La disnea impide al paciente salir de casa, o aparece con actividades como vestirse o desvestirse"
          ]
        ],
        "nota": "mMRC ≥2 ya se considera síntomas significativos. La escala se relaciona bien con otras medidas del estado de salud y predice el riesgo de mortalidad futura — no es solo una pregunta de comodidad, tiene valor pronóstico real."
      },
      {
        "titulo": "3️⃣ CAT score — la alternativa más completa a mMRC",
        "contexto": "El problema de mMRC es que solo pregunta por disnea — pero un paciente puede tener tos, opresión torácica o mal sueño sin necesariamente sentirse 'sin aire'. El CAT (COPD Assessment Test) captura eso con un cuestionario de 8 ítems (tos, flema, opresión, subir escaleras/pendientes, actividades en casa, confianza para salir, sueño, energía), puntuado de 0 a 40.",
        "columnas": [
          "Punto de corte",
          "Interpretación"
        ],
        "filas": [
          [
            "CAT < 10",
            "Síntomas poco significativos"
          ],
          [
            "CAT ≥ 10",
            "Síntomas significativos — umbral para iniciar tratamiento regular, incluyendo la disnea"
          ]
        ],
        "nota": "<span class=\"fuente-ampliada\">Se recomienda usar una evaluación multidimensional (no solo mMRC): un paciente con mMRC bajo puede igual tener CAT alto por otros síntomas no capturados por la escala de disnea sola.</span>"
      },
      {
        "titulo": "4️⃣ Tercero: ¿cuántas exacerbaciones ha tenido? + síntomas → Grupo GOLD A/B/E",
        "contexto": "Con el FEV1 (GOLD 1-4) y los síntomas (mMRC/CAT) ya medidos, el ÚLTIMO dato que falta — y el que más pesa para elegir tratamiento — es el historial de exacerbaciones. GOLD reconoce que las exacerbaciones predicen peor pronóstico incluso más que el nivel de síntomas, por eso el grupo E se define SOLO por exacerbaciones, sin importar qué tan sintomático esté el paciente.",
        "columnas": [
          "Grupo",
          "Exacerbaciones en el último año",
          "Síntomas"
        ],
        "filas": [
          [
            "Grupo A",
            "0–1 exacerbación sin hospitalización",
            "Pocos síntomas (mMRC 0-1, CAT <10)"
          ],
          [
            "Grupo B",
            "0–1 exacerbación sin hospitalización",
            "Más síntomas (mMRC ≥2, CAT ≥10)"
          ],
          [
            "Grupo E",
            "≥2 exacerbaciones, o ≥1 con hospitalización",
            "Independiente del nivel de síntomas"
          ]
        ],
        "nota": "Este grupo A/B/E (NO el GOLD 1-4) es el que directamente decide con qué fármaco empezar — revisa el algoritmo de tratamiento más abajo."
      },
      {
        "titulo": "5️⃣ ¿Necesita corticoide inhalado además del broncodilatador? — Eosinófilos en sangre",
        "contexto": "Ya sabes el grupo (A/B/E) y por tanto el broncodilatador base — pero falta un dato para decidir si además conviene agregar un corticoide inhalado (GCI) desde el inicio: el conteo de eosinófilos en sangre, que predice qué tanto se va a beneficiar ESE paciente en particular del componente antiinflamatorio del GCI.",
        "columnas": [
          "Recuento",
          "Implicancia terapéutica"
        ],
        "filas": [
          [
            "< 100 células/µl",
            "Poco o ningún efecto del GCI — evitar, aumenta riesgo de neumonía sin beneficio claro"
          ],
          [
            "100–300 células/µl",
            "Efecto moderado del GCI"
          ],
          [
            "> 300 células/µl",
            "Mayor probabilidad de beneficio del GCI — considerar añadirlo desde el inicio en grupo E"
          ]
        ],
        "nota": "El uso de eosinófilos para predecir el efecto del GCI debe combinarse SIEMPRE con la evaluación clínica del riesgo de exacerbación — no se usa aislado."
      }
    ],
    "imagenExamenFisico": {
      "src": "assets/epoc/epoc-rx-hiperinflacion.jpg",
      "caption": "Radiografía real de tu clase — espacios intercostales ensanchados y diafragma aplanado, los dos signos radiológicos de hiperinsuflación que corresponden al 'tórax en tonel' que sientes al examen físico",
      "explicacion": "Es la contraparte radiológica de lo que sientes al examinar al paciente. Los espacios intercostales ensanchados (flecha derecha) ocurren porque el tórax se queda 'atrapado' en una posición de inspiración permanente — el mismo mecanismo que produce el tórax en tonel al examen físico. El diafragma aplanado (línea punteada inferior) es el signo más específico de hiperinsuflación crónica: un diafragma normal se ve curvo/en cúpula; aquí está literalmente empujado hacia abajo por el volumen de aire atrapado, lo que además explica por qué estos pacientes tienen el signo de Hoover — un diafragma ya aplanado no puede seguir contrayéndose de forma eficiente, así que la parrilla costal inferior se mueve paradójicamente hacia adentro en cada inspiración en vez de expandirse."
    },
    "asiLoPreguntanExamen": {
      "intro": "Basado en el patrón real de tus exámenes pasados de Medicina Interna I (parciales, modulares e integrados): rara vez piden solo el dato — casi siempre piden calcular/clasificar y sustentar el razonamiento.",
      "ejercicios": [
        {
          "tipo": "Calcular y clasificar (el más frecuente)",
          "planteamiento": "Paciente con FEV1 55% del predicho, CAT 12, 1 exacerbación leve sin hospitalización el último año. Clasifique GOLD y grupo A/B/E, y sustente.",
          "respuestaModelo": "GOLD 2 (moderado): FEV1 55% cae en el rango 50-79%. Grupo B: CAT ≥10 (síntomas significativos) + solo 1 exacerbación sin hospitalización (no cumple criterio de grupo E, que exige ≥2 o ≥1 con hospitalización)."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste 4 vacunas recomendadas específicamente para el paciente con EPOC.",
          "respuestaModelo": "Antineumocócica, antigripal (anual), COVID-19, y una de: Tdap, herpes zóster, o VSR."
        },
        {
          "tipo": "Indique y sustente (examen físico)",
          "planteamiento": "¿Qué esperaría encontrar al examen físico respiratorio de un paciente con EPOC en fase avanzada, y por qué?",
          "respuestaModelo": "Tórax en tonel (hiperinsuflación crónica), murmullo vesicular disminuido difusamente (menos aire se mueve), espiración prolongada (colapso de vía aérea pequeña en espiración), y signo de Hoover (diafragma aplanado que ya no se contrae eficientemente, causando movimiento paradójico de la parrilla costal inferior)."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "Limitación crónica y poco reversible del flujo aéreo por daño combinado de bronquiolos + parénquima",
      "Principal causa: tabaquismo (aunque GETomics = genes+ambiente+tiempo explica por qué no todos los fumadores desarrollan EPOC)",
      "Espirometría post-BD confirma (FEV1/FVC<0.70) → GOLD 1-4 mide gravedad → grupo A/B/E decide tratamiento"
    ],
    "clinica": "Disnea progresiva + tos crónica productiva + antecedente de exposición a factores de riesgo.",
    "diagnostico": "Espirometría post-broncodilatador obligatoria (FEV1/FVC<0.7) + mMRC/CAT + historial de exacerbaciones.",
    "tratamientoResumen": "Cese de tabaco (siempre) + vacunas + rehabilitación > tratamiento por grupo: A=broncodilatador simple, B=LABA+LAMA, E=LABA+LAMA(+GCI si eos≥300) > escalar según disnea o exacerbaciones persistentes.",
    "diferenciales": [
      {
        "entidad": "Asma",
        "clave": "Reversibilidad significativa post-BD (>12% y 200mL), inicio en edad temprana"
      },
      {
        "entidad": "Insuficiencia cardiaca",
        "clave": "Ortopnea, edema, crépitos bibasales, BNP elevado"
      },
      {
        "entidad": "Bronquiectasias",
        "clave": "Esputo abundante purulento diario + TC con dilatación bronquial (signo del anillo de sello)"
      }
    ],
    "tablaComparativa": {
      "titulo": "EPOC vs Asma",
      "filas": [
        [
          "Edad de inicio",
          "> 40 años",
          "Infancia/adolescencia"
        ],
        [
          "Reversibilidad",
          "Parcial/ausente",
          "Significativa (>12% y 200mL)"
        ],
        [
          "Antecedente",
          "Tabaquismo",
          "Atopia/alergias"
        ]
      ]
    },
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — todo el algoritmo en una sola tabla",
      "columnas": [
        "Grupo",
        "Cómo se define",
        "Tratamiento inicial",
        "Si persisten síntomas/exacerbaciones"
      ],
      "filas": [
        [
          "A",
          "0-1 exac. sin hosp. + mMRC 0-1/CAT<10",
          "Broncodilatador simple",
          "Escalar a LABA+LAMA"
        ],
        [
          "B",
          "0-1 exac. sin hosp. + mMRC≥2/CAT≥10",
          "LABA+LAMA",
          "Descartar otras causas de disnea antes de escalar más"
        ],
        [
          "E",
          "≥2 exac. o ≥1 con hospitalización",
          "LABA+LAMA (+GCI si eos≥300)",
          "+GCI si eos≥100 → considerar roflumilast/macrólido"
        ]
      ],
      "nota": "Esta tabla resume TODO el algoritmo de tratamiento (Profundo) en una sola línea de repaso — para el detalle completo de cada escalón, revisa Profundo."
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Cómo se confirma EPOC? → Espirometría post-BD con FEV1/FVC<0.70 — NUNCA solo por clínica",
      "¿Qué mide GOLD 1-4? → Gravedad de la OBSTRUCCIÓN (FEV1 % del predicho) — no decide el tratamiento por sí solo",
      "¿Qué decide el tratamiento inicial? → El grupo A/B/E (síntomas + exacerbaciones), NO el GOLD 1-4",
      "¿Cuándo es automáticamente grupo E? → ≥2 exacerbaciones en el año, o ≥1 que requirió hospitalización — sin importar los síntomas",
      "¿Cuándo considerar GCI (corticoide inhalado)? → Eosinófilos ≥300 desde el inicio en grupo E; ≥100 si escalas por exacerbaciones persistentes",
      "¿Cuál es la ÚNICA intervención no farmacológica que cambia la sobrevida por sí sola? → Dejar de fumar",
      "¿Cuándo indicar oxigenoterapia domiciliaria? → PaO2≤55 mmHg o SatO2≤88%",
      "¿Cuándo indicar VMNI? → PaCO2≥53 mmHg + antecedente de hospitalización por insuficiencia respiratoria aguda",
      "¿Cuándo sospechar déficit de alfa-1 antitripsina? → EPOC de inicio temprano (<45 años) SIN tabaquismo significativo"
    ],
    "redFlags": [
      "Disnea en reposo con uso de músculos accesorios → posible exacerbación grave",
      "Disminución de la FR en paciente que antes usaba músculos accesorios → agotamiento respiratorio, NO mejoría",
      "Cianosis o alteración del sensorio → evaluar insuficiencia respiratoria"
    ],
    "erroresFrecuentes": [
      "Diagnosticar EPOC solo por clínica sin espirometría",
      "Usar la clasificación GOLD vieja (grupos A/B/C/D) — desde 2023 es A/B/E, el grupo E reemplazó a C y D",
      "Confundir con asma sin evaluar reversibilidad post-broncodilatador",
      "Exigir fiebre como criterio de exacerbación — NO es un criterio de Anthonisen",
      "Calcular el PaFi (PaO2/FiO2) usando la FiO2 equivocada — verifica SIEMPRE con qué FiO2 real está el paciente antes de dividir (es un error muy fácil de cometer bajo presión de examen)"
    ],
    "asociacionesClinicas": [
      "EPOC + cor pulmonale → edema de miembros inferiores, ingurgitación yugular",
      "EPOC + inicio <45 años sin tabaquismo → descartar déficit de alfa-1 antitripsina"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "intermedio",
      "vineta": "(Caso real de tu clase) Un varón de 68 años acude a consulta por disnea progresiva desde hace 2 años, que ha empeorado en los últimos 6 meses. Refiere tos con expectoración mucosa, especialmente matutina. Tiene antecedente de tabaquismo de 40 paquetes-año, suspendido hace 3 años. No presenta antecedentes de asma ni alergias conocidas. Al examen físico: tórax en 'barril', ruidos respiratorios disminuidos, espiración prolongada, sibilancias. Espirometría: FEV1/FVC 60% post-broncodilatador, FEV1 55% del valor predicho. Evaluación: CAT score 12, 1 exacerbación leve en el último año, sin hospitalización.",
      "preguntaMC": {
        "enunciado": "¿Cuál es el diagnóstico más probable y la mejor opción terapéutica inicial según la clasificación GOLD 2024?",
        "opciones": [
          {
            "id": "a",
            "texto": "Asma persistente moderada; iniciar corticosteroides inhalados + beta-agonistas de acción prolongada (CI + LABA)"
          },
          {
            "id": "b",
            "texto": "EPOC moderado, grupo B; iniciar un broncodilatador de acción prolongada (LAMA o LABA)"
          },
          {
            "id": "c",
            "texto": "EPOC leve, grupo A; solo seguimiento clínico sin necesidad de tratamiento farmacológico"
          },
          {
            "id": "d",
            "texto": "EPOC grave, grupo E; iniciar terapia triple (LAMA + LABA + CI)"
          },
          {
            "id": "e",
            "texto": "Bronquitis crónica sin obstrucción; tratamiento antibiótico y mucolíticos"
          }
        ],
        "correcta": "b",
        "explicacion": "El paciente cumple criterios diagnósticos de EPOC: síntomas respiratorios crónicos, historia de tabaquismo importante, y obstrucción persistente al flujo aéreo (FEV1/FVC <70% post-broncodilatador). El FEV1=55% lo clasifica como EPOC moderado (GOLD 2). El CAT de 12 indica síntomas significativos (>10). Ha tenido solo una exacerbación leve, sin hospitalización → lo ubica en grupo B según GOLD 2024. Por tanto, el tratamiento inicial recomendado es un broncodilatador de acción prolongada (LAMA o LABA). Las demás opciones fallan: (A) no hay criterios para asma; (C) no corresponde a grupo A porque tiene síntomas significativos (CAT>10); (D) no pertenece al grupo E porque no tiene ≥2 exacerbaciones ni hospitalizaciones; (E) tiene obstrucción confirmada por espirometría, no es bronquitis crónica simple sin obstrucción."
      },
      "preguntaEscrita": {
        "enunciado": "Explica el mecanismo fisiopatológico por el cual este paciente presenta el signo de labios fruncidos al respirar, y por qué ese mismo mecanismo explica el 'tórax en tonel' al examen físico.",
        "respuestaModelo": "La destrucción del parénquima alveolar y la pérdida de retracción elástica hacen que la vía aérea pequeña tienda a colapsar durante la espiración forzada. Al respirar con labios fruncidos, el paciente genera una resistencia adicional en la salida del aire que aumenta la presión dentro de la vía aérea, evitando ese colapso precoz y permitiendo vaciar mejor los pulmones. El mismo problema de fondo — aire atrapado que no se logra expulsar por completo en cada ciclo — lleva a hiperinsuflación pulmonar crónica, que con el tiempo remodela la caja torácica hacia el 'tórax en tonel'."
      }
    },
    {
      "nivel": "basico",
      "vineta": "Mujer de 58 años con EPOC conocido (grupo B) en tratamiento con LAMA, acude a emergencia por aumento de la disnea habitual, mayor volumen de esputo y cambio a esputo purulento en los últimos 2 días. No tiene fiebre. Saturación 91% con FiO2 ambiental, FR 24/min, sin uso marcado de músculos accesorios.",
      "preguntaMC": {
        "enunciado": "¿Cuál de los siguientes NO es un criterio típico para diagnosticar una exacerbación de EPOC en esta paciente?",
        "opciones": [
          {
            "id": "a",
            "texto": "Aumento de la disnea basal"
          },
          {
            "id": "b",
            "texto": "Aumento del volumen del esputo"
          },
          {
            "id": "c",
            "texto": "Cambio del esputo a purulento"
          },
          {
            "id": "d",
            "texto": "Presencia de fiebre alta como criterio obligatorio"
          }
        ],
        "correcta": "d",
        "explicacion": "Los criterios clásicos (criterios de Anthonisen) son: aumento de la disnea, aumento del volumen del esputo, y cambio a esputo purulento — con 2 de 3 ya se sospecha exacerbación. La fiebre NO es un criterio obligatorio ni forma parte de esta tríada; muchas exacerbaciones de EPOC cursan sin fiebre, a diferencia de una neumonía."
      },
      "preguntaEscrita": {
        "enunciado": "¿Con cuántos y cuáles criterios de Anthonisen cursa esta paciente, y qué implicancia tiene eso sobre la indicación de antibióticos?",
        "respuestaModelo": "Cursa con los 3 criterios de Anthonisen: aumento de disnea, aumento del volumen de esputo, y esputo purulento. Con los 3 criterios presentes (especialmente la purulencia, que sugiere causa bacteriana) sí está indicado iniciar antibióticos empíricos, además del ajuste de broncodilatadores y considerar corticoide sistémico según la gravedad de la exacerbación (que en este caso sería MODERADA: SABA + corticoide oral ± antibiótico, ya que no requiere hospitalización)."
      }
    },
    {
      "nivel": "avanzado",
      "vineta": "Varón de 70 años con EPOC grupo E conocido, ingresa por disnea severa de 24h, somnoliento pero despertable. Gasometría arterial: pH 7.28, PaCO2 68 mmHg, PaO2 52 mmHg, HCO3 28 mEq/L. FR 12/min (bradipneico), usa musculatura accesoria de forma decreciente.",
      "preguntaMC": {
        "enunciado": "¿Cómo interpretas esta gasometría y cuál es la conducta más urgente?",
        "opciones": [
          {
            "id": "a",
            "texto": "Acidosis metabólica compensada — solo requiere hidratación"
          },
          {
            "id": "b",
            "texto": "Acidosis respiratoria aguda sobre crónica (HCO3 elevado por compensación renal previa) con hipercapnia severa — considerar ventilación mecánica no invasiva de inmediato"
          },
          {
            "id": "c",
            "texto": "Alcalosis respiratoria — indicar sedación"
          },
          {
            "id": "d",
            "texto": "Gasometría normal para EPOC, no requiere intervención"
          }
        ],
        "correcta": "b",
        "explicacion": "El pH bajo con PaCO2 muy elevada confirma acidosis respiratoria; el HCO3 ya elevado (28) sugiere compensación renal previa (retenedor crónico de CO2) sobre la que se sobreagrega una descompensación aguda. La disminución de la FR en un paciente que antes usaba músculos accesorios es un signo de ALARMA (agotamiento respiratorio, no mejoría) — requiere soporte ventilatorio urgente, típicamente VMNI si no hay contraindicación, cumpliendo el criterio de PaCO2≥53 con deterioro agudo."
      },
      "preguntaEscrita": {
        "enunciado": "¿Por qué la disminución de la frecuencia respiratoria en este paciente es un signo de alarma y no de mejoría clínica?",
        "respuestaModelo": "Un paciente que venía taquipneico y usando músculos accesorios para compensar la falla respiratoria, si de pronto reduce su frecuencia respiratoria sin que mejoren los demás parámetros (gasometría, estado de conciencia), generalmente indica agotamiento de la musculatura respiratoria — ya no tiene fuerza para mantener el esfuerzo compensatorio, no que su situación esté mejorando. Es un signo de insuficiencia respiratoria inminente que requiere soporte ventilatorio urgente."
      }
    }
  ],
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1eODa1niiD7cNWDqvvU6vJ1W-siV09wJI/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_2_SESIÓN-5-TEMA-2: Enfermedad Pulmonar Obstructiva Crónica"
  }
},

  {
  "id": "asma-bronquial",
  "nombre": "Asma bronquial",
  "area": "Neumología",
  "semanas": [
    "semana-01"
  ],
  "favorito": false,
  "estudiado": false,
  "tipoIlustracion": "obstructivo",
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1mEiSCA6VvcpTUhRnxwH2QVdPISP_P4fJ/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_1_SESIÓN-2-TEMA-3: Asma Bronquial"
  },
  "relacionadas": [
    {
      "id": "epoc",
      "relacion": "Principal diagnóstico diferencial — ambas cursan con obstrucción de la vía aérea, pero se distinguen por reversibilidad y edad de inicio"
    }
  ],
  "profundo": {
    "definicion": "Enfermedad crónica potencialmente grave que causa síntomas respiratorios como sibilancias, dificultad para respirar, opresión en el pecho y tos, que varían en intensidad y frecuencia. Estos síntomas están asociados a una limitación variable del flujo de aire espiratorio debido a broncoconstricción, engrosamiento de las vías respiratorias y aumento de mucosidad. <span class=\"fuente-ampliada\">Afecta a más de 25 millones de personas en EE. UU., con una prevalencia del 7.8% en adultos — y el dato más preocupante: el 62% de los adultos con asma NO tienen sus síntomas adecuadamente controlados.</span>",
    "epidemiologia": "Es una de las enfermedades crónicas más comunes en atención primaria. Afortunadamente, con el manejo adecuado la mayoría de los pacientes puede lograr buen control — atletas olímpicos y personas con vidas plenamente activas conviven con asma bien controlada.",
    "etiologiaFactoresRiesgo": [
      "Infecciones virales respiratorias",
      "Alérgenos domésticos (ácaros, polen, cucarachas)",
      "Alérgenos laborales (asma ocupacional)",
      "Humo del tabaco",
      "Ejercicio y aire frío",
      "Estrés emocional",
      "Algunos medicamentos (beta bloqueadores, aspirina, AINE)"
    ],
    "criteriosDiagnosticos": "El diagnóstico requiere DOS elementos: (1) antecedente de síntomas respiratorios variables (sibilancias, falta de aire, opresión torácica, tos — que varían en intensidad y en el tiempo, empeoran con infecciones virales, y se desencadenan por ejercicio, risa, alérgenos o aire frío), y (2) evidencia objetiva de limitación variable del flujo aéreo (documentada por pruebas de función pulmonar que muestren reversibilidad con broncodilatadores, o variabilidad del flujo espiratorio pico). Es importante confirmar el diagnóstico con evidencia objetiva ANTES de iniciar tratamiento con corticosteroides inhalados (ICS), ya que una vez iniciado el tratamiento se vuelve más difícil demostrar la reversibilidad.",
    "fisiopatologia": {
      "resumen": "Las células epiteliales de la vía aérea no son solo una barrera física — son actores inmunológicamente activos. En el asma, esta barrera está alterada (pierde proteínas de unión estrecha), y ante alérgenos libera 'alarminas' (IL-33, TSLP, IL-25) que disparan dos cascadas inflamatorias paralelas: la vía Th2/ILC2 (más lenta, orquestada por células dendríticas) y la vía de mastocitos/basófilos (inmediata, mediada por IgE).",
      "imagenes": [
        {
          "src": "assets/asma/asma-cascada-th2-ilc2.jpg",
          "caption": "Cascada Th2/ILC2 (de tu clase)",
          "explicacion": "Este diagrama muestra el brazo 'lento' de la respuesta: el complejo TH2/ILC2 (centro) recibe la señal de IL-33/TSLP desde el epitelio y responde liberando 3 citoquinas clave, cada una con un efecto distinto — memorízalas por separado: IL-5 → reclutamiento de eosinófilos (con sus gránulos característicos: los cristales de Charcot-Leyden); IL-13 → remodelación de la vía aérea + metaplasia de células caliciformes (más moco) + hiperreactividad bronquial; IL-4 → producción de IgE alérgeno-específica. Fíjate también en ICAM1/VCAM1 en la parte inferior — son moléculas de adhesión que 'preparan la pared del vaso' para que más células inflamatorias puedan salir de la sangre hacia el tejido (extravasación)."
        },
        {
          "src": "assets/asma/asma-mastocitos-basofilos.jpg",
          "caption": "Vía de mastocitos/basófilos — reacción alérgica temprana y tardía",
          "explicacion": "Este es el brazo 'rápido' e inmediato: los alérgenos activan receptores TLR4/PAR2 en el epitelio, que libera TSLP/IL-33/IL-1 — estas señales entrecruzan la IgE ya pegada a mastocitos y basófilos, haciendo que liberen histamina, PGD2 y citoquinas de inmediato. Fíjate en las 2 fases marcadas abajo: 'Reacción alérgica temprana' (plasma extravasation, vasodilatación — minutos) y 'Reacción alérgica tardía' (vessel wall priming — horas después). Esto explica clínicamente por qué algunos pacientes tienen una caída inicial de la función pulmonar que mejora, y luego una SEGUNDA caída varias horas después — son las dos fases de esta misma cascada."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">Estas dos vías no son independientes — se retroalimentan. La vía de mastocitos genera la broncoconstricción inmediata que sientes como \"crisis\", mientras que la vía Th2/ILC2 mantiene la inflamación crónica de fondo que hace que la vía aérea esté \"hiperreactiva\" incluso entre crisis, lista para reaccionar de forma exagerada al próximo estímulo. Por eso el tratamiento de mantenimiento (ICS) ataca la inflamación crónica (vía Th2), mientras que el rescate (SABA o formoterol) ataca la broncoconstricción aguda (vía mastocitos) — son dos problemas distintos que requieren dos tipos de fármaco distintos, y es la base de por qué 'solo usar el inhalador de rescate' nunca es suficiente.</span>",
      "cascada": [
        {
          "paso": "Factor desencadenante",
          "detalle": "Alérgeno, infección viral, ejercicio, aire frío u otro desencadenante altera la barrera epitelial (pérdida de proteínas de unión estrecha)"
        },
        {
          "paso": "Alarminas epiteliales",
          "detalle": "El epitelio dañado libera IL-33, TSLP e IL-25 — activan dos vías en paralelo"
        },
        {
          "paso": "Vía rápida (mastocitos/basófilos)",
          "detalle": "IgE ya fijada se entrecruza → liberación inmediata de histamina, PGD2, leucotrienos"
        },
        {
          "paso": "Vía lenta (Th2/ILC2)",
          "detalle": "Células dendríticas presentan antígeno → diferenciación Th2 → IL-4 (IgE), IL-5 (eosinófilos), IL-13 (remodelación + moco)"
        },
        {
          "paso": "Efecto tisular",
          "detalle": "Broncoconstricción inmediata (vía rápida) + inflamación crónica, hiperreactividad y remodelación de la vía aérea (vía lenta)"
        },
        {
          "paso": "Manifestación clínica",
          "detalle": "Sibilancias, disnea, opresión torácica y tos — variables en el tiempo, con posible reacción alérgica tardía horas después"
        }
      ]
    },
    "clinica": [
      {
        "signo": "Sibilancias",
        "detallePPT": "Síntoma respiratorio variable, cambia en intensidad y frecuencia.",
        "mecanismo": "Turbulencia del flujo aéreo por broncoconstricción y estrechamiento de la vía."
      },
      {
        "signo": "Disnea / dificultad para respirar",
        "detallePPT": "Varía con el tiempo, empeora con desencadenantes.",
        "mecanismo": "Limitación del flujo aéreo espiratorio por broncoconstricción + engrosamiento de la pared + moco."
      },
      {
        "signo": "Opresión en el pecho",
        "detallePPT": "Sensación subjetiva de presión torácica.",
        "mecanismo": "Hiperinsuflación dinámica durante episodios de obstrucción."
      },
      {
        "signo": "Tos",
        "detallePPT": "Puede ser el único síntoma en algunos casos ('variante de asma con tos').",
        "mecanismo": "Estimulación de receptores de la vía aérea por inflamación e hiperreactividad bronquial."
      }
    ],
    "examenFisico": [
      "La exploración física suele ser NORMAL entre crisis",
      "Sibilancias a la auscultación — el hallazgo más frecuente, especialmente en la ESPIRACIÓN FORZADA"
    ],
    "semiologia": {
      "inspeccion": "Entre crisis, el paciente puede verse completamente normal — no descartes asma por una exploración física sin hallazgos. Durante una crisis, busca uso de músculos accesorios y dificultad para hablar en oraciones completas (marcador de gravedad).",
      "palpacion": "Habitualmente sin hallazgos específicos fuera de una crisis.",
      "percusion": "Normal — el asma no produce cambios de matidez o hiperresonancia como las enfermedades pleurales.",
      "auscultacion": "El hallazgo más importante: sibilancias, especialmente al pedirle al paciente que espire FORZADO — esto 'saca a relucir' sibilancias que no se escuchan en respiración normal, porque el estrechamiento de la vía aérea es más evidente cuando el aire tiene que salir más rápido por un espacio ya reducido. <span class=\"fuente-ampliada\">Un dato de alarma: en una crisis MUY grave, las sibilancias pueden desaparecer — no porque el paciente mejoró, sino porque ya casi no está entrando ni saliendo aire (tórax silente), lo que es un signo de gravedad extrema, no de mejoría.</span>"
    },
    "tablasClinicas": [
      {
        "titulo": "📊 Clasificación de gravedad del asma (evaluación inicial, sin tratamiento)",
        "contexto": "Esta tabla se usa SOLO en pacientes que aún no reciben tratamiento de control — combina 2 dominios: Impairment (deterioro actual: síntomas, despertares nocturnos, uso de SABA, limitación de actividad, FEV1) y Risk (riesgo futuro: exacerbaciones/año que requirieron corticoide oral). Regla clave: se asigna la categoría MÁS GRAVE en la que aparezca cualquier característica — no un promedio entre todas.",
        "columnas": [
          "Categoría",
          "Síntomas diurnos",
          "Despertares nocturnos",
          "Uso de SABA de rescate"
        ],
        "filas": [
          [
            "Intermitente",
            "≤2 días/semana",
            "≤2 veces/mes",
            "≤2 días/semana"
          ],
          [
            "Persistente leve",
            ">2 días/semana, no diario",
            "3-4 veces/mes",
            ">2 días/semana, no diario"
          ],
          [
            "Persistente moderada",
            "Diario",
            ">1 vez/semana, no cada noche",
            "Diario"
          ],
          [
            "Persistente grave",
            "Durante todo el día",
            "Frecuente, a menudo cada noche",
            "Varias veces al día"
          ]
        ],
        "nota": "<span class=\"fuente-ampliada\">GINA recomienda evitar el término \"asma leve\" cuando sea posible — genera la falsa idea de que implica bajo riesgo. Incluso pacientes con síntomas infrecuentes pueden tener exacerbaciones graves.</span>"
      },
      {
        "titulo": "💊 Abordaje escalonado del tratamiento (GINA, adultos y adolescentes)",
        "contexto": "GINA ya NO recomienda tratar el asma solo con SABA (broncodilatador de rescate solo) — aumenta el riesgo de exacerbaciones y muerte. TODOS los pacientes deben recibir un corticoide inhalado (ICS), incluso con síntomas infrecuentes.",
        "columnas": [
          "Escalón",
          "Vía 1 (preferida)",
          "Vía 2 (alternativa)"
        ],
        "filas": [
          [
            "Paso 1",
            "ICS-formoterol dosis baja según necesidad",
            "ICS dosis baja cada vez que se toma SABA"
          ],
          [
            "Paso 2",
            "ICS-formoterol dosis baja según necesidad",
            "ICS dosis baja diaria + SABA según necesidad"
          ],
          [
            "Paso 3",
            "ICS-formoterol dosis baja como mantenimiento y rescate (MART)",
            "ICS-LABA dosis baja + SABA según necesidad"
          ],
          [
            "Paso 4",
            "ICS-formoterol dosis intermedia como MART",
            "ICS-LABA dosis intermedia/alta + SABA según necesidad"
          ],
          [
            "Paso 5",
            "Referir para evaluación fenotípica + tratamiento biológico complementario",
            "—"
          ]
        ],
        "nota": "MART = Maintenance And Reliever Therapy (mantenimiento Y rescate con el MISMO inhalador de ICS-formoterol) — reduce el riesgo de exacerbaciones graves comparado con SABA de rescate, y es más simple para el paciente."
      },
      {
        "titulo": "💉 Dosis bajas de corticosteroides inhalados (ejemplos, adultos)",
        "columnas": [
          "Fármaco",
          "Dosis baja diaria"
        ],
        "filas": [
          [
            "Beclometasona (HFA)",
            "200-500 mcg/día"
          ],
          [
            "Budesonida (DPI)",
            "200-400 mcg/día"
          ],
          [
            "Fluticasona propionato",
            "100-250 mcg/día"
          ]
        ],
        "nota": "Las dosis bajas dan la MAYOR PARTE del beneficio clínico para la mayoría de los pacientes — muy pocos necesitan dosis altas, que además aumentan el riesgo de efectos secundarios."
      }
    ],
    "diagnostico": "Se debe identificar tanto los síntomas característicos como la evidencia objetiva de limitación variable del flujo aéreo, documentándolo ANTES de iniciar ICS. En situaciones especiales: asma ocupacional (preguntar exposiciones laborales), embarazo (confirmar objetivamente, evitar pruebas de provocación, NO suspender el ICS — es más seguro seguir tratando que dejar el asma sin controlar), adultos mayores (puede estar sub o sobrediagnosticado, considerar síndrome de superposición asma-EPOC en fumadores), y tos como único síntoma (considerar variante tusígena, goteo posnasal, ERGE, tos por IECA, o disfunción de cuerdas vocales).",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Sospecha clínica: síntomas respiratorios variables (sibilancias, disnea, opresión, tos) + antecedente de desencadenantes"
      },
      {
        "tipo": "paso",
        "texto": "Confirmar con evidencia objetiva de limitación variable del flujo aéreo (espirometría con reversibilidad, o variabilidad del PEF) — ANTES de iniciar ICS"
      },
      {
        "tipo": "decision",
        "texto": "¿Paciente ya recibe tratamiento de control?",
        "salidas": [
          {
            "etiqueta": "NO — evaluación inicial",
            "texto": "Clasificar gravedad (Intermitente/Leve/Moderada/Grave) según impairment + risk → iniciar en el escalón correspondiente",
            "color": "coral"
          },
          {
            "etiqueta": "SÍ — en seguimiento",
            "texto": "Evaluar CONTROL (no gravedad) con ACT o Asthma APGAR → ciclo evaluar-ajustar-revisar",
            "color": "mint"
          }
        ]
      },
      {
        "tipo": "paso",
        "texto": "Antes de escalar tratamiento por mal control: descartar técnica de inhalación incorrecta, mala adherencia, exposición ambiental persistente, diagnóstico incorrecto, o comorbilidades no tratadas"
      }
    ],
    "diagnosticoDiferencial": [
      "EPOC (y síndrome de superposición asma-EPOC)",
      "Goteo posnasal / sinusitis crónica",
      "ERGE",
      "Tos inducida por IECA",
      "Disfunción de cuerdas vocales"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Plan de acción por escrito para TODOS los pacientes (manuscrito, impreso, digital o pictórico)",
        "Técnica correcta de inhalador — hasta el 80% de los pacientes NO usa bien su inhalador, lo que contribuye directamente al mal control; revisar en cada oportunidad y corregir por demostración física",
        "Automanejo guiado: información sobre la enfermedad, adherencia, automonitoreo de síntomas/flujo pico, revisiones médicas regulares"
      ],
      "farmacologico": [
        "TODOS los pacientes con asma necesitan ICS (corticoide inhalado), incluso con síntomas poco frecuentes",
        "Inhalador de rescate: ICS-formoterol es el PREFERIDO (reduce exacerbaciones graves en dos tercios comparado con SABA solo) — alternativas: ICS-SABA o SABA solo",
        "GINA ya NO recomienda SABA solo por seguridad — mayor riesgo de exacerbaciones y muerte, y el uso excesivo (≥3 inhaladores/año) predice crisis graves",
        "Tratamiento escalonado según Pasos 1-5 (ver tabla) — subir o bajar según control de síntomas y riesgo de exacerbación",
        "Considerar reducir tratamiento tras 2-3 meses de buen control (bajar ICS 25-50% cada 2-3 meses) — pero NUNCA suspender completamente el ICS en adultos/adolescentes con diagnóstico de asma",
        "OCS (corticoide oral) de mantenimiento SOLO como último recurso, por sus efectos secundarios graves"
      ]
    },
    "exacerbaciones": {
      "definicion": "Las crisis de asma pueden ser fatales incluso en personas con asma aparentemente leve — son más comunes y graves cuando el asma no está controlada o en pacientes de alto riesgo.",
      "clasificacion": [
        [
          "Reduce con ICS",
          "El tratamiento regular con ICS reduce notablemente la frecuencia y gravedad de crisis, y el riesgo de muerte"
        ],
        [
          "Plan de acción",
          "Todo paciente debe tener un plan de acción escrito para saber qué hacer si empeora"
        ]
      ]
    },
    "prevencion": "Control ambiental de desencadenantes conocidos, adherencia al ICS de mantenimiento (incluso sin síntomas frecuentes), técnica correcta de inhalador, y plan de acción escrito.",
    "perlasProfundo": "Evita pensar en 'asma leve' como sinónimo de 'bajo riesgo' — el dato más importante de esta clase es que incluso pacientes con síntomas infrecuentes pueden tener exacerbaciones graves o fatales. El tratamiento con ICS no es opcional según la 'gravedad percibida', es la base para TODOS.",
    "asiLoPreguntanExamen": {
      "intro": "Basado en el patrón real de tus exámenes: casi siempre presentan un caso y piden clasificar (usando la Tabla de gravedad) + sustentar el razonamiento — exactamente como el caso real que trae tu propio PPT.",
      "ejercicios": [
        {
          "tipo": "Clasificar y sustentar (el más frecuente)",
          "planteamiento": "Paciente con síntomas diarios, despertares nocturnos 2 veces por semana, uso de SABA diario. Clasifique la gravedad del asma y sustente.",
          "respuestaModelo": "Persistente moderada: síntomas diarios + despertares nocturnos >1 vez/semana (pero no cada noche) + uso diario de SABA — estos 3 datos ya superan el umbral de persistente leve (síntomas >2 días/semana pero no diarios) sin llegar al patrón de persistente grave (síntomas durante todo el día, despertares casi cada noche)."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste 4 factores desencadenantes comunes de asma mencionados en tu clase.",
          "respuestaModelo": "Cualquier 4 de: infecciones virales respiratorias, alérgenos domésticos, alérgenos laborales, humo de tabaco, ejercicio/aire frío, estrés emocional, medicamentos (beta bloqueadores, aspirina, AINE)."
        },
        {
          "tipo": "Indique y sustente (examen físico)",
          "planteamiento": "¿Por qué la exploración física de un paciente con asma puede ser completamente normal, y qué maniobra específica ayuda a encontrar el hallazgo más característico?",
          "respuestaModelo": "Porque la limitación del flujo aéreo en el asma es VARIABLE — entre crisis, la vía aérea puede estar prácticamente sin obstrucción activa. La maniobra clave es pedirle al paciente que realice una ESPIRACIÓN FORZADA, que 'saca a relucir' sibilancias que no se escuchan en respiración normal, porque el estrechamiento se hace más evidente cuando el aire debe salir más rápido por una vía ya reducida."
        }
      ]
    },
    "complicaciones": [
      "Crisis asmática casi fatal (paro respiratorio inminente)",
      "Insuficiencia respiratoria aguda",
      "Neumotórax (por hiperinsuflación severa durante una crisis grave)",
      "Remodelación irreversible de la vía aérea (en asma crónica mal controlada, por inflamación sostenida — pérdida progresiva de función pulmonar con el tiempo)"
    ]
  },
  "repaso": {
    "conceptosClave": [
      "2 elementos para diagnosticar: síntomas respiratorios variables + evidencia objetiva de limitación variable del flujo aéreo",
      "2 vías inflamatorias: Th2/ILC2 (inflamación crónica de fondo) + mastocitos/basófilos (broncoconstricción inmediata)",
      "TODOS los pacientes necesitan ICS — ya no se recomienda SABA solo"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — escalones de tratamiento",
      "columnas": [
        "Paso",
        "Tratamiento preferido (Vía 1)"
      ],
      "filas": [
        [
          "1-2",
          "ICS-formoterol dosis baja según necesidad"
        ],
        [
          "3",
          "ICS-formoterol dosis baja como MART (mantenimiento + rescate)"
        ],
        [
          "4",
          "ICS-formoterol dosis intermedia como MART"
        ],
        [
          "5",
          "Referir + evaluar biológicos (anti-IgE, anti-IL5, anti-IL4R, anti-TSLP)"
        ]
      ],
      "nota": "Antes de subir de escalón: siempre verificar técnica de inhalador, adherencia y exposiciones ambientales."
    },
    "clinica": "Sibilancias + disnea + opresión torácica + tos, variables en el tiempo — examen físico normal entre crisis.",
    "diagnostico": "Síntomas variables + evidencia objetiva de limitación del flujo aéreo (espirometría con reversibilidad), confirmado ANTES de iniciar ICS.",
    "tratamientoResumen": "ICS-formoterol de rescate (preferido, ya no SABA solo) + escalón según gravedad/control + plan de acción escrito + técnica de inhalador.",
    "diferenciales": [
      {
        "entidad": "EPOC",
        "clave": "Reversibilidad post-BD (asma) vs. obstrucción fija (EPOC); inicio en edad temprana vs. >40 años"
      },
      {
        "entidad": "Disfunción de cuerdas vocales",
        "clave": "Estridor más que sibilancias, no responde a broncodilatador"
      }
    ],
    "tablaComparativa": {
      "titulo": "Asma vs EPOC",
      "filas": [
        [
          "Edad de inicio",
          "Infancia/adolescencia",
          "> 40 años"
        ],
        [
          "Reversibilidad",
          "Significativa (>12% y 200mL)",
          "Parcial/ausente"
        ],
        [
          "Antecedente",
          "Atopia/alergias",
          "Tabaquismo"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Qué 2 elementos confirman el diagnóstico? → Síntomas respiratorios variables + evidencia objetiva de limitación variable del flujo aéreo",
      "¿Se debe confirmar el diagnóstico antes o después de iniciar ICS? → ANTES — después es más difícil demostrar reversibilidad",
      "¿Se recomienda SABA solo? → NO, GINA ya no lo recomienda por seguridad (mayor riesgo de exacerbación y muerte)",
      "¿Cuál es el inhalador de rescate preferido? → ICS-formoterol (no SABA solo)",
      "¿Qué hallazgo semiológico es el más frecuente? → Sibilancias en espiración FORZADA (el examen físico basal suele ser normal)",
      "¿Qué significa que las sibilancias desaparezcan en una crisis grave? → Signo de ALARMA (tórax silente por muy poco flujo de aire), no de mejoría",
      "¿Se debe suspender completamente el ICS al mejorar? → NO, nunca suspender completamente en adultos/adolescentes con diagnóstico de asma"
    ],
    "redFlags": [
      "Incapacidad para hablar en oraciones completas durante una crisis → gravedad significativa",
      "Desaparición de sibilancias en plena crisis → tórax silente, señal de gravedad extrema",
      "Uso de ≥3 inhaladores de rescate al año → marcador de riesgo de crisis grave"
    ],
    "erroresFrecuentes": [
      "Tratar con SABA solo sin ICS de base",
      "Asumir que 'asma leve' significa bajo riesgo de exacerbación grave",
      "Suspender completamente el ICS al sentirse bien",
      "No revisar la técnica de inhalador (hasta 80% de los pacientes la usa mal)"
    ],
    "asociacionesClinicas": [
      "Embarazada + asma → NUNCA suspender ICS, es más seguro tratar que dejar sin controlar",
      "Tos como único síntoma → pensar en variante tusígena de asma, pero también en ERGE/goteo posnasal/IECA"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "basico",
      "vineta": "(Caso real de tu clase) Paciente mujer de 25 años gestante de 28 semanas, con diagnóstico de asma bronquial. Es evaluada en la emergencia por presentar sibilancias, tos, episodios de disnea frecuentes, síntomas intercrisis frecuentes, síntomas nocturnos de asma más de 2 veces por semana, sibilancias con esfuerzos mínimos.",
      "preguntaMC": {
        "enunciado": "¿Qué clasificación de gravedad del asma corresponde?",
        "opciones": [
          {
            "id": "a",
            "texto": "Intermitente"
          },
          {
            "id": "b",
            "texto": "Episódica frecuente"
          },
          {
            "id": "c",
            "texto": "Persistente moderada"
          },
          {
            "id": "d",
            "texto": "Persistente grave"
          },
          {
            "id": "e",
            "texto": "Intermitente moderada"
          }
        ],
        "correcta": "c",
        "explicacion": "Según la Tabla de clasificación: síntomas nocturnos >2 veces/semana (pero no cada noche) + síntomas intercrisis frecuentes + sibilancias con esfuerzos mínimos apunta a síntomas diarios/frecuentes con despertares nocturnos >1 vez/semana — el patrón de PERSISTENTE MODERADA. No es intermitente (eso sería ≤2 días/semana y ≤2 despertares/mes — muy por debajo de lo descrito). No es persistente grave (eso implicaría síntomas durante todo el día y despertares casi cada noche). 'Episódica frecuente' e 'intermitente moderada' no son categorías reales de la clasificación estándar — son distractores."
      },
      "preguntaEscrita": {
        "enunciado": "Dado que esta paciente está embarazada, ¿qué consideración especial aplica sobre continuar o suspender su tratamiento con ICS?",
        "respuestaModelo": "NO se debe suspender el ICS durante el embarazo. Es más seguro para la madre y el bebé mantener el asma bien controlada con ICS que dejarla sin tratamiento — el asma mal controlada durante el embarazo representa un riesgo mayor (hipoxia materna-fetal, mayor riesgo de exacerbaciones) que el tratamiento con corticoide inhalado, que es seguro en el embarazo. Además, se debe evitar realizar pruebas de provocación bronquial hasta después del parto."
      }
    },
    {
      "nivel": "avanzado",
      "vineta": "Mujer de 34 años, asma desde la infancia, múltiples hospitalizaciones el último año, rinitis alérgica. Acude a emergencia por disnea intensa, opresión torácica y tos seca de inicio súbito. Usa salbutamol inhalado más de 10 veces al día sin mejoría. PA 140/90, FC 120, FR 32, SatO2 88% aire ambiental. Sibilancias generalizadas, uso de músculos accesorios, dificultad para hablar frases completas. Leucocitos 12,000/mm3 (eosinófilos 6%). AGA: pH 7.28, PaCO2 55 mmHg, PaO2 58 mmHg. Pico de flujo espiratorio <50% del valor personal mejor.",
      "preguntaMC": {
        "enunciado": "¿Cómo interpretas la gasometría de esta paciente en el contexto de su crisis asmática?",
        "opciones": [
          {
            "id": "a",
            "texto": "Alcalosis respiratoria compensatoria esperada — buen signo"
          },
          {
            "id": "b",
            "texto": "Acidosis respiratoria con PaCO2 elevado — signo de ALARMA, indica fatiga de músculos respiratorios y crisis casi fatal"
          },
          {
            "id": "c",
            "texto": "Gasometría normal para una crisis asmática"
          },
          {
            "id": "d",
            "texto": "Acidosis metabólica pura"
          },
          {
            "id": "e",
            "texto": "Alcalosis metabólica"
          }
        ],
        "correcta": "b",
        "explicacion": "En una crisis asmática típica esperaríamos taquipnea con HIPOCAPNIA (alcalosis respiratoria) por hiperventilación compensatoria. Que esta paciente tenga PaCO2 ELEVADO (55 mmHg, con acidosis) es un signo de extrema gravedad — indica que la musculatura respiratoria ya está fatigada y no logra mantener la hiperventilación compensatoria. Esto define una crisis asmática casi fatal, con riesgo de paro respiratorio inminente."
      },
      "preguntaEscrita": {
        "enunciado": "¿Cuál sería el manejo inmediato en emergencia para esta paciente, y qué factores podrían explicar el mal control crónico de su asma?",
        "respuestaModelo": "Manejo inmediato: oxígeno suplementario, salbutamol + ipratropio nebulizados continuos, corticoide sistémico endovenoso, sulfato de magnesio endovenoso (indicado en crisis severas), y evaluación URGENTE para ventilación mecánica dado el patrón de fatiga respiratoria (PaCO2 elevado) — esta paciente está en riesgo de paro respiratorio y debe manejarse en una unidad con capacidad de intubación inmediata. Factores que explican el mal control: uso excesivo de SABA de rescate (>10 veces/día, muy por encima de lo recomendado, y GINA ya no recomienda SABA solo) sin terapia controladora adecuada de base (ICS), múltiples hospitalizaciones previas (marcador de asma de difícil control), y posible mal apego al ICS de mantenimiento."
      }
    },
    {
      "nivel": "intermedio",
      "vineta": "Varón de 19 años, asma diagnosticada a los 8 años, actualmente usa salbutamol 'cuando lo necesita' sin ningún tratamiento diario. Refiere síntomas 4-5 veces por semana, sin despertares nocturnos frecuentes, buena tolerancia al ejercicio. Nunca ha sido hospitalizado.",
      "preguntaMC": {
        "enunciado": "Según el enfoque actual de GINA, ¿cuál es el manejo MÁS apropiado para este paciente?",
        "opciones": [
          {
            "id": "a",
            "texto": "Continuar solo con salbutamol de rescate, ya que no ha sido hospitalizado"
          },
          {
            "id": "b",
            "texto": "Iniciar ICS-formoterol a dosis bajas según necesidad, sin necesidad de terapia diaria"
          },
          {
            "id": "c",
            "texto": "Solo indicar evitar desencadenantes, sin medicación"
          },
          {
            "id": "d",
            "texto": "Corticoide oral de mantenimiento de entrada"
          },
          {
            "id": "e",
            "texto": "Aumentar directamente a dosis altas de ICS-LABA"
          }
        ],
        "correcta": "b",
        "explicacion": "GINA ya NO recomienda SABA solo para ningún paciente con asma, sin importar la frecuencia de síntomas o si nunca ha sido hospitalizado — el riesgo de exacerbación grave existe incluso en pacientes con síntomas 'poco frecuentes'. El tratamiento preferido en el Paso 1-2 es ICS-formoterol a dosis bajas según necesidad (Vía 1), que reduce exacerbaciones graves en dos tercios comparado con SABA solo, sin necesitar terapia diaria obligatoria — es ideal para un paciente con esta adherencia irregular."
      },
      "preguntaEscrita": {
        "enunciado": "Este paciente probablemente seguirá usando su inhalador 'solo cuando lo necesita' independientemente de lo que le indiques. ¿Por qué el esquema ICS-formoterol según necesidad es especialmente adecuado para su perfil, comparado con indicarle ICS diario + SABA de rescate?",
        "respuestaModelo": "Porque el ICS-formoterol según necesidad no depende de que el paciente tome una medicación DIARIA para tener el componente antiinflamatorio — cada vez que usa su inhalador de rescate (que de todas formas iba a usar por sus síntomas), automáticamente también está recibiendo ICS. Esto resuelve directamente el problema de mala adherencia a un tratamiento diario, que es extremadamente común en pacientes con síntomas infrecuentes que no ven la necesidad de tomar medicación todos los días — el estudio muestra que este esquema reduce exacerbaciones graves incluso en pacientes con este patrón de uso irregular."
      }
    }
  ]
},
  {
  "id": "bronquitis-bronquiectasias",
  "nombre": "Bronquitis aguda, bronquitis crónica y bronquiectasias",
  "area": "Neumología",
  "semanas": [
    "semana-01"
  ],
  "favorito": false,
  "estudiado": false,
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1ohOr9-rituv2LyxZ7OFBRtxaO6Z7Y5qT/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_1_SESIÓN-2-TEMA-1: Bronquitis aguda, bronquitis crónica y bronquiectasias"
  },
  "relacionadas": [
    {
      "id": "epoc",
      "relacion": "La bronquitis crónica es uno de los dos fenotipos clásicos del EPOC (junto al enfisema) — cuando la obstrucción se vuelve fija e irreversible, el cuadro pasa a clasificarse como EPOC"
    },
    {
      "id": "neumonia-nac",
      "relacion": "Principal diagnóstico diferencial de bronquitis aguda — la ausencia de infiltrado radiológico y de criterios de respuesta inflamatoria sistémica distingue bronquitis de neumonía"
    }
  ],
  "profundo": {
    "definicion": "Esta clase agrupa 3 entidades relacionadas pero distintas, que se diferencian principalmente por su DURACIÓN y por si el daño es reversible o permanente: <strong>Bronquitis aguda</strong> — proceso inflamatorio autolimitado (1-3 semanas) que afecta las vías respiratorias de mayor calibre del pulmón, extendiéndose hasta los bronquios terciarios; se diagnostica cuando NO hay indicios clínicos ni radiológicos de neumonía. <strong>Bronquitis crónica</strong> — tos con producción de esputo durante al menos 3 meses al año, durante 2 años consecutivos, una vez excluidas otras causas respiratorias o cardíacas. <strong>Bronquiectasias</strong> — enfermedad pulmonar CRÓNICA definida por dilatación PERMANENTE de los bronquios, con síndrome de tos, esputo y exacerbaciones recurrentes.",
    "epidemiologia": "Bronquitis aguda: 44 casos por cada 1,000 adultos/año, afecta al 5% de adultos anualmente, mayor incidencia en otoño e invierno — es la novena enfermedad más frecuente en pacientes ambulatorios en EE.UU. Bronquiectasias: incidencia y prevalencia en aumento a nivel mundial, con retraso diagnóstico de 3.5 a 17 años desde el inicio de síntomas; prevalencia aproximada de 600 por 100,000 personas, más común en mujeres y mayores de 65 años. <span class=\"fuente-ampliada\">El costo anual estimado por paciente con bronquiectasias es de $80,000 USD.</span>",
    "etiologiaFactoresRiesgo": [
      "Bronquitis aguda: principalmente VIRAL (aunque solo se aíslan virus en 8-37% de los casos); bacterias típicas (S. pneumoniae, H. influenzae, M. catarrhalis); bacterias atípicas ~25% (B. pertussis, C. pneumoniae, M. pneumoniae)",
      "Bronquitis crónica: tabaquismo (principal factor de riesgo mundial), combustibles de biomasa, toxinas/contaminantes ambientales, exposiciones ocupacionales",
      "Bronquiectasias — causas hereditarias: fibrosis quística, discinesia ciliar primaria, deficiencia de alfa-1 antitripsina",
      "Bronquiectasias — por inhalación: aspiración, reflujo gastroesofágico, lesión por inhalación tóxica/térmica",
      "Bronquiectasias — postinfecciosas: infecciones del tracto respiratorio inferior en la infancia, bronquitis bacteriana prolongada, infecciones granulomatosas",
      "Bronquiectasias — anomalías estructurales: síndrome de Williams-Campbell, síndrome de Mounier-Kuhn, síndrome de Marfan",
      "Bronquiectasias — trastornos inflamatorios idiopáticos: sarcoidosis, artritis reumatoide, espondilitis anquilosante",
      "Bronquiectasias — obstrucción: asma, EPOC/enfisema, compresión extrínseca de la vía aérea"
    ],
    "criteriosDiagnosticos": "Bronquitis aguda: tos de reciente aparición >1 semana + ausencia de indicios clínicos/radiológicos de neumonía + ausencia de criterios de respuesta inflamatoria sistémica. Bronquitis crónica: tos productiva ≥3 meses/año durante 2 años consecutivos, excluyendo otras causas. Bronquiectasias: TC de alta resolución (TCAR) es el ESTÁNDAR DE ORO — relación broncoarterial >1.5 (normal 0.7), falta de estrechamiento de la vía aérea hacia la periferia, quistes globulares terminales, impactación de moco.",
    "fisiopatologia": {
      "resumen": "Las 3 entidades comparten un mecanismo común de fondo: inflamación de la vía aérea que altera el aclaramiento mucociliar — pero en la bronquiectasia esto se vuelve un CICLO VICIOSO autoperpetuante que termina en daño estructural permanente, a diferencia de la bronquitis aguda (que se resuelve) o crónica (que es funcional, sin dilatación fija).",
      "imagenes": [
        {
          "src": "assets/bronquitis/bronquiectasias-tc-patrones.jpg",
          "caption": "Diagnóstico por imágenes de bronquiectasias (de tu clase)",
          "explicacion": "Panel A (arriba): compara un bronquio NORMAL (izquierda) con uno en bronquiectasia (centro) — fíjate que en el bronquio afectado hay pérdida de cilios, aumento de moco y destrucción de la pared, con el LUMEN dilatado. Este dato anatómico es la clave para entender el signo del 'anillo de sello' que se ve en TC: cuando el bronquio dilatado (el 'anillo') se ve más grande que la arteria pulmonar que lo acompaña (el 'sello' o punto central), eso es anormal — normalmente deberían medir casi lo mismo. Panel B: los 3 subtipos radiológicos — cilíndrico (el más leve, dilatación uniforme), varicoide (irregular, con constricciones), y quístico (el más grave, con quistes terminales visibles como burbujas, marcados con flechas amarillas). Panel C: muestra la progresión desde la enfermedad de bronquiolos pequeños hasta afectar las arterias pulmonares adyacentes."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">El ciclo vicioso de la bronquiectasia funciona así: la inflamación (actividad neutrofílica con liberación de proteasas y citoquinas) daña el epitelio ciliar, lo que deteriora el aclaramiento mucociliar — esto permite que las secreciones se acumulen, lo cual favorece la infección (colonización bacteriana crónica) — la infección perpetúa más daño tisular estructural (dilatación bronquial, destrucción de la pared) — y ese daño estructural facilita aún más la acumulación de secreciones, retroalimentando el ciclo desde el inicio. Por eso las bronquiectasias, una vez establecidas, tienden a autoperpetuarse y empeorar progresivamente si no se rompe el ciclo con tratamiento (limpieza de vía aérea + control de infección).</span>",
      "cascada": [
        {
          "paso": "Daño inicial",
          "detalle": "Infección, aspiración, defecto genético del aclaramiento mucociliar, u obstrucción de la vía aérea"
        },
        {
          "paso": "Inflamación",
          "detalle": "Actividad neutrofílica aumentada, liberación de proteasas y citoquinas proinflamatorias"
        },
        {
          "paso": "Deterioro del aclaramiento mucociliar",
          "detalle": "El epitelio dañado ya no logra eliminar secreciones eficientemente"
        },
        {
          "paso": "Acumulación de secreciones",
          "detalle": "Favorece la colonización e infección bacteriana crónica"
        },
        {
          "paso": "Infección persistente",
          "detalle": "Perpetúa el daño tisular — cierra el ciclo retroalimentándose con más inflamación"
        },
        {
          "paso": "Daño estructural permanente",
          "detalle": "Dilatación bronquial irreversible + destrucción de la pared de la vía aérea = bronquiectasia establecida"
        }
      ]
    },
    "clinica": [
      {
        "signo": "Tos de reciente aparición (bronquitis aguda)",
        "detallePPT": "Síntoma cardinal, persiste >1 semana; el paciente suele consultar tras 4-7 días sin remitir",
        "mecanismo": "Inflamación aguda de la vía aérea de mayor calibre por infección viral/bacteriana"
      },
      {
        "signo": "Tos productiva crónica",
        "detallePPT": "≥3 meses/año por 2 años consecutivos (bronquitis crónica) o crónica con esputo purulento abundante, especialmente matutino (bronquiectasias)",
        "mecanismo": "Hipersecreción mucosa sostenida por inflamación crónica de la vía aérea"
      },
      {
        "signo": "Esputo purulento abundante",
        "detallePPT": "Característico de bronquiectasias, especialmente en las mañanas",
        "mecanismo": "Acumulación de secreciones infectadas en vías dilatadas que drenan mal por gravedad durante el sueño"
      },
      {
        "signo": "Acropaquia (dedos en palillo de tambor)",
        "detallePPT": "Hallazgo del examen físico en bronquiectasias crónicas",
        "mecanismo": "<span class=\"fuente-ampliada\">Mecanismo no completamente esclarecido — se relaciona con hipoxia tisular crónica y factores de crecimiento vascular liberados en tejido inflamado de forma sostenida.</span>"
      },
      {
        "signo": "Exacerbaciones recurrentes",
        "detallePPT": "Episodios de empeoramiento agudo sobre la enfermedad de base crónica (bronquiectasias)",
        "mecanismo": "Reagudización del ciclo inflamación-infección-daño estructural"
      }
    ],
    "examenFisico": [
      "Bronquitis aguda: roncantes a la auscultación; en tos ferina, paroxismos de tos con 'gallos' o vómitos",
      "Bronquiectasias: crépitos basales bilaterales (por secreciones acumuladas), acropaquia en casos crónicos avanzados"
    ],
    "semiologia": {
      "inspeccion": "Busca signos de cronicidad: acropaquia (dedos en palillo de tambor) en bronquiectasias de larga evolución — sugiere hipoxia tisular sostenida, no es específico de una sola causa.",
      "palpacion": "Generalmente sin hallazgos específicos, salvo los esperables por la tos crónica repetida.",
      "percusion": "Habitualmente normal, salvo que coexista con complicaciones (atelectasia por tapón de moco, por ejemplo).",
      "auscultacion": "Roncantes (bronquitis aguda, por secreciones en vías de mayor calibre) o crépitos basales bilaterales persistentes que NO desaparecen con la tos (bronquiectasias — a diferencia de los crépitos de una neumonía, que sí pueden cambiar con la tos porque están sobre secreciones más móviles)."
    },
    "tablasClinicas": [
      {
        "titulo": "🔬 Comparación de las 3 entidades",
        "contexto": "La pregunta de reflexión de tu propia clase lo resume bien: ¿qué distingue clínica, fisiopatológica y radiológicamente a estas 3? La respuesta corta: DURACIÓN y REVERSIBILIDAD.",
        "columnas": [
          "Entidad",
          "Duración",
          "¿Daño permanente?",
          "Hallazgo clave"
        ],
        "filas": [
          [
            "Bronquitis aguda",
            "1-3 semanas (autolimitada)",
            "No",
            "Sin infiltrado en Rx, sin criterios de SIRS"
          ],
          [
            "Bronquitis crónica",
            "≥3 meses/año, 2 años seguidos",
            "Funcional, no estructural",
            "Tos productiva crónica sin dilatación bronquial en TC"
          ],
          [
            "Bronquiectasias",
            "Crónica, progresiva",
            "SÍ — dilatación permanente",
            "TCAR: relación broncoarterial >1.5, signo del anillo de sello"
          ]
        ]
      },
      {
        "titulo": "📷 Subtipos radiológicos de bronquiectasia",
        "columnas": [
          "Subtipo",
          "Característica en TC"
        ],
        "filas": [
          [
            "Cilíndrica",
            "Dilatación uniforme del bronquio (la más leve)"
          ],
          [
            "Varicosa",
            "Dilatación irregular, con zonas de constricción alternadas"
          ],
          [
            "Quística",
            "Quistes globulares terminales visibles (la más grave)"
          ]
        ],
        "nota": "Los 3 subtipos a menudo se superponen y coexisten en un mismo paciente — no son mutuamente excluyentes."
      }
    ],
    "diagnostico": "Bronquitis aguda: diagnóstico clínico, apoyado en pruebas rápidas moleculares si están disponibles; procalcitonina sérica <0.1 ng/mL hace improbable infección bacteriana. Bronquiectasias: la TC de alta resolución (TCAR) es el estándar de oro — muestra relación broncoarterial aumentada (>1.5), falta de afilamiento bronquial hacia la periferia, quistes terminales, e impactación de moco.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Paciente con tos: determinar duración y características"
      },
      {
        "tipo": "decision",
        "texto": "¿Tos aguda (<3 semanas) sin datos de neumonía?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Bronquitis aguda — manejo sintomático, sin antibióticos de rutina",
            "color": "mint"
          },
          {
            "etiqueta": "NO — es crónica",
            "texto": "Evaluar duración exacta y buscar dilatación estructural",
            "color": "coral"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿Tos productiva ≥3 meses/año por 2 años, SIN dilatación bronquial en TC?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Bronquitis crónica — descartar EPOC superpuesto si hay tabaquismo",
            "color": "coral"
          },
          {
            "etiqueta": "NO — hay dilatación permanente en TCAR",
            "texto": "Bronquiectasias — buscar etiología subyacente (ver factores de riesgo)",
            "color": "alert"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "Neumonía (bronquitis aguda vs. NAC)",
      "Asma / EPOC (bronquitis crónica)",
      "Tuberculosis (bronquiectasias con hallazgos apicales)",
      "Fibrosis quística (bronquiectasias de inicio temprano)"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Bronquiectasias: técnicas de aclaramiento de moco (ciclo de respiración activa, presión espiratoria positiva) — individualizadas según gravedad y cantidad de secreciones, enseñadas por profesionales con formación avanzada",
        "Ejercicio aeróbico regular",
        "Cese de tabaquismo (bronquitis crónica)"
      ],
      "farmacologico": [
        "Bronquitis aguda: antibióticos NO recomendados de rutina (causa predominantemente viral); si se prescriben, azitromicina 500mg/día x3 días es preferible; para tos ferina: eritromicina, doxiciclina o azitromicina",
        "Bronquitis aguda: antihistamínicos, antitusivos, expectorantes de venta libre — SIN utilidad demostrada; corticoides orales NO deben usarse",
        "Bronquitis crónica estable: según el panel CHEST, NO hay evidencia suficiente para recomendar tratamiento farmacológico rutinario (antibióticos, broncodilatadores, mucolíticos) solo para aliviar la tos",
        "Bronquiectasias — exacerbación: antibióticos basados en cultivo de esputo (14 días), oxígeno suplementario si hay hipoxemia, hospitalización con antibiótico IV en casos graves",
        "Bronquiectasias — terapia crónica: erradicación de Pseudomonas aeruginosa, broncodilatadores antes de la fisioterapia, macrólidos 3 veces/semana si ≥3 exacerbaciones/año, antibióticos inhalados para infecciones recurrentes"
      ]
    },
    "complicaciones": [
      "Bronquiectasias: exacerbaciones agudas recurrentes",
      "Hemoptisis (por la vascularización anómala de la pared bronquial dañada)",
      "Insuficiencia respiratoria crónica en casos avanzados",
      "Infección por micobacterias no tuberculosas (aumenta la mortalidad a 5 años de 11.5% a 12.6%)"
    ],
    "prevencion": "Cese de tabaquismo, tratamiento oportuno de infecciones respiratorias en la infancia, control de reflujo gastroesofágico y aspiración, vacunación según esquema.",
    "perlasProfundo": "El dato que más distingue estas 3 entidades entre sí no es tanto el síntoma (todas cursan con tos) sino LA DURACIÓN y si el daño estructural es reversible: agudo y autolimitado (bronquitis aguda) vs. crónico pero funcional (bronquitis crónica) vs. crónico y ESTRUCTURALMENTE PERMANENTE (bronquiectasias, confirmado por TCAR).",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: presentan un caso (como el de tu propia clase) y piden identificar la entidad correcta entre varias similares, descartando opciones con datos que NO encajan.",
      "ejercicios": [
        {
          "tipo": "Diferenciar y sustentar (el más frecuente)",
          "planteamiento": "Paciente con tos productiva de 10 días de evolución, sin fiebre alta, radiografía de tórax normal, sin criterios de respuesta inflamatoria sistémica. ¿Bronquitis aguda o neumonía? Sustente.",
          "respuestaModelo": "Bronquitis aguda — se diagnostica precisamente cuando NO hay indicios clínicos NI radiológicos de neumonía (radiografía normal) y no hay criterios de síndrome de respuesta inflamatoria sistémica. La duración de 10 días también encaja con el curso esperado (10-14 días) de bronquitis aguda, a diferencia de una neumonía que characteristically muestra infiltrado en la radiografía."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste 4 causas hereditarias o adquiridas de bronquiectasias mencionadas en tu clase.",
          "respuestaModelo": "Cualquier 4 de: fibrosis quística, discinesia ciliar primaria, deficiencia de alfa-1 antitripsina, aspiración/reflujo gastroesofágico, infecciones respiratorias de la infancia, síndrome de Williams-Campbell, sarcoidosis, asma/EPOC (por obstrucción)."
        },
        {
          "tipo": "Indique y sustente (imagen)",
          "planteamiento": "En una TC de tórax, ¿qué medida específica confirma el diagnóstico de bronquiectasia, y cuál es su valor de corte?",
          "respuestaModelo": "La relación broncoarterial: se mide el diámetro del bronquio y se divide entre el diámetro de la arteria pulmonar que lo acompaña. Un valor normal es aproximadamente 0.7; se considera bronquiectasia cuando esta relación supera 1.5, es decir, el bronquio se ve significativamente más dilatado que el vaso adyacente (signo del 'anillo de sello')."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "3 entidades relacionadas, distinguidas por duración y reversibilidad del daño",
      "Bronquiectasias = dilatación bronquial PERMANENTE, confirmada por TCAR (relación broncoarterial >1.5)",
      "Bronquitis aguda: predominantemente viral, NO usar antibióticos de rutina"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — las 3 entidades en una tabla",
      "columnas": [
        "Entidad",
        "Dato clave para el examen"
      ],
      "filas": [
        [
          "Bronquitis aguda",
          "Tos >1 semana, sin datos de neumonía, sin antibiótico de rutina"
        ],
        [
          "Bronquitis crónica",
          "Tos productiva ≥3 meses/año x2 años, sin dilatación en TC"
        ],
        [
          "Bronquiectasias",
          "TCAR = estándar de oro, dilatación permanente, signo del anillo de sello"
        ]
      ]
    },
    "clinica": "Tos como síntoma común a las 3 — la clave está en la duración y si hay esputo purulento abundante + acropaquia (sugiere bronquiectasias).",
    "diagnostico": "Bronquitis aguda: clínico. Bronquiectasias: TCAR (relación broncoarterial >1.5, quistes terminales, impactación de moco).",
    "tratamientoResumen": "Bronquitis aguda: sintomático, sin antibiótico de rutina. Bronquiectasias: aclaramiento de vía aérea + antibiótico según cultivo en exacerbaciones + macrólidos si ≥3 exacerbaciones/año.",
    "diferenciales": [
      {
        "entidad": "Neumonía",
        "clave": "Infiltrado radiológico + criterios de SIRS — ausentes en bronquitis aguda"
      },
      {
        "entidad": "EPOC",
        "clave": "Obstrucción FIJA al flujo aéreo (espirometría) — la bronquitis crónica sola no la tiene necesariamente"
      }
    ],
    "tablaComparativa": {
      "titulo": "Bronquitis aguda vs Bronquiectasias",
      "filas": [
        [
          "Duración",
          "1-3 semanas",
          "Crónica, progresiva"
        ],
        [
          "Daño estructural",
          "Ninguno",
          "Dilatación permanente"
        ],
        [
          "Estudio clave",
          "Clínico ± Rx",
          "TCAR"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Se debe dar antibiótico de rutina en bronquitis aguda? → NO, es predominantemente viral",
      "¿Cuál es el estándar de oro para bronquiectasias? → TCAR (tomografía de alta resolución)",
      "¿Qué relación broncoarterial es anormal? → >1.5 (normal es 0.7) — signo del 'anillo de sello'",
      "¿Cuáles son los 3 subtipos radiológicos de bronquiectasia? → Cilíndrica, varicosa, quística",
      "¿Qué hallazgo del examen físico sugiere bronquiectasias crónicas? → Acropaquia + crépitos basales bilaterales",
      "¿Cuándo se indican macrólidos crónicos en bronquiectasias? → ≥3 exacerbaciones/año",
      "¿La cirugía es el tratamiento principal de bronquiectasias? → NO, es principalmente médico (fisioterapia, antibióticos); cirugía solo en casos localizados y refractarios"
    ],
    "redFlags": [
      "Hemoptisis en paciente con bronquiectasias conocidas → evaluar sangrado activo de vasos bronquiales anómalos",
      "Acropaquia de aparición reciente → investigar causa (no asumir automáticamente bronquiectasias sin estudio)"
    ],
    "erroresFrecuentes": [
      "Dar antibiótico de rutina en toda bronquitis aguda",
      "Diagnosticar bronquiectasias solo con espirometría (no es sensible ni específica — se necesita TCAR)",
      "Asumir EPOC en cualquier paciente con infecciones respiratorias recurrentes sin evaluar antecedente de tabaquismo",
      "Pensar que la acropaquia siempre indica tuberculosis activa (puede verse en bronquiectasias crónicas de cualquier causa)"
    ],
    "asociacionesClinicas": [
      "Bronquiectasias + colonización por Pseudomonas → considerar macrólidos + erradicación específica",
      "Bronquiectasias de inicio muy temprano → descartar fibrosis quística o discinesia ciliar primaria"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "intermedio",
      "vineta": "(Caso real de tu clase) Una mujer de 42 años consulta por tos crónica productiva desde hace 2 años, con aumento de volumen del esputo en los últimos meses. Refiere haber tenido varias infecciones respiratorias desde la infancia. Actualmente expectora abundante secreción purulenta, especialmente en las mañanas. No fuma. Ha recibido varios ciclos de antibióticos por bronquitis, con mejoría parcial. En el examen físico presenta crépitos basales bilaterales y acropaquia. Se solicita una tomografía de tórax de alta resolución (TCAR).",
      "preguntaMC": {
        "enunciado": "¿Cuál de las siguientes afirmaciones es la más adecuada en relación con este caso clínico?",
        "opciones": [
          {
            "id": "a",
            "texto": "El diagnóstico más probable es EPOC, por el antecedente de infecciones respiratorias"
          },
          {
            "id": "b",
            "texto": "La prueba diagnóstica más sensible para confirmar bronquiectasias es la espirometría"
          },
          {
            "id": "c",
            "texto": "La TC de tórax es el estudio de elección y puede mostrar dilatación bronquial en forma de 'anillo de sello'"
          },
          {
            "id": "d",
            "texto": "El tratamiento curativo consiste en cirugía pulmonar extensa en todos los casos"
          },
          {
            "id": "e",
            "texto": "La acropaquia sugiere tuberculosis activa como primera posibilidad"
          }
        ],
        "correcta": "c",
        "explicacion": "Tos crónica productiva + esputo purulento abundante + infecciones recurrentes desde la infancia + acropaquia + respuesta solo parcial a antibióticos son altamente sugestivos de bronquiectasias. La TC de tórax (TCAR) es el estudio de elección, mostrando dilatación bronquial en 'anillo de sello'. (A) Incorrecta: EPOC se asocia a tabaquismo/biomasa (ausente aquí) y rara vez cursa con acropaquia. (B) Incorrecta: la espirometría puede mostrar patrón obstructivo pero no confirma bronquiectasias, no es sensible ni específica. (D) Incorrecta: el tratamiento es principalmente médico; la cirugía solo para casos localizados y refractarios. (E) Incorrecta: la acropaquia puede verse en bronquiectasias crónicas de cualquier causa, no indica específicamente TB activa."
      },
      "preguntaEscrita": {
        "enunciado": "Explica por qué el signo radiológico se llama 'anillo de sello' y qué relación anatómica exacta debe superar el valor normal para considerarlo positivo.",
        "respuestaModelo": "Se llama 'anillo de sello' porque en el corte transversal de la TC, el bronquio dilatado forma un 'anillo' hueco, y la arteria pulmonar adyacente (que normalmente viaja junto al bronquio y debería medir un diámetro similar) aparece como un pequeño punto central — semejando un anillo con su sello o piedra engastada. Se considera positivo cuando la relación broncoarterial (diámetro del bronquio dividido entre el diámetro de la arteria acompañante) supera 1.5, cuando lo normal es aproximadamente 0.7 — es decir, el bronquio se ha dilatado hasta verse considerablemente más grande que el vaso que lo acompaña."
      }
    }
  ]
},
  {
  "id": "neumonia-nac",
  "nombre": "Neumonía Adquirida en la Comunidad (NAC)",
  "area": "Neumología",
  "semanas": [
    "semana-01"
  ],
  "favorito": false,
  "estudiado": false,
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1HezuNxMQmVaqAVcYeX-AVbTPsajpRQcV/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_1_SESIÓN-2-TEMA-2: Neumonía Adquirida en la Comunidad"
  },
  "relacionadas": [
    {
      "id": "neumonia-intrahospitalaria",
      "relacion": "Principal diagnóstico diferencial por el LUGAR donde se adquiere la infección — cambia completamente la cobertura antibiótica empírica"
    },
    {
      "id": "enfermedades-pleurales",
      "relacion": "Complicación frecuente: derrame paraneumónico y empiema"
    }
  ],
  "profundo": {
    "definicion": "Enfermedad aguda causada por una infección del parénquima pulmonar, adquirida FUERA del entorno hospitalario. Sigue siendo una de las principales causas de morbilidad, hospitalización y mortalidad a nivel mundial, afectando especialmente a adultos mayores.",
    "epidemiologia": "336.5 millones de infecciones del tracto respiratorio inferior ocurrieron en 2016, resultando en 32.2 muertes por cada 100,000 personas a nivel mundial. La incidencia anual ajustada es de 649 pacientes por 100,000. Mortalidad hospitalaria significativa, con tasa de readmisión a 30 días de 15-20%. <span class=\"fuente-ampliada\">Hasta el 30% de los pacientes hospitalizados con NAC desarrollan complicaciones cardiovasculares — un dato que muchos subestiman al pensar en la NAC como 'solo' una enfermedad pulmonar.</span>",
    "etiologiaFactoresRiesgo": [
      "Condiciones médicas: historia previa de neumonía (OR≤6.25), enfermedad cardiovascular crónica (OR≤3.20), enfermedad cerebrovascular/ACV/demencia (OR≤2.68), enfermedad respiratoria crónica incluyendo EPOC (OR≤2.17), disfagia (OR 2.10-11.90)",
      "Estilo de vida: abuso de alcohol (OR≤2.91), bajo peso (OR≤2.20), tabaquismo actual (OR≤2.00), contacto regular con niños (OR≤1.48)",
      "A pesar de pruebas extensas de laboratorio, la causa solo puede identificarse en aproximadamente UN TERCIO de los pacientes"
    ],
    "criteriosDiagnosticos": "El diagnóstico se basa en: (1) infiltrado nuevo mostrado en radiografía de tórax (o TC), (2) síntomas compatibles, (3) signos consistentes con enfermedad del espacio aéreo (estertores, roncus, egofonía), y (4) anomalías de laboratorio de las respuestas inflamatorias local y sistémica. La procalcitonina puede complementar el juicio clínico pero NO debe usarse para decidir si iniciar antibiótico — su sensibilidad varía de 38% a 91%, insuficiente para justificar retener el tratamiento.",
    "fisiopatologia": {
      "resumen": "La neumonía se desarrolla por la interacción de 3 factores: la susceptibilidad del huésped, la virulencia del patógeno, y el inóculo de microorganismos que llega a la vía aérea inferior. Los patógenos deben vencer varios mecanismos de defensa antes de alcanzar los alvéolos: atrapamiento de moco, aclaramiento mucociliar, tos y deglución.",
      "cascada": [
        {
          "paso": "Exposición",
          "detalle": "Microaspiración de secreciones orofaríngeas (la vía más común) o inhalación de aerosoles infecciosos"
        },
        {
          "paso": "Defensas del huésped",
          "detalle": "El patógeno debe vencer: atrapamiento de moco, aclaramiento mucociliar, reflejo tusígeno, deglución"
        },
        {
          "paso": "Factores que inclinan la balanza",
          "detalle": "Alta virulencia del patógeno + gran inóculo + huésped susceptible (edad, comorbilidades, alcoholismo, inmunosupresión) = infección establecida"
        },
        {
          "paso": "Llegada al alvéolo",
          "detalle": "El patógeno coloniza el espacio alveolar, escapando de las defensas de la vía aérea superior"
        },
        {
          "paso": "Respuesta inflamatoria local y sistémica",
          "detalle": "Reclutamiento de neutrófilos, liberación de citoquinas — origina las anomalías de laboratorio usadas para el diagnóstico"
        },
        {
          "paso": "Consolidación",
          "detalle": "El espacio alveolar se llena de exudado inflamatorio — visible como infiltrado en la radiografía, y origina los hallazgos semiológicos (crépitos, egofonía, matidez)"
        }
      ],
      "imagenes": [
        {
          "src": "assets/nac/nac-rx-caso-real.jpg",
          "caption": "Radiografía REAL del caso de tu propia clase",
          "explicacion": "Esta es la radiografía del varón de 60 años con alcoholismo del caso que abrió tu clase. Fíjate en la opacidad extensa que ocupa gran parte del campo pulmonar izquierdo (lado derecho de la imagen, ya que en radiología se ve en espejo) — esto corresponde exactamente a los 'estertores sibilantes y subcrepitantes generalizados' descritos en su examen físico. Este patrón de consolidación extensa, en un paciente con alteración del estado de conciencia y alcoholismo crónico, es consistente con una NAC grave — probablemente por aspiración (dado el antecedente de alcoholismo y alteración del sensorio) o por un patógeno agresivo como neumococo."
        },
        {
          "src": "assets/nac/nac-rx-lobar-superior-nejm.jpg",
          "caption": "Ejemplo comparativo: infiltrado lobar superior derecho (NEJM)",
          "explicacion": "A diferencia de la radiografía del caso (más extensa/bilateral), esta muestra un infiltrado LOCALIZADO en el lóbulo superior derecho — el patrón clásico de neumonía lobar por neumococo. Comparar ambas imágenes te ayuda a reconocer que la NAC no tiene un solo 'aspecto' radiológico: puede ir desde un infiltrado lobar bien delimitado (panel A y B aquí, vista PA y lateral) hasta consolidación extensa y bilateral (como en el caso de tu clase) — la extensión radiológica generalmente se correlaciona con la gravedad clínica."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">El motivo por el que la causa exacta solo se identifica en un tercio de los casos no es una limitación tecnológica — es que muchas veces el propio proceso inflamatorio, antibióticos previos, o la naturaleza del patógeno (virus, atípicos) dificultan el aislamiento. Por eso las guías ATS-IDSA priorizan iniciar tratamiento EMPÍRICO basado en factores de riesgo y gravedad, sin esperar la identificación microbiológica.</span>"
    },
    "clinica": [
      {
        "signo": "Tos",
        "detallePPT": "Síntoma común, predictor significativo cuando se combina con temperatura ≥37.8°C",
        "mecanismo": "Estimulación de receptores de la vía aérea por el proceso inflamatorio"
      },
      {
        "signo": "Fiebre",
        "detallePPT": "Predictor significativo cuando ≥37.8°C",
        "mecanismo": "Respuesta inflamatoria sistémica a la infección"
      },
      {
        "signo": "Producción de esputo",
        "detallePPT": "Síntoma común",
        "mecanismo": "Exudado inflamatorio alveolar que se moviliza hacia la vía aérea"
      },
      {
        "signo": "Disnea",
        "detallePPT": "Síntoma común",
        "mecanismo": "Reducción del área funcional de intercambio gaseoso por consolidación"
      },
      {
        "signo": "Dolor torácico",
        "detallePPT": "Frecuentemente pleurítico",
        "mecanismo": "Irritación de la pleura parietal adyacente al foco de consolidación"
      },
      {
        "signo": "Presentación atípica en ancianos",
        "detallePPT": "Letargo y cambios en el estado mental — puede ser la ÚNICA manifestación",
        "mecanismo": "<span class=\"fuente-ampliada\">Respuesta inflamatoria e inmune atenuada en el adulto mayor, que enmascara los síntomas clásicos.</span>"
      },
      {
        "signo": "Presentación en inmunocomprometidos",
        "detallePPT": "Signos o síntomas atípicos",
        "mecanismo": "Respuesta inflamatoria insuficiente para generar la clínica clásica"
      }
    ],
    "examenFisico": [
      "Crepitantes en la auscultación (predictor significativo)",
      "Nuevos signos focales en el tórax",
      "Estertores, roncus o egofonía — signos de enfermedad del espacio aéreo",
      "Saturación de oxígeno <95%, pulso ≥100 lpm — predictores significativos de NAC"
    ],
    "semiologia": {
      "inspeccion": "Busca taquipnea, uso de músculos accesorios, y en casos graves cianosis (como en el caso de tu clase) — todos reflejan el compromiso del intercambio gaseoso por la consolidación.",
      "palpacion": "Frémito vocal AUMENTADO sobre la zona de consolidación (a diferencia del derrame pleural, donde está disminuido) — el tejido consolidado (lleno de exudado, no de aire) transmite mejor las vibraciones vocales que el tejido pulmonar aireado normal.",
      "percusion": "Matidez sobre el área consolidada — el exudado alveolar reemplaza el aire, por eso el sonido de percusión ya no es resonante.",
      "auscultacion": "Crépitos (estertores) sobre la zona afectada, y en casos de consolidación bien establecida, EGOFONÍA — cuando le pides al paciente decir 'eee' y se escucha como 'aaa' a través del estetoscopio, porque el tejido consolidado transmite mejor las frecuencias que generan ese cambio acústico característico."
    },
    "tablasClinicas": [
      {
        "titulo": "📊 CURB-65 — decide el lugar de atención",
        "contexto": "Cada letra vale 1 punto si está presente. La suma total determina el riesgo y el lugar de manejo más apropiado.",
        "columnas": [
          "Letra",
          "Criterio",
          "Punto"
        ],
        "filas": [
          [
            "C",
            "Confusión (nueva, desorientación)",
            "1"
          ],
          [
            "U",
            "Urea >19 mg/dL (o BUN >19)",
            "1"
          ],
          [
            "R",
            "Frecuencia Respiratoria ≥30 rpm",
            "1"
          ],
          [
            "B",
            "Presión arterial (Blood pressure) sistólica <90 o diastólica ≤60 mmHg",
            "1"
          ],
          [
            "65",
            "Edad ≥65 años",
            "1"
          ]
        ],
        "nota": "Puntaje 0-1 → manejo ambulatorio. 2 → considerar hospitalización breve/observación. 3-5 → hospitalización, considerar UCI si el puntaje es muy alto o hay criterios ATS-IDSA de gravedad."
      },
      {
        "titulo": "🏥 Lugar de atención según gravedad",
        "columnas": [
          "Nivel",
          "Criterio"
        ],
        "filas": [
          [
            "Ambulatorio",
            "CURB-65 de 0-1 o PSI bajo, clínicamente estable, sin factores de riesgo significativos"
          ],
          [
            "Hospitalización",
            "CURB-65 de 2-5 o PSI elevado, hipoxemia, o soporte domiciliario inadecuado"
          ],
          [
            "UCI",
            "Necesidad de ventilación mecánica, presencia de shock, o criterios ATS-IDSA para NAC grave"
          ]
        ]
      },
      {
        "titulo": "🦠 Factores de riesgo para patógenos específicos",
        "columnas": [
          "Patógeno",
          "Factores de riesgo"
        ],
        "filas": [
          [
            "S. pneumoniae resistente",
            "Asma, enfermedad hepática, bronquiectasias"
          ],
          [
            "Legionella pneumophila",
            "Edad avanzada, alcoholismo, tabaquismo, inmunosupresión, trasplante de órganos"
          ],
          [
            "Mycoplasma/Chlamydophila",
            "Edad más joven, sexo femenino, pocas comorbilidades"
          ],
          [
            "Pseudomonas aeruginosa",
            "Colonización previa, traqueostomía, bronquiectasias, EPOC muy grave"
          ],
          [
            "SARM",
            "Colonización/infección previa por SARM, infecciones cutáneas recurrentes, neumonía grave"
          ]
        ],
        "nota": "Se recomienda cubrir empíricamente SARM o P. aeruginosa SOLO si existen factores de riesgo validados — no de rutina en todo paciente."
      }
    ],
    "diagnostico": "Diagnóstico definitivo requiere evidencia de un NUEVO infiltrado pulmonar en radiografía de tórax, TC de tórax, o ecografía pulmonar — combinado con síntomas y signos compatibles. Pruebas sanguíneas: hemograma, PCR, procalcitonina, lactato, función renal/hepática/coagulación. Pruebas microbiológicas (Gram/cultivo de esputo, hemocultivos, antígeno urinario, PCR multiplex) SOLO se recomiendan en: NAC grave con sepsis/shock, inmunosupresión, riesgo de patógenos resistentes, o falta de respuesta al tratamiento empírico inicial — NO de rutina en NAC ambulatoria leve.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Sospecha clínica: tos + fiebre + disnea/dolor pleurítico + hallazgos focales al examen"
      },
      {
        "tipo": "paso",
        "texto": "Confirmar con infiltrado NUEVO en radiografía/TC de tórax"
      },
      {
        "tipo": "paso",
        "texto": "Calcular CURB-65 o PSI para estratificar gravedad"
      },
      {
        "tipo": "decision",
        "texto": "¿CURB-65 0-1, estable, sin factores de riesgo?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Manejo AMBULATORIO — sin pruebas microbiológicas de rutina, tratamiento empírico oral",
            "color": "mint"
          },
          {
            "etiqueta": "NO — CURB-65 2-5 o inestable",
            "texto": "HOSPITALIZACIÓN — pruebas microbiológicas + antibiótico según gravedad y factores de riesgo",
            "color": "coral"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿Shock, necesidad de vasopresores, o insuficiencia respiratoria que requiere ventilación mecánica?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Admisión directa a UCI",
            "color": "alert"
          },
          {
            "etiqueta": "NO",
            "texto": "Usar criterios de severidad menores IDSA/ATS 2007 + juicio clínico para definir intensidad de manejo",
            "color": "coral"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "Neumonía intrahospitalaria (por el lugar de adquisición)",
      "Bronquitis aguda (sin infiltrado radiológico ni SIRS)",
      "Insuficiencia cardiaca / edema pulmonar",
      "Embolia pulmonar",
      "Tuberculosis pulmonar"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Vacunación contra influenza — disminuye significativamente el riesgo de influenza y neumonía bacteriana",
        "Vacunas neumocócicas (PCV, PPSV) — eficacia agrupada de PPSV contra neumonía neumocócica: 48-64%",
        "Seguimiento radiográfico NO rutinario si los síntomas se resuelven en 5-7 días (rendimiento positivo de repetir imagen: solo 0.2-5.0%)"
      ],
      "farmacologico": [
        "Ambulatorio, sin comorbilidades: amoxicilina 1g c/8h, o doxiciclina 100mg c/12h, o macrólido (solo si resistencia neumocócica local <25%)",
        "Ambulatorio, con comorbilidades: terapia combinada (amoxicilina/clavulanato o cefalosporina + macrólido o doxiciclina), o monoterapia con fluoroquinolona respiratoria",
        "Hospitalizado, NAC no grave sin riesgo SARM/Pseudomonas: β-lactámico + macrólido, o fluoroquinolona respiratoria en monoterapia",
        "Hospitalizado, NAC grave sin riesgo SARM/Pseudomonas: β-lactámico + macrólido, O β-lactámico + fluoroquinolona respiratoria (ambas recomendación fuerte)",
        "Cubrir SARM/Pseudomonas SOLO si hay factores de riesgo validados (aislamiento previo, hospitalización reciente + antibiótico parenteral en 90 días)",
        "Duración mínima: 5 días (NAC estándar) o 7 días (SARM/Pseudomonas) — guiada por estabilidad clínica, no por un número fijo de días",
        "Corticosteroides: NO usar de rutina en NAC no grave ni en NAC grave — los ensayos no muestran diferencia en mortalidad ni estancia hospitalaria",
        "Influenza positiva: oseltamivir en hospitalizados, independiente de días de evolución — la coinfección bacteriana es común y NO se excluye solo por PCR positivo a influenza"
      ]
    },
    "complicaciones": [
      "Derrame paraneumónico y empiema",
      "Complicaciones cardiovasculares (hasta 30% de los hospitalizados)",
      "Sepsis y shock séptico",
      "Absceso pulmonar (considerar cobertura anaeróbica solo si se sospecha esto o empiema)",
      "Insuficiencia respiratoria aguda"
    ],
    "prevencion": "Vacunación contra influenza y neumococo (PCV20 sola, o PCV15 seguida de PPSV23 al año, en ≥65 años o 19-64 con comorbilidades — la PCV13 ya no se recomienda de rutina). Vacunación contra SARS-CoV-2 según recomendación CDC.",
    "perlasProfundo": "La procalcitonina NUNCA debe ser la razón para retener antibióticos en un paciente con sospecha clínica y confirmación radiográfica de NAC — su sensibilidad (38-91%) es insuficiente para ese uso. El tratamiento empírico se inicia independientemente de su valor.",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casi siempre presentan un caso con signos vitales completos y piden calcular CURB-65/PSI y JUSTIFICAR el lugar de atención — exactamente como los 2 casos reales de tu propia clase.",
      "ejercicios": [
        {
          "tipo": "Calcular y clasificar (el más frecuente)",
          "planteamiento": "Paciente de 68 años, confuso, FR 32, PA 88/55, urea 45mg/dL. Calcule CURB-65 y determine conducta.",
          "respuestaModelo": "CURB-65 = 5 (todos los criterios presentes: Confusión, Urea>19, FR≥30, PA sistólica<90, edad≥65). Con puntaje máximo, requiere hospitalización con evaluación URGENTE para UCI — este es el escenario de mayor riesgo de mortalidad según la escala."
        },
        {
          "tipo": "Indique y sustente (semiología)",
          "planteamiento": "¿Por qué el frémito vocal está AUMENTADO en la NAC, a diferencia del derrame pleural donde está disminuido?",
          "respuestaModelo": "Porque en la NAC el alvéolo está lleno de exudado inflamatorio (líquido + células), que es un medio más denso y sólido que transmite mejor las vibraciones sonoras que el aire normal — por eso el frémito AUMENTA. En el derrame pleural, en cambio, el líquido se interpone ENTRE el pulmón y la pared torácica, actuando como una capa que ABSORBE y atenúa las vibraciones antes de que lleguen a la mano — por eso el frémito DISMINUYE. La diferencia clave es la ubicación: dentro del parénquima (NAC) transmite mejor; entre el parénquima y la pared (derrame) transmite peor."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste 4 factores de riesgo específicos para infección por Legionella pneumophila.",
          "respuestaModelo": "Cualquier 4 de: edad avanzada, alcoholismo, tabaquismo, enfermedades crónicas, inmunosupresión, trasplante de órganos."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "Diagnóstico = infiltrado NUEVO en imagen + síntomas + signos + anomalías de laboratorio",
      "CURB-65 o PSI determinan el lugar de atención (ambulatorio/hospitalizado/UCI)",
      "Cobertura SARM/Pseudomonas SOLO si hay factores de riesgo específicos, no de rutina"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — CURB-65 y manejo",
      "columnas": [
        "CURB-65",
        "Manejo"
      ],
      "filas": [
        [
          "0-1",
          "Ambulatorio"
        ],
        [
          "2",
          "Considerar hospitalización/observación"
        ],
        [
          "3-5",
          "Hospitalización (± UCI según gravedad)"
        ]
      ],
      "nota": "C-onfusión, U-rea>19, R-espiración≥30, B-presión<90/60, 65 años — 1 punto cada uno."
    },
    "clinica": "Tos + fiebre + disnea + dolor pleurítico + crépitos focales — presentación atípica (solo confusión) en ancianos.",
    "diagnostico": "Infiltrado nuevo en Rx/TC + clínica compatible. Procalcitonina NO decide inicio de antibiótico.",
    "tratamientoResumen": "Ambulatorio sin comorbilidad: amoxicilina/doxiciclina/macrólido. Hospitalizado: β-lactámico+macrólido o fluoroquinolona respiratoria. SARM/Pseudomonas solo si factores de riesgo.",
    "diferenciales": [
      {
        "entidad": "Neumonía intrahospitalaria",
        "clave": "Se define por el LUGAR de adquisición, no por la clínica — cambia la cobertura antibiótica"
      },
      {
        "entidad": "Bronquitis aguda",
        "clave": "Sin infiltrado radiológico ni criterios de SIRS"
      }
    ],
    "tablaComparativa": {
      "titulo": "NAC vs Neumonía Intrahospitalaria",
      "filas": [
        [
          "Lugar de adquisición",
          "Comunidad",
          "Hospital (≥48h de ingreso)"
        ],
        [
          "Patógenos típicos",
          "Neumococo, atípicos",
          "Gram negativos, SARM, resistentes"
        ],
        [
          "Cobertura empírica",
          "Más simple",
          "Más amplia, considera multirresistencia"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Qué confirma el diagnóstico de NAC? → Infiltrado NUEVO en imagen + clínica compatible",
      "¿La procalcitonina decide si dar antibiótico? → NO, nunca debe usarse para retener el tratamiento",
      "¿Qué herramienta decide el lugar de atención? → CURB-65 o PSI, junto con juicio clínico",
      "¿Cuándo cubrir empíricamente SARM/Pseudomonas? → SOLO con factores de riesgo validados, no de rutina",
      "¿Se deben usar corticosteroides en NAC? → NO de rutina, ni en NAC no grave ni grave",
      "¿Cuál es la duración mínima de tratamiento? → 5 días (guiada por estabilidad clínica, no un número fijo)",
      "¿Se debe repetir la radiografía tras la mejoría clínica? → NO de rutina si los síntomas se resuelven en 5-7 días"
    ],
    "redFlags": [
      "Confusión de nueva aparición en paciente con NAC → suma punto CURB-65, considerar mayor nivel de cuidado",
      "SatO2 <95% + FR≥30 + hipotensión → evaluar criterios de UCI de inmediato",
      "Alteración del sensorio + alcoholismo (como el caso de tu clase) → alto riesgo de aspiración y NAC grave"
    ],
    "erroresFrecuentes": [
      "Usar procalcitonina para decidir NO dar antibiótico",
      "Cubrir SARM/Pseudomonas de rutina sin factores de riesgo",
      "Dar corticosteroides pensando que 'ayudan' en NAC grave",
      "Repetir radiografía de rutina en un paciente que ya mejoró clínicamente"
    ],
    "asociacionesClinicas": [
      "Alcoholismo + alteración del sensorio + NAC → pensar en aspiración y considerar Legionella",
      "NAC + hiponatremia + tos seca → pensar en Legionella específicamente"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "avanzado",
      "vineta": "(Caso real de tu clase) Varón de 60 años con antecedentes de alcoholismo desde los 30 años, hasta la embriaguez. Acude a Emergencia traído por familiares con tiempo de enfermedad de 15 días, caracterizado por tos seca en accesos y fiebre. Cinco días antes de su ingreso se agregó disnea progresiva hasta por mínimos esfuerzos, así como alteración del estado de conciencia y cefalea generalizada. Acudió a médico particular quien indicó trimetoprim/sulfametoxazol, ambroxol y salbutamol, sin mejoría. Tres días antes presentó dolor precordial irradiado a la pared posterior del tórax, náuseas, vómitos y diaforesis. Luego la tos se acompañó de expectoración verdosa. En las 24 horas previas presentó cianosis. Al examen: PA 140/90 mmHg, FC 110x', FR 30x', T 38.9°C. Consciente, inquieto, desorientado en las 3 esferas; cianosis ungueal y peribucal con uso de músculos accesorios; disminución de amplexión/amplexación; estertores sibilantes y subcrepitantes generalizados; ruidos cardiacos normales.",
      "imagen": {
        "src": "assets/nac/nac-rx-caso-real.jpg",
        "caption": "Radiografía real de este paciente"
      },
      "preguntaMC": {
        "enunciado": "Calculando el CURB-65 con los datos disponibles (confusión presente, FR 30, PA sistólica 140 no cumple criterio de hipotensión, edad 60 no cumple ≥65 — falta dato de urea), ¿cuál es la conducta más apropiada?",
        "opciones": [
          {
            "id": "a",
            "texto": "Manejo ambulatorio con antibiótico oral, ya que no tiene 65 años"
          },
          {
            "id": "b",
            "texto": "Hospitalización — ya cumple al menos 2 criterios (confusión + FR≥30) independientemente del valor de urea"
          },
          {
            "id": "c",
            "texto": "Alta con observación domiciliaria por la familia"
          },
          {
            "id": "d",
            "texto": "Solo tratamiento sintomático sin antibiótico, ya que ya recibió trimetoprim/sulfametoxazol"
          },
          {
            "id": "e",
            "texto": "No se puede decidir nada sin conocer la urea"
          }
        ],
        "correcta": "b",
        "explicacion": "Ya con Confusión (desorientado en las 3 esferas) + Respiración ≥30 (FR 30) tiene al menos 2 puntos en CURB-65, lo que ya indica HOSPITALIZACIÓN independientemente del valor de urea (que sumaría un punto más si estuviera elevada). Además, este paciente tiene múltiples signos de gravedad adicionales: cianosis, uso de músculos accesorios, alteración del sensorio de 5 días de evolución — es un cuadro de NAC grave que requiere evaluación para nivel de cuidado intensivo, no solo hospitalización general."
      },
      "preguntaEscrita": {
        "enunciado": "Dado el antecedente de alcoholismo crónico y la alteración del estado de conciencia previa al inicio de la disnea, ¿qué mecanismo fisiopatológico específico deberías sospechar como causa de esta NAC, y qué patógeno se asocia clásicamente al alcoholismo?",
        "respuestaModelo": "Se debe sospechar NEUMONÍA POR ASPIRACIÓN — el alcoholismo crónico predispone a episodios de alteración del sensorio (embriaguez) durante los cuales se pierden los reflejos protectores de la vía aérea (tos, deglución), permitiendo la microaspiración de contenido orofaríngeo hacia la vía aérea inferior. Además, el alcoholismo es un factor de riesgo específico y reconocido para infección por Legionella pneumophila, que también debería considerarse en este cuadro, especialmente si hubiera hiponatremia asociada (no mencionada en este caso, pero es un dato a buscar activamente)."
      }
    },
    {
      "nivel": "intermedio",
      "vineta": "(Caso real de tu clase — actividad práctica) Paciente varón de 72 años, con antecedentes de hipertensión y diabetes mellitus tipo 2. Acude por fiebre, tos con esputo amarillento, disnea de esfuerzo y dolor torácico pleurítico desde hace 3 días. Al examen físico: PA 95/60 mmHg, FR 30 rpm, FC 112 lpm, SatO2 89% al aire ambiente, Glasgow 15.",
      "preguntaMC": {
        "enunciado": "Calcule el CURB-65 de este paciente y determine el lugar de atención más apropiado.",
        "opciones": [
          {
            "id": "a",
            "texto": "CURB-65 = 1 (solo por edad) — manejo ambulatorio"
          },
          {
            "id": "b",
            "texto": "CURB-65 = 3 (edad≥65 + FR≥30 + PA sistólica<90) — hospitalización, evaluar UCI por hipoxemia"
          },
          {
            "id": "c",
            "texto": "CURB-65 = 5 — requiere UCI obligatoriamente sin evaluación adicional"
          },
          {
            "id": "d",
            "texto": "CURB-65 = 0 — Glasgow 15 descarta cualquier punto"
          },
          {
            "id": "e",
            "texto": "No se puede calcular sin saber la urea, por lo que no hay conducta posible"
          }
        ],
        "correcta": "b",
        "explicacion": "Puntos confirmados: Edad≥65 (72 años, +1), FR≥30 (30rpm exacto, +1), PA sistólica<90 (95mmHg... en realidad 95 NO es <90, así que este punto NO se suma por PA sistólica, pero si consideramos que el criterio también incluye diastólica≤60 y aquí es 60 exacto, ese punto SÍ se sumaría) — el Glasgow 15 confirma AUSENCIA de confusión (0 puntos ahí). Sin el dato de urea, el puntaje mínimo confirmado es 2-3 (edad + FR + posible PA diastólica). Con puntaje ≥3 y además SatO2 89% (hipoxemia significativa), la conducta correcta es HOSPITALIZACIÓN, con evaluación para UCI dada la hipoxemia marcada y los signos de posible inestabilidad hemodinámica (PA en el límite bajo)."
      },
      "preguntaEscrita": {
        "enunciado": "Siguiendo la actividad práctica de tu clase: identifica los factores de riesgo y comorbilidades de este paciente, y propone un plan de tratamiento antibiótico empírico inicial considerando su condición de hospitalizado.",
        "respuestaModelo": "Factores de riesgo/comorbilidades: edad avanzada (72 años), diabetes mellitus tipo 2 (inmunosupresión relativa), hipertensión arterial. No se mencionan factores de riesgo específicos para SARM o Pseudomonas (sin colonización previa, sin hospitalización/antibiótico parenteral reciente), por lo que NO está indicada cobertura empírica extendida para esos patógenos. Al ser NAC no grave hospitalizada sin esos factores de riesgo, el tratamiento empírico apropiado sería: terapia combinada con β-lactámico + macrólido, o alternativamente monoterapia con una fluoroquinolona respiratoria (levofloxacino o moxifloxacino), ajustando según evolución clínica y resultados microbiológicos si se solicitan por la gravedad del cuadro."
      }
    }
  ]
},
  {
  "id": "neumonia-intrahospitalaria",
  "nombre": "Neumonía Intrahospitalaria y Neumonía Atípica",
  "area": "Neumología",
  "semanas": [
    "semana-01"
  ],
  "favorito": false,
  "estudiado": false,
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1eKuMzALQCRRKfawm9o6BYfaRg_jokbQh/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_1_SESIÓN-3-TEMA-2: Neumonía Intrahospitalaria y Atípicas"
  },
  "relacionadas": [
    {
      "id": "neumonia-nac",
      "relacion": "Principal diagnóstico diferencial por el LUGAR donde se adquiere la infección — cambia completamente la cobertura antibiótica empírica"
    }
  ],
  "profundo": {
    "definicion": "Esta clase agrupa 2 entidades distintas: <strong>Neumonía intrahospitalaria (NAH/NAV)</strong> — infección del parénquima pulmonar causada por patógenos presentes en entornos hospitalarios, desarrollada >48h después del ingreso (y en algunos casos hasta 30 días post-alta si hay factores de riesgo). <strong>Neumonía atípica</strong> — causada por patógenos que NO son detectables con tinción de Gram ni cultivables por métodos estándar (Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella spp.) — no tienen pared celular bacteriana, por eso no responden a β-lactámicos.",
    "epidemiologia": "La mortalidad BRUTA de la neumonía nosocomial puede ser tan alta como 70%, aunque la mortalidad ATRIBUIBLE a NAV (el porcentaje de muertes que NO habrían ocurrido sin la infección) se estima en 10%. Mayor mortalidad con Pseudomonas aeruginosa y Acinetobacter spp. Las neumonías atípicas representan >15% de todas las NAC. <span class=\"fuente-ampliada\">Legionella tiene mortalidad ~10%, que puede subir a 27% si no recibe antibiótico adecuado a tiempo.</span>",
    "etiologiaFactoresRiesgo": [
      "NAAS (Neumonía Asociada a la Atención Sanitaria): hospitalización ≥2 días en los 90 días previos, residencia en hogar de ancianos, terapia de infusión domiciliaria, diálisis crónica, cuidado de heridas en casa, contacto con colonizados por MDR",
      "Diferencias regionales importantes: en EE.UU. la NAAS suele ser por multirresistentes en críticos; en Europa, la etiología es similar a la NAC",
      "Neumonía atípica: edad más joven, pocas comorbilidades — patrón inverso al de la NAC típica bacteriana"
    ],
    "criteriosDiagnosticos": "NAH/NAV: >48h post-ingreso + infiltrado nuevo + criterios clínicos. Neumonía atípica: diagnóstico presuntivo con los 6 parámetros de la Sociedad Respiratoria Japonesa (JRS) — edad <60 años, sin comorbilidades o menores, tos persistente, ausencia de ruidos adventicios torácicos, sin esputo o sin agente identificado, leucocitos <10,000/µL.",
    "fisiopatologia": {
      "resumen": "En NAH/NAV, el paciente hospitalizado (especialmente intubado) está expuesto a patógenos nosocomiales — frecuentemente multirresistentes — que colonizan la vía aérea a través del tubo endotraqueal o por microaspiración, en un huésped ya debilitado por su enfermedad de base. En neumonía atípica, el mecanismo es fundamentalmente distinto: los patógenos (sin pared celular) invaden y generan una respuesta inflamatoria con manifestaciones EXTRAPULMONARES características, en vez del cuadro alveolar clásico.",
      "cascada": [
        {
          "paso": "NAH/NAV — Exposición",
          "detalle": "Colonización de la vía aérea por patógenos nosocomiales (frecuentemente MDR) a través del tubo endotraqueal o microaspiración"
        },
        {
          "paso": "NAH/NAV — Factor de riesgo clave",
          "detalle": "Inicio TEMPRANO (<5 días) vs. TARDÍO (≥5 días) determina el riesgo de patógenos resistentes — el inicio tardío se asocia a mayor riesgo MDR"
        },
        {
          "paso": "NAH/NAV — Infección establecida",
          "detalle": "Invasión del parénquima por patógenos frecuentemente resistentes (Pseudomonas, Acinetobacter, Enterobacteriaceae)"
        },
        {
          "paso": "Atípica — Exposición",
          "detalle": "Mycoplasma, Chlamydia o Legionella, sin pared celular bacteriana, invaden la vía respiratoria"
        },
        {
          "paso": "Atípica — Respuesta inmune",
          "detalle": "En M. pneumoniae grave, la patogénesis se relaciona con una respuesta inmune EXCESIVA contra el patógeno, no solo el daño directo"
        },
        {
          "paso": "Atípica — Manifestación",
          "detalle": "Cuadro clínico con hallazgos extrapulmonares característicos — la diferencia clave frente a la neumonía típica"
        }
      ],
      "imagenes": [
        {
          "src": "assets/nih/nih-algoritmo-atb-empirico.jpg",
          "caption": "Algoritmo oficial ERS/ESICM/ESCMID/ALAT (de tu clase)",
          "explicacion": "Este es el algoritmo real que usan las guías internacionales para decidir el antibiótico empírico en NAH/NAV. Síguelo de arriba hacia abajo: PRIMERO evalúas 2 cosas en paralelo — riesgo de patógeno MDR Y riesgo de mortalidad (>15% = alto). Si AMBOS son bajos → monoterapia simple (ertapenem, ceftriaxona, cefotaxima, moxifloxacino o levofloxacino). Si CUALQUIERA de los dos es alto, te bifurcas según si hay o no shock séptico: sin shock → un solo agente Gram-negativo (si es activo contra >90% de las Gram-negativas de tu UCI) ± cobertura MRSA; CON shock séptico → cobertura DOBLE para Pseudomonas ± MRSA. La lógica detrás del corte de 15% de mortalidad: por debajo de ese umbral, la monoterapia da MEJOR resultado que la terapia combinada — combinar antibióticos innecesariamente no es 'más seguro', puede ser peor."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">El motivo detrás del corte de 15% de mortalidad en el algoritmo no es arbitrario: estudios de infecciones graves han encontrado que cuando el riesgo de morir ya es bajo, agregar un segundo antibiótico solo suma toxicidad y presión selectiva para resistencia sin mejorar el desenlace — el paciente de bajo riesgo se beneficia MÁS de un tratamiento dirigido y simple que de 'cubrir todo por si acaso'.</span>"
    },
    "clinica": [
      {
        "signo": "Fiebre + secreciones traqueales purulentas (NAH/NAV)",
        "detallePPT": "En paciente hospitalizado >48h o intubado",
        "mecanismo": "Respuesta inflamatoria a la infección del parénquima + hipersecreción de la vía aérea colonizada"
      },
      {
        "signo": "Consolidación nueva en imagen (NAH/NAV)",
        "detallePPT": "Infiltrado de aparición reciente durante la hospitalización",
        "mecanismo": "Exudado inflamatorio alveolar por la infección nueva"
      },
      {
        "signo": "Tos persistente (atípica)",
        "detallePPT": "Una de las causas más comunes de tos persistente en niños y adultos — B. pertussis, M. pneumoniae, C. pneumoniae",
        "mecanismo": "Inflamación sostenida de la vía aérea sin la resolución rápida típica de una infección bacteriana clásica tratada"
      },
      {
        "signo": "Manifestaciones extrapulmonares (atípica)",
        "detallePPT": "La característica diferenciadora CLAVE frente a la neumonía típica",
        "mecanismo": "<span class=\"fuente-ampliada\">Estos patógenos (Mycoplasma, Legionella) tienen tropismo por tejidos más allá del pulmón, generando manifestaciones sistémicas (articulares, cutáneas, neurológicas según el patógeno) que no se ven en la neumonía bacteriana típica.</span>"
      },
      {
        "signo": "Progresión rápida y grave (Legionella)",
        "detallePPT": "A menudo se presenta como neumonía grave de progresión rápida",
        "mecanismo": "Alta virulencia del patógeno con capacidad de replicación intracelular en macrófagos alveolares"
      }
    ],
    "examenFisico": [
      "NAH/NAV: crépitos focales sobre la zona de consolidación nueva, puede haber signos de sepsis (taquicardia, hipotensión)",
      "Atípica: frecuentemente ausencia de ruidos adventicios torácicos pese a la clínica (uno de los 6 criterios JRS) — un dato semiológico clave para sospecharla"
    ],
    "semiologia": {
      "inspeccion": "En NAV, revisa el ventilador y las secreciones traqueales — su cambio a purulentas es un signo clave de sospecha. En atípica, el paciente suele verse menos tóxico de lo que su fiebre sugeriría — un contraste llamativo frente a la neumonía bacteriana típica.",
      "palpacion": "Sin hallazgos distintivos específicos más allá de lo esperado por cualquier consolidación (frémito aumentado si hay consolidación establecida).",
      "percusion": "Matidez si hay consolidación franca — puede estar ausente o ser sutil en la neumonía atípica, que característicamente da MENOS hallazgos físicos de los que la clínica sugeriría.",
      "auscultacion": "NAH/NAV: crépitos focales nuevos. Atípica: la AUSENCIA de ruidos adventicios pese a la clínica respiratoria es, paradójicamente, uno de los datos que más orienta a considerar un patógeno atípico — es una discordancia clínico-auscultatoria característica."
    },
    "tablasClinicas": [
      {
        "titulo": "🔬 Diagnóstico presuntivo de neumonía atípica (criterios JRS)",
        "contexto": "6 parámetros propuestos por la Sociedad Respiratoria Japonesa para diferenciar neumonía bacteriana típica de atípica (principalmente por M. pneumoniae) y guiar la selección del antibiótico.",
        "columnas": [
          "#",
          "Parámetro"
        ],
        "filas": [
          [
            "1",
            "Edad <60 años"
          ],
          [
            "2",
            "Sin comorbilidades o menores"
          ],
          [
            "3",
            "Presencia de tos persistente"
          ],
          [
            "4",
            "Ausencia de ruidos adventicios en el tórax"
          ],
          [
            "5",
            "Sin esputo o sin agente etiológico identificado"
          ],
          [
            "6",
            "Recuento de leucocitos <10,000/µL"
          ]
        ],
        "nota": "A más criterios presentes, mayor probabilidad de neumonía atípica sobre bacteriana típica — orienta la elección inicial de antibiótico (macrólido/tetraciclina en vez de β-lactámico)."
      },
      {
        "titulo": "🦠 Patógenos resistentes a vigilar en NAH/NAV",
        "columnas": [
          "Patógeno",
          "Dato clave"
        ],
        "filas": [
          [
            "Pseudomonas aeruginosa",
            "Asociado a mayor mortalidad; mayor tasa de recurrencia con tratamientos cortos (7-8 días) que con 15 días"
          ],
          [
            "Acinetobacter spp.",
            "Asociado a mayor mortalidad; con frecuencia requiere agentes de segunda línea (colistina, tigeciclina)"
          ],
          [
            "Enterobacteriaceae resistente a carbapenémicos",
            "Patógeno altamente resistente, requiere duración individualizada de terapia"
          ]
        ]
      }
    ],
    "diagnostico": "NAH/NAV: se recomienda obtener muestra del tracto respiratorio inferior (cultivo cuantitativo distal o proximal, o cualitativo) para enfocar y reducir la terapia empírica inicial — recomendación FUERTE aunque de evidencia de baja calidad. Neumonía atípica: el cultivo es el estándar de oro pero NO está ampliamente disponible (aislamiento lento, técnicamente complejo, no crecen en medios estándar ni se tiñen con Gram) — por eso el diagnóstico suele ser clínico-presuntivo (criterios JRS) más que microbiológico.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Paciente hospitalizado >48h con fiebre + secreciones + infiltrado nuevo → sospecha NAH/NAV"
      },
      {
        "tipo": "paso",
        "texto": "Evaluar riesgo de patógeno MDR Y riesgo de mortalidad (>15% = alto) en paralelo"
      },
      {
        "tipo": "decision",
        "texto": "¿Bajo riesgo MDR Y bajo riesgo de mortalidad?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Monoterapia de espectro reducido (ertapenem, ceftriaxona, cefotaxima, moxifloxacino o levofloxacino)",
            "color": "mint"
          },
          {
            "etiqueta": "NO — alto riesgo en cualquiera de los dos",
            "texto": "Evaluar presencia de shock séptico",
            "color": "coral"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿Shock séptico presente?",
        "salidas": [
          {
            "etiqueta": "NO",
            "texto": "Un solo agente Gram-negativo (activo >90% local) ± cobertura MRSA",
            "color": "coral"
          },
          {
            "etiqueta": "SÍ",
            "texto": "Cobertura DOBLE para Pseudomonas ± MRSA",
            "color": "alert"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "Neumonía adquirida en la comunidad (por el lugar/momento de adquisición)",
      "Tromboembolismo pulmonar (puede simular consolidación + disnea + fiebre baja)",
      "Síndrome de dificultad respiratoria aguda (SDRA) no infeccioso",
      "Edema pulmonar cardiogénico"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Obtener muestra del tracto respiratorio inferior ANTES de iniciar/cambiar antibiótico cuando sea posible, para enfocar la terapia",
        "Reevaluar/desescalar el antibiótico al día 3, cuando estén disponibles los datos de respuesta microbiológica y clínica — considerado buena práctica",
        "Medir biomarcadores seriados (PCR, procalcitonina) en casos seleccionados para guiar duración de terapia"
      ],
      "farmacologico": [
        "NAH/NAV bajo riesgo MDR + bajo riesgo mortalidad: monoterapia de espectro reducido",
        "NAH/NAV alto riesgo sin shock: un agente Gram-negativo (activo >90% local) ± MRSA",
        "NAH/NAV alto riesgo con shock séptico: cobertura doble Pseudomonas ± MRSA",
        "Duración estándar: 7-8 días en la mayoría de los casos (igual eficacia que cursos más largos, con MENOS resistencia) — EXCEPTO Pseudomonas/no fermentadores, donde 7-8 días se asocia a más recurrencia que 15 días",
        "Precaución: cefalosporinas de 3ª generación aumentan el riesgo de infección por C. difficile comparadas con penicilinas o quinolonas",
        "Neumonía atípica: macrólidos o tetraciclinas (interfieren la síntesis de proteínas intracelulares — por eso funcionan sin pared celular bacteriana como blanco)",
        "En ancianos o con enfermedades crónicas (posible infección mixta): considerar β-lactámico + macrólido/tetraciclina, o fluoroquinolona sola, desde el inicio",
        "M. pneumoniae refractario/grave: considerar corticosteroides si LDH sérica 302-364 UI/L — la respuesta inmune excesiva contribuye a la gravedad"
      ]
    },
    "complicaciones": [
      "Sepsis y shock séptico",
      "Insuficiencia respiratoria que requiere ventilación mecánica",
      "Infección por Clostridium difficile (especialmente con cefalosporinas de 3ª generación)",
      "Neumonía por Legionella no tratada a tiempo: mortalidad hasta 27%",
      "M. pneumoniae grave: progresión a neumonía refractaria que amenaza la vida"
    ],
    "prevencion": "Medidas de control de infecciones intrahospitalarias, higiene de manos, protocolos de manejo de vía aérea en pacientes intubados, uso racional de antibióticos para limitar la selección de resistencia.",
    "perlasProfundo": "El dato que más cambia el manejo NO es solo 'qué tan grave se ve el paciente', sino el RIESGO específico de patógeno resistente y de mortalidad — dos pacientes igual de graves pueden requerir esquemas antibióticos completamente distintos según ese riesgo, y agregar más antibióticos de los necesarios no es 'más seguro', puede empeorar el pronóstico.",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con signos vitales y contexto (hospitalización previa, UCI, ventilación mecánica) donde debes reconocer POR EL CONTEXTO qué tipo de neumonía es, no solo por la clínica — exactamente como los 2 casos reales de tu clase.",
      "ejercicios": [
        {
          "tipo": "Reconocer por contexto y sustentar (el más frecuente)",
          "planteamiento": "Paciente hospitalizado hace 3 días por cirugía abdominal, desarrolla fiebre y consolidación nueva en Rx al 4to día de ingreso. ¿NAC o NAH? Sustente.",
          "respuestaModelo": "NAH (Neumonía Intrahospitalaria) — el criterio temporal es clave: desarrolla el cuadro en el día 4 de hospitalización, superando las 48 horas que definen el corte entre NAC y NAH. El origen quirúrgico del ingreso no cambia esto: lo que importa es CUÁNDO se desarrolló la neumonía respecto al ingreso, no el motivo original de la hospitalización."
        },
        {
          "tipo": "Indique y sustente (mecanismo de fármaco)",
          "planteamiento": "¿Por qué los β-lactámicos NO son efectivos contra Mycoplasma pneumoniae, y qué clase de antibióticos sí funciona?",
          "respuestaModelo": "Los β-lactámicos actúan inhibiendo la síntesis de la pared celular bacteriana — pero Mycoplasma pneumoniae NO TIENE pared celular, por lo que este mecanismo de acción no tiene ningún blanco sobre el cual actuar, siendo completamente ineficaz sin importar la dosis. Los macrólidos y tetraciclinas sí funcionan porque actúan sobre un blanco distinto: interfieren con la síntesis de proteínas intracelulares del patógeno, un mecanismo que no depende de la pared celular."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste los 6 parámetros de la Sociedad Respiratoria Japonesa (JRS) para el diagnóstico presuntivo de neumonía atípica.",
          "respuestaModelo": "Edad <60 años, sin comorbilidades o menores, tos persistente, ausencia de ruidos adventicios en el tórax, sin esputo o sin agente etiológico identificado, leucocitos <10,000/µL."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "NAH/NAV: >48h post-ingreso; atípica: patógenos sin pared celular, no cultivables por métodos estándar",
      "El riesgo de MDR + mortalidad (no solo la gravedad clínica) decide espectro antibiótico en NAH/NAV",
      "Criterios JRS (6 parámetros) orientan el diagnóstico presuntivo de neumonía atípica"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — NAH/NAV según riesgo",
      "columnas": [
        "Riesgo",
        "Tratamiento"
      ],
      "filas": [
        [
          "Bajo MDR + bajo mortalidad",
          "Monoterapia espectro reducido"
        ],
        [
          "Alto riesgo, sin shock",
          "1 agente Gram-negativo ± MRSA"
        ],
        [
          "Alto riesgo, con shock",
          "Doble cobertura Pseudomonas ± MRSA"
        ]
      ],
      "nota": "Duración estándar: 7-8 días (excepto Pseudomonas/no fermentadores: mejor 15 días)."
    },
    "clinica": "NAH/NAV: fiebre + secreciones purulentas + consolidación nueva en paciente hospitalizado >48h. Atípica: tos persistente + manifestaciones extrapulmonares + auscultación pobre para la clínica.",
    "diagnostico": "NAH/NAV: muestra de tracto respiratorio inferior antes de tratar. Atípica: clínico-presuntivo (criterios JRS), cultivo poco disponible.",
    "tratamientoResumen": "NAH/NAV según riesgo MDR+mortalidad+shock. Atípica: macrólidos/tetraciclinas (no β-lactámicos, sin pared celular).",
    "diferenciales": [
      {
        "entidad": "NAC",
        "clave": "Se adquiere FUERA del hospital — antibióticos de espectro más simple"
      },
      {
        "entidad": "TEP",
        "clave": "Puede simular consolidación + disnea, pero sin el contexto infeccioso típico"
      }
    ],
    "tablaComparativa": {
      "titulo": "Neumonía típica vs atípica",
      "filas": [
        [
          "Pared celular del patógeno",
          "Sí (responde a β-lactámicos)",
          "No (requiere macrólido/tetraciclina)"
        ],
        [
          "Hallazgos extrapulmonares",
          "Infrecuentes",
          "Característicos"
        ],
        [
          "Auscultación",
          "Crépitos/consolidación clara",
          "Frecuentemente pobre pese a la clínica"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Cuándo se considera NAH/NAV? → Desarrollo >48h después del ingreso hospitalario",
      "¿Qué decide el espectro antibiótico en NAH/NAV? → Riesgo de MDR + riesgo de mortalidad (>15%) + presencia de shock séptico — NO solo la gravedad clínica",
      "¿Por qué los patógenos atípicos no responden a β-lactámicos? → No tienen pared celular bacteriana (el blanco de estos fármacos)",
      "¿Cuál es la duración estándar de NAH/NAV? → 7-8 días (EXCEPTO Pseudomonas/no fermentadores, donde 15 días tiene menos recurrencia)",
      "¿Qué antibiótico aumenta más el riesgo de C. difficile? → Cefalosporinas de 3ª generación",
      "¿Cuál es el hallazgo semiológico paradójico de la neumonía atípica? → Frecuente AUSENCIA de ruidos adventicios pese a la clínica respiratoria",
      "¿Cuándo considerar corticosteroides en M. pneumoniae? → Casos refractarios/graves con LDH 302-364 UI/L"
    ],
    "redFlags": [
      "Fiebre + secreciones purulentas nuevas en paciente intubado → sospechar NAV activamente",
      "Shock séptico en NAH/NAV → requiere cobertura doble para Pseudomonas de inmediato",
      "Legionella sin tratamiento adecuado → mortalidad hasta 27%"
    ],
    "erroresFrecuentes": [
      "Dar terapia combinada de rutina en pacientes de bajo riesgo (empeora pronóstico, no lo mejora)",
      "Usar β-lactámicos para tratar sospecha de neumonía atípica",
      "Prolongar antibiótico más allá de 7-8 días en NAH/NAV sin Pseudomonas, sin razón individualizada",
      "No reevaluar/desescalar el antibiótico al día 3 con los datos disponibles"
    ],
    "asociacionesClinicas": [
      "Paciente institucionalizado (asilo) + neumonía → pensar NAAS con riesgo de patógenos multirresistentes",
      "Tos persistente + pocas comorbilidades + edad joven → sospechar M. pneumoniae/C. pneumoniae"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "basico",
      "vineta": "(Caso real de tu clase) Paciente mujer de 72 años quien fue dada de alta hace 5 días del hospital por infección urinaria. Inicia cuadro de tos con expectoración verdosa, fiebre, malestar general, y leve disnea. A la auscultación se encuentran crépitos en hemitórax izquierdo.",
      "preguntaMC": {
        "enunciado": "¿Cuál sería el diagnóstico más probable?",
        "opciones": [
          {
            "id": "a",
            "texto": "Neumonía adquirida en la comunidad"
          },
          {
            "id": "b",
            "texto": "Bronquitis aguda"
          },
          {
            "id": "c",
            "texto": "Neumonía intrahospitalaria (o asociada a la atención sanitaria)"
          },
          {
            "id": "d",
            "texto": "Tromboembolismo pulmonar"
          }
        ],
        "correcta": "c",
        "explicacion": "El antecedente de hospitalización reciente (dada de alta hace solo 5 días) es la clave del caso — esto la coloca en la categoría de Neumonía Asociada a la Atención Sanitaria (NAAS), que se desarrolla en pacientes NO hospitalizados actualmente pero con riesgo de estar colonizados por patógenos nosocomiales por su contacto reciente con el sistema de salud. No es NAC clásica precisamente por ese antecedente; no es bronquitis aguda porque tiene crépitos focales (signo de consolidación, no solo inflamación de vía aérea); no es TEP porque el cuadro con fiebre + esputo purulento + crépitos es mucho más consistente con un proceso infeccioso."
      },
      "preguntaEscrita": {
        "enunciado": "¿Por qué el antecedente de hospitalización reciente (aunque haya sido por una causa no respiratoria, como la infección urinaria) es relevante para elegir la cobertura antibiótica empírica de esta paciente?",
        "respuestaModelo": "Porque durante la hospitalización previa, la paciente pudo haber sido colonizada por patógenos nosocomiales (potencialmente multirresistentes) presentes en el ambiente hospitalario, independientemente de que la causa de esa hospitalización no haya sido respiratoria. Esto significa que el espectro de patógenos probables ya NO es el mismo que el de una NAC típica adquirida por una persona sin contacto reciente con el sistema de salud — se debe considerar cobertura empírica más amplia, evaluando factores de riesgo específicos para multirresistencia antes de decidir el antibiótico."
      }
    },
    {
      "nivel": "avanzado",
      "vineta": "(Caso real de tu clase) Mujer de 58 años con ACV hemorrágico ingresada en UCI hace 6 días, intubada. Al cuarto día de ventilación mecánica presenta fiebre de 38.9°C, secreciones traqueales abundantes, FR 32 rpm, SatO2 88% con FiO2 50%. Rx: consolidación nueva en base derecha. Hb 11.2 g/dL, Leucos 20,000/mm³, PCR 98 mg/L.",
      "preguntaMC": {
        "enunciado": "Calculando el PaFi (PaO2/FiO2) usando la SatO2 como aproximación de oxigenación, y considerando el cuadro completo, ¿qué tipo de infección respiratoria presenta esta paciente y qué riesgo de mortalidad implica de entrada?",
        "opciones": [
          {
            "id": "a",
            "texto": "NAC — bajo riesgo, manejo ambulatorio"
          },
          {
            "id": "b",
            "texto": "Neumonía Asociada a Ventilación Mecánica (NAV) — alto riesgo por gravedad de la hipoxemia y contexto de UCI"
          },
          {
            "id": "c",
            "texto": "Bronquitis aguda — sin relevancia del contexto de UCI"
          },
          {
            "id": "d",
            "texto": "Neumonía atípica — por la fiebre y leucocitosis"
          },
          {
            "id": "e",
            "texto": "No se puede clasificar sin cultivo confirmado"
          }
        ],
        "correcta": "b",
        "explicacion": "6 días en UCI + intubada + fiebre + secreciones traqueales purulentas + consolidación NUEVA en la radiografía = Neumonía Asociada a Ventilación Mecánica (NAV), un subtipo de NAH. La hipoxemia marcada (SatO2 88% con FiO2 ya al 50%) junto con la leucocitosis marcada (20,000) y PCR muy elevada (98) sugieren un cuadro de ALTO riesgo — por gravedad clínica y por el contexto de UCI con probable exposición a patógenos nosocomiales, se debe asumir alto riesgo de mortalidad y de MDR hasta demostrar lo contrario, lo que orienta hacia terapia empírica de mayor espectro según el algoritmo (evaluando además si hay o no shock séptico asociado)."
      },
      "preguntaEscrita": {
        "enunciado": "Según el algoritmo de tratamiento antibiótico empírico de tu clase, ¿qué estudios pedirías de inmediato y qué esquema antibiótico empírico propondrías para esta paciente, asumiendo que NO presenta shock séptico?",
        "respuestaModelo": "Estudios inmediatos: muestra del tracto respiratorio inferior (aspirado traqueal cuantitativo o cualitativo) ANTES de iniciar/cambiar el antibiótico, para enfocar la terapia posteriormente; hemocultivos; gasometría arterial completa para calcular el PaFi real. Dado que tiene alto riesgo (por gravedad e internamiento prolongado en UCI) pero SIN shock séptico, según el algoritmo correspondería iniciar un solo agente Gram-negativo (activo contra >90% de las bacterias Gram-negativas circulantes en esa UCI específica) más cobertura empírica para MRSA, en vez de la cobertura doble para Pseudomonas que solo estaría indicada si hubiera shock séptico asociado."
      }
    }
  ]
}
,
  {
  "id": "tuberculosis-pulmonar",
  "nombre": "Tuberculosis Pulmonar",
  "area": "Neumología",
  "semanas": [
    "semana-02"
  ],
  "favorito": false,
  "estudiado": false,
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1fWwD_p1HT5YIF-gMELeZU5z_E4GkWIIf/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_2_SESIÓN-6-TEMA-2: Tuberculosis Pulmonar"
  },
  "relacionadas": [
    {
      "id": "enfermedades-pleurales",
      "relacion": "El derrame pleural tuberculoso es una presentación extrapulmonar frecuente — confirmado por ADA elevado y exudado linfocitario"
    }
  ],
  "profundo": {
    "definicion": "Enfermedad infecciosa causada por un bacilo del grupo Mycobacterium tuberculosis (Mtb, o bacilo de Koch). El ser humano es el reservorio y transmisor de la micobacteria, que actúa como PARÁSITO — infecta a la persona sin destruirla, precisamente para poder seguir infectando a otros individuos. Es una enfermedad infecciosa, PREVENIBLE y CURABLE, considerada un reto de salud pública por su alta incidencia, formas resistentes, y asociación con VIH y diabetes mellitus.",
    "epidemiologia": "Más de 10 millones de nuevos casos cada año en todo el mundo. Aproximadamente 25% de la población mundial está infectada por M. tuberculosis. 1.6 millones de muertes anuales — es la enfermedad infecciosa con MAYOR mortalidad causada por un único agente. Afecta mayormente a la población económicamente activa. <span class=\"fuente-ampliada\">La meta global (y el compromiso del Estado peruano) es la eliminación de la TB como problema de salud pública para el año 2030, con cobertura universal de diagnóstico/tratamiento gratuito y cero discriminación.</span>",
    "etiologiaFactoresRiesgo": [
      "Transmisión por inhalación de partículas en aerosol (0.65-7 µm) expulsadas al toser por una persona con enfermedad respiratoria activa",
      "Contactos de pacientes con TB activa",
      "Personas con VIH",
      "Pacientes que inician tratamiento anti-TNF",
      "Pacientes en diálisis o pre-trasplante",
      "Diabetes mellitus (tamizaje obligatorio con glicemia en ayunas en TODA persona ≥40 años afectada por TB)",
      "Personas privadas de libertad, personal de salud, inmigrantes de países de alta carga, personas sin hogar"
    ],
    "criteriosDiagnosticos": "Caso de TB con confirmación bacteriológica: resultado positivo por baciloscopía, cultivo o prueba molecular rápida. Caso de TB SIN confirmación bacteriológica: diagnosticado por criterio clínico + apoyo de imagen/histología sugestiva, sin cumplir criterios de confirmación. Se solicita radiografía de tórax en TODO caso probable — pero ningún patrón radiográfico es específico para TB por sí solo.",
    "fisiopatologia": {
      "resumen": "La micobacteria es fagocitada por macrófagos, células dendríticas y neutrófilos en el alvéolo — pero la micobacteria VIRULENTA bloquea la maduración del fagosoma, impide su acidificación, e inhibe la fusión con el lisosoma (evasión inmunitaria activa, no pasiva). Las células inmunitarias entonces se organizan en GRANULOMAS, cuya capa externa está formada por linfocitos B y T — esta contención determina si la infección queda LATENTE o progresa a enfermedad activa.",
      "cascada": [
        {
          "paso": "Transmisión",
          "detalle": "Inhalación de aerosoles (0.65-7 µm) con M. tuberculosis expulsados por tos de un paciente con TB activa"
        },
        {
          "paso": "Fagocitosis alveolar",
          "detalle": "Macrófagos, células dendríticas y neutrófilos fagocitan la micobacteria en el compartimento alveolar"
        },
        {
          "paso": "Evasión inmunitaria",
          "detalle": "La micobacteria virulenta bloquea la maduración del fagosoma, impide su acidificación, e inhibe la fusión con el lisosoma — sobrevive DENTRO del macrófago"
        },
        {
          "paso": "Formación del granuloma",
          "detalle": "Las células inmunitarias se organizan en granulomas con linfocitos B y T en la capa externa — contención de la infección"
        },
        {
          "paso": "Bifurcación",
          "detalle": "Inmunidad mediada por macrófagos + granulomas + interferón CONTROLAN la diseminación → Infección Tuberculosa Latente (ITL). Si el sistema inmune NO controla → progresión a TB activa"
        },
        {
          "paso": "TB posprimaria (enfermedad activa)",
          "detalle": "Infiltrado alveolar precoz que puede remitir o propagarse — puede evolucionar a neumonía lobar obstructiva, neumonía caseosa, formación de cavernas, o diseminarse por vía sanguínea si hay inmunodepresión"
        }
      ],
      "imagenes": [
        {
          "src": "assets/tb/tb-rx-tc-diagnostico.jpg",
          "caption": "Diagnóstico por imágenes (de tu clase)",
          "explicacion": "De izquierda a derecha: la primera radiografía muestra opacidad/cavitación en vértice pulmonar — el patrón clásico de TB posprimaria por su localización apical. Los siguientes 3 cortes de TC muestran distintos grados del patrón de 'árbol en brote' (tree-in-bud) — pequeños nódulos centrolobulillares conectados a estructuras ramificadas, que representan bronquiolos impactados con material caseoso/purulento — este patrón es altamente sugestivo de diseminación endobronquial activa de la micobacteria, no solo de una cavidad aislada. Recuerda: ningún patrón radiológico es 100% específico de TB por sí solo, siempre se interpreta junto con la clínica y la bacteriología."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">Un dato evolutivo fascinante que menciona tu propio PPT: solo los HUMANOS desarrollan tuberculosis posprimaria (la forma que permite transmitir el bacilo a otras personas) — el animal infectado simplemente muere a consecuencia de la infección primaria, sin llegar a esta segunda fase. Esto sugiere que M. tuberculosis ha coevolucionado específicamente con el ser humano como su reservorio, optimizando su ciclo de transmisión a través de nosotros específicamente.</span>"
    },
    "clinica": [
      {
        "signo": "Primoinfección — generalmente asintomática o paucisintomática",
        "detallePPT": "Disminución del rendimiento intelectual, astenia, febrícula, eritema nodoso (raro)",
        "mecanismo": "Respuesta inmune inicial contenida, sin gran replicación bacilar sistémica"
      },
      {
        "signo": "Fiebre vespertina",
        "detallePPT": "Signo frecuente de TB posprimaria",
        "mecanismo": "Respuesta inflamatoria crónica con patrón circadiano característico"
      },
      {
        "signo": "Sudores nocturnos + pérdida de peso",
        "detallePPT": "Signos frecuentes de TB posprimaria",
        "mecanismo": "Estado catabólico crónico por la respuesta inflamatoria sostenida (mediada por TNF y otras citoquinas)"
      },
      {
        "signo": "Tos + expectoración hemoptoica",
        "detallePPT": "Signos frecuentes; disnea en formas avanzadas",
        "mecanismo": "Daño tisular cavitario con erosión de vasos sanguíneos de pequeño calibre"
      },
      {
        "signo": "Ausencia de síntomas respiratorios en TB activa (en algunos casos)",
        "detallePPT": "Tema de reflexión de tu propia clase",
        "mecanismo": "<span class=\"fuente-ampliada\">Puede reflejar enfermedad en fase inicial, localización predominantemente extrapulmonar, o una respuesta inmune del huésped que limita la extensión de la afectación de la vía aérea — con implicancias serias: estos pacientes pueden seguir siendo bacilíferos y transmitir la enfermedad sin saberlo, dificultando el control epidemiológico.</span>"
      }
    ],
    "examenFisico": [
      "Crépitos en el vértice pulmonar afectado (por la localización apical preferente)",
      "Signos de consolidación si hay neumonía caseosa establecida",
      "Puede ser normal en formas iniciales o extrapulmonares"
    ],
    "semiologia": {
      "inspeccion": "Busca caquexia (por pérdida de peso crónica) y palidez si hay anemia de proceso crónico asociada.",
      "palpacion": "Sin hallazgos específicos, salvo adenopatías palpables si hay compromiso ganglionar asociado.",
      "percusion": "Puede haber matidez sobre zonas de consolidación caseosa extensa.",
      "auscultacion": "Crépitos localizados en VÉRTICES pulmonares — la localización preferente de la TB posprimaria en segmentos apicales y dorsales de lóbulos superiores, y apicales de lóbulos inferiores, se explica por la mayor oxigenación relativa y menor circulación linfática en esas zonas (M. tuberculosis es aerobio estricto y prolifera mejor donde hay más oxígeno disponible)."
    },
    "tablasClinicas": [
      {
        "titulo": "🧬 Tipos de tuberculosis resistente",
        "contexto": "La resistencia se define por a qué fármaco(s) específico(s) es resistente el M. tuberculosis — esto determina completamente el esquema de tratamiento a usar.",
        "columnas": [
          "Tipo",
          "Definición"
        ],
        "filas": [
          [
            "TB resistente a Isoniacida (TB rH)",
            "Resistencia detectada a Isoniacida (H), SIN resistencia a Rifampicina"
          ],
          [
            "TB resistente a Rifampicina (TB RR)",
            "Resistencia detectada a Rifampicina"
          ],
          [
            "TB multidrogorresistente (TB MDR)",
            "Resistencia SIMULTÁNEA a Isoniacida Y Rifampicina"
          ],
          [
            "TB pre-extensamente resistente (pre-XDR)",
            "Cumple criterio MDR/RR + resistencia a cualquier fluoroquinolona"
          ],
          [
            "TB extensamente resistente (XDR)",
            "Cumple criterio RR/MDR + fluoroquinolona + al menos 1 medicamento adicional del Grupo A (Bedaquilina, Linezolid)"
          ]
        ]
      },
      {
        "titulo": "💊 Esquema de tratamiento — TB sensible (MINSA 2023)",
        "contexto": "El esquema estándar se divide en 2 fases con distinta frecuencia de dosis — HREZ son las siglas de los 4 fármacos de primera línea.",
        "columnas": [
          "Situación",
          "Primera fase",
          "Segunda fase"
        ],
        "filas": [
          [
            "TB sin VIH",
            "2 meses HREZ diario (50 dosis)",
            "4 meses H3R3 — 3 veces/semana (54 dosis)"
          ],
          [
            "TB miliar / SNC / osteoarticular",
            "2 meses HREZ diario (50 dosis)",
            "10 meses HR diario (250 dosis)"
          ],
          [
            "TB con VIH",
            "2 meses HREZ diario (50 dosis)",
            "4 meses HR diario (100 dosis)"
          ]
        ],
        "nota": "H=Isoniacida, R=Rifampicina, E=Etambutol, Z=Pirazinamida. Todo esquema con Isoniacida requiere Piridoxina 50mg/día como acompañante para prevenir neuropatía."
      },
      {
        "titulo": "🛡️ Esquemas para Terapia Preventiva de TB (TPTB)",
        "columnas": [
          "Esquema",
          "Duración"
        ],
        "filas": [
          [
            "Isoniacida (H) sola",
            "6 meses diario"
          ],
          [
            "Isoniacida + Rifampicina (H+R)",
            "3 meses diario"
          ],
          [
            "Rifampicina (R) sola",
            "4 meses diario"
          ],
          [
            "Rifapentina + Isoniacida (>2 años)",
            "3 meses, 1 vez/semana (12 dosis)"
          ]
        ],
        "nota": "Indicado en: contactos de TB activa, personas con VIH, inicio de anti-TNF, diálisis/pre-trasplante, y grupos de riesgo con ITBL detectada (PPL, personal de salud, corticoides/inmunosupresores prolongados, ERC, neoplasias, DM)."
      }
    ],
    "diagnostico": "Diagnóstico bacteriológico: se requieren 3 muestras pulmonares de buena calidad (esputo, esputo inducido, aspirado gástrico, o muestras endoscópicas), procesadas con tinción de Ziehl-Neelsen/auramina, cultivo (Löwenstein-Jensen, Ogawa, o MGIT), técnicas de amplificación génica, o Xpert MTB/RIF (GeneXpert). Se recomienda solicitar 2 muestras de esputo SERIADAS: la primera al identificar al caso probable, la segunda al día siguiente al despertar en su domicilio. TODA Persona Afectada por Tuberculosis (PAT) debe ser evaluada con pruebas moleculares rápidas para resistencia a Isoniacida y/o Rifampicina ANTES de iniciar tratamiento.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Síntomas respiratorios (tos ≥2-3 semanas) + síntomas generales → caso probable de TB"
      },
      {
        "tipo": "paso",
        "texto": "Solicitar radiografía de tórax + 2 muestras seriadas de esputo para baciloscopía"
      },
      {
        "tipo": "decision",
        "texto": "¿Baciloscopía/cultivo/prueba molecular positiva?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Caso de TB CON confirmación bacteriológica — realizar prueba molecular de resistencia ANTES de iniciar tratamiento",
            "color": "coral"
          },
          {
            "etiqueta": "NO, pero clínica + imagen sugestiva",
            "texto": "Caso de TB SIN confirmación bacteriológica (diagnóstico clínico-radiológico)",
            "color": "mint"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿Resistencia detectada a Isoniacida y/o Rifampicina?",
        "salidas": [
          {
            "etiqueta": "NO — TB sensible",
            "texto": "Esquema estándar: 2 meses HREZ + 4 meses H3R3 (o según situación especial)",
            "color": "mint"
          },
          {
            "etiqueta": "SÍ — TB resistente",
            "texto": "Esquema específico según patrón de resistencia (rH, RR, MDR, pre-XDR, XDR) — consulta con médico consultor/experto en TB-DR",
            "color": "alert"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "Neumonía adquirida en la comunidad de evolución prolongada",
      "Neoplasia pulmonar (especialmente en cavitaciones de vértice en adultos mayores)",
      "Micosis pulmonares endémicas (histoplasmosis, paracoccidioidomicosis)",
      "Sarcoidosis (por el patrón granulomatoso y adenopatías)"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Medidas de control administrativo (primera línea): reducir exposición del personal de salud y pacientes",
        "Medidas de control ambiental (segunda línea): ventilación adecuada del establecimiento de salud",
        "Medidas de protección respiratoria (tercera línea, NO reemplaza las anteriores): reducir inhalación de partículas infecciosas",
        "Estudio de contactos completo: censo + examen integral (clínico, radiológico, PPD/IGRA, bacteriológico) + control (mínimo 3 controles en TB sensible, mínimo 6 en TB resistente)",
        "Vacuna BCG a todo recién nacido ≥1.5kg, dentro de las 24h de nacido (o lo antes posible durante el primer año de vida)",
        "Rehabilitación respiratoria: fortalecimiento de músculos respiratorios + técnicas de respiración controlada, para secuelas funcionales"
      ],
      "farmacologico": [
        "TB sensible sin VIH: 2 meses HREZ diario + 4 meses H3R3 (3 veces/semana)",
        "TB miliar/SNC/osteoarticular: 2 meses HREZ + 10 meses HR diario (esquema más prolongado)",
        "TB con VIH: 2 meses HREZ + 4 meses HR DIARIO (no intermitente, a diferencia del esquema sin VIH)",
        "TB rH (resistente a Isoniacida): esquema 6 (R-E-Z-Levofloxacino) — 150 dosis, 6 meses (extensible a 9 meses con evaluación de médico consultor)",
        "TB RR/MDR — Esquema Oral Acortado (EOA): Bedaquilina-Linezolid-Clofazimina-Levofloxacino, 9-12 meses (240-300 dosis)",
        "TB RR/MDR — Esquema Oral Prolongado (EOP): 18 meses (450 dosis) cuando no es candidato al esquema acortado",
        "Todo esquema con Isoniacida: agregar Piridoxina 50mg/día para prevenir neuropatía periférica",
        "TB-VIH: agregar Piridoxina 50mg (prevención de neuropatía) + iniciar TARV + Terapia Preventiva con Cotrimoxazol (TPC)"
      ]
    },
    "complicaciones": [
      "Hemoptisis masiva o recurrente",
      "Fístula broncopleural",
      "Empiema pleural",
      "Pulmón destruido / bronquiectasias / cavidades / pulmón atrapado (secuelas estructurales)",
      "Insuficiencia respiratoria e hiperreactividad bronquial (secuelas funcionales)",
      "Micetoma pulmonar (colonización por Aspergillus de una caverna residual)"
    ],
    "prevencion": "Vacuna BCG universal en recién nacidos. Terapia Preventiva de TB (TPTB) en grupos de alto riesgo. Estudio y control de contactos sistemático. Medidas de control de infecciones respiratorias en establecimientos de salud (administrativas > ambientales > protección respiratoria, en ese orden de prioridad).",
    "perlasProfundo": "Una PAT (Persona Afectada por Tuberculosis) puede o no tener confirmación bacteriológica, pero SIEMPRE debe registrarse en el SIGTB una vez diagnosticada — inicie o no tratamiento. Y antes de iniciar CUALQUIER tratamiento, toda PAT debe tener evaluación molecular rápida de resistencia a Isoniacida/Rifampicina — no se trata 'a ciegas' asumiendo sensibilidad.",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con perfil bioquímico completo (como el del derrame pleural de tu propia clase) donde debes aplicar criterios de Light + interpretar un marcador específico (ADA) para llegar a la sospecha diagnóstica correcta.",
      "ejercicios": [
        {
          "tipo": "Aplicar criterios y sustentar (el más frecuente)",
          "planteamiento": "Líquido pleural con proteínas pleura/suero 0.6, LDH pleura/suero 0.7, ADA 55 U/L, linfocitos predominantes. Clasifique y dé su sospecha diagnóstica.",
          "respuestaModelo": "Exudado por criterios de Light (ambos cocientes superan 0.5 y 0.6 respectivamente). El ADA de 55 U/L (>40 U/L) junto con predominio linfocitario es altamente sugestivo de derrame pleural TUBERCULOSO."
        },
        {
          "tipo": "Indique y sustente (fisiopatología)",
          "planteamiento": "¿Por qué la TB posprimaria afecta preferentemente los vértices pulmonares y no las bases?",
          "respuestaModelo": "Porque M. tuberculosis es un aerobio estricto, y los vértices pulmonares tienen mayor tensión de oxígeno relativa (menor perfusión sanguínea comparada con la ventilación) y menor circulación linfática que las bases — ambas condiciones favorecen la proliferación bacilar sobre otras zonas del pulmón."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste los 4 fármacos de primera línea del esquema HREZ y su duración en la primera fase.",
          "respuestaModelo": "Isoniacida (H), Rifampicina (R), Etambutol (E), Pirazinamida (Z) — durante 2 meses, diario (50 dosis) en la primera fase."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "El bacilo evade al macrófago bloqueando fagosoma-lisosoma — la infección se contiene en granulomas (ITL) o progresa a enfermedad activa",
      "Diagnóstico: 2 muestras de esputo seriadas + prueba molecular de resistencia ANTES de tratar",
      "Esquema sensible estándar: 2 meses HREZ + 4 meses H3R3 (con VIH: HR diario, no intermitente)"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — resistencia y esquema",
      "columnas": [
        "Patrón de resistencia",
        "Esquema"
      ],
      "filas": [
        [
          "Sensible",
          "2m HREZ + 4m H3R3"
        ],
        [
          "rH (solo Isoniacida)",
          "Esquema 6: R-E-Z-Levofloxacino, 6 meses"
        ],
        [
          "RR/MDR",
          "EOA 9-12m o EOP 18m según elegibilidad"
        ]
      ],
      "nota": "Con VIH: segunda fase HR DIARIO (no 3x/semana como en TB sensible sin VIH)."
    },
    "clinica": "Fiebre vespertina + sudores nocturnos + pérdida de peso + tos ± hemoptisis, localización preferente en vértices pulmonares.",
    "diagnostico": "2 muestras de esputo seriadas + prueba molecular rápida de resistencia antes de iniciar tratamiento.",
    "tratamientoResumen": "TB sensible: 2m HREZ + 4m H3R3 (HR diario si VIH+). TB resistente: esquema según patrón específico (rH/RR/MDR/XDR).",
    "diferenciales": [
      {
        "entidad": "Neoplasia pulmonar",
        "clave": "Cavitación en adulto mayor con antecedente de tabaquismo, sin síntomas B tan marcados"
      },
      {
        "entidad": "Sarcoidosis",
        "clave": "Adenopatías hiliares bilaterales simétricas, granulomas no caseificantes"
      }
    ],
    "tablaComparativa": {
      "titulo": "TB posprimaria vs Primoinfección",
      "filas": [
        [
          "Presentación",
          "Sintomática (fiebre, sudores, pérdida de peso)",
          "Asintomática/paucisintomática"
        ],
        [
          "Contagiosidad",
          "Sí, transmite el bacilo",
          "No (a menos que progrese)"
        ],
        [
          "Localización",
          "Vértices pulmonares",
          "Variable"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Por qué la TB prefiere los vértices pulmonares? → Mayor oxigenación relativa y menor circulación linfática — M. tuberculosis es aerobio estricto",
      "¿Qué se debe hacer ANTES de iniciar tratamiento antituberculoso? → Prueba molecular rápida de resistencia a Isoniacida y Rifampicina",
      "¿Cuál es la diferencia entre TB RR, MDR, pre-XDR y XDR? → RR=solo Rifampicina; MDR=Isoniacida+Rifampicina; pre-XDR=MDR+fluoroquinolona; XDR=pre-XDR+1 fármaco del Grupo A",
      "¿Cómo cambia el esquema con VIH? → Segunda fase con HR DIARIO (no 3 veces/semana como en TB sensible sin VIH)",
      "¿Qué vitamina se acompaña siempre con Isoniacida? → Piridoxina (B6) 50mg/día, para prevenir neuropatía",
      "¿Todo caso de TB requiere confirmación bacteriológica para registrarse? → NO, pero SÍ debe registrarse en el SIGTB inicie o no tratamiento",
      "¿Solo los humanos desarrollan TB posprimaria? → Sí — es lo que permite la transmisión; los animales mueren en la fase primaria"
    ],
    "redFlags": [
      "Hemoptisis masiva → posible complicación grave, requiere manejo urgente",
      "Falta de mejoría clínica con esquema sensible estándar → sospechar resistencia no detectada inicialmente",
      "TB en paciente VIH+ → siempre TARV + TPC + ajuste de esquema (HR diario en 2da fase)"
    ],
    "erroresFrecuentes": [
      "Iniciar tratamiento sin prueba de resistencia previa",
      "Usar el esquema intermitente (H3R3) de 2da fase en un paciente con VIH (debe ser diario)",
      "Olvidar la Piridoxina en esquemas con Isoniacida",
      "Asumir que un patrón radiológico específico confirma TB sin bacteriología"
    ],
    "asociacionesClinicas": [
      "TB + diabetes mellitus → tamizaje obligatorio de DM en TODA persona ≥40 años con TB, y de ITBL en todo diagnóstico reciente de DM",
      "TB + derrame pleural con ADA elevado + exudado linfocitario → altamente sugestivo de TB pleural"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "intermedio",
      "vineta": "(Caso real de tu clase) Paciente de 34 años que presenta un derrame pleural unilateral. Se le realiza una toracocentesis diagnóstica obteniéndose: aspecto amarillo citrino, pH 7.3, cociente de proteínas pleura/suero 0.8, cociente de LDH pleura/suero 0.9, Gram negativo, lípidos totales/colesterol/triglicéridos normales, células mesoteliales <3%, linfocitosis sin atipias, ADA 64 U/L.",
      "preguntaMC": {
        "enunciado": "Según los criterios de Light y el perfil bioquímico presentado, ¿cuál es la sospecha diagnóstica más probable?",
        "opciones": [
          {
            "id": "a",
            "texto": "Trasudado por insuficiencia cardiaca"
          },
          {
            "id": "b",
            "texto": "Exudado — derrame pleural tuberculoso (por ADA muy elevado + linfocitosis + células mesoteliales bajas)"
          },
          {
            "id": "c",
            "texto": "Empiema por neumonía bacteriana"
          },
          {
            "id": "d",
            "texto": "Quilotórax"
          },
          {
            "id": "e",
            "texto": "Derrame paramaligno"
          }
        ],
        "correcta": "b",
        "explicacion": "Por criterios de Light, es EXUDADO: cociente de proteínas pleura/suero 0.8 (>0.5) y cociente de LDH pleura/suero 0.9 (>0.6) — ambos superan el umbral de exudado. El perfil adicional apunta fuertemente a TB pleural: ADA (adenosina desaminasa) de 64 U/L está MUY elevado (valores >40 U/L son altamente sugestivos de TB pleural), junto con linfocitosis sin atipias y células mesoteliales <3% (la TB pleural típicamente cursa con pocas células mesoteliales, a diferencia de otros exudados). Los lípidos normales descartan quilotórax; el Gram negativo hace menos probable empiema bacteriano agudo."
      },
      "preguntaEscrita": {
        "enunciado": "¿Qué otro estudio solicitarías para confirmar la sospecha diagnóstica, y por qué el cultivo de líquido pleural por sí solo suele tener baja rentabilidad diagnóstica en TB pleural?",
        "respuestaModelo": "Solicitaría biopsia pleural (con aguja o por toracoscopia) para estudio histopatológico (buscando granulomas) y cultivo del tejido, además de completar el estudio con baciloscopía de esputo si hay compromiso pulmonar asociado. El cultivo de LÍQUIDO pleural por sí solo tiene baja rentabilidad (aproximadamente 25-50%) porque la TB pleural es fundamentalmente una reacción de HIPERSENSIBILIDAD a antígenos micobacterianos en el espacio pleural, más que una infección con gran carga bacilar activa en el líquido mismo — por eso la biopsia pleural (que sí puede mostrar granulomas y mayor carga bacilar tisular) tiene mejor rendimiento diagnóstico que el líquido solo."
      }
    },
    {
      "nivel": "basico",
      "vineta": "(Caso real de tu clase) Un paciente varón de 32 años acude al centro de salud por tos persistente con expectoración hemoptoica ocasional, pérdida de peso de 5 kg en los últimos 2 meses, sudoración nocturna y febrícula vespertina. No tiene comorbilidades conocidas. Es natural de Lima y vive en zona de alta densidad poblacional. No ha recibido tratamiento antituberculoso previo. Al examen físico se auscultan crépitos en el vértice pulmonar derecho. La radiografía de tórax muestra una cavitación en lóbulo superior derecho. Se toma esputo para baciloscopía.",
      "preguntaMC": {
        "enunciado": "¿Cuál es el siguiente paso diagnóstico más apropiado para confirmar la tuberculosis pulmonar en este paciente?",
        "opciones": [
          {
            "id": "a",
            "texto": "Tomografía de tórax"
          },
          {
            "id": "b",
            "texto": "PPD (Prueba de tuberculina)"
          },
          {
            "id": "c",
            "texto": "Baciloscopía seriada de esputo (al menos 2 muestras)"
          },
          {
            "id": "d",
            "texto": "Biopsia pulmonar"
          }
        ],
        "correcta": "c",
        "explicacion": "La baciloscopía seriada de esputo (mínimo 2 muestras) es el método inicial recomendado por la Norma Técnica de Salud MINSA 2023 para confirmar TB pulmonar bacilífera en sintomáticos respiratorios — accesible, de bajo costo, resultados rápidos. La TC de tórax puede complementar pero no es el examen confirmatorio de primera línea. El PPD es útil para evaluar exposición pero NO distingue infección activa de latente, sin valor confirmatorio en este contexto de sospecha de enfermedad activa. La biopsia pulmonar se reserva para casos atípicos sin diagnóstico por métodos convencionales."
      },
      "preguntaEscrita": {
        "enunciado": "Basándote en la localización de la cavitación de este paciente (lóbulo superior derecho) y en la fisiopatología de la TB, explica por qué esta localización es la esperada y no una coincidencia.",
        "respuestaModelo": "La TB posprimaria afecta preferentemente los segmentos apicales y dorsales de los lóbulos superiores (y los segmentos apicales de los lóbulos inferiores), posiblemente debido a la mayor oxigenación relativa en esas zonas (por menor perfusión sanguínea relativa al flujo de aire, la relación ventilación/perfusión favorece más oxígeno disponible) y a la menor circulación linfática — condiciones que favorecen la proliferación de M. tuberculosis, que es un aerobio estricto. Por lo tanto, encontrar la cavitación precisamente en el lóbulo superior derecho es consistente con la fisiopatología esperada de la enfermedad, no una coincidencia anatómica."
      }
    }
  ]
},
  {
  "id": "enfermedades-pleurales",
  "nombre": "Enfermedades Pleurales: Neumotórax, Hemotórax, Derrame Pleural y Empiema",
  "area": "Neumología",
  "semanas": [
    "semana-02"
  ],
  "favorito": false,
  "estudiado": false,
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1m1Q3nrQFTUc3sp64E6D8dqZGoh5a19p3/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_2_SESIÓN-5-TEMA-3: Enfermedades Pleurales"
  },
  "relacionadas": [
    {
      "id": "tuberculosis-pulmonar",
      "relacion": "El derrame pleural tuberculoso es una presentación extrapulmonar frecuente — confirmado por ADA elevado"
    },
    {
      "id": "neumonia-nac",
      "relacion": "El derrame paraneumónico y el empiema son complicaciones directas de una neumonía mal resuelta"
    }
  ],
  "profundo": {
    "definicion": "Esta clase agrupa 4 entidades del espacio pleural: <strong>Neumotórax</strong> — acumulación de aire extrapulmonar dentro del tórax, por fuga de aire desde el pulmón. <strong>Hemotórax</strong> — presencia de SANGRE en la cavidad pleural. <strong>Derrame pleural</strong> — acumulación anormal de LÍQUIDO entre las dos hojas pleurales. <strong>Empiema</strong> — acumulación de PUS en el espacio pleural (del griego 'empyein' = meter pus), la forma más grave de derrame paraneumónico.",
    "epidemiologia": "Neumotórax espontáneo: incidencia de 4 por 100,000 hombres y 1.1 por 100,000 mujeres. Empiema: complica 30-50% de las neumonías en niños, con duplicación de casos en menores de 2 años entre 1996-2007 pese a la disminución general de neumonía bacteriana. <span class=\"fuente-ampliada\">Las causas más frecuentes de derrame pleural (90% de los casos) son de origen cardíaco, infeccioso (tuberculoso y paraneumónico), y canceroso.</span>",
    "etiologiaFactoresRiesgo": [
      "Neumotórax primario: ruptura espontánea de bullas subpleurales — adolescentes altos y delgados (más varones), consumo de tabaco/marihuana/cocaína/vapeo, maniobra de Valsalva",
      "Neumotórax secundario: síndromes genéticos (Birt-Hogg-Dubé, Marfan, Ehlers-Danlos), enfermedades pulmonares (fibrosis quística, asma), infecciones (neumonía estafilocócica, TB), neumotórax catamenial (relacionado a la menstruación)",
      "Neumotórax traumático: penetrante o contuso; iatrogénico (toracotomía/toracoscopía, traqueostomía, ventilación mecánica, terapia de alto flujo, colocación de línea subclavia)",
      "Hemotórax: trauma torácico, iatrogénico",
      "Derrame pleural trasudado: insuficiencia cardíaca, cirrosis, síndrome nefrótico, embolia pulmonar, atelectasia",
      "Derrame pleural exudado infeccioso: paraneumónico, TB, fúngico, viral, parasitario",
      "Derrame pleural exudado neoplásico: carcinoma metastásico, linfoma, mesotelioma maligno, cáncer de pulmón/mama"
    ],
    "criteriosDiagnosticos": "Criterios de Light (distinguen exudado de trasudado — un exudado cumple AL MENOS 1 de los 3, un trasudado no cumple ninguno): (1) Proteínas líquido pleural/suero >0.5, (2) LDH líquido pleural/suero >0.6, (3) LDH pleural >2/3 del límite superior normal sérico. Empiema/DPN complicado: pH<7.2, glucosa<60mg/dL, LDH muy elevada, aspecto turbio/purulento, predominio neutrofílico.",
    "fisiopatologia": {
      "resumen": "El pulmón se mantiene expandido gracias al equilibrio de presión negativa intrapleural. En el NEUMOTÓRAX, el aire rompe ese equilibrio y el pulmón colapsa — en el neumotórax A TENSIÓN, la fuga continua genera presión POSITIVA creciente que comprime el pulmón y desplaza el mediastino (emergencia). En el DERRAME PARANEUMÓNICO/EMPIEMA, existe una progresión en 3 etapas bien definidas que explica por qué el manejo cambia según la etapa.",
      "cascada": [
        {
          "paso": "Etapa exudativa (DPN simple)",
          "detalle": "Líquido pleural transparente, de flujo libre, con recuento bajo de leucocitos — pleuritis e inflamación inicial sin acumulación significativa"
        },
        {
          "paso": "Etapa fibrinopurulenta (DPN complicado)",
          "detalle": "Depósito de fibrina y material purulento; formación de tabiques y bandas de fibrina; ambiente PROCOAGULANTE"
        },
        {
          "paso": "Fase organizativa",
          "detalle": "Establecimiento de una CORTEZA fibrosa que puede comprimir el pulmón y causar enfermedad pulmonar restrictiva crónica"
        },
        {
          "paso": "Cambio bioquímico progresivo",
          "detalle": "A medida que avanzan las etapas: la GLUCOSA disminuye, el pH disminuye, y la LDH aumenta — este patrón bioquímico es lo que usas para saber en qué etapa está el paciente"
        }
      ],
      "imagenes": [
        {
          "src": "assets/pleurales/pleural-neumotorax-diagnostico.jpg",
          "caption": "Diagnóstico del neumotórax espontáneo — 3 modalidades (de tu clase)",
          "explicacion": "Izquierda: radiografía de tórax — la modalidad FUNDAMENTAL, donde buscas la línea pleural visceral separada de la pared torácica, con ausencia de trama vascular periférica a esa línea. Centro: TC de tórax — mira las flechas blancas señalando el neumotórax (área oscura sin trama pulmonar) junto a bullas subpleurales, que la TC identifica mejor que la Rx cuando hay patología subyacente. Derecha: ultrasonido — herramienta complementaria muy útil en emergencias, donde la ausencia del 'deslizamiento pleural' normal (lung sliding) sugiere neumotórax en tiempo real, sin necesidad de trasladar al paciente a radiología."
        },
        {
          "src": "assets/pleurales/pleural-hemotorax-rx.jpg",
          "caption": "Radiografía de hemotórax (de tu clase)",
          "explicacion": "Nota la opacificación difusa del hemitórax — a diferencia de un derrame simple, el hemotórax en un paciente con trauma requiere pensar SIEMPRE en el volumen de sangrado (por eso las indicaciones de toracotomía urgente se basan en volumen: >1500mL inicial, o >200mL/hora por 3 horas) y no solo en la imagen. La radiografía confirma la presencia de líquido, pero NO te dice si es sangre — el diagnóstico definitivo de hemotórax es por el ASPECTO del líquido en la toracocentesis/tubo torácico (hematocrito del líquido pleural >50% del hematocrito sérico confirma hemotórax verdadero)."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">El motivo por el que la glucosa BAJA y el pH BAJA a medida que el derrame paraneumónico progresa hacia empiema es metabólico: las bacterias y los neutrófilos activados consumen glucosa por glucólisis anaeróbica en ese ambiente pobre en oxígeno, generando ácido láctico como subproducto — por eso el pH cae. La LDH sube porque refleja directamente la destrucción celular (de neutrófilos y bacterias) que ocurre en ese ambiente hostil. Estos 3 números juntos (glucosa baja + pH bajo + LDH alta) son, en esencia, una fotografía bioquímica de cuánta destrucción celular activa está ocurriendo en el espacio pleural en ese momento.</span>"
    },
    "clinica": [
      {
        "signo": "Disnea, dolor torácico, cianosis (neumotórax)",
        "detallePPT": "Inicio generalmente ABRUPTO",
        "mecanismo": "Colapso pulmonar agudo con pérdida de superficie funcional de intercambio gaseoso"
      },
      {
        "signo": "Astenia y adelgazamiento (derrame pleural)",
        "detallePPT": "Síntoma común, sugiere cronicidad/etiología sistémica",
        "mecanismo": "Estado catabólico crónico según etiología de base (neoplasia, TB, insuficiencia cardiaca)"
      },
      {
        "signo": "Fiebre (derrame/empiema)",
        "detallePPT": "Sugiere origen INFECCIOSO",
        "mecanismo": "Respuesta inflamatoria sistémica a la infección pleural"
      },
      {
        "signo": "Dolor torácico pleurítico de inicio súbito",
        "detallePPT": "Bloquea la respiración, causa tos dolorosa que aumenta con cambios de posición",
        "mecanismo": "Irritación aguda de la pleura parietal, muy inervada (a diferencia de la visceral)"
      },
      {
        "signo": "Dificultad respiratoria + malestar general (empiema)",
        "detallePPT": "Presentación clínica del derrame paraneumónico",
        "mecanismo": "Compromiso mecánico del volumen pulmonar + respuesta sistémica a la infección purulenta"
      }
    ],
    "examenFisico": [
      "Neumotórax: disminución marcada de ruidos respiratorios, nota TIMPÁNICA a la percusión, desplazamiento de tráquea/laringe/corazón (si es a tensión)",
      "Derrame pleural — Tríada pleurítica: disminución/abolición del murmullo vesicular + disminución/abolición de vibraciones vocales + matidez franca ('matidez de madera')"
    ],
    "semiologia": {
      "inspeccion": "Neumotórax a tensión: desviación traqueal visible, distensión venosa yugular, dificultad respiratoria con retracciones — signos de una EMERGENCIA que no espera estudios de imagen.",
      "palpacion": "Frémito vocal DISMINUIDO en derrame pleural (el líquido interpuesto entre pulmón y pared absorbe las vibraciones) — y también disminuido en neumotórax (el aire tampoco transmite bien el sonido). Expansión torácica asimétrica, menor en el lado afectado en ambos casos.",
      "percusion": "Neumotórax: hiperresonancia/TIMPANISMO (aire libre = más resonante que el pulmón normal). Derrame pleural/hemotórax/empiema: MATIDEZ franca ('matidez de madera' — el líquido no deja pasar el sonido). Esta es la diferencia semiológica clave entre ambos grupos de patología pleural.",
      "auscultacion": "Ambos grupos comparten: disminución/abolición del murmullo vesicular. La diferencia está en la percusión (timpanismo en neumotórax vs. matidez en derrame/hemotórax/empiema) — por eso la TRÍADA completa (auscultación + palpación + percusión) siempre se evalúa junta, nunca un solo hallazgo aislado."
    },
    "tablasClinicas": [
      {
        "titulo": "🧪 Criterios de Light — Exudado vs Trasudado",
        "contexto": "Se aplican al líquido pleural obtenido por toracocentesis. Un exudado cumple AL MENOS 1 de los 3 criterios; un trasudado no cumple NINGUNO.",
        "columnas": [
          "Criterio",
          "Trasudado",
          "Exudado"
        ],
        "filas": [
          [
            "Proteínas LP/suero",
            "< 0.5",
            "> 0.5"
          ],
          [
            "LDH LP/suero",
            "< 0.6",
            "> 0.6"
          ],
          [
            "Aspecto",
            "Transparente",
            "Serofibrinoso"
          ],
          [
            "Células",
            "< 500/mL",
            "> 1000/mL"
          ],
          [
            "Glucosa",
            "≥ 60 mg/dL",
            "< 60 mg/dL"
          ]
        ],
        "nota": "El trasudado es 'mecánico' (permeabilidad capilar normal — el problema es de presión, no de inflamación); el exudado es 'inflamatorio' (permeabilidad capilar alterada)."
      },
      {
        "titulo": "⚡ Etapas del derrame paraneumónico/empiema",
        "columnas": [
          "Etapa",
          "Característica"
        ],
        "filas": [
          [
            "Previa a la acumulación",
            "Pleuritis inicial sin líquido significativo"
          ],
          [
            "Exudativa (DPN simple)",
            "Líquido transparente, flujo libre, leucocitos bajos"
          ],
          [
            "Fibrinopurulenta (DPN complicado)",
            "Fibrina + pus, tabiques, ambiente procoagulante"
          ],
          [
            "Organizativa",
            "Corteza fibrosa — riesgo de restricción pulmonar crónica"
          ]
        ],
        "nota": "A medida que avanza: glucosa↓, pH↓, LDH↑ — este patrón bioquímico define la etapa, no solo el aspecto macroscópico."
      },
      {
        "titulo": "🚨 Indicaciones de toracotomía urgente en hemotórax",
        "columnas": [
          "Criterio"
        ],
        "filas": [
          [
            "Inestabilidad hemodinámica"
          ],
          [
            "Salida inicial de 1,500 mL por tubo torácico"
          ],
          [
            "Más de 1,500 mL durante 24 horas"
          ],
          [
            "Más de 200 mL/hora durante 3 horas consecutivas"
          ]
        ],
        "nota": "Sin tratar, un hemotórax retenido evoluciona a empiema en el 26% de los casos — la evacuación puede ser incompleta hasta en el 20%."
      }
    ],
    "diagnostico": "Neumotórax: Rx de tórax (fundamental, vistas espiratorias acentúan el contraste); TC si sospecha con Rx no concluyente o para ver patología subyacente (no recomendada de rutina, baja sensibilidad relativa a su costo); ecografía complementaria en emergencias. Derrame pleural: Rx de tórax detecta desde 150cm³ en proyección frontal y 75cm³ en lateral (límite superior = curva de Ellis-Damoiseau); ecografía detecta desde 3-5mL, ideal en tiempo real, guía procedimientos (aumenta éxito de toracocentesis a 97%); TC más útil tras evacuación completa del derrame. Toracocentesis: primer procedimiento diagnóstico (análisis macroscópico, bioquímico, citológico, microbiológico). Biopsia pleural percutánea: 70% de rentabilidad en TB, 50% en cáncer. Toracoscopía médica: 95% de rendimiento en TB y cáncer metastásico pleural, indicada cuando citología es negativa en exudado de causa desconocida.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Sospecha por examen físico: ¿timpanismo (neumotórax) o matidez (derrame/hemo/empiema)?"
      },
      {
        "tipo": "paso",
        "texto": "Confirmar con radiografía de tórax ± ecografía"
      },
      {
        "tipo": "decision",
        "texto": "¿Es líquido (no aire)?",
        "salidas": [
          {
            "etiqueta": "SÍ — líquido",
            "texto": "Toracocentesis diagnóstica → aplicar criterios de Light",
            "color": "coral"
          },
          {
            "etiqueta": "NO — es aire (neumotórax)",
            "texto": "Evaluar tamaño y estabilidad hemodinámica → observación, aspiración, o drenaje según tamaño",
            "color": "mint"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿Exudado (cumple algún criterio de Light)?",
        "salidas": [
          {
            "etiqueta": "NO — trasudado",
            "texto": "Buscar causa sistémica (IC, cirrosis, síndrome nefrótico) — tratar la causa de base",
            "color": "mint"
          },
          {
            "etiqueta": "SÍ — exudado",
            "texto": "Evaluar pH/glucosa/aspecto para descartar empiema/DPN complicado",
            "color": "coral"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿pH<7.2, glucosa<60, aspecto turbio/purulento?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Empiema/DPN complicado → antibiótico IV + DRENAJE pleural obligatorio",
            "color": "alert"
          },
          {
            "etiqueta": "NO",
            "texto": "DPN simple → antibiótico, considerar solo observación si derrame pequeño (<1cm)",
            "color": "coral"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "Insuficiencia cardiaca (trasudado bilateral)",
      "Tromboembolismo pulmonar (puede dar derrame pequeño)",
      "Neoplasia pleural/mesotelioma",
      "Pancreatitis (derrame exudativo izquierdo característico)"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Neumotórax pequeño (≤10%): observación, mascarilla con 100% O2, alta en 6-12h si estable",
        "Neumotórax grande (>15%): catéter pigtail para evacuación",
        "Neumotórax recurrente: toracoscopia (VATS) como primera opción — extirpación de bullas + pleurodesis (abrasión pleural más segura, pleurectomía apical con menor recurrencia)",
        "Hemotórax: toracostomía con tubo inicial; VATS temprana (<5 días) reduce estancia hospitalaria y conversión a toracotomía abierta",
        "Derrame recidivante sintomático: pleurodesis con talco (3-4g estéril, sínfisis pleural exitosa en ~50% espontáneamente) o drenaje torácico tunelizado (DTT) si pulmón 'atrapado' o fracaso de pleurodesis",
        "Empiema — derrame pequeño (<1cm): puede tratarse SIN drenaje"
      ],
      "farmacologico": [
        "Empiema/DPN complicado: antibióticos intravenosos de amplio espectro + drenaje pleural obligatorio",
        "Desbridamiento químico con fibrinólisis intrapleural (urocinasa, estreptocinasa, tPA) — comparable a VATS como tratamiento inicial, tasa de fracaso 10-16% que requiere cirugía posterior",
        "Preferencia por tubos torácicos Thal-Quick de 12 Fr con técnica de Seldinger para el drenaje"
      ]
    },
    "complicaciones": [
      "Neumotórax a tensión (emergencia con compromiso hemodinámico)",
      "Hemotórax retenido → evoluciona a empiema en 26% de los casos si no se trata",
      "Empiema → corteza fibrosa con enfermedad pulmonar restrictiva crónica",
      "Complicaciones de toracocentesis: dolor, hemorragia, neumotórax, infección pleural, edema pulmonar de reexpansión",
      "Pulmón 'atrapado' (no expansible) tras derrame crónico no resuelto"
    ],
    "prevencion": "Manejo oportuno y completo de neumonías para evitar progresión a derrame paraneumónico complicado/empiema. Drenaje adecuado y completo de hemotórax para evitar su retención y progresión a empiema.",
    "perlasProfundo": "La diferencia semiológica más rápida entre neumotórax y las otras 3 entidades pleurales está en UN solo hallazgo de percusión: TIMPANISMO (aire = neumotórax) vs. MATIDEZ (líquido = derrame/hemotórax/empiema) — el resto de la tríada (murmullo vesicular y vibraciones vocales, ambos disminuidos) es igual en los 4 casos.",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con perfil bioquímico completo del líquido pleural (como el caso real de empiema de tu propia clase) donde debes aplicar los criterios de Light y luego evaluar si hay criterios de complicación.",
      "ejercicios": [
        {
          "tipo": "Aplicar criterios y clasificar (el más frecuente)",
          "planteamiento": "Líquido pleural: proteínas LP 3.8 g/dL, proteínas séricas 6.5 g/dL, LDH LP 250 U/L, LDH sérica 200 U/L, pH 7.35, glucosa 70 mg/dL. Clasifique y determine si requiere drenaje.",
          "respuestaModelo": "Cociente proteínas = 3.8/6.5 = 0.58 (>0.5) → ya cumple 1 criterio de Light → EXUDADO (no importa que el cociente de LDH sea 250/200=1.25>0.6, que también lo confirma). NO requiere drenaje obligatorio: pH normal (7.35, no <7.2) y glucosa normal (70, no <60) — es un exudado SIN criterios de complicación, se maneja según la causa de base con antibiótico solo si es infeccioso simple, sin necesidad de drenaje pleural."
        },
        {
          "tipo": "Indique y sustente (semiología)",
          "planteamiento": "¿Por qué el murmullo vesicular está disminuido TANTO en el neumotórax como en el derrame pleural, si son entidades opuestas (aire vs. líquido)?",
          "respuestaModelo": "Porque en ambos casos hay algo INTERPUESTO entre el parénquima pulmonar (donde se genera el sonido respiratorio) y el estetoscopio en la pared torácica — en el neumotórax es aire libre, en el derrame es líquido — y ambos actúan como una barrera que atenúa la transmisión del sonido, sin importar de qué esté hecha esa barrera. Por eso el murmullo vesicular disminuido NO distingue entre ambas entidades — necesitas la PERCUSIÓN (timpanismo vs. matidez) para diferenciarlas."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste las 4 indicaciones de toracotomía urgente en hemotórax.",
          "respuestaModelo": "Inestabilidad hemodinámica, salida inicial de 1,500mL por tubo torácico, más de 1,500mL durante 24 horas, más de 200mL/hora durante 3 horas consecutivas."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "4 entidades: neumotórax (aire), hemotórax (sangre), derrame pleural (líquido), empiema (pus) — el espacio pleural es el mismo, el contenido cambia",
      "Criterios de Light: exudado cumple ≥1 criterio (proteínas/LDH), trasudado no cumple ninguno",
      "Empiema/DPN complicado: pH<7.2 + glucosa<60 + turbio → SIEMPRE requiere drenaje, no solo antibiótico"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — percusión según entidad",
      "columnas": [
        "Entidad",
        "Percusión",
        "Manejo inicial"
      ],
      "filas": [
        [
          "Neumotórax",
          "Timpanismo",
          "Según tamaño: observación/aspiración/drenaje"
        ],
        [
          "Derrame/Hemotórax/Empiema",
          "Matidez",
          "Toracocentesis diagnóstica primero"
        ]
      ],
      "nota": "El murmullo vesicular está disminuido en LOS 4 — no distingue por sí solo, necesitas la percusión."
    },
    "clinica": "Neumotórax: inicio abrupto, disnea+dolor+timpanismo. Derrame: tríada pleurítica (↓MV, ↓vibraciones, matidez).",
    "diagnostico": "Rx de tórax inicial en todos los casos. Toracocentesis + criterios de Light para caracterizar el líquido.",
    "tratamientoResumen": "Neumotórax según tamaño. Derrame: tratar causa si trasudado; drenar si empiema/DPN complicado.",
    "diferenciales": [
      {
        "entidad": "TEP",
        "clave": "Puede dar derrame pequeño asociado, buscar contexto de trombosis"
      },
      {
        "entidad": "Insuficiencia cardiaca",
        "clave": "Trasudado, frecuentemente bilateral"
      }
    ],
    "tablaComparativa": {
      "titulo": "Neumotórax vs Derrame pleural",
      "filas": [
        [
          "Contenido",
          "Aire",
          "Líquido"
        ],
        [
          "Percusión",
          "Timpanismo",
          "Matidez"
        ],
        [
          "Estudio inicial",
          "Rx de tórax",
          "Rx + toracocentesis"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Cómo se distingue exudado de trasudado? → Criterios de Light: exudado cumple ≥1 de 3 (proteínas/LDH/LDH absoluta), trasudado ninguno",
      "¿Qué hallazgo de percusión diferencia neumotórax de derrame? → Timpanismo (aire) vs. Matidez (líquido)",
      "¿Cuándo un derrame paraneumónico requiere drenaje obligatorio? → pH<7.2, glucosa<60, aspecto turbio/purulento (empiema/DPN complicado)",
      "¿Cuáles son las indicaciones de toracotomía urgente en hemotórax? → Inestabilidad hemodinámica, ≥1500mL inicial, >1500mL/24h, o >200mL/h×3h",
      "¿Qué estudio tiene mejor rendimiento para TB pleural? → Toracoscopía médica (95%) > biopsia pleural percutánea (70%) > líquido solo",
      "¿Qué % de hemotórax no tratado evoluciona a empiema? → 26%",
      "¿La TC es de rutina en sospecha de neumotórax? → NO, baja sensibilidad relativa a su indicación — se reserva para casos específicos"
    ],
    "redFlags": [
      "Desviación traqueal + hipotensión + distensión yugular → neumotórax A TENSIÓN, emergencia",
      "Empiema no drenado → riesgo de corteza fibrosa y restricción pulmonar crónica permanente",
      "Hemotórax con salida >200mL/h por 3h → toracotomía urgente"
    ],
    "erroresFrecuentes": [
      "Tratar empiema/DPN complicado solo con antibiótico oral sin drenaje",
      "Solicitar TC de rutina para todo neumotórax sospechado",
      "No repetir toracocentesis o considerar biopsia cuando la citología inicial es negativa en exudado de causa incierta",
      "Confundir matidez con timpanismo al no comparar ambos hemitórax"
    ],
    "asociacionesClinicas": [
      "Neumotórax + varón alto y delgado + fumador → primario espontáneo típico",
      "Derrame + fiebre + neumonía reciente → sospechar paraneumónico, evaluar progresión a empiema"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "intermedio",
      "vineta": "Varón de 22 años, previamente sano, consulta por dolor torácico súbito y disnea de inicio brusco tras ejercicio intenso. Al examen: disminución de la expansión torácica derecha, vibraciones vocales disminuidas en base derecha, percusión con matidez en base derecha, auscultación con abolición del murmullo vesicular basal derecha. Tráquea central.",
      "imagen": {
        "src": "assets/taller-imagenes-s2/taller-s2-neumotorax-linea-pleural.jpg",
        "caption": "Radiografía del caso — línea pleural visible (flechas) separando el pulmón colapsado de la pared torácica"
      },
      "preguntaMC": {
        "enunciado": "¿Cómo describirías esta radiografía y cuál es el diagnóstico?",
        "opciones": [
          {
            "id": "a",
            "texto": "Línea pleural visible que separa el pulmón colapsado de la pared torácica — neumotórax"
          },
          {
            "id": "b",
            "texto": "Signo del menisco pleural — derrame pleural"
          },
          {
            "id": "c",
            "texto": "Infiltrado alveolar con broncograma aéreo — neumonía"
          },
          {
            "id": "d",
            "texto": "Opacidad cavitada apical — tuberculosis"
          },
          {
            "id": "e",
            "texto": "Pérdida de volumen con elevación diafragmática — atelectasia"
          }
        ],
        "correcta": "a",
        "explicacion": "Las flechas marcan la línea pleural visceral, desplazada de la pared torácica por el aire acumulado en el espacio pleural — el hallazgo radiológico definitorio del neumotórax. El cuadro clínico (dolor súbito + disnea brusca tras esfuerzo en un varón joven sano) es el escenario típico de un neumotórax espontáneo primario."
      },
      "preguntaEscrita": {
        "enunciado": "Este paciente tiene tráquea central. ¿Qué cambiaría en tu manejo si la tráquea estuviera desviada hacia el lado contralateral, junto con hipotensión?",
        "respuestaModelo": "Tráquea central + estabilidad hemodinámica es compatible con un neumotórax simple, que puede manejarse de forma más electiva (observación en neumotórax pequeño, o drenaje con tubo torácico en los más grandes). Si en cambio hubiera desviación traqueal contralateral E hipotensión, eso indicaría neumotórax A TENSIÓN — una emergencia real que requiere descompresión con aguja INMEDIATA (2do espacio intercostal, línea medioclavicular) sin esperar ningún estudio de imagen adicional, dado el riesgo de colapso cardiovascular por compresión del retorno venoso."
      }
    },
    {
      "nivel": "avanzado",
      "vineta": "(Caso real de tu clase) Varón de 62 años acude a emergencia por disnea progresiva, dolor torácico tipo punzante en hemitórax derecho y fiebre de 38.5°C desde hace 3 días. Antecedentes: diabetes mellitus tipo 2, neumonía hace 1 semana tratada parcialmente con antibióticos orales. Examen: FR 24, matidez a la percusión en base derecha, disminución del murmullo vesicular en hemitórax derecho, egofonía presente. Rx: velamiento del ángulo costofrénico derecho compatible con derrame pleural moderado. Toracocentesis: líquido turbio. Proteínas LP 4.5 g/dL, LDH LP 370 U/L, LDH sérica 180 U/L, glucosa LP 45 mg/dL, pH 7.1, 13,000 leucocitos/mm³ (90% neutrófilos), cultivo pendiente.",
      "preguntaMC": {
        "enunciado": "¿Cuál es el diagnóstico más probable y la conducta más apropiada?",
        "opciones": [
          {
            "id": "a",
            "texto": "Derrame pleural trasudado por insuficiencia cardíaca; iniciar diuréticos"
          },
          {
            "id": "b",
            "texto": "Derrame pleural paraneumónico complicado (empiema); iniciar antibióticos intravenosos y drenaje pleural"
          },
          {
            "id": "c",
            "texto": "Neoplasia pleural; solicitar citología y repetir toracocentesis"
          },
          {
            "id": "d",
            "texto": "Tuberculosis pleural; iniciar tratamiento antituberculoso empírico"
          },
          {
            "id": "e",
            "texto": "Derrame paraneumónico simple; antibióticos orales y observación"
          }
        ],
        "correcta": "b",
        "explicacion": "Por criterios de Light es EXUDADO: proteínas LP/suero >0.5 (4.5 no es trasudado) y LDH LP/LDH sérica = 370/180 = 2.05 (>0.6), además LDH pleural supera 2/3 del límite superior normal sérico. El contexto clínico (fiebre, disnea, dolor pleurítico tras neumonía tratada parcialmente), el aspecto TURBIO, pH bajo (<7.2), glucosa baja (<60) y predominio neutrofílico (90%) confirman empiema/derrame paraneumónico COMPLICADO — requiere antibióticos IV de amplio espectro + drenaje pleural obligatorio, no solo antibiótico oral. (A) descartada: no hay datos de IC y el líquido es exudado. (C) descartada: el contexto infeccioso es claro. (D) descartada: la TB pleural es más linfocitaria, con pH más alto. (E) descartada: el pH<7.2 y glucosa baja indican complicación que requiere drenaje, no solo antibiótico oral."
      },
      "preguntaEscrita": {
        "enunciado": "El antecedente de 'neumonía tratada PARCIALMENTE con antibióticos orales' es clínicamente relevante. Explica por qué un tratamiento antibiótico incompleto pudo favorecer la progresión hacia este empiema.",
        "respuestaModelo": "Un tratamiento antibiótico parcial o incompleto puede suprimir parcialmente la infección sin erradicarla completamente, permitiendo que el proceso inflamatorio pulmonar se extienda hacia el espacio pleural adyacente sin ser controlado a tiempo. Esto le da margen a la infección para progresar a través de las 3 etapas del derrame paraneumónico (exudativa → fibrinopurulenta → organizativa) sin la presión antibiótica adecuada para detenerla en la fase inicial simple, resultando en la acumulación de material purulento con las alteraciones bioquímicas características (pH bajo, glucosa baja, LDH alta) que definen el empiema establecido."
      }
    }
  ]
},
  {
    "id": "enfermedades-respiratorias-ocupacionales",
    "nombre": "Enfermedades Respiratorias Ocupacionales",
    "area": "Neumología",
    "semanas": [
      "semana-03"
    ],
    "favorito": false,
    "estudiado": false,
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "epid",
        "relacion": "La neumoconiosis (silicosis, asbestosis, antracosis) es en realidad un subtipo de EPID de causa conocida (ocupacional) — comparten el mismo mecanismo final de fibrosis intersticial"
      },
      {
        "id": "asma-bronquial",
        "relacion": "El asma ocupacional comparte fisiopatología con el asma común, pero se distingue porque mejora claramente fuera del trabajo (patrón temporal característico)"
      }
    ],
    "profundo": {
      "definicion": "Grupo de patologías del aparato respiratorio causadas, desencadenadas o agravadas por exposiciones en el lugar de trabajo. Incluyen neumoconiosis (silicosis, asbestosis, antracosis), asma ocupacional, EPOC ocupacional, alveolitis alérgica extrínseca, bronquitis crónica por irritantes, cáncer pulmonar ocupacional, y lesiones agudas como edema pulmonar tóxico o bronquiolitis obliterante.",
      "epidemiologia": "A nivel mundial, más de 2 millones de personas mueren anualmente por enfermedades relacionadas al trabajo, siendo las respiratorias un grupo significativo. En Perú (MINSA), las neumoconiosis representan una de las principales causas de incapacidad en mineros y trabajadores de la construcción. La Ley N°29783 de Seguridad y Salud en el Trabajo obliga al empleador a proteger la salud de los trabajadores, incluyendo evaluaciones médicas periódicas y uso de equipos de protección.",
      "etiologiaFactoresRiesgo": [
        "Exposición a polvo mineral (sílice → silicosis, carbón → antracosis, asbesto → asbestosis)",
        "Sustancias químicas irritantes (amoníaco, cloro, vapores ácidos) → bronquitis crónica ocupacional",
        "Humos metálicos (plomo, cromo, estaño)",
        "Agentes biológicos orgánicos (hongos, polvo de aves, caña de azúcar) → alveolitis alérgica extrínseca",
        "Alérgenos laborales (harinas, látex, isocianatos) → asma ocupacional",
        "Exposición prolongada a asbesto, arsénico, cromo, níquel, humo de diésel → cáncer pulmonar ocupacional (aparece tras décadas)"
      ],
      "fisiopatologia": {
        "resumen": "El mecanismo varía según el agente: las partículas inorgánicas inhaladas (sílice, asbesto, carbón) son fagocitadas por macrófagos alveolares que no logran degradarlas, generando inflamación crónica y fibrosis progresiva (neumoconiosis). Los agentes orgánicos e irritantes desencadenan mecanismos inmunológicos (alveolitis alérgica) o inflamatorios directos (bronquitis por irritantes).",
        "explicacionExtendida": "En las neumoconiosis, las partículas inorgánicas inhaladas (sílice cristalina, fibras de asbesto, polvo de carbón) son demasiado pequeñas para ser eliminadas por el aclaramiento mucociliar normal, así que llegan hasta los alvéolos donde son fagocitadas por macrófagos. El problema es que estas partículas son citotóxicas para el macrófago: lo dañan o lo matan, liberando su contenido enzimático y desencadenando una respuesta inflamatoria crónica que con el tiempo se traduce en depósito de colágeno y fibrosis nodular progresiva (silicosis) o difusa (asbestosis). La sílice, además, tiene un efecto especialmente citotóxico que también incrementa el riesgo de tuberculosis en quienes la inhalan de forma crónica.\n\nEn el asma ocupacional y la alveolitis alérgica extrínseca, el mecanismo es inmunológico: el sistema inmune se sensibiliza a una proteína o partícula orgánica específica del ambiente laboral (harina, látex, hongos, polvo de aves), y cada nueva exposición desencadena una respuesta de hipersensibilidad — inmediata tipo I en el asma ocupacional (broncoespasmo), o una combinación de mecanismos tipo III/IV en la alveolitis alérgica extrínseca (infiltrado intersticial difuso). Por eso el dato clínico más característico de estas dos entidades es la MEJORÍA marcada al alejarse del ambiente laboral (fines de semana, vacaciones) y el EMPEORAMIENTO al regresar — un patrón que la neumoconiosis, al ser un daño estructural ya establecido, no sigue de la misma manera."
      ,cascada: [
              {
                      "paso": "Factor desencadenante",
                      "detalle": "Inhalación repetida de partículas inorgánicas (sílice, asbesto, carbón) o antígenos orgánicos/alérgenos en el ambiente laboral"
              },
              {
                      "paso": "Células activadas",
                      "detalle": "Macrófagos alveolares fagocitan las partículas; en asma/alveolitis ocupacional se activa además la respuesta inmunológica (IgE o hipersensibilidad tipo III/IV)"
              },
              {
                      "paso": "Mediadores liberados",
                      "detalle": "Citotoxicidad directa de la partícula sobre el macrófago (neumoconiosis) o liberación de mediadores inflamatorios/histamina (asma, alveolitis)"
              },
              {
                      "paso": "Cambio estructural",
                      "detalle": "Depósito de colágeno y fibrosis nodular/difusa (neumoconiosis) o broncoespasmo e inflamación de la vía aérea (asma ocupacional)"
              },
              {
                      "paso": "Manifestación clínica",
                      "detalle": "Disnea progresiva de años (neumoconiosis) o síntomas agudos que mejoran fuera del trabajo (asma/alveolitis ocupacional)"
              }
      ]
      },
      "clinica": [
        {
          "signo": "Tos, disnea y fiebre que reaparecen cada vez que regresa a la exposición laboral (ej. descargar heno)",
          "mecanismo": "Reacción de hipersensibilidad tipo III/IV a antígenos orgánicos — alveolitis alérgica extrínseca"
        },
        {
          "signo": "Disnea progresiva de años de evolución en trabajador de minas/construcción",
          "mecanismo": "Fibrosis pulmonar progresiva por neumoconiosis — proceso lento, silente durante años"
        },
        {
          "signo": "Sibilancias y opresión torácica que mejoran los fines de semana",
          "mecanismo": "Asma ocupacional — sensibilización a alérgeno laboral específico"
        }
      ],
      "examenFisico": [
        "Neumoconiosis: crépitos tipo velcro en fases avanzadas, acropaquia si hay fibrosis extensa",
        "Alveolitis alérgica extrínseca aguda: taquipnea, estertores finos, SIN sibilancias (dato clave para diferenciar de asma)",
        "Asma ocupacional: sibilancias difusas durante o poco después de la jornada laboral"
      ],
      semiologia: {
            "inspeccion": "Observa el estado general y busca acropaquia en casos de fibrosis avanzada (neumoconiosis). En crisis de asma ocupacional, busca uso de músculos accesorios y dificultad para hablar.",
            "palpacion": "Expansión torácica simétricamente disminuida en neumoconiosis avanzada por la rigidez pulmonar bilateral. Sin hallazgos asimétricos característicos.",
            "percusion": "Habitualmente normal — estas entidades no suelen alterar la percusión de forma marcada, a diferencia de las enfermedades pleurales.",
            "auscultacion": "Neumoconiosis: crépitos tipo velcro en bases en fases avanzadas. Alveolitis alérgica extrínseca aguda: estertores finos SIN sibilancias (dato clave). Asma ocupacional: sibilancias difusas durante o poco después de la jornada laboral."
      },
      "diagnostico": "Historia laboral detallada (cronológica, con fechas y duración de cada exposición) es el paso más importante y frecuentemente el más olvidado. Radiografía/TC de tórax según sospecha (nódulos en silicosis, engrosamiento pleural en asbestosis). Espirometría (patrón restrictivo en neumoconiosis, obstructivo en asma ocupacional). Pruebas específicas: precipitinas séricas en alveolitis alérgica extrínseca.",
      algoritmo: [
            {
                  "tipo": "paso",
                  "texto": "Paciente con enfermedad respiratoria de causa poco clara — SIEMPRE preguntar historia laboral cronológica detallada"
            },
            {
                  "tipo": "paso",
                  "texto": "¿El cuadro se relaciona temporalmente con la exposición laboral (mejora fuera del trabajo)?"
            },
            {
                  "tipo": "decision",
                  "texto": "¿Qué patrón funcional/radiológico predomina?",
                  "salidas": [
                        {
                              "etiqueta": "Patrón restrictivo + fibrosis en imagen",
                              "texto": "Neumoconiosis (silicosis/asbestosis/antracosis) — cesar exposición, vigilar complicaciones (TB, mesotelioma)",
                              "color": "coral"
                        },
                        {
                              "etiqueta": "Sibilancias que mejoran fuera del trabajo",
                              "texto": "Asma ocupacional — esquema de asma + cese de exposición",
                              "color": "mint"
                        },
                        {
                              "etiqueta": "Fiebre/tos recurrente tras exposición orgánica",
                              "texto": "Alveolitis alérgica extrínseca — corticoide en agudo + cese de exposición",
                              "color": "alert"
                        }
                  ]
            }
      ],
      "diagnosticoDiferencial": [
        "Neumonía adquirida en la comunidad (el caso de alveolitis alérgica se confunde fácilmente)",
        "Bronquitis crónica no ocupacional",
        "Asma bronquial común",
        "Enfermedad pulmonar intersticial difusa de otra causa"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Cese INMEDIATO de la exposición al agente causal — es la medida más importante en todas estas entidades",
          "Uso de equipo de protección personal si debe continuar en el ambiente laboral",
          "Notificación y evaluación ocupacional según Ley N°29783",
          "Rehabilitación pulmonar en casos con fibrosis establecida"
        ],
        "farmacologico": [
          "Alveolitis alérgica extrínseca aguda: corticoides sistémicos en el episodio agudo",
          "Asma ocupacional: mismo esquema que asma común (corticoide inhalado + broncodilatador)",
          "Silicosis/asbestosis: sin tratamiento específico que revierta la fibrosis — manejo de soporte y de complicaciones (ej. quimioprofilaxis de TB en silicosis)"
        ]
      },
      "complicaciones": [
        "Tuberculosis (riesgo marcadamente elevado en silicosis)",
        "Mesotelioma pleural maligno (asbestosis — asociación directa y específica)",
        "Fibrosis masiva progresiva (antracosis complicada)",
        "Cáncer pulmonar (asbesto, arsénico, cromo, níquel)"
      ],
      "prevencion": "Uso correcto y constante de equipo de protección respiratoria, ventilación adecuada en el ambiente laboral, evaluaciones médicas ocupacionales periódicas (obligatorias por ley), y rotación/limitación del tiempo de exposición a agentes de alto riesgo.",
      "perlasProfundo": "El dato semiológico que más se presta a confusión (y que aparece explícitamente en tu PPT): en la alveolitis alérgica extrínseca aguda, el paciente tiene estertores finos pero NO sibilancias — si ves sibilancias, piensa más en asma ocupacional que en alveolitis. Además, ningún otro compañero de trabajo suele estar afectado de la misma manera (sensibilización individual), lo que a veces genera dudas sobre si el paciente está fingiendo — no lo está, es sensibilización específica de esa persona."
    },
    "repaso": {
      "conceptosClave": [
        "El cese de la exposición es SIEMPRE la medida más importante, en todas las entidades",
        "Neumoconiosis = daño estructural fibrótico progresivo, sin cura",
        "Asma/alveolitis ocupacional = mejoran claramente fuera del trabajo — patrón temporal es la clave diagnóstica"
      ],
      "clinica": "Historia laboral detallada es el dato más importante — sin ella, es fácil confundir estas entidades con sus equivalentes no ocupacionales.",
      "diagnostico": "Historia laboral cronológica + imagen + espirometría + pruebas específicas según sospecha (precipitinas en alveolitis).",
      "tratamientoResumen": "Cese de exposición (siempre) + tratamiento sintomático específico según la entidad (corticoides en alveolitis aguda, esquema de asma en asma ocupacional).",
      "diferenciales": [
        {
          "entidad": "Neumonía",
          "clave": "La alveolitis alérgica se resuelve y reaparece con cada exposición — la neumonía no sigue ese patrón cíclico"
        },
        {
          "entidad": "Asma común",
          "clave": "El asma ocupacional mejora marcadamente fuera del trabajo (fines de semana, vacaciones) — el asma común no depende del lugar"
        }
      ],
      "tablaComparativa": {
        "titulo": "Silicosis vs. Asbestosis vs. Antracosis",
        "filas": [
          [
            "Agente",
            "Sílice cristalina",
            "Fibras de asbesto"
          ],
          [
            "Complicación específica",
            "Tuberculosis",
            "Mesotelioma pleural"
          ],
          [
            "Patrón",
            "Fibrosis nodular",
            "Fibrosis difusa + engrosamiento pleural"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "SIEMPRE pregunta historia laboral detallada ante cualquier enfermedad respiratoria de causa poco clara",
        "El cese de la exposición es la intervención más importante en todas estas entidades",
        "Silicosis aumenta marcadamente el riesgo de tuberculosis; asbestosis se asocia específicamente a mesotelioma",
        "Alveolitis alérgica extrínseca: estertores SIN sibilancias — dato que la distingue de asma ocupacional"
      ],
      "redFlags": [
        "Trabajador con disnea progresiva + antecedente de exposición a asbesto por años/décadas → descartar mesotelioma, no solo asbestosis simple",
        "Fiebre + tos + disnea que reaparece cada vez que regresa al trabajo → alveolitis alérgica extrínseca, no 'está fingiendo'"
      ],
      "erroresFrecuentes": [
        "No preguntar historia laboral por considerarla poco relevante",
        "Confundir asma ocupacional con asma común y no investigar el patrón temporal con el trabajo",
        "Asumir que un paciente con síntomas que sus compañeros no tienen está exagerando o fingiendo"
      ],
      "asociacionesClinicas": [
        "Minero o trabajador de construcción + disnea progresiva + patrón restrictivo → sospechar neumoconiosis",
        "Trabajador agrícola + fiebre/tos/disnea recurrente tras exposición a heno → alveolitis alérgica extrínseca ('pulmón del granjero')"
      ]
    },
    "casosClinicos": [
      {
        "nivel": "intermedio",
        "vineta": "Mujer de 43 años, trabaja en una granja. Refiere que cada vez que descarga heno presenta fiebre, tos, disnea y producción de esputo, que suele resolverse en 2 a 5 días pero reaparece al volver a exponerse. No usa mascarilla. Ninguno de sus compañeros de trabajo está afectado. Examen: taquipnea, estertores finos, sin sibilancias.",
        "preguntaMC": {
          "enunciado": "¿Cuál es el diagnóstico presuntivo más probable?",
          "opciones": [
            {
              "id": "a",
              "texto": "Neumonía adquirida en la comunidad"
            },
            {
              "id": "b",
              "texto": "Neumonitis por hipersensibilidad (alveolitis alérgica extrínseca)"
            },
            {
              "id": "c",
              "texto": "Bronquitis crónica"
            },
            {
              "id": "d",
              "texto": "Bronquitis aguda"
            },
            {
              "id": "e",
              "texto": "Bronquiectasias"
            }
          ],
          "correcta": "b",
          "explicacion": "El patrón cíclico (síntomas que aparecen con la exposición al heno y se resuelven al alejarse) más la ausencia de sibilancias en el examen (estertores finos SIN sibilancias) es el cuadro clásico de neumonitis por hipersensibilidad / alveolitis alérgica extrínseca — una reacción inmunológica a antígenos orgánicos (hongos del heno), no una infección."
        },
        "preguntaEscrita": {
          "enunciado": "¿Por qué es importante NO asumir que esta paciente está 'fingiendo' solo porque sus compañeros de trabajo no presentan los mismos síntomas?",
          "respuestaModelo": "La alveolitis alérgica extrínseca es una reacción de HIPERSENSIBILIDAD individual — depende de la sensibilización inmunológica específica de cada persona a un antígeno particular, no de la exposición en sí. Así como no todos los que comen maní son alérgicos al maní, no todos los expuestos al mismo antígeno orgánico del heno desarrollan la enfermedad. Que sus compañeros no estén afectados no invalida el cuadro de la paciente — es exactamente el comportamiento esperado de una enfermedad de mecanismo inmunológico individual, no infeccioso."
        }
      }
    ]
  },
  {
  "id": "epid",
  "nombre": "Enfermedad Pulmonar Intersticial Difusa (EPID)",
  "area": "Neumología",
  "semanas": [
    "semana-03"
  ],
  "favorito": false,
  "estudiado": false,
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1ULPtHdlxiuEf_b-PCOsELDj3Uh7bnEDp/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_3_SESIÓN-8-TEMA-2: Enfermedad Pulmonar Intersticial Difusa"
  },
  "relacionadas": [
    {
      "id": "epoc",
      "relacion": "Ambas cursan con disnea crónica progresiva, pero se distinguen por el patrón espirométrico: obstructivo (EPOC) vs. restrictivo (EPID)"
    }
  ],
  "profundo": {
    "definicion": "Grupo HETEROGÉNEO de enfermedades que afectan predominantemente al intersticio pulmonar, aunque también pueden comprometer parénquima, vasos y vías respiratorias periféricas. Se caracterizan por inflamación y/o fibrosis progresiva que compromete la función respiratoria — enfermedades fibrosantes con limitación reversible o no de la capacidad de intercambio gaseoso, por causas conocidas o desconocidas. <span class=\"fuente-ampliada\">El nombre 'intersticial' puede ser engañoso: aunque el intersticio es el sitio predominante de daño, la enfermedad casi siempre también compromete el epitelio alveolar y el endotelio vascular adyacente — no es una enfermedad aislada de un solo compartimento anatómico.</span>",
    "epidemiologia": "Las EPID más frecuentes son la fibrosis pulmonar idiopática (FPI) y la sarcoidosis, que en conjunto representan aproximadamente el 50% de todos los casos. Existen diferencias notables entre países: menor frecuencia de sarcoidosis en España, y menor frecuencia de EPID asociada a enfermedad del tejido conectivo (CTD) en Alemania y registros griegos — lo que sugiere factores genéticos/ambientales/de referencia diagnóstica distintos según la región.",
    "etiologiaFactoresRiesgo": [
      "Edad 20-40 años: más frecuentes sarcoidosis, histiocitosis X, asociadas a enfermedades del colágeno, y linfangioleiomiomatosis",
      "Edad >50 años: predomina la fibrosis pulmonar idiopática (FPI)",
      "Sexo femenino: más frecuentes las EPID asociadas a enfermedades del colágeno; la linfangioleiomiomatosis es EXCLUSIVA de mujeres",
      "Antecedentes familiares: puede haber historia hereditaria en FPI, microlitiasis alveolar, neurofibromatosis, sarcoidosis, esclerosis tuberosa",
      "Tabaquismo: asociado a neumonía intersticial descamativa (NID), bronquiolitis respiratoria, histiocitosis X — pero ocurre lo CONTRARIO con sarcoidosis y alveolitis alérgica extrínseca (el tabaco parece ser protector en estas)",
      "Fármacos: quimioterápicos (busulfán, bleomicina, metotrexato), antibióticos (nitrofurantoína), miscelánea (sales de oro, amiodarona, difenilhidantoína, procainamida)",
      "Exposición ocupacional: agentes orgánicos → alveolitis alérgica extrínseca; polvos inorgánicos → neumoconiosis (como el caso de tu clase: amianto, carbón activado, polvo de celulosa)",
      "Radioterapia torácica previa",
      "Enfermedades sistémicas: colagenosis (LES, AR, esclerosis sistémica, síndrome de Sjögren, polimiositis/dermatomiositis) y otras (sarcoidosis, vasculitis, carcinomatosis linfangítica)"
    ],
    "criteriosDiagnosticos": "El diagnóstico a menudo se realiza mediante una COMBINACIÓN de características clínicas, fisiopatológicas, inmunológicas y de imágenes (TC) — evaluación multidisciplinaria (neumólogo, radiólogo, patólogo). Para un diagnóstico preciso, puede ser necesaria biopsia pulmonar quirúrgica con examen histológico si la TCAR no es concluyente. Criterios de progresión (ATS/ERS 2022) para EPID no-FPI: disminución de CVF ≥10%, aumento de disnea, empeoramiento radiológico en TCAR.",
    "fisiopatologia": {
      "resumen": "El intersticio pulmonar NORMAL es un espacio VIRTUAL entre la membrana basal del epitelio alveolar y el epitelio capilar — casi no existe como estructura visible. En la EPID, este espacio se llena patológicamente con: células inflamatorias, células epiteliales hiperplásicas, depósito de colágeno, proliferación de músculo liso, células malignas, granulomas, o fibras de amiloide (según la etiología específica) — por acumulación excesiva de células de distintas fuentes (mesenquimal, epitelial, inflamatoria) y productos de curación de heridas y matriz extracelular.",
      "cascada": [
        {
          "paso": "Intersticio normal",
          "detalle": "Espacio virtual entre membrana basal del epitelio alveolar y el epitelio capilar — prácticamente no ocupa volumen"
        },
        {
          "paso": "Injuria inicial",
          "detalle": "Causa conocida (fármaco, exposición ocupacional, enfermedad del tejido conectivo) o desconocida (idiopática) daña el epitelio alveolar"
        },
        {
          "paso": "Acumulación patológica",
          "detalle": "Células inflamatorias + células epiteliales hiperplásicas + depósito de colágeno + proliferación de músculo liso ocupan el espacio intersticial"
        },
        {
          "paso": "Fibrosis progresiva",
          "detalle": "Productos de curación de heridas y matriz extracelular se acumulan de forma sostenida — el intersticio ya NO es virtual, tiene volumen real"
        },
        {
          "paso": "Compromiso funcional",
          "detalle": "El intersticio engrosado dificulta la difusión de gases (↓DLCO) y reduce la distensibilidad pulmonar (patrón restrictivo: ↓CVF, ↓volúmenes)"
        },
        {
          "paso": "Manifestación clínica",
          "detalle": "Disnea progresiva + hipoxemia (inicialmente solo con ejercicio, luego en reposo) + crepitantes tipo Velcro"
        }
      ],
      "imagenes": [
        {
          "src": "assets/epid/epid-tcar-reticulacion.jpg",
          "caption": "Reticulación en TCAR — 3 patrones (de tu clase)",
          "explicacion": "La reticulación es líneas finas entrecruzadas que reflejan engrosamiento del intersticio, y se clasifica según SU UBICACIÓN exacta respecto al lobulillo pulmonar secundario: interlobular (siguiendo los tabiques QUE RODEAN el lobulillo — imagen superior derecha), perilobular (imagen grande de la izquierda, distribución subpleural siguiendo el contorno del lobulillo), e intralobular (DENTRO del lobulillo mismo — imagen inferior derecha, la más fina y densa). Distinguir estos 3 patrones importa porque cada uno se asocia más a ciertas etiologías — por ejemplo, la reticulación intralobular con panalización es más típica del patrón de neumonía intersticial usual (NIU) de la fibrosis pulmonar idiopática."
        },
        {
          "src": "assets/epid/epid-tcar-panalizacion.jpg",
          "caption": "Panalización (honeycombing) en TCAR",
          "explicacion": "La panalización es EL hallazgo más específico de fibrosis pulmonar establecida e irreversible — mira los espacios quísticos agrupados de pared gruesa, típicamente SUBPLEURALES y basales, que le dan al pulmón una apariencia de 'panal de abeja' (de ahí el nombre). A diferencia de la reticulación simple (que puede ser parcialmente reversible según la causa), la panalización representa destrucción arquitectural DEFINITIVA del parénquima — es el hallazgo clave que define el patrón de neumonía intersticial usual (NIU), el patrón radiológico del prototipo de EPID progresiva: la fibrosis pulmonar idiopática."
        },
        {
          "src": "assets/epid/epid-tcar-bronquiectasias-traccion.jpg",
          "caption": "Bronquiectasias por tracción",
          "explicacion": "Estas NO son bronquiectasias 'verdaderas' (por infección/inflamación de la propia vía aérea, como las que estudiaste en bronquiectasias) — son bronquios dilatados de forma IRREGULAR y ANGULADA porque la fibrosis del parénquima circundante literalmente 'tira' (tracciona) de sus paredes hacia afuera, deformándolos. Es una consecuencia MECÁNICA de la fibrosis retráctil, no una enfermedad primaria de la vía aérea — un dato clave para no confundir esta imagen con bronquiectasias clásicas al interpretar una TC."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">Estos 3 hallazgos (reticulación, panalización, bronquiectasias por tracción) casi siempre aparecen JUNTOS y progresivamente en el mismo paciente con fibrosis establecida — no son 3 enfermedades distintas, son 3 'fotografías' de la misma fibrosis progresiva vista en distintos momentos/grados de severidad: primero reticulación (fibrosis temprana), luego bronquiectasias por tracción (la fibrosis ya deforma estructuras vecinas), y finalmente panalización (destrucción arquitectural terminal). Reconocer los 3 juntos en una TC es lo que define el patrón de neumonía intersticial usual (NIU) característico de la fibrosis pulmonar idiopática.</span>"
    },
    "clinica": [
      {
        "signo": "Disnea y disminución de la tolerancia al ejercicio",
        "detallePPT": "El síntoma MÁS frecuente — de inicio generalmente gradual, aunque puede ser agudo. El grado de disnea se relaciona con la gravedad y el pronóstico de la enfermedad",
        "mecanismo": "Engrosamiento intersticial que dificulta la difusión de oxígeno + reducción de la distensibilidad pulmonar (patrón restrictivo)"
      },
      {
        "signo": "Tos seca",
        "detallePPT": "Segundo síntoma más frecuente en el examen",
        "mecanismo": "Estimulación de receptores de la tos por la distorsión de la arquitectura pulmonar y la inflamación intersticial"
      },
      {
        "signo": "Rales tipo 'Velcro' inspiratorios",
        "detallePPT": ">90% de los casos de FPI; crepitantes simétricos en 60% de EPID asociada a enfermedad del tejido conectivo; menos frecuentes en hipersensibilidad",
        "mecanismo": "Apertura súbita de pequeñas vías aéreas colapsadas por la fibrosis circundante durante la inspiración — genera el sonido característico similar a separar velcro"
      },
      {
        "signo": "Hipocratismo digital (clubbing)",
        "detallePPT": "Marcador de enfermedad fibrótica AVANZADA, más frecuente en FPI; raro en sarcoidosis",
        "mecanismo": "<span class=\"fuente-ampliada\">Mecanismo no completamente esclarecido — se relaciona con hipoxemia crónica y liberación de factores de crecimiento vascular en tejido pulmonar dañado de forma sostenida.</span>"
      },
      {
        "signo": "Sibilancias (menos frecuente)",
        "detallePPT": "Reflejan bronquiolitis y/o obstrucción bronquial; asociadas a síndrome de Churg-Strauss e hipersensibilidad",
        "mecanismo": "Estrechamiento de la vía aérea pequeña por el proceso inflamatorio/fibrótico circundante"
      }
    ],
    "examenFisico": [
      "Crepitantes tipo 'Velcro' en bases pulmonares bilaterales (el hallazgo más característico)",
      "Hipocratismo digital en enfermedad avanzada",
      "Puede haber signos de cor pulmonale en fases avanzadas (edemas, si hay hipertensión pulmonar asociada)"
    ],
    "semiologia": {
      "inspeccion": "Busca hipocratismo digital (dedos en palillo de tambor) — marcador de fibrosis avanzada, y signos de trabajo respiratorio con el esfuerzo.",
      "palpacion": "Sin hallazgos específicos más allá de lo esperado por cualquier proceso pulmonar restrictivo.",
      "percusion": "Habitualmente normal — la EPID no produce cambios de matidez o hiperresonancia como las enfermedades pleurales, ya que el compromiso es del parénquima/intersticio, no del espacio pleural.",
      "auscultacion": "El hallazgo semiológico más característico y buscado activamente: crepitantes tipo 'VELCRO' — inspiratorios, finos, simétricos, en ambas BASES pulmonares (por la distribución típicamente basal y subpleural de la fibrosis). Se llaman así porque el sonido recuerda literalmente al de separar dos superficies de velcro — se producen por la apertura súbita de pequeñas vías aéreas que estaban colapsadas por la fibrosis circundante durante la fase inicial de la inspiración."
    },
    "tablasClinicas": [
      {
        "titulo": "🗂️ Clasificación de las EPID",
        "contexto": "Se dividen en 4 grandes categorías según su etiología — esto ORDENA todo el estudio diagnóstico posterior.",
        "columnas": [
          "Categoría",
          "Ejemplos"
        ],
        "filas": [
          [
            "1. EPID de causa conocida",
            "Asociada a tejido conectivo (AR, esclerosis sistémica, dermatomiositis); ocupacional/ambiental (neumoconiosis, alveolitis por hipersensibilidad); inducida por fármacos o radiación"
          ],
          [
            "2. EPID idiopáticas",
            "Fibrosis pulmonar idiopática (FPI — prototipo de EPID progresiva), neumonía intersticial no específica (NINE), neumonía intersticial descamativa (NID), bronquiolitis respiratoria con EPID, neumonía organizada criptogénica (NOC), neumonía intersticial aguda"
          ],
          [
            "3. EPID en condiciones especiales",
            "Asociada a enfermedades hematológicas/trasplante; en inmunodeprimidos"
          ],
          [
            "4. EPID no clasificadas",
            "—"
          ]
        ]
      },
      {
        "titulo": "🔬 Patrones radiológicos según etiología (TCAR)",
        "columnas": [
          "Entidad",
          "Patrón TCAR característico"
        ],
        "filas": [
          [
            "Fibrosis pulmonar idiopática (FPI)",
            "Patrón de neumonía intersticial usual (NIU): reticulación + panalización + bronquiectasias por tracción, basal y subpleural"
          ],
          [
            "Neumonía intersticial no específica (NINE)",
            "Vidrio esmerilado difuso"
          ]
        ],
        "nota": "El 90% de los casos presentan alteraciones en la radiografía simple al momento del diagnóstico, pero la TCAR es la piedra angular del diagnóstico definitivo."
      }
    ],
    "diagnostico": "Espirometría: patrón RESTRICTIVO (↓CVF, ↓DLCO) — en algunos casos puede haber patrón obstructivo asociado. Pletismografía: capacidad pulmonar total y volúmenes disminuidos. DLCO: disminuida. AGA: gradiente A-a aumentado, hipocapnia moderada; hipoxemia e hipercapnia evidentes SOLO en estadios avanzados. Prueba de esfuerzo: hipoxemia y desaturación inducidas por ejercicio. Radiografía de tórax: patrón reticular bilateral (90% alterada al diagnóstico) — patrones posibles: vidrio esmerilado, nodular, reticular, retículonodular, panal de abeja, con disminución del tamaño de los campos pulmonares. TCAR: estándar de oro para caracterizar el patrón (NIU en FPI, vidrio esmerilado difuso en NINE). Laboratorio: serologías autoinmunes (ANA, anti-Scl70, anti-Jo-1), factor reumatoide, ANCA según sospecha clínica. Biopsia pulmonar (transbronquial, criobiopsia, o quirúrgica) si la TCAR no es concluyente.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Disnea progresiva + tos seca + antecedente relevante (exposición ocupacional, fármacos, enfermedad del tejido conectivo) → sospecha EPID"
      },
      {
        "tipo": "paso",
        "texto": "Examen físico: buscar crepitantes tipo Velcro basales + hipocratismo digital"
      },
      {
        "tipo": "paso",
        "texto": "Espirometría + DLCO: confirmar patrón restrictivo (↓CVF, ↓DLCO)"
      },
      {
        "tipo": "paso",
        "texto": "TCAR: caracterizar el patrón radiológico (NIU, vidrio esmerilado, etc.)"
      },
      {
        "tipo": "decision",
        "texto": "¿TCAR concluyente para un patrón específico + contexto clínico coherente?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Diagnóstico establecido por combinación clínico-radiológica, sin necesidad de biopsia",
            "color": "mint"
          },
          {
            "etiqueta": "NO — TCAR no concluyente",
            "texto": "Biopsia pulmonar (transbronquial, criobiopsia o quirúrgica) + evaluación multidisciplinaria (neumólogo-radiólogo-patólogo)",
            "color": "coral"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "EPOC (patrón obstructivo vs. restrictivo en espirometría)",
      "Insuficiencia cardiaca congestiva (puede dar crepitantes similares, pero con otros hallazgos de sobrecarga)",
      "Neumonía atípica de curso prolongado",
      "Carcinomatosis linfangítica"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Oxigenoterapia si hay hipoxemia",
        "Rehabilitación pulmonar — parte del manejo integral en todos los tipos de EPID",
        "Vacunación (neumococo, influenza)",
        "Considerar trasplante pulmonar en FPI avanzada",
        "Cuidados paliativos en fases avanzadas"
      ],
      "farmacologico": [
        "FPI: antifibróticos — Pirfenidona o Nintedanib (los fármacos que han cambiado el pronóstico de esta enfermedad)",
        "EPID asociada a enfermedad del tejido conectivo: inmunosupresores (micofenolato, ciclofosfamida, azatioprina) + glucocorticoides según dosis y duración por gravedad",
        "EPID progresiva NO-FPI: Nintedanib está aprobado específicamente para el fenotipo progresivo (extensión reciente de indicación más allá de FPI)"
      ]
    },
    "complicaciones": [
      "Insuficiencia respiratoria crónica progresiva",
      "Hipertensión pulmonar secundaria (por destrucción del lecho vascular pulmonar)",
      "Cor pulmonale",
      "Exacerbación aguda de FPI (deterioro súbito y grave, alta mortalidad)",
      "Aumento del riesgo de cáncer de pulmón (especialmente en FPI)"
    ],
    "prevencion": "Evitar exposiciones ocupacionales conocidas (asbesto, polvos inorgánicos), suspender fármacos causales cuando se identifican a tiempo, cese de tabaquismo (relevante para los subtipos asociados a tabaco), vacunación según esquema.",
    "perlasProfundo": "El grado de disnea se correlaciona con la gravedad y el PRONÓSTICO de la enfermedad — no es solo un síntoma molesto, es un marcador pronóstico real que debes registrar sistemáticamente en cada consulta de seguimiento, junto con la espirometría (criterio de progresión: caída de CVF ≥10% ya es significativa).",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con historia ocupacional detallada + AGA + espirometría completa (como el caso real de tu propia clase), donde debes reconocer el patrón RESTRICTIVO y descartar el obstructivo pese a antecedentes que podrían confundir (como el tabaquismo).",
      "ejercicios": [
        {
          "tipo": "Reconocer patrón funcional y sustentar (el más frecuente)",
          "planteamiento": "Espirometría: VEF1/FVC 0.88, FVC 65%, VEF1 60%. ¿Patrón obstructivo o restrictivo? Sustente.",
          "respuestaModelo": "Patrón RESTRICTIVO. La relación VEF1/FVC de 0.88 está POR ENCIMA de 0.7 (normal o incluso alta), lo que descarta obstrucción — en el patrón obstructivo esta relación estaría DISMINUIDA. Lo que sí está reducido es la FVC (65%, por debajo de 80%), lo que indica una reducción proporcional de todos los volúmenes pulmonares, característico de un proceso restrictivo como la EPID."
        },
        {
          "tipo": "Indique y sustente (imagen)",
          "planteamiento": "¿Por qué las bronquiectasias por tracción en TCAR NO deben confundirse con bronquiectasias verdaderas al describir una TC?",
          "respuestaModelo": "Las bronquiectasias por tracción son una consecuencia MECÁNICA de la fibrosis del parénquima circundante que literalmente tira de las paredes bronquiales hacia afuera, deformándolas de forma irregular — no representan una enfermedad primaria de la vía aérea como sí lo son las bronquiectasias verdaderas (causadas por infección/inflamación crónica de la propia pared bronquial). Confundirlas llevaría a un enfoque diagnóstico y terapéutico completamente distinto (buscar causa infecciosa/inflamatoria de vía aérea vs. reconocer que son un signo de fibrosis pulmonar de fondo)."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste los 3 criterios de progresión de EPID según ATS/ERS 2022.",
          "respuestaModelo": "Disminución de CVF ≥10%, aumento de disnea, empeoramiento radiológico en TCAR."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "Grupo heterogéneo unido por el compromiso del intersticio — inflamación y/o fibrosis progresiva",
      "Patrón restrictivo en espirometría (↓CVF, ↓DLCO) — a diferencia del obstructivo de EPOC/asma",
      "TCAR es la piedra angular diagnóstica; NIU (reticulación+panalización+bronquiectasias por tracción) = patrón de FPI"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — hallazgo TCAR y su significado",
      "columnas": [
        "Hallazgo TCAR",
        "Significado"
      ],
      "filas": [
        [
          "Reticulación",
          "Engrosamiento intersticial — puede ser parcialmente reversible según causa"
        ],
        [
          "Bronquiectasias por tracción",
          "La fibrosis ya deforma estructuras vecinas — más avanzado"
        ],
        [
          "Panalización",
          "Destrucción arquitectural DEFINITIVA — el más específico de fibrosis establecida"
        ]
      ],
      "nota": "Los 3 juntos = patrón NIU = prototipo FPI."
    },
    "clinica": "Disnea progresiva + tos seca + crepitantes tipo Velcro en bases + hipocratismo digital en fases avanzadas.",
    "diagnostico": "Espirometría con patrón restrictivo + DLCO disminuida + TCAR (patrón NIU u otro) ± biopsia si no concluyente.",
    "tratamientoResumen": "FPI: antifibróticos (Pirfenidona/Nintedanib). EPID-tejido conectivo: inmunosupresores+glucocorticoides. Progresiva no-FPI: Nintedanib.",
    "diferenciales": [
      {
        "entidad": "EPOC",
        "clave": "Patrón OBSTRUCTIVO (no restrictivo) en espirometría"
      },
      {
        "entidad": "Insuficiencia cardiaca",
        "clave": "Otros signos de sobrecarga de volumen, respuesta a diuréticos"
      }
    ],
    "tablaComparativa": {
      "titulo": "EPID vs EPOC (patrón funcional)",
      "filas": [
        [
          "Espirometría",
          "Restrictivo (↓CVF, ↓DLCO)",
          "Obstructivo (↓FEV1/FVC)"
        ],
        [
          "Auscultación",
          "Crepitantes tipo Velcro",
          "Sibilancias/roncus"
        ],
        [
          "Antecedente típico",
          "Ocupacional/fármacos/colagenopatía",
          "Tabaquismo"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Qué patrón espirométrico define la EPID? → Restrictivo (↓CVF, ↓DLCO) — NO obstructivo",
      "¿Cuál es el hallazgo auscultatorio más característico? → Crepitantes tipo 'Velcro' inspiratorios en bases, presentes en >90% de FPI",
      "¿Qué 3 hallazgos de TCAR definen el patrón NIU (FPI)? → Reticulación + panalización + bronquiectasias por tracción, de distribución basal/subpleural",
      "¿Cuáles son los criterios de progresión ATS/ERS 2022? → Caída de CVF≥10%, aumento de disnea, empeoramiento radiológico en TCAR",
      "¿Cuál es el tratamiento específico de FPI? → Antifibróticos: Pirfenidona o Nintedanib",
      "¿En qué EPID el tabaquismo es PROTECTOR en vez de factor de riesgo? → Sarcoidosis y alveolitis alérgica extrínseca",
      "¿Qué enfermedad es EXCLUSIVA de mujeres? → Linfangioleiomiomatosis"
    ],
    "redFlags": [
      "Caída de CVF≥10% en el seguimiento → fenotipo progresivo, replantear manejo",
      "Hipoxemia en reposo (no solo con ejercicio) → enfermedad avanzada",
      "Deterioro agudo y grave sobre FPI conocida → exacerbación aguda, alta mortalidad"
    ],
    "erroresFrecuentes": [
      "Confundir bronquiectasias por tracción con bronquiectasias verdaderas (infecciosas)",
      "Asumir patrón obstructivo cuando en realidad es restrictivo",
      "No realizar TCAR pensando que la Rx simple es suficiente para caracterizar el patrón",
      "Iniciar corticoides de rutina en FPI (los antifibróticos son el tratamiento específico, no los corticoides)"
    ],
    "asociacionesClinicas": [
      "EPID + artritis + rigidez matutina → sospechar asociada a artritis reumatoide",
      "EPID + exposición ocupacional prolongada (asbesto, polvos) → neumoconiosis, como el caso de tu clase"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "avanzado",
      "vineta": "(Caso real de tu clase) Varón de 63 años, con antecedentes de HTA esencial, miocardiopatía hipertensiva, tabaquismo crónico no actual (80 paquetes-año), obesidad grado II, quien trabajó 18 años en fábrica de filtros de precipitación con amianto, carbón activado y polvo de celulosa hasta hace 20 años. Consulta por disnea de 1 año de evolución, mMRC grado 2 que progresa a grado 3-4 en los últimos 10 días, con tos y expectoración mucopurulenta. No ortopnea, no disnea paroxística nocturna, no fiebre. Medicación: enalapril 40mg, amlodipino 20mg, furosemida 40mg, clonazepam 0.5mg. Examen: FR 20, FC 84, SatO2 ambiental 85% (con FiO2 24%: 90%), PA 140/80. R1-R2 normofonéticos, no ingurgitación yugular, edemas ++/++++ infrapatelares. Murmullo vesicular conservado, rales 'Velcro' en ambas bases. Clubbing. AGA: pH 7.43, pCO2 30.2, pO2 55.7, HCO3 19.9, SatO2 82.6%. Espirometría: VEF1/FVC 0.84, VEF1 80%, FVC 76%, sin respuesta a broncodilatadores.",
      "preguntaMC": {
        "enunciado": "Considerando la historia ocupacional y los hallazgos, ¿cuál es el planteamiento diagnóstico más apropiado?",
        "opciones": [
          {
            "id": "a",
            "texto": "EPOC — por el antecedente de tabaquismo de 80 paquetes-año"
          },
          {
            "id": "b",
            "texto": "EPID de causa ocupacional (neumoconiosis) — por exposición a amianto/polvos + patrón restrictivo + crepitantes Velcro + clubbing"
          },
          {
            "id": "c",
            "texto": "Insuficiencia cardiaca descompensada — por los edemas infrapatelares"
          },
          {
            "id": "d",
            "texto": "Asma bronquial de inicio tardío"
          },
          {
            "id": "e",
            "texto": "Neumonía adquirida en la comunidad"
          }
        ],
        "correcta": "b",
        "explicacion": "La combinación es característica de EPID ocupacional: 18 años de exposición a amianto/carbón activado/polvo de celulosa (neumoconiosis), disnea progresiva, crepitantes tipo 'Velcro' bibasales (hallazgo característico de fibrosis), clubbing (marcador de fibrosis avanzada), y el dato CLAVE de la espirometría: VEF1/FVC de 0.84 (NO obstructivo, ya que está por encima de 0.7) con FVC reducida (76%) — un patrón RESTRICTIVO, no obstructivo. Esto descarta EPOC (A) pese al tabaquismo, ya que el patrón espirométrico es restrictivo, no obstructivo. Los edemas (C) podrían sugerir insuficiencia cardiaca, pero no explican el patrón restrictivo ni los crepitantes Velcro ni el clubbing — probablemente reflejan cor pulmonale secundario a hipoxemia crónica más que una IC primaria como causa del cuadro respiratorio."
      },
      "preguntaEscrita": {
        "enunciado": "Interpreta la gasometría arterial de este paciente (pH 7.43, pCO2 30.2, pO2 55.7, HCO3 19.9) y explica cómo esto es coherente con el diagnóstico de EPID.",
        "respuestaModelo": "pH 7.43 está en el límite alto de lo normal (alcalemia leve). pCO2 30.2 (bajo) indica hiperventilación. HCO3 19.9 (bajo) sugiere una compensación metabólica (renal) ya en curso, consistente con un proceso RESPIRATORIO CRÓNICO con alcalosis respiratoria parcialmente compensada — el paciente hiperventila crónicamente en respuesta a la hipoxemia (pO2 55.7, claramente bajo) causada por el engrosamiento intersticial que dificulta la difusión de oxígeno. Este patrón (hipoxemia + hiperventilación compensatoria crónica) es exactamente lo esperado en una EPID avanzada: el gradiente alveolo-arterial de oxígeno está aumentado por el defecto de difusión, y el cuerpo compensa con hiperventilación (hipocapnia), un mecanismo que solo se agota y da paso a hipercapnia franca en estadios muy avanzados de la enfermedad."
      }
    }
  ]
},
  {
    "id": "insuficiencia-respiratoria-aguda",
    "nombre": "Insuficiencia Respiratoria Aguda y Síndrome de Distrés Respiratorio Agudo (SDRA)",
    "area": "Neumología",
    "semanas": [
      "semana-03"
    ],
    "favorito": false,
    "estudiado": false,
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "neumonia-nac",
        "relacion": "La neumonía grave es una de las causas más frecuentes de insuficiencia respiratoria aguda y puede evolucionar a SDRA"
      },
      {
        "id": "epoc",
        "relacion": "La exacerbación de EPOC es la causa más común de insuficiencia respiratoria hipercápnica (tipo II)"
      }
    ],
    "profundo": {
      "definicion": "La Insuficiencia Respiratoria Aguda (IRA) es la incapacidad del aparato respiratorio para mantener una adecuada oxigenación (PaO2 <60 mmHg) y/o eliminación de CO2 (PaCO2 >50 mmHg) en reposo, en un paciente previamente normocápnico. El Síndrome de Distrés Respiratorio Agudo (SDRA) es una de sus formas de presentación más grave, con alta mortalidad.",
      "epidemiologia": "En las unidades de cuidados intensivos, la IRA es responsable del 20-30% de los ingresos y se asocia a una mortalidad del 30-45% en su forma grave. El SDRA severo tiene mortalidad de 35-45%, aunque ha disminuido gracias a estrategias de protección pulmonar y posición prona. La pandemia por SARS-CoV-2 incrementó notablemente la incidencia de SDRA secundario a neumonía viral.",
      "etiologiaFactoresRiesgo": [
        "Neumonía grave (causa más frecuente)",
        "Exacerbaciones de EPOC",
        "Embolia pulmonar masiva",
        "Edema agudo de pulmón cardiogénico",
        "Trauma torácico",
        "Sepsis (causa extrapulmonar más frecuente de SDRA)"
      ],
      "fisiopatologia": {
        "resumen": "La hipoxemia en la IRA puede deberse a 5 mecanismos: alteración de la relación ventilación/perfusión (V/Q), cortocircuito (shunt), hipoventilación alveolar, disminución del contenido de oxígeno inspirado, o alteración de la difusión. En el SDRA específicamente predomina el shunt intrapulmonar por colapso alveolar y formación de membranas hialinas.",
      explicacionExtendida: "La hipoxemia en la insuficiencia respiratoria puede originarse por 5 mecanismos distintos, y diferenciarlos importa porque cada uno responde distinto al oxígeno suplementario. La alteración de la relación ventilación/perfusión (V/Q) — la causa más común — ocurre cuando hay zonas del pulmón mal ventiladas pero bien perfundidas (o viceversa); este tipo SÍ mejora administrando oxígeno suplementario. El cortocircuito o shunt, en cambio, ocurre cuando hay sangre que atraviesa el pulmón sin pasar por ningún alvéolo ventilado (como en el colapso alveolar masivo del SDRA) — este tipo NO mejora con oxígeno suplementario por más que se aumente la FiO2, porque el problema no es la concentración de oxígeno disponible sino que la sangre simplemente no está en contacto con alvéolos funcionantes.\n\nLa hipoventilación alveolar (típica de la sobredosis de sedantes o enfermedad neuromuscular) y la alteración de la difusión (engrosamiento de la membrana alveolo-capilar, como en la EPID) son los otros dos mecanismos relevantes. En el SDRA específicamente, el mecanismo predominante es el shunt intrapulmonar por colapso alveolar masivo y la formación de membranas hialinas — esto explica clínicamente por qué estos pacientes con frecuencia no logran normalizar su saturación pese a recibir oxígeno a altas concentraciones, y por qué el manejo definitivo casi siempre requiere estrategias que reabran el alvéolo colapsado (PEEP, posición prona) en vez de simplemente aumentar el oxígeno inspirado.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Neumonía grave, sepsis, trauma, aspiración — daño directo o indirecto a la membrana alveolo-capilar"
          },
          {
            "paso": "Respuesta inflamatoria",
            "detalle": "Liberación de citocinas, daño epitelial y aumento de la permeabilidad alveolar (especialmente en SDRA de origen séptico)"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Edema no cardiogénico + colapso alveolar + formación de membranas hialinas, con pérdida de la capacidad de respuesta a oxígeno suplementario"
          },
          {
            "paso": "Cambio fisiológico",
            "detalle": "Shunt intrapulmonar predominante — la sangre pasa por alvéolos colapsados sin oxigenarse, sin importar cuánto oxígeno se administre"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Disnea, taquipnea, uso de músculos accesorios, cianosis, hipoxemia refractaria a oxígeno suplementario"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Disnea + taquipnea + uso de músculos accesorios",
          "mecanismo": "Intento compensatorio de aumentar la ventilación ante el fallo del intercambio gaseoso"
        },
        {
          "signo": "Cianosis",
          "mecanismo": "Hipoxemia significativa con aumento de hemoglobina desoxigenada circulante"
        },
        {
          "signo": "Confusión o alteración del sensorio",
          "mecanismo": "Hipoxemia cerebral y/o hipercapnia con efecto narcótico sobre el sistema nervioso central"
        }
      ],
      "examenFisico": [
        "Taquipnea marcada, uso evidente de músculos accesorios",
        "Crépitos difusos bilaterales en SDRA",
        "Cianosis labial/periférica en casos severos"
      ],
      semiologia: {
            "inspeccion": "Observa el patrón respiratorio: taquipnea, uso de músculos accesorios (tiraje intercostal/supraclavicular), cianosis central o periférica, y el nivel de consciencia (la confusión es un signo de gravedad).",
            "palpacion": "Expansión torácica puede estar disminuida si hay consolidación o colapso asociado; sin hallazgo específico único para IRA en sí, depende de la causa de base.",
            "percusion": "Depende de la causa subyacente: matidez si hay consolidación (neumonía) o derrame asociado, normal si el mecanismo es puramente de shunt/difusión sin ocupación del espacio aéreo.",
            "auscultacion": "En SDRA: crépitos difusos bilaterales. La ausencia de mejoría de la oxigenación pese a aumentar la FiO2 administrada es un dato clínico clave que sugiere shunt intrapulmonar (típico del SDRA) más que un simple problema de difusión."
      },
      "diagnostico": "Gasometría arterial es el estándar diagnóstico: PaO2 <60 mmHg (hipoxemia), PaCO2 >50 mmHg (hipercapnia), pH <7.35 sugiere acidosis respiratoria. Radiografía/TC de tórax para identificar consolidaciones, infiltrados difusos o edema. Criterios de Berlín para SDRA: inicio en los 7 días posteriores a un evento clínico conocido + opacidades bilaterales en imagen + no explicado completamente por edema cardiogénico + hipoxemia según cociente PaO2/FiO2.",
      "algoritmo": [
        {
          "tipo": "paso",
          "texto": "Sospecha de IRA: disnea + taquipnea + hipoxemia clínica"
        },
        {
          "tipo": "paso",
          "texto": "Gasometría arterial: clasificar tipo (hipoxémica/hipercápnica/mixta) + calcular PaO2/FiO2"
        },
        {
          "tipo": "decision",
          "texto": "¿Cumple criterios de Berlín para SDRA?",
          "salidas": [
            {
              "etiqueta": "PaFi 200-300",
              "texto": "SDRA leve — HFNC o VMNI, tratar causa desencadenante",
              "color": "mint"
            },
            {
              "etiqueta": "PaFi 100-200",
              "texto": "SDRA moderado — considerar ventilación mecánica protectora",
              "color": "coral"
            },
            {
              "etiqueta": "PaFi <100 refractario",
              "texto": "SDRA severo — ventilación protectora + prono + considerar ECMO",
              "color": "alert"
            }
          ]
        }
      ],
      "diagnosticoDiferencial": [
        "Edema pulmonar cardiogénico (ecocardiograma ayuda a diferenciar)",
        "Neumonía sin criterios de SDRA",
        "Tromboembolismo pulmonar masivo"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Oxigenoterapia individualizada: cánula nasal de alto flujo (HFNC) mejora oxigenación sin intubación, útil en SDRA leve",
          "Mascarilla reservorio en hipoxemia severa transitoria",
          "En EPOC: oxigenoterapia titulada, objetivo SatO2 88-92% para evitar hipercapnia inducida",
          "Ventilación mecánica protectora (volúmenes tidales bajos) en casos moderados-severos",
          "Posición prona en SDRA moderado-severo",
          "ECMO en SDRA refractario con PaO2/FiO2 <80 pese a tratamiento óptimo"
        ],
        "farmacologico": [
          "Corrección del factor desencadenante (antibióticos si infeccioso, etc.)",
          "Corticosteroides: uso controversial en SDRA, indicación en fases tardías seleccionadas"
        ]
      },
      "complicaciones": [
        "Falla multiorgánica si no se corrige rápidamente",
        "Fibrosis pulmonar residual post-SDRA",
        "Disfunción muscular post-UCI"
      ],
      "prevencion": "Tratamiento oportuno y agresivo de neumonías graves y sepsis, vacunación (influenza, neumococo) para reducir el riesgo de neumonía grave que precipite IRA.",
      "perlasProfundo": "El índice PaO2/FiO2 (PaFi) sigue siendo LA herramienta esencial para clasificar la gravedad del SDRA y guiar decisiones — calcularlo siempre que haya sospecha de compromiso respiratorio grave, no solo confiar en la saturación de oxígeno aislada."
    },
    "repaso": {
      "conceptosClave": [
        "3 tipos: hipoxémica (I), hipercápnica (II), mixta",
        "SDRA = forma grave de IRA, criterios de Berlín",
        "PaFi = PaO2/FiO2 — clasifica gravedad"
      ],
      "clinica": "Disnea + taquipnea + uso de músculos accesorios + cianosis ± confusión.",
      "diagnostico": "Gasometría arterial (estándar) + imagen + criterios de Berlín para SDRA.",
      "tratamientoResumen": "Oxigenoterapia escalonada (bajo flujo → HFNC → VMNI → VM invasiva) + tratar causa + prono/ECMO en SDRA severo.",
      "diferenciales": [
        {
          "entidad": "Edema pulmonar cardiogénico",
          "clave": "Ecocardiograma y contexto clínico (insuficiencia cardiaca) lo diferencian del SDRA"
        }
      ],
      "tablaComparativa": {
        "titulo": "IRA tipo I vs. tipo II",
        "filas": [
          [
            "Mecanismo",
            "Hipoxemia sin hipercapnia",
            "Hipoventilación con retención de CO2"
          ],
          [
            "Causas típicas",
            "Neumonía, SDRA, edema pulmonar",
            "EPOC agudizado, enfermedad neuromuscular"
          ],
          [
            "PaCO2",
            "Normal o bajo",
            "Elevado (>50)"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "PaO2 <60 o PaCO2 >50 en reposo = insuficiencia respiratoria, por definición",
        "Calcula SIEMPRE el PaO2/FiO2 ante sospecha de SDRA — es la base de la clasificación de Berlín",
        "En EPOC, titula oxígeno a SatO2 88-92% — el exceso de oxígeno puede empeorar la hipercapnia",
        "SDRA refractario (PaFi <80 pese a tratamiento óptimo) es indicación de considerar ECMO"
      ],
      "redFlags": [
        "Hipoxemia que no mejora pese a oxígeno suplementario en aumento → sospechar shunt (SDRA), no solo problema V/Q",
        "Confusión + taquipnea + cianosis en paciente con neumonía → insuficiencia respiratoria establecida, actuar rápido"
      ],
      "erroresFrecuentes": [
        "Dar oxígeno sin límite en pacientes EPOC (riesgo de narcosis por CO2)",
        "No calcular el PaO2/FiO2 y subestimar la gravedad real del cuadro",
        "Retrasar el escalamiento del soporte ventilatorio esperando mejoría espontánea en un paciente que se deteriora"
      ],
      "asociacionesClinicas": [
        "Sepsis + infiltrados bilaterales + hipoxemia refractaria → SDRA de origen extrapulmonar",
        "EPOC conocido + somnolencia + FR baja → sospechar narcosis por CO2, no mejoría"
      ]
    },
    "casosClinicos": [
      {
        "nivel": "avanzado",
        "vineta": "Varón de 64 años, tiempo de enfermedad 5 días, acude por disnea progresiva, fiebre y tos con expectoración purulenta. Hoy presenta taquipnea y uso de músculos accesorios. Exfumador (20 paq/año), HTA controlada, vacunado COVID-19 pero no influenza ni neumococo. FC 112, FR 34, T° 38.3°C, SatO2 84% aire ambiente. Estertores crepitantes bilaterales, cianosis labial leve. Rx: opacidades alveolares bilaterales sin cardiomegalia. Gasometría (aire ambiente): pH 7.31, PaCO2 48 mmHg, PaO2 54 mmHg, HCO3 22 mEq/L, FiO2 0.21.",
        "preguntaMC": {
          "enunciado": "Calculando el índice PaO2/FiO2, ¿en qué categoría de gravedad de SDRA (criterios de Berlín) se clasificaría este paciente?",
          "opciones": [
            {
              "id": "a",
              "texto": "PaFi = 54/0.21 ≈ 257 — SDRA leve"
            },
            {
              "id": "b",
              "texto": "PaFi = 54/0.21 ≈ 257 — SDRA moderado"
            },
            {
              "id": "c",
              "texto": "PaFi = 54/0.21 ≈ 257 — SDRA severo"
            },
            {
              "id": "d",
              "texto": "No cumple criterios de SDRA"
            },
            {
              "id": "e",
              "texto": "No se puede calcular sin saber la FiO2 exacta en litros"
            }
          ],
          "correcta": "a",
          "explicacion": "PaFi = PaO2/FiO2 = 54/0.21 ≈ 257, que cae en el rango 200-300 mmHg — SDRA LEVE según Berlín. Además cumple los otros criterios: inicio dentro de los 7 días de un evento conocido (neumonía), opacidades bilaterales en Rx, y no explicado por edema cardiogénico (sin cardiomegalia, sin antecedente de insuficiencia cardiaca)."
        },
        "preguntaEscrita": {
          "enunciado": "¿Este paciente presenta insuficiencia respiratoria aguda? ¿De qué tipo, y qué manejo de oxigenoterapia sería apropiado iniciar?",
          "respuestaModelo": "Sí, presenta insuficiencia respiratoria aguda: PaO2 54 mmHg (<60) confirma el componente hipoxémico. El PaCO2 de 48 está discretamente elevado pero no supera el umbral de 50 para definir hipercapnia franca, por lo que se clasifica predominantemente como IRA hipoxémica (tipo I), en el contexto de una neumonía grave con criterios de SDRA leve. El manejo inicial de oxigenoterapia apropiado sería cánula nasal de alto flujo (HFNC), que mejora la oxigenación sin necesidad de intubación inmediata y es especialmente útil en SDRA leve — reservando la ventilación mecánica invasiva para deterioro progresivo pese a estas medidas."
        }
      }
    ]
  },
  {
    "id": "saos",
    "nombre": "Síndrome de Apnea-Hipopnea Obstructiva del Sueño (SAOS)",
    "area": "Neumología",
    "semanas": [
      "semana-03"
    ],
    "favorito": false,
    "estudiado": false,
    "tipoIlustracion": "obstructivo",
    "relacionadas": [
      {
        "id": "epoc",
        "relacion": "Ambas pueden coexistir en el llamado 'overlap syndrome', con mayor riesgo de hipoxemia nocturna combinada"
      }
    ],
    "profundo": {
      "definicion": "El SAOS se define como episodios recurrentes de obstrucción parcial o completa de la vía aérea superior durante el sueño, lo que provoca hipoxia intermitente, fragmentación del sueño y despertares repetidos.",
      "epidemiologia": "La prevalencia global de SAHOS leve a severo se estima en 936 millones de adultos (30-69 años), con alrededor de 425 millones con SAOS moderado a severo. Varía entre 9% y 38%, más alta en hombres (13-33%) que en mujeres (6-19%). En mayores de 65 años puede alcanzar 84% (90% en hombres, 78% en mujeres). Está marcadamente subdiagnosticado.",
      "etiologiaFactoresRiesgo": [
        "Anatómicos: cuello grueso, acúmulo adiposo perifaríngeo, micrognatia, retrognatia, hipertrofia amigdalar",
        "Edad avanzada (>50 años) y sexo masculino (relación 4.9:1, que se aproxima a la paridad tras la menopausia)",
        "Obesidad — el factor modificable más importante: un aumento del 10% del peso multiplica x6 el riesgo de SAHOS moderado-grave",
        "Tabaquismo, consumo de alcohol, sedantes/hipnóticos, posición supina al dormir, congestión nasal crónica",
        "Comorbilidades: hipertensión resistente, diabetes tipo 2, síndrome metabólico, hipotiroidismo, síndrome de Down"
      ],
      "fisiopatologia": {
        "resumen": "Durante el sueño, la relajación normal de la musculatura faríngea se combina con factores anatómicos predisponentes (cuello grueso, retrognatia, hipertrofia amigdalar) para producir colapso parcial o completo de la vía aérea superior, generando episodios repetidos de apnea (cese completo del flujo) o hipopnea (reducción parcial), cada uno seguido de un microdespertar que restaura el tono muscular momentáneamente.",
        "explicacionExtendida": "Este ciclo de colapso-microdespertar se repite decenas a cientos de veces por noche, generando dos consecuencias fisiopatológicas centrales. La primera es la hipoxia intermitente: cada episodio de apnea/hipopnea interrumpe la oxigenación, y estos ciclos repetidos de desaturación-reoxigenación generan estrés oxidativo, inflamación sistémica de bajo grado y disfunción endotelial — mecanismos que explican por qué el SAOS se asocia de forma tan consistente a hipertensión arterial, arritmias, y mayor riesgo cardiovascular general, incluso en pacientes que no perciben somnolencia diurna significativa.\n\nLa segunda consecuencia es la fragmentación del sueño: cada microdespertar, aunque dure solo segundos y el paciente no lo recuerde, interrumpe la arquitectura normal del sueño, impidiendo alcanzar o mantener las fases de sueño profundo y REM que son necesarias para la restauración cognitiva y física. Esto explica la somnolencia diurna excesiva, el deterioro cognitivo (atención, memoria, funciones ejecutivas) y el mayor riesgo de accidentes que caracterizan al SAOS no tratado."
      ,cascada: [
              {
                      "paso": "Factor predisponente",
                      "detalle": "Factores anatómicos (cuello grueso, retrognatia, hipertrofia amigdalar) combinados con relajación muscular normal del sueño"
              },
              {
                      "paso": "Colapso de la vía aérea",
                      "detalle": "La musculatura faríngea relajada, junto con la predisposición anatómica, permite el colapso parcial o completo de la vía aérea superior"
              },
              {
                      "paso": "Apnea/hipopnea",
                      "detalle": "Cese o reducción marcada del flujo aéreo pese al esfuerzo respiratorio continuo"
              },
              {
                      "paso": "Hipoxia intermitente + microdespertar",
                      "detalle": "Desaturación de oxígeno que activa un microdespertar (arousal) que restaura brevemente el tono muscular y reabre la vía aérea"
              },
              {
                      "paso": "Manifestación clínica",
                      "detalle": "El ciclo se repite cientos de veces por noche: ronquidos, fragmentación del sueño, somnolencia diurna, y a largo plazo, riesgo cardiovascular por hipoxia intermitente repetida"
              }
      ]
      },
      "clinica": [
        {
          "signo": "Ronquidos fuertes y persistentes + episodios de apnea/asfixia reportados por la pareja",
          "mecanismo": "Colapso parcial (ronquido) o completo (apnea) de la vía aérea superior durante el sueño"
        },
        {
          "signo": "Somnolencia excesiva diurna + deterioro cognitivo",
          "mecanismo": "Fragmentación crónica del sueño por microdespertares repetidos que impiden alcanzar sueño reparador"
        },
        {
          "signo": "Hipertensión arterial resistente al tratamiento",
          "mecanismo": "Hipoxia intermitente que genera estrés oxidativo, inflamación sistémica y disfunción endotelial de forma sostenida"
        }
      ],
      "examenFisico": [
        "Cuello grueso, circunferencia cervical aumentada",
        "Retrognatia/micrognatia, hipertrofia amigdalar visible",
        "Sobrepeso/obesidad con distribución central de grasa"
      ],
      semiologia: {
            "inspeccion": "Evalúa la circunferencia del cuello (>40cm en hombres es un dato de riesgo), presencia de retrognatia/micrognatia, y el hábito corporal general (obesidad central).",
            "palpacion": "No hay hallazgo palpatorio específico de SAOS — la evaluación es fundamentalmente anatómica visual y por cuestionarios/estudios de sueño.",
            "percusion": "No aporta información relevante para el diagnóstico de SAOS.",
            "auscultacion": "No hay hallazgo auscultatorio pulmonar específico en vigilia — el hallazgo característico (ronquido, pausas) solo se documenta durante el sueño, típicamente reportado por la pareja o mediante estudio de sueño formal."
      },
      "diagnostico": "Cuestionarios de cribado: escala de Epworth, cuestionario de Berlín, y especialmente STOP-Bang (0-2 puntos = bajo riesgo, 3-4 = riesgo intermedio, 5-8 = alto riesgo de SAHOS moderado/severo) — estos NO son diagnósticos definitivos. Estándar de oro: polisomnografía (PSG tipo I), que mide el Índice de Apnea-Hipopnea (IAH). Criterio diagnóstico: IAH ≥5 eventos/hora con síntomas diurnos, o IAH/RDI ≥15 sin síntomas. Alternativa: pruebas domiciliarias (HSAT)/poligrafía, sensibilidad >80% en casos sin comorbilidades complejas.",
      algoritmo: [
            {
                  "tipo": "paso",
                  "texto": "Ronquidos + pausas respiratorias presenciadas + somnolencia diurna — aplicar cuestionario STOP-Bang (cribado, no diagnóstico)"
            },
            {
                  "tipo": "decision",
                  "texto": "¿Cuál es el puntaje STOP-Bang y qué corresponde hacer?",
                  "salidas": [
                        {
                              "etiqueta": "0-2 (bajo riesgo)",
                              "texto": "Riesgo bajo — reevaluar si aparecen nuevos síntomas o factores de riesgo",
                              "color": "mint"
                        },
                        {
                              "etiqueta": "3-4 (riesgo intermedio)",
                              "texto": "Considerar estudio del sueño según sospecha clínica adicional",
                              "color": "coral"
                        },
                        {
                              "etiqueta": "5-8 (alto riesgo)",
                              "texto": "Derivar a polisomnografía (estándar de oro) para confirmar diagnóstico y medir IAH",
                              "color": "alert"
                        }
                  ]
            }
      ],
      "diagnosticoDiferencial": [
        "Insomnio primario",
        "Narcolepsia",
        "Síndrome de piernas inquietas",
        "Hipoventilación por obesidad"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "CPAP/APAP: tratamiento de elección en SAHOS moderado-severo — adherencia óptima ≥6h/noche",
          "Dispositivos de avance mandibular (MAD): para SAOS leve-moderado o intolerancia a CPAP, reduce IAH >50% en ~1/3 de los casos",
          "Modificación del estilo de vida: pérdida de peso ≥10% puede reducir el IAH en 26-56%; evitar alcohol/sedantes, terapia posicional",
          "Cirugía de vías aéreas superiores (UPPP: éxito 35-50%) o avance maxilomandibular (reduce IAH ~85%) en casos seleccionados",
          "Estimulación del nervio hipogloso en SAOS moderado-severo que no tolera CPAP (éxito clínico 74% a 3 años según STAR trial)"
        ],
        "farmacologico": [
          "Tirzepatida: aprobada por la FDA (2024-25) para SAHOS moderado-severo con obesidad, redujo el IAH hasta 63% en ensayos fase III"
        ]
      },
      "complicaciones": [
        "Hipertensión arterial, arritmias (especialmente fibrilación auricular)",
        "Infarto de miocardio, accidente cerebrovascular",
        "Resistencia a la insulina, diabetes tipo 2",
        "Accidentes de tránsito/laborales por somnolencia"
      ],
      "prevencion": "Control del peso corporal (factor modificable más importante), evitar alcohol y sedantes antes de dormir, tratamiento de congestión nasal crónica, y evitar la posición supina al dormir en pacientes con SAOS posicional.",
      "perlasProfundo": "Niveles moderados a severos (IAH ≥15) se asocian a mayor riesgo cardiovascular y de ACV incluso en AUSENCIA de somnolencia clínica percibida — no descartes SAOS significativo solo porque el paciente diga que duerme bien y no se siente cansado."
    },
    "repaso": {
      "conceptosClave": [
        "IAH = eventos de apnea+hipopnea por hora de sueño; diagnóstico con IAH≥5 + síntomas, o IAH≥15 sin síntomas",
        "Obesidad es el factor de riesgo modificable más importante",
        "CPAP es el tratamiento de elección en SAHOS moderado-severo"
      ],
      "clinica": "Ronquidos + apneas presenciadas + somnolencia diurna excesiva ± hipertensión resistente.",
      "diagnostico": "STOP-Bang para cribado (no diagnóstico); polisomnografía es el estándar de oro (IAH).",
      "tratamientoResumen": "CPAP (primera línea moderado-severo), MAD (leve-moderado), pérdida de peso, cirugía en casos seleccionados.",
      "diferenciales": [
        {
          "entidad": "Insomnio primario",
          "clave": "No hay eventos obstructivos objetivables en polisomnografía"
        }
      ],
      "tablaComparativa": {
            "titulo": "Cribado STOP-Bang: interpretación",
            "filas": [
                  [
                        "0-2 puntos",
                        "Bajo riesgo de SAHOS",
                        "Reevaluar si cambian factores de riesgo"
                  ],
                  [
                        "3-4 puntos",
                        "Riesgo intermedio",
                        "Considerar estudio según contexto clínico"
                  ],
                  [
                        "5-8 puntos",
                        "Alto riesgo de SAHOS moderado-severo",
                        "Derivar a polisomnografía"
                  ]
            ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "Polisomnografía (PSG) es el estándar de oro — STOP-Bang y Epworth son solo cribado, no diagnóstico",
        "IAH ≥5 con síntomas, o IAH/RDI ≥15 sin síntomas = criterio diagnóstico",
        "CPAP es primera línea en SAHOS moderado-severo; adherencia ≥6h/noche da mejores resultados",
        "El riesgo cardiovascular aumenta con IAH≥15 aunque el paciente no tenga somnolencia percibida"
      ],
      "redFlags": [
        "Hipertensión resistente a múltiples fármacos + ronquidos + pareja reporta pausas respiratorias → estudiar SAOS activamente",
        "Somnolencia diurna severa en conductor profesional → riesgo de accidente, prioridad de estudio y tratamiento"
      ],
      "erroresFrecuentes": [
        "Diagnosticar SAOS solo con STOP-Bang sin confirmación por polisomnografía",
        "Asumir que sin somnolencia percibida no hay riesgo cardiovascular relevante",
        "No reforzar la importancia de la adherencia real al CPAP (no basta con prescribirlo)"
      ],
      "asociacionesClinicas": [
        "Obesidad + hipertensión resistente + fibrilación auricular → investigar SAOS activamente como factor contribuyente",
        "Síndrome de Down o Prader-Willi → mayor prevalencia de SAOS, tamizar activamente"
      ]
    }
  ,
    "casosClinicos": [
        {
            "nivel": "basico",
            "vineta": "Varón de 52 años, obesidad grado II (IMC 34), circunferencia de cuello 44cm, hipertensión arterial resistente a 3 fármacos. Su esposa refiere ronquidos fuertes todas las noches y episodios donde 'deja de respirar' seguidos de un resoplido. El paciente refiere somnolencia diurna marcada y se ha quedado dormido manejando en 2 ocasiones.",
            "preguntaMC": {
                "enunciado": "¿Cuál es la conducta más apropiada como siguiente paso diagnóstico?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "Iniciar CPAP empíricamente sin más estudios"
                    },
                    {
                        "id": "b",
                        "texto": "Aplicar cuestionario STOP-Bang y, dado el alto riesgo clínico evidente, derivar a polisomnografía para confirmar diagnóstico y medir el IAH"
                    },
                    {
                        "id": "c",
                        "texto": "Solicitar únicamente radiografía de tórax"
                    },
                    {
                        "id": "d",
                        "texto": "No requiere estudio, son solo ronquidos"
                    },
                    {
                        "id": "e",
                        "texto": "Indicar pérdida de peso y reevaluar en 1 año sin más estudios"
                    }
                ],
                "correcta": "b",
                "explicacion": "Este paciente tiene múltiples factores de alto riesgo para SAOS (obesidad, cuello grueso >40cm, hipertensión resistente, apneas presenciadas, somnolencia con riesgo de accidente). El STOP-Bang confirmaría el alto riesgo clínico, pero el diagnóstico DEFINITIVO requiere polisomnografía (estándar de oro) — no se debe iniciar CPAP sin confirmar el diagnóstico y medir la severidad (IAH) primero."
            },
            "preguntaEscrita": {
                "enunciado": "¿Cómo explicarías la relación entre la hipertensión resistente de este paciente y su probable SAOS?",
                "respuestaModelo": "Los episodios repetidos de apnea generan hipoxia intermitente durante toda la noche, cientos de veces. Cada ciclo de desaturación-reoxigenación genera estrés oxidativo, inflamación sistémica de bajo grado y disfunción endotelial, mecanismos que activan el sistema nervioso simpático de forma sostenida. Esta activación simpática crónica es una de las razones por las que el SAOS no tratado se asocia tan fuertemente con hipertensión de difícil control — muchas veces, tratar el SAOS con CPAP mejora significativamente el control de la presión arterial en estos pacientes, incluso cuando los fármacos antihipertensivos solos no habían sido suficientes."
            }
        }
    ]
  }];

/* ============================================================
   TEMAS — contenido que NO es una enfermedad: anatomía,
   fisiología, métodos diagnósticos. Se estudian antes de las
   enfermedades del sistema porque son la base para entenderlas.
   Estructura más simple que ENFERMEDADES (sin los 3 modos),
   pensada para "cómo funciona normalmente" + "por qué importa
   para lo que viene después".
   ============================================================ */
const TEMAS = [
  {
    id: "anatofisio-respiratorio",
    nombre: "Anatomía y fisiología del aparato respiratorio",
    area: "Neumología",
    tipo: "anatomia-fisiologia",
    semanas: ["semana-01"],
    favorito: false,
    estudiado: false,
    contenido: {
      resumen: "La función del aparato respiratorio es el intercambio gaseoso: llevar oxígeno de la atmósfera a la sangre y eliminar CO2. Para lograrlo, el sistema combina una vía de conducción (que no participa en el intercambio) con una zona respiratoria (donde sí ocurre el intercambio), todo impulsado por una bomba mecánica (caja torácica + músculos respiratorios) y regulado por el sistema nervioso.",
      estructuras: [
        { nombre: "Vía aérea de conducción", detalle: "Nariz → faringe → laringe → tráquea → bronquios → bronquiolos terminales. Ventila pero NO participa en el intercambio gaseoso (espacio muerto anatómico, ~150 mL)." },
        { nombre: "Zona respiratoria", detalle: "Bronquiolos respiratorios → conductos alveolares → alvéolos (~300 millones, superficie total ~70 m²). Aquí ocurre el intercambio de O2/CO2 por difusión simple a través de la membrana alveolo-capilar." },
        { nombre: "Caja torácica y músculos", detalle: "Diafragma (principal músculo inspiratorio) + intercostales. La espiración en reposo es pasiva (retracción elástica del pulmón); en esfuerzo se vuelve activa (músculos abdominales, intercostales internos)." },
        { nombre: "Circulación pulmonar", detalle: "Sistema de baja presión y baja resistencia — recibe todo el gasto cardíaco derecho. Su función es exponer toda la sangre venosa a la superficie alveolar." }
      ],
      fisiologiaNormal: "El ciclo respiratorio depende de la diferencia de presión entre el alvéolo y la atmósfera. Al contraerse el diafragma, aumenta el volumen torácico, la presión intrapleural se vuelve más negativa, el pulmón se expande y entra aire (inspiración). La espiración en reposo es pasiva: el pulmón, por su elasticidad natural, tiende a colapsar y expulsa el aire solo. El intercambio gaseoso depende de tres factores que se estudian juntos porque cualquier enfermedad pulmonar altera uno o varios: ventilación (V, aire que llega al alvéolo), perfusión (Q, sangre que llega al capilar) y difusión (paso del gas a través de la membrana). La relación V/Q ideal es cercana a 1; casi todas las enfermedades pulmonares alteran esta relación de alguna forma.",
      correlacionClinica: "Entender esta anatomía es la base para comprender por qué cada enfermedad respiratoria se manifiesta como lo hace: el EPOC y el asma alteran principalmente la vía de conducción (obstrucción al flujo de aire); la neumonía y las enfermedades intersticiales alteran la zona respiratoria (afectan el intercambio gaseoso, no tanto el flujo); el neumotórax y las enfermedades neuromusculares afectan la bomba mecánica. Cuando entiendas dónde actúa cada enfermedad — vía aérea, zona respiratoria o bomba — vas a poder predecir su clínica en vez de memorizarla.",
      puntosClave: [
        "La vía de conducción no intercambia gases — solo transporta aire (espacio muerto)",
        "El intercambio gaseoso real ocurre solo en la zona respiratoria (alvéolos)",
        "La espiración en reposo es pasiva; en esfuerzo o en obstrucción se vuelve activa",
        "Casi toda enfermedad respiratoria puede entenderse como: ¿afecta la vía aérea, la zona respiratoria, o la bomba mecánica?",
        "La relación ventilación/perfusión (V/Q) es el concepto que conecta anatomía con clínica — su alteración explica la mayoría de los síntomas respiratorios"
      ]
    }
  },
  {
    "id": "examenes-diagnostico-neumo",
    "nombre": "Exámenes de ayuda diagnóstica en Neumología",
    "area": "Neumología",
    "tipo": "metodo-diagnostico",
    "semanas": [
      "semana-01"
    ],
    "favorito": false,
    "estudiado": false,
    "contenido": {
      "resumen": "Antes de estudiar cada enfermedad respiratoria, necesitas conocer las herramientas que se usan para diagnosticarlas. Cinco estudios cubren la mayoría de los escenarios clínicos en Neumología: radiografía de tórax (primera línea), tomografía (mayor detalle), espirometría (función pulmonar), toracocentesis (líquido pleural) y fibrobroncoscopía (visualización directa de la vía aérea).",
      "estructuras": [
        {
          "nombre": "Radiografía de tórax",
          "detalle": "Proyecciones básicas: PA (posteroanterior, de pie, inspiración máxima), lateral, y AP (cuando el paciente no puede pararse). Lectura sistemática en 7 pasos: partes blandas → huesos → parénquima → pleura → mediastino → hilios/vasos → corazón/aorta. Las 4 densidades radiológicas son aire, agua, grasa y calcio.",
          "imagenes": [
            { "src": "assets/examenes-dx/rx-torax-pa-normal.jpg", "caption": "Rx de tórax PA normal — referencia para comparar" },
            { "src": "assets/examenes-dx/rx-torax-lateral.jpg", "caption": "Proyección lateral — complementa la vista PA" },
            { "src": "assets/examenes-dx/rx-torax-hallazgos-anotados.jpg", "caption": "Ejemplo con hallazgos anotados (flechas) — así se marcan los hallazgos en la práctica" }
          ]
        },
        {
          "nombre": "Tomografía de tórax (TC)",
          "detalle": "Mayor resolución que la radiografía. Los patrones básicos que debes reconocer son: lineal, micronodular, en vidrio esmerilado (opacidad) y quístico — cada uno orienta a familias distintas de enfermedades intersticiales/infecciosas.",
          "imagenes": [
            { "src": "assets/examenes-dx/tc-torax-cortes-axiales.jpg", "caption": "TC de tórax — 4 cortes axiales a distintos niveles" }
          ]
        },
        {
          "nombre": "Espirometría",
          "detalle": "Mide FVC (capacidad vital forzada), FEV1 (volumen espirado en el primer segundo) y su cociente FEV1/FVC. Es la prueba clave para diferenciar patrón obstructivo (FEV1/FVC bajo — EPOC, asma) de restrictivo (FVC bajo con cociente normal — enfermedades intersticiales).",
          "imagenes": [
            { "src": "assets/examenes-dx/espirometria-procedimiento.jpg", "caption": "Cómo se realiza — el paciente sopla con fuerza en la boquilla" },
            { "src": "assets/examenes-dx/asa-flujo-volumen.jpg", "caption": "Asa de flujo-volumen — distintos patrones (A-E) según el tipo de alteración" }
          ]
        },
        {
          "nombre": "Toracocentesis",
          "detalle": "Punción del espacio pleural (6º-8º espacio intercostal, guiada por ecografía) para extraer líquido o aire con fines diagnósticos o terapéuticos. Indicada en derrame pleural inexplicado, sospecha de infección/malignidad, o alivio de disnea.",
          "imagenes": [
            { "src": "assets/examenes-dx/toracocentesis-tecnica.jpg", "caption": "Técnica: paciente sentado, inclinado hacia adelante — el líquido se drena por gravedad" },
            { "src": "assets/examenes-dx/toracocentesis-guiada-ecografia.jpg", "caption": "Guiada por ecografía — reduce el riesgo de neumotórax iatrogénico" }
          ]
        },
        {
          "nombre": "Fibrobroncoscopía",
          "detalle": "Visualización endoscópica directa del árbol bronquial hasta nivel subsegmentario, bajo anestesia local y sedación. Permite biopsia de lesiones sospechosas, estudio de un pulmón/lóbulo colapsado, y muestreo microbiológico en infecciones no resueltas.",
          "imagenes": [
            { "src": "assets/examenes-dx/arbol-bronquial-3d.jpg", "caption": "Árbol traqueobronquial — la ruta que sigue el broncoscopio" }
          ]
        }
      ],
      "fisiologiaNormal": "Estos estudios no evalúan 'lo normal' en sí, sino que sirven para detectar desviaciones de la anatomía y función normales. Por eso su interpretación siempre depende de conocer primero cómo se ve/funciona un pulmón sano: en la Rx, un parénquima con densidad aire uniforme sin opacidades ni pérdida de volumen; en la espirometría, un FEV1/FVC normal (>70% aproximadamente) con volúmenes dentro de lo predicho para edad/talla/sexo.",
      "correlacionClinica": "Cada síntoma respiratorio 'apunta' a un estudio distinto: disnea aguda o hemoptisis → Rx de tórax urgente; sospecha de EPOC/asma → espirometría con prueba post-broncodilatador (respuesta significativa = aumento ≥10% del FEV1 o FVC según ERS/ATS); derrame pleural → toracocentesis; lesión endobronquial o infección no resuelta → fibrobroncoscopía. Vas a usar esta lógica de selección de estudio en cada enfermedad que veas de aquí en adelante — por ejemplo, el diagnóstico de EPOC exige espirometría con FEV1/FVC <70% sin reversibilidad significativa, dato que ya vas a reconocer.",
      "puntosClave": [
        "La Rx de tórax siempre se interpreta junto con la historia clínica, nunca aislada",
        "Espirometría: FEV1/FVC bajo = obstructivo; FVC bajo con cociente normal = restrictivo",
        "Reversibilidad post-broncodilatador ≥10% en FEV1 o FVC distingue asma de EPOC",
        "La toracocentesis tiene complicación más frecuente el neumotórax (12-30% de los procedimientos)",
        "La TC de alta resolución es el estándar de oro para bronquiectasias (signo del anillo de sello — diámetro bronquial > diámetro del vaso adyacente)"
      ]
    }
  }
,
  {
    "id": "analisis-gases-arteriales",
    "nombre": "Análisis de Gases Arteriales: bases fisiopatológicas e interpretación clínica",
    "area": "Neumología",
    "tipo": "metodo-diagnostico",
    "semanas": [
      "semana-02"
    ],
    "favorito": false,
    "estudiado": false,
    "contenido": {
      "resumen": "El análisis de gases arteriales (AGA) es la herramienta que permite cuantificar cómo está funcionando el intercambio gaseoso y el equilibrio ácido-base del paciente en tiempo real. Mide cuatro parámetros clave: PaO2 (oxigenación), PaCO2 (ventilación), pH (equilibrio ácido-base) y HCO3- (componente metabólico/renal). Interpretarlo correctamente, paso a paso, es una habilidad que vas a usar constantemente en la práctica clínica — desde una crisis asmática hasta un paciente séptico.",
      "estructuras": [
        {
          "nombre": "PaO2 (presión arterial de oxígeno)",
          "detalle": "Refleja la oxigenación. Normal: 80-100 mmHg respirando aire ambiental. Se relaciona con el gradiente alveolo-arterial (A-a) y la relación PaFi (PaO2/FiO2) para evaluar la gravedad del compromiso respiratorio."
        },
        {
          "nombre": "PaCO2 (presión arterial de CO2)",
          "detalle": "Refleja la ventilación alveolar — es el componente RESPIRATORIO del equilibrio ácido-base. Normal: 35-45 mmHg. Sube en hipoventilación (retención de CO2), baja en hiperventilación."
        },
        {
          "nombre": "pH",
          "detalle": "Refleja el equilibrio ácido-base neto. Normal: 7.35-7.45. <7.35 = acidemia, >7.45 = alcalemia."
        },
        {
          "nombre": "HCO3- (bicarbonato)",
          "detalle": "Es el componente METABÓLICO/RENAL del equilibrio ácido-base. Normal: 22-26 mEq/L. Los riñones lo ajustan de forma más lenta (días) que los pulmones ajustan el CO2 (minutos-horas) — por eso distingue trastornos agudos de crónicos."
        }
      ],
      "fisiologiaNormal": "El pH sanguíneo se mantiene estable gracias al equilibrio entre dos sistemas que trabajan en direcciones opuestas cuando uno falla: el sistema respiratorio (que ajusta el CO2 en minutos, exhalando más o menos según la ventilación) y el sistema renal (que ajusta el bicarbonato en horas a días, reteniendo o excretando según necesite). Cuando uno de los dos sistemas falla primero (trastorno primario), el otro intenta compensar en la dirección que normaliza el pH — nunca lo sobrecorrige por completo. Por eso, calcular si la compensación es 'la esperada' matemáticamente es la clave para saber si hay un segundo trastorno agregado (mixto) o no.",
      "correlacionClinica": "La guía práctica de interpretación sigue siempre los mismos 5-6 pasos: 1) ¿Cómo está el pH? (acidemia/alcalemia) 2) ¿Cómo está el PaCO2? (¿explica el pH? = trastorno respiratorio primario) 3) ¿Cómo está el HCO3? (¿explica el pH? = trastorno metabólico primario) 4) Calcular la compensación esperada con la fórmula correspondiente y comparar con el HCO3/CO2 real — si no coincide, hay un trastorno mixto agregado. 5) Calcular la PaFi (PaO2/FiO2) para cuantificar la gravedad de la hipoxemia. 6) Integrar todo con la clínica del paciente para llegar al diagnóstico fisiopatológico completo (ej. 'acidosis respiratoria aguda sobre crónica en paciente con EPOC reagudizado').",
      "puntosClave": [
        "PaCO2 = componente respiratorio; HCO3- = componente metabólico/renal",
        "Acidosis respiratoria: HCO3 esperado = 24 + [(PaCO2-40)/10] — si es agudo, sube poco; si es crónico, sube más (compensación renal ya establecida)",
        "Alcalosis respiratoria: HCO3 esperado = 24 − [(40−PaCO2)/10] × 2 (agudo) o ×4-5 (crónico)",
        "Acidosis metabólica: PaCO2 esperado = (1.5 × HCO3) + 8 ± 2 (fórmula de Winter)",
        "Alcalosis metabólica: PaCO2 esperado = 0.7 × (HCO3−24) + 40 ± 5",
        "PaFi = PaO2 / FiO2 — valores <300 sugieren lesión pulmonar aguda, <200 sugiere SDRA"
      ]
    },
    "casosClinicos": []
  }];

/* ============================================================
   BANCOS DE EXAMEN — preguntas y casos estilo examen real de la
   universidad (basados en ejemplos de parciales/modulares/
   integrados pasados), distintos de los casos por enfermedad,
   pensados para repasar antes de una evaluación específica.
   ============================================================ */
const EXAM_BANCOS = {
  "neumologia": {
    "id": "banco-examen-neumologia",
    "nombre": "Banco de examen — Neumología",
    "casos": [
      {
        "nivel": "basico",
        "vineta": "(Estilo examen real) Pregunta directa, sin viñeta clínica extensa — así aparecen varias preguntas de opción múltiple en tus parciales.",
        "preguntaMC": {
          "enunciado": "¿Cuál de los siguientes NO es considerado un predictor significativo para el diagnóstico de Neumonía Adquirida en la Comunidad?",
          "opciones": [
            {
              "id": "a",
              "texto": "Saturación de oxígeno menor a 95%"
            },
            {
              "id": "b",
              "texto": "Frecuencia cardiaca mayor a 100 latidos por minuto"
            },
            {
              "id": "c",
              "texto": "Dolor torácico"
            },
            {
              "id": "d",
              "texto": "Crepitantes en la auscultación"
            },
            {
              "id": "e",
              "texto": "Temperatura mayor a 37.8°C"
            }
          ],
          "correcta": "c",
          "explicacion": "El dolor torácico es inespecífico (aparece en muchas patologías pleuropulmonares y cardiacas). Los predictores clásicos de NAC son: SatO2 baja, taquicardia, fiebre, y hallazgos auscultatorios como crepitantes — el dolor torácico por sí solo no es un predictor discriminativo específico de NAC."
        },
        "preguntaEscrita": {
          "enunciado": "Defina Infección Tuberculosa Latente (ITL), indique los grupos de alto riesgo en los que está indicado el tratamiento preventivo, e indique 1 opción de tratamiento preventivo.",
          "respuestaModelo": "Definición: presencia persistente de bacilos en el organismo sin signos clínicos ni anomalías radiológicas, detectada únicamente mediante pruebas inmunológicas (PPD/tuberculina o IGRA). Grupos de alto riesgo con indicación de tratamiento preventivo: contactos de pacientes con TB activa, personas con VIH, pacientes que inician terapia anti-TNF, pacientes en diálisis o pre-trasplante. Opciones de tratamiento preventivo: isoniazida 6-9 meses, o rifapentina+isoniazida 3 meses, o rifampicina sola 4 meses."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "Paciente varón de 68 años con EPOC diagnosticado hace 15 años, exfumador de 35 paquetes-año, acude a Emergencia por aumento progresivo de disnea en los últimos 3 días, uso de músculos accesorios, tos productiva con esputo amarillento y sensación febril. Al examen físico: FR 28/min, SatO2 91% ambiental, estertores subcrepitantes bilaterales y sibilancias, paciente estuporoso, responde lentamente a estímulos verbales. Radiografía de tórax: acentuación bronquial. Gasometría arterial sin oxígeno suplementario: pH 7.26, pCO2 63 mmHg, pO2 48 mmHg, HCO3 22 mEq/L.",
        "preguntaMC": {
          "enunciado": "¿Qué tipo de alteración ácido-base presenta este paciente?",
          "opciones": [
            {
              "id": "a",
              "texto": "Acidosis metabólica compensada"
            },
            {
              "id": "b",
              "texto": "Acidosis respiratoria aguda no compensada"
            },
            {
              "id": "c",
              "texto": "Alcalosis respiratoria"
            },
            {
              "id": "d",
              "texto": "Alcalosis metabólica"
            },
            {
              "id": "e",
              "texto": "Gasometría normal"
            }
          ],
          "correcta": "b",
          "explicacion": "pH bajo (7.26) + pCO2 elevado (63) confirma acidosis respiratoria. El HCO3 está en rango normal (22), lo que indica que el riñón AÚN no ha compensado — es decir, es AGUDA y NO compensada (a diferencia de un retenedor crónico, donde el HCO3 ya estaría elevado por compensación renal previa)."
        },
        "preguntaEscrita": {
          "enunciado": "¿Corresponde a un trastorno primario de origen respiratorio, metabólico o mixto? De acuerdo con los hallazgos clínicos, radiológicos y gasométricos, indique y sustente su diagnóstico respiratorio principal.",
          "respuestaModelo": "Trastorno primario de origen respiratorio (acidosis respiratoria aguda). Diagnóstico respiratorio principal: EPOC exacerbado (reagudización de EPOC) — sustentado por el antecedente de EPOC conocido, el empeoramiento agudo de disnea con cambio en las características del esputo (criterios de Anthonisen), los hallazgos auscultatorios, y la insuficiencia respiratoria con hipercapnia aguda que refleja fatiga de la musculatura respiratoria en el contexto de la exacerbación."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "Paciente de 69 años, con antecedente de enfermedad pulmonar intersticial severa en oxígeno domiciliario permanente, acude por diagnóstico presuntivo de neumonía. Se coloca máscara simple a FiO2 60%, con elevación de saturación a 99%. Luego de 4 horas presenta trastorno del sensorio. Gasometría: pH 7.33, PaO2 71 mmHg, PaCO2 60 mmHg, HCO3 24 mEq/L, FiO2 60%.",
        "preguntaMC": {
          "enunciado": "Calculando la relación PaO2/FiO2, ¿qué tipo de insuficiencia respiratoria presenta este paciente?",
          "opciones": [
            {
              "id": "a",
              "texto": "Tipo I únicamente (PaFi <300, hipoxémica pura)"
            },
            {
              "id": "b",
              "texto": "Tipo II únicamente (hipercápnica pura)"
            },
            {
              "id": "c",
              "texto": "Mixta: Tipo I (PaFi = 71/0.6 = 118, menor de 300) + Tipo II (PaCO2 >45)"
            },
            {
              "id": "d",
              "texto": "No tiene insuficiencia respiratoria"
            },
            {
              "id": "e",
              "texto": "No se puede calcular sin saber la FiO2"
            }
          ],
          "correcta": "c",
          "explicacion": "PaFi = PaO2/FiO2 = 71/0.6 ≈ 118, muy por debajo de 300, confirmando compromiso de oxigenación (tipo I). Además PaCO2 de 60 (>45) confirma retención de CO2 (tipo II). Al estar presentes ambos componentes simultáneamente, es insuficiencia respiratoria MIXTA — un patrón que se repite en varios de tus exámenes reales y que se presta a confusión si solo se mira un valor aislado."
        },
        "preguntaEscrita": {
          "enunciado": "¿Cuál es el trastorno ácido-base primario y es agudo o crónico? Explique cómo llegó a esa conclusión.",
          "respuestaModelo": "Trastorno primario: Acidosis respiratoria (pH 7.33 disminuido = acidemia; pCO2 60 elevado). Para diferenciar agudo de crónico se calcula el HCO3 esperado en cada escenario: Agudo, HCO3 esperado ≈ 26; Crónico, HCO3 esperado ≈ 32. El HCO3 real del paciente es 24, que está más cerca del valor esperado para AGUDO — por lo tanto es una acidosis respiratoria aguda, no una descompensación de un retenedor crónico."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "Paciente varón de 45 años, fumador de 1 cajetilla/día desde hace 20 años, acude a Emergencia con dolor torácico tipo punzada en hemitórax izquierdo que aumenta con la inspiración, y dificultad respiratoria de 2 días de evolución. PA 90/75 mmHg, FC 130 lpm, FR 29/min, SatO2 90% ambiental. Al examen: murmullo vesicular abolido en 2/3 inferiores del hemitórax izquierdo, con aumento de la sonoridad a la percusión en dicha zona.",
        "preguntaMC": {
          "enunciado": "Considerando la sospecha diagnóstica, ¿qué examen solicitaría en primer lugar para confirmar el diagnóstico?",
          "opciones": [
            {
              "id": "a",
              "texto": "Gasometría arterial"
            },
            {
              "id": "b",
              "texto": "Electrocardiograma"
            },
            {
              "id": "c",
              "texto": "Radiografía de tórax"
            },
            {
              "id": "d",
              "texto": "Toracocentesis"
            },
            {
              "id": "e",
              "texto": "Tomografía de tórax"
            }
          ],
          "correcta": "c",
          "explicacion": "El aumento de sonoridad (hiperresonancia) con abolición del murmullo vesicular sugiere neumotórax, no derrame (que daría matidez). La radiografía de tórax es el estudio inicial estándar y de más rápido acceso para confirmarlo — no la gasometría ni el ECG, que no son diagnósticos de esta condición, y no la toracocentesis ni la TC, que no son de primera línea en este escenario."
        },
        "preguntaEscrita": {
          "enunciado": "Si la hipotensión y taquicardia de este paciente empeoraran junto con desviación traqueal, ¿qué diagnóstico sospecharía y cuál sería su conducta inmediata?",
          "respuestaModelo": "Sospecharía neumotórax a TENSIÓN — la presión intrapleural creciente compromete el retorno venoso al corazón, explicando el deterioro hemodinámico progresivo. La conducta inmediata es la descompresión con aguja de urgencia (2do espacio intercostal, línea medioclavicular) sin esperar confirmación radiológica adicional, seguida de colocación de tubo torácico — no se debe retrasar el tratamiento esperando más estudios cuando hay inestabilidad hemodinámica franca."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "Paciente mujer de 65 años acude con tiempo de enfermedad de 2 semanas: fiebre, tos productiva, dolor torácico tipo punzada en hemitórax derecho que aumenta con los movimientos respiratorios, disnea de moderados esfuerzos. PA 150/60, FC 120, T° 39°C, FR 26, SatO2 90%. Radiografía de tórax: radioopacidad homogénea que compromete todo el hemitórax derecho, con desplazamiento del mediastino hacia la izquierda.",
        "preguntaMC": {
          "enunciado": "Teniendo en cuenta el cuadro clínico y radiológico, ¿cuál es el diagnóstico más probable?",
          "opciones": [
            {
              "id": "a",
              "texto": "Atelectasia"
            },
            {
              "id": "b",
              "texto": "Infarto pulmonar"
            },
            {
              "id": "c",
              "texto": "Derrame pleural masivo"
            },
            {
              "id": "d",
              "texto": "Neumonía adquirida en la comunidad"
            },
            {
              "id": "e",
              "texto": "Absceso pulmonar"
            }
          ],
          "correcta": "c",
          "explicacion": "El dato clave es la DIRECCIÓN del desplazamiento mediastínico: en el derrame pleural masivo, el mediastino se desplaza HACIA EL LADO CONTRARIO (por el efecto de masa del líquido acumulado) — a diferencia de la atelectasia, donde el mediastino se desplaza HACIA EL MISMO LADO de la lesión (por pérdida de volumen). La radioopacidad homogénea que compromete todo el hemitórax con desplazamiento contralateral es el patrón clásico de derrame masivo."
        },
        "preguntaEscrita": {
          "enunciado": "¿Qué hallazgos esperaría encontrar en el examen físico de esta paciente, y cuál sería su plan de trabajo diagnóstico inicial?",
          "respuestaModelo": "Al examen físico esperaría: disminución o abolición del murmullo vesicular, disminución o abolición de las vibraciones vocales (frémito), y matidez franca a la percusión sobre la zona afectada. Plan de trabajo: confirmar con la radiografía de tórax ya realizada, y proceder a toracocentesis diagnóstica para caracterizar el líquido pleural (aplicando criterios de Light) y orientar la etiología — dado el cuadro febril subagudo, hay que considerar un origen paraneumónico/infeccioso."
        }
      },
      {
        "nivel": "basico",
        "vineta": "(Estilo examen real) Pregunta conceptual directa sobre criterios de Light — así aparecen en tus exámenes modulares.",
        "preguntaMC": {
          "enunciado": "Según los criterios de Light, ¿cuál de los siguientes NO es un criterio para clasificar un derrame pleural como EXUDADO?",
          "opciones": [
            {
              "id": "a",
              "texto": "Proteínas líquido pleural/proteínas séricas > 0.5"
            },
            {
              "id": "b",
              "texto": "LDH líquido pleural/LDH sérica > 0.6"
            },
            {
              "id": "c",
              "texto": "LDH en líquido pleural > 2/3 del límite superior normal en suero"
            },
            {
              "id": "d",
              "texto": "Glucosa en líquido pleural ≥ 60 mg/dl"
            },
            {
              "id": "e",
              "texto": "Cumplir al menos 1 de los 3 criterios anteriores (a, b o c)"
            }
          ],
          "correcta": "d",
          "explicacion": "Una glucosa ≥60 mg/dl NO es criterio de exudado — de hecho, una glucosa BAJA (<60) es lo que orienta a exudado complicado (ej. empiema) o TB, no una glucosa normal/alta. Los 3 criterios de Light reales son: proteínas líquido/suero >0.5, LDH líquido/suero >0.6, o LDH en líquido >2/3 del límite superior normal sérico — con que se cumpla UNO solo, ya se clasifica como exudado."
        },
        "preguntaEscrita": {
          "enunciado": "Si en una toracocentesis obtiene un líquido con proteínas líquido/suero 0.3, LDH líquido/suero 0.4, y glucosa 65 mg/dl, ¿es trasudado o exudado, y qué causas debe considerar?",
          "respuestaModelo": "Es un TRASUDADO — no cumple ninguno de los 3 criterios de Light (ambos cocientes están por debajo del umbral). En un trasudado, la pleura está sana; el líquido se acumula por alteración de presiones sistémicas. Causas a considerar: insuficiencia cardiaca congestiva (la más frecuente), cirrosis hepática con hipoalbuminemia, y síndrome nefrótico."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "Paciente de 20 años, asmático conocido, acude a Emergencia con agudización de su enfermedad. Ingresa hablando oraciones completas, SatO2 94% sin apoyo de oxígeno, afebril. FR 24/min, sibilancias inspiratorias y espiratorias. Espirometría: VEF1/CVF 63%, VEF1 2.1L (60% del predicho), CVF 3.67L (87% del predicho).",
        "preguntaMC": {
          "enunciado": "De acuerdo con estos datos, ¿cuál es el grado de severidad de esta crisis asmática?",
          "opciones": [
            {
              "id": "a",
              "texto": "Leve"
            },
            {
              "id": "b",
              "texto": "Moderada"
            },
            {
              "id": "c",
              "texto": "Severa"
            },
            {
              "id": "d",
              "texto": "Con riesgo vital (paro respiratorio inminente)"
            },
            {
              "id": "e",
              "texto": "No se puede clasificar sin gasometría"
            }
          ],
          "correcta": "b",
          "explicacion": "El paciente habla en oraciones completas (no palabras sueltas, lo que descartaría severa), sibilancias en ambos tiempos, SatO2 entre 90-95%, y un patrón obstructivo moderado en la espirometría (VEF1 60% del predicho) — todo esto en conjunto clasifica la crisis como MODERADA, no leve (que tendría espirometría casi normal) ni severa (que cursaría con habla en palabras sueltas, uso marcado de músculos accesorios, SatO2 <90%)."
        },
        "preguntaEscrita": {
          "enunciado": "¿Cuál sería el manejo indicado para esta crisis asmática moderada?",
          "respuestaModelo": "Salbutamol (SABA) más bromuro de ipratropio nebulizado o en inhalador, asociado a glucocorticoide sistémico (oral o endovenoso) para tratar la inflamación de base de la crisis. Según guías actualizadas (GINA/GEMA) puede considerarse además corticoide inhalado en dosis altas repetidas. El oxígeno suplementario solo estaría indicado si la saturación cae por debajo de 92% — en este caso, con SatO2 94%, no es prioritario de entrada."
        }
      }
    ]
  }
};

/* ============================================================
   MÓDULOS — resumen de cada módulo completo (varias semanas),
   con contenido de repaso NUEVO (no reciclado): preguntas y
   casos que comparan enfermedades entre sí dentro del módulo.
   ============================================================ */
const MODULOS = {
  "neumologia": {
    "id": "modulo-neumologia",
    "nombre": "Neumología",
    "emoji": "🫁",
    "enfermedadesPorCategoria": [
      {
        "categoria": "Obstructivas",
        "ids": [
          "epoc",
          "asma-bronquial",
          "bronquitis-bronquiectasias"
        ]
      },
      {
        "categoria": "Infecciosas",
        "ids": [
          "neumonia-nac",
          "neumonia-intrahospitalaria",
          "tuberculosis-pulmonar"
        ]
      },
      {
        "categoria": "Pleurales",
        "ids": [
          "enfermedades-pleurales"
        ]
      },
      {
        "categoria": "Intersticiales y otras",
        "ids": [
          "epid",
          "enfermedades-respiratorias-ocupacionales",
          "saos",
          "insuficiencia-respiratoria-aguda"
        ]
      }
    ],
    "loQueSiOSiDebesSaberModulo": [
      "Ante cualquier disnea crónica, la primera pregunta mental es: ¿patrón obstructivo o restrictivo? (VEF1/FVC en espirometría) — eso separa de entrada EPOC/Asma/Bronquiectasias (obstructivo) de EPID (restrictivo)",
      "La reversibilidad post-broncodilatador ≥12% y 200mL es lo único que distingue con certeza Asma de EPOC en la espirometría",
      "Percusión diferencia neumotórax (timpanismo) de derrame pleural (matidez) — el frémito vocal está disminuido en AMBOS y no sirve para diferenciarlos",
      "Todo sintomático respiratorio (tos ≥2 semanas) se estudia para tuberculosis, sin excepción, independientemente de otros diagnósticos que parezcan más probables",
      "La localización predomina el diagnóstico: TB en vértices (mayor O2 disponible), NAC/derrame en bases, EPID en bases con crépitos tipo velcro específicos",
      "El PaO2/FiO2 (PaFi) es la herramienta central para clasificar gravedad de cualquier compromiso respiratorio agudo — NAC grave, SDRA, insuficiencia respiratoria",
      "Los criterios de Light: basta con cumplir 1 solo de los 3 criterios para clasificar un derrame como exudado, no se necesitan los 3",
      "Historia laboral cronológica detallada SIEMPRE ante enfermedad respiratoria de causa poco clara — es el dato más olvidado y el más rentable",
      "STOP-Bang es cribado (orienta riesgo), la polisomnografía es el único estudio diagnóstico real de SAOS — no son intercambiables",
      "El neumotórax a tensión es la única urgencia verdadera de todo el módulo que se trata SIN esperar confirmación radiológica",
      "Bronquitis crónica es un diagnóstico CLÍNICO (tiempo), EPOC requiere confirmación ESPIROMÉTRICA — no son sinónimos aunque se usen así coloquialmente",
      "Neumonía nosocomial (>48h de hospitalización) tiene mayor riesgo de gérmenes multirresistentes que la NAC — cambia el antibiótico empírico"
    ],
    "quizComparativo": [
      {
        "pregunta": "EPOC vs. Asma: ¿qué dato espirométrico los distingue con más certeza?",
        "respuesta": "La reversibilidad post-broncodilatador: ≥12% y 200mL en FEV1 es compatible con asma; su ausencia (obstrucción fija) orienta a EPOC.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "EPOC vs. EPID: ambos dan disnea crónica progresiva. ¿Qué patrón funcional tiene cada uno?",
        "respuesta": "EPOC = patrón obstructivo (VEF1/FVC <0.70). EPID = patrón restrictivo (VEF1/FVC normal o alto, con CVF y CPT reducidos).",
        "tipo": "comparativo"
      },
      {
        "pregunta": "Neumotórax vs. Derrame pleural: ambos abolen el murmullo vesicular. ¿Qué los distingue en la percusión?",
        "respuesta": "Neumotórax = timpanismo/hiperresonancia (aire). Derrame = matidez (líquido). El frémito vocal está disminuido en ambos y NO los diferencia.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "NAC vs. Tuberculosis pulmonar: ambas dan tos y fiebre. ¿Cuál es la diferencia de curso temporal más útil?",
        "respuesta": "NAC = curso agudo (días). TB = curso insidioso (semanas a meses), con pérdida de peso y sudoración nocturna más marcadas.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "NAC vs. Neumonía nosocomial: ¿qué cambia entre ambas más allá del lugar de adquisición?",
        "respuesta": "La nosocomial (>48h de hospitalización) tiene mayor riesgo de patógenos multirresistentes (Pseudomonas, Acinetobacter), lo que obliga a ampliar la cobertura antibiótica empírica.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "Bronquitis crónica vs. EPOC: ¿en qué se diferencian exactamente, si comparten tanto?",
        "respuesta": "Bronquitis crónica = diagnóstico clínico (tos productiva ≥3 meses/año x2 años). EPOC = requiere confirmación espirométrica de obstrucción fija (VEF1/FVC <0.70). Un paciente puede tener bronquitis crónica SIN tener EPOC.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "Alveolitis alérgica extrínseca vs. Asma ocupacional: ambas mejoran fuera del trabajo. ¿Qué hallazgo auscultatorio las distingue?",
        "respuesta": "Alveolitis alérgica extrínseca = estertores finos SIN sibilancias. Asma ocupacional = sibilancias difusas. Presencia o ausencia de sibilancias es la clave.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "EPID vs. Insuficiencia cardiaca: ambas dan crépitos bibasales. ¿Qué otros datos las diferencian?",
        "respuesta": "EPID: crépitos tipo 'velcro' específicos, sin signos de sobrecarga de volumen. Insuficiencia cardiaca: crépitos más húmedos/gruesos, con ingurgitación yugular, edemas, y respuesta a diuréticos.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "SDRA vs. edema pulmonar cardiogénico: ambos dan infiltrados bilaterales e hipoxemia. ¿Cómo se diferencian según Berlín?",
        "respuesta": "SDRA requiere que el cuadro NO se explique completamente por edema cardiogénico (ecocardiograma ayuda) y que tenga un evento desencadenante conocido en los últimos 7 días.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "Derrame paraneumónico simple vs. complicado/empiema: ¿qué datos del líquido pleural marcan la diferencia práctica?",
        "respuesta": "pH <7.2, glucosa <40-60 mg/dl, y aspecto turbio/purulento indican derrame complicado o empiema — cambia la conducta de solo antibiótico a drenaje torácico obligatorio.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "Silicosis vs. Asbestosis: ambas son neumoconiosis. ¿Cuál es la complicación específica de cada una?",
        "respuesta": "Silicosis se asocia fuertemente a tuberculosis. Asbestosis se asocia específicamente a mesotelioma pleural maligno.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "Insuficiencia respiratoria tipo I vs. tipo II: ¿cuál es la diferencia central, y qué enfermedad típica representa cada una?",
        "respuesta": "Tipo I = hipoxémica sin hipercapnia (típica de neumonía/SDRA). Tipo II = hipercápnica por hipoventilación (típica de EPOC agudizado o enfermedad neuromuscular).",
        "tipo": "comparativo"
      },
      {
        "pregunta": "TB pulmonar vs. neumonía atípica: ambas pueden dar auscultación relativamente pobre pese a síntomas importantes. ¿Qué las distingue mejor?",
        "respuesta": "TB tiene curso de semanas con pérdida de peso marcada y localización apical; la neumonía atípica es de curso más agudo (días) y no tiene la misma pérdida de peso ni localización preferencial apical.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "SAOS vs. EPOC: ambos pueden coexistir ('overlap syndrome'). ¿Cuál es el riesgo particular de esa combinación?",
        "respuesta": "La combinación de obstrucción crónica de vía aérea (EPOC) con apneas nocturnas (SAOS) genera mayor riesgo de hipoxemia nocturna combinada y peor pronóstico cardiovascular que cualquiera de las dos por separado.",
        "tipo": "comparativo"
      },
      {
        "pregunta": "Bronquiectasias vs. EPOC: ambas cursan con tos crónica productiva. ¿Qué estudio las distingue de forma definitiva?",
        "respuesta": "La TC de alta resolución: bronquiectasias muestran dilatación bronquial permanente (signo del anillo de sello); el EPOC no tiene ese hallazgo estructural específico, se confirma con espirometría.",
        "tipo": "comparativo"
      }
    ],
    "casosComparativos": [
      {
        "nivel": "avanzado",
        "vineta": "Varón de 55 años, tabaquismo 30 paq/año, consulta por disnea progresiva de 2 años y tos con expectoración matutina. Otro paciente, mujer de 60 años, sin tabaquismo, consulta por disnea progresiva de 1 año y tos SECA, con crépitos tipo velcro en ambas bases y acropaquia. Ambos tienen disnea crónica progresiva de causa aparentemente similar.",
        "preguntaMC": {
          "enunciado": "¿Qué estudio inicial permite diferenciar de entrada estos dos cuadros clínicos?",
          "opciones": [
            {
              "id": "a",
              "texto": "Hemograma completo"
            },
            {
              "id": "b",
              "texto": "Espirometría — el patrón (obstructivo vs. restrictivo) orienta inmediatamente hacia direcciones diagnósticas distintas"
            },
            {
              "id": "c",
              "texto": "Electrocardiograma"
            },
            {
              "id": "d",
              "texto": "Ecografía abdominal"
            },
            {
              "id": "e",
              "texto": "Ninguno, ambos requieren el mismo manejo"
            }
          ],
          "correcta": "b",
          "explicacion": "El primer paciente (tabaquismo, tos productiva) orienta a EPOC — esperaríamos un patrón OBSTRUCTIVO (VEF1/FVC <0.70). La segunda paciente (tos seca, crépitos velcro, acropaquia, sin tabaquismo) orienta a EPID — esperaríamos un patrón RESTRICTIVO (VEF1/FVC normal con CVF reducida). La espirometría es el primer estudio que separa estos dos caminos diagnósticos completamente distintos, pese a que ambos comparten el síntoma principal de disnea crónica progresiva."
        },
        "preguntaEscrita": {
          "enunciado": "Además de la espirometría, ¿qué otro dato semiológico (auscultatorio) esperarías encontrar diferente entre estos dos pacientes?",
          "respuestaModelo": "En el paciente con EPOC esperaría murmullo vesicular disminuido de forma difusa, con espiración prolongada, y posibles roncantes/sibilantes si hay broncoespasmo asociado — un pulmón que suena 'con poco aire moviéndose'. En la paciente con EPID esperaría crépitos inspiratorios finos tipo 'velcro' específicamente en las bases pulmonares, un sonido característico y bien localizado, distinto del murmullo vesicular globalmente disminuido del EPOC."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "Dos pacientes acuden por dolor torácico y disnea súbita. Paciente A: varón joven, alto y delgado, tráquea central, hiperresonancia y murmullo vesicular abolido en hemitórax derecho. Paciente B: varón de 45 años con fiebre de 5 días previos, matidez y murmullo vesicular abolido en base derecha, con leucocitosis.",
        "preguntaMC": {
          "enunciado": "¿Qué hallazgo semiológico específico permite diferenciar de inmediato estos dos cuadros, más allá del contexto clínico?",
          "opciones": [
            {
              "id": "a",
              "texto": "La frecuencia cardiaca"
            },
            {
              "id": "b",
              "texto": "La percusión: hiperresonancia (paciente A, neumotórax) vs. matidez (paciente B, derrame paraneumónico)"
            },
            {
              "id": "c",
              "texto": "La presión arterial"
            },
            {
              "id": "d",
              "texto": "El frémito vocal, que está aumentado en ambos"
            },
            {
              "id": "e",
              "texto": "No hay forma de diferenciarlos sin radiografía"
            }
          ],
          "correcta": "b",
          "explicacion": "Aunque ambos abolen el murmullo vesicular (por aire en un caso, líquido en el otro), la PERCUSIÓN es el hallazgo que los separa con claridad: hiperresonancia/timpanismo en el neumotórax (más aire de lo normal) versus matidez en el derrame (menos aire, más 'sólido'). El frémito vocal está DISMINUIDO en ambos, no aumentado — por eso no sirve para diferenciarlos, es un error frecuente asumir que sí."
        },
        "preguntaEscrita": {
          "enunciado": "Si el paciente A (sospecha de neumotórax) de pronto presenta hipotensión y desviación traqueal, ¿qué cambia en tu conducta inmediata?",
          "respuestaModelo": "Esos dos signos (hipotensión + desviación traqueal contralateral) indican que el neumotórax simple ha evolucionado a neumotórax A TENSIÓN, una emergencia real. La conducta cambia de 'esperar radiografía para confirmar' a actuar de inmediato con descompresión con aguja en el segundo espacio intercostal, línea medioclavicular — sin esperar ningún estudio de imagen, porque cada minuto de retraso aumenta el riesgo de shock obstructivo y paro cardiorrespiratorio."
        }
      }
    ]
  }
};

/* ============================================================
   TALLERES — cada Taller Aplicativo es su propia sección
   independiente y repasable, con sus propios casos e imágenes.
   NO se disuelven como casos extra dentro de otras enfermedades:
   son la sección exacta que se revisa antes/después del examen
   práctico de ese taller específico.
   ============================================================ */
const TALLERES = [
  {
    "id": "taller-imagenes-s2",
    "nombre": "TALLER APLICATIVO: IMÁGENES",
    "semana": "semana-02",
    "dia": "Lunes",
    "resumen": "Interpretación de radiografías de tórax según el contexto clínico — 5 casos reales, cada uno con su imagen. Aplicado justo antes de un examen práctico.",
    "casos": [
      {
        "nivel": "basico",
        "vineta": "(Taller Aplicativo: Imágenes — Semana 2) Varón de 45 años, sin comorbilidades, acude a emergencia por fiebre de 38.8°C, tos productiva con esputo amarillo verdoso, disnea leve y dolor torácico tipo pleurítico de 3 días de evolución. No ha estado hospitalizado recientemente. Al examen: FR 24 rpm, FC 102 lpm, SatO₂ 92% al aire ambiental. A la auscultación: crépitos en hemitórax izquierdo.",
        "imagen": {
          "src": "assets/taller-imagenes-s2/taller-s2-nac-flechas.jpg",
          "caption": "Radiografía del caso — infiltrado alveolar en lóbulo inferior izquierdo"
        },
        "preguntaMC": {
          "enunciado": "¿Cómo describirías esta radiografía?",
          "opciones": [
            {
              "id": "a",
              "texto": "Infiltrado alveolar en el lóbulo inferior izquierdo, con consolidación y posible broncograma aéreo"
            },
            {
              "id": "b",
              "texto": "Patrón cavitario en vértices pulmonares"
            },
            {
              "id": "c",
              "texto": "Opacidad homogénea con desplazamiento mediastínico contralateral"
            },
            {
              "id": "d",
              "texto": "Línea pleural visible con ausencia de trama vascular periférica"
            },
            {
              "id": "e",
              "texto": "Radiografía sin hallazgos patológicos"
            }
          ],
          "correcta": "a",
          "explicacion": "El infiltrado alveolar con consolidación y posible broncograma aéreo en el lóbulo inferior izquierdo, sumado al cuadro clínico agudo (fiebre, esputo purulento, crépitos localizados en esa zona), es el patrón clásico de neumonía adquirida en la comunidad — el broncograma aéreo aparece cuando el aire persiste en los bronquios rodeados de alvéolos llenos de exudado."
        },
        "preguntaEscrita": {
          "enunciado": "Hasta ahí, ¿qué diagnóstico presuntivo puedes proponer, y qué herramienta usarías para decidir su manejo (ambulatorio vs. hospitalizado)?",
          "respuestaModelo": "Diagnóstico presuntivo: Neumonía Adquirida en la Comunidad (NAC). Para decidir el manejo usaría el CURB-65 o CRB-65: este paciente tiene SatO2 92% (hipoxemia leve) y taquicardia, pero no cumple criterios de confusión, FR≥30, ni hipotensión — probablemente amerite al menos observación cercana u hospitalización breve dada la hipoxemia, más que manejo ambulatorio puro, aunque el puntaje exacto depende de completar la evaluación clínica completa."
        }
      },
      {
        "nivel": "basico",
        "vineta": "(Taller Aplicativo: Imágenes — Semana 2) Varón de 32 años, procedente de zona urbana marginal, consulta por tos productiva de 2 meses, pérdida de peso (6 kg), sudoración nocturna y febrícula. Niega enfermedades previas. Al examen: adelgazado, crépitos en vértices pulmonares.",
        "imagen": {
          "src": "assets/taller-imagenes-s2/taller-s2-tb-cavitacion.jpg",
          "caption": "Radiografía del caso — infiltrado cavitado en lóbulo superior (síndrome cavitario)"
        },
        "preguntaMC": {
          "enunciado": "¿Cómo describirías esta radiografía?",
          "opciones": [
            {
              "id": "a",
              "texto": "Infiltrados cavitados en lóbulos superiores — síndrome cavitario"
            },
            {
              "id": "b",
              "texto": "Consolidación basal con broncograma aéreo"
            },
            {
              "id": "c",
              "texto": "Derrame pleural con signo del menisco"
            },
            {
              "id": "d",
              "texto": "Neumotórax con línea pleural visible"
            },
            {
              "id": "e",
              "texto": "Atelectasia con pérdida de volumen"
            }
          ],
          "correcta": "a",
          "explicacion": "La imagen cavitaria en lóbulo superior (síndrome cavitario) junto con el cuadro clínico crónico (2 meses de evolución, pérdida de peso, sudoración nocturna, febrícula) es el cuadro clásico de tuberculosis pulmonar — la localización apical se explica por la mayor tensión de oxígeno en los vértices pulmonares, donde el bacilo aerobio estricto prolifera mejor."
        },
        "preguntaEscrita": {
          "enunciado": "¿Qué estudio confirmatorio solicitarías de inmediato, y por qué la localización de las lesiones es característicamente apical en esta enfermedad?",
          "respuestaModelo": "Solicitaría baciloscopía de esputo (2-3 muestras) y cultivo para M. tuberculosis, idealmente con prueba molecular rápida (GeneXpert) si está disponible. La localización apical es característica porque M. tuberculosis es un aerobio estricto, y los vértices pulmonares tienen mayor tensión de oxígeno (mayor ventilación relativa a la perfusión) que las bases — un ambiente que favorece su crecimiento sobre otras zonas del pulmón."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "(Taller Aplicativo: Imágenes — Semana 2. Nota: la atelectasia no es en sí una enfermedad pleural, pero se incluye aquí junto a los otros casos de este mismo taller porque comparte el diagnóstico diferencial por percusión/auscultación) Varón de 68 años, postoperado de cirugía abdominal, con disnea progresiva, tos inefectiva, hipoxemia leve. Al examen: expansión torácica disminuida en lado derecho, percusión con matidez en base pulmonar derecha, auscultación con disminución del murmullo vesicular.",
        "imagen": {
          "src": "assets/taller-imagenes-s2/taller-s2-atelectasia-hemitorax-derecho.jpg",
          "caption": "Radiografía del caso — opacidad homogénea y pérdida de volumen del hemitórax derecho"
        },
        "preguntaMC": {
          "enunciado": "¿Cómo describirías esta radiografía?",
          "opciones": [
            {
              "id": "a",
              "texto": "Opacidad homogénea y pérdida de volumen del hemitórax derecho, con elevación del diafragma y desplazamiento de cisuras hacia el área afectada — atelectasia"
            },
            {
              "id": "b",
              "texto": "Infiltrado alveolar con broncograma aéreo — neumonía"
            },
            {
              "id": "c",
              "texto": "Signo del menisco pleural — derrame pleural"
            },
            {
              "id": "d",
              "texto": "Línea pleural visible — neumotórax"
            },
            {
              "id": "e",
              "texto": "Radiografía sin hallazgos"
            }
          ],
          "correcta": "a",
          "explicacion": "El dato clave que distingue la atelectasia de otras causas de opacidad es que las estructuras se DESPLAZAN HACIA el área afectada (pérdida de volumen — el mediastino y las cisuras 'jalan' hacia el pulmón colapsado), a diferencia del derrame masivo, donde el mediastino se desplaza EN SENTIDO CONTRARIO (por el efecto de masa del líquido). El antecedente de cirugía abdominal reciente es un factor de riesgo clásico de atelectasia postoperatoria por hipoventilación y retención de secreciones."
        },
        "preguntaEscrita": {
          "enunciado": "¿Por qué la percusión da matidez en la atelectasia, igual que en el derrame pleural, si son dos entidades completamente distintas? ¿Cómo las diferenciarías clínicamente además de la imagen?",
          "respuestaModelo": "Ambas dan matidez porque en ambos casos hay menos aire de lo normal en esa zona del tórax (en la atelectasia, el pulmón está colapsado; en el derrame, el espacio pleural está ocupado por líquido) — la percusión no distingue la causa, solo detecta 'menos aire'. Clínicamente, la clave diferenciadora es la dirección del desplazamiento mediastínico: hacia el lado afectado en la atelectasia (por pérdida de volumen), hacia el lado contrario en el derrame masivo (por efecto de masa) — y radiológicamente, la atelectasia muestra pérdida de volumen con elevación diafragmática ipsilateral, mientras que el derrame muestra el signo del menisco característico."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "(Taller Aplicativo: Imágenes — Semana 2) Varón de 22 años, previamente sano, consulta por dolor torácico súbito y disnea de inicio brusco tras ejercicio intenso. Al examen: disminución de la expansión torácica derecha, vibraciones vocales disminuidas en base derecha, percusión con matidez en base derecha, auscultación con abolición del murmullo vesicular basal derecha. Tráquea central.",
        "imagen": {
          "src": "assets/taller-imagenes-s2/taller-s2-neumotorax-linea-pleural.jpg",
          "caption": "Radiografía del caso — línea pleural visible (flechas) separando el pulmón colapsado de la pared torácica"
        },
        "preguntaMC": {
          "enunciado": "¿Cómo describirías esta radiografía y cuál es el diagnóstico?",
          "opciones": [
            {
              "id": "a",
              "texto": "Línea pleural visible que separa el pulmón colapsado de la pared torácica — neumotórax"
            },
            {
              "id": "b",
              "texto": "Signo del menisco pleural — derrame pleural"
            },
            {
              "id": "c",
              "texto": "Infiltrado alveolar con broncograma aéreo — neumonía"
            },
            {
              "id": "d",
              "texto": "Opacidad cavitada apical — tuberculosis"
            },
            {
              "id": "e",
              "texto": "Pérdida de volumen con elevación diafragmática — atelectasia"
            }
          ],
          "correcta": "a",
          "explicacion": "Las flechas marcan la línea pleural visceral, desplazada de la pared torácica por el aire acumulado en el espacio pleural — el hallazgo radiológico definitorio del neumotórax. El cuadro clínico (dolor súbito + disnea brusca tras esfuerzo en un varón joven sano) es el escenario típico de un neumotórax espontáneo primario."
        },
        "preguntaEscrita": {
          "enunciado": "Este paciente tiene tráquea central. ¿Qué cambiaría en tu manejo si la tráquea estuviera desviada hacia el lado contralateral, junto con hipotensión?",
          "respuestaModelo": "Tráquea central + estabilidad hemodinámica es compatible con un neumotórax simple, que puede manejarse de forma más electiva (observación en neumotórax pequeño, o drenaje con tubo torácico en los más grandes). Si en cambio hubiera desviación traqueal contralateral E hipotensión, eso indicaría neumotórax A TENSIÓN — una emergencia real que requiere descompresión con aguja INMEDIATA (2do espacio intercostal, línea medioclavicular) sin esperar ningún estudio de imagen adicional, dado el riesgo de colapso cardiovascular por compresión del retorno venoso."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "(Taller Aplicativo: Imágenes — Semana 2) Paciente de 60 años con antecedente de neumonía hace una semana, consulta por disnea progresiva, tos seca y dolor torácico pleurítico izquierdo de 5 días de evolución.",
        "imagen": {
          "src": "assets/taller-imagenes-s2/taller-s2-derrame-menisco.jpg",
          "caption": "Radiografía del caso — signo del menisco pleural (curva de Damoiseau), marcado en naranja"
        },
        "preguntaMC": {
          "enunciado": "¿Cómo describirías esta radiografía?",
          "opciones": [
            {
              "id": "a",
              "texto": "Opacidad homogénea con borramiento del ángulo costofrénico y signo del menisco pleural — derrame pleural"
            },
            {
              "id": "b",
              "texto": "Infiltrado alveolar con broncograma aéreo"
            },
            {
              "id": "c",
              "texto": "Línea pleural visible sin trama vascular periférica"
            },
            {
              "id": "d",
              "texto": "Cavitación apical bilateral"
            },
            {
              "id": "e",
              "texto": "Radiografía normal"
            }
          ],
          "correcta": "a",
          "explicacion": "El signo del menisco (o curva de Damoiseau) — una línea cóncava hacia arriba y medial marcada en naranja en la imagen — junto con el borramiento del ángulo costofrénico, es el hallazgo clásico de derrame pleural. El antecedente de neumonía reciente orienta a que este sea un derrame paraneumónico."
        },
        "preguntaEscrita": {
          "enunciado": "Dado el antecedente de neumonía la semana previa, ¿qué procedimiento realizarías para caracterizar este derrame, y qué buscarías específicamente en el resultado?",
          "respuestaModelo": "Realizaría una toracocentesis diagnóstica para obtener líquido pleural y aplicar los criterios de Light (proteínas líquido/suero, LDH líquido/suero, LDH en líquido vs. límite superior normal sérico) para clasificarlo como exudado o trasudado. Dado el antecedente de neumonía, buscaría específicamente signos de derrame paraneumónico complicado: pH <7.2, glucosa <40-60 mg/dl, LDH muy elevada, y aspecto turbio/purulento — hallazgos que cambiarían la conducta de solo antibiótico a drenaje torácico obligatorio."
        }
      }
    ]
  },
  {
    "id": "taller-aga1-s2",
    "nombre": "TALLER APLICATIVO: ANÁLISIS DE GASES ARTERIALES",
    "semana": "semana-02",
    "dia": "Viernes",
    "resumen": "Interpretación de gasometrías arteriales paso a paso — 5 casos, aplicando las fórmulas de compensación esperada y el cálculo del PaFi.",
    "formulas": [
      "Acidosis Respiratoria — HCO3 esperado = 24 + [(PaCO2−40)/10] × 1",
      "Alcalosis Respiratoria — HCO3 esperado = 24 − [(40−PaCO2)/10] × 2",
      "Acidosis Metabólica — PaCO2 esperado = (1.5 × HCO3) + 8 ± 2",
      "Alcalosis Metabólica — PaCO2 esperado = 0.7 × (HCO3−24) + 40 ± 5",
      "PaFi = PaO2 / FiO2 (FiO2 en fracción decimal, no porcentaje)"
    ],
    "casos": [
      {
        "nivel": "basico",
        "vineta": "Varón de 68 años, tórax en tonel, EPOC diagnosticado hace 15 años, consulta por somnolencia y disnea a mínimos esfuerzos. FR 10 rpm, SatO2 83% ambiental. AGA: pH 7.30, PaCO2 60 mmHg, PaO2 55 mmHg, HCO3 32 mEq/L, FiO2 21%.",
        "preguntaMC": {
          "enunciado": "¿Qué alteración primaria presenta este paciente y es aguda o crónica?",
          "opciones": [
            {
              "id": "a",
              "texto": "Acidosis metabólica aguda"
            },
            {
              "id": "b",
              "texto": "Acidosis respiratoria con compensación metabólica ya establecida (HCO3 muy elevado para ser solo agudo) — sugiere retención crónica de CO2 con descompensación aguda sobreagregada"
            },
            {
              "id": "c",
              "texto": "Alcalosis respiratoria aguda"
            },
            {
              "id": "d",
              "texto": "Gasometría normal"
            }
          ],
          "correcta": "b",
          "explicacion": "pH bajo + PaCO2 elevado = acidosis respiratoria. El HCO3 de 32 (bastante por encima de lo esperado para una compensación aguda, que sería solo ~+1 por cada 10 de CO2) indica que el riñón ya tuvo tiempo de compensar — es decir, el paciente ya era un retenedor crónico de CO2 (típico de EPOC avanzado), y ahora tiene una descompensación aguda sobreagregada que el riñón todavía no alcanza a compensar del todo (por eso el pH sigue bajo)."
        },
        "preguntaEscrita": {
          "enunciado": "¿Por qué la frecuencia respiratoria de 10 rpm en este paciente es un dato preocupante y no tranquilizador?",
          "respuestaModelo": "En un paciente con acidosis respiratoria e hipoxemia severa, uno esperaría taquipnea compensatoria. Una frecuencia respiratoria baja (10 rpm) junto con somnolencia sugiere depresión del centro respiratorio por la hipercapnia severa (narcosis por CO2) o agotamiento respiratorio — es decir, el paciente está perdiendo la capacidad de compensar, no que esté mejorando. Es un signo de alarma que puede anticipar la necesidad de soporte ventilatorio urgente."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "Mujer de 35 años, sin comorbilidades, fiebre de 39°C, disnea progresiva, taquipnea 32 rpm, crepitantes bilaterales, SatO2 84%. AGA: pH 7.47, PaCO2 30 mmHg, PaO2 50 mmHg, HCO3 21 mEq/L, FiO2 21%.",
        "preguntaMC": {
          "enunciado": "¿Cuál es la interpretación correcta de esta gasometría?",
          "opciones": [
            {
              "id": "a",
              "texto": "Acidosis metabólica descompensada"
            },
            {
              "id": "b",
              "texto": "Alcalosis respiratoria aguda (por hiperventilación secundaria a hipoxemia/proceso infeccioso), con compensación metabólica renal aguda apropiada (HCO3 levemente disminuido)"
            },
            {
              "id": "c",
              "texto": "Acidosis respiratoria crónica"
            },
            {
              "id": "d",
              "texto": "Alcalosis metabólica pura"
            }
          ],
          "correcta": "b",
          "explicacion": "pH elevado + PaCO2 bajo = alcalosis respiratoria (hiperventilación, típica cuando el paciente 'sopla' CO2 de más al intentar compensar la hipoxemia). El HCO3 de 21 (levemente bajo) es la compensación renal esperada para un proceso agudo — usando la fórmula: HCO3 esperado = 24 − [(40−30)/10]×2 = 22, muy cercano al valor real (21), confirmando que es una alcalosis respiratoria aguda simple, sin trastorno mixto agregado."
        },
        "preguntaEscrita": {
          "enunciado": "Calcula la PaFi de esta paciente e interpreta qué tan grave es su compromiso de oxigenación.",
          "respuestaModelo": "PaFi = PaO2 / FiO2 = 50 / 0.21 ≈ 238. Un valor de PaFi por debajo de 300 ya sugiere lesión pulmonar aguda; por debajo de 200 orienta a síndrome de dificultad respiratoria aguda (SDRA). Con 238, la paciente tiene un compromiso significativo de la oxigenación, consistente con un proceso infeccioso pulmonar grave (neumonía) que está alterando la relación ventilación/perfusión."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "(Taller Aplicativo: Análisis de Gases Arteriales — Semana 2) Varón de 67 años, hipertenso y diabético, acude por 4 días de fiebre, tos productiva purulenta y disnea progresiva. Al examen: taquipnea (FR 30), uso de musculatura accesoria, estertores crepitantes en base derecha. Rx de tórax: consolidado en base de hemitórax derecho. AGA: pH 7.48, PaCO2 30 mmHg, PaO2 55 mmHg, HCO3 22 mEq/L, FiO2 21%, Lactato 2, Gradiente A-a 57, EB -2.",
        "preguntaMC": {
          "enunciado": "¿Qué alteración primaria presenta este paciente según el AGA?",
          "opciones": [
            {
              "id": "a",
              "texto": "Alcalosis respiratoria aguda (pH elevado, PaCO2 disminuido, HCO3 acorde a cambio agudo)"
            },
            {
              "id": "b",
              "texto": "Acidosis respiratoria crónica compensada"
            },
            {
              "id": "c",
              "texto": "Acidosis metabólica pura"
            },
            {
              "id": "d",
              "texto": "Alcalosis metabólica"
            },
            {
              "id": "e",
              "texto": "Gasometría normal"
            }
          ],
          "correcta": "a",
          "explicacion": "pH elevado (7.48) = alcalemia. PaCO2 disminuido (30) = el trastorno primario es respiratorio (alcalosis respiratoria). El HCO3 (22) está acorde a lo esperado para un cambio AGUDO (fórmula: HCO3 esperado = 24 − [(40−PaCO2)/10]×2 = 24 − [(40−30)/10]×2 = 22), confirmando que es aguda, no una compensación crónica ya establecida."
        },
        "preguntaEscrita": {
          "enunciado": "Calcula el PaFi de este paciente y da tu conclusión fisiopatológica completa.",
          "respuestaModelo": "PaFi = PaO2/FiO2 = 55/0.21 ≈ 262 (sin compromiso significativo de oxigenación por shunt). Conclusión: neumonía con alcalosis respiratoria secundaria a hiperventilación por sepsis temprana, con hipoxemia explicada por alteración de la relación ventilación/perfusión (V/Q) más que por shunt — el PaFi de 262 no indica un compromiso tan severo como para pensar en SDRA."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "(Taller Aplicativo: Análisis de Gases Arteriales — Semana 2) Mujer de 74 años con antecedente de EPOC leve, consulta por disnea severa y compromiso del sensorio. Presenta hipotensión, taquicardia y fiebre; se documenta neumonía multilobar. Ingresa a emergencia con criterios de sepsis grave. AGA: pH 7.25, PaCO2 55 mmHg, PaO2 48 mmHg, HCO3 24 mEq/L, FiO2 0.4, Lactato 4.2, Gradiente A-a 156, EB +1.",
        "preguntaMC": {
          "enunciado": "¿Qué alteración primaria presenta esta paciente según el AGA?",
          "opciones": [
            {
              "id": "a",
              "texto": "Acidosis respiratoria aguda sin compensación (HCO3 no elevado pese al PaCO2 alto)"
            },
            {
              "id": "b",
              "texto": "Acidosis respiratoria crónica compensada"
            },
            {
              "id": "c",
              "texto": "Alcalosis respiratoria"
            },
            {
              "id": "d",
              "texto": "Acidosis metabólica pura"
            },
            {
              "id": "e",
              "texto": "Alcalosis metabólica"
            }
          ],
          "correcta": "a",
          "explicacion": "pH bajo (7.25) = acidemia. PaCO2 elevado (55) = acidosis respiratoria. El HCO3 (24) NO está elevado como se esperaría en una compensación renal ya establecida (el HCO3 esperado por fórmula sería ≈25.5) — la ausencia de compensación confirma que es un proceso AGUDO, pese al antecedente de EPOC (que uno podría esperar generara ya una compensación crónica basal)."
        },
        "preguntaEscrita": {
          "enunciado": "IMPORTANTE — verifica el cálculo: si alguien te dice que el PaFi de esta paciente es 262, ¿es correcto? Haz el cálculo real y dilo con tu propia conclusión fisiopatológica.",
          "respuestaModelo": "NO es correcto — 262 correspondería a un cálculo con FiO2 de 0.21, pero esta paciente tiene FiO2 de 0.4 (recibe oxígeno suplementario). El cálculo real es PaFi = PaO2/FiO2 = 48/0.4 = 120, que sí indica compromiso significativo de la oxigenación (compatible con SDRA moderado según Berlín, 100-200). Conclusión: insuficiencia respiratoria mixta con shunt significativo (evidenciado por el gradiente A-a muy elevado de 156) y acidosis respiratoria aguda en el contexto de sepsis grave por neumonía multilobar."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "(Taller Aplicativo: Análisis de Gases Arteriales — Semana 2) Varón de 60 años con peritonitis fecaloidea operada. En UCI desarrolla hipoxemia refractaria pese a oxígeno suplementario, gran tiraje intercostal y uso de musculatura accesoria, además de trastorno del sensorio e inestabilidad hemodinámica que requirió inotrópicos. Requiere ventilación mecánica. AGA: pH 7.31, PaCO2 40 mmHg, PaO2 55 mmHg, HCO3 19 mEq/L, FiO2 0.8, Lactato 3.7, Gradiente A-a 458, EB -6.",
        "preguntaMC": {
          "enunciado": "¿Qué alteración primaria presenta este paciente según el AGA?",
          "opciones": [
            {
              "id": "a",
              "texto": "Acidosis metabólica primaria (HCO3 bajo) con compensación respiratoria adecuada"
            },
            {
              "id": "b",
              "texto": "Acidosis respiratoria pura"
            },
            {
              "id": "c",
              "texto": "Alcalosis respiratoria"
            },
            {
              "id": "d",
              "texto": "Alcalosis metabólica"
            },
            {
              "id": "e",
              "texto": "Gasometría normal"
            }
          ],
          "correcta": "a",
          "explicacion": "pH bajo (7.31) = acidemia. HCO3 bajo (19) = el trastorno primario es metabólico (acidosis metabólica), consistente con el contexto séptico postquirúrgico. Aplicando la fórmula de Winter: PaCO2 esperado = 1.5×19 + 8 = 36.5 ±2 (rango 34.5-38.5) — el PaCO2 real (40) cae dentro de ese rango, confirmando compensación respiratoria ADECUADA, no un trastorno mixto agregado."
        },
        "preguntaEscrita": {
          "enunciado": "Calcula el PaFi de este paciente y da tu conclusión fisiopatológica completa, explicando qué tan grave es su compromiso respiratorio.",
          "respuestaModelo": "PaFi = PaO2/FiO2 = 55/0.8 ≈ 69. Un PaFi menor a 100 corresponde a SDRA SEVERO según los criterios de Berlín. Conclusión: SDRA severo con shunt intrapulmonar masivo (gradiente A-a de 458, extremadamente elevado) y acidosis metabólica por sepsis abdominal — el cuadro completo (postoperatorio de peritonitis + hipoxemia refractaria a oxígeno + necesidad de ventilación mecánica e inotrópicos) es el escenario clásico de SDRA secundario a sepsis de origen abdominal."
        }
      }
    ]
  },
  {
    "id": "taller-casos-clinicos-s3",
    "nombre": "TALLER APLICATIVO: CASOS CLÍNICOS EN NEUMOLOGÍA",
    "semana": "semana-03",
    "dia": "Viernes",
    "resumen": "Aplicación integral de todo el módulo de Neumología — 3 casos completos (diagnóstico, exámenes, tratamiento), como se pediría en el examen del curso.",
    "casos": [
      {
        "nivel": "intermedio",
        "vineta": "Varón de 58 años, taxista, hipertenso, exfumador (20 paq/año), no vacunado. Inicia con malestar general, escalofríos y fiebre no cuantificada hace 4 días. A las 48h aparece tos productiva con esputo amarillento, dolor torácico tipo punzada que aumenta con la inspiración, y disnea de pequeños esfuerzos. T° 39°C, FC 108, FR 26, PA 135/85, SatO2 90% aire ambiente. Disminución de la expansibilidad torácica derecha, matidez en base derecha, crepitantes y soplo tubario en lóbulo inferior derecho. Leucocitos 17,500/mm³ con neutrofilia, PCR y procalcitonina elevadas, gasometría con hipoxemia leve.",
        "preguntaMC": {
          "enunciado": "¿Qué hallazgo del examen físico confirma consolidación del lóbulo inferior derecho, más allá de la matidez?",
          "opciones": [
            {
              "id": "a",
              "texto": "Frémito vocal disminuido"
            },
            {
              "id": "b",
              "texto": "Soplo tubárico y crepitantes localizados en la misma zona"
            },
            {
              "id": "c",
              "texto": "Hiperresonancia a la percusión"
            },
            {
              "id": "d",
              "texto": "Murmullo vesicular aumentado"
            },
            {
              "id": "e",
              "texto": "Ausencia total de ruidos respiratorios"
            }
          ],
          "correcta": "b",
          "explicacion": "El soplo tubárico (transmisión de los ruidos bronquiales a través de tejido consolidado) junto con los crepitantes localizados en la misma zona que la matidez confirma consolidación del parénquima — el frémito en consolidación está AUMENTADO (no disminuido, eso sería derrame), y la hiperresonancia sería propia de neumotórax, no de neumonía."
        },
        "preguntaEscrita": {
          "enunciado": "¿Qué criterios usarías para decidir si este paciente requiere hospitalización, y cuál sería el tratamiento antibiótico empírico inicial más apropiado?",
          "respuestaModelo": "Usaría el CURB-65 o el PSI. Con SatO2 90%, taquicardia, taquipnea y edad no mayor a 65, calculando CURB-65 este paciente probablemente puntúa bajo-moderado, pero la hipoxemia (SatO2 90%) y las comorbilidades (HTA, tabaquismo) inclinan a favor de hospitalización para observación y manejo con antibiótico parenteral. El tratamiento empírico inicial en un paciente hospitalizado no grave sería β-lactámico (ceftriaxona) más macrólido (azitromicina), o alternativamente una fluoroquinolona respiratoria en monoterapia."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "Mujer de 34 años, asma desde la infancia, múltiples hospitalizaciones el último año, rinitis alérgica. Acude a emergencia por disnea intensa, opresión torácica y tos seca de inicio súbito. Usa salbutamol inhalado más de 10 veces al día sin mejoría. PA 140/90, FC 120, FR 32, SatO2 88% aire ambiental. Sibilancias generalizadas, uso de músculos accesorios, dificultad para hablar frases completas. Leucocitos 12,000/mm3 (eosinófilos 6%). AGA: pH 7.28, PaCO2 55 mmHg, PaO2 58 mmHg. Pico de flujo espiratorio <50% del valor personal mejor.",
        "preguntaMC": {
          "enunciado": "¿Cómo interpretas la gasometría de esta paciente en el contexto de su crisis asmática?",
          "opciones": [
            {
              "id": "a",
              "texto": "Alcalosis respiratoria compensatoria esperada — buen signo"
            },
            {
              "id": "b",
              "texto": "Acidosis respiratoria con PaCO2 elevado — signo de ALARMA, indica fatiga de músculos respiratorios y crisis casi fatal"
            },
            {
              "id": "c",
              "texto": "Gasometría normal para una crisis asmática"
            },
            {
              "id": "d",
              "texto": "Acidosis metabólica pura"
            },
            {
              "id": "e",
              "texto": "Alcalosis metabólica"
            }
          ],
          "correcta": "b",
          "explicacion": "En una crisis asmática típica esperaríamos taquipnea con HIPOCAPNIA (alcalosis respiratoria) por hiperventilación compensatoria. Que esta paciente tenga PaCO2 ELEVADO (55 mmHg, con acidosis) es un signo de extrema gravedad — indica que la musculatura respiratoria ya está fatigada y no logra mantener la hiperventilación compensatoria. Esto define una crisis asmática casi fatal, con riesgo de paro respiratorio inminente."
        },
        "preguntaEscrita": {
          "enunciado": "¿Cuál sería el manejo inmediato en emergencia para esta paciente, y qué factores podrían explicar el mal control crónico de su asma?",
          "respuestaModelo": "Manejo inmediato: oxígeno suplementario, salbutamol + ipratropio nebulizados continuos, corticoide sistémico endovenoso, sulfato de magnesio endovenoso (indicado en crisis severas), y evaluación URGENTE para ventilación mecánica dado el patrón de fatiga respiratoria (PaCO2 elevado) — esta paciente está en riesgo de paro respiratorio y debe manejarse en una unidad con capacidad de intubación inmediata. Factores que explican el mal control: uso excesivo de SABA de rescate (>10 veces/día, muy por encima de lo recomendado) sin terapia controladora adecuada de base, múltiples hospitalizaciones previas (marcador de asma de difícil control), y posible mal apego a corticoide inhalado de mantenimiento."
        }
      },
      {
        "nivel": "intermedio",
        "vineta": "Varón de 45 años, previamente sano. Fiebre, tos productiva purulenta, dolor torácico pleurítico y disnea progresiva de 5 días de evolución. T° 38.8°C, taquipnea, matidez a la percusión y disminución del murmullo vesicular en base pulmonar derecha. Leucocitosis con neutrofilia, PCR elevada.",
        "preguntaMC": {
          "enunciado": "Si la toracocentesis muestra un líquido con pH 7.1, glucosa 35 mg/dl y aspecto turbio, ¿qué tipo de derrame paraneumónico presenta?",
          "opciones": [
            {
              "id": "a",
              "texto": "Derrame paraneumónico simple — solo requiere antibiótico"
            },
            {
              "id": "b",
              "texto": "Derrame paraneumónico complicado / empiema — requiere drenaje obligatorio"
            },
            {
              "id": "c",
              "texto": "Trasudado — descartar causa cardiaca"
            },
            {
              "id": "d",
              "texto": "Derrame tuberculoso"
            },
            {
              "id": "e",
              "texto": "No se puede clasificar sin cultivo"
            }
          ],
          "correcta": "b",
          "explicacion": "pH <7.2 y glucosa muy baja (<40-60 mg/dl) en el líquido pleural, junto con aspecto turbio, son datos que indican un derrame paraneumónico COMPLICADO o empiema franco — esto cambia la conducta terapéutica de forma decisiva: ya no basta con antibiótico solo, se requiere drenaje torácico obligatorio."
        },
        "preguntaEscrita": {
          "enunciado": "¿El derrame de este paciente es exudado o trasudado según los criterios de Light, y qué factores del líquido pleural sugieren mala evolución?",
          "respuestaModelo": "Es un EXUDADO — un derrame paraneumónico por definición es un exudado (pleura inflamada por la infección adyacente), lo que se confirmaría cumpliendo al menos uno de los criterios de Light (proteínas líquido/suero >0.5, LDH líquido/suero >0.6, o LDH >2/3 del límite superior normal sérico). Los factores que sugieren mala evolución (progresión a empiema o necesidad de drenaje) son: pH <7.2, glucosa <40-60 mg/dl, LDH muy elevada, aspecto purulento/turbio, y cultivo o Gram positivo del líquido pleural."
        }
      }
    ]
  },
  {
    "id": "taller-aga2-s3",
    "nombre": "TALLER APLICATIVO: ANÁLISIS DE GASES ARTERIALES 2",
    "semana": "semana-03",
    "dia": "Miércoles",
    "resumen": "Segunda ronda de interpretación de gasometrías — 2 casos más complejos, con lactato y gradiente A-a incluidos.",
    "formulas": [
      "Acidosis Respiratoria — HCO3 esperado = 24 + [(PaCO2−40)/10] × 1",
      "Acidosis Metabólica — PaCO2 esperado = (1.5 × HCO3) + 8 ± 2 (fórmula de Winter)"
    ],
    "casos": [
      {
        "nivel": "avanzado",
        "vineta": "(Taller Aplicativo: Análisis de Gases Arteriales 2 — Semana 3) Paciente varón de 55 años en UCI por sepsis abdominal, que evoluciona con disnea progresiva, taquipnea y aumento rápido de requerimientos de oxígeno. Radiografía muestra infiltrados bilaterales difusos no cardiogénicos. AGA: pH 7.28, PaCO2 48 mmHg, PaO2 60 mmHg, HCO3 22 mEq/L, FiO2 0.6, EB -1.",
        "preguntaMC": {
          "enunciado": "¿Qué alteración primaria presenta este paciente según el AGA?",
          "opciones": [
            {
              "id": "a",
              "texto": "Acidosis respiratoria aguda no compensada (HCO3 normal pese al PaCO2 elevado)"
            },
            {
              "id": "b",
              "texto": "Acidosis respiratoria crónica compensada"
            },
            {
              "id": "c",
              "texto": "Acidosis metabólica pura"
            },
            {
              "id": "d",
              "texto": "Alcalosis respiratoria"
            },
            {
              "id": "e",
              "texto": "Alcalosis metabólica"
            }
          ],
          "correcta": "a",
          "explicacion": "pH bajo (7.28) = acidemia. PaCO2 elevado (48) = el trastorno primario es respiratorio (acidosis respiratoria). El HCO3 (22) está en rango normal — usando la fórmula (HCO3 esperado = 24+[(PaCO2−40)/10]×1 = 24+0.8 ≈ 25, no compensado) se confirma que es AGUDA, no una compensación renal ya establecida."
        },
        "preguntaEscrita": {
          "enunciado": "Calcula el PaFi de este paciente y da tu conclusión fisiopatológica completa.",
          "respuestaModelo": "PaFi = PaO2/FiO2 = 60/0.6 = 100. Un PaFi de exactamente 100 está en el límite entre SDRA moderado y severo según Berlín (100-200 = moderado; <100 = severo). Conclusión: SDRA de origen extrapulmonar (sepsis abdominal) con acidosis respiratoria aguda no compensada — los infiltrados bilaterales no cardiogénicos junto con el antecedente séptico y el deterioro respiratorio rápido confirman el diagnóstico de SDRA secundario a sepsis, uno de los escenarios más clásicos de esta entidad."
        }
      },
      {
        "nivel": "avanzado",
        "vineta": "Varón de 25 años con diabetes mellitus tipo 1 mal controlada, ingresa por vómitos persistentes, dolor abdominal y compromiso del sensorio. Respiración profunda y rápida tipo Kussmaul, deshidratación severa, aliento cetónico. AGA: pH 7.10, PaCO2 19 mmHg, PaO2 98 mmHg, HCO3 6 mEq/L, FiO2 0.21, EB -18.",
        "preguntaMC": {
          "enunciado": "¿Cuál es el trastorno ácido-base primario, y la compensación respiratoria es adecuada?",
          "opciones": [
            {
              "id": "a",
              "texto": "Acidosis respiratoria con compensación metabólica"
            },
            {
              "id": "b",
              "texto": "Acidosis metabólica (HCO3 muy bajo) con compensación respiratoria adecuada (PaCO2 esperado ≈17±2, muy cercano al real de 19)"
            },
            {
              "id": "c",
              "texto": "Alcalosis metabólica"
            },
            {
              "id": "d",
              "texto": "Trastorno mixto no compensado"
            },
            {
              "id": "e",
              "texto": "Gasometría normal"
            }
          ],
          "correcta": "b",
          "explicacion": "pH muy bajo (7.10) + HCO3 muy bajo (6) = acidosis metabólica severa (típica de cetoacidosis diabética). Usando la fórmula de Winter: PaCO2 esperado = (1.5×HCO3) + 8 ± 2 = (1.5×6)+8 = 17±2 (rango 15-19). El PaCO2 real del paciente (19) cae justo dentro de ese rango esperado — confirmando que la respiración de Kussmaul (rápida y profunda) está logrando una compensación respiratoria ADECUADA, sin trastorno mixto agregado."
        },
        "preguntaEscrita": {
          "enunciado": "Explica por qué este paciente presenta respiración de Kussmaul, relacionándolo con el mecanismo de compensación que estás calculando.",
          "respuestaModelo": "La respiración de Kussmaul (profunda y rápida) es precisamente el mecanismo compensatorio respiratorio ante la acidosis metabólica severa. Al aumentar la ventilación alveolar, el paciente elimina más CO2 del que normalmente eliminaría, bajando el PaCO2 (hipocapnia compensatoria) para intentar normalizar el pH pese al HCO3 muy bajo. Es el pulmón 'ayudando' al riñón a compensar un problema metabólico — el mismo principio general por el que, ante cualquier acidosis metabólica, el cuerpo hiperventila de forma refleja."
        }
      }
    ]
  }
];

const LECTURAS = [
  {
    "id": "lectura-s1-3",
    "url": "https://www.aafp.org/pubs/afp/issues/2022/0600/p625.html",
    "titulo": "Womack, J., & Kropa, J. (2022). Community-Acquired Pneumonia in Adults: Rapid Evidence Review. American family physician, 105(6), 625–630",
    "tipo": "obligatoria",
    "semana": "semana-01",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s2-5",
    "url": "https://www.aafp.org/pubs/afp/issues/2023/0400/chronic-asthma-treatment.pdf",
    "titulo": "Raymond, T., & Peterson, T. (2023). Chronic Asthma Treatment: Common Questions and Answers. American Family Physician, 107(4), 358–368",
    "tipo": "obligatoria",
    "semana": "semana-02",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s3-7",
    "url": "https://www.aafp.org/pubs/afp/issues/2022/0900/tuberculosis.html",
    "titulo": "Hartman-Adams, H., Gerbo, R. M., & George, S. (2022). Tuberculosis: Common Questions and Answers. American family physician, 106(3), 308–315. https://www.aafp.org/pubs/afp/issues/2022/0900/tuberculosis.html",
    "tipo": "obligatoria",
    "semana": "semana-03",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s4-12",
    "url": "https://www.aafp.org/pubs/afp/issues/2005/0701/p119.html",
    "titulo": "Achar, S. A., Kundu, S., & Norcross, W. A. (2005). Diagnosis of acute coronary syndrome. American Family Physician, 72(01), 119-126.",
    "tipo": "obligatoria",
    "semana": "semana-04",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s5-14",
    "url": "https://www.revespcardiol.org/es-diagnostico-y-guia-terapeutica-del-pacie-articulo-13043227-pdf-file",
    "titulo": "Diagnóstico y guía terapéutica del paciente con taponamiento cardiaco o constricción pericárdica.Sagristá, Jaume.Revista Española de Cardiología 2003; 56(2):195-205",
    "tipo": "obligatoria",
    "semana": "semana-05",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s6-16",
    "url": "https://www.aafp.org/pubs/afp/issues/2002/0615/p2479.pdf",
    "titulo": "Hebbar K., &  Hueston, W. (2002). Management of Common Arrythmias: Supraventricular  Arrythmias. American Family Physician, 65(12): 2479-2486 https://www.aafp.org/pubs/afp/issues/2002/0615/p2479.pdf",
    "tipo": "obligatoria",
    "semana": "semana-06",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s7-20",
    "url": "https://www.aafp.org/pubs/afp/issues/2022/0300/p250.html",
    "titulo": "Ford, B., Lara, S., & Park, J. (2022). Heart murmurs in children: Evaluation and management. American family Physician, 105(3): 250-261.",
    "tipo": "obligatoria",
    "semana": "semana-07",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s9-24",
    "url": "https://doi.org/10.36648/1698-9465.22.18.1552",
    "titulo": "Glomerulonephritis: an Approach to the KDIGO 2021 Guidelines.",
    "tipo": "obligatoria",
    "semana": "semana-09",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s10-27",
    "url": "https://www.aafp.org/pubs/afp/issues/2015/0301/p299.html",
    "titulo": "Braun, M., Barstow, C. & Pyzocha, N. (2015). Diagnosis and management of Sodium Disorders: Hyponatremia and Hypernatremia. American Family Physician 91(5): 299-310",
    "tipo": "obligatoria",
    "semana": "semana-10",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s11-29",
    "url": "https://doi.org/10.2337/diacare.28.1.164",
    "titulo": "Gross, J. L., De Azevedo, M. J., Silveiro, S. P., Canani, L. H., Caramori, M. L., & Zelmanovitz, T. (2005). Diabetic nephropathy: diagnosis, prevention, and treatment. Diabetes care, 28(1), 164-176.",
    "tipo": "obligatoria",
    "semana": "semana-11",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s12-34",
    "url": "https://www.aafp.org/pubs/afp/issues/2014/1101/p632.html",
    "titulo": "PANCREATITIS AGUDA",
    "tipo": "obligatoria",
    "semana": "semana-12",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s13-37",
    "url": "http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S1022-51292018000100015",
    "titulo": "HEMORRAGIA DIGESTIVA ALTA",
    "tipo": "obligatoria",
    "semana": "semana-13",
    "estado": "pendiente"
  },
  {
    "id": "lectura-s14-40",
    "url": "https://www.aafp.org/pubs/afp/issues/2015/0915/p474.html",
    "titulo": "INFECCIONES DE LA PIEL",
    "tipo": "obligatoria",
    "semana": "semana-14",
    "estado": "pendiente"
  }
];
