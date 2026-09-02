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
      "explicacionExtendida": "El diagrama de tu clase muestra la cascada completa, célula por célula: el humo de tabaco/biomasa activa directamente el epitelio (libera IL-6, CXCL1, CXCL8 — atrayendo neutrófilos), los macrófagos (liberan MCP-1, PAF, TGF-β) y los mastocitos (liberan histamina, PG-D2, y activan células dendríticas y linfocitos T). Los linfocitos CD8+ liberan perforina/granzima B, y junto con CD4+ activan linfocitos B (IL-6) — toda esta señalización converge en un grupo común de mediadores finales: LTB4, IL-8, TNF-α, MMPs, HNE, IL-17A, INF-γ. Estos mediadores actúan sobre DOS estructuras distintas y explican por qué el EPOC es tan heterogéneo entre pacientes: sobre los <strong>bronquiolos</strong> producen fibrosis, hipersecreción mucosa, contracción del músculo liso e inflamación (el fenotipo 'bronquitis crónica'); sobre el <strong>parénquima</strong> producen enfisema e inflamación (el fenotipo 'enfisematoso'). Ambas vías terminan en el mismo resultado funcional: obstrucción respiratoria — por eso dos pacientes con EPOC pueden verse clínicamente muy distintos (uno más tosedor-abotagado, otro más disneico-soplador rosado) y aun así tener el mismo diagnóstico espirométrico.\n\n<span class=\"fuente-ampliada\">Mecanísticamente, el desequilibrio entre proteasas (elastasa neutrofílica, MMPs) y antiproteasas (como la alfa-1 antitripsina) es lo que explica por qué el daño del parénquima es progresivo e irreversible: cada episodio inflamatorio (cada exacerbación) destruye un poco más de matriz elástica alveolar de la que el cuerpo puede reparar. Esto también explica por qué dejar de fumar detiene la progresión pero no revierte el daño ya hecho — el objetivo del tratamiento nunca es 'curar' el enfisema ya establecido, sino evitar que seque avance más rápido de lo esperado por la edad. Dos datos adicionales de imagen que trae tu clase: (1) estudios con TC muestran hasta 70% MENOS bronquiolos terminales en pacientes con EPOC comparado con controles — la pérdida de vía aérea pequeña puede ocurrir tempranamente, antes de que se vea 'EPOC' en la espirometría; (2) la DISANAPSIS (desajuste entre el calibre del árbol de vías aéreas y el tamaño del pulmón) es un factor de riesgo importante e independiente para desarrollar EPOC — dos personas con el mismo pulmón 'de tamaño' pueden tener árboles bronquiales de calibre distinto, y el más estrecho tiene más riesgo.</span>",
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
  },
  {
    "titulo": "🔥 4 endotipos de exacerbación",
    "contexto": "No todas las exacerbaciones de EPOC son iguales por dentro — se han identificado 4 endotipos según el mecanismo predominante, cada uno asociado a un desencadenante típico.",
    "columnas": [
      "Endotipo",
      "Asociado típicamente con"
    ],
    "filas": [
      [
        "Proinflamatorio",
        "Respuesta inflamatoria general aumentada"
      ],
      [
        "Inflamatorio tipo 1 (T1)",
        "Infección bacteriana"
      ],
      [
        "Inflamatorio tipo 2 (T2)",
        "Inflamación eosinofílica — el que más se beneficia de corticosteroides"
      ],
      [
        "Pauci-inflamatorio",
        "Poca inflamación medible — frecuentemente asociado a virus"
      ]
    ],
    "nota": "Los estudios que usan eosinófilos en sangre para dirigir corticosteroides sistémicos según el endotipo son prometedores pero aún requieren más validación antes de aplicarse de rutina."
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
      "explicacionExtendida": "<span class=\"fuente-ampliada\">Estas dos vías no son independientes — se retroalimentan. La vía de mastocitos genera la broncoconstricción inmediata que sientes como \"crisis\", mientras que la vía Th2/ILC2 mantiene la inflamación crónica de fondo que hace que la vía aérea esté \"hiperreactiva\" incluso entre crisis, lista para reaccionar de forma exagerada al próximo estímulo. Por eso el tratamiento de mantenimiento (ICS) ataca la inflamación crónica (vía Th2), mientras que el rescate (SABA o formoterol) ataca la broncoconstricción aguda (vía mastocitos) — son dos problemas distintos que requieren dos tipos de fármaco distintos, y es la base de por qué 'solo usar el inhalador de rescate' nunca es suficiente. Un dato adicional de tu clase que vale la pena conocer: la IgE elevada en el asma también tiene un efecto NEGATIVO — reduce la señalización de interferón tipo I en las células dendríticas plasmacitoides, lo que AUMENTA la susceptibilidad a infecciones virales respiratorias. Esto explica en parte por qué las infecciones virales son un desencadenante tan frecuente de exacerbaciones asmáticas: no es solo que el virus irrite la vía aérea ya inflamada, sino que la propia IgE del paciente asmático debilita su defensa antiviral innata.</span>",
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
    "epidemiologia": "Bronquitis aguda: 44 casos por cada 1,000 adultos/año, afecta al 5% de adultos anualmente, mayor incidencia en otoño e invierno — es la novena enfermedad más frecuente en pacientes ambulatorios en EE.UU. Bronquiectasias: incidencia y prevalencia en aumento a nivel mundial, con retraso diagnóstico de 3.5 a 17 años desde el inicio de síntomas; prevalencia aproximada de 600 por 100,000 personas, más común en mujeres y mayores de 65 años. <span class=\"fuente-ampliada\">El costo anual estimado por paciente con bronquiectasias es de $80,000 USD. La tos de la bronquitis aguda suele durar 10-14 días, pero hasta un 20% de los pacientes tiene síntomas persistentes o recidivantes durante 1 mes completo — un dato útil para manejar expectativas del paciente que espera mejorar en pocos días.</span>",
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
    "nota": "Puntaje 0-1 → manejo ambulatorio. 2 → considerar hospitalización breve/observación. 3-5 → hospitalización, considerar UCI si el puntaje es muy alto o hay criterios ATS-IDSA de gravedad. Existen otras 2 escalas alternativas mencionadas en las guías (SMART-COP, más orientada a predecir necesidad de soporte respiratorio/vasopresor; y REA-ICU), pero CURB-65 y PSI siguen siendo las más usadas en la práctica clínica habitual."
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
      "explicacionExtendida": "<span class=\"fuente-ampliada\">El motivo detrás del corte de 15% de mortalidad en el algoritmo no es arbitrario: estudios de infecciones graves han encontrado que cuando el riesgo de morir ya es bajo, agregar un segundo antibiótico solo suma toxicidad y presión selectiva para resistencia sin mejorar el desenlace — el paciente de bajo riesgo se beneficia MÁS de un tratamiento dirigido y simple que de 'cubrir todo por si acaso'. Dato adicional sobre biomarcadores: además de PCR y procalcitonina, estudios han evaluado copeptina y MR-proANP como predictores pronósticos en NAV — ambos están significativamente elevados al inicio del cuadro en los pacientes que NO sobreviven, con el MR-proANP mostrando la mejor razón de verosimilitud positiva (2.71) como predictor de mal resultado en algunos estudios. Y sobre M. pneumoniae: desde el año 2000 se han aislado cepas resistentes a macrólidos (por mutaciones en el gen ARNr 23S), con prevalencia creciente desde entonces — un dato relevante si la respuesta clínica a macrólidos no es la esperada en una neumonía atípica.</span>"
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
    "detalle": "Inmunidad mediada por macrófagos + granulomas + interferón CONTROLAN la diseminación → Infección Tuberculosa Latente (ITL). Si el sistema inmune NO controla → progresión a TB activa Del total de personas infectadas, solo el 5-10% desarrolla tuberculosis activa a lo largo de su vida — y de ese grupo, la mayoría lo hace en los primeros 5 años tras la infección inicial (el resto puede reactivarse años o décadas después si las defensas se debilitan)."
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
  },
  {
    "titulo": "💊 Clasificación de medicamentos anti-TB para TB resistente (MINSA 2023)",
    "contexto": "Los esquemas de TB DR (rH, EOA, EOP) que ya viste se arman combinando fármacos de estos 3 grupos, priorizando siempre el Grupo A primero.",
    "columnas": [
      "Grupo",
      "Fármacos"
    ],
    "filas": [
      [
        "Grupo A (prioridad más alta)",
        "Levofloxacino, Moxifloxacino, Bedaquilina, Linezolid"
      ],
      [
        "Grupo B",
        "Clofazimina, Cicloserina"
      ],
      [
        "Grupo C",
        "Etambutol, Pirazinamida, Imipenem-cilastatina/Meropenem, Amikacina, Etionamida"
      ]
    ],
    "nota": "Los esquemas se construyen incluyendo primero todos los fármacos del Grupo A que sean posibles usar, luego se completa con B y C según sea necesario, según el patrón de resistencia del paciente."
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
        },
        {
          "src": "assets/taller-imagenes-s2/taller-s2-neumotorax-linea-pleural.jpg",
          "caption": "Radiografía del caso clínico de neumotórax (varón 22 años)",
          "explicacion": "Esta es la misma radiografía del caso clínico que puedes practicar en la sección de Casos — las flechas marcan la línea pleural visceral, desplazada de la pared torácica por el aire acumulado en el espacio pleural. Es el hallazgo radiológico definitorio del neumotórax: fíjate cómo, a diferencia del diagrama esquemático de la imagen anterior, aquí ves el hallazgo real tal como aparece en una radiografía de verdad — sin trama vascular visible más allá de esa línea."
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
  "Neumotórax recurrente: toracoscopia (VATS) como primera opción — extirpación de bullas + pleurodesis (abrasión pleural más segura, pleurectomía apical con menor recurrencia) (las tasas de recurrencia son más altas en niños que en adultos: 11-60%)",
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
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1y5kNjMi0xyPdqX10VSrHbfIdiImTFCNk/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_3_SESIÓN-9-TEMA-1: Enfermedades Respiratorias Ocupacionales"
  },
  "relacionadas": [
    {
      "id": "asma-bronquial",
      "relacion": "El asma ocupacional comparte fisiopatología con el asma general, pero se distingue por la mejoría característica FUERA del ambiente laboral"
    },
    {
      "id": "epid",
      "relacion": "Las neumoconiosis (silicosis, asbestosis) son formas específicas de EPID de causa ocupacional conocida"
    }
  ],
  "profundo": {
    "definicion": "Patologías del aparato respiratorio causadas, DESENCADENADAS o AGRAVADAS por exposiciones en el lugar de trabajo. Representan un problema importante de salud pública, especialmente en industrias mineras, textiles, de la construcción y químicas.",
    "epidemiologia": "A nivel mundial, más de 2 millones de personas mueren anualmente por enfermedades relacionadas al trabajo, siendo las respiratorias un grupo significativo. En Perú (MINSA), las neumoconiosis representan una de las principales causas de INCAPACIDAD en mineros y trabajadores de la construcción. <span class=\"fuente-ampliada\">La Ley N.º 29783 de Seguridad y Salud en el Trabajo establece la obligación del empleador de proteger la salud de los trabajadores, incluyendo evaluaciones médicas periódicas, identificación de agentes de riesgo, y uso de equipos de protección — es el marco legal peruano que respalda la vigilancia de estas enfermedades.</span>",
    "etiologiaFactoresRiesgo": [
      "Exposición a polvo mineral: sílice, carbón, asbesto",
      "Sustancias químicas irritantes: amoníaco, cloro, vapores ácidos",
      "Humos metálicos: plomo, cromo, estaño",
      "Agentes biológicos: hongos, bacterias, endotoxinas",
      "<span class=\"fuente-ampliada\">La respuesta del organismo a estos agentes depende de 4 variables: el tipo de partícula, su tamaño, la duración de la exposición, y la susceptibilidad individual del trabajador — dos personas con la misma exposición pueden tener desenlaces muy distintos.</span>"
    ],
    "criteriosDiagnosticos": "El diagnóstico requiere correlacionar los síntomas clínicos CON la historia laboral detallada — no es un diagnóstico que se haga solo con clínica o solo con imagen, sino con la combinación de ambos más el nexo temporal/causal con la exposición ocupacional específica.",
    "fisiopatologia": {
      "resumen": "Los agentes inhalados pueden inducir 4 tipos de daño según su naturaleza: inflamación crónica, fibrosis, hiperreactividad bronquial, o mutaciones celulares (carcinogénesis). Cada categoría de la clasificación (neumoconiosis, asma ocupacional, alveolitis alérgica, cáncer ocupacional) corresponde a UNO de estos 4 mecanismos predominando sobre los demás.",
      "cascada": [
        {
          "paso": "Exposición al agente",
          "detalle": "Polvo mineral, químico irritante, humo metálico, o agente biológico, según el ambiente laboral específico"
        },
        {
          "paso": "Factores que determinan la respuesta",
          "detalle": "Tipo de partícula + tamaño + duración de exposición + susceptibilidad individual — determinan CUÁL de los 4 mecanismos de daño predominará"
        },
        {
          "paso": "Mecanismo 1: Inflamación/fibrosis (partículas minerales)",
          "detalle": "Sílice/asbesto/carbón fagocitados por macrófagos alveolares → activación crónica → depósito progresivo de colágeno (neumoconiosis)"
        },
        {
          "paso": "Mecanismo 2: Hiperreactividad bronquial (alérgenos laborales)",
          "detalle": "Sensibilización a harinas/látex/isocianatos → respuesta tipo asmática con cada nueva exposición (asma ocupacional)"
        },
        {
          "paso": "Mecanismo 3: Reacción inmunológica alveolar (partículas orgánicas)",
          "detalle": "Hongos/polvo de aves/caña de azúcar → reacción de hipersensibilidad (tipo III y IV) → infiltrado intersticial difuso (alveolitis alérgica extrínseca)"
        },
        {
          "paso": "Mecanismo 4: Carcinogénesis (asbesto, arsénico, cromo, níquel, diesel)",
          "detalle": "Mutaciones celulares acumuladas tras DÉCADAS de exposición → cáncer pulmonar ocupacional"
        }
      ],
      "imagenes": [
        {
          "src": "assets/ero/ero-rx-caso-hipersensibilidad.jpg",
          "caption": "Radiografía real del caso de tu clase (granjera con neumonitis por hipersensibilidad)",
          "explicacion": "Observa el infiltrado difuso bilateral, de distribución más bien fina/reticulonodular — este patrón corresponde a la alveolitis alérgica extrínseca (neumonitis por hipersensibilidad) por exposición a polvo orgánico del heno. Fíjate que este patrón radiológico es intersticial DIFUSO, no una consolidación lobar como verías en una neumonía típica — esta distinción radiológica es parte de por qué el diagnóstico de esta paciente NO es NAC pese a presentar fiebre y tos como síntomas."
        },
        {
          "src": "assets/ero/ero-antracosis-pulmon-llamas.jpg",
          "caption": "Antracosis — histología y el signo del 'pulmón en llamas'",
          "explicacion": "Izquierda: corte histológico real mostrando el pigmento antracótico (partículas negras de carbón) dentro de macrófagos — nota que estos macrófagos cargados de pigmento se ubican característicamente en un LINFONÓDULO, no dispersos aleatoriamente en el parénquima. Derecha: la pieza anatómica que le da nombre al 'signo del pulmón en llamas' — el depósito de carbón en los surcos y superficie pulmonar crea un patrón oscuro irregular que recuerda a llamas o ceniza sobre el tejido pulmonar."
        },
        {
          "src": "assets/ero/ero-silicosis-rx-tc.jpg",
          "caption": "Silicosis — radiografía y TC reales",
          "explicacion": "Izquierda (Rx): nódulos pequeños difusos, predominantemente en campos superiores — el patrón nodular típico de silicosis. Derecha (TC, 2 cortes): panel A muestra micronódulos difusos bien definidos distribuidos por el parénquima; panel B muestra un corte más inferior con nódulos que empiezan a confluir — esto ilustra la progresión de silicosis SIMPLE (nódulos aislados) hacia fibrosis masiva progresiva (nódulos que confluyen en masas) si la exposición continúa."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">Un patrón útil para memorizar: las neumoconiosis 'clásicas' (silicosis, asbestosis, antracosis) comparten el mismo principio fisiopatológico de fondo — partícula inhalada, fagocitada por macrófago, macrófago no puede degradarla completamente, se activa crónicamente liberando mediadores fibrogénicos — pero cada partícula tiene afinidad por sitios anatómicos ligeramente distintos (sílice→nódulos difusos con predominio en campos superiores; asbesto→fibrosis basal + placas pleurales; carbón→depósito perilinfático), lo que explica por qué sus patrones radiológicos, aunque relacionados, son distinguibles entre sí.</span>"
    },
    "clinica": [
      {
        "signo": "Tos crónica",
        "detallePPT": "Manifestación común a todas las ERO",
        "mecanismo": "Inflamación/irritación sostenida de la vía aérea o el parénquima, según la entidad específica"
      },
      {
        "signo": "Disnea progresiva",
        "detallePPT": "Manifestación común",
        "mecanismo": "Progresión de fibrosis (neumoconiosis) o de obstrucción (asma/EPOC ocupacional) según el mecanismo predominante"
      },
      {
        "signo": "Sibilancias",
        "detallePPT": "Manifestación común, más específica de asma ocupacional",
        "mecanismo": "Broncoespasmo por hiperreactividad de la vía aérea sensibilizada a un alérgeno laboral"
      },
      {
        "signo": "Opresión torácica",
        "detallePPT": "Manifestación común",
        "mecanismo": "Variable según la entidad — puede ser por broncoespasmo o por restricción fibrótica"
      },
      {
        "signo": "Fiebre + tos + disnea recurrentes CON la exposición (patrón episódico)",
        "detallePPT": "Característico del caso de neumonitis por hipersensibilidad — se resuelve en 2-5 días y REAPARECE con la re-exposición",
        "mecanismo": "<span class=\"fuente-ampliada\">Reacción de hipersensibilidad tipo III/IV que se activa con cada nueva exposición significativa al antígeno orgánico, y se resuelve espontáneamente al alejarse de él — este patrón temporal característico (síntomas ligados estrechamente a la exposición, no continuos) es una pista diagnóstica clave, y explica por qué en el caso real NINGÚN otro trabajador estaba afectado: la hipersensibilidad es una respuesta INDIVIDUAL, no depende solo de la exposición ambiental compartida.</span>"
      },
      {
        "signo": "Hemoptisis ocasional",
        "detallePPT": "Manifestación en fases más avanzadas",
        "mecanismo": "Daño tisular con compromiso de vasos de pequeño calibre"
      },
      {
        "signo": "Fases avanzadas: hipoxemia, acropaquia, cor pulmonale",
        "detallePPT": "Signos de enfermedad ya establecida y de larga evolución",
        "mecanismo": "Fibrosis extensa con compromiso significativo del intercambio gaseoso y del lecho vascular pulmonar"
      }
    ],
    "examenFisico": [
      "Taquipnea y estertores finos (crepitantes) — típico de neumonitis por hipersensibilidad aguda, SIN sibilancias (a diferencia del asma ocupacional)",
      "Sibilancias — típico de asma ocupacional durante los episodios",
      "Acropaquia y signos de cor pulmonale en fases avanzadas de neumoconiosis"
    ],
    "semiologia": {
      "inspeccion": "Busca activamente signos de cronicidad (acropaquia) y correlaciona el momento de aparición de síntomas con la jornada laboral — un dato semiológico distintivo del asma ocupacional es la MEJORÍA durante días libres/vacaciones.",
      "palpacion": "Sin hallazgos específicos más allá de lo esperado por cualquier proceso pulmonar restrictivo u obstructivo de fondo.",
      "percusion": "Habitualmente normal salvo fibrosis muy extensa (matidez sutil en zonas de consolidación fibrótica densa).",
      "auscultacion": "Distinción clave entre 2 entidades del mismo grupo: estertores finos tipo Velcro SIN sibilancias (neumonitis por hipersensibilidad — como en el caso real de tu clase) vs. sibilancias CON broncoespasmo (asma ocupacional — como en el segundo caso del operario de silo). Esta diferencia auscultatoria es la primera pista para separar estas 2 entidades antes incluso de tener estudios complementarios."
    },
    "tablasClinicas": [
      {
        "titulo": "🗂️ Clasificación de las ERO",
        "contexto": "8 categorías, cada una con un mecanismo fisiopatológico predominante distinto.",
        "columnas": [
          "Categoría",
          "Ejemplo/Agente típico"
        ],
        "filas": [
          [
            "Neumoconiosis",
            "Silicosis (sílice), asbestosis (asbesto), antracosis (carbón)"
          ],
          [
            "Asma ocupacional",
            "Harinas, látex, isocianatos"
          ],
          [
            "EPOC ocupacional",
            "Irritantes crónicos en ambiente laboral"
          ],
          [
            "Alveolitis alérgica extrínseca",
            "Hongos, polvo de aves, caña de azúcar"
          ],
          [
            "Bronquitis crónica por irritantes",
            "Gases industriales"
          ],
          [
            "Cáncer pulmonar ocupacional",
            "Asbesto, arsénico, cromo, níquel, humo de diesel"
          ],
          [
            "Lesiones agudas",
            "Edema pulmonar tóxico, bronquiolitis obliterante"
          ]
        ]
      },
      {
        "titulo": "🔬 Las 3 neumoconiosis clásicas",
        "columnas": [
          "Entidad",
          "Agente",
          "Característica distintiva"
        ],
        "filas": [
          [
            "Silicosis",
            "Sílice cristalina (inhalación prolongada)",
            "Fibrosis nodular progresiva, inicialmente asintomática, patrón restrictivo, RIESGO ELEVADO de tuberculosis"
          ],
          [
            "Asbestosis",
            "Fibras de asbesto",
            "Fibrosis pulmonar difusa + engrosamiento pleural + relación DIRECTA con mesotelioma pleural maligno"
          ],
          [
            "Antracosis",
            "Polvo de carbón ('pulmón del minero')",
            "Simple o complicada (fibrosis masiva); signo del 'pulmón en llamas'; pigmento en macrófagos de linfonódulos"
          ]
        ]
      }
    ],
    "diagnostico": "Historia clínica OCUPACIONAL detallada: tiempo de exposición, tipo de actividad, turnos laborales, uso de EPP (equipo de protección personal), evaluación de condiciones del entorno laboral. Espirometría: patrón obstructivo (asma/EPOC ocupacional) o restrictivo (neumoconiosis) según la entidad. Radiografía de tórax + TCAR: detectan fibrosis, nódulos, o engrosamiento pleural. Pruebas de provocación inespecíficas: para asma ocupacional. IgE específica o pruebas cutáneas: para hipersensibilidad.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Síntomas respiratorios + antecedente de exposición laboral → sospechar ERO"
      },
      {
        "tipo": "paso",
        "texto": "Historia clínica ocupacional detallada: tiempo de exposición, actividad, uso de EPP"
      },
      {
        "tipo": "decision",
        "texto": "¿Auscultación con sibilancias y mejoría fuera del trabajo?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Sospechar asma ocupacional → espirometría + pruebas de provocación inespecíficas",
            "color": "coral"
          },
          {
            "etiqueta": "NO — estertores finos, síntomas episódicos con la exposición",
            "texto": "Sospechar alveolitis alérgica extrínseca → IgE específica/pruebas cutáneas + Rx/TCAR",
            "color": "mint"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿Exposición crónica a polvo mineral (sílice/asbesto/carbón) + patrón restrictivo?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Sospechar neumoconiosis → Rx/TCAR para caracterizar patrón específico",
            "color": "coral"
          },
          {
            "etiqueta": "NO",
            "texto": "Evaluar otras categorías (bronquitis por irritantes, cáncer ocupacional según exposición)",
            "color": "coral"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "EPOC de origen NO ocupacional",
      "Tuberculosis pulmonar",
      "Fibrosis pulmonar idiopática",
      "Asma NO ocupacional"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "EVITAR nueva exposición al agente causal — la medida más importante y a menudo la única verdaderamente eficaz para detener la progresión",
        "Oxigenoterapia si hay insuficiencia respiratoria",
        "Rehabilitación pulmonar"
      ],
      "farmacologico": [
        "Tratamiento farmacológico según la entidad clínica específica: broncodilatadores y/o corticoides inhalados/sistémicos según corresponda al mecanismo predominante (obstructivo vs. inflamatorio)"
      ]
    },
    "complicaciones": [
      "Tuberculosis (riesgo elevado específicamente en silicosis)",
      "Mesotelioma pleural maligno (relación directa con asbestosis)",
      "Fibrosis masiva progresiva (antracosis complicada)",
      "Cor pulmonale en fases avanzadas de cualquier neumoconiosis",
      "Discapacidad permanente con alto costo en salud pública y pérdida de productividad laboral"
    ],
    "prevencion": "Evaluaciones médicas periódicas, control ambiental y ventilación adecuada, equipos de protección personal (mascarillas, filtros), capacitación al trabajador, registro de enfermedades ocupacionales notificables, evaluación de patrones de incidencia/prevalencia por industria — todo esto respaldado por la Ley N.º 29783 de Seguridad y Salud en el Trabajo en Perú.",
    "perlasProfundo": "Las ERO son PREVENIBLES y deben sospecharse ante TODO paciente con síntomas respiratorios y exposición laboral — un diagnóstico precoz y una intervención oportuna (que a menudo significa simplemente alejar al trabajador del agente causal) mejoran significativamente el pronóstico y reducen la carga de enfermedad. La colaboración interdisciplinaria entre neumólogos, médicos ocupacionales y empleadores es esencial, no opcional.",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con historia laboral detallada donde debes distinguir entre entidades ocupacionales similares por el PATRÓN TEMPORAL de los síntomas respecto a la exposición — exactamente como los 2 casos reales de tu propia clase.",
      "ejercicios": [
        {
          "tipo": "Distinguir por patrón temporal y sustentar (el más frecuente)",
          "planteamiento": "Trabajador de fábrica textil con tos y sibilancias que empeoran progresivamente durante la semana laboral y mejoran notablemente el fin de semana. ¿Qué entidad ocupacional sospecha y qué la distingue de una neumoconiosis?",
          "respuestaModelo": "Asma ocupacional. Se distingue de una neumoconiosis por el patrón temporal: el asma ocupacional MEJORA claramente fuera de la exposición (fines de semana, vacaciones) porque es una respuesta broncoespástica reversible a un alérgeno específico, mientras que las neumoconiosis (fibrosis por polvo mineral) NO mejoran con el descanso — el daño estructural fibrótico ya establecido es permanente independientemente de que el paciente se aleje temporalmente de la exposición."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste las 3 neumoconiosis clásicas mencionadas en tu clase y su agente causal respectivo.",
          "respuestaModelo": "Silicosis (sílice cristalina), asbestosis (fibras de asbesto), antracosis (polvo de carbón)."
        },
        {
          "tipo": "Indique y sustente (complicación específica)",
          "planteamiento": "Un minero con silicosis confirmada desarrolla fiebre, sudoración nocturna y pérdida de peso. ¿Qué complicación debe descartarse de inmediato y por qué esta neumoconiosis en particular predispone a ella?",
          "respuestaModelo": "Debe descartarse TUBERCULOSIS activa de inmediato. La silicosis tiene un riesgo elevado específico y bien documentado de tuberculosis — se cree que la sílice fagocitada altera la función normal de los macrófagos alveolares, deteriorando su capacidad de contener eficazmente al M. tuberculosis, facilitando la reactivación de infección latente o una nueva infección activa."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "8 categorías de ERO, cada una con mecanismo predominante distinto: inflamación/fibrosis, hiperreactividad, reacción inmunológica, o carcinogénesis",
      "Silicosis→riesgo de TB; Asbestosis→riesgo de mesotelioma; Antracosis→signo del pulmón en llamas",
      "El diagnóstico SIEMPRE requiere correlacionar clínica + historia laboral detallada — nunca uno sin el otro"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — distinguir por auscultación",
      "columnas": [
        "Hallazgo",
        "Sospecha"
      ],
      "filas": [
        [
          "Sibilancias + mejoría fuera del trabajo",
          "Asma ocupacional"
        ],
        [
          "Estertores finos SIN sibilancias, episódico con exposición",
          "Alveolitis alérgica extrínseca"
        ],
        [
          "Patrón restrictivo crónico + exposición a polvo mineral",
          "Neumoconiosis"
        ]
      ],
      "nota": "EVITAR la exposición es siempre la medida terapéutica más importante en las 3."
    },
    "clinica": "Tos crónica + disnea progresiva ± sibilancias/estertores según entidad — SIEMPRE correlacionar con el momento respecto a la exposición laboral.",
    "diagnostico": "Historia ocupacional detallada + espirometría (obstructivo/restrictivo) + Rx/TCAR + pruebas específicas (provocación, IgE) según sospecha.",
    "tratamientoResumen": "Evitar la exposición (medida clave) + tratamiento farmacológico según entidad + rehabilitación pulmonar.",
    "diferenciales": [
      {
        "entidad": "EPOC no ocupacional",
        "clave": "Sin nexo temporal con exposición laboral específica"
      },
      {
        "entidad": "Fibrosis pulmonar idiopática",
        "clave": "Sin antecedente ocupacional identificable"
      }
    ],
    "tablaComparativa": {
      "titulo": "Asma ocupacional vs Alveolitis alérgica extrínseca",
      "filas": [
        [
          "Auscultación",
          "Sibilancias",
          "Estertores finos, sin sibilancias"
        ],
        [
          "Patrón temporal",
          "Mejora en días libres",
          "Episodios de 2-5 días con cada exposición"
        ],
        [
          "Espirometría",
          "Obstructivo",
          "Restrictivo"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Qué neumoconiosis tiene riesgo elevado de tuberculosis? → Silicosis",
      "¿Qué neumoconiosis se relaciona directamente con mesotelioma? → Asbestosis",
      "¿Cómo se llama el signo característico de antracosis? → 'Pulmón en llamas' — pigmento antracótico en macrófagos de linfonódulos",
      "¿Cuál es la medida terapéutica MÁS importante en toda ERO? → Evitar nueva exposición al agente causal",
      "¿Qué distingue clínicamente asma ocupacional de alveolitis alérgica extrínseca? → Asma: sibilancias + mejora en días libres. Alveolitis: estertores finos sin sibilancias, episodios de 2-5 días ligados a exposición puntual",
      "¿Por qué en el caso real solo la trabajadora estaba afectada y no sus compañeros? → La hipersensibilidad es una respuesta INDIVIDUAL (no todos se sensibilizan igual), no depende solo de compartir la misma exposición ambiental",
      "¿Qué ley peruana regula la protección respiratoria laboral? → Ley N.º 29783 de Seguridad y Salud en el Trabajo"
    ],
    "redFlags": [
      "Trabajador con exposición a asbesto + dolor pleurítico nuevo → descartar mesotelioma activamente",
      "Silicosis + síntomas sistémicos (fiebre, pérdida de peso) → descartar TB sobreagregada",
      "Síntomas respiratorios que 'nadie más tiene' en el mismo ambiente laboral → no descartar por eso, considerar hipersensibilidad individual"
    ],
    "erroresFrecuentes": [
      "Descartar el diagnóstico ocupacional porque otros compañeros de trabajo no tienen síntomas (en hipersensibilidad, es individual)",
      "No preguntar activamente por historia laboral detallada en todo paciente con síntomas respiratorios crónicos",
      "Confundir asma ocupacional con alveolitis alérgica extrínseca por presentar ambas síntomas 'relacionados al trabajo'",
      "Asumir que suspender la exposición no es necesario si los síntomas mejoran con tratamiento farmacológico"
    ],
    "asociacionesClinicas": [
      "Minero + fibrosis nodular + patrón restrictivo → silicosis, evaluar TB activamente",
      "Trabajador de construcción antigua + engrosamiento pleural → asbestosis, vigilar mesotelioma a largo plazo"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "intermedio",
      "vineta": "(Caso real de tu clase) Evalúas a una paciente de 43 años, quien trabaja en una granja. La paciente observa que cada vez que descarga el heno tiene fiebre, tos, disnea y producción de esputo. Suele resolverse en dos a cinco días, pero reaparece cuando se vuelve a exponer al heno. No usa mascarilla. Además, ninguno de los demás trabajadores de la granja está afectado, y empiezan a preguntarse si está fingiendo. En la exploración física se encuentra taquipnea y estertores finos. No hay sibilancias.",
      "imagen": {
        "src": "assets/ero/ero-rx-caso-hipersensibilidad.jpg",
        "caption": "Radiografía real de esta paciente"
      },
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
            "texto": "Bronquiectasia"
          }
        ],
        "correcta": "b",
        "explicacion": "El patrón temporal es la clave diagnóstica: síntomas que aparecen específicamente con la exposición al heno (polvo orgánico), se RESUELVEN en días sin tratamiento (2-5 días), y REAPARECEN con la re-exposición — este ciclo repetitivo ligado exactamente a un antígeno orgánico específico es característico de neumonitis por hipersensibilidad (alveolitis alérgica extrínseca), no de una infección. La ausencia de sibilancias descarta un componente asmático puro. Que otros trabajadores no estén afectados NO descarta el diagnóstico — la hipersensibilidad es una respuesta inmunológica INDIVIDUAL, no todos los expuestos se sensibilizan de la misma manera."
      },
      "preguntaEscrita": {
        "enunciado": "Los compañeros de trabajo de la paciente sospechan que está fingiendo, ya que ninguno de ellos tiene síntomas pese a la misma exposición. Explica por qué este razonamiento es médicamente incorrecto.",
        "respuestaModelo": "El razonamiento es incorrecto porque la neumonitis por hipersensibilidad es una reacción INMUNOLÓGICA individual (de tipo III y IV) a un antígeno orgánico específico — requiere que el sistema inmune de ESA persona en particular se haya sensibilizado previamente al antígeno del heno. No todas las personas expuestas al mismo ambiente desarrollan esta sensibilización; depende de factores individuales de susceptibilidad inmunológica, no solo del grado de exposición ambiental compartida. Por eso es perfectamente consistente, y médicamente esperable, que solo una persona de todo un grupo de trabajadores igualmente expuestos desarrolle la enfermedad — esto NO invalida el diagnóstico ni sugiere simulación."
      }
    },
    {
      "nivel": "intermedio",
      "vineta": "(Caso real de tu clase) Paciente varón de 31 años, sin antecedentes respiratorios o alérgicos, extabaquista con abandono desde hace diez años (IPA de 1); trabaja como operario en silo de almacenamiento de granos desde los 26 años. El 2019 presentó un primer episodio de broncoespasmo mientras realizaba vaciado de secadora de granos a pala, en espacio confinado de 6 metros de profundidad, levantando nube de polvo orgánico vegetal, sin utilizar protección respiratoria. Posterior a este episodio, continuó con cuadros de broncoespasmo progresivos en frecuencia e intensidad, con disnea clase funcional II y tos seca. Los síntomas respiratorios se presentan durante la jornada laboral, disminuyendo o estando ausentes durante días libres y licencias.",
      "preguntaMC": {
        "enunciado": "¿Cuál es el diagnóstico presuntivo más probable y qué examen confirmaría la sospecha?",
        "opciones": [
          {
            "id": "a",
            "texto": "Asma ocupacional; confirmar con espirometría seriada (en el trabajo vs. fuera del trabajo) y/o pruebas de provocación bronquial específica"
          },
          {
            "id": "b",
            "texto": "EPOC; confirmar con espirometría única mostrando obstrucción fija"
          },
          {
            "id": "c",
            "texto": "Neumonitis por hipersensibilidad; confirmar con IgE específica"
          },
          {
            "id": "d",
            "texto": "Bronquitis crónica; no requiere estudios adicionales"
          },
          {
            "id": "e",
            "texto": "Silicosis; confirmar con TCAR"
          }
        ],
        "correcta": "a",
        "explicacion": "El patrón es clásico de ASMA OCUPACIONAL: broncoespasmo con nexo temporal claro a la exposición laboral (polvo orgánico vegetal en espacio confinado), sin protección respiratoria, con síntomas que DISMINUYEN o desaparecen en días libres/licencias — el patrón de mejoría fuera del trabajo es la pista diagnóstica clave que distingue esto de EPOC (que no mejora así) o de una neumoconiosis (que no se relaciona con días libres). La confirmación se hace demostrando la relación entre función pulmonar y exposición laboral: espirometría seriada comparando días de trabajo vs. días libres, y/o pruebas de provocación bronquial específica con el agente sospechoso bajo condiciones controladas."
      },
      "preguntaEscrita": {
        "enunciado": "El IPA (índice paquete-año) de este paciente es de 1, muy bajo, y dejó de fumar hace 10 años. ¿Por qué este dato es relevante para descartar EPOC como diagnóstico alternativo?",
        "respuestaModelo": "Un IPA de 1 es una carga tabáquica MÍNIMA (equivalente a fumar aproximadamente 1 cigarrillo diario durante 20 años, o su combinación equivalente) — muy por debajo de la exposición tabáquica típicamente asociada al desarrollo de EPOC (generalmente se requieren cargas mucho mayores, frecuentemente >10-20 paquetes-año, para desarrollar EPOC clínicamente relevante por tabaco). Sumado a que dejó de fumar hace 10 años (tiempo suficiente para que cualquier daño leve relacionado al tabaco se hubiera estabilizado, no progresado), este antecedente hace muy IMPROBABLE que el tabaquismo sea la causa del cuadro respiratorio actual, y refuerza la sospecha de que la exposición ocupacional reciente (polvo orgánico en el silo) es la causa real y predominante de sus síntomas."
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
  "Enfermedades sistémicas: colagenosis (LES, AR, esclerosis sistémica, síndrome de Sjögren, polimiositis/dermatomiositis, enfermedad mixta del tejido conectivo) y otras (sarcoidosis, vasculitis, carcinomatosis linfangítica, síndromes hemorrágicos)"
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
    "titulo": "🧪 Marcadores de laboratorio inespecíficos y por etiología",
    "contexto": "Ningún marcador aislado diagnostica una EPID, pero orientan fuertemente hacia una etiología específica cuando se correlacionan con la clínica.",
    "columnas": [
      "Marcador",
      "Orienta a"
    ],
    "filas": [
      [
        "VSG elevada, hipergammaglobulinemia",
        "Hallazgos inespecíficos de inflamación"
      ],
      [
        "Eosinofilia",
        "Eosinofilias pulmonares"
      ],
      [
        "DHL aumentada",
        "Proteinosis alveolar"
      ],
      [
        "Hipercalcemia e hipercalciuria",
        "Sarcoidosis"
      ],
      [
        "Enzima convertidora de angiotensina (ACE)",
        "Sarcoidosis y otras EPID"
      ],
      [
        "Factor reumatoideo",
        "Artritis reumatoide"
      ],
      [
        "Anticuerpos antinucleares (ANA)",
        "Lupus eritematoso sistémico"
      ],
      [
        "Anticuerpos anti-ENA",
        "Esclerosis sistémica progresiva"
      ],
      [
        "Anticuerpo anti-Jo-1",
        "Dermatomiositis, polimiositis"
      ],
      [
        "Enzimas musculares (CPK, aldolasa)",
        "Dermatomiositis, polimiositis"
      ],
      [
        "Precipitinas séricas",
        "Alveolitis alérgica extrínseca"
      ],
      [
        "Anticuerpo anticitoplasma de neutrófilo (ANCA)",
        "Vasculitis"
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
    "pronostico": "Variable según el tipo específico: la FPI tiene una supervivencia media de 2 a 5 años desde el diagnóstico, considerablemente peor que la NINE y la NOC, que tienen mejor pronóstico en general. Los factores de mal pronóstico incluyen: fenotipo progresivo, hipoxemia persistente, y afectación extensa en la TCAR — estos 3 datos, evaluados juntos, orientan qué pacientes requieren seguimiento más estrecho y consideración temprana de trasplante pulmonar.",
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
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1Tpo7LJ_oC4hGndsdZ3xheakd9RoVH4yf/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_3_SESIÓN-7-TEMA-2: Insuficiencia Respiratoria Aguda. SDRA"
  },
  "relacionadas": [
    {
      "id": "neumonia-nac",
      "relacion": "La neumonía grave es una de las causas más frecuentes de IRA hipoxémica y de SDRA secundario"
    },
    {
      "id": "epoc",
      "relacion": "La exacerbación de EPOC es la causa clásica de IRA hipercápnica (tipo II)"
    }
  ],
  "profundo": {
    "definicion": "Condición clínica GRAVE caracterizada por la incapacidad del sistema respiratorio para mantener niveles adecuados de oxigenación arterial, eliminación de CO2, o ambos — causa común de ingreso a UCI, considerada una URGENCIA MÉDICA. Definición operativa: PaO2 <60 mmHg y/o PaCO2 >50 mmHg en reposo, en un paciente PREVIAMENTE normocápnico (BMJ Best Practice, 2024). El Síndrome de Distrés Respiratorio Agudo (SDRA) es una de sus principales formas de presentación SEVERA.",
    "epidemiologia": "En las UCI, la IRA es responsable del 20-30% de los ingresos, con mortalidad de 30-45% en su forma grave. <span class=\"fuente-ampliada\">La pandemia por SARS-CoV-2 incrementó notablemente la incidencia de SDRA secundario a neumonía viral, redefiniendo muchas estrategias de ventilación mecánica que hoy son estándar de manejo.</span>",
    "etiologiaFactoresRiesgo": [
      "Neumonía grave (causa más frecuente)",
      "Exacerbaciones de EPOC",
      "Embolia pulmonar masiva",
      "Edema agudo de pulmón",
      "Trauma torácico",
      "Sepsis (vía respuesta inflamatoria sistémica)",
      "Postoperatorio (frecuentemente causa mixta)"
    ],
    "criteriosDiagnosticos": "IRA: PaO2<60mmHg y/o PaCO2>50mmHg en reposo, en paciente previamente normocápnico. SDRA (Definición de Berlín, 2012): (1) inicio dentro de los 7 DÍAS posteriores a un evento clínico conocido (neumonía, sepsis, trauma), (2) opacidades BILATERALES en imágenes (Rx o TAC), (3) NO explicado completamente por edema cardiogénico (ecocardiograma útil para esto), (4) hipoxemia según el cociente PaO2/FiO2 (PaFi).",
    "fisiopatologia": {
      "resumen": "La función pulmonar normal depende del adecuado intercambio gaseoso en la membrana alveolo-capilar. En la IRA hay disrupción de este equilibrio por alteración de la ventilación, perfusión, o ambas. La HIPOXEMIA puede deberse a 5 mecanismos distintos, mientras que la HIPERCAPNIA se relaciona fundamentalmente con hipoventilación alveolar. En el SDRA específicamente, predomina el SHUNT intrapulmonar por colapso alveolar y presencia de membranas hialinas — con pérdida de la capacidad de RESPUESTA al oxígeno suplementario (a diferencia de otras causas de hipoxemia que sí mejoran con más O2).",
      "cascada": [
        {
          "paso": "Injuria inicial",
          "detalle": "Neumonía, sepsis, trauma, aspiración — daña directa o indirectamente la membrana alveolo-capilar"
        },
        {
          "paso": "Respuesta inflamatoria intensa",
          "detalle": "Liberación de citoquinas, daño epitelial, aumento de la permeabilidad alveolar (especialmente en IRA secundaria a sepsis/SDRA)"
        },
        {
          "paso": "Edema no cardiogénico",
          "detalle": "El aumento de permeabilidad genera edema alveolar por un mecanismo DISTINTO al cardiogénico (no es por presión hidrostática elevada, sino por fuga capilar)"
        },
        {
          "paso": "Colapso alveolar + membranas hialinas",
          "detalle": "El daño epitelial y el edema llevan a colapso de unidades alveolares y depósito de membranas hialinas — sustrato patológico del SDRA"
        },
        {
          "paso": "Shunt intrapulmonar",
          "detalle": "Sangre que pasa por alvéolos colapsados/llenos de líquido sin oxigenarse — mecanismo DOMINANTE de hipoxemia en SDRA, resistente a oxígeno suplementario"
        },
        {
          "paso": "Manifestación clínica",
          "detalle": "Hipoxemia refractaria + disnea + taquipnea + uso de músculos accesorios, con progresión potencial a falla multiorgánica"
        }
      ],
      "imagenes": [
        {
          "src": "assets/ira/ira-dispositivos-oxigeno.jpg",
          "caption": "Dispositivos de oxigenoterapia (de tu clase)",
          "explicacion": "Panel izquierdo: compara la máscara Venturi de ALTO flujo (25L/min salen de la máscara, entrega FiO2 más PRECISA y controlada — ideal para EPOC donde necesitas titular exacto) contra la máscara de BAJO flujo (30L/min hacia máscara pero el paciente inspira una mezcla variable con aire ambiental, dando FiO2 menos predecible). Panel derecho arriba: los 3 sistemas de bajo flujo más comunes — cánula nasal, mascarilla simple, mascarilla con reservorio (en ese orden, entregan FiO2 progresivamente mayor). Panel derecho abajo: el sistema AIRVO2+Válvula de Boussignac, una configuración más avanzada para cánula nasal de alto flujo (HFNC) con medición de presión — nota cómo requiere mucho más equipo y monitoreo que una simple cánula nasal."
        },
        {
          "src": "assets/ira/ira-algoritmo-manejo.jpg",
          "caption": "Algoritmo de manejo de la IRA (de tu clase)",
          "explicacion": "Sigue los 6 pasos en orden: (1) Evaluación inicial con signos clínicos + gasometría — esto es lo que confirma que HAY una IRA; (2) Determinar el TIPO (hipoxémica/hipercápnica/mixta) — esto orienta la causa probable; (3) Estudios complementarios en paralelo; (4) Oxigenoterapia ESCALONADA según severidad (leve→cánula nasal, moderada→mascarilla, grave→alto flujo/VNI/VM invasiva) — nota que NO empiezas directo con lo más invasivo; (5) Considerar SDRA específicamente si hay inicio<7 días + hipoxemia + infiltrados bilaterales, con su manejo propio (VM protectora, prono, relajantes, PEEP); (6) Evaluación CONTINUA — el algoritmo no termina en un solo paso, es un ciclo de reevaluación constante (flechas rojas curvas de vuelta)."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">La distinción entre shunt (predominante en SDRA) y otras causas de hipoxemia (como el desajuste V/Q) tiene una implicancia práctica crucial: en el desajuste V/Q simple, dar más oxígeno suplementario generalmente mejora la saturación porque todavía hay ALGO de ventilación llegando a esas unidades mal perfundidas o viceversa. En el shunt verdadero (sangre que pasa por alvéolos COMPLETAMENTE colapsados o llenos de líquido), aumentar la FiO2 no sirve de mucho — no hay ventilación alveolar a la que ese oxígeno adicional pueda acceder. Por eso los pacientes con SDRA a menudo tienen hipoxemia 'refractaria' a oxígeno suplementario simple, y requieren estrategias que reclutan alvéolos colapsados (PEEP, posición prono) en vez de solo subir la FiO2.</span>"
    },
    "clinica": [
      {
        "signo": "Disnea",
        "detallePPT": "Síntoma cardinal",
        "mecanismo": "Percepción del aumento del trabajo respiratorio y/o hipoxemia"
      },
      {
        "signo": "Taquipnea",
        "detallePPT": "Síntoma cardinal",
        "mecanismo": "Respuesta compensatoria a la hipoxemia y/o acidosis"
      },
      {
        "signo": "Uso de músculos accesorios",
        "detallePPT": "Síntoma cardinal",
        "mecanismo": "Reclutamiento muscular adicional cuando el diafragma solo ya no es suficiente para el trabajo respiratorio requerido"
      },
      {
        "signo": "Cianosis",
        "detallePPT": "Síntoma cardinal",
        "mecanismo": "Hemoglobina desoxigenada >5g/dL en sangre capilar — refleja hipoxemia ya significativa"
      },
      {
        "signo": "Confusión o alteración del sensorio",
        "detallePPT": "Síntoma cardinal — signo de alarma",
        "mecanismo": "Hipoxia cerebral y/o narcosis por CO2 (en la variante hipercápnica) — indica compromiso ya significativo"
      }
    ],
    "examenFisico": [
      "Taquipnea, uso de músculos accesorios, tiraje",
      "Cianosis (central si es severa)",
      "Estertores crepitantes según la causa de base (ej. neumonía, edema pulmonar)",
      "En pacientes crónicos reagudizados, la presentación puede ser INSIDIOSA — no siempre abrupta"
    ],
    "semiologia": {
      "inspeccion": "Busca activamente los 5 síntomas cardinales del PPT: disnea, taquipnea, uso de músculos accesorios, cianosis, y alteración del sensorio — su presencia conjunta es lo que define clínicamente una IRA antes incluso de tener la gasometría.",
      "palpacion": "Según la causa de base — sin hallazgo único característico de la IRA en sí misma.",
      "percusion": "Variable según etiología (matidez si hay consolidación/derrame asociado, normal en causas puramente de bomba ventilatoria).",
      "auscultacion": "Depende de la causa subyacente — crépitos en neumonía/SDRA/edema pulmonar, sibilancias en exacerbación de EPOC/asma. El HALLAZGO ausente también importa: en IRA por causa neuromuscular pura, la auscultación pulmonar puede ser sorprendentemente NORMAL pese a la insuficiencia respiratoria grave, porque el problema no está en el parénquima sino en la bomba ventilatoria."
    },
    "tablasClinicas": [
      {
        "titulo": "🔬 Clasificación de la IRA",
        "contexto": "El TIPO de IRA orienta directamente hacia la causa probable y el manejo inicial.",
        "columnas": [
          "Tipo",
          "Característica",
          "Causas típicas"
        ],
        "filas": [
          [
            "Tipo I — Hipoxémica",
            "Hipoxemia SIN hipercapnia",
            "Neumonía, SDRA, edema pulmonar"
          ],
          [
            "Tipo II — Hipercápnica",
            "CON retención de CO2",
            "EPOC agudizado, enfermedades neuromusculares, fármacos depresores"
          ],
          [
            "Tipo III/IV — Mixta",
            "Combinación de ambas",
            "Postoperatorio, trauma, sepsis, estados de bajo gasto"
          ]
        ]
      },
      {
        "titulo": "📊 Clasificación de gravedad del SDRA (Berlín, según PaFi)",
        "columnas": [
          "Gravedad",
          "PaO2/FiO2 (PaFi)"
        ],
        "filas": [
          [
            "Leve",
            "200 - 300 mmHg"
          ],
          [
            "Moderado",
            "100 - 200 mmHg"
          ],
          [
            "Severo",
            "< 100 mmHg"
          ]
        ],
        "nota": "Siempre verifica que se cumplan TAMBIÉN los otros 3 criterios de Berlín (inicio<7 días, opacidades bilaterales, no explicado por edema cardiogénico) — el PaFi solo NO diagnostica SDRA por sí mismo."
      }
    ],
    "diagnostico": "Gasometría arterial (estándar diagnóstico): PaO2<60mmHg (hipoxemia), PaCO2>50mmHg (hipercapnia), pH<7.35 sugiere acidosis respiratoria. Radiografía/TC de tórax: identifica consolidaciones, infiltrados difusos (SDRA), colapso, o edema pulmonar — la TC de alta resolución es útil para patrón intersticial o embolia pulmonar. Ultrasonido pulmonar (protocolo BLUE): líneas B difusas→edema intersticial; consolidaciones subpleurales→neumonía/SDRA; pulmón deslizante presente→descarta neumotórax — permite diagnóstico sindrómico en <5 minutos.",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "1. Evaluación inicial: signos clínicos (disnea, taquipnea, cianosis, uso de músculos accesorios) + gasometría arterial (PaO2<60, PaCO2>50, pH<7.35)"
      },
      {
        "tipo": "paso",
        "texto": "2. Determinar tipo de IRA: hipoxémica (I), hipercápnica (II), o mixta"
      },
      {
        "tipo": "paso",
        "texto": "3. Estudios complementarios: Rx/TC/ecografía pulmonar + ecocardiograma/laboratorio/cultivos según sospecha"
      },
      {
        "tipo": "decision",
        "texto": "4. Oxigenoterapia según severidad",
        "salidas": [
          {
            "etiqueta": "Leve",
            "texto": "Cánula nasal",
            "color": "mint"
          },
          {
            "etiqueta": "Moderada",
            "texto": "Mascarilla simple o con reservorio",
            "color": "coral"
          },
          {
            "etiqueta": "Grave",
            "texto": "Alto flujo (HFNC) / VNI / VM invasiva",
            "color": "alert"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "5. ¿Cumple criterios de SDRA (Berlín)?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Inicio<7 días + hipoxemia + infiltrados bilaterales → manejo específico: VM protectora, posición prono, relajantes musculares, PEEP personalizada",
            "color": "alert"
          },
          {
            "etiqueta": "NO",
            "texto": "Continuar manejo de la IRA según causa de base identificada",
            "color": "coral"
          }
        ]
      },
      {
        "tipo": "paso",
        "texto": "6. Evaluación CONTINUA y soporte avanzado según evolución — proceso cíclico, no un solo paso final"
      }
    ],
    "diagnosticoDiferencial": [
      "Neumonía severa (sin cumplir criterios completos de SDRA)",
      "Sepsis pulmonar",
      "Edema agudo de pulmón cardiogénico (descartado por ecocardiograma en criterios de Berlín)",
      "Embolia pulmonar masiva"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "Oxigenoterapia individualizada según causa y gravedad (ver algoritmo)",
        "HFNC (cánula nasal de alto flujo): mejora oxigenación sin intubación; útil en neumonía viral, SDRA leve, inmunocomprometidos; mejora comodidad y reduce necesidad de intubación",
        "Mascarilla reservorio: en hipoxemia severa transitoria",
        "Oxigenoterapia TITULADA en EPOC: objetivo SatO2 88-92% específicamente para evitar precipitar hipercapnia",
        "Soporte hemodinámico",
        "Vigilancia intensiva",
        "SDRA — VM protectora: volúmenes corrientes bajos, PEEP personalizada, posición PRONO — estrategias que han reducido la mortalidad del SDRA severo con el tiempo",
        "ECMO (membrana extracorpórea): indicada en SDRA REFRACTARIO con hipoxemia persistente (PaFi<80 pese a tratamiento óptimo)"
      ],
      "farmacologico": [
        "Corrección del factor desencadenante: tratamiento de la infección, insuficiencia cardiaca, tromboembolismo, etc. según causa identificada",
        "Corticosteroides en SDRA: uso sigue siendo CONTROVERSIAL, con indicación solo en fases tardías seleccionadas — no de rutina"
      ]
    },
    "complicaciones": [
      "Falla multiorgánica si no se corrige rápidamente",
      "Fibrosis pulmonar residual post-SDRA",
      "Disfunción muscular adquirida en UCI",
      "Complicaciones asociadas a ventilación mecánica prolongada",
      "Mortalidad: SDRA severo tiene mortalidad de 35-45%, aunque ha disminuido con estrategias de protección pulmonar y posición prono"
    ],
    "prevencion": "Tratamiento oportuno de infecciones respiratorias graves, vacunación (influenza, neumococo, COVID-19), manejo adecuado de comorbilidades que predisponen a IRA (EPOC, insuficiencia cardiaca).",
    "perlasProfundo": "El seguimiento post-UCI en sobrevivientes de SDRA es tan importante como el manejo agudo: incluye evaluación de función pulmonar, rehabilitación respiratoria, y monitoreo de complicaciones a largo plazo como fibrosis pulmonar o disfunción muscular — el 'alta de UCI' no significa recuperación completa automática.",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con gasometría completa donde debes calcular el PaFi y aplicar los 4 criterios de Berlín — exactamente el patrón del caso real de tu propia clase.",
      "ejercicios": [
        {
          "tipo": "Calcular y clasificar (el más frecuente)",
          "planteamiento": "Paciente con sepsis de origen abdominal, día 3 de evolución, infiltrados bilaterales en Rx, sin cardiomegalia. AGA: PaO2 70mmHg, FiO2 0.5. Calcule PaFi, verifique criterios de Berlín, y clasifique.",
          "respuestaModelo": "PaFi = 70/0.5 = 140 mmHg → rango 100-200 = SDRA MODERADO. Verificando los otros criterios de Berlín: inicio en día 3 (<7 días de sepsis, un evento conocido) ✓, infiltrados bilaterales ✓, sin cardiomegalia (sugiere no cardiogénico, aunque idealmente se confirmaría con ecocardiograma) ✓ — cumple los 4 criterios, diagnóstico de SDRA moderado confirmado."
        },
        {
          "tipo": "Indique y sustente (mecanismo)",
          "planteamiento": "¿Por qué la hipoxemia del SDRA responde poco a aumentar la FiO2, a diferencia de otras causas de hipoxemia?",
          "respuestaModelo": "Porque el mecanismo dominante en SDRA es el SHUNT intrapulmonar verdadero — sangre que atraviesa alvéolos completamente colapsados o llenos de líquido/membranas hialinas, sin ningún contacto con aire ventilado. Aumentar la FiO2 solo mejora el oxígeno disponible en el aire QUE SÍ LLEGA a alvéolos funcionantes — no puede ayudar a la sangre que pasa por alvéolos que no reciben ventilación en absoluto. Por eso la estrategia en SDRA no es solo 'más oxígeno', sino reclutar esos alvéolos colapsados con PEEP y posición prono."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste los 4 criterios diagnósticos de SDRA según la definición de Berlín.",
          "respuestaModelo": "(1) Inicio dentro de los 7 días posteriores a un evento clínico conocido, (2) opacidades bilaterales en imágenes (Rx o TAC), (3) no explicado completamente por edema cardiogénico, (4) hipoxemia según el cociente PaO2/FiO2."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "IRA: PaO2<60 y/o PaCO2>50, en paciente previamente normocápnico — urgencia médica",
      "3 tipos: hipoxémica (I), hipercápnica (II), mixta (III/IV) — orientan la causa probable",
      "SDRA (Berlín): inicio<7días + opacidades bilaterales + no cardiogénico + PaFi alterado; PaFi clasifica gravedad (leve 200-300, moderado 100-200, severo <100)"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — oxigenoterapia por gravedad",
      "columnas": [
        "Gravedad",
        "Dispositivo"
      ],
      "filas": [
        [
          "Leve",
          "Cánula nasal"
        ],
        [
          "Moderada",
          "Mascarilla simple/reservorio"
        ],
        [
          "Grave",
          "HFNC / VNI / VM invasiva"
        ]
      ],
      "nota": "SDRA refractario (PaFi<80 pese a óptimo) → considerar ECMO."
    },
    "clinica": "5 síntomas cardinales: disnea, taquipnea, uso de músculos accesorios, cianosis, alteración del sensorio.",
    "diagnostico": "Gasometría arterial es el estándar. Rx/TC + ecografía pulmonar (protocolo BLUE) apoyan según sospecha.",
    "tratamientoResumen": "Oxigenoterapia escalonada según gravedad + corregir causa desencadenante + SDRA: VM protectora+prono+PEEP; ECMO si refractario.",
    "diferenciales": [
      {
        "entidad": "Edema cardiogénico",
        "clave": "Descartado en SDRA por ecocardiograma — criterio explícito de Berlín"
      },
      {
        "entidad": "Neumonía severa sin SDRA",
        "clave": "No cumple los 4 criterios de Berlín simultáneamente"
      }
    ],
    "tablaComparativa": {
      "titulo": "IRA hipoxémica vs hipercápnica",
      "filas": [
        [
          "Gas alterado",
          "Solo PaO2 bajo",
          "PaCO2 alto (± PaO2 bajo)"
        ],
        [
          "Causa típica",
          "Neumonía, SDRA",
          "EPOC agudizado, neuromuscular"
        ],
        [
          "Mecanismo dominante",
          "Shunt/V-Q/difusión",
          "Hipoventilación alveolar"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Cuáles son los valores gasométricos que definen IRA? → PaO2<60mmHg y/o PaCO2>50mmHg, en paciente previamente normocápnico",
      "¿Cuáles son los 4 criterios de Berlín para SDRA? → Inicio<7días de evento conocido + opacidades bilaterales + no explicado por edema cardiogénico + hipoxemia por PaFi",
      "¿Qué mecanismo de hipoxemia predomina en SDRA? → Shunt intrapulmonar (resistente a oxígeno suplementario)",
      "¿Cuál es el objetivo de SatO2 en EPOC con oxigenoterapia? → 88-92%, para evitar precipitar hipercapnia",
      "¿Cuándo considerar ECMO? → SDRA refractario con PaFi<80 pese a tratamiento óptimo",
      "¿Los corticosteroides son de rutina en SDRA? → NO, controversial, solo en fases tardías seleccionadas",
      "¿Qué estrategias han reducido la mortalidad del SDRA severo? → VM protectora + posición prono"
    ],
    "redFlags": [
      "Confusión/alteración del sensorio en paciente con disnea → signo de alarma, compromiso ya significativo",
      "PaFi<80 pese a tratamiento óptimo → considerar ECMO",
      "Hipoxemia que NO mejora con oxígeno suplementario → sospechar shunt verdadero (SDRA)"
    ],
    "erroresFrecuentes": [
      "Dar oxígeno sin titular en EPOC, precipitando hipercapnia",
      "Asumir SDRA solo por hipoxemia sin verificar los otros 3 criterios de Berlín",
      "Usar corticosteroides de rutina en SDRA temprano",
      "Subestimar la presentación insidiosa en pacientes con IRA sobre patología crónica"
    ],
    "asociacionesClinicas": [
      "Neumonía grave + inicio<7días + infiltrados bilaterales → evaluar activamente criterios de SDRA",
      "IRA hipercápnica + antecedente de EPOC → titular oxígeno con precaución (88-92%)"
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
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/17S3FNJMXxl4Fx6LRgDR30KsZqw9zzlz2/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_3_SESIÓN-8-TEMA-3: Síndrome de Apnea-Hipopnea Obstructiva del Sueño"
  },
  "relacionadas": [
    {
      "id": "epoc",
      "relacion": "El síndrome de superposición (overlap syndrome) EPOC+SAOS empeora significativamente el pronóstico cardiovascular de ambas por separado"
    }
  ],
  "profundo": {
    "definicion": "Episodios recurrentes de obstrucción PARCIAL o COMPLETA de la vía aérea superior durante el sueño, lo que provoca hipoxia intermitente, fragmentación del sueño y despertares repetidos (American Academy of Sleep Medicine, 2020).",
    "epidemiologia": "La prevalencia global de SAHOS leve a severo se estima en 936 MILLONES de adultos entre 30-69 años, y alrededor de 425 millones tienen SAOS moderado a severo. La prevalencia varía entre 9% y 38%, más alta en hombres (13-33%) que en mujeres (6-19%). En mayores de 65 años, las cifras pueden alcanzar 84% (90% en hombres, 78% en mujeres). <span class=\"fuente-ampliada\">El subdiagnóstico es un problema real y reconocido: muchos casos permanecen sin diagnosticar por ausencia de somnolencia evidente o acceso limitado a estudios del sueño — es decir, la prevalencia REAL detectada es probablemente menor a la verdadera.</span>",
    "etiologiaFactoresRiesgo": [
      "Riesgos anatómicos y genéticos: cuello grueso, acúmulo adiposo perifaríngeo, micrognatia, retrognatia, hipertrofia amigdalar — todos favorecen el colapso de la vía aérea",
      "Edad y sexo: mayor prevalencia con edad avanzada (>50 años); relación hombre:mujer ~4.9:1 en adultos — mas tras la MENOPAUSIA esta relación se aproxima a la paridad (pierde su factor protector hormonal)",
      "Obesidad — el factor MODIFICABLE más importante: un aumento del 10% del peso se asocia a una multiplicación ×6 del riesgo de SAHOS moderado-grave",
      "Otros modificables: tabaquismo, alcohol, sedantes/hipnóticos, posición supina al dormir, congestión nasal crónica, embarazo",
      "Comorbilidades asociadas: hipertensión resistente, diabetes tipo 2, síndrome metabólico, acromegalia, hipotiroidismo, insuficiencia cardíaca, fibrilación auricular, falla renal crónica, síndrome de Down o Prader-Willi"
    ],
    "criteriosDiagnosticos": "Apnea: reducción ≥90% del flujo aéreo durante ≥10 segundos. Hipopnea: caída ≥30% del flujo durante ≥10 segundos con desaturación ≥3-4% O arousal (microdespertar) asociado. Criterio diagnóstico: IAH ≥5 eventos/hora CON síntomas diurnos, O IAH/RDI ≥15 SIN síntomas (el umbral más alto compensa la ausencia de clínica).",
    "fisiopatologia": {
      "resumen": "Durante el sueño, el tono muscular de la faringe disminuye fisiológicamente en todas las personas — pero en el paciente con factores anatómicos predisponentes (cuello grueso, retrognatia, hipertrofia amigdalar), esta relajación normal es suficiente para colapsar completa o parcialmente la vía aérea superior, interrumpiendo el flujo de aire pese a que el esfuerzo respiratorio continúa (a diferencia de la apnea CENTRAL, donde el cerebro simplemente deja de enviar la señal de respirar).",
      "cascada": [
        {
          "paso": "Relajación fisiológica del sueño",
          "detalle": "El tono muscular faríngeo disminuye normalmente durante el sueño (más aún en fase REM)"
        },
        {
          "paso": "Colapso de la vía aérea",
          "detalle": "En presencia de factores anatómicos predisponentes, la vía aérea superior se colapsa parcial (hipopnea) o completamente (apnea)"
        },
        {
          "paso": "Hipoxia intermitente",
          "detalle": "El flujo de aire se reduce o cesa pese a que el esfuerzo respiratorio continúa — desaturación de oxígeno progresiva"
        },
        {
          "paso": "Microdespertar (arousal)",
          "detalle": "El cerebro detecta la hipoxia/hipercapnia y genera un despertar breve que restaura el tono muscular y reabre la vía aérea — el paciente rara vez recuerda estos microdespertares"
        },
        {
          "paso": "Fragmentación del sueño",
          "detalle": "Los ciclos repetidos de colapso-despertar (decenas a cientos por noche) impiden alcanzar las fases de sueño profundo reparador"
        },
        {
          "paso": "Consecuencias sistémicas",
          "detalle": "La hipoxia intermitente crónica + fragmentación del sueño generan estrés oxidativo, inflamación sistémica, y activación simpática — la base del aumento de riesgo cardiovascular"
        }
      ],
      "imagenes": [
        {
          "src": "assets/saos/saos-stopbang-tabla.jpg",
          "caption": "Cuestionario STOP-Bang (de tu clase)",
          "explicacion": "Nota el acrónimo: cada letra es una pregunta de Sí/No que suma 1 punto. S-T-O-P son síntomas/signos que TÚ le preguntas directamente al paciente (ronquido, cansancio diurno, apneas observadas, presión arterial alta), mientras que B-A-N-G son datos ANTROPOMÉTRICOS objetivos que no dependen de lo que el paciente reporte (IMC>35, edad>50, cuello>40cm, sexo masculino). Esta combinación de síntomas subjetivos + datos objetivos es lo que le da al STOP-Bang su buena sensibilidad — no depende solo de que el paciente reconozca sus propios síntomas (muchos pacientes con SAOS no perciben bien su propia somnolencia)."
        },
        {
          "src": "assets/saos/saos-iah-severidad-tabla.jpg",
          "caption": "Interpretación del IAH — tabla de severidad",
          "explicacion": "Esta tabla convierte un número (eventos por hora) en una categoría clínica accionable. Fíjate que el corte de <5 es 'Normal' — es decir, TODOS tenemos algunos eventos respiratorios ocasionales durante el sueño, y eso no define enfermedad; lo patológico empieza en ≥5. El salto de Moderado (15-29.9) a Grave (≥30) es clínicamente importante: ≥15 ya se asocia con mayor riesgo cardiovascular incluso SIN síntomas diurnos evidentes, por eso el criterio diagnóstico permite diagnosticar con IAH/RDI≥15 aunque el paciente no refiera somnolencia."
        }
      ],
      "explicacionExtendida": "<span class=\"fuente-ampliada\">Un dato clínico importante que conecta la fisiopatología con el pronóstico: los niveles moderados a severos (IAH≥15) se asocian claramente con mayor riesgo cardiovascular, ACV y mortalidad, INCLUSO EN AUSENCIA de somnolencia clínica evidente — esto significa que un paciente puede sentirse relativamente bien durante el día y aun así estar acumulando daño cardiovascular silencioso cada noche por la hipoxia intermitente repetida. Es la razón por la que el criterio diagnóstico permite diagnosticar SAOS por IAH/RDI≥15 SIN necesidad de síntomas diurnos — el daño fisiopatológico no depende de que el paciente se sienta somnoliento.</span>"
    },
    "clinica": [
      {
        "signo": "Ronquidos fuertes y persistentes",
        "detallePPT": "Síntoma nocturno, frecuentemente reportado por la pareja",
        "mecanismo": "Vibración de tejidos blandos faríngeos por el flujo turbulento a través de la vía aérea parcialmente colapsada"
      },
      {
        "signo": "Episodios de apnea/asfixia observados",
        "detallePPT": "Reportados por familiares o pareja — el paciente mismo rara vez los percibe",
        "mecanismo": "Colapso completo de la vía aérea con cese del flujo pese a esfuerzo respiratorio continuo"
      },
      {
        "signo": "Despertares bruscos con sensación de falta de aire",
        "detallePPT": "Síntoma nocturno",
        "mecanismo": "Microdespertar (arousal) generado por el cerebro al detectar hipoxia/hipercapnia, que restaura el tono muscular"
      },
      {
        "signo": "Fragmentación del sueño, nicturia, boca seca",
        "detallePPT": "Síntomas nocturnos asociados",
        "mecanismo": "Múltiples despertares que impiden alcanzar sueño profundo reparador; respiración bucal por obstrucción nasal/orofaríngea"
      },
      {
        "signo": "Somnolencia excesiva diurna + deterioro cognitivo",
        "detallePPT": "Fatiga, disminución de atención/memoria/funciones ejecutivas; aumenta riesgo de accidentes vehiculares",
        "mecanismo": "<span class=\"fuente-ampliada\">Privación crónica de sueño reparador (no solo de horas totales de sueño, sino de su CALIDAD/continuidad) afecta directamente la consolidación de memoria y las funciones ejecutivas dependientes de sueño profundo/REM.</span>"
      }
    ],
    "examenFisico": [
      "Cuello grueso, circunferencia >40cm (dato objetivo del STOP-Bang)",
      "Micrognatia, retrognatia, hipertrofia amigdalar a la inspección orofaríngea",
      "IMC elevado (frecuentemente >35 en casos de alto riesgo)",
      "Presión arterial elevada (comorbilidad frecuentemente asociada)"
    ],
    "semiologia": {
      "inspeccion": "Evalúa la anatomía craneofacial y orofaríngea: cuello grueso, retrognatia/micrognatia, hipertrofia amigdalar — todos factores anatómicos que predisponen al colapso. Mide la circunferencia del cuello (>40cm es un dato objetivo del STOP-Bang).",
      "palpacion": "Sin hallazgos específicos más allá de la evaluación antropométrica general (IMC, circunferencia de cuello).",
      "percusion": "No aplica de forma característica a esta entidad — el compromiso es funcional/anatómico de la vía aérea superior durante el sueño, no del parénquima pulmonar.",
      "auscultacion": "Sin hallazgos pulmonares característicos durante la vigilia — el problema ocurre específicamente DURANTE el sueño y no se detecta en un examen físico convencional en el consultorio; por eso el diagnóstico depende de la HISTORIA (síntomas reportados por la pareja) y de estudios específicos del sueño, no del examen físico diurno."
    },
    "tablasClinicas": [
      {
        "titulo": "📋 Cuestionario STOP-Bang",
        "contexto": "El más recomendado en la literatura por su facilidad de aplicación, buena sensibilidad, y correlación del puntaje con la severidad del SAHOS.",
        "columnas": [
          "Puntaje",
          "Riesgo"
        ],
        "filas": [
          [
            "0-2",
            "Bajo riesgo"
          ],
          [
            "3-4",
            "Riesgo intermedio"
          ],
          [
            "5-8",
            "Alto riesgo para SAHOS moderado/severo"
          ]
        ],
        "nota": "S-T-O-P (síntomas: ronquido, cansancio diurno, apnea observada, presión arterial alta) + B-A-N-G (datos objetivos: IMC>35, edad>50, cuello>40cm, sexo masculino) = 8 preguntas Sí/No, 1 punto cada una."
      },
      {
        "titulo": "📊 Severidad según IAH (Índice de Apnea-Hipopnea)",
        "columnas": [
          "Severidad",
          "IAH (eventos/hora)"
        ],
        "filas": [
          [
            "Normal",
            "< 5"
          ],
          [
            "Leve",
            "5 - 14.9"
          ],
          [
            "Moderado",
            "15 - 29.9"
          ],
          [
            "Grave",
            "≥ 30"
          ]
        ],
        "nota": "IAH = apneas + hipopneas/hora. RDI (más sensible) = IAH + RERAs (microdespertares por esfuerzo respiratorio sin cumplir criterio completo de apnea/hipopnea)."
      }
    ],
    "diagnostico": "Herramientas de cribado (Epworth, Berlin, STOP, STOP-Bang) identifican RIESGO pero NO son diagnósticas sin confirmación objetiva. Polisomnografía (PSG tipo I) es el ESTÁNDAR DE ORO: incluye EEG, EOG, EMG, ECG, flujo aéreo, esfuerzo respiratorio y oximetría, para medir IAH o RDI. Pruebas domiciliarias (HSAT)/poligrafía (equipos tipo II-III): sensibilidad >80%, aceptables en pacientes sin comorbilidades complejas, con fuerte correlación con PSG en casos moderados-graves. <span class=\"fuente-ampliada\">Técnicas emergentes (2025): radar milimétrico combinado con oxímetro ha alcanzado >90% de precisión frente a PSG en estudios recientes — una alternativa no invasiva en desarrollo.</span>",
    "algoritmo": [
      {
        "tipo": "paso",
        "texto": "Sospecha por síntomas (ronquido, apneas observadas, somnolencia diurna) o hallazgos de riesgo (obesidad, cuello grueso)"
      },
      {
        "tipo": "paso",
        "texto": "Aplicar cuestionario STOP-Bang (u otro instrumento de cribado)"
      },
      {
        "tipo": "decision",
        "texto": "¿Puntaje STOP-Bang de riesgo intermedio o alto (≥3)?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Solicitar estudio de sueño (PSG o HSAT según complejidad del paciente)",
            "color": "coral"
          },
          {
            "etiqueta": "NO — bajo riesgo (0-2)",
            "texto": "Reevaluar si aparecen nuevos síntomas o factores de riesgo",
            "color": "mint"
          }
        ]
      },
      {
        "tipo": "decision",
        "texto": "¿IAH≥5 con síntomas, o IAH/RDI≥15 sin síntomas?",
        "salidas": [
          {
            "etiqueta": "SÍ",
            "texto": "Diagnóstico de SAOS confirmado — clasificar severidad y definir tratamiento",
            "color": "alert"
          },
          {
            "etiqueta": "NO",
            "texto": "SAOS descartado — buscar otra causa de los síntomas",
            "color": "mint"
          }
        ]
      }
    ],
    "diagnosticoDiferencial": [
      "Apnea central del sueño (sin esfuerzo respiratorio, a diferencia de la obstructiva)",
      "Narcolepsia (somnolencia diurna sin el patrón obstructivo nocturno)",
      "Insomnio primario",
      "Síndrome de piernas inquietas"
    ],
    "tratamiento": {
      "noFarmacologico": [
        "CPAP/APAP: tratamiento de ELECCIÓN en SAHOS moderado-severo y en pacientes con somnolencia, deterioro de calidad de vida, o hipertensión asociada — adherencia definida como uso ≥4h/noche en ≥70% de las noches, aunque se recomienda ≥6h/noche para beneficio óptimo",
        "Aparatos de avance mandibular (MAD): para SAOS leve-moderado o intolerancia a CPAP — reducción del IAH >50% en ~1/3 de los casos; requiere dispositivo personalizado + seguimiento dental",
        "Modificación del estilo de vida: pérdida de peso ≥10% puede disminuir el IAH en 26-56%; ejercicio regular, evitar alcohol/sedantes, dejar de fumar, terapia posicional (evitar decúbito supino)",
        "Estimulación del nervio hipogloso (HNS): para SAOS moderado-severo que no tolera CPAP, con criterios anatómicos adecuados (IMC≤32, colapso no concéntrico en DISE) — éxito clínico en 74% a 3 años (estudio STAR)",
        "Cirugía de vías aéreas superiores: UPPP (35-50% de éxito en reducción de IAH, para obstrucción palatal); avance maxilomandibular (MMA) — reducción de IAH ~85%, tasa de curación 50%, para SAOS severo con anomalías craneofaciales o fracaso de CPAP/MAD",
        "Traqueostomía: elimina el SAOS pero se reserva exclusivamente para casos refractarios, dada su alta morbilidad"
      ],
      "farmacologico": [
        "Tirzepatida (Zepbound): APROBADA por la FDA (2024-2025) — primer fármaco indicado específicamente para SAHOS moderado-severo en pacientes con obesidad; en ensayos fase III redujo el IAH hasta 63%, mejoró peso corporal, presión arterial y calidad de sueño",
        "AD-109 (atomoxetina + aroxibutinina): en desarrollo, mostró mejora en SAOS leve en fase II, aún sin aprobación oficial"
      ]
    },
    "complicaciones": [
      "Hipertensión arterial (especialmente resistente al tratamiento)",
      "Arritmias, incluyendo fibrilación auricular",
      "Infarto de miocardio y enfermedad cardiovascular",
      "Accidente cerebrovascular",
      "Resistencia a la insulina y diabetes tipo 2",
      "Deterioro cognitivo progresivo",
      "Accidentes vehiculares/laborales por somnolencia"
    ],
    "prevencion": "Control de peso (factor modificable más importante), evitar alcohol/sedantes antes de dormir, tratamiento de congestión nasal crónica, terapia posicional en casos leves relacionados con decúbito supino.",
    "pronostico": "Sin tratamiento: alto riesgo de hipertensión, arritmias, enfermedad cardiovascular, ACV, resistencia a la insulina y deterioro cognitivo. Con tratamiento adecuado (CPAP u otra estrategia efectiva): mejoría de la calidad de vida, reducción del riesgo cardiovascular, y aumento de la expectativa de vida — la diferencia entre ambos escenarios es sustancial, lo que hace que el diagnóstico y tratamiento oportunos cambien realmente el pronóstico a largo plazo del paciente.",
    "perlasProfundo": "El uso de CPAP ≥4h/día en pacientes con síndrome coronario agudo redujo eventos adversos derivados de SAOS (HR 0.17, p=0.03) — un dato que conecta directamente el tratamiento del sueño con desenlaces cardiovasculares duros, no solo con 'sentirse menos cansado'.",
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con historia clínica + STOP-Bang implícito, donde debes calcular el puntaje y decidir el siguiente paso — exactamente como la pregunta directa que trae tu propio PPT sobre el estándar de oro.",
      "ejercicios": [
        {
          "tipo": "Pregunta directa (tal como aparece en tu propio PPT)",
          "planteamiento": "¿Cuál es la prueba considerada el 'estándar de oro' para diagnóstico del Síndrome de Apnea-Hipopnea Obstructiva del Sueño? a) Oximetría nocturna b) Poligrafía respiratoria domiciliaria c) Polisomnografía nocturna d) Escala de Somnolencia de Epworth e) Cuestionario STOP-Bang",
          "respuestaModelo": "c) Polisomnografía nocturna (PSG tipo I) — es el estándar de oro porque incluye monitoreo completo (EEG, EOG, EMG, ECG, flujo aéreo, esfuerzo respiratorio, oximetría), permitiendo calcular con precisión el IAH y el RDI. Las demás opciones son herramientas de cribado o alternativas menos completas: la oximetría nocturna y el STOP-Bang identifican riesgo pero no diagnostican; la poligrafía domiciliaria (HSAT) es una alternativa aceptable con sensibilidad >80% pero no es el estándar de oro; la Escala de Epworth mide somnolencia subjetiva, no eventos respiratorios."
        },
        {
          "tipo": "Calcular y clasificar",
          "planteamiento": "Paciente con IAH de 22 eventos/hora en polisomnografía. Clasifique la severidad e indique el tratamiento de elección más probable.",
          "respuestaModelo": "Severidad MODERADA (rango 15-29.9). El tratamiento de elección en SAHOS moderado a severo es CPAP, especialmente si el paciente tiene somnolencia, deterioro de calidad de vida, o hipertensión asociada."
        },
        {
          "tipo": "Indique y sustente (fisiopatología)",
          "planteamiento": "¿Por qué el SAOS aumenta el riesgo cardiovascular incluso en pacientes sin somnolencia diurna evidente?",
          "respuestaModelo": "Porque el daño cardiovascular se genera por la hipoxia intermitente y la activación simpática repetida DURANTE el sueño (estrés oxidativo, inflamación sistémica) — un proceso que ocurre independientemente de si el paciente PERCIBE somnolencia durante el día. Por eso niveles de IAH≥15 se asocian a mayor riesgo cardiovascular y mortalidad incluso sin síntomas diurnos evidentes, y el criterio diagnóstico permite diagnosticar SAOS con IAH/RDI≥15 sin necesidad de síntomas."
        }
      ]
    }
  },
  "repaso": {
    "conceptosClave": [
      "SAOS: colapso de vía aérea superior durante el sueño CON esfuerzo respiratorio conservado (a diferencia de la apnea central)",
      "STOP-Bang: cribado rápido; PSG: estándar de oro diagnóstico",
      "IAH≥5 con síntomas, o IAH/RDI≥15 sin síntomas = diagnóstico confirmado"
    ],
    "chuletaRapida": {
      "titulo": "📊 Chuleta rápida — severidad y tratamiento",
      "columnas": [
        "IAH",
        "Severidad",
        "Tratamiento típico"
      ],
      "filas": [
        [
          "5-14.9",
          "Leve",
          "MAD, estilo de vida"
        ],
        [
          "15-29.9",
          "Moderado",
          "CPAP (elección)"
        ],
        [
          "≥30",
          "Grave",
          "CPAP + evaluar opciones quirúrgicas si no tolera"
        ]
      ],
      "nota": "Obesidad es el factor modificable más importante: -10% de peso puede bajar el IAH 26-56%."
    },
    "clinica": "Ronquido + apneas observadas + somnolencia diurna + fragmentación del sueño — el paciente mismo rara vez percibe sus propias apneas.",
    "diagnostico": "STOP-Bang para cribado → PSG (estándar de oro) o HSAT domiciliaria para confirmar con IAH/RDI.",
    "tratamientoResumen": "CPAP es de elección en moderado-severo. MAD en leve-moderado/intolerancia a CPAP. Pérdida de peso siempre recomendada.",
    "diferenciales": [
      {
        "entidad": "Apnea central",
        "clave": "SIN esfuerzo respiratorio durante el evento (a diferencia de la obstructiva)"
      },
      {
        "entidad": "Narcolepsia",
        "clave": "Somnolencia diurna sin el patrón obstructivo nocturno característico"
      }
    ],
    "tablaComparativa": {
      "titulo": "SAOS leve vs grave",
      "filas": [
        [
          "IAH",
          "5-14.9",
          "≥30"
        ],
        [
          "Tratamiento típico",
          "MAD o estilo de vida",
          "CPAP obligatorio ± cirugía"
        ],
        [
          "Riesgo CV",
          "Presente pero menor",
          "Alto, incluso sin síntomas diurnos"
        ]
      ]
    }
  },
  "imprescindible": {
    "loQueSiOSiDebesSaber": [
      "¿Cuál es el estándar de oro diagnóstico? → Polisomnografía (PSG tipo I)",
      "¿Qué diferencia una apnea de una hipopnea? → Apnea: reducción ≥90% del flujo ≥10seg. Hipopnea: caída ≥30% ≥10seg CON desaturación≥3-4% o arousal",
      "¿Cuál es el criterio diagnóstico exacto? → IAH≥5 con síntomas diurnos, O IAH/RDI≥15 sin síntomas",
      "¿Cuál es el tratamiento de elección en SAOS moderado-severo? → CPAP",
      "¿Qué adherencia a CPAP se considera óptima? → ≥6 horas/noche (mínimo aceptable: ≥4h en ≥70% de noches)",
      "¿Cuál es el factor de riesgo modificable más importante? → Obesidad (+10% de peso = ×6 riesgo de SAHOS moderado-grave)",
      "¿Qué fármaco fue aprobado recientemente (2024-25) para SAHOS? → Tirzepatida, en pacientes con obesidad asociada"
    ],
    "redFlags": [
      "IAH≥15 sin síntomas → igual requiere tratamiento por el riesgo cardiovascular silencioso",
      "Somnolencia diurna + conducción de vehículos → riesgo de accidente, abordar con urgencia",
      "SAOS no tratado + síndrome coronario agudo → mayor riesgo de eventos adversos recurrentes"
    ],
    "erroresFrecuentes": [
      "Descartar SAOS solo porque el paciente 'no se siente cansado' — el daño cardiovascular puede ser silencioso",
      "Confiar en el STOP-Bang como diagnóstico definitivo sin confirmación objetiva (PSG/HSAT)",
      "No preguntar específicamente a la PAREJA sobre ronquidos/apneas observadas — el paciente mismo rara vez las percibe",
      "Asumir que la pérdida de peso sola resuelve casos moderados-graves sin CPAP"
    ],
    "asociacionesClinicas": [
      "SAOS + hipertensión RESISTENTE al tratamiento → buscar SAOS activamente como causa subyacente",
      "SAOS + fibrilación auricular recurrente → el tratamiento del SAOS puede mejorar el control del ritmo"
    ]
  },
  "casosClinicos": [
    {
      "nivel": "basico",
      "vineta": "Varón de 52 años, obesidad grado II (IMC 38), acude a consulta porque su esposa refiere que ronca muy fuerte y en ocasiones 'deja de respirar' durante varios segundos mientras duerme. El paciente refiere sentirse cansado durante el día, con dificultad para concentrarse en el trabajo. Circunferencia de cuello 43cm. PA 145/92 mmHg en tratamiento con losartán.",
      "preguntaMC": {
        "enunciado": "Calculando el puntaje STOP-Bang de este paciente (ronquido fuerte=Sí, cansancio diurno=Sí, apneas observadas=Sí, hipertensión=Sí, IMC>35=Sí, edad>50=Sí, cuello>40cm=Sí, sexo masculino=Sí), ¿qué categoría de riesgo tiene y cuál sería el siguiente paso?",
        "opciones": [
          {
            "id": "a",
            "texto": "Puntaje 8/8 — alto riesgo; solicitar estudio de sueño (PSG o HSAT)"
          },
          {
            "id": "b",
            "texto": "Puntaje 3/8 — riesgo intermedio; solo modificación del estilo de vida"
          },
          {
            "id": "c",
            "texto": "Puntaje 8/8 — esto ya ES diagnóstico definitivo de SAOS, iniciar CPAP sin más estudios"
          },
          {
            "id": "d",
            "texto": "No se puede calcular sin saber el IAH primero"
          },
          {
            "id": "e",
            "texto": "Puntaje 2/8 — bajo riesgo, no requiere estudio adicional"
          }
        ],
        "correcta": "a",
        "explicacion": "Este paciente cumple los 8 criterios del STOP-Bang: Ronca duro (S), cansancio diurno (T), apneas observadas por la esposa (O), hipertensión en tratamiento (P), IMC 38>35 (B), edad 52>50 (A), cuello 43cm>40cm (N), sexo masculino (G) = 8/8, ALTO RIESGO para SAHOS moderado/severo. Sin embargo, el STOP-Bang es una herramienta de CRIBADO, no diagnóstica — el siguiente paso correcto es solicitar un estudio de sueño (polisomnografía o poligrafía domiciliaria) para confirmar el diagnóstico y determinar el IAH real antes de iniciar cualquier tratamiento específico como CPAP."
      },
      "preguntaEscrita": {
        "enunciado": "Este paciente tiene hipertensión en tratamiento con losartán. Explica la relación fisiopatológica entre el SAOS no diagnosticado y la dificultad para controlar la presión arterial en un paciente como este.",
        "respuestaModelo": "La hipoxia intermitente y los microdespertares repetidos durante el sueño activan el sistema nervioso simpático de forma sostenida (no solo durante los eventos, sino generando un tono simpático elevado incluso durante la vigilia), lo que contribuye a hipertensión arterial persistente y frecuentemente RESISTENTE al tratamiento farmacológico convencional. Por eso, en un paciente con hipertensión difícil de controlar pese a tratamiento adecuado, sumado a factores de riesgo de SAOS (obesidad, ronquido, cuello grueso), se debe sospechar e investigar activamente el SAOS como causa contribuyente — tratarlo con CPAP puede mejorar significativamente el control de la presión arterial en estos casos."
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
  "id": "anatofisio-respiratorio",
  "nombre": "Anatomía y fisiología del aparato respiratorio",
  "area": "Neumología",
  "tipo": "anatomia-fisiologia",
  "semanas": [
    "semana-01"
  ],
  "favorito": false,
  "estudiado": false,
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1oJIZscyDhTPtnlxS-ewHzB9OabmjHtd7/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_1_SESIÓN-1-TEMA-1: Anatomía y Fisiología del Aparato Respiratorio"
  },
  "contenido": {
    "resumen": "La función del aparato respiratorio es el intercambio gaseoso: llevar oxígeno de la atmósfera a la sangre y eliminar CO2. El sistema combina una vía de conducción (que calienta, humedece y filtra el aire, sin intercambiar gases) con una zona respiratoria (donde sí ocurre el intercambio), impulsado por una bomba mecánica (caja torácica + músculos) y regulado por el centro respiratorio del tronco encefálico según factores neurogénicos y químicos.",
    "estructuras": [
      {
        "nombre": "Nariz y faringe",
        "detalle": "Calientan y humedecen el aire, eliminan partículas, contienen secreciones con IgA, lisozima e interferones. Los cilios desplazan el moco hacia la orofaringe.",
        "imagenes": [
          {
            "src": "assets/anatofisio/anatofisio-via-aerea-superior.jpg",
            "caption": "Anatomía de la vía aérea superior (de tu clase)"
          }
        ]
      },
      {
        "nombre": "Laringe",
        "detalle": "Conecta la faringe con la tráquea y contiene las cuerdas vocales necesarias para la fonación."
      },
      {
        "nombre": "Tráquea, bronquios y bronquiolos",
        "detalle": "Tráquea: 10-12 cm de longitud, se divide en la carina en bronquios principales derecho e izquierdo. Bronquios: paredes con cartílago y músculo liso, revestimiento con cilios y células caliciformes. Bronquiolos: sin cartílago, capa muscular más fina, células ciliadas y células de Clara (producen surfactante). En total hay ~25 divisiones entre la tráquea y los alvéolos: las primeras 7 forman los bronquios, las siguientes 16-18 forman los bronquiolos."
      },
      {
        "nombre": "Alvéolos",
        "detalle": "~300 millones por pulmón, superficie total 40-80 m². Revestimiento de neumocitos tipo I (capa extremadamente delgada, facilita el intercambio gaseoso) y tipo II (producen surfactante, esencial para la estabilidad alveolar). Presencia de macrófagos alveolares para defensa pulmonar."
      },
      {
        "nombre": "Pulmones y pleura",
        "detalle": "Pulmón derecho: 3 lóbulos (superior, medio, inferior) separados por cisuras. Pulmón izquierdo: 2 lóbulos (superior, inferior) separados por la cisura oblicua. Pleura: tejido conectivo recubierto por epitelio escamoso simple, dividida en visceral y parietal."
      },
      {
        "nombre": "Diafragma y vasculatura pulmonar",
        "detalle": "Diafragma: cubierto por pleura parietal arriba y peritoneo abajo, fibras desde costillas inferiores, inervado por nervios frénicos, 50% de fibras de contracción lenta (resistentes a fatiga). Vasculatura: suministro dual (arteria pulmonar + arterias bronquiales), arteriolas de paredes delgadas, vénulas drenan a las 4 venas pulmonares principales, canales linfáticos en el espacio intersticial."
      }
    ],
    "fisiologiaNormal": "El ciclo respiratorio depende de la diferencia de presión entre el alvéolo y la atmósfera. La INSPIRACIÓN es un proceso ACTIVO: contracción del diafragma y músculos intercostales crea presión intrapleural negativa, el pulmón se expande y entra aire. La ESPIRACIÓN en reposo es generalmente PASIVA, por la tendencia natural del pulmón a colapsar. La ventilación está controlada por factores neurogénicos (centro respiratorio del tronco encefálico, nervios frénico e intercostal) y químicos (el AUMENTO de PaCO2 es el principal estímulo respiratorio; la DISMINUCIÓN de PaO2 es el estímulo secundario, y se vuelve principal en EPOC; la acidosis metabólica aumenta la ventilación — respiración de Kussmaul). El intercambio gaseoso depende de ventilación (V), perfusión (Q) y difusión — la relación V/Q ideal es cercana a 1. La ventilación alveolar normal es ~5 L/min, similar al flujo sanguíneo pulmonar. El espacio muerto (porción que no participa en el intercambio) puede ser anatómico (vía de conducción, 100-150mL) o fisiológico (anatómico + áreas ventiladas pero no perfundidas) — en EPOC o embolia pulmonar, el cociente espacio muerto/volumen corriente puede llegar a 0.8-0.9, requiriendo gran aumento compensador de la ventilación.",
    "correlacionClinica": "Entender esta anatomía y fisiología es la base para comprender por qué cada enfermedad respiratoria se manifiesta como lo hace. El transporte de oxígeno depende de la hemoglobina (97-98% del O2 se transporta unido a ella, solo 2-3% disuelto en plasma) — por eso condiciones que alteran la hemoglobina (intoxicación por CO, metahemoglobinemia) alteran gravemente la oxigenación aunque la PaO2 medida parezca normal. El CO2 se transporta principalmente como bicarbonato (90%), 5% disuelto y 5% unido a proteínas (carbamino) — y difunde ~20 veces más rápido que el O2 por su mayor solubilidad, pese a tener mayor peso molecular; esto explica por qué en enfermedades que afectan la DIFUSIÓN (como la fibrosis pulmonar/EPID) la hipoxemia aparece mucho antes que la hipercapnia — el CO2 sigue difundiendo bien pese al engrosamiento de la membrana, mientras que el O2 ya no. <span class=\"fuente-ampliada\">La relación entre capacidad de cierre (CC) y capacidad residual funcional (CRF) explica la disminución de oxigenación con la edad: cuando CC supera a CRF, ocurre cierre de la vía aérea durante la respiración NORMAL — esto pasa más con la edad, en posición supina, y en enfermedad pulmonar.</span>",
    "tablasClinicas": [
      {
        "titulo": "📊 Mecanismos de hipoxemia en diferentes trastornos pulmonares (Tabla 13.2, de tu clase)",
        "contexto": "Esta tabla conecta directamente la fisiología que acabas de repasar con las enfermedades que ya estudiaste — cada fila te dice qué mecanismo predomina en cada una. +++ = más importante, ++ = importante, + = algo importante, – = sin importancia.",
        "columnas": [
          "Trastorno",
          "Hipoventilación",
          "Alt. difusión",
          "Alt. V/Q",
          "Cortocircuito"
        ],
        "filas": [
          [
            "Bronquitis crónica",
            "(+)",
            "–",
            "++",
            "–"
          ],
          [
            "Enfisema (EPOC)",
            "+",
            "++",
            "+++",
            "–"
          ],
          [
            "Asma",
            "–",
            "–",
            "++",
            "–"
          ],
          [
            "Fibrosis (EPID)",
            "–",
            "++",
            "+",
            "+"
          ],
          [
            "Neumonía",
            "–",
            "–",
            "+",
            "++"
          ],
          [
            "Atelectasia",
            "–",
            "–",
            "–",
            "++"
          ],
          [
            "Edema pulmonar",
            "–",
            "+",
            "+",
            "++"
          ],
          [
            "Embolia pulmonar",
            "–",
            "–",
            "++",
            "+"
          ],
          [
            "SDRA",
            "–",
            "–",
            "+",
            "+++"
          ]
        ],
        "nota": "Fíjate en el patrón: las enfermedades OBSTRUCTIVAS (bronquitis, enfisema, asma) predominan por alteración V/Q; las que llenan el alvéolo de golpe (neumonía, SDRA) predominan por cortocircuito; la fibrosis es la única con alteración de difusión como mecanismo relevante."
      },
      {
        "titulo": "🫁 Causas de hipoxemia — resumen mecanístico",
        "columnas": [
          "Mecanismo",
          "Respuesta a O2 suplementario"
        ],
        "filas": [
          [
            "Hipoventilación",
            "Responde BIEN al oxígeno suplementario"
          ],
          [
            "Alteración V/Q (la causa más frecuente de hipoxemia)",
            "Mejora PARCIALMENTE con oxígeno"
          ],
          [
            "Alteración de la difusión (más evidente en ejercicio)",
            "Responde al oxígeno"
          ],
          [
            "Cortocircuito (shunt)",
            "NO responde o responde POCO al oxígeno suplementario"
          ]
        ],
        "nota": "Esta tabla es la base fisiológica de por qué en SDRA (shunt puro) el oxígeno solo no basta y se necesitan estrategias de reclutamiento alveolar (PEEP, prono) — ya lo viste en la clase de IRA/SDRA."
      }
    ],
    "puntosClave": [
      "La vía de conducción no intercambia gases — solo transporta, calienta y filtra el aire (espacio muerto anatómico)",
      "El intercambio gaseoso real ocurre solo en la zona respiratoria (alvéolos) — neumocitos tipo I para el intercambio, tipo II para el surfactante",
      "La inspiración es ACTIVA; la espiración en reposo es PASIVA (se vuelve activa en esfuerzo u obstrucción)",
      "El estímulo respiratorio principal es el AUMENTO de PaCO2 — la disminución de PaO2 es secundario, salvo en EPOC",
      "El CO2 difunde ~20 veces más rápido que el O2 — por eso la hipoxemia aparece antes que la hipercapnia en enfermedades que afectan la difusión",
      "4 mecanismos de hipoxemia: hipoventilación (responde bien a O2), alteración V/Q (la más frecuente, mejora parcial), alteración de difusión (responde a O2), y cortocircuito (NO responde a O2)",
      "La relación ventilación/perfusión (V/Q) es el concepto que conecta anatomía con clínica — casi toda enfermedad respiratoria puede entenderse alterando V, Q, o ambas"
    ],
    "asiLoPreguntanExamen": {
      "intro": "Patrón real de tus exámenes: casos con gasometría arterial completa donde debes identificar el mecanismo fisiopatológico exacto detrás de la alteración — exactamente como el caso real de tu propia clase (la paciente con sospecha de SAOS).",
      "ejercicios": [
        {
          "tipo": "Identificar mecanismo por gasometría (el más frecuente — tal como aparece en tu propio PPT)",
          "planteamiento": "Mujer de 58 años, obesidad grado II, disnea progresiva, somnolencia diurna, ronquidos, cefalea matutina. FR 10 (bajo), SatO2 88%, PaCO2 60mmHg, PaO2 58mmHg, pH 7.28, HCO3 29 mEq/L. Radiografía y espirometría normales. Polisomnografía: múltiples apneas obstructivas. ¿Qué mecanismo fisiopatológico explica mejor la alteración gasométrica?",
          "respuestaModelo": "Hipoventilación alveolar por obstrucción intermitente de la vía aérea superior. El patrón es de hipoventilación crónica COMPENSADA: PaCO2 elevado + pH bajo + HCO3 elevado (compensación renal ya en marcha) = acidosis respiratoria crónica. No hay enfermedad del parénquima pulmonar (Rx normal) ni alteración obstructiva de la vía aérea INFERIOR (espirometría normal) — el problema es el colapso INTERMITENTE de la vía aérea SUPERIOR durante el sueño (SAOS confirmado por polisomnografía), que genera hipoventilación intermitente y desaturación nocturna repetida, con el riñón compensando elevando el HCO3 crónicamente."
        },
        {
          "tipo": "Indique y sustente (mecanismo de difusión)",
          "planteamiento": "¿Por qué en un paciente con fibrosis pulmonar temprana la hipoxemia se hace evidente durante el ejercicio antes que en reposo?",
          "respuestaModelo": "Porque el mecanismo predominante en fibrosis es la alteración de la DIFUSIÓN (membrana alveolo-capilar engrosada). En reposo, el tiempo de tránsito de un glóbulo rojo por el capilar pulmonar es relativamente largo, dando tiempo suficiente para que el oxígeno difunda pese al engrosamiento de la membrana. Durante el ejercicio, el gasto cardíaco aumenta y el tiempo de tránsito capilar se ACORTA significativamente — ya no hay tiempo suficiente para que el oxígeno difunda completamente a través de la membrana engrosada, y la hipoxemia se hace evidente."
        },
        {
          "tipo": "Liste N... (recuerdo puro)",
          "planteamiento": "Liste los 4 mecanismos de hipoxemia y para cada uno indique si responde bien o mal al oxígeno suplementario.",
          "respuestaModelo": "Hipoventilación (responde bien), alteración V/Q (mejora parcial — es la causa más frecuente), alteración de la difusión (responde al oxígeno), cortocircuito/shunt (no responde o responde poco)."
        }
      ]
    }
  },
  "casosClinicos": [
    {
      "nivel": "avanzado",
      "vineta": "(Caso real de tu clase) Mujer de 58 años, con antecedente de obesidad grado II e hipertensión controlada. Acude al servicio de urgencias por disnea progresiva, somnolencia diurna, ronquidos nocturnos y cefalea matutina. Al examen físico: FR 10 rpm (VN 12-20), SatO2 88% al aire ambiente (VN >95%), PaCO2 60 mmHg (VN 40±4), PaO2 58 mmHg (VN >80), pH arterial 7.28 (VN 7.35-7.45), HCO3 29 mEq/L (VN 24±2). Examen neurológico: somnolencia sin déficit focal. Polisomnografía respiratoria: múltiples eventos de apnea obstructiva durante el sueño. Radiografía: sin consolidaciones, sin derrames. Espirometría: dentro de parámetros normales.",
      "preguntaMC": {
        "enunciado": "¿Cuál de los siguientes mecanismos fisiológicos explica mejor la alteración gasométrica observada en este caso?",
        "opciones": [
          {
            "id": "a",
            "texto": "Disminución del gradiente alveolo-capilar por edema pulmonar"
          },
          {
            "id": "b",
            "texto": "Hipoventilación alveolar por alteración neuromuscular primaria"
          },
          {
            "id": "c",
            "texto": "Hipoventilación alveolar por obstrucción intermitente de la vía aérea superior"
          },
          {
            "id": "d",
            "texto": "Cortocircuito (shunt) fisiológico aumentado por fibrosis pulmonar basal"
          }
        ],
        "correcta": "c",
        "explicacion": "La paciente tiene un patrón de hipoventilación crónica COMPENSADA (↑PaCO2, ↓pH, ↑HCO3). No hay signos de enfermedad parenquimatosa pulmonar (Rx normal, descarta A y D) ni alteraciones obstructivas en espirometría (descarta causas de vía aérea inferior). El diagnóstico probable es SAOS: durante el sueño hay colapso de la vía aérea SUPERIOR, generando hipoventilación intermitente → aumento sostenido de CO2 y desaturación nocturna. El sistema renal compensa elevando HCO3, típico de una acidosis respiratoria crónica. No es (B) alteración neuromuscular primaria porque el mecanismo es obstructivo (vía aérea superior), no una falla primaria de los músculos respiratorios."
      },
      "preguntaEscrita": {
        "enunciado": "Explica por qué la frecuencia respiratoria de esta paciente está BAJA (10 rpm) pese a tener hipoxemia e hipercapnia significativas — ¿no debería estar taquipneica compensando?",
        "respuestaModelo": "Normalmente, la hipoxemia e hipercapnia deberían estimular taquipnea compensatoria a través del centro respiratorio. Sin embargo, esta paciente presenta somnolencia (registrada en el examen neurológico), lo que sugiere que la hipercapnia crónica y grave (PaCO2 60) ya está teniendo un efecto DEPRESOR sobre el centro respiratorio — un fenómeno de 'narcosis por CO2' que paradójicamente REDUCE el estímulo ventilatorio en vez de aumentarlo cuando la hipercapnia es muy marcada y crónica. Esta frecuencia respiratoria baja en un paciente hipoxémico e hipercápnico es un signo de ALARMA — sugiere fatiga/depresión del centro respiratorio, no estabilidad, y requiere vigilancia estrecha de la vía aérea y posible soporte ventilatorio."
      }
    }
  ]
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
    "pdfOrigen": {
      "url": "https://drive.google.com/file/d/1ZJsp7Q_IKvVL7a-SUU2Wd_RMiIy03jTe/view",
      "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_1_SESIÓN-1-TEMA-2: Exámenes de ayuda diagnóstica en Neumología"
    },
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
  "pdfOrigen": {
    "url": "https://drive.google.com/file/d/1eqtsjbBAkjIyAnDS-kgiI0tWvRKytKZb/view",
    "titulo": "PPT_MEDICINA INTERNA I_MH-701_SEM_2_SESIÓN-4-TEMA-2: Análisis de Gases Arteriales"
  },
  "contenido": {
    "resumen": "El análisis de gases arteriales (AGA) es la herramienta que permite cuantificar cómo está funcionando el intercambio gaseoso y el equilibrio ácido-base del paciente en tiempo real. Mide cuatro parámetros clave: PaO2 (oxigenación), PaCO2 (ventilación), pH (equilibrio ácido-base) y HCO3- (componente metabólico/renal).",
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
        "detalle": "Refleja el equilibrio ácido-base neto. Normal: 7.35-7.45, compatible con vida entre 6.80-7.70. Es una escala LOGARÍTMICA: un cambio de 0.3 duplica o reduce a la mitad la concentración de H+.",
        "imagenes": [
          {
            "src": "assets/aga/aga-metodo-3-pasos.jpg",
            "caption": "Ejemplo visual del metodo de 3 pasos (de tu clase)",
            "explicacion": "Este ejemplo trabajado muestra los 3 valores lado a lado con codigo de color: verde=normal, naranja/rojo=anormal. HCO3 muy bajo (6) define ACIDOSIS METABOLICA primaria. El pH bajo (7.29) confirma que el trastorno metabolico domina. El PaCO2 bajo (13) es la RESPUESTA COMPENSATORIA esperada (formula de Winter: 1.5x6+8+-2 = 15 a 19), y cae ligeramente por debajo del rango esperado, sugiriendo verificar un componente de alcalosis respiratoria agregada."
          }
        ]
      },
      {
        "nombre": "HCO3- (bicarbonato)",
        "detalle": "Es el componente METABÓLICO/RENAL del equilibrio ácido-base. Normal: 22-26 mEq/L. Es el buffer más significativo en sangre. Los riñones lo ajustan más lento (días) que los pulmones ajustan el CO2 (minutos-horas)."
      },
      {
        "nombre": "Los 3 buffers principales del cuerpo",
        "detalle": "Proteínas, hemoglobina (6 veces más capacidad amortiguadora que las proteínas plasmáticas), y bicarbonato (el más significativo en sangre)."
      }
    ],
    "fisiologiaNormal": "El pH sanguíneo se mantiene estable gracias al equilibrio entre el sistema respiratorio (ajusta CO2 en minutos) y el sistema renal (ajusta bicarbonato en horas a días). Cuando uno falla primero (trastorno primario), el otro compensa en la dirección que normaliza el pH — nunca lo sobrecorrige. El transporte de oxígeno depende en 98.5% de la hemoglobina y solo 1.5% va disuelto en plasma. La desigualdad ventilación-perfusión (V'A/Q') está presente en casi todas las enfermedades pulmonares, con 3 mecanismos compensatorios: mayor extracción tisular de O2, aumento de la ventilación, e incremento del gasto cardíaco.",
    "tablasClinicas": [
      {
        "titulo": "Valores normales y críticos de los gases arteriales",
        "columnas": [
          "Parametro",
          "Rango normal",
          "Valor critico"
        ],
        "filas": [
          [
            "pH",
            "7.35 - 7.45",
            "menor a 7.25 o mayor a 7.60"
          ],
          [
            "SaO2",
            "80% - 100%",
            "menor a 80%"
          ],
          [
            "PaO2",
            "80 - 100 mmHg",
            "menor a 50 mmHg"
          ],
          [
            "PaCO2",
            "35 - 45 mmHg",
            "mayor a 45 (acidosis) o menor a 35 (alcalosis)"
          ],
          [
            "HCO3-",
            "22 - 26 mEq/L",
            "mayor a 26 (alcalosis) o menor a 22 (acidosis)"
          ],
          [
            "Exceso/deficit de base",
            "-2 a +2 mEq/L",
            "fuera de ese rango"
          ]
        ]
      },
      {
        "titulo": "Causas de hipoxemia arterial - patron por mecanismo",
        "contexto": "Cada mecanismo de hipoxemia deja un patron distinto en 3 variables.",
        "columnas": [
          "Causa",
          "PCO2 arterial",
          "Gradiente A-aO2",
          "PO2 con O2 100%"
        ],
        "filas": [
          [
            "PO2 inspirada baja (altitud)",
            "Disminuida",
            "Normal",
            "Normal"
          ],
          [
            "Hipoventilacion",
            "Aumentada",
            "Normal",
            "Normal"
          ],
          [
            "Desigualdad V-Q",
            "Variable",
            "Aumentada",
            "Normal"
          ],
          [
            "Limitacion de difusion",
            "Normal",
            "Aumentada",
            "Normal"
          ],
          [
            "Shunt",
            "Variable",
            "Aumentada",
            "Anormal (NO corrige)"
          ]
        ],
        "nota": "El shunt es el unico que NO normaliza la PO2 con oxigeno al 100 por ciento."
      },
      {
        "titulo": "Guia clinica de interpretacion - 5 pasos",
        "columnas": [
          "Paso",
          "Pregunta"
        ],
        "filas": [
          [
            "1",
            "Evaluar PO2: hay hipoxia? (considerar FiO2, calcular gradiente A-a)"
          ],
          [
            "2",
            "Examinar el pH: es normal?"
          ],
          [
            "3",
            "Revisar PaCO2 en contexto con el pH"
          ],
          [
            "4",
            "Evaluar componente metabolico: revisar HCO3 y exceso de base"
          ],
          [
            "5",
            "Valorar la compensacion: es parcial o completa?"
          ]
        ]
      }
    ],
    "correlacionClinica": "La guia practica de interpretacion sigue siempre los mismos pasos: pH, PaCO2, HCO3, calcular compensacion esperada, calcular PaFi, e integrar con la clinica.",
    "puntosClave": [
      "PaCO2 es el componente respiratorio; HCO3- es el componente metabolico/renal",
      "Acidosis respiratoria: HCO3 esperado = 24 + [(PaCO2-40)/10]",
      "Alcalosis respiratoria: HCO3 esperado = 24 menos [(40-PaCO2)/10] por 2",
      "Acidosis metabolica: PaCO2 esperado = (1.5 x HCO3) + 8 +-2 (formula de Winter)",
      "Alcalosis metabolica: PaCO2 esperado = 0.7 x (HCO3-24) + 40 +-5",
      "PaFi = PaO2 / FiO2",
      "El SHUNT es el unico mecanismo de hipoxemia que NO corrige con O2 al 100 por ciento",
      "La compensacion nunca es excesiva"
    ],
    "asiLoPreguntanExamen": {
      "intro": "Patron real de tus examenes: casos con AGA completa donde debes seguir los 5 pasos de interpretacion y conectar con el anion gap.",
      "ejercicios": [
        {
          "tipo": "Interpretar AGA completa y sustentar",
          "planteamiento": "Mujer 83 anos con NAC. AGA sin oxigenoterapia: pH 7.55, pO2 52, pCO2 26, HCO3 22. Que alteracion presenta?",
          "respuestaModelo": "ALCALOSIS RESPIRATORIA. pH elevado (alcalemia) + PaCO2 bajo ya explica el pH = trastorno RESPIRATORIO primario. El HCO3 en limite bajo-normal sugiere compensacion metabolica apenas iniciandose. La hipoxemia (PaO2 52) por la neumonia estimula hiperventilacion compensatoria, causando la caida secundaria del CO2."
        },
        {
          "tipo": "Conectar con anion gap (MUDPILES)",
          "planteamiento": "Varon 65 anos, diabetico, Kussmaul, pH 7.10, HCO3 9, PaCO2 22, anion gap 24, glucosa 360, cetonas positivas. Causa mas probable?",
          "respuestaModelo": "Cetoacidosis diabetica. pH bajo + HCO3 muy bajo = acidosis metabolica; PaCO2 bajo = compensacion respiratoria (Kussmaul). Anion gap elevado descarta causas hipercloremicas y orienta a MUDPILES. Los datos clinicos (glucosa alta, cetonuria, Kussmaul) apuntan especificamente a cetoacidosis diabetica."
        },
        {
          "tipo": "Liste N...",
          "planteamiento": "Liste las causas de acidosis metabolica con anion gap elevado segun MUDPILES.",
          "respuestaModelo": "Metanol, Uremia, Diabetes (cetoacidosis), Propilenglicol, Infeccion/Isquemia, Lactic acidosis, Etanol/Etilenglicol, Salicilatos."
        }
      ]
    }
  },
  "casosClinicos": [
    {
      "nivel": "intermedio",
      "vineta": "(Caso real de tu clase) Paciente mujer de 83 anos acude a emergencia por trastorno del sensorio. Desde hace 2 dias presenta fiebre, tos con expectoracion verdosa, hiporexia y disnea a minimos esfuerzos. Crepitos en base izquierda. FR 32x'. Radiografia: consolidado basal izquierdo con broncograma aereo. Gasometria sin oxigenoterapia: pH 7.55, pO2 52 mmHg, pCO2 26 mmHg, HCO3 22 mEq/L.",
      "preguntaMC": {
        "enunciado": "Que alteracion acido-base se evidencia y cual seria su diagnostico respiratorio principal?",
        "opciones": [
          {
            "id": "a",
            "texto": "Acidosis metabolica; diagnostico: sepsis de origen pulmonar"
          },
          {
            "id": "b",
            "texto": "Alcalosis respiratoria (trastorno primario respiratorio); diagnostico: neumonia adquirida en la comunidad"
          },
          {
            "id": "c",
            "texto": "Acidosis respiratoria; diagnostico: EPOC reagudizado"
          },
          {
            "id": "d",
            "texto": "Trastorno mixto acidosis metabolica + alcalosis respiratoria; diagnostico: sepsis"
          },
          {
            "id": "e",
            "texto": "Gasometria normal, sin alteracion acido-base"
          }
        ],
        "correcta": "b",
        "explicacion": "pH elevado (7.55) define alcalemia, y PaCO2 bajo (26) ya explica esa alcalemia = trastorno RESPIRATORIO primario, alcalosis respiratoria. HCO3 (22) en limite bajo-normal, consistente con inicio de compensacion metabolica. Con la clinica (fiebre, tos productiva, crepitos focales) + radiologia (consolidado con broncograma aereo) + gasometria (hipoxemia con alcalosis respiratoria por hiperventilacion compensatoria), el diagnostico principal es Neumonia Adquirida en la Comunidad."
      },
      "preguntaEscrita": {
        "enunciado": "Explica el mecanismo por el cual esta paciente desarrolla alcalosis respiratoria en el contexto de una neumonia.",
        "respuestaModelo": "La consolidacion neumonica genera desigualdad ventilacion-perfusion (V/Q) — parte del pulmon sigue perfundido pero ya no se ventila adecuadamente, causando hipoxemia (PaO2 52). Esta hipoxemia estimula los quimiorreceptores perifericos, que estimulan el centro respiratorio para AUMENTAR la ventilacion. Este aumento tambien expulsa mas CO2 de lo normal, causando hipocapnia secundaria (PaCO2 26) y alcalosis respiratoria. La hiperventilacion no es la enfermedad primaria, es la RESPUESTA a la hipoxemia causada por la neumonia."
      }
    },
    {
      "nivel": "avanzado",
      "vineta": "(Caso real de tu clase) Varon de 65 anos, diabetico tipo 2, acude a Emergencias con letargo, respiracion rapida y profunda, y dolor abdominal difuso. Automedicacion con antiinflamatorios, glucosa mal controlada, vomitos. PA 90/60, FC 110, FR 28, SatO2 96%. Laboratorio: pH 7.10, HCO3 9 mEq/L, pCO2 22 mmHg, anion gap 24, glucosa 360 mg/dL, creatinina 2.2 mg/dL, cetonas urinarias positivas.",
      "preguntaMC": {
        "enunciado": "Cual es la causa mas probable de la acidosis metabolica en este paciente?",
        "opciones": [
          {
            "id": "a",
            "texto": "Cetoacidosis diabetica"
          },
          {
            "id": "b",
            "texto": "Acidosis lactica"
          },
          {
            "id": "c",
            "texto": "Acidosis tubular renal tipo 1"
          },
          {
            "id": "d",
            "texto": "Acidosis por perdida gastrointestinal de bicarbonato"
          },
          {
            "id": "e",
            "texto": "Insuficiencia renal cronica compensada"
          }
        ],
        "correcta": "a",
        "explicacion": "pH bajo + HCO3 muy disminuido (9) = acidosis metabolica; PaCO2 bajo (22) = compensacion respiratoria tipo Kussmaul. El anion gap elevado (24) orienta a causas MUDPILES, descartando causas hipercloremicas (C y D). Los datos clave (glucosa 360, cetonas positivas, vomitos, Kussmaul) son muy compatibles con cetoacidosis diabetica. B podria coexistir pero no hay evidencia de shock franco. E no genera cuadro tan agudo ni cetonuria."
      },
      "preguntaEscrita": {
        "enunciado": "Por que el anion gap elevado es la pista clave que distingue entre las opciones, y que mnemotecnia usarias?",
        "respuestaModelo": "El anion gap elevado (24) indica acidos no medidos habitualmente (cetoacidos, acido lactico) acumulandose en sangre — esto descarta las causas de anion gap NORMAL (hipercloremicas), como acidosis tubular renal tipo 1 o perdida GI de bicarbonato. La mnemotecnia MUDPILES ayuda: Metanol, Uremia, Diabetes, Propilenglicol, Infeccion/Isquemia, Lactic acidosis, Etanol/Etilenglicol, Salicilatos — el cuadro clinico (diabetes mal controlada + cetonuria + hiperglicemia) apunta especificamente a Diabetes/cetoacidosis."
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
    "casosComparativos": [
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con obstrucción confirmada por espirometría (FEV1/FVC<0.70). Necesitas decidir entre EPOC y Asma antes de elegir tratamiento.",
    "preguntaMC": {
      "enunciado": "¿Qué dato espirométrico distingue con más certeza entre EPOC y Asma?",
      "opciones": [
        {
          "id": "a",
          "texto": "La reversibilidad post-broncodilatador: ≥12% y 200mL en FEV1 es compatible con asma; su ausencia orienta a EPOC"
        },
        {
          "id": "b",
          "texto": "El valor absoluto de FEV1, que siempre es más bajo en asma que en EPOC"
        },
        {
          "id": "c",
          "texto": "La presencia de sibilancias, exclusiva del asma"
        },
        {
          "id": "d",
          "texto": "La edad del paciente, que por sí sola confirma el diagnóstico"
        }
      ],
      "correcta": "a",
      "explicacion": "La reversibilidad post-broncodilatador (≥12% y 200mL de aumento en FEV1) es el dato espirométrico clave: compatible con asma si está presente; su AUSENCIA (obstrucción fija) orienta a EPOC. El valor absoluto de FEV1 (b) no distingue por sí solo, ambas pueden tener cualquier grado de obstrucción. Las sibilancias (c) pueden estar presentes en ambas. La edad (d) es orientadora pero nunca diagnóstica por sí sola."
    },
    "preguntaEscrita": {
      "enunciado": "Explica por qué la reversibilidad post-broncodilatador es fisiopatológicamente distinta entre asma y EPOC.",
      "respuestaModelo": "En el asma, la obstrucción es principalmente por broncoespasmo e inflamación reversible de la vía aérea — el músculo liso bronquial se relaja con el broncodilatador, revirtiendo gran parte de la obstrucción. En EPOC, la obstrucción se debe a cambios estructurales permanentes (destrucción de la pared alveolar en enfisema, fibrosis peribronquial en bronquitis crónica) que un broncodilatador no puede revertir — por eso la mejoría con broncodilatador es mínima o ausente."
    }
  },
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con disnea crónica progresiva. Necesitas decidir si el patrón funcional es obstructivo o restrictivo antes de continuar el estudio.",
    "preguntaMC": {
      "enunciado": "EPOC y EPID comparten disnea crónica progresiva. ¿Qué patrón funcional tiene cada uno?",
      "opciones": [
        {
          "id": "a",
          "texto": "EPOC = patrón obstructivo (FEV1/FVC<0.70). EPID = patrón restrictivo (FEV1/FVC normal o alto, con CVF y CPT reducidos)"
        },
        {
          "id": "b",
          "texto": "Ambos tienen patrón obstructivo, solo cambia la gravedad"
        },
        {
          "id": "c",
          "texto": "EPOC = restrictivo. EPID = obstructivo"
        },
        {
          "id": "d",
          "texto": "Ninguno altera la espirometría de forma característica"
        }
      ],
      "correcta": "a",
      "explicacion": "EPOC produce un patrón OBSTRUCTIVO (FEV1/FVC<0.70, por resistencia aumentada al flujo de aire). EPID produce un patrón RESTRICTIVO (FEV1/FVC normal o incluso alto, pero con CVF y capacidad pulmonar total reducidas, por la fibrosis que rigidiza el pulmón y reduce todos los volúmenes proporcionalmente)."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué en el patrón restrictivo el cociente FEV1/FVC puede estar normal o incluso alto, pese a que el paciente tiene claramente una enfermedad pulmonar?",
      "respuestaModelo": "Porque en el patrón restrictivo, TANTO el FEV1 como la FVC están reducidos de forma proporcional (el pulmón rígido por fibrosis no logra expandirse ni vaciarse completamente, pero lo que sí sale, sale rápido porque no hay obstrucción al flujo). Al mantenerse la proporción entre ambos valores, el cociente FEV1/FVC no cae por debajo de lo normal — de hecho puede estar en el límite alto porque la FVC se reduce relativamente más que el FEV1."
    }
  },
  {
    "nivel": "basico",
    "vineta": "Comparativo de módulo: paciente con abolición del murmullo vesicular en un hemitórax. Necesitas decidir entre neumotórax y derrame pleural antes de solicitar más estudios.",
    "preguntaMC": {
      "enunciado": "Neumotórax y derrame pleural abolen ambos el murmullo vesicular. ¿Qué los distingue en la percusión?",
      "opciones": [
        {
          "id": "a",
          "texto": "Neumotórax = timpanismo/hiperresonancia. Derrame = matidez"
        },
        {
          "id": "b",
          "texto": "Neumotórax = matidez. Derrame = timpanismo"
        },
        {
          "id": "c",
          "texto": "Ambos dan matidez, no se distinguen por percusión"
        },
        {
          "id": "d",
          "texto": "El frémito vocal es la única forma de distinguirlos"
        }
      ],
      "correcta": "a",
      "explicacion": "El AIRE libre del neumotórax genera TIMPANISMO/hiperresonancia a la percusión (más resonante que el pulmón normal). El LÍQUIDO del derrame genera MATIDEZ (el líquido no deja pasar bien el sonido). El frémito vocal (d) está DISMINUIDO en ambos casos y por lo tanto NO los diferencia — es un distractor común en examen."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué el frémito vocal está disminuido tanto en el neumotórax como en el derrame pleural, si son entidades opuestas (aire vs. líquido)?",
      "respuestaModelo": "Porque en ambos casos hay algo interpuesto entre el parénquima pulmonar (donde se genera el sonido) y la pared torácica — en el neumotórax es aire libre, en el derrame es líquido — y ambos actúan como una barrera que atenúa la transmisión de las vibraciones, sin importar de qué esté hecha esa barrera. Por eso el frémito vocal disminuido no distingue entre ambas entidades; se necesita la percusión (timpanismo vs. matidez) para diferenciarlas."
    }
  },
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con tos y fiebre de varios días de evolución. Necesitas diferenciar entre un proceso agudo típico y uno de curso más prolongado antes de decidir estudios.",
    "preguntaMC": {
      "enunciado": "NAC y Tuberculosis pulmonar ambas dan tos y fiebre. ¿Cuál es la diferencia de curso temporal más útil?",
      "opciones": [
        {
          "id": "a",
          "texto": "NAC = curso agudo (días). TB = curso insidioso (semanas a meses), con pérdida de peso y sudoración nocturna más marcadas"
        },
        {
          "id": "b",
          "texto": "Ambas tienen exactamente el mismo curso temporal"
        },
        {
          "id": "c",
          "texto": "NAC siempre dura más tiempo que la TB"
        },
        {
          "id": "d",
          "texto": "El curso temporal no es un dato útil, solo importa el cultivo"
        }
      ],
      "correcta": "a",
      "explicacion": "La NAC tiene un curso AGUDO, de días de evolución. La TB tiene un curso INSIDIOSO, de semanas a meses, típicamente acompañado de síntomas sistémicos más marcados: pérdida de peso progresiva y sudoración nocturna — síntomas que no son característicos de una NAC típica."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué la TB tiene un curso tan insidioso comparado con la NAC, si ambas son infecciones respiratorias?",
      "respuestaModelo": "Porque M. tuberculosis es un patógeno de crecimiento LENTO (tiempo de duplicación de aproximadamente 20 horas, muy superior al de las bacterias típicas de NAC como el neumococo), y además genera una respuesta inmune granulomatosa que inicialmente CONTIENE la infección antes de que progrese a enfermedad activa — este proceso de contención y eventual escape toma semanas a meses, a diferencia de la NAC donde la bacteria prolifera rápidamente y genera síntomas agudos en cuestión de días."
    }
  },
  {
    "nivel": "avanzado",
    "vineta": "Comparativo de módulo: paciente con neumonía, necesitas determinar si el espectro antibiótico empírico debe ser el estándar o ampliado según el lugar de adquisición.",
    "preguntaMC": {
      "enunciado": "NAC vs. Neumonía nosocomial: ¿qué cambia entre ambas más allá del lugar de adquisición?",
      "opciones": [
        {
          "id": "a",
          "texto": "La nosocomial (>48h de hospitalización) tiene mayor riesgo de patógenos multirresistentes, obligando a ampliar la cobertura antibiótica empírica"
        },
        {
          "id": "b",
          "texto": "No hay ninguna diferencia real en el manejo"
        },
        {
          "id": "c",
          "texto": "La NAC siempre requiere antibióticos de mayor espectro"
        },
        {
          "id": "d",
          "texto": "La nosocomial nunca requiere cobertura para Pseudomonas"
        }
      ],
      "correcta": "a",
      "explicacion": "La neumonía nosocomial (definida por desarrollarse >48h después del ingreso hospitalario) conlleva mayor riesgo de patógenos multirresistentes (Pseudomonas aeruginosa, Acinetobacter, Enterobacteriaceae resistentes) por la exposición al ambiente hospitalario — esto obliga a ampliar el espectro antibiótico empírico comparado con una NAC típica, donde el espectro de patógenos esperado es más simple y predecible."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué el simple hecho de estar hospitalizado aumenta el riesgo de infección por patógenos multirresistentes?",
      "respuestaModelo": "Porque el ambiente hospitalario alberga una flora bacteriana distinta a la comunitaria — con presión selectiva constante por el uso extenso de antibióticos, lo que favorece la supervivencia y proliferación de cepas resistentes. Además, el paciente hospitalizado puede colonizarse con estos patógenos a través de superficies, personal de salud, o dispositivos médicos (catéteres, tubos endotraqueales), independientemente de la razón original de su hospitalización — por eso incluso una neumonía que se desarrolla después de una cirugía no respiratoria debe considerarse de alto riesgo para multirresistencia."
    }
  },
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con tos productiva crónica. Necesitas decidir si cumple criterios de bronquitis crónica, de EPOC, o de ambas antes de continuar el estudio.",
    "preguntaMC": {
      "enunciado": "Bronquitis crónica vs. EPOC: ¿en qué se diferencian exactamente, si comparten tanto?",
      "opciones": [
        {
          "id": "a",
          "texto": "Bronquitis crónica = diagnóstico clínico (tos productiva ≥3 meses/año x2 años). EPOC = requiere confirmación espirométrica de obstrucción fija"
        },
        {
          "id": "b",
          "texto": "Son exactamente lo mismo, términos intercambiables"
        },
        {
          "id": "c",
          "texto": "EPOC es un diagnóstico exclusivamente clínico, sin necesidad de espirometría"
        },
        {
          "id": "d",
          "texto": "La bronquitis crónica siempre implica EPOC"
        }
      ],
      "correcta": "a",
      "explicacion": "La bronquitis crónica es un diagnóstico puramente CLÍNICO (tos productiva ≥3 meses/año durante 2 años consecutivos, sin necesidad de espirometría). El EPOC requiere CONFIRMACIÓN espirométrica de obstrucción fija al flujo aéreo (FEV1/FVC<0.70 post-broncodilatador). Un paciente puede tener bronquitis crónica SIN tener EPOC (si su espirometría es normal) — son conceptos relacionados pero no sinónimos."
    },
    "preguntaEscrita": {
      "enunciado": "Describe un escenario clínico coherente de un paciente que tenga bronquitis crónica pero NO cumpla criterios de EPOC.",
      "respuestaModelo": "Un fumador de larga data que desarrolla tos productiva crónica (cumpliendo el criterio de ≥3 meses/año por 2 años consecutivos, por la hipersecreción mucosa inducida por el tabaco) pero cuya espirometría todavía muestra un FEV1/FVC ≥0.70 — es decir, sin obstrucción fija establecida todavía. Este paciente tiene bronquitis crónica (por definición clínica) pero NO cumple los criterios espirométricos de EPOC, aunque podría desarrollarlos en el futuro si continúa la exposición al tabaco."
    }
  },
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con síntomas respiratorios que mejoran fuera del ambiente laboral. Necesitas diferenciar entre 2 entidades ocupacionales antes de decidir el tratamiento.",
    "preguntaMC": {
      "enunciado": "Alveolitis alérgica extrínseca vs. Asma ocupacional: ambas mejoran fuera del trabajo. ¿Qué hallazgo auscultatorio las distingue?",
      "opciones": [
        {
          "id": "a",
          "texto": "Alveolitis alérgica extrínseca = estertores finos SIN sibilancias. Asma ocupacional = sibilancias difusas"
        },
        {
          "id": "b",
          "texto": "Ambas dan exactamente los mismos hallazgos auscultatorios"
        },
        {
          "id": "c",
          "texto": "Alveolitis alérgica extrínseca = sibilancias. Asma ocupacional = estertores"
        },
        {
          "id": "d",
          "texto": "Ninguna de las dos tiene hallazgos auscultatorios característicos"
        }
      ],
      "correcta": "a",
      "explicacion": "La presencia o ausencia de sibilancias es la clave: la alveolitis alérgica extrínseca (por su naturaleza de reacción de hipersensibilidad alveolar/intersticial) da estertores finos SIN sibilancias, mientras que el asma ocupacional (por su naturaleza de broncoespasmo de vía aérea) da sibilancias difusas características."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué la alveolitis alérgica extrínseca no produce sibilancias, si también es una reacción de hipersensibilidad respiratoria como el asma?",
      "respuestaModelo": "Porque el sitio anatómico de la reacción es distinto: la alveolitis alérgica extrínseca es una reacción de hipersensibilidad que ocurre a nivel ALVEOLAR e INTERSTICIAL (produciendo infiltrado intersticial e inflamación del parénquima), no a nivel de la vía aérea de mediano/pequeño calibre donde se genera el broncoespasmo. Las sibilancias requieren estrechamiento de una vía aérea con capacidad de turbulencia de flujo — algo que no ocurre cuando el proceso inflamatorio está confinado al espacio alveolar, como en la alveolitis."
    }
  },
  {
    "nivel": "avanzado",
    "vineta": "Comparativo de módulo: paciente con crépitos bibasales. Necesitas diferenciar entre una causa pulmonar primaria y una causa cardíaca antes de decidir el estudio inicial.",
    "preguntaMC": {
      "enunciado": "EPID vs. Insuficiencia cardiaca: ambas dan crépitos bibasales. ¿Qué otros datos las diferencian?",
      "opciones": [
        {
          "id": "a",
          "texto": "EPID: crépitos tipo 'velcro' específicos, sin sobrecarga de volumen. IC: crépitos más húmedos/gruesos, con ingurgitación yugular, edemas, y respuesta a diuréticos"
        },
        {
          "id": "b",
          "texto": "No existe ninguna forma de diferenciarlas clínicamente"
        },
        {
          "id": "c",
          "texto": "La EPID siempre cursa con edemas de miembros inferiores"
        },
        {
          "id": "d",
          "texto": "La insuficiencia cardiaca nunca da crépitos bibasales"
        }
      ],
      "correcta": "a",
      "explicacion": "La EPID da crépitos tipo 'Velcro' (finos, secos, característicos) SIN signos de sobrecarga de volumen. La insuficiencia cardiaca da crépitos más húmedos/gruesos, ACOMPAÑADOS de signos de sobrecarga (ingurgitación yugular, edemas de miembros inferiores) y típicamente MEJORAN con diuréticos — algo que no ocurriría en EPID, ya que su causa no es de sobrecarga de volumen."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué el sonido de los crépitos tipo 'Velcro' de la EPID suena distinto a los crépitos húmedos de la insuficiencia cardiaca?",
      "respuestaModelo": "Los crépitos tipo Velcro de la EPID se generan por la apertura súbita de pequeñas vías aéreas que estaban colapsadas por la FIBROSIS circundante (tejido rígido y seco) — produciendo un sonido fino, seco y de alta frecuencia, similar a separar velcro. Los crépitos de la insuficiencia cardiaca se generan por la presencia de LÍQUIDO (edema alveolar por congestión) en los espacios aéreos — produciendo un sonido más húmedo, burbujeante y de menor frecuencia, porque el mecanismo es el paso de aire a través de líquido acumulado, no la apertura de tejido fibrótico rígido."
    }
  },
  {
    "nivel": "avanzado",
    "vineta": "Comparativo de módulo: paciente con infiltrados bilaterales e hipoxemia aguda. Necesitas aplicar los criterios de Berlín para diferenciar SDRA de edema cardiogénico.",
    "preguntaMC": {
      "enunciado": "SDRA vs. edema pulmonar cardiogénico: ambos dan infiltrados bilaterales e hipoxemia. ¿Cómo se diferencian según Berlín?",
      "opciones": [
        {
          "id": "a",
          "texto": "SDRA requiere que el cuadro NO se explique completamente por edema cardiogénico (ecocardiograma ayuda) y tenga un evento desencadenante conocido en los últimos 7 días"
        },
        {
          "id": "b",
          "texto": "El edema cardiogénico siempre cumple los criterios de SDRA"
        },
        {
          "id": "c",
          "texto": "No hay ninguna forma de distinguirlos, se tratan igual"
        },
        {
          "id": "d",
          "texto": "El SDRA nunca cursa con infiltrados bilaterales"
        }
      ],
      "correcta": "a",
      "explicacion": "Uno de los 4 criterios de Berlín para SDRA es explícitamente que el cuadro NO se explique completamente por edema cardiogénico o sobrecarga de volumen — el ecocardiograma (evaluando función ventricular) ayuda a descartar esta causa. Además, el SDRA requiere un evento desencadenante conocido (neumonía, sepsis, trauma) dentro de los 7 días previos al inicio del cuadro."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué es clínicamente importante distinguir entre SDRA y edema cardiogénico si ambos pueden verse similares en la radiografía?",
      "respuestaModelo": "Porque el manejo es radicalmente distinto: el edema cardiogénico se trata principalmente con diuréticos y optimización de la función cardíaca, mientras que el SDRA requiere ventilación mecánica protectora (volúmenes corrientes bajos, PEEP personalizada, posición prono) y NO responde a diuréticos de la misma manera, ya que su mecanismo es un aumento de la PERMEABILIDAD capilar por inflamación, no un aumento de la presión hidrostática por sobrecarga de volumen. Tratar un SDRA como si fuera edema cardiogénico (con diuréticos agresivos) podría no beneficiar al paciente e incluso ser perjudicial si genera hipoperfusión."
    }
  },
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con derrame paraneumónico. Necesitas decidir si requiere solo antibiótico o también drenaje pleural obligatorio.",
    "preguntaMC": {
      "enunciado": "Derrame paraneumónico simple vs. complicado/empiema: ¿qué datos del líquido pleural marcan la diferencia práctica?",
      "opciones": [
        {
          "id": "a",
          "texto": "pH<7.2, glucosa<40-60 mg/dl, y aspecto turbio/purulento indican derrame complicado o empiema"
        },
        {
          "id": "b",
          "texto": "El color del líquido es el único dato relevante"
        },
        {
          "id": "c",
          "texto": "Todos los derrames paraneumónicos requieren drenaje obligatorio, sin excepción"
        },
        {
          "id": "d",
          "texto": "El pH nunca cambia entre derrame simple y complicado"
        }
      ],
      "correcta": "a",
      "explicacion": "pH<7.2, glucosa<40-60mg/dl, y aspecto turbio/purulento son los 3 datos clave que definen derrame complicado o empiema — y cambian la conducta de solo antibiótico (derrame simple) a DRENAJE torácico OBLIGATORIO (complicado/empiema). Sin estos criterios, un derrame paraneumónico simple puede manejarse solo con antibiótico."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué la glucosa BAJA y el pH BAJO en el líquido pleural indican progresión hacia empiema?",
      "respuestaModelo": "Porque las bacterias y los neutrófilos activados consumen glucosa por glucólisis anaeróbica en ese ambiente pobre en oxígeno del espacio pleural infectado, generando ácido láctico como subproducto — por eso el pH cae. Este patrón bioquímico (glucosa baja + pH bajo) es, en esencia, una fotografía de cuánta destrucción celular activa está ocurriendo — cuanto más avanzada la infección hacia empiema, más consumo de glucosa y más acidosis local."
    }
  },
  {
    "nivel": "basico",
    "vineta": "Comparativo de módulo: paciente minero con neumoconiosis confirmada. Necesitas conocer la complicación específica esperada según el tipo exacto de neumoconiosis.",
    "preguntaMC": {
      "enunciado": "Silicosis vs. Asbestosis: ambas son neumoconiosis. ¿Cuál es la complicación específica de cada una?",
      "opciones": [
        {
          "id": "a",
          "texto": "Silicosis se asocia fuertemente a tuberculosis. Asbestosis se asocia específicamente a mesotelioma pleural maligno"
        },
        {
          "id": "b",
          "texto": "Ambas se asocian igualmente a las mismas complicaciones"
        },
        {
          "id": "c",
          "texto": "Silicosis se asocia a mesotelioma. Asbestosis se asocia a tuberculosis"
        },
        {
          "id": "d",
          "texto": "Ninguna de las dos tiene complicaciones específicas conocidas"
        }
      ],
      "correcta": "a",
      "explicacion": "Cada neumoconiosis tiene su complicación característica y específica: la silicosis se asocia fuertemente a TUBERCULOSIS (la sílice altera la función de los macrófagos alveolares, facilitando la reactivación/infección por M. tuberculosis). La asbestosis se asocia específicamente a MESOTELIOMA PLEURAL MALIGNO (relación causal directa y bien documentada con la exposición a fibras de asbesto)."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué es importante recordar la complicación específica de cada neumoconiosis en la práctica clínica?",
      "respuestaModelo": "Porque orienta la vigilancia activa que se debe hacer en cada paciente según su exposición ocupacional específica: en un paciente con silicosis, se debe descartar activamente tuberculosis ante cualquier síntoma sistémico nuevo (fiebre, pérdida de peso, sudoración nocturna). En un paciente con asbestosis, se debe mantener vigilancia a largo plazo para detectar tempranamente signos de mesotelioma pleural (que puede aparecer décadas después de la exposición). Confundir estas asociaciones llevaría a buscar la complicación equivocada en cada paciente."
    }
  },
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con insuficiencia respiratoria aguda. Necesitas clasificar el tipo exacto según el patrón gasométrico antes de decidir el manejo.",
    "preguntaMC": {
      "enunciado": "Insuficiencia respiratoria tipo I vs. tipo II: ¿cuál es la diferencia central, y qué enfermedad típica representa cada una?",
      "opciones": [
        {
          "id": "a",
          "texto": "Tipo I = hipoxémica sin hipercapnia (típica de neumonía/SDRA). Tipo II = hipercápnica por hipoventilación (típica de EPOC agudizado)"
        },
        {
          "id": "b",
          "texto": "Tipo I y tipo II son exactamente lo mismo"
        },
        {
          "id": "c",
          "texto": "Tipo I = hipercápnica. Tipo II = hipoxémica"
        },
        {
          "id": "d",
          "texto": "Ninguna de las dos se relaciona con enfermedades pulmonares específicas"
        }
      ],
      "correcta": "a",
      "explicacion": "IRA Tipo I es HIPOXÉMICA (PaO2 baja) SIN hipercapnia significativa — típica de neumonía o SDRA, donde el problema es de intercambio gaseoso (shunt, alteración V/Q). IRA Tipo II es HIPERCÁPNICA (PaCO2 alto) por hipoventilación alveolar — típica de EPOC agudizado o enfermedades neuromusculares, donde el problema es de bomba ventilatoria."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué el mecanismo de hipoxemia es distinto entre una IRA tipo I y una tipo II, aunque ambas terminen con PaO2 baja?",
      "respuestaModelo": "En la IRA tipo I, la hipoxemia se debe a un problema de intercambio gaseoso A NIVEL ALVEOLAR (shunt por alvéolos colapsados/llenos de exudado, o alteración V/Q) — el paciente puede estar respirando adecuadamente en volumen, pero el oxígeno no logra pasar bien a la sangre. En la IRA tipo II, la hipoxemia (cuando está presente) es secundaria a una hipoventilación GLOBAL — el paciente simplemente no está moviendo suficiente aire hacia los alvéolos en absoluto, lo que también retiene CO2 (a diferencia de tipo I, donde el CO2 puede estar incluso bajo por hiperventilación compensatoria)."
    }
  },
  {
    "nivel": "avanzado",
    "vineta": "Comparativo de módulo: paciente con auscultación relativamente pobre pese a síntomas respiratorios importantes. Necesitas diferenciar entre 2 entidades con esta discordancia clínica característica.",
    "preguntaMC": {
      "enunciado": "TB pulmonar vs. neumonía atípica: ambas pueden dar auscultación relativamente pobre pese a síntomas importantes. ¿Qué las distingue mejor?",
      "opciones": [
        {
          "id": "a",
          "texto": "TB tiene curso de semanas con pérdida de peso marcada y localización apical; la atípica es de curso más agudo (días) sin esa pérdida de peso ni localización preferencial"
        },
        {
          "id": "b",
          "texto": "Ambas tienen exactamente el mismo curso temporal y localización"
        },
        {
          "id": "c",
          "texto": "La neumonía atípica siempre dura más tiempo que la TB"
        },
        {
          "id": "d",
          "texto": "La localización apical es exclusiva de la neumonía atípica"
        }
      ],
      "correcta": "a",
      "explicacion": "La TB tiene curso INSIDIOSO de semanas, con pérdida de peso marcada y localización preferencial APICAL (por su fisiopatología de aerobio estricto que prolifera mejor donde hay más oxígeno). La neumonía atípica tiene curso más AGUDO (días), sin la misma pérdida de peso marcada ni localización apical preferencial — puede afectar cualquier zona pulmonar."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué tanto la TB como la neumonía atípica pueden dar una auscultación pobre pese a síntomas respiratorios importantes?",
      "respuestaModelo": "En ambos casos, el mecanismo de daño no siempre genera los hallazgos auscultatorios 'clásicos' de consolidación franca (como en una neumonía típica bacteriana). En la TB, la lesión puede ser predominantemente cavitaria o localizada en zonas que no siempre generan crépitos evidentes a la auscultación convencional. En la neumonía atípica, los patógenos (Mycoplasma, Chlamydia) generan un patrón inflamatorio más intersticial que alveolar, lo cual característicamente da MENOS hallazgos físicos de los que la clínica sintomática sugeriría — es parte de la definición 'atípica' de estas neumonías."
    }
  },
  {
    "nivel": "avanzado",
    "vineta": "Comparativo de módulo: paciente con EPOC conocido que también podría tener SAOS. Necesitas entender el riesgo particular de esta combinación (overlap syndrome).",
    "preguntaMC": {
      "enunciado": "SAOS vs. EPOC: ambos pueden coexistir ('overlap syndrome'). ¿Cuál es el riesgo particular de esa combinación?",
      "opciones": [
        {
          "id": "a",
          "texto": "La combinación genera mayor riesgo de hipoxemia nocturna combinada y peor pronóstico cardiovascular que cualquiera de las dos por separado"
        },
        {
          "id": "b",
          "texto": "No hay ningún riesgo adicional al combinar ambas condiciones"
        },
        {
          "id": "c",
          "texto": "El SAOS mejora automáticamente el pronóstico del EPOC"
        },
        {
          "id": "d",
          "texto": "Solo el EPOC contribuye al riesgo, el SAOS es irrelevante en la combinación"
        }
      ],
      "correcta": "a",
      "explicacion": "El síndrome de superposición (overlap syndrome) EPOC+SAOS combina 2 mecanismos DISTINTOS de hipoxemia nocturna: la limitación crónica al flujo aéreo del EPOC (especialmente durante el sueño, cuando el tono muscular basal ya disminuye) más los episodios de apnea obstructiva del SAOS — generando una hipoxemia nocturna combinada más severa que cualquiera de las dos condiciones por separado, con peor pronóstico cardiovascular (mayor riesgo de hipertensión pulmonar, arritmias, y mortalidad)."
    },
    "preguntaEscrita": {
      "enunciado": "¿Por qué el tratamiento de SAOS con CPAP podría ser especialmente beneficioso en un paciente con overlap syndrome, más allá de solo mejorar el sueño?",
      "respuestaModelo": "Porque al corregir el componente obstructivo de la vía aérea SUPERIOR durante el sueño (con CPAP), se elimina uno de los 2 mecanismos que contribuyen a la hipoxemia nocturna combinada — reduciendo la carga total de hipoxemia intermitente que el paciente experimenta cada noche. Esto puede traducirse en menor estrés cardiovascular nocturno, mejor control de comorbilidades asociadas (hipertensión, arritmias), y potencialmente mejor pronóstico a largo plazo, incluso si el componente de EPOC (limitación crónica de base) sigue presente y requiere su propio manejo específico."
    }
  },
  {
    "nivel": "intermedio",
    "vineta": "Comparativo de módulo: paciente con tos crónica productiva. Necesitas decidir qué estudio distingue definitivamente entre bronquiectasias y EPOC.",
    "preguntaMC": {
      "enunciado": "Bronquiectasias vs. EPOC: ambas cursan con tos crónica productiva. ¿Qué estudio las distingue de forma definitiva?",
      "opciones": [
        {
          "id": "a",
          "texto": "La TC de alta resolución: bronquiectasias muestran dilatación bronquial permanente (signo del anillo de sello); EPOC no tiene ese hallazgo, se confirma con espirometría"
        },
        {
          "id": "b",
          "texto": "La espirometría distingue definitivamente entre ambas"
        },
        {
          "id": "c",
          "texto": "Ambas se diagnostican exclusivamente por clínica, sin estudios de imagen"
        },
        {
          "id": "d",
          "texto": "La radiografía simple de tórax es suficiente para diferenciarlas con certeza"
        }
      ],
      "correcta": "a",
      "explicacion": "La TC de alta resolución (TCAR) es el estudio definitivo: en bronquiectasias muestra dilatación bronquial PERMANENTE (relación broncoarterial >1.5, signo del 'anillo de sello'), un hallazgo ESTRUCTURAL que el EPOC no tiene. El EPOC se confirma con espirometría (obstrucción fija), no con hallazgos estructurales de dilatación bronquial. Ambas entidades pueden coexistir en un mismo paciente, pero el estudio que las distingue estructuralmente es la TCAR."
    },
    "preguntaEscrita": {
      "enunciado": "¿Puede un paciente tener bronquiectasias Y EPOC al mismo tiempo? Explica por qué esto no es contradictorio.",
      "respuestaModelo": "Sí, pueden coexistir perfectamente, ya que evalúan aspectos DISTINTOS del pulmón: el EPOC es un diagnóstico FUNCIONAL (definido por obstrucción fija en la espirometría), mientras que las bronquiectasias son un diagnóstico ESTRUCTURAL (definido por dilatación bronquial permanente en la TCAR). Un paciente con EPOC de larga evolución puede desarrollar bronquiectasias secundarias por el daño estructural acumulado de infecciones respiratorias recurrentes — de hecho, el asma y el EPOC/enfisema están listados como causas de bronquiectasias 'por obstrucción' en la clasificación etiológica que ya estudiaste."
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
    "pdfOrigen": {
      "url": "https://drive.google.com/file/d/1rdfplaCqYU5rAqzwTseVMa6AjIDcmlhE/view",
      "titulo": "SEMANA 02-PDF-TALLER APLICATIVO IMÁGENES"
    },
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
    "pdfOrigen": {
      "url": "https://drive.google.com/file/d/1DNmoyN4-LkslKC4tCaL0qgLVUpaMZFgP/view",
      "titulo": "SEMANA 02-PDF-TALLER APLICATIVO DE AGA 1"
    },
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
    "pdfOrigen": {
      "url": "https://drive.google.com/file/d/1B0X_MErIkyTxwMoAG-PCbrloupXYNXpY/view",
      "titulo": "SEMANA 03-PDF-TALLER APLICATIVO DE CASOS CLÍNICOS"
    },
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
    "pdfOrigen": {
      "url": "https://drive.google.com/file/d/1M2RhMZlRSd-wrF7Yhvyz_8GNMWq3J1JI/view",
      "titulo": "SEMANA 03-PDF-TALLER APLICATIVO DE AGA 2"
    },
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
