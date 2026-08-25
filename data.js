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
        "vinculos": [
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
        "vinculos": [
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
        "vinculos": [
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
        "vinculos": [
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
    id: "epoc",
    nombre: "EPOC (Enfermedad Pulmonar Obstructiva Crónica)",
    area: "Neumología",
    semanas: ["semana-02"],
    favorito: false,
    estudiado: false,
    ilustracion: "assets/epoc-airway.svg",
    relacionadas: [
      { id: "asma-bronquial", relacion: "Principal diagnóstico diferencial — ambas cursan con obstrucción de la vía aérea, pero se distinguen por reversibilidad y edad de inicio" }
    ],

    profundo: {
      definicion: "Enfermedad respiratoria caracterizada por limitación crónica y progresiva del flujo aéreo, poco reversible, asociada a una respuesta inflamatoria anormal de la vía aérea y el parénquima pulmonar frente a partículas o gases nocivos, principalmente el humo de tabaco.",
      epidemiologia: "Una de las principales causas de morbimortalidad a nivel mundial. Más frecuente en mayores de 40 años con historia de tabaquismo significativo (> 10 paquetes-año).",
      etiologiaFactoresRiesgo: [
        "Tabaquismo (principal factor de riesgo)",
        "Exposición a biomasa (humo de leña en espacios cerrados)",
        "Exposición ocupacional a polvos y químicos",
        "Déficit de alfa-1 antitripsina (causa genética)",
        "Antecedente de infecciones respiratorias recurrentes en la infancia"
      ],
      fisiopatologia: {
        resumen: "La exposición crónica a partículas nocivas desencadena inflamación sostenida de la vía aérea, con dos componentes que coexisten en proporción variable: enfermedad de la pequeña vía aérea (bronquiolitis) y destrucción del parénquima (enfisema).",
        explicacionExtendida: "El EPOC combina en proporción variable dos procesos que comparten el mismo desencadenante (humo de tabaco u otras partículas inhaladas) pero dañan estructuras distintas. En el fenotipo enfisematoso, el desequilibrio entre proteasas (sobre todo elastasa neutrofílica) y antiproteasas (como la alfa-1 antitripsina) destruye progresivamente la matriz elástica del parénquima alveolar. Esto no solo colapsa las paredes alveolares y fusiona espacios aéreos, sino que también reduce la fuerza de retracción elástica que normalmente mantiene abierta la vía aérea pequeña durante la espiración — por eso el aire queda atrapado.\n\nEn el fenotipo de bronquitis crónica predomina la hipersecreción mucosa: la hiperplasia de células caliciformes y la hipertrofia de glándulas submucosas producen moco en exceso, mientras el epitelio ciliar dañado por la inflamación crónica pierde capacidad de barrerlo. El estrés oxidativo (agravado por el propio humo del cigarrillo, que agota las defensas antioxidantes) amplifica ambos procesos, perpetuando la inflamación incluso después de dejar de fumar. Con el tiempo, la inflamación deja de ser solo local: se vuelve sistémica de bajo grado, lo que explica por qué el EPOC se asocia a comorbilidades cardiovasculares y pérdida de masa muscular en etapas avanzadas.",
        cascada: [
          { paso: "Factor desencadenante", detalle: "Humo de tabaco / partículas inhaladas" },
          { paso: "Células activadas", detalle: "Macrófagos alveolares, neutrófilos, linfocitos T CD8+" },
          { paso: "Mediadores liberados", detalle: "IL-8, TNF-α, leucotrieno B4, proteasas (elastasa neutrofílica)" },
          { paso: "Efecto tisular", detalle: "Desequilibrio proteasa/antiproteasa → destrucción de la matriz elástica alveolar" },
          { paso: "Cambio estructural", detalle: "Pérdida de tabiques alveolares (enfisema) + engrosamiento e hipersecreción en vía aérea pequeña" },
          { paso: "Cambio fisiológico", detalle: "Atrapamiento aéreo, hiperinsuflación, ↓ retracción elástica, limitación al flujo espiratorio" },
          { paso: "Manifestación clínica", detalle: "Disnea progresiva, tos crónica, uso de musculatura accesoria" }
        ]
      },
      clinica: [
        { signo: "Disnea progresiva", mecanismo: "Hiperinsuflación dinámica → ↑ trabajo respiratorio para un mismo volumen corriente" },
        { signo: "Tos crónica productiva", mecanismo: "Hipersecreción mucosa por hiperplasia de células caliciformes" },
        { signo: "Sibilancias espiratorias", mecanismo: "Turbulencia del flujo aéreo a través de la vía estrechada" }
      ],
      examenFisico: [
        "Tórax en tonel (hiperinsuflación)",
        "Espiración prolongada con labios fruncidos",
        "↓ murmullo vesicular, roncantes/sibilantes",
        "Signo de Hoover (movimiento paradójico de la parrilla costal inferior)"
      ],
      semiologia: {
            "inspeccion": "Observa el patrón respiratorio antes de tocar al paciente: tórax en tonel (aumento del diámetro anteroposterior por hiperinsuflación), uso de músculos accesorios (esternocleidomastoideos, escalenos), respiración con labios fruncidos (mecanismo que el paciente adopta espontáneamente para evitar el colapso de la vía aérea al espirar), y el signo de Hoover — depresión paradójica de la parrilla costal inferior durante la inspiración (indica diafragma aplanado por hiperinsuflación crónica).",
            "palpacion": "Coloca ambas manos simétricamente sobre la parrilla costal posterior y pide al paciente que respire profundo: en EPOC vas a sentir expansión torácica DISMINUIDA y simétrica (a diferencia de un derrame o neumotórax, que es asimétrica). El frémito vocal (vibraciones al decir '33') suele estar disminuido de forma difusa por la hiperinsuflación.",
            "percusion": "Percute de forma comparativa y simétrica, de arriba hacia abajo, en ambos hemitórax. Vas a encontrar hipersonoridad difusa (sonido más 'hueco' de lo normal) por el atrapamiento de aire, y los límites pulmonares inferiores descendidos (el diafragma está aplanado y bajo).",
            "auscultacion": "Ausculta sistemáticamente ápices → bases, comparando lado a lado. Vas a encontrar murmullo vesicular disminuido de forma difusa (menos aire se mueve, más silencio de lo normal — dato clave), espiración prolongada, y roncantes/sibilantes si hay broncoespasmo asociado. Un dato práctico: en EPOC muy avanzado el tórax puede sonar casi 'silencioso' — eso NO es buena señal, es que hay tan poco flujo de aire que ni siquiera genera ruido."
      },




      diagnostico: "Espirometría post-broncodilatador: relación VEF1/CVF < 0.70 confirma limitación al flujo aéreo no completamente reversible.",
      algoritmo: [
        { tipo: "paso", texto: "Sospecha clínica: disnea progresiva + tos crónica + antecedente de tabaquismo significativo" },
        { tipo: "paso", texto: "Solicitar espirometría post-broncodilatador" },
        { tipo: "decision", texto: "¿FEV1/FVC < 0.70 tras broncodilatador?", salidas: [
          { etiqueta: "NO", texto: "EPOC descartado — buscar otra causa de disnea (asma, insuf. cardiaca, etc.)", color: "mint" },
          { etiqueta: "SÍ", texto: "Confirma EPOC → clasificar gravedad (GOLD ABE) según síntomas y exacerbaciones", color: "coral" }
        ]}
      ],
      diagnosticoDiferencial: ["Asma bronquial", "Bronquiectasias", "Insuficiencia cardiaca", "Bronquiolitis obliterante"],
      tratamiento: {
        noFarmacologico: ["Cese absoluto de tabaquismo (medida con mayor impacto en sobrevida)", "Rehabilitación pulmonar", "Vacunación antigripal y antineumocócica"],
        farmacologico: ["Broncodilatadores de acción prolongada (LABA/LAMA)", "Corticoide inhalado en fenotipo con exacerbaciones frecuentes/eosinofilia", "Oxigenoterapia domiciliaria si hipoxemia crónica"]
      },
      complicaciones: ["Cor pulmonale", "Insuficiencia respiratoria aguda sobre crónica", "Neumotórax espontáneo (bulas)"],
      prevencion: "Cese de tabaquismo y reducción de exposición a biomasa son las intervenciones de mayor impacto.",
      perlasProfundo: "El VEF1/CVF post-broncodilatador < 0.70 confirma EPOC, pero la severidad y el pronóstico dependen más de la disnea, exacerbaciones y capacidad de ejercicio que del VEF1 aislado (clasificación GOLD ABE)."
    },

    repaso: {
      conceptosClave: ["Limitación crónica y poco reversible del flujo aéreo", "Principal causa: tabaquismo", "Espirometría: VEF1/CVF < 0.70 post-BD"],
      clinica: "Disnea progresiva + tos crónica productiva + antecedente tabáquico.",
      diagnostico: "Espirometría post-broncodilatador.",
      tratamientoResumen: "Cese de tabaco > broncodilatadores LABA/LAMA > corticoide inhalado si eosinofilia/exacerbador.",
      diferenciales: [
        { entidad: "Asma", clave: "Reversibilidad significativa post-BD, inicio en edad temprana" },
        { entidad: "Insuficiencia cardiaca", clave: "Ortopnea, edema, crépitos bibasales, BNP elevado" }
      ],
      tablaComparativa: {
        titulo: "EPOC vs Asma",
        filas: [
          ["Edad de inicio", "> 40 años", "Infancia/adolescencia"],
          ["Reversibilidad", "Parcial/ausente", "Significativa (>12% y 200mL)"],
          ["Antecedente", "Tabaquismo", "Atopia/alergias"]
        ]
      }
    },

    imprescindible: {
      loQueSiOSiDebesSaber: [
        "El diagnóstico se confirma con espirometría, NO con clínica aislada",
        "VEF1/CVF < 0.70 post-broncodilatador es el criterio diagnóstico clave",
        "El cese de tabaquismo es la única intervención que modifica la sobrevida",
        "Sospechar déficit de alfa-1 antitripsina en EPOC de inicio temprano sin tabaquismo"
      ],
      redFlags: ["Disnea en reposo con uso de músculos accesorios → posible exacerbación grave", "Cianosis o alteración del sensorio → evaluar insuficiencia respiratoria"],
      erroresFrecuentes: ["Diagnosticar EPOC solo por clínica sin espirometría", "Confundir con asma sin evaluar reversibilidad"],
      asociacionesClinicas: ["EPOC + cor pulmonale → edema de miembros inferiores, ingurgitación yugular"]
    }
  ,
    casosClinicos: [
        {
            "vineta": "Varón de 64 años, obrero de construcción jubilado, con antecedente de tabaquismo de 40 paquetes-año (dejó de fumar hace 2 años). Acude por disnea progresiva de 8 meses de evolución, actualmente con esfuerzos mínimos (subir un piso de escaleras), y tos con expectoración blanquecina matutina. Al examen: tórax en tonel, espiración prolongada con labios fruncidos, murmullo vesicular disminuido difusamente. Espirometría post-broncodilatador: FEV1/FVC 0.58, FEV1 48% del predicho.",
            "preguntaMC": {
                "enunciado": "Según la clasificación GOLD, ¿cuál es el paso MÁS apropiado a seguir en el manejo de este paciente?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "Iniciar corticoide oral en pauta larga para reducir la inflamación de base"
                    },
                    {
                        "id": "b",
                        "texto": "Clasificar la gravedad combinando síntomas (ej. mMRC/CAT) y riesgo de exacerbaciones, luego iniciar broncodilatador de acción prolongada"
                    },
                    {
                        "id": "c",
                        "texto": "Indicar oxigenoterapia domiciliaria continua de inmediato"
                    },
                    {
                        "id": "d",
                        "texto": "Repetir la espirometría en 6 meses antes de iniciar cualquier tratamiento"
                    }
                ],
                "correcta": "b",
                "explicacion": "El FEV1/FVC <0.70 ya confirma EPOC. El siguiente paso correcto es clasificar la gravedad combinando síntomas y riesgo de exacerbaciones (grupo GOLD A/B/E) para elegir el tratamiento inicial — que empieza con broncodilatador de acción prolongada, no corticoide oral (sin indicación aquí) ni oxígeno (no hay dato de hipoxemia documentada)."
            },
            "preguntaEscrita": {
                "enunciado": "Explica el mecanismo fisiopatológico por el cual este paciente presenta el signo de labios fruncidos al respirar, y por qué ese mismo mecanismo explica el 'tórax en tonel' al examen físico.",
                "respuestaModelo": "La destrucción del parénquima alveolar y la pérdida de retracción elástica hacen que la vía aérea pequeña tienda a colapsar durante la espiración forzada. Al respirar con labios fruncidos, el paciente genera una resistencia adicional en la salida del aire que aumenta la presión dentro de la vía aérea, evitando ese colapso precoz y permitiendo vaciar mejor los pulmones. El mismo problema de fondo — aire atrapado que no se logra expulsar por completo en cada ciclo — lleva a hiperinsuflación pulmonar crónica, que con el tiempo remodela la caja torácica hacia el 'tórax en tonel' (aumento del diámetro anteroposterior)."
            },
            "nivel": "intermedio"
        },
        {
            "vineta": "Mujer de 58 años con EPOC conocido (GOLD C) en tratamiento con LAMA, acude a emergencia por aumento de la disnea habitual, mayor volumen de esputo y cambio a esputo purulento en los últimos 2 días. No tiene fiebre. Saturación 91% con FiO2 ambiental, FR 24/min, sin uso marcado de músculos accesorios.",
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
                "respuestaModelo": "Cursa con los 3 criterios de Anthonisen: aumento de disnea, aumento del volumen de esputo, y esputo purulento. Con los 3 criterios presentes (especialmente la purulencia, que sugiere causa bacteriana) sí está indicado iniciar antibióticos empíricos, además del ajuste de broncodilatadores y considerar corticoide sistémico según la gravedad de la exacerbación."
            },
            "nivel": "basico"
        },
        {
            "nivel": "avanzado",
            "vineta": "Varón de 70 años con EPOC GOLD D conocido, ingresa por disnea severa de 24h, somnoliento pero despertable. Gasometría arterial: pH 7.28, PaCO2 68 mmHg, PaO2 52 mmHg, HCO3 28 mEq/L. FR 12/min (bradipneico), usa musculatura accesoria de forma decreciente.",
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
                "explicacion": "El pH bajo con PaCO2 muy elevada confirma acidosis respiratoria; el HCO3 ya elevado (28) sugiere una compensación renal previa (retenedor crónico de CO2) sobre la que se sobreagrega una descompensación aguda. La disminución de la frecuencia respiratoria en un paciente que antes usaba músculos accesorios es un signo de ALARMA (agotamiento respiratorio, no mejoría) — requiere soporte ventilatorio urgente, típicamente VMNI si no hay contraindicación."
            },
            "preguntaEscrita": {
                "enunciado": "¿Por qué la disminución de la frecuencia respiratoria en este paciente es un signo de alarma y no de mejoría clínica?",
                "respuestaModelo": "Un paciente que venía taquipneico y usando músculos accesorios para compensar la falla respiratoria, si de pronto reduce su frecuencia respiratoria sin que mejoren los demás parámetros (gasometría, estado de conciencia), generalmente indica agotamiento de la musculatura respiratoria — ya no tiene fuerza para mantener el esfuerzo compensatorio, no que su situación esté mejorando. Es un signo de insuficiencia respiratoria inminente que requiere soporte ventilatorio urgente."
            }
        }
    
    
  ]
  },

  {
    id: "asma-bronquial",
    nombre: "Asma bronquial",
    area: "Neumología",
    semanas: ["semana-01"],
    favorito: false,
    estudiado: false,
    relacionadas: [
      { id: "epoc", relacion: "Principal diagnóstico diferencial — a diferencia del EPOC, el asma es reversible con broncodilatador y suele iniciar en la infancia" }
    ],
    profundo: {
      definicion: "Enfermedad inflamatoria crónica de la vía aérea caracterizada por hiperreactividad bronquial y obstrucción reversible del flujo aéreo.",
      epidemiologia: "Frecuentemente inicia en la infancia; fuerte asociación con atopia.",
      etiologiaFactoresRiesgo: ["Atopia / historia familiar de alergias", "Exposición a alérgenos (ácaros, pólenes)", "Infecciones virales respiratorias en la infancia"],
      fisiopatologia: {
        resumen: "Inflamación mediada predominantemente por linfocitos Th2 y eosinófilos frente a alérgenos, con hiperreactividad bronquial resultante.",
        explicacionExtendida: "La hiperreactividad bronquial del asma se construye en dos tiempos. En la fase temprana (minutos tras la exposición al alérgeno), los mastocitos ya sensibilizados con IgE específica se degranulan al contacto con el antígeno, liberando histamina, triptasa y leucotrienos que provocan broncoconstricción inmediata, vasodilatación y edema de la mucosa. En la fase tardía (4 a 8 horas después), el infiltrado de eosinófilos y linfocitos Th2 reclutados por las citocinas IL-4, IL-5 e IL-13 mantiene la inflamación, lo que explica por qué los síntomas pueden reaparecer horas después de que pasó el estímulo inicial.\n\nCon episodios repetidos y mal controlados, este ciclo inflamatorio deja de ser completamente reversible: se produce remodelación de la vía aérea — engrosamiento de la membrana basal, hipertrofia del músculo liso bronquial, y angiogénesis submucosa — que reduce progresivamente el calibre basal de la vía aérea incluso fuera de las crisis. Por eso el objetivo del tratamiento controlador no es solo aliviar síntomas puntuales, sino frenar esta inflamación de fondo antes de que se vuelva estructural.",
        cascada: [
          { paso: "Factor desencadenante", detalle: "Alérgeno inhalado / irritante / ejercicio" },
          { paso: "Células activadas", detalle: "Linfocitos Th2, eosinófilos, mastocitos" },
          { paso: "Mediadores liberados", detalle: "IL-4, IL-5, IL-13, histamina, leucotrienos" },
          { paso: "Efecto tisular", detalle: "Broncoconstricción, edema de la mucosa, hipersecreción" },
          { paso: "Cambio fisiológico", detalle: "Estrechamiento reversible de la vía aérea" },
          { paso: "Manifestación clínica", detalle: "Disnea episódica, sibilancias, tos nocturna" }
        ]
      },
      clinica: [{ signo: "Sibilancias episódicas", mecanismo: "Broncoconstricción reversible mediada por mediadores Th2" }],
      examenFisico: ["Sibilancias espiratorias difusas en crisis", "Examen normal en periodos intercrisis"],
      semiologia: {
            "inspeccion": "En crisis: taquipnea, uso de músculos accesorios, posición en trípode (el paciente se inclina hacia adelante apoyando los brazos). Busca signos de gravedad: dificultad para hablar en frases completas, cianosis, alteración del sensorio. Entre crisis, la inspección suele ser completamente normal — por eso el asma se puede pasar por alto si solo examinas cuando el paciente está asintomático.",
            "palpacion": "Expansión torácica generalmente simétrica (a menos que la crisis sea muy severa). El frémito vocal no suele estar alterado de forma característica, a diferencia del EPOC.",
            "percusion": "Normalmente normal entre crisis. Durante una crisis puede haber hipersonoridad leve por atrapamiento aéreo agudo, pero es menos marcada que en EPOC crónico.",
            "auscultacion": "El hallazgo clásico: sibilancias espiratorias difusas y bilaterales, que empeoran con espiración forzada. Dato clínico crítico que debes recordar: el 'silencio auscultatorio' (ausencia de sibilancias en un paciente que sigue con dificultad respiratoria) NO significa mejoría — significa que el flujo de aire es tan bajo que ya no genera sonido. Es un signo de gravedad extrema que requiere manejo inmediato."
      },
      diagnostico: "Espirometría con prueba de broncodilatador: reversibilidad ≥ 12% y 200mL en VEF1.",
      algoritmo: [
            {
                  "tipo": "paso",
                  "texto": "Sospecha clínica: sibilancias + tos + disnea episódica, con desencadenantes claros"
            },
            {
                  "tipo": "paso",
                  "texto": "Espirometría con prueba de broncodilatador"
            },
            {
                  "tipo": "decision",
                  "texto": "¿Reversibilidad ≥12% y 200mL en FEV1 tras broncodilatador?",
                  "salidas": [
                        {
                              "etiqueta": "SÍ",
                              "texto": "Confirma asma → clasificar gravedad según frecuencia de síntomas",
                              "color": "mint"
                        },
                        {
                              "etiqueta": "NO",
                              "texto": "Reconsiderar: EPOC u otra causa de disnea — repetir en otro momento si la sospecha persiste",
                              "color": "coral"
                        }
                  ]
            }
      ],
      diagnosticoDiferencial: ["EPOC", "Reflujo gastroesofágico", "Disfunción de cuerdas vocales"],
      tratamiento: {
        noFarmacologico: ["Evitar alérgenos identificados", "Plan de acción escrito para crisis"],
        farmacologico: ["Corticoide inhalado (base del tratamiento controlador)", "SABA de rescate", "LABA como terapia add-on"]
      },
      complicaciones: ["Estado asmático", "Remodelación de la vía aérea en asma no controlada"],
      prevencion: "Control ambiental de alérgenos y adherencia al tratamiento controlador.",
      perlasProfundo: "La reversibilidad significativa post-broncodilatador es la clave que distingue asma de EPOC en la espirometría.",
      mecanismoEpitelial: "Las células epiteliales de la vía aérea no son solo una barrera física, sino actores inmunológicamente activos. En el asma, esta barrera está alterada por pérdida de proteínas de unión estrecha. Al exponerse a alérgenos, las células epiteliales liberan 'alarminas' (IL-33, TSLP, IL-25) que activan células dendríticas y linfoides innatas tipo 2 (ILC2), iniciando y manteniendo la inflamación alérgica — este es el mecanismo molecular moderno detrás de la cascada Th2 clásica."
    },
    clasificacionGravedad: {
      titulo: "Clasificación de gravedad del asma (según control de síntomas)",
      categorias: [
        { nombre: "Intermitente", criterio: "Síntomas <1 vez/semana, síntomas nocturnos ≤2 veces/mes" },
        { nombre: "Persistente leve", criterio: "Síntomas >1 vez/semana pero <1 vez/día" },
        { nombre: "Persistente moderada", criterio: "Síntomas diarios, síntomas nocturnos >1 vez/semana" },
        { nombre: "Persistente grave", criterio: "Síntomas continuos, síntomas nocturnos frecuentes, limitación de la actividad física" }
      ]
    },
    repaso: {
      conceptosClave: ["Inflamación Th2/eosinofílica", "Obstrucción reversible", "Inicio frecuente en infancia"],
      clinica: "Disnea + sibilancias + tos, episódicas, con desencadenantes claros.",
      diagnostico: "Espirometría con reversibilidad ≥12% y 200mL.",
      tratamientoResumen: "Corticoide inhalado como base + SABA de rescate.",
      diferenciales: [{ entidad: "EPOC", clave: "Poco reversible, tabaquismo, inicio tardío" }],
      tablaComparativa: {
            "titulo": "Asma vs. EPOC (resumen)",
            "filas": [
                  [
                        "Edad de inicio",
                        "Infancia/adolescencia",
                        "> 40 años"
                  ],
                  [
                        "Reversibilidad",
                        "Significativa (≥12%, 200mL)",
                        "Parcial o ausente"
                  ],
                  [
                        "Antecedente típico",
                        "Atopia/alergias",
                        "Tabaquismo"
                  ]
            ]
      }
    },
    imprescindible: {
      loQueSiOSiDebesSaber: ["La reversibilidad post-BD es el dato que distingue asma de EPOC", "El corticoide inhalado es el pilar del tratamiento controlador, no el SABA"],
      redFlags: ["Uso de SABA > 2 veces por semana → mal control, requiere escalar tratamiento", "Silencio auscultatorio en crisis → signo de gravedad extrema"],
      erroresFrecuentes: ["Tratar solo con SABA sin controlador de base"],
      asociacionesClinicas: ["Asma + rinitis alérgica + eccema → tríada atópica"]
    }
  ,
    casosClinicos: [
        {
            "vineta": "Adolescente de 15 años con antecedente de rinitis alérgica y dermatitis atópica en la infancia. Consulta por episodios recurrentes de tos nocturna y sibilancias que se desencadenan con el ejercicio y la exposición al polvo, con resolución espontánea o tras uso de salbutamol. Examen físico entre episodios: normal. Espirometría: FEV1 88% del predicho, FEV1/FVC 0.81; tras salbutamol, FEV1 sube a 104% del predicho.",
            "preguntaMC": {
                "enunciado": "¿Qué porcentaje mínimo de mejoría en el FEV1 post-broncodilatador se considera clínicamente significativo para apoyar el diagnóstico de asma?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "≥5%"
                    },
                    {
                        "id": "b",
                        "texto": "≥12% y 200 mL"
                    },
                    {
                        "id": "c",
                        "texto": "≥25%"
                    },
                    {
                        "id": "d",
                        "texto": "No existe un umbral estandarizado"
                    }
                ],
                "correcta": "b",
                "explicacion": "El criterio estándar de reversibilidad significativa es un aumento ≥12% Y ≥200 mL en el FEV1 (o FVC) tras broncodilatador. En este caso, el FEV1 subió de 88% a 104% (16 puntos porcentuales), superando ampliamente el umbral — consistente con asma."
            },
            "preguntaEscrita": {
                "enunciado": "Este paciente tiene antecedente de rinitis alérgica y dermatitis atópica. Explica cómo se relacionan estas tres condiciones desde el punto de vista fisiopatológico.",
                "respuestaModelo": "Las tres forman parte de la llamada 'marcha atópica' o tríada atópica: comparten una base inmunológica común de hipersensibilidad tipo I mediada por IgE, con predominio de respuesta Th2. En cada órgano (piel, mucosa nasal, vía aérea) la exposición a alérgenos activa mastocitos y eosinófilos a través de IgE específica, liberando histamina y otros mediadores que producen inflamación local — dermatitis en la piel, rinitis en la mucosa nasal, y broncoespasmo/inflamación bronquial en el asma. Por eso es común que un mismo paciente atópico desarrolle las tres a lo largo de la vida."
            },
            "nivel": "basico"
        },
        {
            "nivel": "intermedio",
            "vineta": "Mujer de 28 años, panadera, refiere que desde hace 6 meses presenta tos y opresión torácica que empeora durante su turno laboral y mejora notablemente los fines de semana y en vacaciones. No tiene antecedentes atópicos personales ni familiares.",
            "preguntaMC": {
                "enunciado": "¿Cuál es la sospecha diagnóstica más importante a descartar en este caso?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "Asma ocupacional por sensibilización a harina/polvo de panadería"
                    },
                    {
                        "id": "b",
                        "texto": "EPOC de inicio temprano"
                    },
                    {
                        "id": "c",
                        "texto": "Ansiedad generalizada"
                    },
                    {
                        "id": "d",
                        "texto": "Reflujo gastroesofágico"
                    }
                ],
                "correcta": "a",
                "explicacion": "El patrón temporal (empeora en el trabajo, mejora en días libres/vacaciones) es la clave clásica de asma ocupacional. La panadería es una exposición de alto riesgo conocida por sensibilización a proteínas de harina y alfa-amilasa. No necesita antecedente atópico previo para desarrollarla."
            },
            "preguntaEscrita": {
                "enunciado": "¿Qué le preguntarías específicamente a esta paciente para reforzar la sospecha de asma ocupacional antes de derivarla a estudios especializados?",
                "respuestaModelo": "Preguntaría si los síntomas mejoran claramente los fines de semana y durante vacaciones prolongadas (patrón de mejoría con el alejamiento del agente), si otros compañeros de trabajo presentan síntomas similares, cuánto tiempo lleva expuesta antes del inicio de síntomas, y si existe algún cambio reciente en el proceso de trabajo (nuevo tipo de harina, aditivos). También registraría si usa medidas de protección respiratoria en el puesto de trabajo."
            }
        }
    ,
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
      "definicion": "Son tres entidades relacionadas pero distintas que comparten el síntoma de tos: la bronquitis aguda es una inflamación autolimitada de la vía aérea (generalmente viral); la bronquitis crónica es un diagnóstico clínico definido por tos productiva ≥3 meses al año durante 2 años consecutivos (una vez excluidas otras causas); y las bronquiectasias son una dilatación permanente e irreversible de los bronquios, con un ciclo de inflamación-infección-daño estructural que se autoperpetúa.",
      "epidemiologia": "Bronquitis aguda: 44 casos por 1.000 adultos/año, afecta al 5% de adultos anualmente, novena enfermedad ambulatoria más frecuente en EE.UU. Bronquiectasias: prevalencia ~600 por 100.000 personas, en aumento, con retraso diagnóstico de 3.5 a 17 años desde el inicio de síntomas; más frecuente en mujeres y mayores de 65 años.",
      "etiologiaFactoresRiesgo": [
        "Bronquitis aguda: principalmente viral (solo se aíslan virus en 8-37% de los casos); bacterias típicas (S. pneumoniae, H. influenzae, M. catarrhalis) y atípicas (B. pertussis, C. pneumoniae, M. pneumoniae, ~25%)",
        "Bronquitis crónica: tabaquismo como principal factor de riesgo; también biomasa y contaminantes ambientales",
        "Bronquiectasias — causas hereditarias: fibrosis quística, discinesia ciliar primaria, déficit de alfa-1 antitripsina",
        "Bronquiectasias — postinfecciosas: infecciones respiratorias bajas en la infancia, tos ferina, infecciones granulomatosas",
        "Bronquiectasias — otras: aspiración/reflujo, EPOC/asma mal controlados, enfermedades inflamatorias sistémicas (artritis reumatoide, sarcoidosis)"
      ],
      "fisiopatologia": {
        "resumen": "Bronquitis aguda: inflamación transitoria de la mucosa bronquial que se resuelve. Bronquiectasias: existe un 'círculo vicioso' que se autoalimenta — cada componente empeora a los demás, por eso la enfermedad progresa si no se rompe el ciclo.",
        explicacionExtendida: "Las bronquiectasias se explican mejor con el modelo del 'círculo vicioso' de Cole: un evento inicial (infección grave, aspiración, o un defecto genético del aclaramiento mucociliar) daña el epitelio ciliar de la vía aérea. Con los cilios funcionando mal, las secreciones ya no se movilizan hacia arriba con eficacia, así que se acumulan y se convierten en un medio propicio para la colonización bacteriana crónica — típicamente por Haemophilus influenzae o, en casos avanzados, Pseudomonas aeruginosa.\n\nEsa colonización persistente mantiene reclutados a los neutrófilos en la pared bronquial de forma indefinida. El problema es que la respuesta neutrofílica, en su intento de controlar la infección, libera elastasa y otras proteasas que terminan destruyendo el cartílago y el músculo de la pared bronquial — la misma estructura que debería sostener el calibre de la vía aérea. Al debilitarse la pared, el bronquio se dilata permanentemente, lo que a su vez empeora aún más el aclaramiento de secreciones... y el ciclo se retroalimenta indefinidamente. Por eso las bronquiectasias no se 'curan': el objetivo del tratamiento es romper este círculo (mejorando el aclaramiento y controlando la infección) para frenar su progresión, no revertir el daño estructural ya establecido.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Infección repetida, obstrucción o defecto genético del aclaramiento mucociliar"
          },
          {
            "paso": "Células activadas",
            "detalle": "Neutrófilos con actividad aumentada"
          },
          {
            "paso": "Mediadores liberados",
            "detalle": "Proteasas y citocinas proinflamatorias liberadas por los neutrófilos"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Deterioro del aclaramiento mucociliar → acumulación de secreciones → colonización bacteriana crónica → dilatación bronquial permanente y destrucción de la pared de la vía aérea"
          },
          {
            "paso": "Cambio fisiológico",
            "detalle": "Vía aérea dilatada y dañada que ya no puede limpiarse a sí misma eficazmente — perpetúa el ciclo"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Tos productiva crónica, esputo purulento abundante, exacerbaciones recurrentes"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Tos de reciente aparición >1 semana (bronquitis aguda)",
          "mecanismo": "Inflamación transitoria de la mucosa bronquial tras infección viral"
        },
        {
          "signo": "Esputo purulento abundante, especialmente matutino (bronquiectasias)",
          "mecanismo": "Acumulación de secreciones por aclaramiento mucociliar deteriorado + colonización bacteriana crónica"
        },
        {
          "signo": "Acropaquia / dedos en palillo de tambor (bronquiectasias)",
          "mecanismo": "Hipoxemia crónica e inflamación sistémica de bajo grado sostenida"
        }
      ],
      "examenFisico": [
        "Bronquitis aguda: roncantes, sin signos focales de consolidación",
        "Bronquiectasias: crépitos basales bilaterales persistentes, acropaquia en casos evolucionados"
      ],
      semiologia: {
            "inspeccion": "Bronquitis aguda: paciente con tos, generalmente sin signos de dificultad respiratoria significativa. Bronquiectasias: buscar acropaquia (dedos en palillo de tambor) en casos evolucionados — signo que NO aparece en bronquitis simple ni en EPOC típico, así que si lo ves, orienta fuerte a bronquiectasias.",
            "palpacion": "Generalmente sin hallazgos relevantes en bronquitis aguda. En bronquiectasias con secreciones abundantes, puede palparse frémito aumentado sobre zonas con acumulación de secreciones espesas.",
            "percusion": "Normal en bronquitis aguda. En bronquiectasias localizadas puede haber matidez leve sobre la zona afectada si hay colapso parcial por tapón mucoso.",
            "auscultacion": "Bronquitis aguda: roncantes difusos que pueden cambiar o desaparecer con la tos (dato clave para diferenciarlo de neumonía, donde los crépitos NO cambian con la tos). Bronquiectasias: crépitos gruesos persistentes y localizados en las mismas zonas en exámenes repetidos — la persistencia y localización fija es lo que las distingue de una infección aguda transitoria."
      },

      "diagnostico": "Bronquitis aguda: clínico (ausencia de indicios de neumonía clínica/radiológica). Bronquitis crónica: clínico, por definición temporal (tos productiva ≥3 meses/año × 2 años). Bronquiectasias: TC de alta resolución — estándar de oro; signo característico: relación broncoarterial >1.5 (normal 0.7), 'anillo de sello', falta de estrechamiento bronquial hacia la periferia.",
      algoritmo: [
            {
                  "tipo": "paso",
                  "texto": "Paciente con tos productiva — determinar duración"
            },
            {
                  "tipo": "decision",
                  "texto": "¿Cuánto tiempo lleva la tos y qué muestra la TC?",
                  "salidas": [
                        {
                              "etiqueta": "< 3 semanas",
                              "texto": "Bronquitis aguda — manejo sintomático, sin antibióticos de rutina",
                              "color": "mint"
                        },
                        {
                              "etiqueta": "≥3 meses/año x2 años",
                              "texto": "Bronquitis crónica — evaluar espirometría para descartar EPOC asociado",
                              "color": "coral"
                        },
                        {
                              "etiqueta": "TC: dilatación bronquial fija",
                              "texto": "Bronquiectasias — TC de alta resolución confirma (signo del anillo de sello)",
                              "color": "alert"
                        }
                  ]
            }
      ],
      "diagnosticoDiferencial": [
        "Neumonía (bronquitis aguda)",
        "EPOC",
        "Asma bronquial",
        "Fibrosis quística (en bronquiectasias de inicio temprano)",
        "Tuberculosis"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Cese de tabaquismo (bronquitis crónica)",
          "Técnicas de aclaramiento de la vía aérea — ciclo de respiración activa, presión espiratoria positiva (bronquiectasias)",
          "Ejercicio aeróbico regular"
        ],
        "farmacologico": [
          "Bronquitis aguda: antibióticos NO recomendados de rutina (causa predominantemente viral); si se usan, azitromicina 500mg/día x3 días",
          "Bronquitis crónica estable: sin evidencia suficiente para recomendar antibióticos, broncodilatadores o mucolíticos de rutina para la tos (guía CHEST)",
          "Bronquiectasias — exacerbación: antibióticos guiados por cultivo de esputo, 14 días",
          "Bronquiectasias — terapia crónica: macrólidos 3x/semana si ≥3 exacerbaciones/año; erradicación de Pseudomonas si se aísla"
        ]
      },
      "complicaciones": [
        "Progresión a EPOC (bronquitis crónica no controlada)",
        "Exacerbaciones recurrentes con deterioro funcional progresivo (bronquiectasias)",
        "Hemoptisis (bronquiectasias avanzadas)"
      ],
      "prevencion": "Cese de tabaquismo es la intervención más importante. En bronquiectasias, tratar oportunamente las infecciones respiratorias de la infancia y controlar bien el asma/EPOC de base reduce el riesgo de desarrollarlas.",
      "perlasProfundo": "Antitos, antihistamínicos y expectorantes de venta libre NO tienen utilidad demostrada en bronquitis aguda — y los corticoides orales tampoco deben usarse. El manejo es sintomático y expectante; la tos puede durar 10-14 días y hasta 20% de pacientes tiene síntomas persistentes por 1 mes."
    },
    "repaso": {
      "conceptosClave": [
        "Bronquitis aguda = autolimitada, generalmente viral, tos >1 semana",
        "Bronquitis crónica = definición TEMPORAL (tos productiva ≥3 meses/año × 2 años)",
        "Bronquiectasias = dilatación PERMANENTE, ciclo inflamación-infección-daño que se autoperpetúa"
      ],
      "clinica": "Tos productiva es el hilo común; la diferencia está en duración, cronicidad y hallazgos en imagen (TC en bronquiectasias).",
      "diagnostico": "Bronquitis: clínico. Bronquiectasias: TC de alta resolución (signo del anillo de sello).",
      "tratamientoResumen": "Bronquitis aguda: sintomático, NO antibióticos de rutina. Bronquiectasias: aclaramiento de vía aérea + antibióticos guiados por cultivo en exacerbaciones.",
      "diferenciales": [
        {
          "entidad": "Neumonía",
          "clave": "Presencia de infiltrado radiológico y síndrome de respuesta inflamatoria sistémica — ausente en bronquitis"
        },
        {
          "entidad": "EPOC",
          "clave": "Obstrucción FIJA en espirometría (FEV1/FVC <70% sin reversibilidad); la bronquitis crónica pura no necesariamente tiene obstrucción demostrada"
        }
      ],
      "tablaComparativa": {
        "titulo": "Bronquitis aguda vs. crónica vs. bronquiectasias",
        "filas": [
          [
            "Duración",
            "Días-semanas, autolimitada",
            "≥3 meses/año × 2 años"
          ],
          [
            "Reversibilidad estructural",
            "Sí, se resuelve",
            "No — daño permanente (bronquiectasias)"
          ],
          [
            "Estudio clave",
            "Ninguno (clínico)",
            "TC de alta resolución (bronquiectasias)"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "NO uses antibióticos de rutina en bronquitis aguda — es predominantemente viral",
        "La bronquitis crónica es un diagnóstico CLÍNICO por definición temporal, no por imagen",
        "El signo radiológico clave de bronquiectasias es la relación broncoarterial >1.5 ('anillo de sello') en TC de alta resolución",
        "La acropaquia en un paciente con tos crónica productiva sugiere bronquiectasias, no EPOC (que rara vez la presenta)"
      ],
      "redFlags": [
        "Esputo purulento abundante + acropaquia + infecciones recurrentes desde la infancia → sospechar bronquiectasias, pedir TC",
        "Fiebre alta + infiltrado radiológico en paciente con tos → esto ya NO es bronquitis, es neumonía"
      ],
      "erroresFrecuentes": [
        "Dar antibióticos por rutina en toda bronquitis aguda con tos",
        "Confundir bronquitis crónica con EPOC sin espirometría que confirme obstrucción fija",
        "Pedir espirometría para 'confirmar' bronquiectasias — el estudio correcto es la TC, no la espirometría"
      ],
      "asociacionesClinicas": [
        "Bronquiectasias + infecciones respiratorias recurrentes desde la infancia + acropaquia → pensar en causa hereditaria (fibrosis quística, discinesia ciliar)",
        "Bronquitis crónica + tabaquismo + obstrucción fija en espirometría → esto ya es EPOC fenotipo bronquitis crónica"
      ]
    }
  ,
    casosClinicos: [
        {
            "vineta": "Mujer de 45 años, sin comorbilidades ni tabaquismo, acude por tos seca que inició hace 5 días tras un cuadro catarral (rinorrea, malestar general). No tiene fiebre, no tiene disnea, auscultación con roncantes aislados que se modifican con la tos. Radiografía de tórax: sin infiltrados.",
            "preguntaMC": {
                "enunciado": "¿Cuál es la conducta MÁS apropiada respecto al uso de antibióticos en esta paciente?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "Iniciar amoxicilina empírica por 7 días, ya que toda tos con roncantes sugiere sobreinfección bacteriana"
                    },
                    {
                        "id": "b",
                        "texto": "No indicar antibióticos — el cuadro es compatible con bronquitis aguda, de etiología predominantemente viral"
                    },
                    {
                        "id": "c",
                        "texto": "Solicitar cultivo de esputo antes de decidir"
                    },
                    {
                        "id": "d",
                        "texto": "Indicar azitromicina como primera línea en todos los casos"
                    }
                ],
                "correcta": "b",
                "explicacion": "La bronquitis aguda es predominantemente viral (solo se aísla un patógeno bacteriano en una minoría de casos) y autolimitada. La ausencia de infiltrado radiológico y de criterios de gravedad hace innecesario el uso de antibióticos de rutina — el manejo es sintomático."
            },
            "preguntaEscrita": {
                "enunciado": "¿Qué dato clínico de esta viñeta ayuda a diferenciar bronquitis aguda de neumonía, y por qué es relevante buscarlo activamente en el examen?",
                "respuestaModelo": "La ausencia de infiltrado en la radiografía de tórax es el dato clave que descarta neumonía — la definición de neumonía exige un infiltrado nuevo en imagen, mientras que la bronquitis aguda es un cuadro exclusivamente de la vía aérea de conducción sin compromiso del parénquima. Clínicamente, también apoya la diferencia la ausencia de fiebre y de signos focales de consolidación (matidez, egofonía, crépitos fijos), presentes en la neumonía pero no aquí."
            },
            "nivel": "basico"
        },
        {
            "nivel": "intermedio",
            "vineta": "Varón de 55 años, fumador activo de 30 paquetes-año, consulta por tos productiva persistente 4 meses al año durante los últimos 3 años. Espirometría: FEV1/FVC 0.72 (normal), sin cambios significativos post-broncodilatador.",
            "preguntaMC": {
                "enunciado": "¿Cómo clasificarías este cuadro?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "EPOC, porque tiene tabaquismo significativo"
                    },
                    {
                        "id": "b",
                        "texto": "Bronquitis crónica SIN obstrucción demostrada — el diagnóstico de EPOC requiere FEV1/FVC <0.70, que este paciente no tiene"
                    },
                    {
                        "id": "c",
                        "texto": "Asma bronquial de inicio tardío"
                    },
                    {
                        "id": "d",
                        "texto": "Bronquiectasias, se requiere TC urgente"
                    }
                ],
                "correcta": "b",
                "explicacion": "La bronquitis crónica es un diagnóstico definido por criterios CLÍNICOS temporales (tos productiva ≥3 meses/año x2 años), independiente de la espirometría. Este paciente cumple la definición clínica de bronquitis crónica, pero SU espirometría es normal (FEV1/FVC 0.72 > 0.70), por lo que NO cumple criterios de EPOC — son diagnósticos relacionados pero no sinónimos."
            },
            "preguntaEscrita": {
                "enunciado": "Explica la diferencia conceptual entre 'bronquitis crónica' y 'EPOC' usando este caso como ejemplo.",
                "respuestaModelo": "La bronquitis crónica es una definición puramente clínica basada en la duración y frecuencia de la tos productiva (≥3 meses al año durante 2 años consecutivos), sin importar si hay o no obstrucción al flujo aéreo. El EPOC, en cambio, requiere confirmación espirométrica de obstrucción fija (FEV1/FVC <0.70 post-broncodilatador). Un paciente puede tener bronquitis crónica sin tener EPOC (como este caso, con espirometría normal) — aunque el tabaquismo sostenido aumenta el riesgo de que eventualmente desarrolle la obstrucción y el cuadro evolucione a EPOC fenotipo bronquítico."
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
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "bronquitis-bronquiectasias",
        "relacion": "Diagnóstico diferencial de tos + fiebre — la NAC SÍ tiene infiltrado radiológico nuevo y criterios de respuesta inflamatoria sistémica, la bronquitis NO"
      },
      {
        "id": "neumonia-intrahospitalaria",
        "relacion": "Se distinguen por el lugar y momento de adquisición — NAC es fuera del hospital, la intrahospitalaria se desarrolla >48h después del ingreso"
      }
    ],
    "profundo": {
      "definicion": "Enfermedad aguda causada por una infección del parénquima pulmonar, adquirida fuera del entorno hospitalario. El diagnóstico requiere la combinación de síntomas/signos compatibles MÁS evidencia de un nuevo infiltrado en un estudio de imagen (Rx, TC o ecografía pulmonar).",
      "epidemiologia": "Una de las principales causas de morbimortalidad a nivel mundial: 336.5 millones de infecciones del tracto respiratorio inferior en 2016, con 32.2 muertes por cada 100,000 personas. La mortalidad en pacientes hospitalizados es de 6% a 30 días, incluso tras mejoría clínica inicial (34% en quienes no mejoran o tienen neumonía no resuelta). Hasta 30% de los hospitalizados desarrolla complicaciones cardiovasculares.",
      "etiologiaFactoresRiesgo": [
        "Historia previa de neumonía (OR hasta 6.25) — el factor de riesgo individual más fuerte",
        "Enfermedades cardiovasculares crónicas, EPOC, enfermedad cerebrovascular/demencia",
        "Abuso de alcohol, bajo peso, tabaquismo actual",
        "Bacterias comunes: S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus",
        "Organismos atípicos: Legionella, M. pneumoniae, C. pneumoniae — a pesar de pruebas extensas, la causa solo se identifica en ~1/3 de los pacientes"
      ],
      "fisiopatologia": {
        "resumen": "La neumonía se desarrolla por el balance entre tres factores: susceptibilidad del huésped, virulencia del patógeno, y tamaño del inóculo microbiano. Los patógenos deben vencer varias barreras de defensa (atrapamiento de moco, aclaramiento mucociliar, tos, deglución) antes de alcanzar y colonizar el alvéolo.",
        explicacionExtendida: "Que una persona desarrolle o no una neumonía depende del equilibrio entre tres factores: qué tan virulento es el microorganismo, cuántos microorganismos llegaron al pulmón (el inóculo), y qué tan bien están funcionando las defensas del huésped. Normalmente, el reflejo de tos, el aclaramiento mucociliar, y los macrófagos alveolares residentes eliminan la mayoría de los patógenos que llegan por microaspiración (algo que ocurre incluso en personas sanas mientras duermen). La neumonía se desarrolla cuando ese equilibrio se rompe — por ejemplo, un patógeno particularmente virulento, un inóculo grande, o defensas debilitadas (edad avanzada, EPOC de base, inmunosupresión).\n\nUna vez que el patógeno coloniza el alvéolo, los macrófagos alveolares lo reconocen y liberan citocinas (IL-1, IL-6, TNF-alfa) que reclutan neutrófilos en cascada. Estos neutrófilos, junto con el líquido exudativo rico en fibrina, llenan literalmente el espacio alveolar que normalmente contiene aire — es la consolidación que ves en la radiografía. Cuando esta respuesta inflamatoria se vuelve excesiva o se disemina más allá del pulmón hacia la circulación sistémica, es cuando aparecen las complicaciones más temidas: sepsis y shock séptico, que son la principal causa de mortalidad en neumonía grave, más que el fallo respiratorio en sí mismo.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Microorganismo que vence las defensas de la vía aérea superior (moco, cilios, tos)"
          },
          {
            "paso": "Células activadas",
            "detalle": "Macrófagos alveolares reconocen al patógeno y reclutan neutrófilos"
          },
          {
            "paso": "Mediadores liberados",
            "detalle": "Citocinas proinflamatorias generan la respuesta inflamatoria local y sistémica"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Exudado inflamatorio llena los alvéolos (consolidación) — visible como infiltrado en la radiografía"
          },
          {
            "paso": "Cambio fisiológico",
            "detalle": "El alvéolo lleno de exudado ya no intercambia gases eficazmente — alteración V/Q"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Fiebre, tos productiva, disnea, dolor pleurítico, crépitos a la auscultación"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Fiebre + tos + esputo",
          "mecanismo": "Respuesta inflamatoria sistémica ante la infección del parénquima"
        },
        {
          "signo": "Disnea y dolor torácico pleurítico",
          "mecanismo": "Consolidación alveolar que altera el intercambio gaseoso e irrita la pleura adyacente"
        },
        {
          "signo": "En ancianos: letargo y cambios del estado mental (puede ser la ÚNICA manifestación)",
          "mecanismo": "Presentación atípica por reserva fisiológica reducida"
        }
      ],
      "examenFisico": [
        "Crépitos/estertores en la auscultación",
        "Egofonía y frémito aumentado sobre la zona de consolidación",
        "Taquipnea (FR≥30), taquicardia (FC≥100), SatO2 <95% son predictores de gravedad"
      ],
      semiologia: {
            "inspeccion": "Taquipnea, uso de músculos accesorios si hay compromiso respiratorio significativo, posible cianosis en casos graves. Fíjate en el patrón respiratorio: respiración superficial y rápida por dolor pleurítico si existe compromiso de la pleura adyacente a la consolidación.",
            "palpacion": "Frémito vocal AUMENTADO sobre la zona de consolidación (el tejido consolidado transmite mejor las vibraciones que el aire) — esto es un hallazgo clave que la distingue del derrame pleural, donde el frémito está DISMINUIDO o abolido.",
            "percusion": "Matidez localizada sobre la zona de consolidación (el tejido lleno de exudado inflamatorio ya no contiene aire, por lo que percute 'sólido' en vez de resonante).",
            "auscultacion": "Sobre la zona afectada: crépitos (estertores) que NO cambian con la tos, soplo tubárico si la consolidación es extensa, y egofonía (la voz del paciente suena como 'e' cambiada a 'a' al auscultar mientras dice 'eee' — signo clásico de consolidación). Este set de hallazgos (frémito aumentado + matidez + crépitos fijos + egofonía) todos apuntando al MISMO lado es lo que confirma clínicamente una consolidación antes incluso de ver la radiografía."
      },
      "diagnostico": "Nuevo infiltrado en imagen (Rx/TC/ecografía) + síntomas compatibles + signos de enfermedad del espacio aéreo. Pruebas de laboratorio (hemograma, PCR, procalcitonina) apoyan pero no reemplazan la imagen. Se recomienda NO usar la procalcitonina para decidir si iniciar antibióticos (su sensibilidad varía 38-91%).",
      "algoritmo": [
        { "tipo": "paso", "texto": "Diagnóstico confirmado de NAC (infiltrado nuevo + clínica compatible)" },
        { "tipo": "paso", "texto": "Calcular CURB-65 o PSI (Pneumonia Severity Index)" },
        { "tipo": "decision", "texto": "¿Cuál es el resultado y la estabilidad hemodinámica/respiratoria?", "salidas": [
          { "etiqueta": "CURB-65 0-1", "texto": "Manejo ambulatorio — amoxicilina, doxiciclina o macrólido", "color": "mint" },
          { "etiqueta": "CURB-65 2-5", "texto": "Hospitalización — β-lactámico + macrólido o fluoroquinolona respiratoria", "color": "coral" },
          { "etiqueta": "Shock / requiere VM", "texto": "UCI directo, sin esperar el score — recomendación fuerte", "color": "alert" }
        ]}
      ],
      "diagnosticoDiferencial": [
        "Bronquitis aguda",
        "Tromboembolismo pulmonar",
        "Insuficiencia cardiaca descompensada (edema pulmonar)",
        "Neumonía intrahospitalaria/atípica"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Determinar el lugar de atención con escalas validadas: CURB-65 o PSI (Pneumonia Severity Index)",
          "Vacunación contra influenza y neumococo (prevención, no tratamiento agudo)"
        ],
        "farmacologico": [
          "Ambulatorio sin comorbilidades: amoxicilina 1g c/8h, doxiciclina, o macrólido (solo si resistencia neumocócica local <25%)",
          "Ambulatorio con comorbilidades: amoxi/clavulánico o cefalosporina + macrólido/doxiciclina, o fluoroquinolona respiratoria en monoterapia",
          "Hospitalizado no grave: β-lactámico + macrólido, o fluoroquinolona respiratoria sola",
          "Hospitalizado grave: β-lactámico + macrólido O β-lactámico + fluoroquinolona (recomendación fuerte)",
          "Cobertura SARM/Pseudomonas SOLO si hay factores de riesgo validados localmente (aislamiento previo, hospitalización reciente + antibióticos parenterales en 90 días)",
          "Duración mínima: 5 días, guiada por estabilidad clínica; NO usar corticoides de rutina (sin beneficio demostrado en mortalidad)"
        ]
      },
      "complicaciones": [
        "Derrame paraneumónico (~40% de neumonías bacterianas hospitalizadas)",
        "Complicaciones cardiovasculares (hasta 30% de hospitalizados)",
        "Sepsis / shock séptico",
        "Neumonía no resuelta / progresión a absceso"
      ],
      "prevencion": "Vacuna antineumocócica (PPSV: eficacia 48-64% contra neumonía neumocócica) y vacuna antiinfluenza — esta última reduce significativamente tanto la influenza como la neumonía bacteriana secundaria.",
      "perlasProfundo": "El CURB-65 (Confusión, Urea, frecuencia Respiratoria, presión arterial Baja, edad ≥65) y el PSI son las herramientas de decisión de lugar de tratamiento — pero ninguna reemplaza el juicio clínico. Un paciente con hipotensión que requiere vasopresores o insuficiencia respiratoria que requiere ventilación mecánica va DIRECTO a UCI, sin necesidad de calcular ningún score."
    },
    "repaso": {
      "conceptosClave": [
        "Definición = infección del parénquima + infiltrado NUEVO en imagen + síntomas compatibles",
        "Causa identificable solo en ~1/3 de los casos a pesar de estudios extensos",
        "CURB-65 y PSI determinan el lugar de tratamiento"
      ],
      "clinica": "Fiebre + tos + esputo + disnea + dolor pleurítico; en ancianos puede presentarse solo como confusión.",
      "diagnostico": "Imagen con infiltrado nuevo + clínica compatible. Procalcitonina NO decide el inicio de antibióticos.",
      "tratamientoResumen": "Ambulatorio leve: amoxicilina/doxiciclina/macrólido. Hospitalizado: β-lactámico + macrólido o fluoroquinolona respiratoria. Grave: mismo esquema pero recomendación fuerte, considerar UCI.",
      "diferenciales": [
        {
          "entidad": "Bronquitis aguda",
          "clave": "Sin infiltrado radiológico, sin criterios de respuesta inflamatoria sistémica"
        },
        {
          "entidad": "TEP (tromboembolismo pulmonar)",
          "clave": "Disnea súbita sin fiebre franca, factores de riesgo trombótico, dímero-D"
        }
      ],
      "tablaComparativa": {
        "titulo": "NAC vs. Neumonía intrahospitalaria",
        "filas": [
          [
            "Momento",
            "Fuera del hospital",
            ">48h tras ingreso hospitalario"
          ],
          [
            "Patógenos típicos",
            "S. pneumoniae, atípicos",
            "Multirresistentes (Pseudomonas, Acinetobacter)"
          ],
          [
            "Mortalidad",
            "6% a 30 días",
            "Hasta 70% en NAV grave"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "El diagnóstico SIEMPRE requiere un infiltrado NUEVO en imagen — sin eso, no es NAC",
        "CURB-65 o PSI + juicio clínico determinan si el manejo es ambulatorio, hospitalario o UCI",
        "Hipotensión que requiere vasopresores o necesidad de ventilación mecánica = UCI directo, sin calcular score",
        "NO cubrir empíricamente SARM/Pseudomonas a menos que existan factores de riesgo validados — sobretratar también tiene costo"
      ],
      "redFlags": [
        "SatO2 <90% al aire ambiente + FR≥30 + confusión → NAC grave, alto riesgo de UCI",
        "Hipotensión (PAS<90) en paciente con neumonía → shock séptico hasta demostrar lo contrario"
      ],
      "erroresFrecuentes": [
        "Usar procalcitonina para decidir si dar o no antibióticos (no está validado para esto)",
        "Pedir Rx de control rutinaria en paciente que ya resolvió síntomas a los 5-7 días (rendimiento positivo solo 0.2-5%)",
        "Dar corticoides de rutina en NAC — no hay beneficio demostrado en mortalidad"
      ],
      "asociacionesClinicas": [
        "NAC + alcoholismo + confusión + cianosis → cuadro grave, considerar Legionella y evaluar UCI de inmediato",
        "NAC en paciente joven + pocas comorbilidades + síntomas extrapulmonares → sospechar patógeno atípico (Mycoplasma)"
      ]
    }
  ,
    casosClinicos: [
        {
            "vineta": "Varón de 72 años, con antecedente de diabetes mellitus tipo 2, acude a emergencia por fiebre de 39°C, tos productiva con esputo herrumbroso, y dolor pleurítico derecho de 3 días de evolución. Signos vitales: FR 32/min, FC 108/min, PA 95/60 mmHg, SatO2 89% ambiental. Examen: confuso en tiempo, matidez y crépitos en base derecha, egofonía positiva.",
            "preguntaMC": {
                "enunciado": "Usando el CURB-65, ¿cuántos puntos tiene este paciente y qué conducta corresponde?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "1 punto — manejo ambulatorio"
                    },
                    {
                        "id": "b",
                        "texto": "2 puntos — hospitalización en sala general"
                    },
                    {
                        "id": "c",
                        "texto": "4 puntos (confusión + FR≥30 + PAS<90 + edad≥65) — considerar UCI, no solo hospitalización en sala"
                    },
                    {
                        "id": "d",
                        "texto": "0 puntos — no cumple criterios de gravedad"
                    }
                ],
                "correcta": "c",
                "explicacion": "CURB-65: Confusión (1) + FR≥30 (1) + PAS<90 (1) + edad≥65 (1) = 4 puntos. Urea no está dada pero con 4 criterios claros ya alcanza el rango de alto riesgo (CURB-65 ≥3), lo que obliga a considerar manejo en UCI, no solo hospitalización en sala general — más aún con hipotensión que podría anticipar shock séptico."
            },
            "preguntaEscrita": {
                "enunciado": "Explica por qué este paciente presenta egofonía y matidez en la base derecha, relacionando el hallazgo con lo que ocurre a nivel del parénquima pulmonar.",
                "respuestaModelo": "En la neumonía, el exudado inflamatorio llena los alvéolos, reemplazando el aire que normalmente contienen (consolidación). Esto hace que el tejido pulmonar se comporte de forma más 'sólida' — al percutir, transmite un sonido mate en vez de resonante (matidez), y al auscultar, transmite mejor las vibraciones de la voz, generando el cambio característico de 'e' a 'a' (egofonía) sobre la zona consolidada. Ambos hallazgos reflejan el mismo proceso: pérdida del contenido aéreo normal del parénquima por el exudado inflamatorio."
            },
            "nivel": "avanzado"
        },
        {
            "nivel": "basico",
            "vineta": "Mujer de 30 años, previamente sana, sin comorbilidades, consulta por fiebre de 38.3°C, tos con esputo amarillento y malestar general de 2 días. Signos vitales: FR 18/min, FC 88/min, PA 118/76 mmHg, SatO2 97%. Examen: crépitos aislados en base izquierda. Sin confusión, orientada.",
            "preguntaMC": {
                "enunciado": "Según el CURB-65, ¿cuál es la conducta apropiada?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "CURB-65 = 0 puntos — manejo ambulatorio con antibiótico oral"
                    },
                    {
                        "id": "b",
                        "texto": "CURB-65 = 3 puntos — hospitalización inmediata"
                    },
                    {
                        "id": "c",
                        "texto": "Requiere UCI de entrada por la fiebre"
                    },
                    {
                        "id": "d",
                        "texto": "No se puede calcular el CURB-65 sin urea"
                    }
                ],
                "correcta": "a",
                "explicacion": "CURB-65: sin confusión (0), FR normal (0), PA normal (0), edad <65 (0) = 0 puntos, bajo riesgo. Con datos vitales estables y sin comorbilidad, corresponde manejo ambulatorio con antibiótico oral (amoxicilina, doxiciclina o macrólido según resistencia local)."
            },
            "preguntaEscrita": {
                "enunciado": "¿Qué le indicarías a esta paciente sobre cuándo debe volver a consultar si el tratamiento ambulatorio no funciona?",
                "respuestaModelo": "Le indicaría regresar de inmediato si presenta: dificultad para respirar o aumento marcado de la frecuencia respiratoria, fiebre persistente o en aumento después de 48-72 horas de antibiótico, confusión o somnolencia inusual, dolor torácico intenso, o si no logra mantenerse hidratada por vómitos. También debe completar el antibiótico según indicación aunque se sienta mejor antes de terminar el tratamiento."
            }
        }
    ,
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
    }
  ,
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
    }]
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
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "neumonia-nac",
        "relacion": "Se distinguen por el lugar y momento de adquisición — la intrahospitalaria se desarrolla >48h después del ingreso, con patógenos más resistentes"
      }
    ],
    "profundo": {
      "definicion": "Son dos entidades distintas agrupadas por su dificultad diagnóstica. La neumonía intrahospitalaria (nosocomial) es una infección del parénquima pulmonar por patógenos hospitalarios, que se desarrolla >48h después del ingreso (o hasta 30 días post-alta si hay factores de riesgo). La neumonía atípica es causada por patógenos que NO se detectan con tinción de Gram ni se cultivan con métodos estándar (Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella spp.) — representan >15% de todas las NAC.",
      "epidemiologia": "La mortalidad bruta de la neumonía nosocomial puede llegar a 70% en casos de neumonía asociada a ventilación mecánica (NAV) — aunque la mortalidad ATRIBUIBLE directamente a la infección es menor (~10% según estudios recientes). Mayor mortalidad con Pseudomonas aeruginosa y Acinetobacter spp. La neumonía por Legionella tiene mortalidad ~10%, que sube a 27% sin tratamiento antibiótico adecuado.",
      "etiologiaFactoresRiesgo": [
        "NAAS (neumonía asociada a la atención sanitaria): hospitalización ≥2 días en los últimos 90 días, residencia en centro de cuidados prolongados, diálisis crónica, terapia de infusión domiciliaria",
        "Neumonía nosocomial de inicio tardío: mayor riesgo de patógenos multirresistentes (MDR)",
        "Neumonía atípica — factores según patógeno: M. pneumoniae/C. pneumoniae en pacientes jóvenes con pocas comorbilidades; Legionella en edad avanzada, alcoholismo, inmunosupresión, trasplante"
      ],
      "fisiopatologia": {
        "resumen": "En la neumonía nosocomial, el mecanismo central es la colonización de la vía aérea por flora hospitalaria (frecuentemente resistente) en un huésped con defensas alteradas (intubación, inmovilidad, comorbilidad grave). En la neumonía atípica, los patógenos carecen de pared celular bacteriana clásica (Mycoplasma) o son intracelulares obligados (Chlamydia, Legionella), lo que explica por qué NO responden a beta-lactámicos.",
        explicacionExtendida: "La neumonía asociada a ventilación mecánica tiene un mecanismo bastante distinto al de la neumonía comunitaria: el tubo endotraqueal es, en sí mismo, parte del problema. Alrededor del tubo se forma una biopelícula (biofilm) bacteriana que actúa como reservorio protegido de antibióticos y del sistema inmune; fragmentos de esa biopelícula se desprenden y son microaspirados hacia la vía aérea baja, sorteando por completo las defensas naturales de la vía aérea superior que normalmente filtrarían esos microorganismos. Por eso los patógenos típicos de neumonía nosocomial (Pseudomonas, Acinetobacter, enterobacterias) tienden a ser más resistentes: se seleccionan bajo la presión de antibióticos previos y el ambiente hospitalario.\n\nLa neumonía atípica sigue una lógica biológica completamente distinta. Mycoplasma pneumoniae carece de pared celular bacteriana clásica (por eso los beta-lactámicos, que actúan inhibiendo la síntesis de esa pared, no le hacen nada). Chlamydia pneumoniae y Legionella son patógenos intracelulares obligados o facultativos: se replican dentro de las propias células del huésped, escondidos de anticuerpos y de muchos antibióticos que no penetran bien la membrana celular. Esto explica por qué el tratamiento de elección son los macrólidos y las tetraciclinas — antibióticos que sí logran concentrarse dentro de las células e interferir con la síntesis de proteínas del patógeno desde adentro.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Intubación/ventilación mecánica o colonización por flora multirresistente del ambiente hospitalario"
          },
          {
            "paso": "Célula afectada",
            "detalle": "Defensas mucociliares alteradas por el tubo endotraqueal; barrera epitelial comprometida"
          },
          {
            "paso": "Mediadores/patógeno",
            "detalle": "Patógenos MDR (Pseudomonas, Acinetobacter) o atípicos intracelulares evaden mecanismos de defensa estándar"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Consolidación pulmonar con patógenos difíciles de erradicar por resistencia antibiótica o localización intracelular"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Fiebre, secreciones traqueales purulentas (nosocomial) o cuadro más insidioso con síntomas extrapulmonares (atípica)"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Fiebre + secreciones traqueales abundantes en paciente hospitalizado/intubado",
          "mecanismo": "Colonización e infección por flora hospitalaria en vía aérea con defensas alteradas por el tubo endotraqueal"
        },
        {
          "signo": "Tos persistente + síntomas extrapulmonares (atípica)",
          "mecanismo": "Patógeno intracelular que genera respuesta inflamatoria sistémica más que consolidación focal clásica"
        }
      ],
      "examenFisico": [
        "Nosocomial: nuevo infiltrado + secreciones purulentas + hipoxemia en paciente ya hospitalizado",
        "Atípica: auscultación pulmonar frecuentemente pobre en hallazgos pese a síntomas — 'disociación clínico-radiológica'"
      ],
      semiologia: {
            "inspeccion": "En paciente ventilado: secreciones traqueales purulentas visibles al aspirar, desaturación progresiva en el monitor, fiebre nueva. En paciente no intubado con neumonía atípica: examen a veces sorprendentemente 'pobre' en hallazgos pese a síntomas — la llamada disociación clínico-radiológica (te ves con poco al examinar pero la Rx muestra bastante, o al revés).",
            "palpacion": "En nosocomial: similar a NAC si hay consolidación franca (frémito aumentado). En atípica: con frecuencia poco llamativa, otro reflejo de la disociación clínico-radiológica típica de estos patógenos.",
            "percusion": "Matidez localizada si hay consolidación establecida; puede ser sutil en fases tempranas de neumonía atípica.",
            "auscultacion": "Nosocomial: similar a NAC — crépitos localizados, posible soplo tubárico. Atípica: auscultación con frecuencia normal o con hallazgos mínimos (roncantes leves) a pesar de tos persistente — este contraste entre 'poco que auscultar' y 'mucha tos/síntomas sistémicos' es justamente lo que debe hacerte sospechar un patógeno atípico en vez de bacteriano típico."
      },
      "diagnostico": "Nosocomial: cultivo de muestra respiratoria (distal o proximal) ANTES de iniciar/cambiar antibiótico. Atípica: diagnóstico presuntivo por criterios clínicos (edad <60, sin comorbilidades, tos persistente, sin ruidos adventicios, leucocitos <10,000) — el cultivo estándar no sirve porque estos patógenos no crecen en medios convencionales.",
      algoritmo: [
            {
                  "tipo": "paso",
                  "texto": "Fiebre nueva + secreciones purulentas en paciente hospitalizado >48h"
            },
            {
                  "tipo": "paso",
                  "texto": "Tomar cultivo de vía respiratoria baja ANTES de iniciar/cambiar antibiótico (sin retrasar tratamiento si está grave)"
            },
            {
                  "tipo": "decision",
                  "texto": "¿Tiene factores de riesgo para patógenos multirresistentes (MDR) o shock séptico?",
                  "salidas": [
                        {
                              "etiqueta": "Bajo riesgo",
                              "texto": "Antibiótico de espectro reducido",
                              "color": "mint"
                        },
                        {
                              "etiqueta": "Alto riesgo / shock séptico",
                              "texto": "Antibiótico empírico de amplio espectro (recomendación fuerte)",
                              "color": "alert"
                        }
                  ]
            }
      ],
      "diagnosticoDiferencial": [
        "Neumonía adquirida en la comunidad",
        "Tromboembolismo pulmonar (en paciente hospitalizado con fiebre nueva)",
        "Atelectasia"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Obtener cultivo respiratorio ANTES de iniciar tratamiento cuando sea posible, sin retrasar el inicio de antibióticos en pacientes graves",
          "Reevaluar y desescalar terapia al día 3 según resultados de cultivo"
        ],
        "farmacologico": [
          "Nosocomial de bajo riesgo (inicio temprano, sin factores MDR): antibiótico de espectro reducido",
          "Nosocomial de alto riesgo (shock séptico, hospital con alta tasa de resistencia): antibiótico empírico de amplio espectro, recomendación fuerte",
          "Atípica: macrólidos o tetraciclinas (interfieren la síntesis proteica bacteriana) — los beta-lactámicos NO sirven porque estos patógenos carecen de pared celular",
          "M. pneumoniae grave/refractaria: considerar corticoides si LDH sérica 302-364 UI/L (criterio para iniciar terapia antiinflamatoria)"
        ]
      },
      "complicaciones": [
        "Shock séptico",
        "Falla respiratoria que requiere ventilación mecánica prolongada",
        "Resistencia antimicrobiana progresiva (M. pneumoniae resistente a macrólidos, documentado desde 2000)"
      ],
      "prevencion": "Medidas de control de infecciones hospitalarias (higiene de manos, protocolos de manejo de vía aérea en ventilación mecánica) para reducir NAV. No existe vacuna específica para la mayoría de patógenos atípicos.",
      "perlasProfundo": "La duración estándar de tratamiento en neumonía nosocomial es 7-8 días — MÁS CORTO de lo que muchos asumen, salvo en casos de Pseudomonas/no fermentadores, inmunocompromiso severo, o terapia inicial inapropiada, donde sí se individualiza a plazos más largos."
    },
    "repaso": {
      "conceptosClave": [
        "Nosocomial = >48h post-ingreso hospitalario, patógenos frecuentemente MDR",
        "Atípica = no crece en cultivo estándar, no tiene pared celular clásica → no responde a beta-lactámicos",
        "El cultivo respiratorio se toma ANTES de iniciar antibiótico, sin retrasar el tratamiento en pacientes graves"
      ],
      "clinica": "Nosocomial: fiebre + secreciones purulentas en paciente ya hospitalizado. Atípica: tos persistente con auscultación relativamente pobre (disociación clínico-radiológica).",
      "diagnostico": "Nosocomial: cultivo de vía respiratoria baja. Atípica: criterios clínicos presuntivos (edad, comorbilidad, leucocitos).",
      "tratamientoResumen": "Nosocomial: espectro reducido si bajo riesgo, amplio espectro si shock séptico/hospital de alta resistencia. Atípica: macrólidos o tetraciclinas, NUNCA beta-lactámicos solos.",
      "diferenciales": [
        {
          "entidad": "NAC",
          "clave": "Se adquiere fuera del hospital, sin el mismo riesgo de patógenos MDR"
        },
        {
          "entidad": "TEP",
          "clave": "Fiebre nueva en hospitalizado con disnea súbita — considerar siempre en el diferencial de 'neumonía nueva' intrahospitalaria"
        }
      ],
      "tablaComparativa": {
            "titulo": "Neumonía nosocomial vs. atípica",
            "filas": [
                  [
                        "Momento típico",
                        ">48h post-ingreso hospitalario",
                        "Puede ser comunitaria, curso insidioso"
                  ],
                  [
                        "Cultivo estándar",
                        "Sí sirve (bacterias típicas)",
                        "NO sirve (no crece en medios estándar)"
                  ],
                  [
                        "Tratamiento base",
                        "β-lactámico ± cobertura MDR",
                        "Macrólidos o tetraciclinas (sin pared celular)"
                  ]
            ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "Neumonía atípica NO responde a beta-lactámicos — usa macrólidos o tetraciclinas",
        "En sospecha de NAV, toma cultivo respiratorio ANTES de iniciar antibiótico, pero NO retrases el tratamiento en pacientes graves esperando el resultado",
        "La duración estándar de tratamiento en nosocomial es 7-8 días, no más — salvo excepciones específicas",
        "Legionella se presenta como neumonía grave de progresión rápida, con mortalidad hasta 27% sin tratamiento adecuado"
      ],
      "redFlags": [
        "Fiebre nueva + secreciones purulentas en paciente intubado >48h → sospechar NAV, tomar cultivo de inmediato",
        "Hiponatremia + tos seca + cuadro respiratorio → pensar en Legionella"
      ],
      "erroresFrecuentes": [
        "Tratar neumonía atípica con beta-lactámicos solos (no tienen pared celular que atacar)",
        "Prolongar tratamiento más allá de 7-8 días sin causa que lo justifique (aumenta resistencia sin beneficio)",
        "No tomar cultivo antes de iniciar antibiótico cuando el paciente lo permite"
      ],
      "asociacionesClinicas": [
        "Neumonía intrahospitalaria + Pseudomonas o Acinetobacter → mayor mortalidad asociada, requiere cobertura de amplio espectro",
        "Neumonía atípica + paciente joven + síntomas extrapulmonares → Mycoplasma como primera sospecha"
      ]
    }
  ,
    casosClinicos: [
        {
            "vineta": "Paciente de 68 años, en UCI con ventilación mecánica por 6 días tras una cirugía abdominal complicada. El día 6 presenta fiebre de 38.6°C, aumento de secreciones traqueales purulentas, y nuevo infiltrado en radiografía de tórax. Hemodinámicamente estable, sin requerimiento de vasopresores.",
            "preguntaMC": {
                "enunciado": "¿Cuál es el paso MÁS apropiado antes de iniciar o ajustar el tratamiento antibiótico?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "Iniciar de inmediato cobertura de amplísimo espectro para Pseudomonas y SARM sin cultivo previo"
                    },
                    {
                        "id": "b",
                        "texto": "Obtener cultivo de una muestra respiratoria antes de iniciar el antibiótico, ya que el paciente está hemodinámicamente estable y esto no debe retrasar significativamente el inicio"
                    },
                    {
                        "id": "c",
                        "texto": "Esperar 48 horas de observación antes de tomar cualquier decisión"
                    },
                    {
                        "id": "d",
                        "texto": "No es necesario cultivo porque el diagnóstico es únicamente clínico-radiológico"
                    }
                ],
                "correcta": "b",
                "explicacion": "Al estar hemodinámicamente estable (sin shock séptico ni requerimiento de vasopresores), hay margen para obtener el cultivo respiratorio antes de iniciar el antibiótico empírico, lo que permite un tratamiento dirigido más preciso y evita sobretratamiento de amplio espectro innecesario. Si el paciente estuviera en shock séptico, el antibiótico no debería esperar al cultivo."
            },
            "preguntaEscrita": {
                "enunciado": "¿Qué elementos de esta viñeta clasificarías como factores de riesgo para patógenos multirresistentes (MDR), y cómo influirían en tu elección antibiótica inicial?",
                "respuestaModelo": "El principal factor de riesgo aquí es el tiempo de ventilación mecánica (6 días) — se considera neumonía nosocomial de inicio tardío (>4-5 días), lo cual se asocia a mayor probabilidad de patógenos multirresistentes como Pseudomonas aeruginosa o Acinetobacter, en comparación con la neumonía de inicio temprano. Esto orientaría a iniciar cobertura empírica de espectro más amplio mientras se esperan los resultados del cultivo, ajustando luego según el antibiograma."
            },
            "nivel": "intermedio"
        },
        {
            "nivel": "basico",
            "vineta": "Paciente hospitalizado hace 24 horas por una fractura de cadera, sin ventilación mecánica, presenta fiebre de 38°C y tos con expectoración. Radiografía de tórax: sin infiltrados nuevos.",
            "preguntaMC": {
                "enunciado": "¿Este cuadro cumple criterios de neumonía nosocomial?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "Sí, porque está hospitalizado y tiene fiebre"
                    },
                    {
                        "id": "b",
                        "texto": "No — la neumonía nosocomial requiere inicio >48 horas tras el ingreso, y este paciente lleva solo 24 horas; además no hay infiltrado nuevo confirmado"
                    },
                    {
                        "id": "c",
                        "texto": "Sí, porque tiene tos con expectoración"
                    },
                    {
                        "id": "d",
                        "texto": "Es imposible saberlo sin cultivo"
                    }
                ],
                "correcta": "b",
                "explicacion": "Dos elementos descartan neumonía nosocomial aquí: el tiempo (menos de 48h desde el ingreso, criterio temporal obligatorio) y la ausencia de infiltrado radiológico nuevo (criterio diagnóstico esencial de cualquier neumonía). Debe buscarse otra causa de fiebre postoperatoria."
            },
            "preguntaEscrita": {
                "enunciado": "Además de una neumonía, ¿qué otras causas de fiebre postoperatoria temprana deberías considerar en este paciente?",
                "respuestaModelo": "En el postoperatorio temprano (primeras 48-72h) las causas más frecuentes de fiebre suelen resumirse con la regla mnemotécnica de las '5 W': Wind (atelectasias/complicación pulmonar no infecciosa), Water (infección urinaria, sobre todo si tiene sonda vesical), Wound (infección de la herida quirúrgica, aunque es más típica después de las 72h), Walking (tromboembolismo venoso, relevante en fractura de cadera por inmovilización), y Wonder drugs (fiebre medicamentosa). En este caso, con fractura de cadera, también sería prioritario descartar trombosis venosa profunda/TEP dado el alto riesgo trombótico de la inmovilización."
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
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "neumonia-nac",
        "relacion": "Diagnóstico diferencial importante en tos crónica con pérdida de peso — la TB tiene curso más insidioso (semanas), la NAC es aguda (días)"
      }
    ],
    "profundo": {
      "definicion": "Enfermedad infecciosa causada por Mycobacterium tuberculosis (bacilo de Koch), que afecta principalmente el parénquima pulmonar aunque puede diseminarse a cualquier órgano. El ser humano es el único reservorio conocido; la micobacteria actúa como parásito intracelular que infecta sin destruir rápidamente a su huésped, lo que le permite persistir y transmitirse a otras personas durante meses o años si no se trata.",
      "epidemiologia": "Aproximadamente una cuarta parte de la población mundial está infectada por M. tuberculosis (infección latente, no enfermedad activa). Cada año se infectan más de 10 millones de personas y ocurren 1.6 millones de muertes anuales — es la enfermedad infecciosa con mayor mortalidad causada por un único agente a nivel mundial. Afecta predominantemente a población económicamente activa, y su control es un reto de salud pública por la resistencia a fármacos y su asociación con VIH y diabetes mellitus.",
      "etiologiaFactoresRiesgo": [
        "Contacto cercano y prolongado con un caso bacilífero (transmisión por aerosoles de 0.65-7 μm expulsados al toser)",
        "Inmunosupresión — VIH/SIDA es el factor de riesgo más potente para progresión de infección latente a enfermedad activa",
        "Diabetes mellitus",
        "Desnutrición y hacinamiento",
        "Silicosis y otras neumoconiosis",
        "Uso de corticoides sistémicos o terapia biológica inmunosupresora"
      ],
      "fisiopatologia": {
        "resumen": "La micobacteria es fagocitada por macrófagos alveolares, células dendríticas y neutrófilos, pero tiene la capacidad de evadir la destrucción bloqueando la maduración del fagosoma e impidiendo su fusión con el lisosoma. El sistema inmune responde formando granulomas para contener la infección, lo que en la mayoría de los casos resulta en infección latente (contenida pero no eliminada) en vez de enfermedad activa inmediata.",
        "explicacionExtendida": "Cuando una persona inhala el bacilo, este llega hasta los alvéolos y es fagocitado por los macrófagos alveolares — el primer paso normal de defensa contra cualquier patógeno inhalado. Sin embargo, M. tuberculosis tiene un mecanismo de evasión inmunitaria muy particular: en vez de ser destruido dentro del fagosoma, bloquea activamente su maduración e impide que se acidifique y se fusione con el lisosoma, evitando así ser degradado. Esto le permite sobrevivir e incluso replicarse dentro del propio macrófago que se suponía debía eliminarlo.\n\nAnte esta persistencia, el sistema inmune organiza una respuesta de contención: células T, macrófagos activados y otras células inmunitarias se agrupan formando el granuloma característico, cuya capa externa está compuesta por linfocitos y fibroblastos que 'encapsulan' el foco infeccioso, muchas veces con necrosis caseosa central. En la mayoría de las personas inmunocompetentes, este granuloma logra contener la infección de forma indefinida — es lo que se llama infección tuberculosa latente (ILTB): la persona está infectada pero no tiene enfermedad activa ni transmite la bacteria. El riesgo real aparece cuando ese equilibrio se rompe (por inmunosupresión, desnutrición, VIH, edad avanzada, diabetes): el granuloma pierde su capacidad de contención, los bacilos se reactivan y proliferan, y la enfermedad se vuelve activa — con capacidad de causar daño tisular real y de transmitirse a otras personas.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Inhalación de bacilos de M. tuberculosis en aerosoles expulsados por un caso bacilífero"
          },
          {
            "paso": "Células activadas",
            "detalle": "Macrófagos alveolares, células dendríticas y neutrófilos fagocitan al bacilo"
          },
          {
            "paso": "Evasión inmunitaria",
            "detalle": "El bacilo bloquea la maduración del fagosoma e impide su fusión con el lisosoma — sobrevive dentro del macrófago"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Formación de granuloma con necrosis caseosa central para contener la infección"
          },
          {
            "paso": "Cambio fisiológico",
            "detalle": "Infección latente contenida (mayoría de los casos) o reactivación si el sistema inmune se debilita"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Tos crónica, pérdida de peso, sudoración nocturna, febrícula — solo si progresa a enfermedad activa"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Tos crónica (>2 semanas)",
          "mecanismo": "Irritación e inflamación de la vía aérea por el proceso infeccioso-granulomatoso activo"
        },
        {
          "signo": "Pérdida de peso y sudoración nocturna",
          "mecanismo": "Respuesta inflamatoria sistémica sostenida (citocinas como TNF-alfa) que aumenta el catabolismo"
        },
        {
          "signo": "Hemoptisis",
          "mecanismo": "Erosión de vasos sanguíneos por cavitación del parénquima pulmonar en enfermedad avanzada"
        }
      ],
      "examenFisico": [
        "Adelgazamiento / caquexia en casos avanzados",
        "Crépitos en vértices pulmonares (localización típica por la mayor tensión de oxígeno apical)",
        "Matidez si hay derrame pleural asociado"
      ],
      "semiologia": {
        "inspeccion": "Observa el estado nutricional general — la caquexia es frecuente en TB avanzada ('tisis', término histórico). Busca palidez, y en casos con compromiso pleural, asimetría en la expansión torácica.",
        "palpacion": "Expansión torácica puede estar disminuida en el lado afectado si hay derrame pleural asociado o fibrosis apical extensa. Frémito vocal aumentado sobre zonas de consolidación, disminuido sobre derrame.",
        "percusion": "Habitualmente normal en enfermedad localizada leve. Matidez si hay derrame pleural tuberculoso asociado (complicación frecuente).",
        "auscultacion": "Crépitos localizados típicamente en los vértices pulmonares (a diferencia de la neumonía típica, que predomina en bases) — esto refleja la localización preferencial de la reactivación tuberculosa en los lóbulos superiores, zona de mayor tensión de oxígeno."
      },
      "diagnostico": "Baciloscopía de esputo (2 muestras) como prueba inicial de tamizaje; prueba molecular (Xpert MTB/RIF) para diagnóstico rápido y detección simultánea de resistencia a rifampicina; cultivo (método de referencia, más sensible pero demora semanas). Radiografía de tórax: infiltrados cavitados típicamente en lóbulos superiores.",
      "algoritmo": [
        {
          "tipo": "paso",
          "texto": "Sintomático respiratorio: tos ≥2 semanas — sospecha de TB"
        },
        {
          "tipo": "paso",
          "texto": "Solicitar baciloscopía de esputo (2 muestras) + prueba molecular rápida si está disponible"
        },
        {
          "tipo": "decision",
          "texto": "¿Resultado de las pruebas?",
          "salidas": [
            {
              "etiqueta": "Baciloscopía/molecular positiva",
              "texto": "Caso confirmado — iniciar tratamiento antituberculoso estandarizado (esquema NTS 200-MINSA 2023) y notificar",
              "color": "alert"
            },
            {
              "etiqueta": "Negativa pero alta sospecha clínico-radiológica",
              "texto": "Solicitar cultivo (más sensible) — no descartar TB solo con baciloscopía negativa",
              "color": "coral"
            },
            {
              "etiqueta": "Negativa y baja sospecha",
              "texto": "Buscar diagnóstico alternativo",
              "color": "mint"
            }
          ]
        }
      ],
      "diagnosticoDiferencial": [
        "Neumonía adquirida en la comunidad (curso agudo vs. insidioso)",
        "Cáncer de pulmón",
        "Micosis pulmonares",
        "Sarcoidosis"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Aislamiento respiratorio hasta negativización bacteriológica en casos bacilíferos",
          "Consejería y apoyo nutricional",
          "Estudio de contactos e investigación de casos secundarios"
        ],
        "farmacologico": [
          "Esquema estandarizado según NTS N°200-MINSA/DGIESP-2023: primera fase (2 meses) con Rifampicina + Isoniazida + Pirazinamida + Etambutol diario, seguida de segunda fase (4 meses) con Rifampicina + Isoniazida",
          "Dosis ajustadas por peso según la norma técnica vigente — no se deben improvisar dosis",
          "Tratamiento Directamente Observado (DOTS/TAES) para asegurar adherencia completa",
          "En sospecha o confirmación de resistencia (TB-MDR/XDR): esquemas especializados totalmente orales, manejo por especialista"
        ]
      },
      "complicaciones": [
        "Derrame pleural tuberculoso",
        "Hemoptisis masiva por erosión vascular",
        "Fibrosis pulmonar residual",
        "Diseminación miliar (hematógena) en inmunosuprimidos",
        "Resistencia a fármacos (TB-MDR/XDR) por tratamiento incompleto o irregular"
      ],
      "prevencion": "Vacuna BCG al nacer (protege principalmente contra formas graves en la infancia, protección variable contra TB pulmonar del adulto). Terapia preventiva con isoniazida en contactos e infección latente de alto riesgo. Medidas de control de infecciones (ventilación, mascarillas) en establecimientos de salud.",
      "perlasProfundo": "La localización preferencial en vértices pulmonares (a diferencia de la neumonía bacteriana típica de bases) se explica por la mayor tensión de oxígeno en los ápices — M. tuberculosis es un aerobio estricto que prolifera mejor donde hay más oxígeno disponible."
    },
    "repaso": {
      "conceptosClave": [
        "1/4 de la población mundial tiene infección latente, no enfermedad activa",
        "El bacilo evade al macrófago bloqueando la fusión fagosoma-lisosoma",
        "Localización típica: vértices pulmonares (mayor tensión de O2)"
      ],
      "clinica": "Tos crónica >2 semanas + pérdida de peso + sudoración nocturna + febrícula — curso insidioso de semanas a meses.",
      "diagnostico": "Baciloscopía + prueba molecular (Xpert MTB/RIF) ± cultivo. Rx: cavitaciones en lóbulos superiores.",
      "tratamientoResumen": "Esquema NTS-MINSA 2023: 2 meses RHZE diario + 4 meses RH — siempre DOTS/TAES para asegurar adherencia.",
      "diferenciales": [
        {
          "entidad": "Neumonía adquirida en la comunidad",
          "clave": "TB es insidiosa (semanas), NAC es aguda (días); TB predomina en vértices, NAC en bases"
        },
        {
          "entidad": "Cáncer de pulmón",
          "clave": "Ambos pueden cavitar y perder peso — biopsia/cultivo son clave para diferenciar"
        }
      ],
      "tablaComparativa": {
        "titulo": "TB pulmonar vs. NAC",
        "filas": [
          [
            "Curso",
            "Insidioso (semanas)",
            "Agudo (días)"
          ],
          [
            "Localización típica",
            "Vértices pulmonares",
            "Bases pulmonares"
          ],
          [
            "Síntomas sistémicos",
            "Pérdida de peso, sudoración nocturna",
            "Fiebre alta, escalofríos"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "Todo sintomático respiratorio (tos ≥2 semanas) debe estudiarse para TB",
        "Una baciloscopía negativa NO descarta TB si la sospecha clínico-radiológica es alta — pedir cultivo",
        "El tratamiento SIEMPRE debe ser supervisado (DOTS/TAES) — el abandono es la principal causa de resistencia",
        "La localización en vértices pulmonares es un dato semiológico clave a diferencia de la neumonía típica"
      ],
      "redFlags": [
        "Hemoptisis en paciente con TB conocida o sospechada → posible erosión vascular, requiere evaluación urgente",
        "Paciente VIH positivo con síntomas respiratorios → umbral de sospecha de TB debe ser muy bajo"
      ],
      "erroresFrecuentes": [
        "Descartar TB solo por una baciloscopía negativa",
        "No investigar contactos del caso índice",
        "Modificar el esquema de tratamiento sin indicación de especialista"
      ],
      "asociacionesClinicas": [
        "TB + derrame pleural unilateral exudativo con ADA elevado → altamente sugestivo de pleuritis tuberculosa",
        "TB + VIH → mayor riesgo de formas atípicas y diseminadas (miliar)"
      ]
    },
    "casosClinicos": [
      {
        "nivel": "intermedio",
        "vineta": "Varón de 32 años, procedente de zona urbana marginal, consulta por tos productiva de 2 meses, pérdida de peso de 6 kg y sudoración nocturna. Al examen: adelgazado, crépitos en vértices pulmonares.",
        "preguntaMC": {
          "enunciado": "¿Cuál es el estudio inicial más apropiado para confirmar la sospecha diagnóstica?",
          "opciones": [
            {
              "id": "a",
              "texto": "Hemograma completo únicamente"
            },
            {
              "id": "b",
              "texto": "Baciloscopía de esputo (2 muestras) y/o prueba molecular rápida"
            },
            {
              "id": "c",
              "texto": "Broncoscopía de entrada, sin estudios previos"
            },
            {
              "id": "d",
              "texto": "Iniciar antibiótico empírico para neumonía y reevaluar en una semana"
            }
          ],
          "correcta": "b",
          "explicacion": "Ante todo sintomático respiratorio (tos ≥2 semanas) con datos sugestivos de TB (pérdida de peso, sudoración nocturna, localización apical), el estudio inicial estándar es la baciloscopía de esputo, idealmente complementada con prueba molecular rápida (Xpert MTB/RIF) que además detecta resistencia a rifampicina."
        },
        "preguntaEscrita": {
          "enunciado": "¿Qué hallazgo esperarías en la radiografía de tórax de este paciente, y por qué se localiza ahí?",
          "respuestaModelo": "Esperaría infiltrados cavitados en los lóbulos superiores (vértices pulmonares). Esto se debe a que M. tuberculosis es un aerobio estricto que prolifera mejor en zonas con mayor tensión de oxígeno, y los vértices pulmonares tienen precisamente mayor ventilación relativa a perfusión (mayor PO2 local) que las bases — por eso la reactivación tuberculosa tiene esa localización característica, a diferencia de procesos infecciosos típicos como la neumonía bacteriana, que predominan en las bases."
        }
      }
    ,
    {
        "nivel": "avanzado",
        "vineta": "Varón de 40 años, VIH positivo con mal control (últimos CD4: 180 cel/mm3), consulta por tos de 3 semanas, fiebre y pérdida de peso marcada. Radiografía de tórax: infiltrado difuso bilateral, sin cavitación clara. Baciloscopía de esputo: negativa en 2 muestras.",
        "preguntaMC": {
            "enunciado": "¿Qué interpretación es la más correcta ante esta baciloscopía negativa?",
            "opciones": [
                {
                    "id": "a",
                    "texto": "Descarta definitivamente tuberculosis, buscar otro diagnóstico"
                },
                {
                    "id": "b",
                    "texto": "En pacientes VIH positivos con inmunosupresión avanzada, la presentación radiológica es frecuentemente atípica (sin cavitación) y la baciloscopía tiene menor sensibilidad — se debe insistir con prueba molecular rápida y/o cultivo antes de descartar TB"
                },
                {
                    "id": "c",
                    "texto": "Repetir la baciloscopía en 6 meses"
                },
                {
                    "id": "d",
                    "texto": "Iniciar tratamiento para neumonía bacteriana únicamente"
                }
            ],
            "correcta": "b",
            "explicacion": "En la inmunosupresión avanzada (CD4 bajo), la TB pulmonar frecuentemente se presenta de forma atípica —con infiltrados difusos en vez de cavitación apical clásica— y la baciloscopía (que depende de una buena carga bacilar visible) pierde sensibilidad. La prueba molecular (Xpert MTB/RIF) y el cultivo son más sensibles y deben priorizarse antes de descartar TB en este contexto de alta sospecha."
        },
        "preguntaEscrita": {
            "enunciado": "¿Por qué la presentación radiológica de la tuberculosis cambia en pacientes con inmunosupresión avanzada por VIH?",
            "respuestaModelo": "La localización apical clásica y la cavitación de la TB dependen en gran parte de una respuesta inmune celular relativamente intacta que forma granulomas bien organizados con necrosis caseosa. En la inmunosupresión avanzada por VIH, con conteos de CD4 muy bajos, el sistema inmune ya no logra montar esa respuesta granulomatosa organizada — por eso la enfermedad tiende a diseminarse de forma más difusa (patrón miliar o infiltrados difusos) en vez de formar las cavidades apicales clásicas, y la enfermedad extrapulmonar también es más frecuente en este contexto."
        }
    }
  
    
  ,
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
    }]
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
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "neumonia-nac",
        "relacion": "El derrame paraneumónico es una complicación frecuente de la NAC (hasta 40% de las neumonías bacterianas hospitalizadas) — puede evolucionar a empiema si no se trata"
      }
    ],
    "profundo": {
      "definicion": "Grupo de condiciones que comparten la afectación del espacio pleural, el espacio virtual entre la pleura visceral y parietal. El neumotórax es la acumulación de aire en ese espacio; el hemotórax, de sangre; el derrame pleural, de líquido (trasudado o exudado); y el empiema es un derrame pleural infectado con pus franco.",
      "epidemiologia": "El neumotórax espontáneo primario tiene una incidencia de 4 por 100,000 hombres y 1.1 por 100,000 mujeres, típicamente en varones jóvenes altos y delgados. El derrame paraneumónico complica hasta 40% de las neumonías bacterianas que requieren hospitalización.",
      "etiologiaFactoresRiesgo": [
        "Neumotórax primario: ruptura espontánea de bullas subpleurales en varones jóvenes altos y delgados, tabaquismo/vapeo, maniobra de Valsalva",
        "Neumotórax secundario: enfermedad pulmonar de base (EPOC, fibrosis quística, asma), síndromes genéticos (Marfan, Ehlers-Danlos, Birt-Hogg-Dubé)",
        "Derrame pleural — trasudado: insuficiencia cardiaca, cirrosis, síndrome nefrótico (alteración de presiones hidrostática/oncótica, pleura no enferma)",
        "Derrame pleural — exudado: neumonía (paraneumónico), tuberculosis, neoplasia (pleura inflamada o infiltrada)",
        "Hemotórax: trauma torácico, iatrogenia (procedimientos), rotura de aneurisma",
        "Empiema: derrame paraneumónico no tratado que se sobreinfecta"
      ],
      "fisiopatologia": {
        "resumen": "El espacio pleural normal tiene presión negativa que mantiene el pulmón expandido pegado a la pared torácica. Cualquier proceso que introduzca aire, líquido o sangre en ese espacio rompe ese equilibrio de presión negativa, permitiendo que el pulmón colapse en mayor o menor grado.",
        "explicacionExtendida": "En el neumotórax, la entrada de aire al espacio pleural elimina la presión negativa que normalmente 'pega' el pulmón a la pared torácica, permitiendo que el pulmón se retraiga por su propia elasticidad — el grado de colapso depende de cuánto aire haya entrado. La variante más peligrosa es el neumotórax a tensión: aquí existe un mecanismo de válvula unidireccional que permite que entre aire al espacio pleural con cada inspiración pero no permite que salga, generando una presión positiva progresivamente creciente que no solo colapsa el pulmón ipsilateral sino que empuja el mediastino hacia el lado contrario, comprimiendo el pulmón sano y acodando las venas cavas — esto compromete el retorno venoso al corazón y puede llevar a shock obstructivo en minutos si no se descomprime de urgencia.\n\nEn el derrame pleural, la clave fisiopatológica está en distinguir trasudado de exudado, porque apuntan a mecanismos completamente distintos. El trasudado ocurre cuando las presiones hidrostática y oncótica sistémicas están alteradas (por ejemplo, insuficiencia cardiaca que eleva la presión hidrostática capilar, o cirrosis/síndrome nefrótico que bajan la presión oncótica por hipoalbuminemia) — la pleura en sí está sana, simplemente 'rezuma' líquido por el desequilibrio de presiones a distancia. El exudado, en cambio, refleja una pleura enferma: inflamación (neumonía), infiltración tumoral, o aumento de la permeabilidad capilar local — por eso los criterios de Light comparan las proteínas y LDH del líquido pleural con las del suero, para diferenciar si el problema es sistémico (trasudado) o local en la pleura misma (exudado). El empiema es la evolución de un derrame paraneumónico no resuelto: las bacterias colonizan el líquido pleural, se organiza pus franco, y con el tiempo se pueden formar loculaciones fibrosas que dificultan el drenaje simple.",
        "cascada": [
          {
            "paso": "Factor desencadenante",
            "detalle": "Ruptura de bulla subpleural (neumotórax), inflamación pleural por neumonía adyacente (derrame paraneumónico), o trauma (hemotórax)"
          },
          {
            "paso": "Cambio estructural",
            "detalle": "Pérdida de la presión negativa pleural normal por entrada de aire, líquido o sangre al espacio pleural"
          },
          {
            "paso": "Cambio fisiológico",
            "detalle": "Colapso parcial o total del pulmón ipsilateral; en neumotórax a tensión, además desplazamiento mediastínico"
          },
          {
            "paso": "Manifestación clínica",
            "detalle": "Disnea, dolor torácico pleurítico, y hallazgos físicos específicos según el contenido del espacio pleural (timpanismo en neumotórax, matidez en derrame/hemotórax)"
          }
        ]
      },
      "clinica": [
        {
          "signo": "Disnea de inicio súbito + dolor torácico pleurítico (neumotórax)",
          "mecanismo": "Colapso pulmonar agudo que reduce la superficie de intercambio gaseoso disponible"
        },
        {
          "signo": "Desviación traqueal contralateral + hipotensión (neumotórax a tensión)",
          "mecanismo": "Presión positiva intrapleural progresiva que desplaza el mediastino y compromete el retorno venoso"
        },
        {
          "signo": "Disnea progresiva con derrame pleural extenso",
          "mecanismo": "Compresión pulmonar por el líquido acumulado, reduciendo el volumen pulmonar funcional"
        }
      ],
      "examenFisico": [
        "Neumotórax: hiperresonancia/timpanismo a la percusión, murmullo vesicular abolido, expansión torácica disminuida",
        "Derrame pleural: matidez a la percusión, murmullo vesicular abolido, frémito vocal disminuido",
        "Neumotórax a tensión: además, desviación traqueal, ingurgitación yugular, hipotensión"
      ],
      "semiologia": {
        "inspeccion": "Busca asimetría en la expansión torácica, uso de músculos accesorios, y en el neumotórax a tensión, desviación visible de la tráquea hacia el lado sano e ingurgitación yugular por el compromiso del retorno venoso.",
        "palpacion": "Expansión torácica disminuida en el lado afectado en ambas condiciones. El frémito vocal está DISMINUIDO en ambas (aire o líquido conducen peor las vibraciones que el tejido pulmonar sano) — por eso el frémito NO ayuda a diferenciarlas; la clave está en la percusión.",
        "percusion": "Este es el hallazgo que SÍ diferencia ambas condiciones: hiperresonancia/timpanismo en el neumotórax (aire = más resonante de lo normal) versus matidez en el derrame pleural o hemotórax (líquido = menos resonante, más 'sólido' al percutir).",
        "auscultacion": "Murmullo vesicular abolido o muy disminuido sobre la zona afectada en ambas condiciones — el aire o el líquido interpuesto entre el pulmón y el estetoscopio bloquea la transmisión del sonido respiratorio normal."
      },
      "diagnostico": "Neumotórax: radiografía de tórax (línea pleural visible separando el pulmón colapsado de la pared torácica); TC no se recomienda de rutina por baja sensibilidad adicional. Derrame pleural: radiografía (borramiento del ángulo costofrénico, signo del menisco) + toracocentesis diagnóstica con análisis del líquido (criterios de Light: es exudado si cumple al menos 1 de: proteínas líquido/suero >0.5, LDH líquido/suero >0.6, o LDH líquido > 2/3 del límite superior normal en suero).",
      "algoritmo": [
        {
          "tipo": "paso",
          "texto": "Paciente con disnea + dolor torácico pleurítico — sospecha de patología pleural"
        },
        {
          "tipo": "paso",
          "texto": "Radiografía de tórax urgente"
        },
        {
          "tipo": "decision",
          "texto": "¿Qué muestra la imagen y cómo está el paciente hemodinámicamente?",
          "salidas": [
            {
              "etiqueta": "Línea pleural + inestabilidad hemodinámica/desviación traqueal",
              "texto": "Neumotórax a TENSIÓN — descompresión con aguja INMEDIATA, no esperar más estudios",
              "color": "alert"
            },
            {
              "etiqueta": "Línea pleural, estable",
              "texto": "Neumotórax simple — observación vs. drenaje según tamaño y síntomas",
              "color": "coral"
            },
            {
              "etiqueta": "Opacidad con borramiento del ángulo costofrénico",
              "texto": "Derrame pleural — toracocentesis diagnóstica, aplicar criterios de Light",
              "color": "cobalt"
            }
          ]
        }
      ],
      "diagnosticoDiferencial": [
        "Tromboembolismo pulmonar (disnea súbita + dolor pleurítico, sin los hallazgos de percusión característicos)",
        "Infarto agudo de miocardio (dolor torácico, ECG diferencia)",
        "Neumonía sin derrame asociado"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Neumotórax a tensión: descompresión con aguja de urgencia (2do espacio intercostal, línea medioclavicular) seguida de tubo torácico",
          "Neumotórax simple pequeño: observación con oxígeno suplementario",
          "Neumotórax grande o sintomático: drenaje con tubo torácico",
          "Derrame pleural sintomático grande: toracocentesis terapéutica evacuadora",
          "Empiema: drenaje torácico obligatorio ± fibrinolíticos intrapleurales si hay loculaciones, considerar cirugía (decorticación) si no resuelve"
        ],
        "farmacologico": [
          "Empiema/derrame paraneumónico complicado: antibióticos dirigidos según cultivo del líquido pleural, igual que en NAC/nosocomial según el contexto de adquisición",
          "Analgesia para el dolor pleurítico"
        ]
      },
      "complicaciones": [
        "Neumotórax a tensión no tratado: shock obstructivo y paro cardiorrespiratorio",
        "Empiema no drenado: sepsis, fibrotórax (pulmón atrapado por fibrosis pleural)",
        "Recurrencia de neumotórax espontáneo (hasta 30-50% tras el primer episodio sin intervención definitiva)"
      ],
      "prevencion": "Cese de tabaquismo/vapeo reduce el riesgo de neumotórax espontáneo. El manejo oportuno del derrame paraneumónico (antes de que se infecte) previene la progresión a empiema.",
      "perlasProfundo": "El frémito vocal NO diferencia neumotórax de derrame pleural (ambos lo disminuyen) — la percusión SÍ los diferencia: timpanismo (neumotórax, más aire) vs. matidez (derrame, más líquido). Este es un punto que se presta a confusión frecuente en el examen físico y en exámenes."
    },
    "repaso": {
      "conceptosClave": [
        "Neumotórax = aire en espacio pleural; derrame = líquido; hemotórax = sangre; empiema = derrame infectado con pus",
        "Percusión diferencia neumotórax (timpanismo) de derrame (matidez) — el frémito NO los diferencia",
        "Neumotórax a tensión = emergencia, descompresión con aguja inmediata"
      ],
      "clinica": "Disnea + dolor pleurítico súbito; neumotórax a tensión agrega desviación traqueal e hipotensión.",
      "diagnostico": "Rx de tórax inicial; toracocentesis + criterios de Light para caracterizar el derrame.",
      "tratamientoResumen": "Neumotórax a tensión: aguja urgente. Neumotórax simple: observación o tubo torácico según tamaño. Derrame/empiema: toracocentesis ± drenaje según criterios de Light y presencia de infección.",
      "diferenciales": [
        {
          "entidad": "TEP",
          "clave": "Disnea súbita + dolor pleurítico SIN los hallazgos de percusión característicos de neumotórax/derrame"
        },
        {
          "entidad": "Neumonía sin derrame",
          "clave": "Matidez presente pero con crépitos y broncofonía en vez de abolición completa del murmullo vesicular"
        }
      ],
      "tablaComparativa": {
        "titulo": "Neumotórax vs. Derrame pleural",
        "filas": [
          [
            "Percusión",
            "Timpanismo/hiperresonancia",
            "Matidez"
          ],
          [
            "Frémito vocal",
            "Disminuido",
            "Disminuido (igual, no diferencia)"
          ],
          [
            "Contenido",
            "Aire",
            "Líquido (trasudado, exudado, sangre o pus)"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "El neumotórax a tensión es una emergencia clínica — se trata con descompresión con aguja, NO se espera a la radiografía si hay inestabilidad hemodinámica franca",
        "Percusión diferencia neumotórax (timpanismo) de derrame (matidez); el frémito vocal NO los diferencia (disminuido en ambos)",
        "Los criterios de Light distinguen exudado de trasudado — esencial para orientar la causa del derrame",
        "El derrame paraneumónico no tratado puede evolucionar a empiema, que requiere drenaje obligatorio"
      ],
      "redFlags": [
        "Desviación traqueal + hipotensión + ingurgitación yugular en paciente con dolor torácico → neumotórax a tensión, actuar de inmediato",
        "Derrame pleural con pH <7.2 o glucosa muy baja en el líquido → sugiere empiema, requiere drenaje urgente"
      ],
      "erroresFrecuentes": [
        "Esperar la radiografía de tórax antes de descomprimir un neumotórax a tensión clínicamente evidente",
        "Usar el frémito vocal para diferenciar neumotórax de derrame (no sirve para eso)",
        "No aplicar los criterios de Light sistemáticamente ante todo derrame pleural nuevo"
      ],
      "asociacionesClinicas": [
        "Varón joven, alto y delgado + dolor torácico súbito → pensar en neumotórax espontáneo primario",
        "Neumonía que no mejora con antibiótico adecuado + fiebre persistente → sospechar derrame paraneumónico complicado o empiema"
      ]
    },
    "casosClinicos": [
      {
        "nivel": "basico",
        "vineta": "Varón de 22 años, previamente sano, presenta dolor torácico súbito y disnea de inicio brusco tras ejercicio intenso. Al examen: tráquea central, hiperresonancia y ausencia de murmullo vesicular en hemitórax derecho.",
        "preguntaMC": {
          "enunciado": "¿Cuál es el diagnóstico más probable y qué lo distingue de un neumotórax a tensión?",
          "opciones": [
            {
              "id": "a",
              "texto": "Neumotórax a tensión, porque tiene dolor torácico súbito"
            },
            {
              "id": "b",
              "texto": "Neumotórax espontáneo primario simple — la tráquea central (no desviada) y la ausencia de compromiso hemodinámico descartan tensión"
            },
            {
              "id": "c",
              "texto": "Derrame pleural, por la disnea"
            },
            {
              "id": "d",
              "texto": "Neumonía, por el dolor torácico"
            }
          ],
          "correcta": "b",
          "explicacion": "El perfil (varón joven, alto/delgado típico, dolor súbito tras esfuerzo) junto con hiperresonancia y murmullo vesicular abolido es compatible con neumotórax. La tráquea CENTRAL (no desviada) es la clave que descarta neumotórax a TENSIÓN — en ese caso, sí esperaríamos desviación traqueal contralateral e inestabilidad hemodinámica."
        },
        "preguntaEscrita": {
          "enunciado": "Si este mismo paciente, minutos después, desarrolla hipotensión y desviación traqueal hacia el lado izquierdo, ¿qué harías de inmediato y por qué no debes esperar la radiografía?",
          "respuestaModelo": "Realizaría descompresión con aguja de urgencia en el segundo espacio intercostal, línea medioclavicular del lado afectado (derecho), sin esperar confirmación radiológica. Esto se debe a que los signos (hipotensión + desviación traqueal contralateral) indican que el neumotórax simple ha evolucionado a neumotórax a TENSIÓN, una emergencia donde la presión intrapleural creciente compromete el retorno venoso al corazón — cada minuto de retraso aumenta el riesgo de shock obstructivo y paro cardiorrespiratorio, por lo que el diagnóstico y tratamiento deben ser clínicos e inmediatos, no esperar estudios de imagen."
        }
      }
    ,
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
  ,
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
    }]
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
    "tipoIlustracion": "alveolar",
    "relacionadas": [
      {
        "id": "enfermedades-respiratorias-ocupacionales",
        "relacion": "La neumoconiosis es un subtipo de EPID de causa conocida (ocupacional) — mismo mecanismo final de fibrosis intersticial"
      },
      {
        "id": "epoc",
        "relacion": "Diagnóstico diferencial clave en disnea crónica progresiva — la EPID tiene patrón RESTRICTIVO en espirometría, el EPOC tiene patrón OBSTRUCTIVO"
      }
    ],
    "profundo": {
      "definicion": "Grupo heterogéneo de enfermedades que afectan predominantemente el intersticio pulmonar (el espacio virtual entre la membrana basal del epitelio alveolar y el epitelio capilar), aunque también pueden comprometer el parénquima, los vasos y las vías respiratorias periféricas. Se caracterizan por inflamación y/o fibrosis progresiva que compromete la función respiratoria — con características clínicas, funcionales y radiológicas muy semejantes entre sí a pesar de tener causas distintas.",
      "epidemiologia": "Las EPID más frecuentes son la fibrosis pulmonar idiopática (FPI) y la sarcoidosis, que juntas representan cerca del 50% de los casos. Existen diferencias importantes entre países: menor frecuencia de sarcoidosis en España, y mayor frecuencia de EPID asociada a enfermedades del tejido conectivo en Alemania y en registros griegos.",
      "etiologiaFactoresRiesgo": [
        "Enfermedades del tejido conectivo (artritis reumatoide, esclerosis sistémica, dermatomiositis)",
        "Exposición ocupacional/ambiental (neumoconiosis, alveolitis por hipersensibilidad)",
        "Fármacos: quimioterápicos (busulfán, bleomicina, metotrexato), antibióticos (nitrofurantoína), amiodarona",
        "Radioterapia torácica previa",
        "Tabaquismo (asociado a neumonía intersticial descamativa, bronquiolitis respiratoria, histiocitosis X — pero relación INVERSA con sarcoidosis y alveolitis alérgica extrínseca)",
        "Antecedente familiar/hereditario en FPI, esclerosis tuberosa, neurofibromatosis"
      ],
      "fisiopatologia": {
        "resumen": "El intersticio pulmonar normal es solo un espacio virtual delgado entre el epitelio alveolar y el capilar. En la EPID, este espacio se llena progresivamente de células inflamatorias, colágeno depositado en exceso, y en algunos casos granulomas — el resultado es un intersticio engrosado que dificulta físicamente el intercambio gaseoso por difusión.",
        "explicacionExtendida": "Independientemente de la causa desencadenante (autoinmune, ocupacional, farmacológica o idiopática), el proceso final converge en un patrón común: acumulación excesiva de células de distintas fuentes (mesenquimales, epiteliales, inflamatorias) junto con productos de la 'curación de heridas' — colágeno y matriz extracelular — depositándose en el intersticio pulmonar. Este engrosamiento del intersticio aumenta físicamente la distancia que debe recorrer el oxígeno para difundir desde el alvéolo hasta el capilar, lo que explica por qué la alteración funcional característica es la disminución de la difusión de monóxido de carbono (DLCO) y por qué la hipoxemia empeora notablemente con el ejercicio (el tiempo de tránsito del glóbulo rojo por el capilar se acorta, y ya no alcanza a completar el intercambio a través de un intersticio engrosado).\n\nA diferencia de las enfermedades obstructivas (como el EPOC o el asma, donde el problema es que el aire no puede SALIR bien), en la EPID el problema es que el pulmón se vuelve más rígido y pequeño — de ahí el patrón funcional RESTRICTIVO (disminución de la capacidad vital forzada y de la capacidad pulmonar total, con relación VEF1/FVC conservada o incluso aumentada, a diferencia del EPOC donde esa relación está reducida)."
      ,cascada: [
              {
                      "paso": "Factor desencadenante",
                      "detalle": "Causa conocida (tejido conectivo, ocupacional, fármacos) o desconocida (idiopática) que lesiona el epitelio alveolar"
              },
              {
                      "paso": "Respuesta celular",
                      "detalle": "Acumulación de células mesenquimales, epiteliales hiperplásicas e inflamatorias en el intersticio"
              },
              {
                      "paso": "Cambio estructural",
                      "detalle": "Depósito excesivo de colágeno y matriz extracelular — el intersticio, normalmente un espacio virtual delgado, se engrosa progresivamente"
              },
              {
                      "paso": "Cambio fisiológico",
                      "detalle": "El intersticio engrosado dificulta la difusión de oxígeno; patrón funcional restrictivo (↓CVF, ↓DLCO)"
              },
              {
                      "paso": "Manifestación clínica",
                      "detalle": "Disnea progresiva, tos seca, crépitos tipo velcro en bases, hipoxemia que empeora con el ejercicio"
              }
      ]
      },
      "clinica": [
        {
          "signo": "Disnea progresiva de meses a años de evolución + tos seca",
          "mecanismo": "Fibrosis/inflamación intersticial progresiva que reduce la distensibilidad pulmonar y dificulta la difusión de oxígeno"
        },
        {
          "signo": "Crépitos tipo 'velcro' en ambas bases pulmonares",
          "mecanismo": "Apertura súbita de alvéolos y vías aéreas pequeñas colapsadas por la fibrosis, al final de la inspiración"
        },
        {
          "signo": "Acropaquia (dedos en palillo de tambor)",
          "mecanismo": "Hipoxemia crónica sostenida — marcador de enfermedad fibrótica avanzada, presente en >90% de la fibrosis pulmonar idiopática"
        }
      ],
      "examenFisico": [
        "Crépitos inspiratorios tipo velcro en bases (>90% de FPI, 60% de EPID asociada a tejido conectivo)",
        "Acropaquia en enfermedad fibrótica avanzada",
        "Sibilancias infrecuentes — cuando aparecen, sugieren bronquiolitis asociada o síndrome de Churg-Strauss"
      ],
      "semiologia": {
        "inspeccion": "Observa el patrón respiratorio (taquipnea con esfuerzos progresivamente menores), coloración (cianosis en fases avanzadas), y examina las manos buscando acropaquia — un hallazgo que orienta fuertemente a fibrosis avanzada, especialmente FPI.",
        "palpacion": "Expansión torácica puede estar simétricamente disminuida por la rigidez pulmonar bilateral. No hay hallazgos de asimetría como en el neumotórax o derrame, ya que el compromiso es difuso y bilateral.",
        "percusion": "Habitualmente normal — la EPID no produce cambios de matidez o hiperresonancia como las enfermedades pleurales, porque el aire y la relación tisular general del pulmón no cambian de forma tan marcada.",
        "auscultacion": "El hallazgo semiológico más característico y más preguntado: crépitos inspiratorios finos tipo 'velcro' en ambas bases — un sonido muy específico que se diferencia de los crépitos gruesos de la neumonía o insuficiencia cardiaca. Escúchalos al final de la inspiración profunda."
      },
      "diagnostico": "El diagnóstico combina características clínicas, funcionales (espirometría con patrón restrictivo: ↓CVF, ↓DLCO), e imagenológicas (TC de alta resolución — TCAR, la piedra angular del diagnóstico). Patrones en TCAR: FPI muestra patrón de neumonía intersticial usual (NIU); la neumonía intersticial no específica (NINE) muestra vidrio esmerilado difuso. En casos no concluyentes, puede requerirse biopsia pulmonar (transbronquial, criobiopsia o quirúrgica) y evaluación multidisciplinaria (neumólogo, radiólogo, patólogo).",
      algoritmo: [
            {
                  "tipo": "paso",
                  "texto": "Disnea progresiva + tos seca + crépitos tipo velcro en bases — sospecha de EPID"
            },
            {
                  "tipo": "paso",
                  "texto": "Espirometría: confirmar patrón restrictivo (↓CVF, ↓DLCO, VEF1/FVC normal o aumentado)"
            },
            {
                  "tipo": "paso",
                  "texto": "TC de alta resolución (TCAR) — estudio clave para caracterizar el patrón"
            },
            {
                  "tipo": "decision",
                  "texto": "¿Qué muestra la TCAR y la historia clínica?",
                  "salidas": [
                        {
                              "etiqueta": "Patrón NIU + sin causa identificable",
                              "texto": "Fibrosis pulmonar idiopática (FPI) — iniciar antifibrótico (pirfenidona/nintedanib)",
                              "color": "alert"
                        },
                        {
                              "etiqueta": "Asociada a enfermedad del tejido conectivo",
                              "texto": "Inmunosupresores + corticoides según gravedad",
                              "color": "coral"
                        },
                        {
                              "etiqueta": "Causa ocupacional/ambiental identificada",
                              "texto": "Es una neumoconiosis — cese de exposición, manejo de soporte",
                              "color": "mint"
                        }
                  ]
            }
      ],
      "diagnosticoDiferencial": [
        "EPOC (patrón obstructivo, no restrictivo)",
        "Insuficiencia cardiaca (crépitos también presentes, pero con otros signos de sobrecarga de volumen)",
        "Neumonía atípica (curso más agudo)",
        "Enfermedades respiratorias ocupacionales (pueden ser la CAUSA de la EPID, no un diferencial excluyente)"
      ],
      "tratamiento": {
        "noFarmacologico": [
          "Rehabilitación pulmonar",
          "Oxigenoterapia si hay hipoxemia",
          "Vacunación (neumococo, influenza)",
          "Considerar trasplante pulmonar en casos avanzados y progresivos",
          "Cuidados paliativos en fases avanzadas"
        ],
        "farmacologico": [
          "Fibrosis pulmonar idiopática: antifibróticos — pirfenidona o nintedanib",
          "EPID asociada a enfermedades del tejido conectivo: inmunosupresores (micofenolato, ciclofosfamida, azatioprina) + glucocorticoides según gravedad",
          "EPID progresiva no FPI: nintedanib aprobado específicamente para el fenotipo progresivo"
        ]
      },
      "complicaciones": [
        "Insuficiencia respiratoria crónica progresiva",
        "Hipertensión pulmonar secundaria",
        "Cor pulmonale",
        "Mayor riesgo de infecciones respiratorias por función pulmonar comprometida"
      ],
      "prevencion": "Evitar exposiciones ocupacionales conocidas (asbesto, sílice), revisar cuidadosamente medicamentos con potencial fibrosante antes de indicarlos en tratamientos prolongados, y control temprano de enfermedades del tejido conectivo para reducir el riesgo de EPID asociada.",
      "perlasProfundo": "Los criterios de PROGRESIÓN según ATS/ERS 2022 (aplicables a cualquier EPID, no solo FPI) son: disminución de la CVF ≥10%, aumento de la disnea, o empeoramiento radiológico en la TCAR — reconocer este 'fenotipo progresivo' ha cambiado el enfoque terapéutico porque ahora el nintedanib (antes exclusivo de FPI) se usa también en EPID progresiva de otras causas."
    },
    "repaso": {
      "conceptosClave": [
        "El intersticio se llena de células/colágeno → engrosamiento → dificulta la difusión de O2",
        "Patrón funcional RESTRICTIVO (↓CVF, ↓DLCO, VEF1/FVC normal o aumentado) — a diferencia del EPOC (obstructivo)",
        "TCAR es la piedra angular del diagnóstico"
      ],
      "clinica": "Disnea progresiva + tos seca + crépitos tipo velcro en bases + acropaquia en fases avanzadas.",
      "diagnostico": "Clínica + espirometría restrictiva + TCAR (patrón NIU en FPI, vidrio esmerilado en NINE) ± biopsia.",
      "tratamientoResumen": "FPI: antifibróticos (pirfenidona/nintedanib). Asociada a tejido conectivo: inmunosupresores + corticoides. Progresiva no-FPI: nintedanib.",
      "diferenciales": [
        {
          "entidad": "EPOC",
          "clave": "EPID = restrictivo (VEF1/FVC normal); EPOC = obstructivo (VEF1/FVC <0.70)"
        },
        {
          "entidad": "Insuficiencia cardiaca",
          "clave": "También da crépitos, pero con signos de sobrecarga (ingurgitación yugular, edemas) y respuesta a diuréticos"
        }
      ],
      "tablaComparativa": {
        "titulo": "EPID vs. EPOC (patrón funcional)",
        "filas": [
          [
            "Patrón espirométrico",
            "Restrictivo",
            "Obstructivo"
          ],
          [
            "VEF1/FVC",
            "Normal o aumentado",
            "Disminuido (<0.70)"
          ],
          [
            "Auscultación",
            "Crépitos tipo velcro en bases",
            "Murmullo vesicular disminuido, espiración prolongada"
          ]
        ]
      }
    },
    "imprescindible": {
      "loQueSiOSiDebesSaber": [
        "Patrón RESTRICTIVO (↓CVF, ↓DLCO, VEF1/FVC normal) — no lo confundas con el patrón obstructivo del EPOC",
        "TCAR es el estudio clave; el patrón NIU es característico de FPI",
        "Crépitos tipo 'velcro' en bases es el hallazgo auscultatorio más característico",
        "Los antifibróticos (pirfenidona, nintedanib) son el pilar del tratamiento en FPI y EPID progresiva"
      ],
      "redFlags": [
        "Disnea progresiva + acropaquia + crépitos velcro en paciente >50 años → alta sospecha de FPI, derivar a neumología",
        "Disminución de CVF ≥10% en controles seriados → fenotipo progresivo, cambio de estrategia terapéutica"
      ],
      "erroresFrecuentes": [
        "Confundir el patrón restrictivo de la EPID con el obstructivo del EPOC solo por la disnea crónica compartida",
        "No indagar antecedente ocupacional, farmacológico o de enfermedad del tejido conectivo en todo paciente con sospecha de EPID",
        "Asumir que todas las EPID se tratan igual — FPI, asociada a tejido conectivo, y progresiva no-FPI tienen esquemas distintos"
      ],
      "asociacionesClinicas": [
        "EPID + artritis/rigidez articular + Raynaud → sospechar EPID asociada a enfermedad del tejido conectivo",
        "EPID + antecedente ocupacional (minero, construcción, asbesto) → considerar neumoconiosis como causa de base"
      ]
    }
  ,
    "casosClinicos": [
        {
            "nivel": "avanzado",
            "vineta": "Varón de 63 años, HTA, exfumador (80 paq/año), trabajó 18 años en fábrica con amianto, carbón activado y polvo de celulosa. Consulta por disnea de 1 año que progresa a grado 3-4 mMRC en los últimos 10 días, con tos y expectoración mucopurulenta. Examen: SatO2 85% ambiental, 90% con FiO2 24%. Rales tipo velcro en ambas bases. Clubbing (acropaquia). AGA: pH 7.43, PaCO2 30.2, PaO2 55.7, HCO3 19.9. Espirometría: VEF1/FVC 0.84, VEF1 80%, FVC 76%, sin respuesta a broncodilatadores.",
            "preguntaMC": {
                "enunciado": "¿Qué patrón funcional confirma la espirometría de este paciente?",
                "opciones": [
                    {
                        "id": "a",
                        "texto": "Patrón obstructivo — típico de EPOC dado el tabaquismo"
                    },
                    {
                        "id": "b",
                        "texto": "Patrón restrictivo — VEF1/FVC normal-alto (0.84) con ambos volúmenes reducidos, sin respuesta a broncodilatador"
                    },
                    {
                        "id": "c",
                        "texto": "Patrón mixto obstructivo-restrictivo"
                    },
                    {
                        "id": "d",
                        "texto": "Espirometría normal"
                    },
                    {
                        "id": "e",
                        "texto": "No se puede interpretar sin DLCO"
                    }
                ],
                "correcta": "b",
                "explicacion": "El VEF1/FVC de 0.84 (NORMAL o incluso alto) junto con VEF1 y FVC ambos reducidos (80% y 76%) es exactamente el patrón restrictivo característico de EPID — a diferencia del EPOC, donde el VEF1/FVC estaría DISMINUIDO (<0.70). La ausencia de respuesta a broncodilatadores refuerza que no es un componente obstructivo reversible."
            },
            "preguntaEscrita": {
                "enunciado": "Considerando el antecedente laboral de 18 años con amianto, ¿qué diagnóstico específico de EPID sospecharías, y qué hallazgo del examen físico apoya un curso avanzado?",
                "respuestaModelo": "Con el antecedente de exposición prolongada a amianto (asbesto), sospecharía EPID de causa ocupacional — específicamente asbestosis, que produce fibrosis pulmonar difusa con el mismo patrón restrictivo. El clubbing (acropaquia) presente en el examen es un marcador de enfermedad fibrótica avanzada, presente en más del 90% de los casos de fibrosis pulmonar establecida, y junto con los rales tipo velcro en ambas bases confirma un compromiso intersticial ya significativo, no incipiente."
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
    "casosClinicos": [
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
      }
    ,
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
