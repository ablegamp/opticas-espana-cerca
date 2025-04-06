import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpticianDetailCard from '@/components/OpticianDetailCard';
import { Optician } from '@/models/optician';

// Array centralizado de todas las ópticas
const opticians: Optician[] = [
  // Barcelona optician 1
  {
    title: "C4 òptics - Óptica en Barcelona",
    category: "Óptica",
    address: "Carrer d'Aribau, 17, Eixample, 08011 Barcelona",
    description: "C4 òptics es una óptica en el centro de Barcelona que destaca por su gran profesionalidad y excelente servicio. Los clientes resaltan la amabilidad y atención detallada de su personal, especialmente Laia y Cristina, quienes ofrecen un asesoramiento de calidad para elegir la montura adecuada. La óptica cuenta con mucha variedad de marcas y modelos para todos los gustos y presupuestos. Los usuarios también valoran la rapidez en la entrega de las gafas, los buenos precios y la atención post-venta. Se realizan revisiones de la vista exhaustivas y se presta especial atención a la adaptación de las lentes.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.7,
      variedad: 4.8
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–15:00",
        "16:30–20:00"
      ],
      lunes: [
        "9:30–15:00",
        "16:30–20:00"
      ],
      martes: [
        "9:30–15:00",
        "16:30–20:00"
      ],
      miércoles: [
        "9:30–20:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–15:00",
        "16:30–20:00"
      ]
    },
    website: "http://www.c4optics.com/",
    phone: "934 53 20 24",
    review_count: 347,
    review_rating: 5,
    latitude: 41.38658,
    longitude: 2.161428,
    user_reviews: [
      {
        Name: "sus susana",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKAjuTgQbRqw0VULFq4EpYo1WQ-OjyUB2ZfKN2Cfda-yCugbQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Optica en el centro de Barcelona, muy profesionales con un gran servicio.\nMe hice revisión de la vista para asegurarnos bien antes de hacer las gafas, me asesoro para elegir la montura que mejor me iban, tienen mucha variedad y muchas marcas.\nLa entrega a posterior fue muy rápida, menos de una semana, con muy buen precio.\nEn mi caso me atendió Laia, muy amable y profesional.\nPronto volveré hacerme otras gafas ( esta vez gafas de cerca ).",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO1_lxhyr1BF2iM9TUEUGeVBh-ElXb4d3-bvjzK&fid=0x0:0xb63f497872a77ae9"
        ],
        When: "2024-12-11"
      },
      {
        Name: "matias gonzalez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJSCDkEzVXz_Tevq2UTKp3YrVFaTN5RDiMnsqnyvVfwmRRnpg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Son los mejores! Laia es muy servicial y explica todo en detalles. Mi optica preferida en Barcelona. Muy satisfecho con mis nuevos lentes.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipN5Z1TwJS01S5DhF_Tv1WM6vSIf7d46OCbPuW5T&fid=0x0:0xb63f497872a77ae9"
        ],
        When: "2025-1-17"
      },
      {
        Name: "felix leloir",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIEiuwtFlpiwC-sqle6XzdI5cm_Ap7EMVA643BfiIo_ffiHQg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Estaba un poco preocupado buscando dónde hacer mis primeros lentes, y estaba bastante desorientado hasta que di con esta óptica, que para comenzar tiene una atmósfera muy acogedora, y desde el segundo que ingrese al local sus empleadas me atendieron y aconsejaron  con una calidad humana de maravilla, destacó la atención, conocimiento, cordialidad, paciencia y no menos importante, el asesoramiento en todo momento de Laia y Cristina para ayudarme a elegir el modelo indicado en todo momento, el local tiene cantidad de modelos muy chulos que no he visto en otros negocios, y para todo los gustos y presupuestos.\nDestacó también la atención post venta!, algo que no es común en estos días, me han enviado mensajes y correos, para chequear cómo va la adaptación y comodidad con los lentes nuevos, realmente muy profesionales!!!, sin dudas recomiendo  esta óptica, por que resolvieron todas mis dudas y me han dado mucha confianza y tranquilidad, realmente una óptica con gente muy profesional!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPb5-bBtfPloRbpybH_HsJsaAYLKrxEshwcYijR&fid=0x0:0xb63f497872a77ae9"
        ],
        When: "2024-4-2"
      },
      {
        Name: "Natascha Goovaerts",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUl8BHe2TgW1Ya72JKVQQXWWDE5ZI9cBrYlIO82dkVejuXGs9Bj=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Que servicio más excepcional y personalizado!\n\nOlga y su colega son muy buenas expertas y me han ayudado muy bien con consejos, tests y más.\n\n10000% recomendado! Muchísimas gracias por la amabilidad, paciencia y atención dedicada.",
        Images: null,
        When: ""
      },
      {
        Name: "Pablo Cruz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIbwAEtDrgBjM7r_pxVmc7DfcakL-_iKcNjCv3TfRxwf58w1g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un servicio excepcional y personalizado. Gracias especialmente a Laia por todas las explicaciones y ayuda para elegir las gafas más adecuadas a lo que necesitaba dentro de la amplia gama que ofrecen.",
        Images: null,
        When: ""
      },
      {
        Name: "Claire Vidal",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVbdZlsgUyXZKh8z6DIW71VqVRG35BcVs6UixB8CcXpyM2ZgjgV=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "C4 Òptics es la óptica de confianza de toda mi familia desde siempre. Empecé a ir cuando era niña, y a día de hoy sigo siendo una clienta fiel. Son grandes profesionales, y el trato y asesoramiento son impecables. Además, cuentan con una amplia variedad de monturas para todas las edades y gustos. Los recomiendo al 100%, hay pocos negocios que pongan tanto cariño, energía y calidad en todo lo que hacen.",
        Images: null,
        When: ""
      },
      {
        Name: "Ana del Cañizo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXSGyPuI7qQjWvqCsJChobfw2oGEZHtM_mH8zTgPuYYFcxHvJMy=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Cristina es muy amable y ha atendido fenomenal mi caso complicado de lentillas. Al final me he acabado haciendo unas gafas que me hicieron rapidísimo. Recomiendo encarecidamente esta óptica.",
        Images: null,
        When: ""
      },
      {
        Name: "christian reyes lambea",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKwyHO0EPiAvLrtQ4qOBQq6pXo9GU2AoK5QDAUwXk1UEtfy2Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estoy muy contento del trato recibido y de mis gafas. Laia es una gran profesional, con paciencia, trato muy agradable y explicándote todo lo que necesitas. Graduando una crack! Gracias!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province: "barcelona"
  },
  
  // Barcelona optician 2
  {
    title: "L'Òptica",
    category: "Óptica",
    address: "Carrer de la Diputació, 282, Eixample, 08009 Barcelona",
    description: "L'Òptica es un establecimiento donde los clientes destacan la profesionalidad y amabilidad de todo el equipo, incluyendo Gemma, Igor y Óscar. Ofrecen una atención de 10 en todo el proceso de mejora de la visión, tanto para gafas como para lentes de contacto. Los usuarios valoran la rapidez y eficiencia en la reparación de gafas, así como la calidad del trabajo y el ajuste de las monturas. Se destaca la excelente atención en situaciones de emergencia y la dedicación para escuchar y solucionar los problemas de los clientes. Los precios son considerados buenos y la calidad del servicio es prioritaria.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.7,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–20:30"
      ],
      lunes: [
        "10:00–20:30"
      ],
      martes: [
        "10:00–20:30"
      ],
      miércoles: [
        "10:00–20:30"
      ],
      sábado: [
        "10:00–15:00"
      ],
      viernes: [
        "10:00–20:30"
      ]
    },
    website: "",
    phone: "634 19 51 47",
    review_count: 161,
    review_rating: 4.9,
    latitude: 41.392043,
    longitude: 2.169624,
    user_reviews: [
      {
        Name: "VALENTINA NEBREDA",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXlnFxmGCZdsFZ6oEYYhq4sphVUSDiFX8WTcFbOMHuXyyO8Zy2y=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi experiencia como usuaria de lentes de contacto y gafas de toda la vida es de 10 con L'Optica. Todo el equipo: Gemma, Igor y Óscar, son muy profesionales me han ayudado en todo el proceso de ver mejor y lo han conseguido. Tengo ahora un visión excelente. Muchas gracias.",
        Images: null,
        When: ""
      },
      {
        Name: "Rocio Martinez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWtFGYVpg5Te4nDKRQNsXcHXDkqMU-xqIfXlzb0YKsl0yea91I=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hoy por la mañana llevé mis anteojos a arreglar, y la experiencia superó mis expectativas. Desde el primer momento el servicio fue excepcional. El personal fue amable y profesional, escuchando lo que le había pasado a mis anteojos (se le rompió una de las patillas) y dándome opciones de arreglos.\nEl proceso de reparación fue rápido y eficiente. En el mismo día y solo en un par de horas, mis anteojos estaban como nuevos. La calidad del trabajo fue impresionante; no solo repararon el daño, sino que también ajustaron las monturas.\nLo recomiendo 100% ya que no muchas veces se puede encontrar personas/ lugares que tengan este tipo de trato con los clientes.\nLes daría infinitas estrellas, muchas gracias !!\nPor supuesto que volveré.",
        Images: null,
        When: ""
      },
      {
        Name: "Roser Costa Amic Manzano",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVeAhVVpwDK1nBDTX6OXKWuBrYBvmIVAJ-X_S7UQMm0tjo0BGH4=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un servicio increíble, muy amables y mi eficientes, tienen muchos diseños lindos, pedimos  cambio de cristales para unas gafas y lo tuvieron en nada de tiempo e impecables! Muchas gracias Oscar 🙌🏻✨",
        Images: null,
        When: ""
      },
      {
        Name: "Démian FREAU",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWka1nzA1xU800NsXN57uG7D1tfZhnEQ9krxadDsVq2cv3Z7QRW=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Eligimos esta Óptica por las buenas reseñas que leímos en Google.\n\nPodemos confirmar que fue una experiencia excelente. Desde la recepción pasando por el chequeo óptico, elección de las gafas hasta recibirlas.\n\nTodo perfecto, recomendamos este negocio local al 200%.\n\nGracias Oscar and Co.",
        Images: null,
        When: ""
      },
      {
        Name: "Manuel Gómez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKPBG2d_9jRTZARbcf4Ys2VUMsWpihWfwJPLiIhBYDxCDKdZw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente atención, trato amable y dedicado, se dan el tiempo de escuchar, atender y solucionar, acudí por una emergencia con mis lentes y lo solucionaron de inmediato, felicitaciones, definitivamente 100 % recomendado",
        Images: null,
        When: ""
      },
      {
        Name: "Cristobal Pino",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV8AOoeZ6cHsezwUclt2OETR7D8A2TYRcxmkGf7wBBquzBG4HRLCg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente atención y mejores profesionales, después de una revisión me han aconsejado según mis necesidades reales. No he necesitado gastar una fortuna en gafas para solucionar un problema puntual …. Muchas gracias por el asesoramiento. Prevalece la calidad del servicio antes que una venta. Un 10 para la chica!!!\nDespués de 2 años ahora ya toca usar gafas.\nMagnifica atención y asesoramiento por parte de Gemma y Oscar.  Calidad y muy buen precio. Buenos profesionales y muy buen servicio.\nSalgo más guapo de lo que entré con mis nuevas gafas!!!\nGracias por todo.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipN4zH5tLDubDqm6IjOWX1yTYoQ8zExeHv1d5Bz7&fid=0x0:0xe9ef407d9b34a499"
        ],
        When: "2024-9-17"
      },
      {
        Name: "GARZA TAMEZ",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIgwYUNxluU8gB9X845A-6QnFVmJzMsVRTasCQjvh02B0NLBg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Paré por casualidad en la tienda para ver si me podían ayudar a reajustar unas gafas. El responsable no solamente me solucionó el problema, sino que lo hizo muy amablemente y salí de allí encantado.\nTienen además mucha variedad de marcas y precios en gafas, así que recomiendo mucho esta óptica.",
        Images: null,
        When: ""
      },
      {
        Name: "Allan Renol",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocVtGNhq512uHPtyxtEsQ6CiFnkGRcPdxB8FHNTe83C0OlOSLQg=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Muy buena atención, hay muchas ofertas. Me mostraron muchas gafas del estilo de montura que buscaba. Buen trato en todo momento y tuve suerte de que me atiendan sin cita. Me dejaron una tarjeta, probé si tenían WhatsApp para poder recoger las gafas y sí lo tienen.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO0CurrzjKwVUQj6lTk9j1AT_H113CjM3hGlWpl&fid=0x0:0xe9ef407d9b34a499"
        ],
        When: "2023-3-2"
      }
    ],
    emails: "",
    province: "barcelona"
  },
  
  // Alicante optician
  {
    title: "FUTURÓPTICAS",
    category: "Optometrista",
    address: "C. de Sant Mateu, 2 bis, 03013 Alicante",
    description: "En FUTURÓPTICAS, los usuarios destacan el trato amable y familiar que reciben, especialmente mencionando la atención y simpatía de Lorena. Además, valoran positivamente el asesoramiento profesional y los servicios adaptados a las necesidades individuales. Los precios también son considerados asequibles por varios clientes.",
    serviceRatings: {
      atencionCliente: 4.9,
      profesionalidad: 4.7,
      precio: 4.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:00"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:00"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:00"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:00"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:00"
      ]
    },
    website: "http://futuropticas.com/?utm_source=gmb&utm_medium=referral",
    phone: "965 21 95 90",
    review_count: 5,
    review_rating: 5,
    latitude: 38.355939,
    longitude: -0.479739,
    user_reviews: [
      {
        Name: "Eva maria manzanaro carrasco",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLMB5BO8TmYD1RWHfgP-KX17MrTHLPiPhUR39Aa_EONm1lteA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lleve a mi hija con 6 años para sus primeras gafas y desde entonces vamos  toda la familia .\nUn trato amable , familiar  y precios asequibles .\nLorena es muy atenta y muy simpática.",
        Images: null,
        When: ""
      },
      {
        Name: "MARIA DEL MAR NAVARRO HERNANDEZ",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX8EvzqgxbTdwJZ4XPzRCHB68TC0kQMWrjYNaS0wzK1wmNX0XeB=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi óptica desde hace 12 años que lleve por vez primera a mi hijo y luego hemos ido los 4 miembros de la familia, la calidad humana de Lorena es lo mejor así como ser una magnífica profesional.\nYa no he ido nunca a otro sitio y siempre que puedo lo recomiendo.\nLa mejor óptica sin duda de Alicante.",
        Images: null,
        When: ""
      },
      {
        Name: "Gilberto Dobon",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV9wvweO867vzYA0rwXPycCFZ4epJyvZdhTIc_1DR-YRb5wZdrz=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Mi óptica de referencia en Alicante. Asesoramiento imparcial con servicios a medida del cliente.",
        Images: null,
        When: ""
      },
      {
        Name: "Asereth",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVU2TapPeu8rA-7zcO8qGesWFq4z4aDCNbpekp7zq2ofiDR1VMepw=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Muy buen trato.aconsejan muy bien y precios muy buenos.todo genial!! Repetiré en necesitar 😊😊",
        Images: null,
        When: ""
      },
      {
        Name: "Ada Quesada",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJseC3n6VrEFzgRlOA_hsO6KyjKU53VY2nK41JrqjBZzPFzcA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province: "alicante"
  },
//Listado de Málaga
{
    title: "ÓPTICA Natural Optics Bola de Oro y CENTRO AUDITIVO Natural Audio",
    category: "Óptica",
    address: "C/ Gral. Espartero, 89, 03012 Alicante",
    description: "Este establecimiento destaca por su enfoque altamente profesional y personalizado en la atención al cliente, con reseñas que mencionan frecuentemente el servicio excepcional y la amabilidad del personal. El equipo también es elogiado por su profesionalismo y atención al detalle, y la tienda ofrece servicios más allá de la óptica, incluyendo audiología y reparaciones.",
    serviceRatings: {
      atencionCliente: 5,
      profesionalidad: 5,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–14:00",
        "17:00–20:30"
      ],
      martes: [
        "10:00–14:00",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–14:00",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–14:00"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:30"
      ]
    },
    website: "https://www.naturaloptics.com/optica/alicante/alicante/natural-optics-bola-de-oro?utm_source=google&utm_medium=mybussines&utm_campaign=alicante-boladeoro",
    phone: "965 25 04 55",
    review_count: 90,
    review_rating: 4.8,
    latitude: 38.361133,
    longitude: -0.482815,
    user_reviews: [
      {
        Name: "Sven Stuermann",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIje9wVR1j7BMJWKiHvwqumwJOpDdl1NwuxresxMJce21_WVg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo 50 años con audífonos y nunca he recibido un tratamiento tan profesional y individual como aquí. Excepcional!",
        Images: null,
        When: ""
      },
      {
        Name: "Maricruz Uceta",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL09K3z9KzXVrVTIE8w_qqE6fxZeGgMNfa22ZHMSfQdYP-z9Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor óptica que puedes encontrar por el servicio, el trato personal,\u00a0 la simpatía, la profesionalidad de los 3... Me encantaaaaaa!!!! Hoy,\u00a0 además de llevarme unas gafas geniales me han regalado un anillo precioso. Siempre tienen detalles... Graciassss",
        Images: null,
        When: ""
      },
      {
        Name: "Verónica Gómez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjURzMdfTGHH2WymfqN5Y_SvSxUoCwTUR_1Ul04bSXgcvt0Lvqk5EA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Muy profesionales y amables. Muy buen trato, además de muy detallista. Os habéis ganado una clienta de por vida. Pongo 5 estrellas porque no hay más sino pondria un 10. Muy agradecida🙏🏼",
        Images: null,
        When: ""
      },
      {
        Name: "ana soler",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWtzM0OfyXnJT5XVQQc0h07bQxRIwN6EUQtidbeESWUbx43WNWp=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Inmejorable el trato y la profesionalidad. Una de sus prioridades en el bienestar de sus pacientes, por lo que ofrecen gran calidad y máxima preocupación por conseguirla.\n\nHacen de cada paciente una historia exclusiva, cuidándolo y mimándolo, lo que transmite la máxima tranquilidad\u00a0 y sabiendo que pones tu salud en las mejores manos.\n\nY añado que tiene un servicio reparación ESPECTACULAR. Me han dejado unas gafas de sol con montura de Pasta (que llevé partida) como nueva, no se nota ni la marca de donde se partió.\n\ngracias por todo!!!.",
        Images: null,
        When: ""
      },
      {
        Name: "Alejandro Sellés Pérez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKTS0lE4r5KUW4ltkmToV44DzgBsvT7SIicwcfUd2RC6aIybQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buen trato siempre que voy por allí. Tienen mucho gusto y estilo, siempre me dan muy buenos consejos. Gente de 10 y las últimas gafas me quedan finísimas.",
        Images: null,
        When: ""
      },
      {
        Name: "Miguel Ángel Pau",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUNQ8KpgCAFk942fCmZgjJorUvN_SPDTwafRSiXfMb6hUfkh-io=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Si hay algo a destacar del equipo formado por Patxi y Gelen, además de la profesionalidad esperada, es su amabilidad, empatía y trato humano. Hemos asistido para iniciar el proceso de estudio de implante auditivo y no podemos estar más satisfechos. Enhorabuena a ambos.",
        Images: null,
        When: ""
      },
      {
        Name: "Jo' Queirolo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVsgqI9QgUaSLTaEud_BxHN40yhrt7PE-J0fZylArh8RGmO4PY=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Personal extremadamente gentil, simpático y disponible. Adquirir mis primeras gafas con lentes progresivas - personalizadas - ha sido una pasada. Muchísimas gracias. ¡Recomendable al 100%!",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW5DDQLqpBuePVsjgtOLoo7r4gznHFNI2zvmm_lq7b_uRkvoC_32A=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Muy contento con Natural Optics. Un trato excepcional y una calidad humana increíble. Ha sido todo un placer conocer esta óptica que también presta servicios de audiología. Me han hecho un seguimiento de mi prescripción y están atentos a los emails y teléfono. Enhorabuena por todo. Os pongo 5 estrellas!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province: "malaga"
  }
];

const ProvinceDetails = () => {
  const { provinceName } = useParams<{ provinceName: string }>();
  const [loading, setLoading] = useState(true);
  
  // Format province name for display
  const formattedProvinceName = provinceName 
    ? provinceName.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) 
    : '';
  
  // Filtrar ópticas para la provincia actual
  const provinceKey = provinceName?.toLowerCase() || '';
  const filteredOpticians = opticians.filter(optician => 
    optician.province === provinceKey
  );
  
  useEffect(() => {
    // Scroll to top when province changes
    window.scrollTo(0, 0);
    
    // Simulate loading data
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [provinceName]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-optica-blue text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/#provincias" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
              <ArrowLeft size={18} className="mr-2" />
              Volver a todas las provincias
            </Link>
            
            <h1 className="text-4xl font-bold">Ópticas en {formattedProvinceName}</h1>
            <p className="mt-2 text-blue-100">
              {loading ? (
                "Cargando establecimientos..."
              ) : (
                filteredOpticians.length > 0 
                  ? `Encontrados ${filteredOpticians.length} establecimientos ópticos en ${formattedProvinceName}`
                  : `No hay ópticas registradas en ${formattedProvinceName} todavía`
              )}
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-optica-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar with other provinces */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4 text-optica-blue">Otras Provincias</h2>
                  <div className="max-h-[500px] overflow-y-auto pr-2 space-y-1">
                    {['A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Barcelona', 'Cádiz', 'Madrid', 'Valencia'].map((provincia) => (
                      <Link
                        key={provincia}
                        to={`/provincia/${provincia.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`block py-2 px-3 rounded-md hover:bg-optica-gray transition-colors ${
                          formattedProvinceName.toLowerCase() === provincia.toLowerCase() 
                            ? 'bg-optica-blue text-white hover:bg-optica-blue' 
                            : 'text-gray-700'
                        }`}
                      >
                        {provincia}
                      </Link>
                    ))}
                    <Link 
                      to="/#provincias"
                      className="block py-2 px-3 text-optica-blue font-medium hover:underline"
                    >
                      Ver todas las provincias →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Main content with opticians */}
              <div className="lg:col-span-3">
                {loading ? (
                  // Loading skeleton
                  <div className="space-y-6">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                        <div className="h-8 bg-gray-200 rounded-md mb-4 w-1/3"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-3 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-3 w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-6 w-1/2"></div>
                        <div className="h-10 bg-gray-200 rounded-md w-1/4"></div>
                      </div>
                    ))}
                  </div>
                ) : filteredOpticians.length > 0 ? (
                  <div className="space-y-6">
                    {filteredOpticians.map((optica, index) => (
                      <OpticianDetailCard key={index} {...optica} />
                    ))}
                  </div>
                ) : (
                  // No results found
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <div className="text-optica-blue text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No hay resultados disponibles</h3>
                    <p className="text-gray-600 mb-6">
                      Aún no tenemos ópticas registradas en {formattedProvinceName}. Estamos trabajando para expandir nuestra base de datos.
                    </p>
                    <Link to="/#provincias" className="text-optica-blue hover:underline font-medium">
                      Explorar otras provincias →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProvinceDetails;
