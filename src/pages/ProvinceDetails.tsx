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
    province: "málaga"
  },
  {
    title: "Federópticos Lledó-Jornet",
    category: "Óptica",
    address: "C. de Sant Mateu, 39, 03012 Alicante",
    description: "Según las reseñas, esta óptica proporciona una excelente atención al cliente, con miembros del personal particularmente destacados por su paciencia y explicaciones detalladas. Los clientes aprecian la flexibilidad y el asesoramiento útil recibido, así como el servicio rápido y el uso de tecnología avanzada. La tienda también es reconocida por sus precios competitivos y una selección diversa de diseños de monturas modernas.",
    serviceRatings: {
      atencionCliente: 5,
      profesionalidad: 5,
      precio: 4,
      variedad: 4
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      martes: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "9:30–14:00"
      ],
      viernes: [
        "9:30–13:30",
        "17:00–20:30"
      ]
    },
    website: "https://federopticoslledojornet.com/",
    phone: "965 24 05 14",
    review_count: 224,
    review_rating: 4.9,
    latitude: 38.358548,
    longitude: -0.478273,
    user_reviews: [
      {
        Name: "Natalia Torres Zarate",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWgrAB_gsqPShK6ZksF7JQCEjzCLKrTgVNqgawYU2tJqg3ymuJrRA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "La atención en esta óptica ha sido excelente por parte de todo el personal, especialmente de Isidro, quien se tomó el tiempo necesario para responder cada una de mis preguntas con paciencia y detalle. Agradezco mucho la flexibilidad que mostraron para adaptarse a mis necesidades y brindarme una atención personalizada.\n\nAdemás de resolver todas mis dudas, me ofrecieron recomendaciones adicionales muy útiles. Cumplieron puntualmente con los plazos de entrega, y el resultado final superó mis expectativas. Me impresionó la transparencia y la avanzada tecnología que utilizan, lo que genera mucha confianza.\n\nRecomiendo esta óptica a todos por su excelente atención, precios competitivos y diseños de monturas muy variados y modernos. ¡Quedé muy contenta con mi experiencia!",
        Images: null,
        When: ""
      },
      {
        Name: "Jorge Mira Jordán",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUXmheT_6lHo6k_mBFO1MjLOafuxkCU2YjAX1PPlaJ_CG_5BHiK=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Trato muy profesional. Muy recomendable. Todo ok.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMFiLeL6yWSu9dYg3BfjujMNrypbOydCIrSr4Kz&fid=0x0:0xe0999b3f0b88dcd9"
        ],
        When: "2024-11-29"
      },
      {
        Name: "Benjamin Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVM782lQpV7ghf6VTUIL8GDCvYleNfBadxZgDETjn0_Df33Mt2i=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "100% recomendable.\u00a0 Nunca me han hecho una revisión de la vista tan profesional y además dan un trato muy cercano con lo que te sientes muy agusto. Precio muy bien también.",
        Images: null,
        When: ""
      },
      {
        Name: "Altea SA",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUtTOFhco7bzldT5nOOMzHFVUtawNq5X8tGoiWsFcmMPSSX3yY=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Muy buen servicio. Se nota que son especialistas, te recomiendan los mejores productos para ver y oír a la perfección. 100% recomendados",
        Images: null,
        When: ""
      },
      {
        Name: "Luisa B",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUbYBYXfWwhwe8zlUCIcW0K3MpX7DjCFml8_q6cBUP7tILFbph4=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Siempre muy atentos a todo lo que necesitamos. Manoli sobretodo, nos lleva atendiendo desde hace años y es una profesional excelente.",
        Images: null,
        When: ""
      },
      {
        Name: "Jesús María Sánchez Chico",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKv54oKpWRm76ig4RXFcUdlEMSO81GJCEf6GkWaDyG4K-EhYA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato excelente muy bien d precio y m hicieron las gafas muy rapido",
        Images: null,
        When: ""
      },
      {
        Name: "Reinel Quintero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK39mei-54Czbx6WB4XmQHujv5x8m45WivwGRDmK8S_5OtGIw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención muy buena y oportuna y ni se diga de la amabilidad de las personas, los lentes muy bien y precisos",
        Images: null,
        When: ""
      },
      {
        Name: "Alexis Kakias",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXwS4G69qLTr_z02tRgqUTbziZ3SuR9Gxbzk_jWI5Ipq_My_HMc=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente atención por parte del personal, muy amables y atento a mis necesidades.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Cambrodi Ópticos",
    category: "Óptica",
    address: "Pl. Pío XII, 6, 03013 Alicante",
    description: "Las opiniones sobre esta óptica son variadas. Mientras que algunos clientes informan de una atención fantástica y un alto nivel de profesionalismo, otros describen el servicio como frío e impersonal, particularmente en relación con las ofertas promocionales. También se mencionan problemas con el servicio postventa con respecto a las reparaciones de monturas. En el lado positivo, algunos revisores destacan el profesionalismo excepcional y las soluciones efectivas proporcionadas, con una larga historia de clientes satisfechos.",
    serviceRatings: {
      atencionCliente: 3,
      profesionalidad: 4,
      precio: 3,
      variedad: 2.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      lunes: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      martes: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      miércoles: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "17:00–20:00"
      ]
    },
    website: "https://www.cambrodiopticos.es/",
    phone: "965 20 85 64",
    review_count: 68,
    review_rating: 4.8,
    latitude: 38.355369,
    longitude: -0.479907,
    user_reviews: [
      {
        Name: "kike roma",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUDvV7lYzw_df2wMS58_QGjnjZpJzmT1Lek8nJu5ZTLKkTMZUiC=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Atención fantástica , muy buenos profesionales. Más que recomendable",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOGZuq2aRDyQwUy0QeGb3UmsQ86sHy09O7SLrcB&fid=0x0:0xc74f66937b1af706"
        ],
        When: "2024-2-14"
      },
      {
        Name: "Roman Khan",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJdJCWDLqX33Ew05a1rj5bppnp29snPxb_FE8qTq2EqPd0-IMXZ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Son muy buena gente y grandes profesionales! Recomiendo 100 por 100",
        Images: null,
        When: ""
      },
      {
        Name: "Laura Muñoz Moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI3kAlNuBWGdAnIUkfiqJ4yiyMOoL_rwwUP82uWv26rqy6-4w=s120-c-rp-mo-ba2-br100",
        Rating: 1,
        Description: "Trato más frío e impersonal imposible.\u00a0 Es la primera vez que me tengo que hacer una gafas para leer más que nada, vi una promoción por redes, la óptica estaba adscrita y como vi buenos comentarios decidí ir.\nHe llegado, a malas penas me a explicado, me ha dicho elige unas de estas, una caja con unos 20 modelos todos con la misma forma que cambiaba solo el color, ( si quieres otras incrementa el precio,\u00a0 pero ni me ha dicho cuales o cuanto) eran......en fin.\nDebe ser que como la promoción era de estudio gratis y las gafas baratas no le ha interesado, pero para eso que no se promocionen. Quizá pagando te atiendan bien, pero tampoco me ha dado opción, no sé ni que excusa le he puesto, me he ido y ella tan feliz.\nLo único que he sacado es perder el tiempo.",
        Images: null,
        When: ""
      },
      {
        Name: "Marius Teodor Bordi",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI6tXUQdUF6mMicSxgpmqytBsGLAIa3TEC994unmL5wfelMAw=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Unos sinvergüenzas junto con la plataforma gafas .es.\nTras cobrar se lavan las manos diciendo que no es culpa de ellos.\nUnas gafas inservibles y un trato pésimo sobre todo el perso aje que está dentro..\nResumiendo me he quedado sin gafas y sin dinero.\nVoy al juzgado a denunciarles.\nEncima me dice que es lo que quiero por que las gafas son baratas....\n\nLo que quiero es ver personaje..",
        Images: null,
        When: ""
      },
      {
        Name: "Leticia P.R",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUbRZs9fqfqEp7kGl4VjyvaWCFGbTpwFNSfqtmb_0hmh02ft2f6=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Profesionales excepcionales, 100% recomendables. Fui con una alteración en la visión que me afectaba en mi día a día y me dieron una solución práctica y eficiente. Ahora vamos toda la familia. Muy contentos con el trato y la profesionalidad.",
        Images: null,
        When: ""
      },
      {
        Name: "josefa lopez agullo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIP7PaCCji2rqfIXiMFZ9n5DtwxqpNZyO_qqqHR8lkEtzunHg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Óptica muy recomendable, con gente muy profesional, atentos y muy bien servicio. Mi familia es cliente desde hace 50 años y no tenemos ninguna experiencia mala, todo lo contrario. Aprovecho y les felicito por estos 50 años.",
        Images: null,
        When: ""
      },
      {
        Name: "Michel Bas",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIg3djoly8_arj-IRMObZBV6mPxN5CjQvOEzWWfV58Xfm1zHw=s120-c-rp-mo-br100",
        Rating: 2,
        Description: "Lo cierto es que la atención es muy buena, profesionalidad y atención. Me compré una oferta de 2 gafas. La sorpresa llegó, cuando a una de ellas se me rompió una pata. Resulta que, me dicen que es la de regalo y no pueden ni pedir la pata suelta, ni 2 patas, sino que\u00a0 hay que cambiar la montura completa y cuesta 80€. Tampoco hay posibilidad de cambiar 2 patas aunque no sean de otro modelo. Un poco decepcionado.",
        Images: null,
        When: ""
      },
      {
        Name: "Juanjo Ortiz de Saracho",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWtZU67nxXRsDREY4rNllgHSrSDCAQ__oR5D-byTmlfMGo7WW-i=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Trato excelente; asesoramiento en la graduación y en la estética; para mi es una referencia en Alicante.\u00a0 Muy recomendable.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Soloptical Muelle Uno Málaga",
    category: "Óptica",
    address: "Puerto de Málaga Centro Comercial Muelle 1 local 7-8, 29001",
    description: "Esta óptica recibe comentarios abrumadoramente positivos, con clientes que destacan con frecuencia el excelente servicio y el personal amable y servicial, particularmente Carmen y Lidia. La tienda es elogiada por su ambiente cómodo y una amplia selección de marcas nacionales e internacionales, incluyendo gafas de sol, gafas graduadas y lentes de contacto, con varias promociones disponibles. Los usuarios también aprecian la profesionalidad y el asesoramiento personalizado recibido, y algunos señalan las capacidades multilingües del personal.",
    serviceRatings: {
      atencionCliente: 5,
      profesionalidad: 5,
      precio: 3.5,
      variedad: 4
    },
    open_hours: {
      domingo: [
        "11:00–19:00"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://soloptical.net/es/soloptical-muelle-uno-malaga/?utm_source=Google&utm_medium=google_my_business&utm_campaign=sitio+web",
    phone: "667 01 71 36",
    review_count: 979,
    review_rating: 5,
    latitude: 36.718224,
    longitude: -4.412872,
    user_reviews: [
      {
        Name: "Joel Posligua",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocItNvRt_drqP4mRq51YoLLHpS0Tb5velqCQXpfSPpuXstkl9kE=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "¡Experiencia excelente! Recomiendo este lugar al 100%. Carmen me atendió con muchísima amabilidad y paciencia, guiándome en la elección de mis gafas de sol y de lectura. Su asesoramiento fue profesional y personalizado, asegurándose de que encontrara el modelo perfecto para mí. Sin duda, un servicio de calidad que merece reconocimiento. ¡Volveré sin dudarlo!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNv8Y3-L6AKiqRmo-v10JttRWu6HBLD6Dw6J-mD&fid=0x0:0xb345f8179a56b6b8"
        ],
        When: "2025-2-21"
      },
      {
        Name: "Karina L",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIu0BrT1EjcxepsjtfMWmaGEivFEp9XGjWLZpCupQLBAmJk7ms=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Soloptical muelle uno ,la tienda es muy comoda,tienen una gran variedad de lentes de sol y para graduacion, de marcas nacionales e internacionales,tambien he visto mucha gente comprando lentillas.\nHay varias promos disponibles .\nEl personal que atiende es excelente.\nGracias Carmen por tu paciencia y tus\u00a0 conocimientos en optica que me sirvieron para aclarar varias dudas .\nTodo lo mejor ✨️✨️✨️ Karina .",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMsHM-kn9MA6i5l2MhthKvO3oy3lquWmQ_Ppvz_&fid=0x0:0xb345f8179a56b6b8"
        ],
        When: "2024-8-24"
      },
      {
        Name: "Alejandro Correa",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXRb-HBZd7wkkXQon1ZDPtyZpk-L0K_-wejMtDBwYmRhYDqLF4i=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena experiencia y trato del personal. 100% recomendado y además hablan varios idiomas",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOE2Vx4AKXs44051Ug6J2i5tyNycQ1QZE-38TgU&fid=0x0:0xb345f8179a56b6b8"
        ],
        When: "2024-12-26"
      },
      {
        Name: "Juan Antonio Vegas",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJk1jAUIweRw4M_1Ub2w-mRxqfVU0puygzurcWmlo-DQq0u7g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena experiencia. Destacaría la amabilidad y profesionalidad de su personal y su asesoramiento y consejos a la hora de elegir cristales y montura.\n100% recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Molina Naranjo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI7SkN_ciP0YJtab-cqehwJZUBV9ygGX2OmWVUVr6rwhU7xHA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Entré para que me pusieran el tornillo de las gafas y tanto Carmen como Imane fueron encantadoras. Este buen trato se agradece para volver a elegir esta tienda en un futuro.",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Gabriela Chavez Gomez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWBiB0m9jhgm8wd-gcQynbkb_fmCjNgyP6sSsxglsnZfBl595jn=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Excelente trato, atención rápida, pacientes y muy amables .. y lentes de alta calidad muchas gracias quedé muy contenta 🤩",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNVVAHeKNF2iUcAL1FKUjOAEQrOI8vXW2GEyfAT&fid=0x0:0xb345f8179a56b6b8"
        ],
        When: "2024-10-15"
      },
      {
        Name: "Manuel L.",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXqe5M02wfYNn1o8P-IX2SfKPyLiTDKGOALnLGOfphR-Oqz99KK3g=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Gran trato por parte de Lidia me ayudó en todo momento a buscar unas monturas que me convenciesen. Fue muy simpática y amable. Repetiré en esta tienda para futuras ocasiones.",
        Images: null,
        When: ""
      },
      {
        Name: "Rosa Campos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIr12bRaciastBOFdXvtlwgORa385pN5uMhLmc8JopeCv0H1Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Gente muy profesional. Gran servicio y perfecto nivel de atención. Super recomendable",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Soloptical Málaga Calle Granada",
    category: "Óptica",
    address: "C. Sánchez Pastor, 12, Distrito Centro, 29015 Málaga",
    description: "Esta óptica generalmente recibe grandes elogios por su muy buen e impecable servicio al cliente, con miembros del personal como Pilar, Nerea y Carlos siendo mencionados con frecuencia por su amabilidad, atención y profesionalismo. Los clientes aprecian el asesoramiento útil y la experiencia de compra positiva. Sin embargo, un cliente informó de una experiencia negativa con un problema de garantía. La tienda es recomendada por su servicio de calidad y personal profesional.",
    serviceRatings: {
      atencionCliente: 4.5,
      profesionalidad: 4.5,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–21:30"
      ],
      lunes: [
        "10:00–21:30"
      ],
      martes: [
        "10:00–21:30"
      ],
      miércoles: [
        "10:00–21:30"
      ],
      sábado: [
        "10:00–21:30"
      ],
      viernes: [
        "10:00–21:30"
      ]
    },
    website: "https://soloptical.net/es/soloptical-callegranada/?utm_source=google_my_business&utm_medium=boton_sitio_web",
    phone: "676 94 80 27",
    review_count: 1097,
    review_rating: 5,
    latitude: 36.721629,
    longitude: -4.420757,
    user_reviews: [
      {
        Name: "ESTRELLA MEDINA LOPEZ",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVpHYmMCWAIEl1a6SYhyDBcmy3t2buGmtu0bRM1kyuaRjm8s8o=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Muy buen trato. Me han revisado la graduación\u00a0 y he encargado mis nuevas gafas progresivas. Súper recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Naufel Boutaybi",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJpmlSKqMS-ftARlDU6W8lwK5fJqmtzgRbFMgbxBa3w1PpgUw=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Estimados/as equipo de Soloptical,\n\nQuería aprovechar esta oportunidad para expresar lo satisfecho que estoy de haber sido vuestro cliente. Desde el primer momento, la atención recibida ha sido impecable. Las chicas del equipo son súper simpáticas, amables y atentas, lo que ha hecho que mi experiencia de compra fuera mucho más agradable y fácil.\n\nAgradezco el tiempo que han dedicado para asesorarme y ayudarme a elegir los productos adecuados. Sin duda, volveré a confiar en Soloptical para futuras necesidades, y recomendaré a todos mis amigos y familiares.\n\nGracias por hacer que mi experiencia como cliente fuera tan positiva.\n\nAtentamente,\nNaufel .",
        Images: null,
        When: ""
      },
      {
        Name: "Andrés Vega",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU6zVEKyURH6IJ_-8XP-JeH-VPs9Mozkr_J2qqjAfxBEzWsvGhC=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Me estuvieron mareando con la garantía de unas gafas más de un mes y, desde ese entonces, ya no soy cliente. Sin embargo, sigo varios años recibiendo correos electrónicos y mensajes de texto. Ahora me han pedido, por WhatsApp, dejarles una reseña (llevo años sin pisar la tienda por su nefasto servicio). Así que aquí la tienen: les pongo una estrella porque no puedo ponerles una sola; pero tengo claro que no voy a volver a ser su cliente.\n\nUn saludo",
        Images: null,
        When: ""
      },
      {
        Name: "Favio Wayar",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV9VqK5E3Q-IyLClj_ha5WQYlKCsUtu9PEL9bOAeTlsewK9LKyPUA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "“Excelente atención en Sola Óptica. Pilar me atendió de manera excepcional, con mucha amabilidad y profesionalismo. Su trato fue muy cordial y se aseguró de resolver todas mis dudas. Muy recomendable. ¡Gracias por tan buen servicio!",
        Images: null,
        When: ""
      },
      {
        Name: "Patricia Cobo Aguilera",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVPCmKp0D_hAbtbLF_o26e7Gnd-0kvMfTFHBmINicCp7I7LV8Pbhg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He ido arreglar unas gafas y al final me he llevado dos. Un sitio increíble y destacar el trato de Nerea, que ha estado atenta en todo momento, dado buenos consejos y ayudándome en lo que necesitaba. Sin duda volvería en mis próximas revisiones acudiré a ella.",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen Lidia Fierro Salazar",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXiHPdRXwsXu8af6yPHXxZqm0-DXn404kiOBw0SHh2YoUmaqfMO=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hace muchos años que me atiende Pilar, es una excelente profesional, te asesora de manera que siempre tengas lo que necesitas y sea beneficioso para uno.\nAdemás de tener una paciencia increíble con mis hijas adolescentes y les entiende todo lo que quieren.\nRecomiendo a Pilar de Soloptical cien por cien.\nLejos la mejor dependienta.",
        Images: null,
        When: ""
      },
      {
        Name: "Ares dominguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVQqirj-rCE-DheYUKdlP-94SPU7DPaovaTv2DykvQPE_0ZaqY=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Increíble trato recibido por parte de Carlos, amable y cercano. Me sentí agusto en todo momento. También destacar el trabajo de Sofía, una profesional excelente. Sin duda si vuelvo a necesitar de sus servicios no dudaré en volver.",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Carlos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI5T0ka-v0QVtPyl7GRt3P6p_6dsbc-tIyKOjpqS0graoBSuw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Esta mañana he estado en esta óptica y he sido fenomenalmente atendido por Nerea y Pilar.\u00a0 Me he comprado unas gafas progresivas, después de estar probando una y otra vez sin límite hasta dar con las apropiadas. Doy las\u00a0 gracias por la paciencia y atención.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Soloptical Málaga Alameda 13",
    category: "Óptica",
    address: "Alameda Principal, 13, Distrito Centro, 29001 Málaga",
    description: "Esta óptica es elogiada constantemente por su excelente servicio y atención al cliente. Los usuarios destacan con frecuencia la profesionalidad, cualificación y atención del personal, como Javi y Francisco Jesús Rueda, quienes son reconocidos por su asesoramiento útil y personalizado. Los clientes aprecian el trato cercano y de confianza, la alta calidad de las gafas y la amplia variedad de monturas y lentes disponibles a precios competitivos. La tienda también es elogiada por su servicio rápido y ambiente agradable, lo que hace que los clientes se sientan valorados y como en casa.",
    serviceRatings: {
      atencionCliente: 5,
      profesionalidad: 5,
      precio: 4,
      variedad: 4
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      lunes: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      martes: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      miércoles: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      sábado: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      viernes: [
        "9:30–14:30",
        "17:00–21:00"
      ]
    },
    website: "https://soloptical.net/es/soloptical-nuevaalameda/es/soloptical-alameda/?utm_source=Google&utm_medium=google_my_business&utm_campaign=sitio+web",
    phone: "622 39 21 16",
    review_count: 738,
    review_rating: 4.8,
    latitude: 36.717428,
    longitude: -4.422018,
    user_reviews: [
      {
        Name: "jesus rico ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXTCehgKtxRPYtD1Iir3bla--honJH-xru8wB8HOz7fXH5PLntV=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "¡Excelente servicio! Javi me ayudó a elegir dos gafas de sol Ray-Ban y la experiencia no pudo haber sido mejor. Su atención fue muy profesional, paciente y amable, asegurándose de que encontrara el modelo perfecto para mí. Se nota que tiene gran conocimiento sobre óptica y asesoramiento personalizado. Sin duda, volveré en el futuro y lo recomendaré a amigos y familiares. ¡Gracias, Javi!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMJTQOsz4-eA-0gLEQx_i_6OjJbP5mBpFZkTXU-&fid=0x0:0x45ae2496bad36b14"
        ],
        When: "2025-3-13"
      },
      {
        Name: "JOSE MARIA LOPEZ SERRANO",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVOPbo3MEzr-A0bfR33TmskRd0XPgMD-BOPJmuzjpufnvFAKFEm=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato cercano y de confianza! Profesionales de primera que me han preparado unas gafas de gran calidad con un acabado impoluto. Agradecer especialmente la atención de Javier, un chico encantador. Lo recomiendo sin duda.",
        Images: null,
        When: ""
      },
      {
        Name: "Laura Contreras Guzmán",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIMF0-w2ThTgWRFU-xNyjmJ-RjmJT_MD9DdTWJWM2NeQp5EXA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Una óptica excelente. El personal muy profesional, cualificado y atento, ofreciendo un servicio personalizado para encontrar las gafas ideales. Lo que más me gustó es que disponen de una gran variedad de monturas de toda clase y precios muy competitivos. Resaltar que la entrega de las gafas fue rápida y sin inconvenientes. Muy contenta con la experiencia, sin duda volveré a repetir :)",
        Images: null,
        When: ""
      },
      {
        Name: "Blanca Sanchez-agesta torres",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKR3PTZn-H28bNDiEpySDHmJexIfidIdx73-bhZFMI5KMUtTQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente servicio y atención al cliente. El personal es muy amable y profesional, siempre están para resoverte cualquier duda. Tienen una gran variedad de monturas y lentes. Muy agradecida.",
        Images: null,
        When: ""
      },
      {
        Name: "Gabriela Celina Gemelle",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXrOeNogHzt8e9PrTcckvuXdE2ukfz910ze-iXycteYExhEiPdt=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lo bueno de tener seguro…que en menos 30 minutos…tenía mis gafas arregladas 🤓\nQuiero dar Gracias por tanta amabilidad y cortesía da alegría ser cliente ,y que lo traten tan bien!!🥰\nMuchas gracias !!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOvh1Xb03hkRFzjBOxAnWf32EyR9mz9vU7yA1nh&fid=0x0:0x45ae2496bad36b14"
        ],
        When: "2025-2-4"
      },
      {
        Name: "Juan RS",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWdRGCZM1X0jDqStgLzWGNxXNw0cm_C6HS0sDczK3soWXjA-TrV=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Una experiencia muy buena en esta óptica céntrica de Málaga.\nMe graduó la vista un chico llamado Javi que fue muy educado y atento.\nGracias por el trato recibido!!",
        Images: null,
        When: ""
      },
      {
        Name: "arturo moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL2K0e_0vbCOG9QomwRGzDbyxWHUsjutTShAOoZxmLkz7dasg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Gran variedad de productos! Y debo destacar que el trabajador Francisco Jesús Rueda puso todo de su parte para aconsejarme y atenderme, gran profesional!! Volveré sin dudas.",
        Images: null,
        When: ""
      },
      {
        Name: "Manuel Rueda Gavilán",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI_lX2IbFdvboRJNaB8FPG80-YbtfxliFSO552HydK_QM8Dhg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Sin duda resaltaría por encima de todo el trato personal que dan sus trabajadores. En todo momento recibí una atención muy cercana, amable y personalizada, haciéndome sentir como en casa.\n\nSin duda, la profesionalidad y simpatía del equipo marcan la diferencia por encima de todo. Volveré sin duda.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Natural Optics Centro Jardín en Málaga",
    category: "Óptica",
    address: "C. Sancho Miranda, 8, Cdad. Jardín, 29014 Málaga",
    description: "Esta óptica recibe críticas mixtas. Si bien muchos clientes elogian el gran servicio, el personal amable y profesional como Pili y Enrique, los buenos precios y una amplia variedad de gafas, un cliente informó su insatisfacción con la calidad y durabilidad de las lentes caras. En general, la tienda es a menudo apreciada por su servicio profesional y atento.",
    serviceRatings: {
      atencionCliente: 4,
      profesionalidad: 4,
      precio: 4,
      variedad: 4
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:15–13:45",
        "17:00–20:00"
      ],
      lunes: [
        "9:15–13:45",
        "17:00–20:00"
      ],
      martes: [
        "9:15–13:45",
        "17:00–20:00"
      ],
      miércoles: [
        "9:15–13:45",
        "17:00–20:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:15–13:45",
        "17:00–20:00"
      ]
    },
    website: "https://www.naturaloptics.com/optica/malaga/malaga/natural-optics-centro-jardin?utm_source=google&utm_medium=mybussines&utm_campaign=malaga-centrojardin",
    phone: "952 25 72 04",
    review_count: 81,
    review_rating: 4.9,
    latitude: 36.747492,
    longitude: -4.420608,
    user_reviews: [
      {
        Name: "Pedro Pablo Palomares Diaz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLD28kwIDhAKDbUoWKy2jbuzZe6uMIzQvUj20joVg6hlh5SKw=s120-c-rp-mo-ba2-br100",
        Rating: 1,
        Description: "Compré unas gafas con antibrillo y que no se arañaran ,en dos meses se araño el cristal y la explicación sin más , mal uso ....véndeme unas normales y les cambió el cristal cada dos meses y no unas que te cuesten los cristales 110 € para tirarlos a los dos meses ...",
        Images: null,
        When: ""
      },
      {
        Name: "Cri Lujan",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJEPZB_3j3XgAIqG091J73ajabz8l0gzqCWVyhEwGlFWL9wgw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La verdad que son geniales, me he sentido muy bien atendida y aconsejada.",
        Images: null,
        When: ""
      },
      {
        Name: "Rafael Blanco Lopez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJwEPcpMre-dVFt6XpZXESL3ZkgsFAJ-FwHcfG02bxBS_IpGQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "El trato es inmejorable y los precios son muy buenos.",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Rodríguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIf0PqHuIttaVrD-2qlfNKKdiOOQCHVNt7C1bUjJ-HjtF-5AQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Gran surtido de gafas a precio razonable y atención de 10!!! Volveré sin duda",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Trinidad de Burgos",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWFKW2PaI1goMKf_PworCLtE80HmaE84w9tKZk7RwjJPVbfMVTP=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Siempre he confiado en su profesionalidad y servicio. Estoy muy satisfecha.",
        Images: null,
        When: ""
      },
      {
        Name: "Antonia Suárez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLMng6OV2AlxDcs-IX6YFqeJwKXrk9Nfo1q64WLvFp2zzd17w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Agradeceros el trato, la profesionalidad, la paciencia..., sin duda alguna volveré cada vez que lo necesite. Muchas gracias por todo",
        Images: null,
        When: ""
      },
      {
        Name: "David Moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWckyUhzKd9ExBHKXGxe_BNOdQzNT-GEFbjjORxrx4UHoze0VDfRQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Pili una empleada espectacular. El mejor trato a los mejores precios",
        Images: null,
        When: ""
      },
      {
        Name: "Celia",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJaGjLk4JlB0vgbNzngQmKCifX34wDUh-R_WAs0oJgE3iFsmw=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Tanto Enrique como Pili, son amables y muy profesionales siempre voy a ésta óptica",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Condomina Opticos",
    category: "Óptica",
    address: "Av. de la Condomina, 75, 03540 Alicante",
    description: "Esta óptica es muy elogiada por su personal amable y profesional que brinda un excelente servicio al cliente, aclara dudas y ofrece consejos útiles. Los clientes aprecian los exámenes de la vista exhaustivos y la forma cariñosa en que tratan a los niños, haciéndolos sentir cómodos y seguros. La experiencia del personal es evidente, yendo más allá de la simple venta de gafas para ofrecer una guía experta.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:30–20:30"
      ]
    },
    website: "https://condominaopticos.com/",
    phone: "965 16 52 06",
    review_count: 29,
    review_rating: 4.9,
    latitude: 38.363881,
    longitude: -0.425994,
    user_reviews: [
      {
        Name: "soo. mycat",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKZDW3zLo7pHmvEUQQoLlMfvHN5stf_QAwxIFMV42iV_Kk39g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Soy clienta desde hace varios años y estoy muy contenta con esta óptica. El personal es muy amable. Son muy profesionales, siempre aclaran todas las dudas y me aconsejan fenomenal",
        Images: null,
        When: ""
      },
      {
        Name: "Evelyn Barrera",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX7XfsOern_QWQr-hqTMQlaVzFZSNv_ssHKZzEO_NRMHsKfnQE=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me lograron adaptar unas lentillas después de mucho tiempo intentándolo en otros lugares.\rAdemás, compré hace 4 años unas gafas con unos resultados inmejorables. Están en\rperfectas condiciones y las he usado de forma diaria.",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Selva Gallego",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLd_xx-mGzBs1BLfTHlZP7Q7Ko41KXjEBUt2hMQkYuW00AYP2A6=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La óptica es la mejor de la zona. El dueño atiende con cariño a los niños, se preocupa y se esmera en crear confianza con ellos para que no haya ningún drama. Se nota que tiene conocimientos, no es un mero vende gafas.\n100% recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Ariana Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXIiQAW0ZjdA8hc7u_ey9FJGMQyTiCdFZ_4L5hu-DOZXxG-5qR5=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo siendo cliente de esta óptica desde hace unos 6 años, y siempre tiene un trato estupendo. Son unos grandes profesionales y son recomendables al 100% 🙌🏻",
        Images: null,
        When: ""
      },
      {
        Name: "Gibran Podi",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK7VYLlylBzrsts5n5Zr53DsTRaZ_6JoG_DGU4QrGaNjJyFhbI=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Recomendable al 100%. Tuvimos un percance y nos atendieron a las mil maravillas. Siempre con una sonrisa, amabilidad y muy atentos",
        Images: null,
        When: ""
      },
      {
        Name: "Jostin Velez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJDClhLqQqgHs1djjDqVGFw6T7KsWt1_Ora7oIiaREGrykGjw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Servicio magnífico. El trato inmejorable. Vine a que me arreglaran unas gafas de sol y lo hicieron rápido. Recomendado",
        Images: null,
        When: ""
      },
      {
        Name: "Jean Gomez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ-x4px6YZARx__KTNoum0A8lxhXHaUpEEo5N5iixp4IyP2jQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Les conozco por mi padre. Son muchos años de relación y he de decir que tenemos plena confianza en ellos. El trato humano y la escucha es inmejorable",
        Images: null,
        When: ""
      },
      {
        Name: "Joaquin Escobar",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUbuC76FO0OSmdRJGXk6BtpIvhTqD5e5kSZu0u3Va9V0A6jgi8=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He ido a graduarme la vista y es la primera vez que me realizan una graduación así de\ncompleta. Me han mirado varias cosas, explicándome en todo momento lo que iban\nhaciendo, asesorándome en las diferentes opciones que disponía.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Multiópticas",
    category: "Óptica",
    address: "Av. Holanda s/n. Centro Comercial Fontana, Local 62, Av. de Holanda, s/n, Centro Comercial Fonata, 03540 Alicante",
    description: "Esta óptica es frecuentemente elogiada por su excepcional servicio al cliente, con un personal descrito como amable, servicial y paciente, incluso al tratar con problemas repetidos. Muchos críticos aprecian los precios asequibles, especialmente las ofertas en múltiples pares de gafas, así como el costo razonable de las lentes de contacto. El personal también destaca por su profesionalismo y la buena calidad de sus productos, ofreciendo una variedad de monturas para elegir. Si bien la mayoría de las experiencias son positivas, un crítico mencionó una interacción negativa con respecto al servicio al cliente.",
    serviceRatings: {
      atencionCliente: 4.8,
      profesionalidad: 4.5,
      precio: 4.0,
      variedad: 4.0
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
        "10:00–13:30"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:30"
      ]
    },
    website: "https://www.multiopticas.com/es/home",
    phone: "965 15 04 17",
    review_count: 16,
    review_rating: 4.8,
    latitude: 38.368604,
    longitude: -0.415581,
    user_reviews: [
      {
        Name: "MPRG",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIGQcx8OuhBKzkv7yX6lB4j8op4PBUqaL1dnzK7OSY1tNY07cvM=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Son dos profesionales impresionantes, en casa tenemos gafas mi hijo pequeño y yo, la paciencia infinita arreglando las gafas del pequeño… la patilla como unas 6 veces al año!! Me la reponen y no me cobran nunca nada… y siempre con buen talante! Son una óptica pequeña pero con un servicio inmejorable!!",
        Images: null,
        When: ""
      },
      {
        Name: "Esthercita Hurtado",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJJJGPB7c8j1B4kh5ANJFjV4VfmSV7-HvPrE5ka0ERS00JUTrI=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Llevo años comprando mis gafas allí por la excelente la oferta de dos gafas por 99€, así como mis lentillas. Y si he tenido que ir para que me ajusten las gafas lo hacen sin problema y sin costo alguno. Siempre me atienden muy amablemente y me asesoran. Así como la agilidad en la entrega tanto de gafas o lentillas.",
        Images: null,
        When: ""
      },
      {
        Name: "Agustin A M",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJcWeeez35wI_cgCLNebCDwPr-AOgY6s3_vMzu9uD-ZVUSBNw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Petra un encanto, profesional, amable, alegre, servicial, etc.  Da gusto tratar con ella.\nY después indicar que gafas y lentillas a precio muy razonable.\nUna óptica para ser fiel",
        Images: null,
        When: ""
      },
      {
        Name: "Agostina Rosas",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU41ncF71axpdSFd8EJCYApSrsws3xTJa4B2YE0EeWiAplnHVhp=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "El trato deja mucho que desear. Hasta ahora hemos ido porque nos lo habían recomendado por lo profesionales que son y nunca habíamos tenido ningún problema, pero por primera vez en años desde que mi familia va allí hemos tenido un problema (se me han roto las gafas) y la chica le ha hablado fatal a mi madre que es una señora de 60 años. Un mínimo de respeto, no sé. La ha increpado por no tener otro par de gafas que ponerme si se me habían roto estas (?) lo siento, pero con mi beca de estudiante he costeado las mías y las de mi madre, perdona si no teníamos dinero para más. Y evidentemente si se me han roto las gafas y no tengo otras, la primera afectada soy yo. No lo voy a hacer a propósito, vamos, es que no sé porque alguien rompería sus gafas a propósito… un poquito más de empatía con las clientas. Definitivamente no volveremos.\nDe la mujer más mayor no tenemos nada malo que decir, al contrario.\nUna decepción absoluta, porque antes de que le hablara así a mi madre las hubiéramos recomendado. En fin, que cada una haga lo que quiera obviamente, pero nosotras seguro que no volvemos.",
        Images: null,
        When: ""
      },
      {
        Name: "Daniel Buitrago",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIfqKpj0O53toq5-1DrlmPiozukoxiPDIc752oCr_05Qi6i_w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelentes profesionales y atención al cliente. Totalmente recomendable ponerse en sus manos. Trato muy cercano y agradable. Mucha experiencia y muy buena calidad en sus productos, y encima a buen precio. Todo un acierto.",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Jose Domenech",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLzZ3wkEwCVbXpX5p2Q4ahTGn_XFYzCKWCCcxoX6Pu_U6DPUA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Que buen trato, y que precios tan buenos. Pase un día por casualidad y desde entonces cuidan de mi vista en exclusiva. Y que lujo de gafas!",
        Images: null,
        When: ""
      },
      {
        Name: "Lola Martínez Abril",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJYx0vYS-5t_mA6xsyQ2HCn3JCwK1jJ9sCzWZwQLS7yIedUew=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Que simpatía! Que buen trato! Que variedad de monturas! Ya es mi óptica de referencia. Me encanta!",
        Images: null,
        When: ""
      },
      {
        Name: "Inma Solano",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKvWJoyec0PIwwiJmkDl6PBAwLz5XGm3DgNLjgaFWqgDfBb_Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Una excelente atención!!!!\nBuen servicio en óptica! Gafas preciosas!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Optica Molina",
    category: "Óptica",
    address: "C. Poeta Quintana, 42, 03004 Alicante",
    description: "Esta óptica tradicional en Alicante es muy apreciada por su excelente servicio al cliente y profesionalismo. Los clientes mencionan constantemente al personal atento y servicial que se toma el tiempo para comprender sus necesidades y brindar explicaciones completas. La óptica también es elogiada por su asesoramiento experto y la calidad de sus productos, y algunos destacan la disponibilidad de marcas específicas. En general, se considera una opción confiable para las necesidades ópticas.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      lunes: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      martes: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      miércoles: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "17:00–20:00"
      ]
    },
    website: "http://www.opticamolina.es/",
    phone: "965 21 65 08",
    review_count: 22,
    review_rating: 4.9,
    latitude: 38.347872,
    longitude: -0.489076,
    user_reviews: [
      {
        Name: "Rodolfo Santamaria",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWeLaOtsgAV8eZpqd7dXzP_mX5h4WL0OlqnwIsWlpA-JalJPUclCQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Excelente atención. Me despejaron de todas las dudas que tenía y me fueron informando paso a paso cada avance de mi pedido. El producto 10 de 10. Muy agradecido y satisfecho.",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Gonzalez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKuked2HqGqxsrNfHzR2FA4LIuSFywRYzl-zStrpujEKq4BkQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente atención y profesionalismo de parte de José Miguel. Seguro que volveremos.",
        Images: null,
        When: ""
      },
      {
        Name: "Eva Fenoll",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVr5S9bAq9WvSelHftyz00Pw2Ws0bqBx6aoifphfsfpuJYsSlHi=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Confianza y profesionalidad es lo que siento cada vez que visito Optica Molina. José Miguel y Meli son excepcionales en el servicio de asesoramiento visual y auditivo. Totalmente recomendable. Si buscáis Optica de confianza, aquí la tenéis ! Buenos precios y mejores calidades !",
        Images: null,
        When: ""
      },
      {
        Name: "Fernando Baz del Río",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJdtlQBfQ-GAreYRQ1qLuaMubOHW7OdnKIe5TlewqFN7cnzlw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Recomiendo al 100%. Óptica familiar, con grandes profesionales, que dedican el tiempo, asesoran, aconsejan y con un excelente trato.  Calidad y Precio.",
        Images: null,
        When: ""
      },
      {
        Name: "miguel angel cerezo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLF8221Ayc7AlTir9ECokMxjDzg9FJb9gv_F3uwU7gPYt_2kQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Grandes profesionales,trato cercano,te asesoran en todo momento,sin duda los recomiendo no saldrán defraudados.",
        Images: null,
        When: ""
      },
      {
        Name: "Laura Hernandez Perez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWCiQGxzsgt4f9ou2168JJjRno2PHelkXp2ZCXFVA2XQy_xu5o8=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Optica tradicional de Alicante, con grandes profesionales y muy buen asesoramiento.\nAquí encuentro las marcas que me encantan y un trato exquisito!",
        Images: null,
        When: ""
      },
      {
        Name: "Viviana Naranjo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWtHznWowFdgfi9V5ZVZE8D7k75Ip0GZLtp-USAZevRUvBNweyFeQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Súper feliz con mis lentes y la atención que recibí en este lugar por parte de AMELIA Y JOSÉ RAMÓN.",
        Images: null,
        When: ""
      },
      {
        Name: "Eleonora Machado",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIJg3Sp83b8ba81SNQfeXYbNt0FYBqBHcFr0St-ETLx_0qTxQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buena atencion. Gracias",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Hawkers Alicante Outlet",
    category: "Óptica",
    address: "CC. The Outlet Stores Alicante, C/ Alicante, 94, Local LN-15, 03690 San Vicente del Raspeig, Alicante",
    description: "Esta tienda outlet es conocida por su buen servicio al cliente, con un personal a menudo descrito como amable, servicial y profesional. Muchos clientes aprecian los precios competitivos, particularmente en gafas graduadas, y la amplia selección de modelos atractivos disponibles. Si bien la mayoría de las experiencias son positivas, algunos han reportado problemas como la falta de seguimiento después de consultas y la recepción de productos dañados.",
    serviceRatings: {
      atencionCliente: 4.8,
      profesionalidad: 4.5,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://www.hawkersco.com/",
    phone: "966 60 03 85",
    review_count: 19,
    review_rating: 4.6,
    latitude: 38.382953,
    longitude: -0.506562,
    user_reviews: [
      {
        Name: "Manuel González",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIysjgvExQt7OjykLe57KknOzS9SVEVmAjf_mHKsx05oDsnbw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy contento por el buen trato que he recibido en esta óptica. Es la primera vez que me gradúo la vista en Hawkers y el trato no ha podido ser mejor, en especial a la chica que nos ha atendido Tania. Además nos han ofrecido enviar las gafas graduadas a domicilio ya que no somos de Alicante. Muchas gracias.",
        Images: null,
        When: ""
      },
      {
        Name: "Miriam Coronado Estruch",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW153uJLjtBpI9dkt_FRvNxyT66ixU6yi33d-hKelGQNkzSM5o=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "¡Inmejorable experiencia en Hawkers de Sant Vicent del Raspeig! Me compré dos gafas graduadas a un precio muy competitivo, y para mi comodidad, me ofrecieron enviármelas a casa ya que no soy de Alicante. El trato por parte de las trabajadoras fue excelente, tan cercano y profesional que no tengo duda de que repetiré.\n\nYa era fan de la marca y todas mis gafas de sol son de Hawkers, pero esta es mi primera vez probando las graduadas. Si tienen la misma calidad que las de sol y están respaldadas por un equipo tan increíble, estoy segura de que serán geniales. ¡Gracias por todo!",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Antonio Sanz Hernandez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU6AkEmMNa4BW0H1asGoC33fHvxjGNMlicQXqTQMge05A6HawQN=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "El pasado 26 de diciembre estuve en la tienda, pregunté por las gafas progresivas. Me tomaron todos los datos y me dijeron que en un rato me llamarían para hacerme el estudio.\nPues todavía no me han llamado. Lo veo muy poco serio por su parte, ya que la consideraba una compañía muy importante. Me he llevado una gran decepción con ustedes.",
        Images: null,
        When: ""
      },
      {
        Name: "María José Orts",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKiTTtrcl-Qk990drBjmoLX0sZezLlu6OYUixF3-RsTyWclGg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena experiencia. Pasamos por casualidad por la tienda.  Modelos muy bonitos a precios muy competentes. A resaltar el trato de Aurora y Tania. Muy agradables, ofreciendo una excelente atención al cliente. Me he llevado dos gafas graduadas , y a los dos días ya las tenía para recoger ( que rápido!) me he llevado una puesta directamente ( hasta me ajustaron la montura en el momento).  Repetiré seguro por calidad/precio, sobre todo por la atención al cliente de Aurora y Tania, que marcan la diferencia.",
        Images: null,
        When: ""
      },
      {
        Name: "S",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWKZzU540z3i70YX6z_XOb0v4AZWM6OxWSnvLONun4xzsbeNtX_Ig=s120-c-rp-mo-ba3-br100",
        Rating: 1,
        Description: "He ido a comprar una funda la cual estaba expuesta y rallada. Le he dicho a una dependienta morena de gafas que quería esa funda pero nueva y se ha ido con ella dentro para ponerme la nueva. Mi sorpresa ha sido que cuando he llegado a casa tenía la rallada. Experiencia nefasta, estoy a 100km y no puedo devolver esta mierda",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO7qtYmjUxjxS4w_NPyLznD4YgsYVRllxoexp6d&fid=0x0:0x140a26642a3d96f0"
        ],
        When: "2024-12-21"
      },
      {
        Name: "Carolina Martinez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKicPS93DauodXxPg7GCb-ql3EBha3Ucue0ccnZ7Wrl-aTOHg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hace unos días estuve en la tienda para intentar resolver un problema y la atención por parte del chico, creo que su nombre es Álvaro, fue estupenda. Me fui muy contenta y con mi problema solucionado. Una atención al cliente así merece especial mención, espero que valoren su trabajo.",
        Images: null,
        When: ""
      },
      {
        Name: "AGILOLIVER",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXWXmkoSaAiYYSbl5OPuaHbZF54wlgKkC3mai6a-tav7_4nqUn4=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "He hecho la compra del año. Dos gafas graduadas por el precio de una. La atención de Aurora y de Jairo ha sido excelente. Trato cercano y profesional. Precios muy competitivos. Recomendable 100 %",
        Images: null,
        When: ""
      },
      {
        Name: "Paula Claudia Ghinda",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXLmTs7z7tUDyajQefqZW5VYjwaqVojwG-2m1bGQa1uW4mUakA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Trato excelente! Muchas gracias a Alvaro y Jairo que nos han atendido increíblemente y nos han aconsejado en todo, muy profesionales y cercanos a la vez!\nLas gafas preciosas y no han tardado nada en graduarlas!!\nSin duda un acierto!\nGracias",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Optica Pinoso 9",
    category: "Óptica",
    address: "C. Pinoso, 9, 03012 Alicante",
    description: "Esta óptica es muy elogiada por su excepcional servicio al cliente, caracterizado por una atención amable y personalizada. Los clientes destacan la profesionalidad del personal que ofrece soluciones a medida y consejos detallados, asegurando la satisfacción del cliente. La óptica también se destaca por sus productos de alta calidad y una buena variedad de precios.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      martes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–14:00"
      ],
      viernes: [
        "9:30–14:00",
        "17:00–20:30"
      ]
    },
    website: "",
    phone: "966 37 60 90",
    review_count: 34,
    review_rating: 5,
    latitude: 38.359565,
    longitude: -0.48262,
    user_reviews: [
      {
        Name: "Ángel Sánchez Pérez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUyVWn-DTT5PKd9ZOvH2xFz-23j9TkcyxRYOlEmAiiErpuLGStD=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelentes profesionales y un trato  personal e inmejorable . Buscan la mejor solución a tus necesidades teniendo en cuenta a la persona. Trato amable. Trabajan con productos y marcas de muy buena calidad.Muy satisfecha, lo recomiendo.",
        Images: null,
        When: ""
      },
      {
        Name: "Francisco Manrique",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIjMEf1FCkLTZB2Ke1NhFLO7UD8k5GBXO_Co2OVw5JbZ8pqXA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Personas excepcionales, tanto en atención como en profesionalidad, limpieza de establecimiento y todo lo explican con mucha educación y respeto, lo recomiendo cien por cien",
        Images: null,
        When: ""
      },
      {
        Name: "JJ Cerezo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVeAW7U3eVTfgH__CGpGx3C0Z8BLgYKWxM3PgXqrCIZG6F3UjLNig=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Ofrecen soluciones adaptadas a cada persona, el trato es genial y el precio muy bueno.",
        Images: null,
        When: ""
      },
      {
        Name: "Angel Gl",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKO2oF3E_lQfO0HhQfNqxT3G4JSyqhKn5JpDwmytF8qHjB64w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato, atención, calidad y siempre buscando la mayor satisfacción para el cliente. Para mí, 100% recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "AG",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKh6zXUxxVnH_-LmYhTs097xh-eXoR2_vii48gncX32kNYocOk=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Paco y Carlos forman el equipo profesional perfecto para cuidar de tus ojos, amables y detallistas te aconsejan en todos los aspectos de tus lentes y de la montura más apropiada, con productos de excelente calidad y precios para todos los gustos.\nTotalmente Recomendable 🤓",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Luis Martinez Escudero",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX_6LZlyrF1QB-JIDFw9Hrao2YM1z6do6l5YHFd0HS9032yBpc=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor óptica, la mejor atención y mucha variedad. Resuelven cualquier problema que pueda surgir y te asesoran muy bien. Entre por casualidad y se ha convertido en mi óptica habitual.",
        Images: null,
        When: ""
      },
      {
        Name: "marisa ribera",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI_hTto_Edpbt2_6whJNLdD_XTZIpu-iNvJLupc3KJeWFR1MQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Profesionalidad y amabilidad son el tándem perfecto que ofrece Óptica Pinoso.\nMi vista solo en sus manos.",
        Images: null,
        When: ""
      },
      {
        Name: "Miguel angel Quero Marin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUFjPr-X447ggw3L22_x4VC3WZU9pVsL2gzQJkYHuZLsH93G98v=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buenos profesionales y un trato espectacular ...",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Correos",
    category: "Óptica",
    address: "Calle Pablo Iglesias, 4, 03004 Alicante",
    description: "Esta óptica es reconocida por su excepcional y personalizado servicio al cliente, donde el personal es descrito como paciente, atento y muy conocedor de las gafas. Los clientes aprecian el asesoramiento experto y el esfuerzo para encontrar la solución perfecta para las necesidades de visión y estilo de cada individuo. La óptica también es elogiada por su profesionalismo, la calidad de sus lentes y su acceso a una amplia variedad de monturas, incluidos diseños únicos y originales, así como tecnología moderna para el ajuste de lentes.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      martes: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "17:00–20:30"
      ]
    },
    website: "http://opticacorreos.com/",
    phone: "965 21 72 00",
    review_count: 18,
    review_rating: 4.8,
    latitude: 38.347423,
    longitude: -0.487933,
    user_reviews: [
      {
        Name: "Paloma Picó Robles",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVbpVLZQmW-vUB_IxH9leRhooBpMy5vutKHSsPtqjYNXhzvSDgu=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Si hay alguien que sabe de gafas, ese es Gabi. Su atención es insuperable: te asesora con paciencia, te recomienda lo que realmente necesitas y se asegura de que salgas con la mejor opción para tu vista y tu estilo.",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Gallud",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIyMoYhbWSvREIfwMyMii1yI7kepxUhkEyzfcsC_mRYKuLwKGw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un sitio fantástico con un trato muy personalizado, un gusto ir a sitios q te traten y que te cuiden como si fuese para ello. Y maquinaria estupenda y muy moderna.",
        Images: null,
        When: ""
      },
      {
        Name: "Manoli Piqueres Balaguer",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIcm7Xtgg5lGGualKX5q9AVLGdIDZRoFikDoWlN2GZSy8Az3A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Toda mi familia es cliente desde que empezó en la plaza de correos y su excelente trato, experiencia y calidad de los lentes siempre están a la vanguardia.",
        Images: null,
        When: ""
      },
      {
        Name: "sandro mormina",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW1btPDj20s4YCiCpUbXwFtvUn2YmPZc3VRBznN8uhCktsaDWiHQQ=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Me la recomendó mi oftalmologo hace muchos años pero por circunstancias nunca habia acudido a ellos. Recientemente me he hecho las progresivas con ellos y solo tengo buenas palabras. Muy atentos y super profesionales. Parece que no tengan muchas monturas pero no hay que engañarse por luego Gabriel te va sacando decenas de ellas de los cajones. Ademas tienen monturas muy originales diferentes a las que puedas encontrar en una franquicia. Tienen ademas la ultima y mas moderna maquinaria de Essilor para ajustar al maximo las lentes progresivas. Resumiendo, si quieres calidad y profesionalidad, esta es tu optica.",
        Images: null,
        When: ""
      },
      {
        Name: "María Charques",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIM5c5pOAfDmRp18WLcyAa2dQ-2b00wrW020k8VCOAHwsRKaQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Amables y profesionales, con maquinaria moderna y asesoramiento personalizado. Nada que ver con franquicias, calidad.",
        Images: null,
        When: ""
      },
      {
        Name: "Pablo Quirante",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUqOgZSKcjwpDvnrtl-whvx9KdvWv3Uvn4yY99r9Lgk5gHcygY=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Mi lugar favorito a la hora de escoger gafas. Buen trato y gran variedad, el mejor sitio de Alicante sin duda!\nAl satelic no le hagáis ni caso, la mejor óptica es esta.",
        Images: null,
        When: ""
      },
      {
        Name: "Julio",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXFq75iTlWxy8dTJLvpgBJUrIGmjs1IsUpg9H4pLA9_dN0TpzXZsw=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Buena atención. Y muy profesionales.",
        Images: null,
        When: ""
      },
      {
        Name: "Cesar E. M.",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJuMzd2JmKZ6iqT-84X0n4-keiU6jez0h1I0jVscJXTJQ3CSA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Optica de toda la vida en Alicante, con personal eficiente y competente, poniendo a la disposición de sus clientes cristales ópticos correctores de primeras marcas internacionales, personalmente estoy muy satisfecho con la atención, dando solución a mis problemas de vista, los cuales en otros establecimientos no acertaron con mis lentes bifocales.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Optiq",
    category: "Óptica",
    address: "C. Poeta Quintana, 7, BAJO, 03004 Alicante",
    description: "Esta óptica es constantemente elogiada por su excepcional servicio al cliente, con un personal descrito como muy profesional, encantador y que brinda una experiencia muy personal y atenta. Los clientes aprecian el excelente asesoramiento, la calidad de las gafas y la gran relación calidad-precio. La óptica también destaca por su capacidad para atender a todas las edades, incluidos los niños, y por ofrecer una buena variedad de productos de calidad, incluidas lentes de contacto para diversas ocasiones.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "9:30–14:00",
        "17:00–20:00"
      ],
      martes: [
        "9:30–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "9:30–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "9:30–13:30"
      ],
      viernes: [
        "9:30–14:00",
        "17:00–20:00"
      ]
    },
    website: "http://www.optiq.es/",
    phone: "965 14 18 13",
    review_count: 21,
    review_rating: 5,
    latitude: 38.348275,
    longitude: -0.487516,
    user_reviews: [
      {
        Name: "Alexandra Urios Bernabeu",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUguH_ezvzXS8mdGO06R3Ee3iwkqicH7oR-ufxHJseqm5HWKl-Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Muy buen profesional que te asesora muy bien. Tiene gran variedad y de calidad. Es mi optica de confianza de toda la vida.",
        Images: null,
        When: ""
      },
      {
        Name: "Inmaculada Sebastiá Aracil",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLfb96ShULZ5K6DADrgHNMU94qpNL4ROq3ssMOw67127ny6ew=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente servicio al cliente y grandes profesionales. El trato es muy cercano. La mejor óptica que conozco en Alicante y alrededores, y soy usuaria de lentes desde hace más de 30 años. Ahora también mi hijo.",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio Monsalvo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIrQ2dE03Rvt8U1e7WgVT4vKgdkpL4r8WxU0hUHJggvTxBWrQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Exceleetente trato tanto por el propietario como por la persona de atendimiento, buen atendimiento personal, sus gafas calidad precio de lo mejor excelente,, desde que conocí esta óptica cuando estaba en la calle Sevilla, continuó con ella, estoy muy contento por su buen atendimiento",
        Images: null,
        When: ""
      },
      {
        Name: "Lula García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUmanlBIk1mErS-EPjY9Wah3EQBmN9wSb97CdGJ_20vl7Xgb0k=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Son súper profesionales y encantadores. Te asesoran y ayudan en todo y para colmo sus gafas son preciosas. La relación calidad-precio es excelente. Me siento feliz con mis nuevas gafas!! Muchas gracias !!!",
        Images: null,
        When: ""
      },
      {
        Name: "fotografoalicante - Foto Vídeo Mirablau",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXf4Zn3pSKKJFWde10Y2t2i4Jw8ZnS0uJ6j6c_kvabytGEFCh4M=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Un servicio excelente y muy profesional. Te sientes como en casa y el trato es muy familiar.\nDesde que me hicieron las gafas ello se me han quitado los mareos y el dolor de ojos.",
        Images: null,
        When: ""
      },
      {
        Name: "María Iñiguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUlEp_w0Qxtr1LLCoBQvGEkOo4dNsVR-pM3hMHu-Od2hpkWctp5Aw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Encantados con Optiq. José Carlos gran profesional, trato exquisito tanto con mayores como con niños. Mis hijas van encantadas. Recomendable 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Laura Hernandez Perez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWCiQGxzsgt4f9ou2168JJjRno2PHelkXp2ZCXFVA2XQy_xu5o8=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buenos profesionales recomendable 100%. Siempre nos atienden y asesoran muy bien.\nAquí me compro mis lentillas. Incluso las de Halloween y Carnaval",
        Images: null,
        When: ""
      },
      {
        Name: "Manolin Martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV0DW-t9sO3aSqZVu48CMLpNfTQzRk8VWJW5em9B_-50kklrDAf=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me hicieron unas progresivas y me adapté desde el primer dia. El optico es muy profesional y trabaja muy bien. La mejor óptica que conozco.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Domínguez - Málaga Centro",
    category: "Óptica",
    address: "C. Martínez, 22, Distrito Centro, 29005 Málaga",
    description: "Esta óptica en Málaga Centro es muy elogiada por su excepcional servicio al cliente, con un personal constantemente descrito como profesional, atento, amable y paciente. Los clientes aprecian la atención personalizada y la eficiencia en la resolución de problemas. La óptica también destaca por su alto nivel de profesionalismo y la calidad de sus servicios y productos, haciendo que los clientes se sientan cómodos y bien atendidos.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 3.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:45–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "9:45–13:30",
        "17:00–20:30"
      ],
      martes: [
        "9:45–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "9:45–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "9:45–13:30"
      ],
      viernes: [
        "9:45–13:30",
        "17:00–20:30"
      ]
    },
    website: "http://www.opticadominguez.es/",
    phone: "952 22 25 93",
    review_count: 467,
    review_rating: 4.9,
    latitude: 36.718365,
    longitude: -4.42172,
    user_reviews: [
      {
        Name: "Ana Orozco",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXazfPW81ybkbC6BHrufwP4C6Bq_gGMEFBG1T2hSylD3GiO8TfJ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Son maravillosos, profesionales de los pies a la cabeza. Llevo muchos años tratando con ellos y la verdad que siempre he estado encantada. Son atentos, cercanos, pacientes a la hora de tratar con sus clientes, siempre que tienes algún problema, rápido le ponen solución.\n\nSe nota que llevan años trabajando en esto, por lo que recomiendo tanto el servicio como los productos que ofrecen.😊",
        Images: null,
        When: ""
      },
      {
        Name: "melany molina",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVaQXmfAc6YP0yo41zvIGwtT-SSLCO3Mo7RNbRAON_BaFKTy5iI-Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "No puedo más que darles 5 estrellas porque no hay más puntuación.\nEl servicio inmejorable, la atención increíble y una gran calidad humana.\nFuimos porque se nos perdió el tornillo de las gafas y por más que les pedí que me cobrasen por él, no quisieron, es más en un momentito ya las tenía arregladas, y perfectas.\nNo puedo estar más que agradecida y encantada por su atención tan amable y cercana.\nSe los recomiendo totalmente a todo aquel que busque buenos profesionales y una buena óptica en Málaga.",
        Images: null,
        When: ""
      },
      {
        Name: "pilar tello",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKGI-XrqtGRy5iNSw9SBJS-3kHMX53hsyR31vDKNTxEB2N16Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buenas tardes!! Quería compartir q aquí te sientes súper atendida, la verdad q fui a ajustarme las gafas y no sólo no me cobran sino q fueron súper amables y atentos, Susana es un ejemplo de atención a la persona, muchas Gracias!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOfr4EsN2HIgsJ90oS8kz4bJqr1zRAbiiWyp0os&fid=0x0:0x77f122c6e42eccd6"
        ],
        When: "2024-11-12"
      },
      {
        Name: "**",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXTiK_Ja_Q6VyEx2QU8KKiQISB2Ibsn7rbeVjpq7UZc5xsYC3zP=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Me han atendido de maravilla, con gran profesionalidad y dedicándome todo el tiempo necesario. Todo el personal ha sido encantador, en particular Susana que es una magnífica profesional. Hacía mucho tiempo que no salía tan satisfecho de una óptica. Muchas gracias!",
        Images: null,
        When: ""
      },
      {
        Name: "Andrés Gutiérrez Mansilla",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKFKSZLlC2_eLbDBRDu6wTRoHJmGGab5xZ5uujkfJoaMt0bJA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Magnífico trato. Me atendió Ana muy amablemente y me solucionaron el problema con mis gafas de sol al momento. Recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Cris Málaga",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIdPo5PD_pPCDgN6KCwvTBRKKr3V5ow7MsZp1HmrVT7Cxeb2g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Además de la gran profesionalidad y la calidad, he recibido una maravillosa atención. Valoro mucho la calidez y la cercanía en el trato.",
        Images: null,
        When: ""
      },
      {
        Name: "LOLA FERNANDEZ TRINIDAD",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIcNAGLrp38LQIZuSXlsosa2Xk9h4ryDn8DjOLcaxE9B6577A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buen trato y muy profesional. Excelente tanto en la medición como en la atención de las lentes.",
        Images: null,
        When: ""
      },
      {
        Name: "loli medina",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUR37I4uUwjQ5Kz-uR62amT3_ccp300-Tw_WFOBfaEMVzVAJew=s120-c-rp-mo-br100",
        Rating: 4,
        Description: "Pues me gusta mucho comprar ahí porque los empleados son muy agradables,simpáticos y grandes profesionales,saben tratar con los clientes y te sientes muy cómodo.\nTambién porque ha sido mi óptica desde siempre y durante un tiempo he estado en otras ópticas por la cercanía y la calidad no es la misma.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica y Centro Auditivo Soloptical Málaga Alameda 33",
    category: "Óptica",
    address: "Alameda Principal, 33, Distrito Centro, 29001 Málaga",
    description: "Este centro óptico y auditivo en la Alameda de Málaga es muy apreciado por su excepcional servicio al cliente, proporcionado por un equipo amable y profesional. Los clientes destacan la atención personalizada, la claridad en las explicaciones y la disposición para ayudar con todo tipo de necesidades de la vista y el oído. El personal, incluyendo a personas como Rocío, Ángela y Aurora, a menudo es mencionado por su amabilidad y experiencia. Los clientes también aprecian los precios interesantes y la calidad de los productos y servicios ofrecidos.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      lunes: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      martes: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      miércoles: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      sábado: [
        "9:30–14:30",
        "17:00–21:00"
      ],
      viernes: [
        "9:30–14:30",
        "17:00–21:00"
      ]
    },
    website: "https://www.instagram.com/soloptical/?hl=en",
    phone: "639 99 05 43",
    review_count: 499,
    review_rating: 4.9,
    latitude: 36.71697,
    longitude: -4.423877,
    user_reviews: [
      {
        Name: "Anna Maria Di Nardo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLSeNpi5-MnozEU06o8dem14rmlPJHPckj50cBmHJ5cUdVGrA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente experiencia en esta óptica. Compré mis gafas graduadas y recibí una atención impecable. Rocío fue muy amable y profesional, ayudándome a elegir el modelo perfecto para mí y explicándome todo con claridad. Además, todo el equipo fue súper atento y siempre dispuesto a ayudar. Sin duda, un servicio de 10. ¡Muy recomendable!",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Luis Conde",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI4F4VfxPHRX-wL4ZnubQQr1SE3NWKaaP8hUmBab50joMUBsg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Voy a esta óptica hace muchos años y siempre hemos recibido un trato cercano a la vez que profesional. Amplia variedad de género y personal que te ayuda con todo tipo de soluciones (vista y oído). Personal que te guía y aconseja en todo momento, en nuestro caso un recuerdo muy especial a Ángela que nos suele atender frecuentemente. Gracias,",
        Images: null,
        When: ""
      },
      {
        Name: "Nieves Urdiales",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKW1YAojrJ9nhtdOHCHfym1mSlsvYZGgKTefvOSzxh5-vTThg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He recibido un trato excelente. Me atendió Ángela muy profesional y muy atenta. Es un placer tratar con personas de esta talla. Me quedé totalmente satisfecho y recomiendo está óptica a todo el mundo",
        Images: null,
        When: ""
      },
      {
        Name: "César Onada",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXf3BFL_ZeU_ulKYaN_apES_m6gfadUu78ntj6cnBdEfCA-q44=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Me gustaría destacar las formas tan agradables con las que Irene graduó la vista a mi madre y el trato tan bueno que nos dispensó. Dándonos opciones y sin presionar.\nEl resultado muy satisfactorio, ha quedado muy contenta. Repetiremos.\n\nQuizás no me fijé bien, pero me gustaría haber visto en la tienda más opciones de gafas de Sol de marcas que tienen un precio por debajo de 100 €, como Polaroid.\n\nUn cordial saludo.",
        Images: null,
        When: ""
      },
      {
        Name: "Mercedes Marchal Martos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKYUPhBMBE9NQrhe_4km4F3ckUvOdC6NE5xtxhxeVoPslDCHg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena experiencia en esta óptica. Excelente trato por parte de Rocío y Aurora que me atendieron sin prisa y explicándome todo a la perfección. Muy buenas profesionales las dos y super agradables. Sin duda volveré.",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio Mingorance",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXyWSTzk2_0DcjmqlZwIri8zCPiR3N2W5ZXznjWOrNlrLujpB4S=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "He tenido un problema con mis gafas. Una patilla se ha caído y necesitaba arreglo urgente. Al pasar por este centro en la Alameda, 33, he pensado si serían tan  amables de arreglarlas.\nHe de decir que las gafas no las he comprado en este centro y tenía dudas si iban a proceder a su arreglo.\nPues si, me han solucionado el problema de forma muy amable. Un caballero me ha atendido, tenía que haber preguntado su nombre pero no lo hice, encargado de lo auditivo creo recodar. En cualquier caso, muy profesional y con mucha simpatía. Agradezco la atención con mi persona. No me ha querido cobrar nada. Es la forma de hacer clientes y cuando necesite una gafas nuevas, será la primera óptica que visite.\nRecomiendo el centro para el que busque unas nuevas gafas, con precios muy interesantes. Gracias y un saludo.",
        Images: null,
        When: ""
      },
      {
        Name: "Patricia Terrazas",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWogEDfbMOEDjpFkwR7W3UQqFJ4-EvN8OOiAtWhZJ6TFHhWuHs=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención fue precisa y profesional, valoro mucho la atención personalizada y atenta de las personas que me atendieron. La gafas estuvieron listas en el tiempo estipulado y la calidad inmejorable",
        Images: null,
        When: ""
      },
      {
        Name: "Manuel Palacios",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIYxiFVcVyMK_0e4s69Bxk2D83MmcuiZog5QPDF86lKl7LT-Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hoy he estado en Soloptical, en la Alameda de Málaga, para reparación de gafas. Han sido muy amables, como siempre, y no me han cobrado nada. Soy cliente habitual, y solo puedo hablar bien de ese establecimiento. Gracias.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Soloptical Málaga Nostrum",
    category: "Óptica",
    address: "Calle Jaén, 3, Parque Comercial Málaga Nostrum Centro Comercial Málaga Nostrum, 29004 Málaga",
    description: "Esta sucursal de Soloptical en Málaga Nostrum es muy elogiada por su excelente servicio al cliente, caracterizado por un personal amable, servicial y profesional. Los clientes aprecian la buena relación calidad-precio, las promociones interesantes y la amplia selección de monturas atractivas. El personal, incluyendo a personas como Ana, Samanta y Rocío, es mencionado frecuentemente por su amabilidad y experiencia al ayudar a los clientes con sus compras y atender sus necesidades. La experiencia general se describe como positiva, y los clientes destacan el servicio eficiente y la calidad de los productos.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 5.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://soloptical.net/es/soloptical-nostrum/?utm_source=Google&utm_medium=google_my_business&utm_campaign=sitio+web",
    phone: "622 37 29 76",
    review_count: 993,
    review_rating: 4.9,
    latitude: 36.686298,
    longitude: -4.471125,
    user_reviews: [
      {
        Name: "Javier G.V.",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU40H_3b4CCRUGO_EibIhERj8AihJ46AGs8ZK_GaeUUzIcUAQs7=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buen trato y profesionalidad. Excelente relación calidad precio y promociones muy interesantes. Las trabajadoras responden bien a todas las dudas. Muy contento con las gafas. Además, tuve que usar el seguro que contraté y no ha habido ninguna incidencia, cambio de montura y 1 cristal sin problemas.\nVolveremos a repetir cuando haya necesidad.",
        Images: null,
        When: ""
      },
      {
        Name: "ANA BELEN J",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXxjwyo4MxPaVfo0pNIMUt7qxK6DiEx82IE2CW9WeGiARv5WDq6=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es la primera vez que iba a esta óptica. Me ha gustado mucho por varios aspectos, un trato muy cercano y profesional, un precio muy económico, buscaba unas gafas y he comprado dos. Me queda probar las lentillas pero por el momento es un servicio de 5 estrellas.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMNYP6_ox1NyzJKj_5-gCdmT7e5NF5IU6irZf0_&fid=0x0:0x3f468ef07026f6fd"
        ],
        When: "2024-11-11"
      },
      {
        Name: "Alfredo Leon",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLayRmAzgEp7iNR2UIRZQADrN3eWgkgv0owUHWCEOAa5bAPRQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hemos venido a comprar unas gafas y mi mujer a graduarse la vista, la chica que no has atendido encantadora, creo que era Ana, súper simpática y bien asesorados en nuestra compra. Por cierto, luego hemos comparado precios y muy competitivo. Muchas gracias",
        Images: null,
        When: ""
      },
      {
        Name: "Eduardo Maestre",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVBgG_FNlBscYNjajLzXIF2qJeXmp_hqvl3Z2-8XKsT4Rh5CTWw=s120-c-rp-mo-br100",
        Rating: 3,
        Description: "Muy amables y muy atentas. Las monturas son muy bonitas. Pero han tardado 10 días en traer las gafas que compré, y eso que he llamado para que no lo olvidasen. Podrían tardar menos los del taller, ya que las que dan la cara ante el cliente son las chicas que allí nos atienden.",
        Images: null,
        When: ""
      },
      {
        Name: "Raquel García",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKcukNTPQ8g47ZgQH61vqFpsWVHwiLkiFQ-LyXn0xaZH_34mw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me atendió Samanta, una chica muy amable y agradable. Su trato fue muy bueno, sabiendo aconsejarme y guiarme en la compra de mis gafas. Si tuviera que volver a comprarme unas, repetiría con ella.",
        Images: null,
        When: ""
      },
      {
        Name: "Sonia Serrano Serra",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV6b69r_94m_wOJaHucOGvh7dDgFlPpCggrYhN_V0f8u_IpV1C9ag=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Espectacular atención al cliente!! Siempre dispuestas a ayudarte y a arreglarte cualquier problema. Siempre acudo aquí porque nunca defraudan (por cierto, no tengo nada que ver con la empresa pero cuando hay que aplaudir no nos debe temblar el pulso).",
        Images: null,
        When: ""
      },
      {
        Name: "Jose.G",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ1ROP2NVicT6PDeNpBgtT2LPCgdsFjqZ-0uH3WVX4FPZ4pIQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Soy cliente de esta óptica hace años comprando gafas progresiva si problemas, la relación calidad y precio es excelente, quiero destacar el trato y la atención que siempre me dispensa Rocío. Recomiendo 100x100. Muchas gracias.",
        Images: null,
        When: ""
      },
      {
        Name: "Yeisa Luque Jiménez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUSQZ0f_h2dm5V71deUF1Q8024SLAzwmHijfBO6DCdKWfLNdY_D=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Desde el momento en que entré, el trato fue excepcional. El personal es muy amable y se tomó el tiempo para escuchar mis necesidades y preocupaciones. Me ayudaron en todo momento a encontrar la opción que mejor se adaptaba a mi estilo y presupuesto.\n\nLa atención al cliente fue impecable, y se notó que realmente se preocupan por el bienestar de sus clientes. Sin duda, recomendaría soloptical a cualquiera que busque un servicio profesional y un ambiente acogedor. ¡Gracias por hacer que mi visita sea tan agradable!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Multiópticas",
    category: "Óptica",
    address: "C. Hilera, 4, Distrito Centro, 29007 Málaga",
    description: "Esta tienda de Multiópticas en Málaga generalmente está bien considerada por su servicio profesional y eficiente. Los clientes han expresado su satisfacción con la calidad de las gafas y el excelente asesoramiento proporcionado por miembros del personal como Isabel y Eva. La tienda también destaca por su amplia variedad de monturas y buenas ofertas tanto en gafas como en lentes de contacto. Si bien la mayoría de las reseñas son positivas, un cliente informó de un problema al recibir la marca incorrecta de lentes de contacto.",
    serviceRatings: {
      atencionCliente: 4.5,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:45"
      ],
      viernes: [
        "10:00–13:45",
        "17:00–20:30"
      ]
    },
    website: "http://www.multiopticas.com/",
    phone: "951 17 13 22",
    review_count: 381,
    review_rating: 4.9,
    latitude: 36.717969,
    longitude: -4.427845,
    user_reviews: [
      {
        Name: "María Pérez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWc0igbHBIsLiGbemsnByBqbdj301x0syTM2E9LI3yvKGgo3zmj=s120-c-rp-mo-ba2-br100",
        Rating: 3,
        Description: "Les pongo unas 3 estrellas porque las gafas  están bien y no tengo problemas con ellas.\nEl problema viene con las lentillas. Soy usuaria de lentillas Clarity 1 day de silicona con pruebas hechas y demás y corroboradas de qué no me hacen daño.\nAcudí el día 19 a graduarme par gafas nuevas y llevarme un pack de lentillas diarias, tienen solo una caja y tengo que esperar la otra.\nJunto a las gafas me llevo las cajas de lentillas y mi sorpresa es que el envoltorio no es el mismo.. hago caso omiso y las pruebo. Me las pongo y me hacen daño, me pinchan y no veo bien con ellas (pruebo 3 parejas distintas antes de llamar) y al ver que no me cogen pues pregunto en el multiopticas de Larios. Me dicen que me las ponga una hora y que me las ven..\nNo he durado con ellas ni 10 minutos, y al enseñarle las mias que tenía por casa y las que me han vendido (dejo foto abajo, siendo las grises las correctas y las azules las que me han dado) y la contestación de la óptica es decirme que son 1mm mas pequeñas de diámetro de las que yo uso y que no les ha pasado nunca con nadie... Le digo que quiero dos cajas de las que he pedido y su respuesta es de chiste, que las Clarity son mas caras y por eso ponen esas...\nPerdona? Me las vendes como una marca que no he pedido y encima me quedo con las lentillas que no me valen.\nPerfecto, he tirado 25 euros pero no pienso volver a que me timen. Mirar bien lo que compráis porque la vista es muy delicada.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMKv6y5tJpsitl5wPe5bxRCqvDSmQwq6VlPnzs5&fid=0x0:0x4ddbc41e4359cbf4"
        ],
        When: "2024-11-28"
      },
      {
        Name: "Alex Malper",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUrftwvCY2BraVsaBpq8AsZTcr-xlT8qO1uVLpPrpFE3MzLdULRUg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy satisfecho con el servicio prestado. He vuelto después de comprar hace un año unas gafas porque estoy muy contento con la calidad.\nEl trato estupendo!!",
        Images: null,
        When: ""
      },
      {
        Name: "Cynthia Armijo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUqUFUHoDxF3NoAzkOav53z5FTnWBVMhNPkcC_lheAC9l37IHLs=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Hace un mes pasé por la tienda porque había un tremendo sol y la vendedora de pelo corto melena me atendió muy bien y me llevé dos gafas de sol de avance de temporada. Pero una de las gafas, no tenían en la tienda la funda correspondiente y me dio otra funda para llevarme las gafas y así la vendedora solucionó el problema.  A la semana me llegó un mensaje para ir a recoger mi funda. Me he demorado como dos semanas en ir a recogerlas porque no vivo cerca. Y ahora cuando voy una chica de pelo largo oscuro, me atiende y le enseño el mensaje y me dice que tengo que llevar la funda anterior. Y yo flipando porque no era mi problema que en su momento no tuvieran la funda que yo compré, y encima nadie me dijo que tenía que devolver la que me habían dado o sea, igual qué asco que ahora al próximo cliente le den mi funda usada no?\nY le digo que nadie me dijo que llevara la funda esa y me dice que poco más hay que tener dos dedos de luces tratándome de tonta por no llevar la funda!!!! FLIPO. Es que encima agradezcan que voy a perder mi tiempo a buscar algo que pagué que tenían que ustedes haberla tenido dentro de su stock!! Le dije por una funda que a la óptica no le cuesta nada, se pone a discutir conmigo y a tratarme así. Le dije que no me traté de tonta, que se cree!! Finalmente me dijo tiene usted razón, pero si me llaman tendrá que venir a dejarla. Jaja pues bueno si la quieren que vayan a mi casa a buscarla, no te jode. De verdad que yo no creo que MULTIOPTICA haga problema por esto, yo creo que simplemente esta vendedora es una tonta. Por cierto, no compro más en esta franquicia. Ya me iré yo a SOLOPTICAL QUE ES MUCHO MEJOR!\nDe verdad molestar a los clientes por la cara por una porquería que debe valer 1€!!  Y por último eso se regala por las molestias de yo tener que ir hasta ahí!",
        Images: null,
        When: ""
      },
      {
        Name: "Jésica Moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUUp7qm4XCALUng4pJEY4kXQ2YExw7M6v4FQJGkmFnq7obvsVw=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "La variedad de gafas es muy amplia. Los precios y ofertas convenientes. Isabel es una increíble profesional. Gracias :)",
        Images: null,
        When: ""
      },
      {
        Name: "Alba Brugada",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIa0k0i3mpU6T5MCKka-NoqBwaNsYab4srMysDXX6wI8qRJZg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Profesionales y eficaces. Eva me aconsejó y me trató de manera excepcional. Quedé super satisfecha con el trato y el producto. Volveré a acudir aquí cada vez que tenga cualquier problema a la vista. ¡Gracias!",
        Images: null,
        When: ""
      },
      {
        Name: "Idiala Valdes Catala",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWnF9FKkX0KkoU7L3WBlK3TjWcASQdQEql6W9NSnw1W430d5qEiTw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Maravillosas las gafas!!!!! El trato de los chicos y chicas estupendo....soy cliente de hace años...y siempre salgo más que satisfecha con el servicio...lo recomiendo 💯...\nVer bien es no perderse los detalles de la vida",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNp0y_pfxT-MDJP4etESK7nEVP7nhlZ05C2q0WO&fid=0x0:0x4ddbc41e4359cbf4"
        ],
        When: "2025-1-10"
      },
      {
        Name: "Juan",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUXlH1ENkvEroEgn0efYO2HeYysSz2Psvxfrick_F75lmvRGPtZRg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estupendo trato y cercanía, dije que me urgían, y me han hecho las gafas muy rápido.\nMuchísimas gracias.\nExcelente!\nGracias Eva!",
        Images: null,
        When: ""
      },
      {
        Name: "Irene González",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJbzn0YrGxBTdJ__VjCOvYVcd0LSdxVARXIM16-cSr-O-d9DA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Esta es mi óptica de referencia desde hace un tiempo. Muy profesionales, producto de calidad y excelente asesoramiento. Buenas ofertas en gafas y lentillas. Totalmente recomendable.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
{
    title: "Óptica Soho Málaga",
    category: "Óptica",
    address: "Alameda de Colón, 18, Distrito Centro, 29001 Málaga",
    description: "Esta óptica es muy apreciada por su excelente atención al cliente y la profesionalidad de su personal. Los usuarios destacan la alta calidad y la originalidad de sus gafas, convirtiéndola en una opción de confianza.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      martes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:00"
      ]
    },
    website: "http://opticasohomlg.es/",
    phone: "951 15 54 66",
    review_count: 293,
    review_rating: 5,
    latitude: 36.714746,
    longitude: -4.4247,
    user_reviews: [
      {
        Name: "Marta Alejandra",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI_joarntlsHq_j6Q1NM8xCqAQDBj1wLsOa91-p4IUMTnRrhw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Optica muy bonita donde puedes encontrar gafas de muy buena calidad y muy originales , ademas de una profesionalidad y atención increíble!\nMi óptica de confianza sin duda! Muy recomendable.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipP3Xa99-6Y7n3Ox1VhWqoZFJaV0ikVo5AoohZWE&fid=0x0:0x78ac4f8dffdfd579"
        ],
        When: "2024-11-22"
      },
      {
        Name: "Naydulim Mendoza",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJYEn1z-V0qOkf94QAFb5UJ_xsYUEQm-2iOAvEknqXJfSqPLT67=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estoy encantada con esta óptica! Aquí en encontré mis gafas perfectas, cómodas y bonitas. Fátima fue muy amable y profesional, me ayudó a escoger el modelo perfecto.\n\nAdemás, se tomó el tiempo de explicarme todo sobre los materiales, el cuidado de las gafas y las opciones de lentes, lo que hizo que me sintiera muy segura con mi elección.\n\nRecomiendo esta óptica al 100%, tanto por la calidad de sus productos como por el excelente servicio al cliente. ¡Definitivamente volveré!",
        Images: null,
        When: ""
      },
      {
        Name: "David Carretero",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU0UQ9eEl_YV5Wbya2AsMqQdPEgvIfKqC023qrTSDQ2fPqCrWGG=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estaba de paso por Málaga y me encontré con esta óptica que no deja indiferente a nadie. Se nota cuando te atienden con pasión y te recomiendan en base a tus gustos. Tienen muy buena selección de gafas trabajando con las tendencias actuales. Muy contento con mi compra, 100% recomendable!",
        Images: null,
        When: ""
      },
      {
        Name: "Joaquin Conejo Navarro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLI5r9qx2zCSUc2Jjd0Od8ecJN2pimrZb0whhky1WUSwzTKvg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La ópticas es preciosa y muy bien equipada. Tiene un catálogo de gafas con un gusto exquisito, pero lo mejor de todo es la atención y profesionalidad de Fátima. Volveré sin duda. 100% recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "José Astorga",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKb9Utuf61sOC8by8dVjD3iupEcdF9TCa_6WRlNXnPbAbvvZA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "\"Servicio impecable y personalizado\"\n\nRecientemente visité la óptica Soho para renovar mis gafas y quedé muy satisfecho con el servicio recibido. Fátima fue muy amable y profesional,  dedicó tiempo a escuchar mis necesidades y me ofreció varias opciones que se ajustaban tanto a mi estilo como a mi presupuesto.\n\nLa revisión ocular fue muy detallada. Además, Fátima me ayudó a elegir una montura que se adapta perfectamente a mi rostro y es súper cómoda.\n\nRecomiendo esta óptica a quien busque un trato cercano, profesional y productos de calidad.",
        Images: null,
        When: ""
      },
      {
        Name: "Menci Collado",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUW9jFPNzDUIuDz4DbqC9h0WXP3UpenE-hxB5yN5D_FSe5GmJcT=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Tuve una experiencia excelente en la Óptica Soho. El trato por parte Fátima fue muy amable y profesional. Tienen una gran variedad de modelos con opciones para todos los gustos. Es totalmente recomendable, yo estoy segura de que volveré.",
        Images: null,
        When: ""
      },
      {
        Name: "Salvador Ojeda",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKwm6s2rcf4st09G9YU1UPnZqy3ZcRNsVUJLZpeDin4ruRehQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Experiencia muy positiva en óptica Soho, empezando por el cálculo de la graduación, que ha sido mucho más detallado que en otras ópticas. Tienen muchísimos modelos disponibles de monturas muy actuales y para todos los estilos. Además la atención ha sido super profesional y en menos de una semana ya tengo mis gafas. Gracias",
        Images: null,
        When: ""
      },
      {
        Name: "Irene Juan Valdeolmillos",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVe57wtG95TSN9nUdikOLVy5803TGN0tuSY5PpRX8YRXh2HKu0=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Fátima es una profesional, hicimos todo el proceso para ver cuántas dioptrías tenía porque perdí mis gafas anteriores y me ayudó a elegir la montura que mejor me venía. Lo recomiendo al 100% ademas el espacio es una maravilla y nada convencional. Gracias Fátima!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "ZEISS VISION CENTER Málaga",
    category: "Óptica",
    address: "C. Atarazanas, 3, Distrito Centro, 29005 Málaga",
    description: "Esta óptica es considerada por muchos como la mejor y más recomendable de Málaga. Se distingue por su alta profesionalidad, trato cordial y acogida al cliente. Además, ofrece un amplio surtido de las mejores marcas y modelos actuales.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–20:30"
      ],
      sábado: [
        "10:30–14:00"
      ],
      viernes: [
        "10:00–13:45",
        "17:00–20:30"
      ]
    },
    website: "https://www.zeissvisioncenter.com/es/malaga.html",
    phone: "952 60 21 60",
    review_count: 836,
    review_rating: 5,
    latitude: 36.71833,
    longitude: -4.423271,
    user_reviews: [
      {
        Name: "Miguel Castañol Attias",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU3JCTRlsLpokOPs4VGncwCAqeVHvwOCD0huKHfahGDHQp5vfta-Q=s120-c-rp-mo-ba7-br100",
        Rating: 5,
        Description: "De las muchas y buenas ópticas de la ciudad de Málaga,esta es sin duda,no solo la mejor, sino la más recomendable.La puntuación se queda corta!harían falta más estrellas!! La profesionalidad y el trato así como la cordial acogida al cliente y los conocimientos por parte de todos los empleados la hacen merecedora de la máxima puntuación.Situada en pleno centro histórico y comercial.Gran surtido de las mejores marcas y los más actuales y sugestivos modelos.La satisfacción está garantizada.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPZD3nGomZJYfhDtnjP4GlmEV7QQh8qTyX5wwV9&fid=0x0:0x7392a9a9c68d7c4b"
        ],
        When: "2024-10-4"
      },
      {
        Name: "Mercedes Gomez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJV7P6N1BkHZ_pQZ0M2j7yVhJNlqrSGmFavZuSZJaD6S5nT6Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor óptica profesional para mi. Llevo mucho tiempo acudiendo a ellos. Extraordinario trato y profesionalidad y te orientan para encontrar la nejor solución de lo que buscas. Con su amabilidad da gusto ir a visitarles y siempre sales contento",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio de Diego Alvarez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXzV64rm8_pQhOaJpc2JSYNPRVhQpqYnbsbdVJplVC43S0ovVk=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Visité esta óptica recientemente y quedé satisfecho con la atención y los servicios ofrecidos. El personal fue amable y profesional, ayudándome a elegir las gafas adecuadas de una variedad de modelos y marcas bastante amplia.\nEl proceso de adaptación a mis nuevas gafas fue sencillo y rápido,  la experiencia en general fue bastante positiva.",
        Images: null,
        When: ""
      },
      {
        Name: "Miriam Chahid",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJRe1-YDhZzVq2yhQeIQzjRoftE4FOk4I6wqHt_NwfYjinG2A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La profesionalidad y la amabilidad además de los consejos certeros no faltan en este negocio. Vuelvo con mucho gusto por el trato recibido tanto yo cómo mi familia. Siempre cumplen mi expectativa y responden a mis necesidades. Enhorabuena a todo el equipo y en especial a Cristina y  a Gema que hoy me han atendido con mucho gusto.",
        Images: null,
        When: ""
      },
      {
        Name: "Juanma Ramos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLEf-2rE9CBhsEcukvo9vdCgA3ZTEz8q_welMF_V_HQaZrPKQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me arreglaron la patilla de mis rayban, solo se había soltado el enganche y no me cobraron por la reparación, muy amables y profesionales las trabajadoras\nVolveré a ir 👍🏽",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNGQywLVqJzvSJFXbgg9LEIfG2hvcSetkvFtApK&fid=0x0:0x7392a9a9c68d7c4b"
        ],
        When: "2025-2-14"
      },
      {
        Name: "Jesús Mariano Sánchez Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVMmv70YTBvbsRssvh3IgIJcSOMGVQDFzF3_6mXlZRvic2S02zs=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato muy cordial y amable. La revisión ocular completa, explicando cada una de las pruebas. Amplio surtido de monturas. Y, creo que más importante aún, la calidad de los cristales. Óptica totalmente recomendable. En unas semanas vuelvo a por las gafas gafas de sol graduadas.",
        Images: null,
        When: ""
      },
      {
        Name: "Elena Bárcena Martín",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV6-NXYboHHzbozyq84T9S1NoqJEUhUsZQGz9GKviKTOVTWWK4=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me hice unas gafas allí. Cuando he tenido que ajustarlas o pedir alguna pieza de repuesto siempre me han atendido amablemente y rápido. Son muy profesionales",
        Images: null,
        When: ""
      },
      {
        Name: "Leticia Ternero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLoHF0KogoklJychE6R0Kz1UyZ02xz4S8fSAe_EGMI3KTagcg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente experiencia! Desde el momento qué llegué el personal fue muy amable y atento. Me ofrecieron una amplia variedad de lentes, adaptándose perfectamente a mis necesidades. La entrega de mis gafas fue muy rápida cosa que se agradece. Sin duda recomiendo esta óptica a quienes buscan productos de calidad y un buen servicio con el que sentirse como en casa.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Ripoll Ópticos",
    category: "Óptica",
    address: "Calle Ayala, 92, Carretera de Cádiz, 29002 Málaga",
    description: "Se destaca por su excelente atención y trato empático, dedicando tiempo a las necesidades individuales. Aunque la mayoría de las experiencias son positivas, algunos usuarios han reportado situaciones menos satisfactorias en cuanto a la profesionalidad.",
    serviceRatings: {
      atencionCliente: 4.5,
      profesionalidad: 4.5,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:45–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "9:45–14:00",
        "17:00–20:00"
      ],
      martes: [
        "9:45–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "9:45–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:45–14:00",
        "17:00–20:00"
      ]
    },
    website: "https://www.ripollopticos.com/",
    phone: "952 32 79 83",
    review_count: 193,
    review_rating: 5,
    latitude: 36.704857,
    longitude: -4.436882,
    user_reviews: [
      {
        Name: "Manuel Delgado",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLse8tQ01WMnkwmewg72oPl2ezNnPFqd3rQQ6ubdHrXu3fITw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Atención excelente. Empatia y trato acorde a tus particularidades. Te dedican tiempo y te escuchan. Recomendable 100%. Gracias a Patricia y A Jesús, cada uno con gran profesionalidad en su campo.",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Del Carmen",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIwqc2QQxCmXCb1ZDBa6_ZUA6BzISMFmW-IPLJY3GgzSRQxWg=s120-c-rp-mo-ba6-br100",
        Rating: 1,
        Description: "Me compré un par de gafas hace dos años y me atendieron muy bien. Hoy fuimos a que revisaran la vista a mi marido y así comprar unas gafas, estuvimos esperando un buen rato y cuando salió un óptico que no estaba haciendo nada en ese momento, no le miró la vista cuando se tiró un rato sin hacer nada. Mi marido lo único que le pidió era sólo comprobar si veía la última fila por una revisión médica que tenía aunque tuviera que volver otro día a hacerse la graduación correctamente. Simplemente era por mirar si le costaría ver la última línea. El óptico poco profesional, no iremos más por la mala profesionalidad, qué pocas ganas de trabajar y ganar dinero, no creo que sea el dueño porque no creo que se tarde tanto en graduar la vista, pues pasamos al rato por delante y se estaba tocando las narices, aún no estaba su cita. Será que no hay ópticas, y fuimos a otra donde nos atendieron sin tanta gilipollez y encargamos las gafas sin problema. Mal negocio hace esta óptica.",
        Images: null,
        When: ""
      },
      {
        Name: "Elena Rodríguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLqg-cy9mr_vfCtaoEfa5MFVoyQowtpu8MTOwbbpmTdh7DgEw=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Encantada con el servicio.He acudido a Ripoll Ópticos porque mi hijo de 9 años necesita llevar gafas y no puedo estar más contenta.Patricia nos ha atendido fenomenal, ha aclarado  todas nuestras dudas y le ha explicado todo a mi hijo para que éste se sintiera cómodo con las gafas .La montura muy bonita y el precio estupendo.GRACIAS!",
        Images: null,
        When: ""
      },
      {
        Name: "Loli Ordoñez Rincon",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLRZhCSN48ajr_y7E87iOcgWVJoO7f3TL7BWnPiOcddN56XKQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Ripoll Óptica es un lugar excepcional para cuidar de la salud visual. Desde el momento en que entras, te recibe un ambiente cálido y profesional. El personal es altamente capacitado y amable, dispuesto a resolver cualquier duda y ofrecerte asesoramiento personalizado sobre lentes y monturas.\nGracias Cristina!!",
        Images: null,
        When: ""
      },
      {
        Name: "Jorge Postigo Leiva",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIzwqZWFcIGzxUjgO5L-4kFBIb9yWHktFJVokxcS7T2IPdN=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me atendieron la mar de bien y súper rápido, me hicieron el diagnóstico de mi dioptría y me ayudaron a confeccionar mis gafas de vista. Sin duda una óptica para recomendar y tenerla como óptica de confianza, un placer ser cliente suyo.",
        Images: null,
        When: ""
      },
      {
        Name: "Chary Medina",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWoSFogvuhR8BWTFKo3O8Y6S6HKCA5pvXcNSSq7o1RIQKgdR7sp=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Atención muy buena! Llevo viniendo con ellos desde hace más de 10 años y encantada con el trato, los productos y revisiones. Tienen un concepto de cupones descuento sin límite de tiempo muy rentable para el cliente. Totañmente recomendable!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOLGIx4vUerxEDRKH35zmt5dxnynSG05bz5LjeD&fid=0x0:0xca64c4766a3dc723"
        ],
        When: "2021-7-15"
      },
      {
        Name: "Pedro Quesada ordoñez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUIqnzYAebRxMqK3wOLunfe_HS1fCqY6vnAGWlWQYzsdUeM4r0=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato exquisito, atención magnífica, asesoramiento impecable, así da gusto venir a un negocio donde lo primero es el cliente.",
        Images: null,
        When: ""
      },
      {
        Name: "Hermine Harutyunyan",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKxriwq7tqhOi3Ng_ABa3R4J0tlCeLdqSHeJvsX1ZAo-nx7uw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Primera vez que necesitaba gafas y me ha atendido Patricia. Me ha consejado y ha atendido muy bien.\nRepetiria sin duda. Salgo con mis gafas y muy contenta",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Avenida Málaga",
    category: "Óptica",
    address: "C. Frigiliana, 20, L 2, Carretera de Cádiz, 29004 Málaga",
    description: "Esta óptica es valorada por su amplia variedad de modelos de gafas, un ambiente tranquilo para la elección y un asesoramiento profesional. Los usuarios también destacan el trato amable y los precios competitivos.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "16:30–19:00"
      ],
      lunes: [
        "9:30–13:30",
        "16:30–19:00"
      ],
      martes: [
        "9:30–13:30",
        "16:30–19:00"
      ],
      miércoles: [
        "9:30–13:30",
        "16:30–19:00"
      ],
      sábado: [
        "10:00–14:00"
      ],
      viernes: [
        "9:30–13:30",
        "16:30–19:00"
      ]
    },
    website: "http://www.opticaavenidamalaga.com/",
    phone: "637 66 38 10",
    review_count: 40,
    review_rating: 5,
    latitude: 36.695464,
    longitude: -4.443719,
    user_reviews: [
      {
        Name: "Inma",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIbxUTi3m6y6ZK3sHNmqJQ-V82ni8MeTrLaoJs2rjHbwZMe9Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevamos unos años acudiendo a esta óptica. A mis hijos les encanta elegir gafas allí por la variedad de modelos, la calma y la tranquilidad que se respira a la hora de tomar una decisión acerca de cuál les sienta mejor, el asesoramiento profesional y el trato amable.\nYo di el paso a las progresivas hace un tiempo y la adaptación ocurrió sin problemas.\nEl precio, además, muy competitivo.\nEstamos toda la familia encantados con este lugar. Recomendable 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Luis Felipe Serrano",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIm3puAF7qPUMrFTTcKiLKSepUbP53UWjFCEvEMvd7ELe03bQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Óptica Avenida Málaga, situada al final de la calle Frigiliana, cerca de la playa, es un sitio totalmente recomendable. He acudido varias veces y siempre he recibido un servicio rápido, profesional y a buen precio. Mohidine, quien regenta la tienda, ofrece una atención cercana y experta, asesorando en gafas graduadas, de sol y lentes de contacto, que es otro de los productos que suelo buscar aquí.\n\nLa calidad de los productos es excelente y la relación calidad-precio es difícil de superar. Si necesitas una óptica de confianza en la zona del Paseo Marítimo Antonio Banderas, este es el lugar.",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Noelia Vargas",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU0l73Oa0Ga3sfOZ1v5XcMT1d5l-o4ud-frH-jvbkeI-pHK1wk=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Tuve una experiencia muy agradable, super eficiente y profesional y ágil.\nLa persona atendiendo además de muy educado, comprobó mi graduación. Me asesoro en los marcos, materiales y marcas. Y además fue super rápido el trámite, en 1 día ya tuve mis gafas nuevas, muy eficiente!\nMuchas gracias!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNEMU3JErk7sGFiIYS0YLtVXriCNI4l3DXhawY&fid=0x0:0xc830dde84bdd88e9"
        ],
        When: "2024-12-15"
      },
      {
        Name: "Patricia Romero “Hiibitchos”",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXZ9Q5pNr5OBrR-EX9eJcibybmzgrin79_C5fgc9GUuo1DLnbTgAQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me encantó, vine a comprar unas lentillas y el hombre que estaba en ese momento me asesoró a la perfección me enseñó cómo poner y quitarlas con la mejor técnica y me hizo sentir muy cómoda, volveré a comprar más lentillas solo a él 🙏",
        Images: null,
        When: ""
      },
      {
        Name: "Eulalia Banus Salarich",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIDN1hZ1Mpo5y3w0mCbS49jya38oEJ-BCJ1gtgTd4zC3-KFCg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy contenta con mi experiencia en esta Óptica..  compre unas gafas progresivas y estoy satisfecha con el resultado.. la amabilidad y el buen precio.. muy recomendable",
        Images: null,
        When: ""
      },
      {
        Name: "Paqui Santaella",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIxil6mjuzs3Ovy3Mway9hOlWESL7s_ehdYgMs5yQrEAlFKaA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es nuestra óptica de referencia,  amabilidad, profesionalidad y siempre un trato estupendo además de precios muy competitivos, no en vano lleva muchísimos años el barrio.",
        Images: null,
        When: ""
      },
      {
        Name: "Paco Pérez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocImHkj4uVBhSV1nntUlNylUrM9eaO8eyo-xVPA-MByNksZh5_s=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Recomiendo esta Óptica por lo bien que gradúan la vista, y por la calidad de los cristales y monturas. Relación calidad precio excelente. No encontrareis nada mejor.",
        Images: null,
        When: ""
      },
      {
        Name: "María Montenegro López",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJdUbNz26QjA_39N1dwBbWS-I3sMx73yqFV-EtU0GtVqbc4AQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Espectacular trato, gran variedad de gafas y excelente relación calidad precio, muy recomendable",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Multiópticas",
    category: "Óptica",
    address: "Av. de la Aurora, 25, C.C. Larios Centro, Distrito Centro, 29002 Málaga",
    description: "Esta óptica es muy recomendable por su excelente atención al cliente y la amabilidad de su personal. Los usuarios destacan la buena asesoría recibida y la amplia variedad de modelos disponibles.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "10:00–22:00"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://www.multiopticas.com/es/home/",
    phone: "952 91 80 77",
    review_count: 172,
    review_rating: 5,
    latitude: 36.715902,
    longitude: -4.432735,
    user_reviews: [
      {
        Name: "Ana",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUdoP7Od1kcc19-NvZ-umXHCoBMt4NQCiNg5hSqKeawzwfcn-PYFA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente óptica y atención al cliente con Antonio. Me asesoró muy bien y compré unas Ray-Ban espectaculares muy bien de precio.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPYp8ekfOXKwy_13PHhyy_PoA5T1Dw798kxyQjE&fid=0x0:0xafd82a1b03eb2bc9"
        ],
        When: "2025-2-19"
      },
      {
        Name: "Inma Mora",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLZFeQ0j5bm4Fj2YccA4reObGTHLstf-ApAPkjozQvkfJ0VVQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lugar súper recomendable y la trabajadora muy amable, me ayudó en todo el proceso de compra. Volveré de nuevo sin dudarlo.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipM64FW4rxA9UT_ollsR3aqK9tEE_oBfXKtQXhoa&fid=0x0:0xafd82a1b03eb2bc9"
        ],
        When: "2024-10-22"
      },
      {
        Name: "Marina Pérez Pacheco",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXLP8nAnEMBf5VYmjHNiYGDxGidQLcpwMNt70nTI0lOoc4fEftS=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me voy muy contenta con la atención que me ha dado Santi. Me ha ayudado mucho con mis gafas nuevas y me ha informado genial. Se nota que le gusta su trabajo. Me ha tratado con mucha profesionalidad y amabilidad. Super contenta me voy!! 😊",
        Images: null,
        When: ""
      },
      {
        Name: "Noelia Rodríguez Cifuentes",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLHnTAgiEt0OQGR8h8KwaXcDN_6Jq2eZyrxDtff5ayQfYp8hA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato excelente por parte de todas las trabajadoras. Me recomendaron y atendieron muy bien. He quedado muy contenta.",
        Images: null,
        When: ""
      },
      {
        Name: "Noe Astorga",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW1XMvNIq2objhg6BfECshfsMcnc8wwjtO2Z0x8oxVfjP49VArY=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Encantada, me han atendido super bien desde que vine a graduarme hasta que vine a recoger las gafas, muy atentos y agradables, super recomendado!",
        Images: null,
        When: ""
      },
      {
        Name: "Inma Anguita",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLhwgVLi3Ue_Y26PyuYFkqPQ4l2IF8ZRoE69ndKwL5f4ORo3A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buen trato.  Me han hecho sentir muy cómoda.  Me han ayudado en la elección de mis lentes. Un trato muy agradable y muy profesional. También han sido muy rápidos en el servicio",
        Images: null,
        When: ""
      },
      {
        Name: "Daniel Ramirez Samaniego",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVmc77ZIZFzP4cNPZKpa6JUFw5_a31mCT-JZGF4Q0ZbpNsIu148=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Atención recomendada 100%, prestan mucha atención en cada detalle, y te hacen sentir bastante cómodo. La tienda esta muy bien decorada, y tienen muchos modelos diferentes.\nLa atención por parte de todos los trabajadores es excelente.",
        Images: null,
        When: ""
      },
      {
        Name: "jose garcia martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVHeDYw93D-Sv8CWfNxtbgNMCBs6VZnomXHx9V9YaTQjc8jGh-u=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Muy bien atendidos por el personal que es muy profesional y agradable. Siempre aconsejando lo mejor. Sin duda lo recomiendo. Gracias.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "La Unión Ópticos",
    category: "Óptica",
    address: "C. la Unión, 57, Carretera de Cádiz, 29006 Málaga",
    description: "Esta óptica destaca por su excepcional atención al cliente y la profesionalidad de su equipo. Los usuarios mencionan la amabilidad y la paciencia del personal, así como la rapidez en la entrega de las gafas graduadas. Además, ofrece una buena relación calidad-precio y una amplia gama de opciones para diferentes presupuestos.",
    serviceRatings: {
      atencionCliente: 4.8,
      profesionalidad: 4.9,
      precio: 4.5,
      variedad: 4.6
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      martes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–14:00"
      ],
      viernes: [
        "9:30–14:00",
        "17:00–20:30"
      ]
    },
    website: "https://launionopticos.com/",
    phone: "951 47 37 53",
    review_count: 306,
    review_rating: 4.9,
    latitude: 36.710418,
    longitude: -4.440306,
    user_reviews: [
      {
        Name: "Daniella Mazzini",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUOyAXLcxPJBWVr_R7zFerDXSAlbwd2sjjQOata8NyT085E8hZONQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excepcionales. Este es mi segundo año comprando los ópticos aquí y la atención\u00a0 es genial. Los precios también bastante cercanos y tienen gamas para todos los bolsillos. Los horarios van como anillo al dedo, sobre todo para gente que trabaja pueden llegarse luego. Puedes hacer la evaluación allí mismo de tu graduación, fui la semana pasada a primera hora el miércoles y el jueves a la tarde ya me avisaron de que estaban listas mis dos gafas graduadas, no imaginé que resultará tan rápido todo. Recomiendo :)",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipP02k5a7tvxJX7_MhMbVr9_c5E1y0pJGNKmXJeq&fid=0x0:0x16ce0ad9992ca91c"
        ],
        When: "2025-1-20"
      },
      {
        Name: "NURIA VANESSA VELLON SUAREZ",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVyGxGdRl2OLflqX2aytOVrOcNWZ_tsYin0mPBmrR7k8bww_hGR3Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo mucho tiempo siendo cliente de La Union Opticos y siempre me han ofrecido calidad precio. Destacar el profesional servicio al cliente de sus empleados cada vez que he visitado la optica. Muy buena conexion para poder visitar con el metro de Málaga. Muchisimas gracias por las gafas bonitas que compré en una oferta 2x1hace tan solo un mes... 🥰👌",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOZ238xsRKExO1cZDoNillVfwQ-Ytl81fcJnVyz&fid=0x0:0x16ce0ad9992ca91c"
        ],
        When: "2025-3-13"
      },
      {
        Name: "xiao zhang",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX3br-R2qGpx0vbayV0X4PJfD3WmReLxRSEgYd4dmJ2e-5KPZSr=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Ya he comprado cuatro pares de gafas en esta tienda. Siempre tienen mucha profesionalidad y un servicio muy amable. Creo que también compraré mi próximo par aquí.❤️👍",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOMf7KMW0Vim0d_mG160fpBLGBrNAlQMhVibH1-&fid=0x0:0x16ce0ad9992ca91c"
        ],
        When: "2025-2-7"
      },
      {
        Name: "Yeyo Mesa",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIa4rHuqRn5rsM78tutyNSJ6qgzmAAwKnHLBGm5zd47OWJ14A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "En todo momento estuve muy bien atendido.\nTanto a la recepción como a la hora de la graduación de la vista. Y de la elección de las monturas. Con mucha variedad y adaptada para todos los bolsillos. Y como regalo te dan un bono de 10€ para tu próxima montura o regalar a un familiar o amigo. Son muy profesionales y atentos.",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Belen",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWCdaZ-FlWnKoVR2mc28HY6RjK-NEwX2X1ZklhFa5r1xNIdyyg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Atención estupenda ,super amables ,el médico que vio a mí niña genial ! Lo super recomiendo ! No es mi primera vez con ellos ,mi mamá ya fue años antes y sin duda volveré a repetir y ha recomendar.",
        Images: null,
        When: ""
      },
      {
        Name: "Cristina Aguilera Martín",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUijY8HG4WFVL2TOepXFhaRZqnNFWPu_MmOLR6Ncb9uXGtpcdY=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es la tercera gafa de vista que compro con vosotros y entre el trato que me dais, la calidad de las gafas y lo rápidos que sois, tengo claro que os seguiré eligiendo, ya recomendé a una amiga más y ya tiene sus dos gafas listas !! Estoy muy contenta de tener 3 modelos de gafas que literalmente me encantan, calidad/precio increíble!!",
        Images: null,
        When: ""
      },
      {
        Name: "Mailyn Moreira",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU0RRtRfkdiJNJH8GmQkAfEGBVcoXP1LLPCERE51VSCirxiJAgY=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lo primero a destacar es la atención, muy amables y sobre todo pendientes de la persona , han tenido paciencia en cada duda que he tenido y me lo han explicado muy bien !\nYo no tengo mucha graduación y mis gafas estuvieron listas al día siguiente .\nUnas gafas buenas y muy bonitas por un precio asequible.\nMuy contenta con el trato y con mis gafitas .\nMuchas gracias a los profesionales y su paciencia :)",
        Images: null,
        When: ""
      },
      {
        Name: "Ana",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI9xCGnkoe17wHloqFWmStCKbLrBSjzC8mpPtRyX_2SL6Pm5w=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Excelente atención y variedad de monturas y lentes. Tanto en la graduación de la vista como al elegir monturas han sido profesionales y atentos. Además no he tenido ningún problema de adaptación a las nuevas gafas. Repetiré sin duda.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Nueva óptica Málaga",
    category: "Óptica",
    address: "C. Brahms, 4, Carretera de Cádiz, 29004 Málaga",
    description: "Se puede decir que esta óptica ofrece una buena relación entre calidad y precio. Los usuarios resaltan la atención recibida y la disponibilidad de una amplia selección de modelos de gafas para diferentes gustos y edades.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 3.5,
      precio: 4.5,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      martes: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "9:30–14:00"
      ],
      viernes: [
        "9:30–13:30",
        "17:00–20:30"
      ]
    },
    website: "",
    phone: "951 68 20 15",
    review_count: 1,
    review_rating: 5,
    latitude: 36.694522,
    longitude: -4.451257,
    user_reviews: [
      {
        Name: "Raquel Martín",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIGp4_27Iv_HNwWQ2L2dGcoy83ythkHp6YgLoDkBZyuVrfn5g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Calidad, precio inmejorable, y atención súper buena. La recomiendo, tienen muchos modelos de gafas a elegir de hombre mujer y niños/as.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "MIÓPTICO ALAMEDA",
    category: "Óptica",
    address: "CARREFOUR ALAMEDA, PROLONGACION ALAMEDA, S/N, 29007 Málaga",
    description: "En general, los comentarios sobre esta óptica son positivos, destacando la profesionalidad y la amabilidad del personal. Un usuario menciona una experiencia excelente con una atención personalizada y precios accesibles. Sin embargo, también hay una reseña negativa sobre la durabilidad de las gafas y la respuesta a una queja anterior.",
    serviceRatings: {
      atencionCliente: 4.0,
      profesionalidad: 4.5,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "",
    phone: "952 35 58 11",
    review_count: 302,
    review_rating: 4.7,
    latitude: 36.715343,
    longitude: -4.456067,
    user_reviews: [
      {
        Name: "Estrella Key",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUHDOhb6pvp2M_u6iqUZsFmwNV9b9nhpmSAQttgYfGxb88ycSQ=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Añado información porque me acaban de contestar a otra reseña que dejé (Etoile Filo) quitándole importancia a mi comentario y dando a entender que miento.\n\nClaro que no hay datos de mi compra, lo que tengo aquí es un nick, no mi nombre real. Sé perfectamente dónde compré mis primeras gafas, y tengo aún más claro a dónde no regresaré. Adjunto también fotos para que se vea cómo están mis segundas gafas. Recuerdo que me cambiaron la primera montura porque le estaba pasando esto. Vamos, que no me han solucionado nada. Me he dejado una pasta por unas gafas que no duran ni un año bien.\n\nDejo clara también la marca, para que luego no me digan que me he equivocado de tienda o algo.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO23Q8IKNdEsF0xkc1YHt-bw7QZOV7kzE7zpqQ&fid=0x0:0xdf237550851ef752"
        ],
        When: "2024-8-31"
      },
      {
        Name: "Alba",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVKVVh76qTvO69Kf6DX4CUiuGhcYKtKvXIsJLHSJ7ZTYuTpmsMh0g=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "¡Una experiencia excelente! Fui en horario de mediodía/tarde y el chico que me atendió fue muy amable. Me ofreció una atención personalizada, resolviendo todas mis dudas con paciencia y dedicación. Se tomó todo el tiempo necesario para ayudarme, y gracias a eso, me llevé dos gafas con las que quedé muy satisfecha. Sin duda, lo recomiendo.",
        Images: null,
        When: ""
      },
      {
        Name: "antonia maria ruiz aranda",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLKig2XvN8Zuy7D4Pl8zRr5mYAPhPpadCSaJbgE2MSbBhdSHg=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Trato excelente. Grandísimos profesionales, lo recomiendo !!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMW_E3GIFMrjWOQsCE5jmDWQpS3tkL-UOzRf-df&fid=0x0:0xdf237550851ef752"
        ],
        When: "2024-12-13"
      },
      {
        Name: "Sergio Olmo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUZwmjLvwZ9yRMNee6JB7ygbJwcnaHaLf4odbDDXuL9ZgRFPgpr=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Muy profesionales, siempre les he confiado la revisión de mi vista y siempre muy contentos y tube un problema con la rotura de unas gafas y me lo solucionaron bastante rápido a pesar de que me dijeron que podía tardar unas 3 semanas, las dejé un viernes por la tarde y el martes ya me llamaron que estaban las gafas arregladas, muy contento con el servicio que prestan",
        Images: null,
        When: ""
      },
      {
        Name: "Jazmin",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLvzUK8H6Pewb_cmYXAwZzmXF3wdqNYz1joPOqXvQvrIV4SDYI=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor atención, dedicación y excelencia por parte del chico vendedor. Mediciones exactas y te dedica el tiempo que haga falta, garantía y seguridad para tus ojos. Precios muy accesibles. Muchas gracias!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Manuel Lara Fuentes",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWI4wfLbh8VfpMUr9Etc4mI2fxa3nQHFPxWw4TJcnXFaS78TH1S=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me hice con un 2x 1 en gafas . Una de ellas de marca y otra de ella de su marca.\nLas dos son progresivas, así que el precio y el modelo tanto de las Rayban son geniales .\nEl trato y todo fue muy , muy correcto y muy profesional.\nDicho esto, no tengo que añadir más a mi reseña. Buena óptica y por su puesto el precio.",
        Images: null,
        When: ""
      },
      {
        Name: "Jesús Morales Enriquez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLz62uFvpZiHZlEvNYUUBTZ5dupHWgM2SJhU6Z1sae3CdRA_w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Tienen unos profesionales magníficos, por descuido se nos pasó la fecha para pedir las lentillas y mientras llega el pedido nos han suministrado las lentillas \"gratis\" además de un buen precio, y también hemos comprado gafas anteriormente y todas de excelente calidad, el personal de diez, amables, empaticos y cuidadosos.",
        Images: null,
        When: ""
      },
      {
        Name: "thierry fustin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWR-KTNOXll_pUKjbE2TagAr1TXmVAxccKnbnc0YpX-GLLo73SGtQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Soy cliente de hace años y acabo de renovar mis gafas. Súper bien como siempre... profesionalidad, amabilidad y simpatía.\u00a0 Noelia y Marina son unos encantos.\nVolveré.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNX9RLnntWdugN6j-zgYYfeg3h2CD4loBzEqqHz&fid=0x0:0xdf237550851ef752"
        ],
        When: "2024-4-11"
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Abati",
    category: "Óptica",
    address: "Pl. Pintor Sandro Botticelli, 5, 29010 Málaga",
    description: "Esta óptica es valorada positivamente por su trato agradable y profesional. Los usuarios destacan la atención recibida, especialmente por parte de Esperanza, quien ofrece buenos consejos y recomendaciones. Además, se percibe una sinceridad en las opiniones, lo que genera confianza.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
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
        "10:15–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:00"
      ]
    },
    website: "http://www.optica-abati.es/",
    phone: "952 06 89 00",
    review_count: 23,
    review_rating: 5,
    latitude: 36.720214,
    longitude: -4.460508,
    user_reviews: [
      {
        Name: "Abel Romero",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW7HzpVTRDcTBZGo-cnxgA8kfCXK9F5HJI5Xds77KFn1W0T6R0=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención y el trato espectacular. Estaba buscando unas gafas progresivas y atendí todos los consejos de Esperanza. Quedé muy satisfecho con sus recomendaciones. 100% recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "juan manuel benitez toret",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI92d51-jKkKvx6u_p4wU5nXMjU7ezR9yudL1wktx6H5-piqA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Un negocio local de los que hay que apoyar...\nLa mujer que me atendió super apañada y muy bien de precio.\nTotalmente recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "MaCarmen Morales Gutiérrez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLpibmH_KFJ4wf_UBW3P65hdEM0c-PzkQGZ9cHuyNp5X9O4FQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es muy agradable el trato y los consejos. Me encanta ir a esta óptica. Es muy sincera en sus opiniones, no es vender por vender , ¿me entendéis, no?",
        Images: null,
        When: ""
      },
      {
        Name: "Xisca Rullan",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLiUJ54Iyqgeq-yyVJQItSG-4-_eAmr2ZJN7rixyEUUatNK9XRH=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Gracias Esperanza por tu profesionalidad y trato recibido.Encantada con mis nuevas gafas graduadas",
        Images: null,
        When: ""
      },
      {
        Name: "Aroa Ve",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLti6gcyg2mdZcGYLamjuxCPSC9JI86WdoknPL1Y1chosYcRg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Atención y rapidez inmejorable, sin duda, mi óptica de confianza. Muy recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Antonio Rodriguez Porras",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLLRO9HWSZMUUBfpc_2D-y0UPob041TEPVPqmAd2vt9S6Pqna5q=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Un trato agradable y profesional era la primera vez q iba y muy atenta Esperanza muy cercana, muchas gracias",
        Images: null,
        When: ""
      },
      {
        Name: "D. 87",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVNlg_oSpzBwgo9nCGXayNCqJEJwTNK56JU9pH7ixHlBcjuU_yvtQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Profesionales de 10, explican y resuelven a la perfección las dudas, la atención es excepcional. Sin duda la mejor óptica de todo Málaga.",
        Images: null,
        When: ""
      },
      {
        Name: "JA Béjar",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVqf0vmMkQsdg1s3eKDSAH9BS_U37H0xF8W-EVZLqdNX0cm9NKc=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Te atienden muy profesional y amablemente.\nDe ninguna manera tienes la sensación de afán de facturar sino que te ofrecen lo justo y necesario.\nRecomendable sin reservas.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Huelin",
    category: "Óptica",
    address: "Calle Goya, 2, local 5, Carretera de Cádiz, 29002 Málaga",
    description: "Esta óptica se caracteriza por brindar un trato excelente y muy amable, donde el personal se muestra servicial y explica detalladamente las opciones disponibles. Los usuarios también destacan la rapidez en la entrega de las gafas.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "14:00–21:00"
      ],
      lunes: [
        "9:30–13:30",
        "14:00–21:00"
      ],
      martes: [
        "9:30–13:30",
        "14:00–21:00"
      ],
      miércoles: [
        "9:30–13:30",
        "14:00–21:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "14:00–21:00"
      ]
    },
    website: "",
    phone: "952 35 79 27",
    review_count: 56,
    review_rating: 4.8,
    latitude: 36.70532,
    longitude: -4.436814,
    user_reviews: [
      {
        Name: "ML G",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXpdwh1ltuCaHqCP8GNcnamdSYYRncIKwqG0QEOa_1xSEcs2TFykw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Me pasé para ver cómo sería una revisión para la vista de cerca y me la hicieron sin coste. Me atendieron muy bien y de forma cercana. A comunicación miramos varias gafas y se encargaron unas gafas MANGO muy chulas que son las que tengo.",
        Images: null,
        When: ""
      },
      {
        Name: "Marina Castaño",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJjg4iYYxrjK2IJdLKlG_V6i2_-Tq1huVPIXevFBl4avJuvNQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "El trato es de 10, desde el primer momento fueron muy simpáticos y amables, me iban explicando todo lo que yo necesitaba y aconsejándome. Destacar también lo rápido que llegaron mis gafas nuevas. Encantada con la óptica!",
        Images: null,
        When: ""
      },
      {
        Name: "Belen Millan pajuelo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ5b1AShnq2M4_2UASeP5cULCXO9wdSiIf8nAvJ4KpRGphtkQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hace 5 años que compro mis gafas y lentillas, estoy encantada tanto con el servicio y la atención de los chicos como del producto. Sin duda lo recomiendo100%. Siempre os resuelven las dudas y están atentos en todo.",
        Images: null,
        When: ""
      },
      {
        Name: "protor",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLPY-6FBXbU2Eor7RQKjFSARxbJGgKUH-maLmUE3baYSm3S-Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Fuimos mi mujer y yo a comprar unas gafas y desde el primer momento nos atendieron muy bien. Para nosotros unos grandes profesionales y gracias a eso, ha pasado a ser nuestra óptica de confianza. Muchas gracias por vuestra atención.",
        Images: null,
        When: ""
      },
      {
        Name: "Angela G Soto",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKGAAt8jg_iJTZa9uHwi9Y-fVLN9wOxMD3Hw_RtiqHuoSpF3cg=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Me encantaron, fueron súper amable y simpáticos, tuve una urgencia con mis gafas que perdí en el mar y en 1 día y medio pude tenerlas de nuevo. Lo recomiendo totalmente",
        Images: null,
        When: ""
      },
      {
        Name: "Deborat Pagano",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX2IFuzpyIVwQgcU6pRfQs5hjBt63UFzF9HIqISp4EhfZsasYI1JQ=s120-c-rp-mo-br100",
        Rating: 4,
        Description: "La experiencia ha sido muy buena la atención ha sido excelente los chicos son muy profesionales simpáticos te hacen sentir muy cómoda te explican todo muy bien y mis gafas las tuve a los 3 días por el momento estoy muy contenta y conforme recomiendo opticalia de huelin",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Solis Fernandez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK2T28L94_dfH-0wR_LTg_rJuz2qGkF_8BM8VQE_IHPr4eXig=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Maravillosa, como siempre! Me gusta como me tratan y eso es fundamental, son muy profesionales y siempre te buscan la mejor opción. No dejen de ir.  ☺️",
        Images: null,
        When: ""
      },
      {
        Name: "Javii r",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIfObQhaf83HXfBgIYOQ571_OUL63X47A91Jzg0omhKjtwl8g=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Óptica con gran variedad de gafas y precios asequibles a pesar de ser monturas de marca. Gran variedad de tipos de cristales. La dependienta muy amable y simpática.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "MIOPTICO LOS PATIOS",
    category: "Óptica",
    address: "C. Montejaque, 241, Carretera de Cádiz, 29004 Málaga",
    description: "Los usuarios valoran el trato muy bueno y las recomendaciones acertadas que reciben en esta óptica, quedando satisfechos con la calidad y el precio de sus compras. El personal es percibido como profesional y amable, ofreciendo un buen servicio post-venta.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://www.mi-optico.com/#/home",
    phone: "952 23 42 65",
    review_count: 91,
    review_rating: 4.6,
    latitude: 36.686876,
    longitude: -4.459118,
    user_reviews: [
      {
        Name: "Mar Ramirez Lopez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLg5n_of2mxaWkJhHItatKyafO6icSxobfryJw2F-UlmykB0g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buen trato por parte de los trabajadores. Me recomendaron genial y quedé satisfecha con mi compra. Calidad/precio bien. Muy recomendable!!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Victoria E. Ordóñez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocImcOu6RJzjW-dzIemIlU7Kmxnw9MeMYMJaJM4OE5zcm4-p5Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Grandes profesionales, te hacen sentir cómoda, sin prisas y excelente servicio post-venta y garantía. Repetiremos seguro¡!¡! Muchas gracias 👏",
        Images: null,
        When: ""
      },
      {
        Name: "William Cabrera",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU4mbyOx_JCAV9zpt8u79y2-tPu3YLaTRdNQKYKTIexJxxt6Y_i=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Estoy encantada con el servicio de esta óptica,  fui el viernes y obviamente las gafas estaban para el lunes y más que uno de los cristales tenía que ser especial, pues me llamaron el sábado por la mañana que ya estaban listos, increíble la rapidez y muy agradecida por el trato recibido,  así da gusto ir a un negocio, calidad, buen precio, mejor servicio e inmejorable trato, recomiendo al 100% esta óptica.",
        Images: null,
        When: ""
      },
      {
        Name: "jose antonio fernandez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUACBDXp1wh7VImvl7oQRz9Ock7GoMpUQMWDNoUVmqTxPKvU-jSUg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Es la segunda vez que vengo todo simpatía y amabilidad y p muy profesional de parte de Miguel, te asesora muy bien de las monturas que te biene bien\nMuy recomendable",
        Images: null,
        When: ""
      },
      {
        Name: "Sergio Arjona Berlanga",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKQino1vhpBvPvBdMgCHgmpyRygAPIfnqwREsF_zOQSLJDTfQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "El pasado Miércoles 11 pasamos por la puerta y vimos la oferta que tenían del 3x1, Miguel el chico que nos atendió nos dijo que podían ser de diferente graduación y que entraban en la oferta todas de la marca ONE por el precio que él nos indicó.\n\nMiguel fue muy atento y agradable, acompañándonos durante todo el proceso, luego nos graduó la vista y finalmente nos decidimos por la gafas.\n\nPara el domingo ya estaban así que fue todo súper rápido.\n\nEl único inconveniente que pudimos ver en la tienda fue el frío que hacía, pobrecita las personas que trabajan allí, nos comentó que estaba rota la calefacción, así que esperemos que la arreglen pronto o por lo menos pongan un par de estufas.",
        Images: null,
        When: ""
      },
      {
        Name: "maria del mar delgado",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJuwpbery3n35YfBuyR0wX0LxZ4kXsjkiMckBpI7_Gwnfsqdg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Miguel ha sido muy amable,buena explicación y un chaval muy paciente,(por nuestras preguntas), Gracias Miguel!!",
        Images: null,
        When: ""
      },
      {
        Name: "Adrián García",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJfbBRRcSrKrfBJFzo8ZzSKBphHlINUBcyG0e1bYDlIbh46QQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Servicio excelente se me partió una de mis lentillas y me dieron gratis de 1 mes.\nRecomendado el personal y servicio de 10. Muchas gracias",
        Images: null,
        When: ""
      },
      {
        Name: "Tony Martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKLqymQyRJTiB-H1vfl_gmcEif__-_1DKoMC936u_BWbcvFFg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un trato profesional y muy amable de parte de Miguel y todo el equipo",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMHZe-olCEI_r11ebyzMGFo31QcnaTgLPcdxdpP&fid=0x0:0x83ca56a3181fb06b"
        ],
        When: "2025-3-14"
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Galiana",
    category: "Óptica",
    address: "C. Prta del Mar, 6, Distrito Centro, 29005 Málaga",
    description: "Se distingue por ofrecer un trato excepcional y honesto, donde incluso realizan revisiones gratuitas y buscan soluciones como reparar gafas antiguas. Los usuarios resaltan la amabilidad y profesionalidad del personal, así como una buena relación calidad-precio.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      martes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–14:00"
      ],
      viernes: [
        "9:30–14:00",
        "17:00–20:30"
      ]
    },
    website: "https://www.opticagaliana.com/",
    phone: "952 21 61 05",
    review_count: 46,
    review_rating: 4.9,
    latitude: 36.718798,
    longitude: -4.423071,
    user_reviews: [
      {
        Name: "Dawid Mateusz Samburski",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU5M75ecXJV8LQtwCZf2YpeIDTex55mxP2IAmx4bv-tBYMHy90=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Probablemente la mejor optica en la que he estado, un trato jamas antes recibido, fui ha hacerme una revision la cual fue gratuita y el dueño, comentaba que no era necesario cambiar las lentes y que me guardara el dinero. Finalmente acabe cambiando las ya que tenian bastante uso y desgaste, me regalo un estuche incluso. Muy contento con este establecimiento, lo recomendare a familia y amigos.",
        Images: null,
        When: ""
      },
      {
        Name: "Maribel García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWhDzIJuaydpOmCnfL8SFS2u8Gc1pExiNZ9UQKLF6hVfwBRqzY=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Fui con la intención de comprar unas gafas nuevas y me ofrecieron arreglar las antiguas cuando en otras ópticas ni me han ofrecido esa posibilidad.  Muy agradecida por ell trato recibido y sobretodo con la honestidad de su gerente. Profesionalidad al 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen Bejarano",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLhpEi4dAg7nBwacsOAkHLBAD3ojlcOW_AKHhm-3fkBIWV7mw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La chica llamada inma, es súper especial. Muy buen trato, muy amable, súper profesional. La chica es encantadora. También digo los dueños son muy amables también y Dan todos lo que trabajan ahí lo mejor de ellos.",
        Images: null,
        When: ""
      },
      {
        Name: "Almudena",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJIxJsBsLgnJRjrMMH0_9aPeb30QPa2qVvanHE1Spr9pRh2dg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buen personal por arte de la óptica campanillas de Eloy, lola y ramón, un grupo estupendo buentrato y buen asesoramiento sales de alli super contenta con la compra no cambiéis chic@s",
        Images: null,
        When: ""
      },
      {
        Name: "Lourdes López Maldonado",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLIwTsgP3fDMNeJBdTlXO_0J97kbTn_VPvBhVU5oXPjHhx-Lw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Tenía que poner una reseña porque son unos excelentes profesionales con un trato familiar que aprecias desde el principio. Me hice unas gafas hace tiempo y hoy he llamado para solicitar la factura y no han podido ser más amables. Tan amables que da hasta cosa. La atención personalizada es algo que se agradece en estos tiempos. Muchas gracias. Pronto volveré para hacerme otras.",
        Images: null,
        When: ""
      },
      {
        Name: "Abraham Florido",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWeKmbDeofWEVo9zMpiu8ZmetL6w2dM2sQk9HlOQp148KHyyQW5cw=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Pongo la reseña porque se lo merecen y a veces no valoramos la excelencia. Trato siempre amable, cercano y un stock de productos muy grande a pesar del tamaño de la tienda. Aquí encontré la mejor calidad precio desde gafas hasta lentillas, buenos precios sin tener que ofertar promociones absurdas o engañosas como en otros establecimientos. Siempre acudo aquí sin dudas.",
        Images: null,
        When: ""
      },
      {
        Name: "GREGORIO BUENO",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIO3A9081yHsk0KHC6Jfl96naK0Fs91K8d9dagnCIAJHgnAPg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He acudido a comprar unas gafas nuevas, y se han ofrecido a reparar las antiguas, que han quedado perfectas. Sin duda un sitio recomendable, tanto por su profesionalidad como el trato amable y cercano.",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Manuel Bermudo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKiQ0X908jVgd85DC6seuvmN0WV-114KdabwgmT3FQr74yn9w=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Buenas tardes, acabo de estrenar, mi montura de gafas,y mis lentes progresivas, y quiero decir ,que he sido muy bien asesorado, he encontrado la montura que buscaba ,y la calidad de las lentes inmejorables, me han dado hasta la tarjeta de autenticidad , se nota el tiempo, que llevan en puerta del Mar, buena atención ,y buen asesoramiento , lo recomiendo por calidad y buen trato. Precios asequibles. Óptica malagueña de toda la vida.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Opticalia Beethoven",
    category: "Óptica",
    address: "C. Beethoven, 4, Carretera de Cádiz, 29004 Málaga",
    description: "Esta óptica es reconocida por la profesionalidad y la amabilidad de su personal, especialmente Laura y Nuria, quienes reciben menciones por su excelente atención y asesoramiento. Los usuarios también destacan la disponibilidad de tecnología avanzada para la revisión de la vista y una buena relación calidad-precio. Aunque un comentario menciona un problema con la durabilidad de las gafas, la mayoría de las opiniones son positivas.",
    serviceRatings: {
      atencionCliente: 4.8,
      profesionalidad: 4.9,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:45",
        "17:00–20:30"
      ]
    },
    website: "https://www.opticalia.com/es/tiendas/optica-malaga-beethoven-4-opticalia-beethoven",
    phone: "952 24 62 58",
    review_count: 146,
    review_rating: 4.7,
    latitude: 36.694793,
    longitude: -4.450738,
    user_reviews: [
      {
        Name: "Pablo Moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUGFtpF6hk-7pcdJ_2ngFnqlAQfG4f6pPQoNjoT1p18xzE1ygFT=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Laura, espectacular! 👌\nFui a graduarme y comprar mis primeras gafas. Laura me asesoró, me graduó y me explicó exactamente cómo funciona todo.\nMe atendió de manera muy profesional y atenta.\nSi duda lo recomiendo.\nMuchas gracias Laura!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPJ6-n4N-vthHqJW7tAjuws92xlEgm_hVDgVGpD&fid=0x0:0x3617917c030c0fa2"
        ],
        When: "2025-2-1"
      },
      {
        Name: "Jenifer Jimenez Santisteban",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIvSLWBHaFaUs35-xI8E-BVbTboFnoKv2hCR9zoQ5pBfMAt=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Compre unas gafas graduadas a mi hija de 14 años al mes de tenerlas se le partio la patilla, fuimos a la optica ya que estaban en \"garantia\".\nLa muchacha nos dice que va a tardar 10 dias en arreglarla y que una vez que se rompe la primera vez va a romperse mas continuo...\nQue clase de gafas son esas que en un mes ya estan rotas?\nPues yo conteste que mi hija no podia estar sin sus gafas para ver tv o estudiar... y cual es la solucion que me dan? Que compre otras y claro casualidad que las unicas montaras que se le parecian a las que ya habia comprado valian mas caras y tuve que pagar 34 euros mas\nDe verguenza\u00a0 no vuelvo a ir",
        Images: null,
        When: ""
      },
      {
        Name: "Aurora Molina Roman",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW7pcOMZQRnh7aw_ZFA_spcHko8u_30XVX1V9nVbPnDiy3o_mc-=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buenos días! Llevo 30 años graduandome la vista aquí.\nEste año gracias a todos los trabajadores, pero sobre todo a Nuria , al hacerme un fondo de ojo me han detectado una presión intracraneal, y de verdad qu3 es gracias a ellos porque yo no quería hacerme el fondo de ojo.\nTienen\u00a0 un trato excelente con el público,os lo recomiendo\u00a0 ellos están especializados en fondo de ojo.\nLa recomiendo cien por cien",
        Images: null,
        When: ""
      },
      {
        Name: "José María Mora",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWqu2Dh3Bne63ViKkoR6dWa2tw0928_ccM0rE5kCBRU0acqKJES=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Mi sincero agradecimiento a Nuria y a la Oftalmóloga Dra. Garrido.\nMe realizaron el Estudio Optométrico y Cribado de Retina.\nY gracias al Informe, y siguiendo su recomendación, acudí a urgencias y trataron de inmediato el problema ocular.\nPor ello, por la amabilidad y excelencia profesional de todos/as las personas que componen Opticalia Beethoven,\nLes reitero mi agradecimiento.\nJosé María Mora.",
        Images: null,
        When: ""
      },
      {
        Name: "Francisco Martin Diaz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVLR65fGgTsBnZyIpcoWzna0mqJmkAVwxIZrCi0hN_jmwJD2B4=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente atención. Nuria, profesional del sector, me hizo todas las pruebas pertinentes para realizar el diagnóstico ocular. Me lo explicó todo bastante bien y a la vez genera buena confianza. Sin duda, si necesito volver a una óptica, no dudaré en acudir a ella. Muchas gracias.",
        Images: null,
        When: ""
      },
      {
        Name: "Miguel Angel Medel Jerez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWqfNX2Oq1h1G3SqY_gfT20BsFmlC0qsT7dOBI7_SnsX8LchPKggw=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Grandes profesionales.\n¡Qué mejor decir de ellos!\nGran equipo, además de profesional, humano y amigo.\nSaben recomendar y aconsejar sobre el producto que se adapta a nuestras necesidades, acertando a la primera.\n\nY, si además, te dan un detallito, como es una botellita de AVOE Oro líquido, pues nos dan unos cuantos desayunos de placer",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipP-yTYHEXYItdyhL2WnebevAWpsXEW_97EaKBj-&fid=0x0:0x3617917c030c0fa2"
        ],
        When: "2021-5-16"
      },
      {
        Name: "A EG",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV5UfZrCuFTSgXkXb1NcAJyo0KQvEbWYqKYR5bWwh0OARKAm00g=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Magníficos profesionales con última tecnología para medir tu visión. Precios similares al resto del mercado, pues nadie da duros a pesetas, pero la atención\u00a0 profesional, especialmente de Laura quién me atendió hizo que me decidiera por esta óptica.\nSimpatía y profesionalidad, buena atención e información.\nAunque tenía mi óptica, por circunstancias pase alli una revisión rutinaria y gracias a su atención, me he cambiado con ellos por su trato y calidad profesional.\nAparcamiento difícil pero con metro en las inmediaciones.",
        Images: null,
        When: ""
      },
      {
        Name: "NURIA S.",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIh_8v3FDSRbyBi7p1TMSCKWmRsDlczoaWy18nwEZ01yQ2Q90Y=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Grandes profesionales, he comprado ya 2 veces y repetiré segurísimo. La atención es maravillosa, gran variedad, precio muy razonable y acorde a la calidad. Desde ahora mi óptica de confianza y la que recomendaré a todo el mundo. Gracias!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Evisión Los Tilos",
    category: "Óptica",
    address: "P.º de los Tilos, 29, Cruz de Humilladero, 29006 Málaga",
    description: "Se percibe una excelente atención al cliente en esta óptica, con un personal amable y un servicio de calidad. Los usuarios están satisfechos con la rapidez en la entrega de las gafas y consideran que los precios son económicos y accesibles. También se destaca la buena calidad y la variedad de modelos disponibles.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 4.8,
      precio: 4.7,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "10:30–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:30"
      ]
    },
    website: "http://www.opticasevision.com/",
    phone: "952 35 10 06",
    review_count: 28,
    review_rating: 4.8,
    latitude: 36.713392,
    longitude: -4.434966,
    user_reviews: [
      {
        Name: "Débora G F",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVM1YJav8huTtYhe5N9nWBk4cmOuJQIKWEBwrAQ7M-0rEQolT5M3A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente atención al cliente, muy amables y con un servicio de calidad. Tuve una gran experiencia al comprar unas gafas graduadas, que además llegaron muy rápido. Los precios son económicos y accesibles, lo que me dejó muy satisfecha. Definitivamente volveré a contar con ellos en el futuro.",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Infantes",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLk92xrQKw_aVkqoklhiCg6nVXZmaZpSdM4CPyAEzx1dmo8LA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena antencion en esta optica. Estoy muy contenta con mi gafas nuevas. Gracias!",
        Images: null,
        When: ""
      },
      {
        Name: "Eva García Sánchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIUXGTp8x1ItoC3Z7kcipM8A7spjBS9RYFJpToPNwbgRHNbRA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "muy buena atención y relación calidad precio.",
        Images: null,
        When: ""
      },
      {
        Name: "Iván Moreno Infante",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUhs7UEVIbAUyGm7qRetAnLTOJGcsV8Dk36vZJkblsjrizDPdLRlw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Buenos precios y trato de las personas que te atienden",
        Images: null,
        When: ""
      },
      {
        Name: "Bárbara",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWV9BLWrQgrbSxBhGqcKn3WvHcGXhLpm_PjutCyeTwf2yEXaE0=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buena calidad y variedad de modelos.\u00a0 Personal muy profesional y resolutivo. Encantada con el trato y amabilidad recibidos. Recomendable 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "CÔDÏGO BÏNARÏO (Curro Molina)",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVcNic1d5TQVLsvpCKGEOcRLQw54I46U9JZjQL-UPt3gYCy4Xt3=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena atención y amabilidad!¡! Y gran variedad para elegir,\u00a0 de buena calidad y al mejor precio!¡! Y si tienes algún problema por ejemplo que se te afloje unos cristales con el tiempo, vas y sin problema y con la misma amabilidad que cuando las compraste y gratis!¡! Así que estupendo!¡!",
        Images: null,
        When: ""
      },
      {
        Name: "Lidia Ruiz Garrido",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXqi5mBcUfmB3mgbYZlAVoGTVm_ArkTouv11dGMVfrhe3Tf8EH6Vg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "La confianza de saber que estás en las manos de excelentes profesionales. En mi caso, ya somos tres generaciones. Excelente trato profesional y personal. Asesoramiento. Una amplia gama y con las mejores firmas",
        Images: null,
        When: ""
      },
      {
        Name: "Otoño el asmar (Puli)",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUgvFoXnmQ5I-d9dR02I5M1i46tJyovh51N5GlyNXnHD7q_5oLkbw=s120-c-rp-mo-ba6-br100",
        Rating: 5,
        Description: "Magnífico centro óptico. Quién duda de su profesionalidad es que no debe haber tratado con Carlos, David, Miguel Angel o Miriam, personas que son algunas de las que atienden a la clientela en este lugar, con largo historial profesional y magnífico trato humano. Materiales de primera calidad en el centro y amplia gama de modelos en monturas y gafas de sol.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica LA MERCED",
    category: "Óptica",
    address: "C. Victoria, 5, Distrito Centro, 29012 Málaga",
    description: "Se trata de una óptica de barrio que goza de la confianza de sus usuarios, quienes destacan la profesionalidad y el trato amable de su personal, especialmente de Ricardo. Los comentarios resaltan la dedicación y el tiempo que se toman para atender a cada persona, ofreciendo una buena selección de modelos a precios razonables. Incluso se valora la atención recibida para reparaciones menores sin coste.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:30"
      ]
    },
    website: "",
    phone: "952 21 56 69",
    review_count: 64,
    review_rating: 5,
    latitude: 36.723417,
    longitude: -4.416607,
    user_reviews: [
      {
        Name: "Néstor gonzalez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUS2LVdUGEE8cmqpzBlCTHcQVobT3qzCsgV0Z6wS_F-rHngcsCWyQ=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "100% recomendable, Ricardo es una excelente persona que brinda un servicio al cliente y amabilidad inigualable.\nLa experiencia de nuestra familia con la óptica LA MERCED ha sido genial.\nMis felicitaciones por su profesionalismo.",
        Images: null,
        When: ""
      },
      {
        Name: "MAR ROSARIO LINARES",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUVeek_OVWv2IEb4Z3iLkHLByTpXkRPUQkU-fAycCHry2GlUdI=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Son las segundas gafas de ver que me compro en esta óptica. La atención y el trato de los dueños es verdaderamente exquisito. Me encanta que se toman todo el tiempo preciso para atenderte en condiciones y con una sonrisa. La graduación de mis gafas perfectas y tienen unos modelos realmente preciosos, actuales, modernos y también los clásicos para todos los gustos. Destaco también la buena atención de la chica que atiende el sábado. Me cogió enseguida mi gusto porque prestaba atención a lo que yo decía y me sacó media tienda de gafas. Me asesoró muy bien. Tal es así que me he comprado tres gafas jajaja. Lo cual ha sido posible por los precios aceptables que tienen. Por favor no cambiéis. Yo sí que no os cambio por nada del mundo!!. Os he recomendado ya a media Málaga",
        Images: null,
        When: ""
      },
      {
        Name: "Alejo merlo avalos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJoPHsidH1CGfDqv0LkQM5U67IcWGKZhkQI_yoSV2o8Njf3Qfs8=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "geniales , las necesitaba urgentemente\u00a0 por mi trabajo , y me.llego antes de lo esperado, aparte del buen trato del personal\u00a0 muy buena experiencia y precio",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNoK1XrsVytZkmVuxg7Y8txQEAgK4oDjtO873Ci&fid=0x0:0x77c3e9967675d512"
        ],
        When: "2025-1-8"
      },
      {
        Name: "Salva Fuentes",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVncZg6dXvf43sNYXSAPY2lTkcDmJkb2sEKeoAWT6GKz9DorVdd=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Tenía dos patillas de mis gafas de sol rotas por pérdida de tornillo y pasamos de casualidad por aquí, hemos entrado , me las han reparado sin coste alguno y nada más por la amabilidad del óptico que estaba en el interior, ha sido suficiente para que cuando tengamos que comprar algunas gafas vengamos sin dudarlo aquí. Muchísimas gracias",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNe6QPjkk3uSY1HDO1s6-gSfrqY8nltVec7cKQD&fid=0x0:0x77c3e9967675d512"
        ],
        When: "2024-4-2"
      },
      {
        Name: "Paqui Ramos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKQShc5aoY6Vhzpo_QXA3a8VLVEEe2JjiFWEdWGlEXMZclj6Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy contenta con el trato recibido.\nMuy profesionales , les gusta su trabajo y se nota.\nSeguiré confiando en ellos",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Cabanillas",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKMtND89oTY0YIpNDDdZlpJkTfIDZoAgKv8Xj0LUaL1VB45og=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Óptica de barrio y de confianza. Todos en mi familia usamos gafas y no podemos estar más satisfechos con la profesionalidad y el trato que ofrecen. Son cinco estrellas en todos los aspectos.",
        Images: null,
        When: ""
      },
      {
        Name: "Victoria",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLbuW5SErfTi9mz24WRFdWfxMvz-Lz43NIi1ujTGKiSzZ_0oQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me gustó mucho descubrir esta óptica en calle la victoria en pleno centro de Málaga gafas de todos los estilos y a muy buenos precios lo recomiendo al 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Nadia C.S",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjViGBhcdoiR3cnlipmN9DR4kHJK0CnK3wg6P6_NURu_acM4JFPg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un trato estupendo hacia el cliente! 100% recomendado.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
{
    title: "Óptica Fernandez Baca 1913",
    category: "Óptica",
    address: "Pl. de la Constitución, 12, Distrito Centro, 29015 Málaga",
    description: "Con una larga trayectoria desde 1913, esta óptica es reconocida por su excelente trato al cliente y la profesionalidad de su personal, incluyendo a Rafael y Manolo. Los clientes se sienten bien asesorados y destacan la amabilidad recibida.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:45"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:45"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:45"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:45"
      ],
      sábado: [
        "10:15–14:00"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:45"
      ]
    },
    website: "http://opticafernandezbaca.com/",
    phone: "952 21 11 54",
    review_count: 52,
    review_rating: 5.0,
    latitude: 36.721104,
    longitude: -4.421573,
    user_reviews: [
      {
        Name: "francisco jose llorente santana",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLv4DL-lOAznQzofdebRvoxycCSkqzR6rT1Eiwb8i3TzYScvw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Si no fueran buenos, sería imposible mantenerse tantos años. Tengo 58 años y desde que tengo 9 me graduó y hago las gafas aquí.\nRafael, el optometrista y propietario es un excelente profesional y una gran persona.\nManolo es amigo, más que mi óptico. Siempre me aconseja  lo mejor para mis ojos.\nHoy en día mis hijos, también siguen sus consejos.\nGracias por tantos años.",
        Images: null,
        When: ""
      },
      {
        Name: "Jacques David Dunbar",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI6qJLixDRGOPb6wJXSw42hIXn0RJa96SeFpgm6jPDZj93SaA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Óptica de 10\nCéntrico, Manolo muy amable, servicial y profesional.\nBuena selección de gafas, una preciosidad de tienda.\nVolveremos sin duda",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen Flóres Navarro Díaz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLF8Ts6MPLuM_bTz_E7rIwFycEDcBcZ5WMw4fbMHapCLP8rRA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Me lo recomendó una amiga...y superaron mis expectativas...grandes profesionales y muy buen trato... GRACIAS",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen B Laguna",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXLWG2KDmRn477ovqnPQFxfL9Nk2BOcJnWAnp5Y2fzFQRnhUPU=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Llevamos muchos años como clientes en esta óptica y es principalmente por el buen trato que tienen con nosotros.  De siempre nos han recomendado y dado facilidades a la hora de ir a cambiar nuestras lentes.",
        Images: null,
        When: ""
      },
      {
        Name: "Alvaro De Linares",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWXUwUQRqr8daFb_Y8PZ0e8XQmrgpkeXYK_RkBNVVWsBADeCXbdbw=s120-c-rp-mo-ba7-br100",
        Rating: 5,
        Description: "En plena plaza de la Constitución de Málaga se encuentra la óptica Fernandez Baca desde 1913.\n\nEstupenda óptica y profesionales. Un trato exquisito. Te recomiendo que vayas con Cita y que te busques un poquito la vida para aparcar. Si vas en coche aparcas en la plaza de la marina.\nMe ha encantado la variedad de monturas que tiene.",
        Images: null,
        When: ""
      },
      {
        Name: "Teresa posan",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUcy28yAQ_e1qMbTgl9iZIwAKzei1Q49QVrK_c2lAmZactK7tmXDw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La óptica está muy bien situada en la zona principal de Málaga.\nSus artículos son exclusivos y de vanguardia.\nLa atención al público es excelente. Gran formación profesional.\nSin duda, mi preferida de Málaga.",
        Images: null,
        When: ""
      },
      {
        Name: "Genoveva Vega",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKRoVXuroMAUxPq3NVl-uZi_UABmlZ5cDd5tIQFWxY4rG99bQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Magnífica atención de Irene y su compañero! Asesoramiento perfecto, trato muy cercano. Recomiendo esta óptica 100%",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Antonio Gonzalez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUDYARL4xxlyCL-9yHmO_ftsjzUx5U0hxa6e1TKPpVTXhtaCvp9xQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Uno de los mejores comercios de Málaga. Siempre han encontrado solución cuando he necesito lentes graduadas y me encanta su catálogo de sol. Gracias!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica MH",
    category: "Óptica",
    address: "Av de Europa, 71, Carretera de Cádiz, 29003 Málaga",
    description: "Esta óptica ofrece una amplia variedad de modelos y un trato profesional y atento por parte de su personal. Antonio es destacado por su excelencia como optometrista y sus habilidades de atención al cliente, mientras que Violeta es reconocida por su paciencia y profesionalidad.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:30–20:30"
      ],
      sábado: [
        "10:00–13:00"
      ],
      viernes: [
        "10:00–13:30",
        "17:30–20:30"
      ]
    },
    website: "",
    phone: "951 95 50 50",
    review_count: 29,
    review_rating: 4.9,
    latitude: 36.701712,
    longitude: -4.448302,
    user_reviews: [
      {
        Name: "Caty López barramquero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJkfTmolunlNl6TEju52nbS3kGCliyoFLsNAjoDjZn3pceceQ=s120-c-rp-mo-ba6-br100",
        Rating: 5,
        Description: "Óptica con muchos modelos a elegir,  a destacar el trato de su profesional que en  todo momento te informa y atiende de manera muy especial.\nLocal amplio buen acceso para minusválidos, la entrega siempre es rápida. Normal me hay dos personas en verano se turnan para vacaciones por las tardes te dan cita por lo cual es mucho. Más cómodo para no tener que esperar..\nRecomiendo mucho‼️",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMxE30YN6hcqPV0-OaehwCsExNfsYennwqJ70VN&fid=0x0:0x214ef8d40a8f57b1"
        ],
        When: "2022-6-22"
      },
      {
        Name: "Douglas Serrano Oficial",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXg2z28hJdBvOHyaUF2kJjiFFf1ZSmtT2xU6a9zIO992800DlbOqg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "He sido atendido por Antonio, además de ser un excelente optometrista, es posee una grandiosa habilidad en atención al cliente, ha hecho que se convierta en mi optica favorita, ya que siempre, o rompo las gafas o las pierdo; os recomiendo 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio Sierra",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUklojXH6_CHdPHr3sQL2J0nYgEd1kLboA7e-K_GK2hLoN_FMXRgQ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "He comprado ya tres gafas y realizado alguna reparación, pasada ya la garantía.\n\nMuy contento con el servicio, calidad y el precio.\n\nA veces lleva su tiempo elegir y probarse un montón de gafas, hasta que te gusta un modelo.\n\nVioleta, gracias por tu paciencia y profesionalidad.",
        Images: null,
        When: ""
      },
      {
        Name: "Naxo Moli",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW4I7UrMSenhdK4bUp0JnjY6obpe2MiH_n1CiiHV_zwacdls-8=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo años comprando aquí mis lentes de contacto super buena calidad buen precio y muy buen trato",
        Images: null,
        When: ""
      },
      {
        Name: "Sara Alonso Garcia",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXejGm4an46F2dyzR1qh79vNOZUTjBTQFTjus_zlfV64G6kHCU=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente profesional Violeta, muy buena atención. Mis gafas originales y precio espectacular... Recomendable 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Nicolás Molero",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX5bJaM8J_JiRLe_zXxWrOiYiyunsdaGsD50Lqrw8BuTSZl7faYCw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi señora ha comprado un par de gafas, y ha quedado muy contenta, por la amabilidad y profesionalidad tanto del chico como la chica que atienden la óptica ( perdonar no sé vuestros nombres).\nSin duda recomiendo esta óptica.\nGracias.\nInmaculada.",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Antonio Guerrero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ0DjsTPciuosn9NPr1tbCv1HRzrWD3mvzpPOBzPJR2O0rtedrP=s120-c-rp-mo-ba7-br100",
        Rating: 5,
        Description: "Excelente servicio\nPrecios buenos",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPpH9yFQBhsMUNQtBg1KGQ0qvsO5Qpresvumsqe&fid=0x0:0x214ef8d40a8f57b1"
        ],
        When: "2023-1-27"
      },
      {
        Name: "Patricia Coronel",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKwOLFuzk43e8o0myV5JQ61-p3Tv7wMEbp5pCrHxoRiO8m96w=s120-c-rp-mo-br100",
        Rating: 4,
        Description: "Variedad de modelos y buenos precios. Pongo 4 estrellas porque mis gafas han tardado más de lo que me dijeron, pero como estamos en verano imagino que todo tarda un poco más. Buenos profesionales.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Baja Visión Optica Roca",
    category: "Óptica",
    address: "C. Esperanto, 2, Distrito Centro, 29007 Málaga",
    description: "Baja Visión Óptica Roca es reconocida por su personal súper profesional y amable, que brinda un trato excelente. Son especialistas en baja visión, con menciones particulares a la habilidad de Ricardo para resolver casos complejos. Sin embargo, se destaca una experiencia negativa sobre la gestión de un pedido y la comunicación.",
    serviceRatings: {
      atencionCliente: 4.5,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 3.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:30–20:00"
      ],
      lunes: [
        "10:00–14:00",
        "17:30–20:00"
      ],
      martes: [
        "10:00–14:00",
        "17:30–20:00"
      ],
      miércoles: [
        "10:00–14:00",
        "17:30–20:00"
      ],
      sábado: [
        "10:30–13:45"
      ],
      viernes: [
        "10:00–14:00",
        "17:30–20:00"
      ]
    },
    website: "https://bajavisionroca.es/",
    phone: "951 13 83 32",
    review_count: 74,
    review_rating: 4.6,
    latitude: 36.718793,
    longitude: -4.431894,
    user_reviews: [
      {
        Name: "Rafael cemal Candaner Jodar",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLSlc7jDGiIDyHpKYYSRSmz0PRG3celihSR8taZtUHjuVPDMQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Son personas súper profesionales  , amables y el trato fue muy bueno.El resultado final en las gafas que quería fue inmejorables.\nSin duda alguna volveré en cuanto me haga falta de nuevo . Gracias !",
        Images: null,
        When: ""
      },
      {
        Name: "Encarni Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVR0KMmNJJvpZNo9XkEPLcd17jyHcZJgX5yy_hg9F5pmi6sZqQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Quisiera destacar la excelencia y profesionalidad de BajaVisión Óptica Roca. Tengo una hija de 12 años con más de 12 dioptrías acumuladas diagnosticadas desde los 2 años de edad, en ninguna óptica podían hacerle las lentillas que necesitaba, es más la perjudicaron en el intento; Ricardo le hizo un estudio minucioso y dio con la tecla a la primera, permitiendo mejorar la salud visual de mi niña fisiológica y emocional porque por primera ve se veía a si misma sin gafas.\nObviamente, es nuestro óptico.\nMuchas gracias",
        Images: null,
        When: ""
      },
      {
        Name: "joaquina dominguez lopez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIMqd4xwCWWQ0GR16xDt8W6RbCt9bdTt7PKJSI2NTb5wC2mfA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Uno de los mejores profesionales,de Málaga, muchísimas gracias por tu trato tan profesional y cercano",
        Images: null,
        When: ""
      },
      {
        Name: "Paqui Garrido",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUye3b9bjWSR9KxbMUqybAEpHjFwvV2tfV_2dtynSAq7EQKOoxS=s120-c-rp-mo-br100",
        Rating: 2,
        Description: "Muy mal. Me han tenido engañada 6 meses. Todo lo que me ofrecieron era mentira, nunca me avisaron de cómo iba el pedido, siempre tenía que estar yo detrás de ellos. Muchas escusas, no querían dar la cara. En mi caso un fracaso total está óptica, pero la visita si que la cobran 45€ y te prometen oro y todo lo ponen muy bonito. Eso no se debe de hacer con las personas con grave problema de visión. Nunca volveré a está óptica.",
        Images: null,
        When: ""
      },
      {
        Name: "Fernan Rodríguez García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXfOxOu3oPjgPsYPqoZIuHwkM6YAntGhfx4NWJA4r2SRNkbnLpT1A=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Inmejorable trato en unas fechas tan señaladas y dificultosas como las navidades. Solicité la montura de unas gafas un sábado 30 de diciembre y se comprometieron a tenerlas preparadas para la semana siguiente y así ha sido. Nada negativo que añadir sobre esta empresa familiar que cumple a las mil maravillas.",
        Images: null,
        When: ""
      },
      {
        Name: "Lorena Brigante",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJJKdGmPwFXfMumA2PWVtN1_AICsYnHXDcsIAa4dS07kLtxmE1L=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Experimente  Un servicio excepcional en esta óptica. Desde el trato amable y profesional hasta la precisa graduación, Todo fue perfecto. Además cuentan con un equipo para realizar pruebas oftalmologicas más exahaustivas como una oct.\nRecomiendo totalmente esta óptica para quienes buscan calidad y atención excepcionales.",
        Images: null,
        When: ""
      },
      {
        Name: "Alvaro De Linares",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWXUwUQRqr8daFb_Y8PZ0e8XQmrgpkeXYK_RkBNVVWsBADeCXbdbw=s120-c-rp-mo-ba7-br100",
        Rating: 5,
        Description: "Sin duda, una óptica de referencia en Málaga.\nRicardo, una excelente persona y un gran profesional.\nEspecialistas en bajo visión , desde hace muchísimos años .\nTe lo recomiendo totalmente. Para personas con problemas visuales. Es una buena idea de llevarlo. Difícil de aparcar en la zona.",
        Images: null,
        When: ""
      },
      {
        Name: "Sofia Martín",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLvEds-r2LlsBQjlr2LTrUpfIVcwk_Zy031_mAO_XlkIsq9eg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo desde los 8 años con gafas y jamás me habían hecho un estudio con tanta atención al detalle. No solo son súper profesionales sino que son encantadores, un descubrimiento. Estoy encantada",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "General Optica - Visión y Audición",
    category: "Óptica",
    address: "Av. Simón Bolívar, S/N, C.C, Palma-Palmilla, 29011 Málaga",
    description: "Esta óptica recibe comentarios mixtos. Por un lado, se destaca la amabilidad de algunos miembros del equipo y la amplia variedad de gafas disponibles. Por otro lado, algunas opiniones mencionan un trato al cliente deficiente y estrés en el personal. Sin embargo, también hay experiencias positivas donde el personal se muestra profesional y resolutivo, incluso arreglando problemas con las gafas de manera rápida y gratuita.",
    serviceRatings: {
      atencionCliente: 3.8,
      profesionalidad: 4.0,
      precio: 3.5,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://www.generaloptica.es/es/?utm_source=gmb&utm_medium=organic&utm_campaign=Malaga&utm_term=1101",
    phone: "952 61 58 33",
    review_count: 197,
    review_rating: 4.2,
    latitude: 36.734605,
    longitude: -4.432123,
    user_reviews: [
      {
        Name: "Lubna Abid",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK_w3TbAiQDsMPhGzJ24kN9AMQBFlxnVecGmzVfuypnbvunBw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He recibido un trato muy muy muy amable por la compañera. Me he encontrado a gusto y seguramente volveré hay mucha elegida tanto como gafas de sol como gafas de vista. Súper aconsejadoooooo",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ7E5a6UgnJ94Tj7yQo2vpowmVyEAd3ScsrWks-t8hvCXWpQg=s120-c-rp-mo-ba3-br100",
        Rating: 1,
        Description: "El trato al cliente cada día peor. Deberían de hacérselo mirar . Un poco estresado siempre el personal de este centro y con muy mal talante para atender .",
        Images: null,
        When: ""
      },
      {
        Name: "Óscar Miguel Núñez Chía",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL37chXkFOqbxcaLCeq3TY9bEIlTCABHrlOGzeqaesCOVB4i7yL=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "170924 Quiero dar las gracias a los dos chicos que me han atendido hoy sobre las 8 de la tarde, sobre todo al chico con barba y gafas, siento no saber su nombre. Amabilidad y sobre todo profesionalidad. Me dieron soluciones a mi problema.",
        Images: null,
        When: ""
      },
      {
        Name: "Joseka Rivas",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWkwLG84FpSgYPZ5xAFIk7W_IEvRL5I178EfHsUGyrCmFGMQxVi=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Muy amables y eficientes. Tuvimos un problema con unas gafas y María José Burgos nos las arreglo de manera rápida y sin coste. Quedaron perfectas.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNnNe-umeTHa9NrTiE3csMPSnVIJQFhStNQ1m4P&fid=0x0:0x12a342fa32a1ffe6"
        ],
        When: "2023-7-30"
      },
      {
        Name: "María José Doblas Navarro",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXja5a7wV5Ti9DJbbIr2SkRId6IpZvdEYwcKxuAk06TkMIWZCo=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "De 4 personas que me atendieron y con las que interactué , me dieron un trato profesional e inmejorable.\nSupieron asesorarme, aconsejarme,\u00a0 responder a todas mis preguntas y adaptarse a mi presupuesto.\nGran variedad de modelos de gafas. Muy contenta. Lo recomiendo al 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Marta Guerra",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV9uGkAf52tjOwEm3rTuJCIqUYKop-OMic77BH5tB7N_X9HkYPg=s120-c-rp-mo-ba3-br100",
        Rating: 1,
        Description: "Más de 15 min esperando solo para hacer una compra, nos dice “2min y os atiendo” y siguen pasando los minutos… y seguía atendiendo a otra clienta pero que al parecer iba para largo porque le estaba preguntando hasta si se mareaba etc con las gafas…\nle volvemos a decir si le queda mucho a lo que responde:\nlas lentillas son para ahora?\nmmm señor para cuando van a ser? si quiere le espero aquí un mes… sin sentido,\nno vuelvo a ir",
        Images: null,
        When: ""
      },
      {
        Name: "Olga Rapitskaya",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXIihDZS9-s4g-O_G-7N0-_vfOQQO8gKw4Byhlvk3fTZTdmgEmt=s120-c-rp-mo-ba3-br100",
        Rating: 4,
        Description: "Quisiera agradecer a Javi y a María José por su buena atención al cliente. Me quede satisfecha con el trato prestado, sois muy majos como las personas y profesionales de alto nivel.\nNo pongo 5 estrellas solo 4 por los precios en la tienda y los descuentos que son poco claros.\nPero en general bien, gracias!",
        Images: null,
        When: ""
      },
      {
        Name: "jesus gonzalez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJL3V2jaXmTBvF7_V76W8WdNes2AnoV0QuVqcUEMc1mGO1WbA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Grandes profesionales ..nos atendieron sin cita a mi y ami hijo y trato excepcional. Nos asesoraron sobre diferentes posibilidades y aconsejaron estupendamente. Totalmente recomendables a precios estupendos.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Evisión Ópticas & Audición Ciudad Jardín",
    category: "Óptica",
    address: "C. María Tubau, 18, Cdad. Jardín, 29014 Málaga",
    description: "Esta óptica es altamente recomendada por su excelente atención y profesionalidad. Los usuarios destacan la amabilidad y la paciencia del personal, especialmente Rocío, quien recibe múltiples menciones por su buena disposición y ayuda para solucionar problemas con las gafas. Se percibe un trato cercano y una buena relación calidad-precio.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      martes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "10:30–13:30"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:00"
      ]
    },
    website: "http://www.opticasevision.com/",
    phone: "951 60 00 03",
    review_count: 123,
    review_rating: 4.9,
    latitude: 36.740746,
    longitude: -4.42249,
    user_reviews: [
      {
        Name: "Francisco Javier Pelaez Aguilar",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKNT8zFak_xVw4H3SW3eo2dUFqmy2OTSn5BK-Vh_79YRPa9PA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Las chicas que me atendieron fueron muy amables y muy profesionales. Venía de otra óptica con un problema que no me solucionaron ni hicieron por solucionarme.\nMe recomendó la óptica mi pareja y su familia ya que ellos están muy contentos y satisfechos. Estas chicas hicieron su trabajo estupendamente y me aconsejaron en todo momento, siempre con una sonrisa. Estoy muy satisfecho con el servicio pero sobre todo con el trato recibido y esa profesionalidad.",
        Images: null,
        When: ""
      },
      {
        Name: "Desi cortes diaz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWbe_kVpr3TI5ULrRelgtXFzPSWIuaore9GVpCY8Q5Mc3LhtVQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Super apañadas muy buen trato y buen trabajo gracias sobre todo a Rocío por lo bien que me a atendido cada vez que he ido y e tenido algún problema con las gafas",
        Images: null,
        When: ""
      },
      {
        Name: "Marta Casasola",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVp5-T1dmjB9rcGfmQCtsD-g5Y0IiphQi24S-Qq6IOZikGSpZO3UQ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Lleva siendo mi óptica desde hace muchos años y no puedo estar más contenta. Trato muy cercano y Rocío y el otro compañero son grandes profesionales",
        Images: null,
        When: ""
      },
      {
        Name: "Loli Luque",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLlBbR6qTJhNMnphKlZgzQXT6H6wOTMHtHG9iMtIS_J6BclWw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo muchos años y la recomiendo, el personal muy amable y atentos, Rocío encantadora y muy bien relación/precio",
        Images: null,
        When: ""
      },
      {
        Name: "victor romero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJi99ozyj30gPzRb2ixxkkedDBXVJcHcNpmXJhY-XQQ7mojVw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lo recomiendo,muy atenta y mucha paciencia y experiencia nos aconsejo, valoró a mí hijo y busco la gafa que mejor se le adaptará ,👍👌☺️",
        Images: null,
        When: ""
      },
      {
        Name: "Nika CR",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXefXEfqJX7I78_XjGyBZEpoF1jl1yOLLUYJfq4uFIYJKMTZp20=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Las chicas son encantadoras. Rocio supo asesorarme muy bien con la montura de mis gafas y las gafas de sol y tuvo una paciencia enorme. Mil gracias y sin duda recomiendo este centro a todo el mundo. En breve encargaré de nuevo mis lentillas. 😘👏🏼",
        Images: null,
        When: ""
      },
      {
        Name: "Sergio",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXw_7_MyaLof6YoDdfb0BGdcIdEnKk3biPxS_MXTwo0WipHFk4x=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato excelente!!\nDesde que entré por la puerto fueron todos muy simpáticos y muy flexibles a la hora de elegir cita para probar lentillas el cual fue mi caso. Además, la muchacha siempre te atiende con una gran sonrisa y te escucha, el muchacho que me ayudó con las lentillas fue muy paciente y simpático. También he de decir que tanto sus lentillas como sus gafas son de buena calidad y a un precio súper razonable. La mejor óptica a la que he ido.\n\nMuchas gracias por todo.",
        Images: null,
        When: ""
      },
      {
        Name: "M.Carmen P.M.",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUDrDKrQL_9ezvj3mwUe62nCr60jiE00-zq88Q16wbe-GM1QISkNw=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Es mi Óptica desde hace ya muchos años ...me encanta... Tienen un personal súper amable y siempre sus consejos son muy acertados. La calidad/ precio es muy buena también.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "General Optica - Visión y Audición",
    category: "Óptica",
    address: "C. Cuarteles, 58, Distrito Centro, 29002 Málaga",
    description: "Esta tienda de General Óptica es elogiada por su personal atento y profesional, destacando especialmente a Belén y Ángela. Se valora la empatía y la capacidad de asesoramiento del personal para encontrar el producto más conveniente. Aunque una opinión menciona un problema con la calidad de los cristales, la gestión posterior y el esfuerzo por solucionar el inconveniente fueron reconocidos positivamente. La variedad de monturas también es un punto a destacar.",
    serviceRatings: {
      atencionCliente: 4.8,
      profesionalidad: 4.8,
      precio: 3.5,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      martes: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      sábado: [
        "9:30–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "16:30–20:30"
      ]
    },
    website: "https://www.generaloptica.es/es/?utm_source=gmb&utm_medium=organic&utm_campaign=Malaga&utm_term=1263",
    phone: "951 81 89 19",
    review_count: 64,
    review_rating: 4.2,
    latitude: 36.712734,
    longitude: -4.429383,
    user_reviews: [
      {
        Name: "Isidoro García",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLY9yFUJEheFVoibCnF4ZkmhtiDRZHUn6QGCxp7BkCLBDV9Fg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Aunque soy cliente de General Óptica desde hace muchos años, es mi primera compra en la tienda que tienen en calle Cuarteles (Málaga). Por cierto, muy amplia y luminosa, con un gran muestrario de monturas. Pero, sobre todo, destacar la labor de su trabajadora Belén: por su empatía con las circunstancias del cliente\u00a0 (aconsejando el producto más conveniente), por su profesionalidad (tiene experiencia y conocimientos) y por su amabilidad en el trato. Muchas gracias a Belén, mi esposa y yo\u00a0 estamos encantados de haberla conocido. Se ha ganado dos clientes y dos amigos.",
        Images: null,
        When: ""
      },
      {
        Name: "Javier Alonso",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIBYMNunCh8pLuIi0bxbrIUBjfI4EL_YOfcgu-UWvbnk-KOtg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "EDITO: A pesar de que volví con intención de devolver el producto, la chica que ha llevado todo mi proceso, Ángela Guerrero, se ha preocupado mucho por solucionar el problema y me insistió en llevar las gafas de nuevo al taller para dar una solución. Tras aceptar llevarlas de vuelta al taller, le han puesto otros cristales que me han convencido. Muchas gracias por todo el esfuerzo.\n\nNo estoy satisfecho con el producto que he comprado. Lo primero, he de decir que el personal que me ha atendido ha sido fantástico en todo momento. Siempre con una sonrisa y una gran atención. Mi problema es con el producto. En concreto con los cristales de mis gafas. A pesar de comprar un grosor de 1.67, siento que el cristal es más grueso de esa medida. Sobre todo, porque lo comparo con mis otros pares de gafas y a simple vista se nota una gran diferencia. Siento que llevo unas gafas de culo de vaso, en comparación con mis otras gafas y sin haber cambiado la graduación. Le expongo el problema al personal y me dicen que sus cristales son así. No entiendo que 1.67 tenga un grosor en unos sitos y aquí tenga otro. Pero el caso es que hay diferencia significativa y yo no me veo bien. No me queda más remedio que devolver las gafas con todo mi pesar, porque soy cliente desde hace muchos años y siempre me han tratado muy bien y el producto ha estado a la altura de mis expectativas. Desgraciadamente esta vez no ha sido así.",
        Images: null,
        When: ""
      },
      {
        Name: "Miguel Jurado",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW3NKkbwx7NPbUgfqna4khuM-vEYOw6ClFKclhxr0HLRNkGGNhF7g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo 10 años siendo cliente de General Óptica pero debo de decir que esta es una de las mejores tiendas en las que me han atendido. Por un lado la variedad de gafas en este establecimiento es muy amplia y el trato es muy cercano. Destacar a Belén, que fue quien me atendió y me sentí realmente cómodo con ella.\nGracias :)",
        Images: null,
        When: ""
      },
      {
        Name: "Loli CV",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXuXiOju8biB29T_CLDJK8WfNTIBOGn9T9C34jF9RpD7zO0yKNp=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato inmejorable. Muy profesionales, atentos, amables... Y saben encontrar las gafas que mejor te sientan. Yo cada vez que me miro al espejo con mis gafas nuevas, me veo mejor. Todo un acierto.",
        Images: null,
        When: ""
      },
      {
        Name: "Ramchelle Maglaque",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXuUFUEGlHl81OZ7pP2DFCnkZ_7FgaVYYe8oOrlzOOE1VUV6NyeXA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hace un año que compré unas gafas en esta óptica y la experiencia fue inmejorable. La atención al cliente fue fenomenal, el personal se mostró muy amable y atento en todo momento, ayudándome a elegir las gafas que mejor se adaptaban a mis necesidades.\n\nTuve un problema con las gafas, pero la óptica me lo solucionó de forma rápida y eficaz. Sin duda, recomiendo esta óptica",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Carlos de León Lozano",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWZyhpQil5QRbNVImvTWcVZYBa275RUvrWoED8xL-AzwJk2qE7R=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Inicialmente el trato fue muy bueno. Pero una vez compradas las gafas olvídate de que te traten bien, te atienden el último aunque llegue gente después tuya, te hacen levantarte de la mesa con la excusa de atenderte y es para sentar a otras personas. La encargada es una déspota sin ningún tipo de modales. Viendo la situación nos fuimos de la tienda, nunca me había sentido tan mal tratado. Desde luego la imagen que dejan de la franquicia no podría ser peor.",
        Images: null,
        When: ""
      },
      {
        Name: "Alberto Clavijo Cabello",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXEz80GiCw1inb_k8hzO8oBkEe0LPY2yz3XDO4dWl3XmlBF6q379w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buenos precios,y gran personal mencionando especialmente a María Victoria por su atención y su trato,una gran profesional,lo recomiendo",
        Images: null,
        When: ""
      },
      {
        Name: "Belen Guerrero Suheros",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJFxX27QGWBhDVxlRPeozYXH8Tzg6wVWHyql4xVXLE-l5c-0A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Desde que abrieron, es mi óptica por excelencia. Siempre me han dado un trato excepcional. Cuentan con un personal muy agradables y han conseguido que sea un cliente habitual. Los recomiendo!!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Alain Afflelou Óptico y Audiólogo, Calle Hilera, Málaga",
    category: "Óptica",
    address: "C. Hilera, 6, Distrito Centro, 29007 Málaga",
    description: "En esta óptica, la atención al público es un aspecto muy valorado, especialmente la dedicación y amabilidad de profesionales como María José y Santiago. Se destaca la paciencia y la capacidad de ayudar y asesorar, incluso en situaciones complejas. Sin embargo, una opinión menciona una experiencia negativa con un ajuste de gafas que resultó en daños. A pesar de esto, la impresión general es positiva, resaltando la calidad humana y profesional del equipo.",
    serviceRatings: {
      atencionCliente: 4.8,
      profesionalidad: 4.7,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:30"
      ]
    },
    website: "https://www.afflelou.es/opticas/malaga/afflelou-calle-hilera-6-29007?utm_campaign=gmb&utm_medium=organic&utm_source=google_gmb",
    phone: "952 61 09 57",
    review_count: 63,
    review_rating: 4.9,
    latitude: 36.71796,
    longitude: -4.42816,
    user_reviews: [
      {
        Name: "Andrés Bellido",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX2oZOJuuvm4xp1P-z6mzvMB66v4wa9_eRolhFkacwmFRATw-NO=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Había tenido un problema con otro centro de Alain Afflelou y me ha atendido María José.\n\nMientras esperaba también he visto como atendía a un señor que tenía algún tipo de déficit cognitivo y la verdad es que la impresión que me he llevado ha sido muy grata. Ha atendido al cliente con mucha mano izquierda y paciencia, intentando entender lo que necesitaba y ha logrado entenderle cuando el señor realmente se explicaba bastante mal.\n\nLuego ha llegado mi turno y ha sabido ayudarme a la perfección y asesorarme de forma muy cercana y amable, demostrando ser una gran profesional.\n\nLa verdad es que es un gusto ver trabajar en una cadena donde sueles recibir un trato mucho más impersonal, a una persona que demuestra con su trato al cliente la gran calidad humana y personal que tiene.\n\nRecomiendo el centro 100% y si os atiende María José tened por seguro que seréis bien atendidos.",
        Images: null,
        When: ""
      },
      {
        Name: "Jesús Oya",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJkSaxS3l5WfSltcswnS9ifj41wvNWk3PV-FaOJmixAWKYRqg=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Atención desastrosa.En mi vida viví algo parecido.Pedí un ajuste en las gafas y acabó la chica dañando uno de los cristales, la montura y para colmo, me entregaron las gafas nuevas torcidas que no tiene solución, dicho en otras dos ópticas en las que pedí opinión. Una experiencia muy desagradable. Nada recomendable este centro.",
        Images: null,
        When: ""
      },
      {
        Name: "Patricia García Ferrández",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUv5K-6YboomLbVd1Cz-Dv6MSO5QDf0JJbvrveNkcoocEnWhhFygQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Atención al cliente excelente. Me atendió una chica muy simpática",
        Images: null,
        When: ""
      },
      {
        Name: "IBTISSAM EL MEHDI",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVU0QSB9IAbTdUQKsrfawf2d1XQPHRKG8-E55JGNiu9EnfWM4Rq=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Siempre he ido a esta óptica porque Santiago trabajaba ahí y es un profesional EXCELENTE. Acabo de llamar para pedir cita para una revisión y me han dicho que Santi ya no trabaja ahí ☹️ ¿Se habrá ido a otra Óptica de Alain Afflelou?",
        Images: null,
        When: ""
      },
      {
        Name: "Israel Yeray",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXiMAtXPgJPIxdWtelfZZXREmj3rSZEge4H7iZq_69905vIpbs=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Me atendió María José, un encanto de chica. Muy atenta y amable, seguro que va a llegar lejos.\n\n¡Más personas así en los establecimientos, por favor!",
        Images: null,
        When: ""
      },
      {
        Name: "Sven Polutnik",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK798-ZB82Eukr6KHNUXt7Gbjoe5mg747ZdlloHoomSuvBYaw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Personal top. Muy profesionales y simpáticos. Atención al cliente inmejorable. Saben lo que hacen. Y además, calidad-precio muy bueno. Esta tienda de Afflelou se la recomiendo a cualquiera que vive en Málaga y tiene problemas con la vista.",
        Images: null,
        When: ""
      },
      {
        Name: "maria isabel",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWZ6El8cQi-utvKCE6yzzJRhGmtiW0igTcE_pvaGGPAj_bD7jJ4=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Personal profesional y muy amable. Tanto Santiago como Inma te dan un trato familiar y siempre están dispuestos para asesorarte y ayudarte. Mi experiencia ha sido muy buena, ya que tengo problemas para adaptarme a las lentillas y la verdad es que están teniendo mucha paciencia y me animan para que continúe intentándolo hasta dar con las que se adapten mejor a mi problema. Sin duda la recomiendo por el trato sobre todo y también por la variedad de sus productos y horarios",
        Images: null,
        When: ""
      },
      {
        Name: "raquel aragon",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKV3fxVn9hvA6ZBNzAtnZh8ISbD58OIO8saA8wboPYXoEnBBA=s120-c-rp-mo-ba2-br100",
        Rating: 3,
        Description: "Buenos días\nHace años que vengo a esta óptica porque trabajaba un profesional que se llama Santiago, cual es mi sorpresa que ya no trabaja allí. Una pena\nNo se si volveré porque ni comparacion con las personas que están ahora.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Ripoll ópticos",
    category: "Óptica",
    address: "Av. de la Paloma, 43, Carretera de Cádiz, 29003 Málaga",
    description: "Ripoll ópticos es altamente recomendado por su excelente servicio y trato profesional y personal, con menciones especiales para Alejandro y Jorge. Los clientes destacan los buenos precios, la calidad de los productos y la minuciosidad de los exámenes de la vista. La fidelidad de muchos clientes a lo largo de los años subraya su satisfacción.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:30–13:30",
        "17:30–20:00"
      ],
      lunes: [
        "10:30–13:30",
        "17:30–20:00"
      ],
      martes: [
        "10:30–13:30",
        "17:30–20:00"
      ],
      miércoles: [
        "10:30–13:30"
      ],
      sábado: [
        "10:30–13:30"
      ],
      viernes: [
        "10:30–13:30",
        "17:30–20:00"
      ]
    },
    website: "https://www.ripollopticos.com/",
    phone: "952 31 51 19",
    review_count: 122,
    review_rating: 4.9,
    latitude: 36.702119,
    longitude: -4.445553,
    user_reviews: [
      {
        Name: "Juan Martinez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWV4oR6MTTmGqEkmk5yMqax-FThoHqU0j8-5IYa2WrJtFwciNb5=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Muy buen trato por parte de Alejandro. me voy muy contento con mis gafas graduadas",
        Images: null,
        When: ""
      },
      {
        Name: "marta luengo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI_nY6JDXXjnIQnJ7zKD4Xk9OH7sKCqboX5pnW0emoKxviG8A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelentes profesionales, recomendable 100%.\nTambién un trato excelente.",
        Images: null,
        When: ""
      },
      {
        Name: "ANA P.",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXig6tdQJPbNJG4jftwYLaV3ohihhfYviKEUUIqQvUW74dUhCxshw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Excelente trato y calidad. Profesionalidad 100",
        Images: null,
        When: ""
      },
      {
        Name: "Jorge Miguel Casares De La Torre",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIGv3or-jceNta0JWd3pTzM9W7dJR_q4OIizWcUyhm5QF97TQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Grandes profesionales, trato muy personal. Buenos precios.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPoAxzii4qFhtH63kMnNFG519yKXue_dGw4yfIn&fid=0x0:0x4d771ad3f53ad174"
        ],
        When: "2023-2-20"
      },
      {
        Name: "ruben alo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWEKyJyi7lgW06w477u-vXaS1w8XY8EF9TKiCPZU-ZQcFEhPEEqiA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Somos clientes, desde hace muchos años, y cada vez que vamos nos gusta más. Jorge es un gran profesional, te aconseja muy bien en todas las decisiones que hay que tomar. Lo recomiendo al 1000x1000.",
        Images: null,
        When: ""
      },
      {
        Name: "Manuel Peralta Marente",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKjB277MgTmAExsaHzN35gKxW5VWCiRNTQBJgt2Akz_wXyf=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Grandes profesionales. Buena relación calidad precio. Ofrecen numerosos descuentos por fidelidad. Te miran la vista de una forma muy minuciosa. Es mi óptica favorita aunque no viva cerca. La recomiendo,  hacen sentir al cliente especial.",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio Rico Maldonado",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKzCn2lg27PC54R8nB3NAGaSwE-maaK8O-CRvmx8vHpLRKOKw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo más de siete años siendo atendido por ellos. Siempre con amabilidad y buen servicio. Profesionales a más no poder. Gracias por vuestra atención",
        Images: null,
        When: ""
      },
      {
        Name: "A EG",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV5UfZrCuFTSgXkXb1NcAJyo0KQvEbWYqKYR5bWwh0OARKAm00g=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Óptima atención y servicio. Jorge es un gran profesional y muy cualificado. Atención y asesoramiento acorde a necesidades del cliente con amplio abanico de posibilidades.\nUna óptica cercana con productos de calidad a precios económicos y ofertas competitivas.\nAparcamiento junto explanada donde se instala el mercadillo en la prolongación de Av Europa.\nHorario comercial y protocolo Covid. Instalaciones limpias y agradables. Cinco estrellas.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "AVERA Centro de Optometría y Terapia Visual",
    category: "Optometrista",
    address: "Calle Ntra. Sra. de las Candelas, 12, Carretera de Cádiz, 29004 Málaga",
    description: "AVERA Centro de Optometría y Terapia Visual está especializado en optometría y terapia visual. Vanessa es destacada como una profesional de alto nivel, dedicada y con amplia experiencia. Los clientes valoran su enfoque personalizado y los resultados positivos de sus terapias, especialmente en casos de ambliopía y estrabismo.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 3.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "16:00–19:00"
      ],
      lunes: [
        "16:00–19:00"
      ],
      martes: [
        "16:00–19:00"
      ],
      miércoles: [
        "16:00–19:00"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "10:30–13:30"
      ]
    },
    website: "https://www.averavision.es/",
    phone: "951 48 32 47",
    review_count: 33,
    review_rating: 5.0,
    latitude: 36.687337,
    longitude: -4.449301,
    user_reviews: [
      {
        Name: "Jose Manuel Garcia Lopez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJeFzhD93v6yqOM2zZCmc-VFheEtqKL6twuvQ7eziAGsVVoXw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Recomiendo totalmente graduarse la vista aquí. Vanesa es una gran profesional, y se le nota su amplia experiencia. No se limita a la típica graduación, sino que realiza muchas pruebas para asegurarse de mejorar tu visión al máximo. ¡Excelente trato!",
        Images: null,
        When: ""
      },
      {
        Name: "nat ant",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK4OCfrVF8rPSBtRF4OJR36nQUugfCanYQDG1z0hRux8V15og=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Vanessa es una profesional de 10.\nSu trabajo es personalizado y se adapta totalmente a las necesidades individuales de cada uno.\nMi hija, Laura, ha tenido mucha suerte de encontrarla en su camino. Su ayuda ( muchas veces desinteresada) ha sido esencial para su desarrollo y para conseguir independencia y autonomía, a pesar de su baja visión.",
        Images: null,
        When: ""
      },
      {
        Name: "María",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIk_H83nk0U-VJnmf4DyrYR2XZnQuhygIcI8DZQr1SwNfQHZA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Visita para realizarme un examen de mi vista que había empeorado sobre todo en cerca. Ha sido la revisión mas completa que me he realizado. Vanesa me ha explicado todo muy bien y ha atendido a todas mis preguntas, que no fueron pocas. ;). Volveré en unos meses para revisar nuevamente mi visión tras la nueva graduación de lentes e implementación de los consejos que me indicó para mis ojos. Muy buena profesional, puntualidad y formalidad.",
        Images: null,
        When: ""
      },
      {
        Name: "Lydia Pardo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI7gGwgMEC-eAsidQVKbQy2raVjCSrsyF8zddgwAyAyW7vtlA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Solo puedo decir G R A C I A S.\nMi hija tiene una ambliopia estrabica, en su oftalmologo le pusieron un parche 8 horas al día pero después de un año no había mejoría, me hablaron de operacion(cosa que me daba mucho miedo), y en una ocasión me hablaron también de la terapia visual, fue a raíz de eso que buscando encontré AVERA y concretamente a Vanessa.\n\nMi opinión es totalmente sincera y voy a intentar plasmarla lo mejor posible.\nVanessa nos comentó que la terapia consistía en ir 1 hora al centro(1 vez al mes, cada 15 días o todas las semanas, dependiendo lo que nos pudiésemos costear) y decidimos ir todas las semanas ya que alfinal es la salud de nuestra hija, y sinceramente no me arrepiento de cada céntimo que he pagado allí.\nLa niña ha mejorado notablemente, no le cuesta hacer los ejercicios que vanessa le manda hacer en casa, además hace que el niño quiera ir en cada sesion(cosa bastante importante ya que nos facilita el trabajo a los padres) y además en concreto mi hija, Arya, solo hace hablar maravillas de su seño de los ojos.\n\nAsí que muchas gracias Vanessa porque estoy segura que sin ti no hubiésemos llegado a donde estamos.",
        Images: null,
        When: ""
      },
      {
        Name: "Javier Morilla Mancebo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXjYgUm2JmDoRTWxqTwniHGyAIqjKbYpHHJNxvlC9nZuc4zxw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Vanessa una gran profesional y comprometida al 100%.\nA mi hijo le dijeron que lo tenían que operar por un estrabismo, nos pusimos a buscar como locos y encontramos AVERA. Acudimos a Vanessa y en 6 meses ya no se habla de operación, mi hijo dio un cambio radical. Volvimos a ir a la revisión del oftalmólogo de la seguridad social y se quedó sorprendido de dicho cambio.\nMuy contentos con el resultado, totalmente recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Jorge Miguel Moreno Hernández",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ0v18P6Ch25sLl5RhpWxFhwmBPCKmgVJE0NuY5K_5ul4n8fg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Acudí buscando que me adaptaran unas lentes esclerales, ya que tengo dolores fuertes en la cornea y sequedad ocular, pero a pesar de mi condición, me ha conseguido adaptar las lentes y he ganado muchísima calidad de vida, por lo que le estoy muy agradecido.\n\nSe nota que es una gran profesional y que se esmera mucho en obtener el mejor resultado posible, me hizo muchísimas pruebas hasta encontrar las lentes perfectas para mis ojos y ante cualquier duda  me la aclaró rápidamente. Estoy encantado de haber encontrado este sitio y volveré siempre que necesite cualquier producto de la vista.",
        Images: null,
        When: ""
      },
      {
        Name: "Alejandro Arroyo Cerezo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVqal1rdtI8vZZ7F9CwpFB57RiJT38LGMN-NKYLKlnce9i-baN76A=s120-c-rp-mo-ba6-br100",
        Rating: 5,
        Description: "Mi hija tenía ojo vago, con una visión del 50% en un ojo, tras la terapia ha recuperado el 100%. MUY CONTENTOS!!!! Vanessa es  encantadora, es una gran profesional y como persona mejor!!! :)",
        Images: null,
        When: ""
      },
      {
        Name: "Silvia",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJDZge_iea6SVlbhnDRg5RpZGFa-JllYt3iy1w6K-QvAEgqfg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Espléndida profesional, muy seria en su trabajo. Mi hija mejoró de una manera espectacular, antes me daban la operación de los ojos como solución.\nGracias a Avera, mi hija, de 7 años, no tendrá que pasar por quirófano.\nEs un trabajo duro y de constancia, pero merece la pena.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Merkavision Mármoles",
    category: "Óptica",
    address: "C. Mármoles, 38, Distrito Centro, 29007 Málaga",
    description: "Óptica Merkavision Mármoles es elogiada por su trato encantador y un equipo profesional, amable, paciente y empático. Los clientes destacan la gran variedad de gafas atractivas y los precios muy competitivos, así como el servicio y la atención excepcionales.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 5.0,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      martes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "11:00–14:00"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:00"
      ]
    },
    website: "",
    phone: "951 68 86 37",
    review_count: 27,
    review_rating: 4.8,
    latitude: 36.72164,
    longitude: -4.429266,
    user_reviews: [
      {
        Name: "Desiré García León",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK21cU1lL5MqnKs4RM6pPekN2ZksWhN_cqiZBAoCImWZ1-YUw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Siempre encantadísima del trato que recibo,un equipo muy profesional,amable, paciente y empático.Una gran variedad de gafas chulísimas.Lo recomiendo al 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Julio López Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUVSlPMnW2abG4HyKXXALHe7_cP7c3ERdzrKyjOcIrCi0y-T8dV=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Óptica en calle Mármoles. Tienen gran variedad de monturas y lentes. El servicio y la atención son excepcionales. Pero mejor, los precios, mucho más competitivos que en otras ópticas. Los recomiendo al cien por cien. Llevo años siendo su cliente.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMEixuPL9LIIVzRPpal_aRYAuBzW8RATvBBFsB5&fid=0x0:0x1dbcfaab575e7dc"
        ],
        When: "2022-12-9"
      },
      {
        Name: "Florencia Manino",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXBzxdW7mIjW04Cg19WgLDamM_FYMquaaxTjeQnwfpRoj-zJBLh5A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Atención excelente. Muy amables. Me resolvió al instante un problema con mis lentes",
        Images: null,
        When: ""
      },
      {
        Name: "eduardo rodriguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLrMd-9jb3lLQCkaiq7YVsVzXN5t5l0gTjj3hv748DJC4bi2A=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Excelente atención, calidad y precios.  Súper recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Estela Chazarreta",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIDPZQkhNACXD4tYg2N-sbo3sPT6tl1FB-iv98kc7QMB6TXlOLh=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención es genial!\nEs la segunda vez que me hago gafas con ellos y son increíbles.\nMuy profesionales, te ayudan en todo momento.\nNo duden en visitarlos!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Francisco Molina",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJOSR2pXR_maoOjhMs0UDAvdsFAr12nWa5nKmQyaAqXdExhug=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buen servicio, personal muy profesional y simpático. Y además unos precios muy bajos sin que afecte a la calidad. Lo recomiendo 100%",
        Images: null,
        When: ""
      },
      {
        Name: "Alberto Sanchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIGorwiT3tOpzFBSSsw9v-rah8Tq7Jo8Qj4s0F05XlYpXwWJA=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Mi novia lleva varios años con esta óptica le encanta dice q los precios son los mejores y a la hora de buscar gafas o arreglos por lo q sea te ayudan en todo son los mejores los recomiendo 100% es la mejor que hay en Málaga",
        Images: null,
        When: ""
      },
      {
        Name: "Esther Arregui",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIRxm5b6yCgoJQL4d0U0yylfo59veTgyxYAmsaazxTcnZZORA=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "El chico q me atendió fue muy amable y paciente,me lo explicó todo muy bien,y hay muchas opciones donde elegir,desde muy baratas a mejor calidad. Muy contenta con mi elección.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Centro Óptico Sur",
    category: "Óptica",
    address: "Av. de José Ortega y Gasset, 67, Cruz de Humilladero, 29006 Málaga",
    description: "Centro Óptico Sur presenta opiniones diversas. Mientras algunos clientes destacan la profesionalidad y amabilidad de miembros del personal como Karim y Juan, otros reportan experiencias negativas relacionadas con ofertas engañosas de gafas.es, trato desagradable y problemas con la calidad de las gafas y el servicio postventa.",
    serviceRatings: {
      atencionCliente: 3.0,
      profesionalidad: 3.5,
      precio: 3.0,
      variedad: 2.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      lunes: [
        "9:30–17:30"
      ],
      martes: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "9:30–17:30"
      ]
    },
    website: "https://www.centroopticosur.es/",
    phone: "653 72 97 96",
    review_count: 32,
    review_rating: 4.2,
    latitude: 36.71068,
    longitude: -4.448663,
    user_reviews: [
      {
        Name: "Luis Ramos",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVtc0_adyUZQIYEeh1sf8oQTYw6s8KmE3EIiiIbp2tgLQlRa8z_yA=s120-c-rp-mo-ba4-br100",
        Rating: 1,
        Description: "Las ofertas de gafas.es dan risa. Ofrecen monturas que no se pondría ni un dibujo animado. En ese sentido, una pérdida de tiempo. Pero lo peor es la atención al cliente: no he visto personas más desagradables en el trato solo porque he pedido cita para una oferta concreta de gafas.es que era, siendo benevolentes, engañosa, como si yo tuviera la culpa. En fin, mejor evitarlo.",
        Images: null,
        When: ""
      },
      {
        Name: "Pedro León",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXVazlmonKcO_jk00toUhT978r3leD4aT0oQoYN_t6_9iKIKxL_=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Fui con cita a través de gafas.es después de 1 mes de espera. Supuestamente era la óptica con mayor variedad de monturas. Nada más entrar me dicen que ellos solamente hacen de intermediario... Pues tenían exactamente 3 monturas elegibles para la oferta, dos de señora y a cual más fea y menos ponible. No hubo mayor interés por parte de la óptica. Muy desesperado hay que estar para trabajar con esa web y aceptar que vayan clientes a sentirse engañados. No piquen, es una pérdida absoluta de tiempo.",
        Images: null,
        When: ""
      },
      {
        Name: "anfenu",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVPdi1JGCcTLAT8-bZhgzIkdmpXDR3raE3l9N-PVorhEiSB-lc=s120-c-rp-mo-ba2-br100",
        Rating: 1,
        Description: "Mala experiencia, compre unas gafas progresivas y me la dejaron en mono focales por el mismo precio casi 200€. Lo único que hacían cada vez que iba era doblar las patillas.\nHe desperdiciado el dinero y mi tiempo.He conseguido comprar unas gafas mono focales  por 60 €. No volveré por no encontrar seriedad ni profesionalidad. Tan solo ganas de ganar dinero. No recomiendo para nada Centro óptico sur.",
        Images: null,
        When: ""
      },
      {
        Name: "Caty",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVcrY7YVgdSSoyLyc52TuMY0aVAUj7yZwxQqhq6g5tEnGHBuYDw=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Muy mal. La experiencia de mi marido comprar unas gafas progresivas y al final la dejaron en mono focales por el mismo precio o sea casi 200€. Tuvo que ir en reiteradas veces y no se molestaron ni en volver a mirar la graduación que lógicamente el problema fue de ellos por no ajustar la visión de un principio. Siempre diciendo lo mismo que tenía que acostumbrarse, lo único que hacían cada vez que iba era doblar las patillas.Ha desperdiciado el dinero cuando en otra óptica ha comprado una mono focal por 60 €. Nos sentimos engañados por lo que no volveré ya que se han comido la diferencia de unas gafas progresivas convertidas en mono focales. No encontramos seriedad y falta de profesionalidad. Tan solo ganas de ganar dinero. No lo recomendamos para nada.Es normal que cada vez vayan menos personas a este establecimiento.",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Gómez Soler",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIKD_Ua8p2xO1BPY4tQxGS3KAX6JUOWtOaYS_0MjwL44rZKSg=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Yo no voy más,,persona sin ganas de trabajar y, me trataron regular, me mandáis cita, pero ni pienso ir",
        Images: null,
        When: ""
      },
      {
        Name: "Maria de los Angeles Sanchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIbB9kbB4ME_G58axuNlbUb13Jh2htDgh_nHt1LI5RmQbkglA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buenos días. Quiero compartir con todos la experiencia vivida en este centro con la compra de lentes y monturas las cuales desde el minuto uno fuimos mi marido y yo atendidos con la profesionalidad y seguridad que los clientes buscamos en dicho personal.\nDespués de varias incidencias y solventadas con el máximo calificativo de amabilidad y rapidez quiero destacar que por desgracia no quedan muchas personas como las que nos han ayudado. Destaco por tener siempre una sonrisa y una profesionalidad a los sres Karim y Juan a los cuales les agradezco que estén en ésta labor.\nUn fuerte abrazo y saludos de unos clientes muy pero muy satisfechos",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Jiménez Escalante",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVm7_OYDUOylkgdtCDe7pfoxyHveo_Rel_Gh1nDpvPZYy9jvEU=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Sitio muy  fácil  de llegar en Málaga y también  nos costó  poco aparcar, quizás  por suerte. Trabajadores muy profesional y Juan nos ayudó  mucho con sus consejos a la elección  de las gafas. Tendré  que recogerlas en dos semanas y espero me vaya bien con las graduadas.",
        Images: null,
        When: ""
      },
      {
        Name: "A. F. A.",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLaPbieMrDDHZQrvk55hKmC4Hp-4p2ixWlrnyfulp5sW8uHcA=s120-c-rp-mo-ba4-br100",
        Rating: 1,
        Description: "Muy mal servicio postventa. Después de comprar unas gafas y tras pasar menos de un año se rompen las monturas y me dicen que las garantía no lo cubre. La solución que me dan es que compre otra nueva montura. No lo recomiendo",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Natural Visión Málaga",
    category: "Optometrista",
    address: "Calle Ayala, 67, Carretera de Cádiz, 29002 Málaga",
    description: "Esta óptica es muy apreciada por su trato excepcional y profesionalismo. Se destaca la paciencia y el seguimiento personalizado, especialmente en la adaptación de audífonos. Los comentarios resaltan la amabilidad y atención del equipo, así como la búsqueda de soluciones a medida. Además, se menciona la realización de eventos especiales y un ambiente acogedor.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      martes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "10:00–13:00"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:00"
      ]
    },
    website: "http://naturalvision.es/",
    phone: "952 33 97 67",
    review_count: 67,
    review_rating: 4.7,
    latitude: 36.705343,
    longitude: -4.436247,
    user_reviews: [
      {
        Name: "Juan Jesus Montenegro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLwHuGM3EhaQ57F9_LDQ0leF3OGvJTAEv7tvuqM-hnGcrHWng=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Ahora se cumple un año justo desde que\u00a0 me puse los audífonos. En este año me han hecho seguimiento, limpieza y cambio de configuración según me iba adaptando a ellos y las necesidades que me encontraba en distintos ambientes (Gracias Andrea por tu paciencia infinita). Parece una tontería pero volver a escuchar los coches que se acercan por detrás o poder distinguir de donde vienen los sonidos no tiene precio.",
        Images: null,
        When: ""
      },
      {
        Name: "JOSE JUSTO ALVAREZ TINAUT",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJHHBZLYdNvfiWhKM6FEQ-nB-fmrLWu8uVJDaMc1zpFQVDG8w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "he empezado a usar unos audífonos. La sorpresa ha sido muy favorable. Mantienen el oído externo abierto, sin ninguna capsula que lo bloquee. Solamente una cestilla blanda y muy ligera para sujetar el altavoz. Eso permite que tu oreja y oído sigan activos y el audífono solamente me refuerza las frecuencias que tengo debilitadas por la edad. Los micros y batería son un pequeñísimo aparato detrás de la oreja unido al altavoz por un inapreciable cablecito. Además lo controlas desde el móvil para usar los completos menús adaptativos o conectarlo a tv o móvil, lo que es innecesario, ya que tu oído ha recuperado su normal actividad. Tiene batería recargable, con su correspondiente cargador, que dura todo el día. La comparación con los tradicionales que usan una capsula estanca que te anulan toda audición directa, es como comparar una prótesis de pie con unas plantillas para corregir una malformación. Los profesionales de esta óptica son 5 estrellas.",
        Images: null,
        When: ""
      },
      {
        Name: "Victoria Busso",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXrvdtlsYuKGa_r2OKJGQpvTw1Dey5hcL8sByRbJyzMLG19MnI=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Nos han atendido maravillosamente con mi hijo Jordi. Las chicas son un encanto, súper atentas, muy pacientes y cariñosas con los pequeños. Recomiendo 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "Irene G",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLInOrInD1wkPGWc7KY7SJRo5YM0ITPiEa87JFqCAXL6YWKXw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor óptica de toda Málaga, hacen eventos en fechas especiales y todo, un trato estupendo, no se puede pedir más, además súper rápidos",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMQHDl3-A_PBv7TkhPR9mmALoRobYbcfGK9Gen3&fid=0x0:0xd498dbe02d41e6f6"
        ],
        When: "2023-10-31"
      },
      {
        Name: "Sabina Guizzo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUZA1OoP1r8to2Zac4_3L_VsPcCXR2OmIdRq_aPCVQbsfIsGuLZ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Soy cliente desde hace muchos años de Natural Visión. Aunque viva muy lejos, confié en Quino y Andrea la salud y el bienestar de mis ojos y la de mis hijos. Juntos con sus chicos, son un equipo preparado, cuidadoso y atento a las exigencias del cliente. Buscan diariamente las mejores soluciones para tus problemas y te atienden puntualmente antes, mientras y después de tu consulta. Los recomiendo",
        Images: null,
        When: ""
      },
      {
        Name: "Francisca A.",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKEwBVge1x6KBki9KNB5glGTo1szLy-IcWRcAm3cEGy8ceK2w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "(Llegué a este centro con mucha ilusión, por las referencias y por lo completo de la revisión visual que me hicieron pero en la práctica han sido los 400€ peor gastados de mi vida) Esta fue mi primera reseña pero la respuesta de Kino me motivó a volver y creo que se está solucionando. Muchas gracias por vuestra buena disposición y paciencia.",
        Images: null,
        When: ""
      },
      {
        Name: "Mari Carmen Montano López",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLC7F-XobAGUL11ORJhzflVB02tiFeAkPNqQZ5h1uBiweHnMQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estamos encantados con la atención de todo el equipo. Un trato muy profesional. Cuidan tanto de sus clientes que incluso hemos podido asistir al Festival de Cine de Málaga con entradas gratis.\nMuchas gracias por todo.",
        Images: null,
        When: ""
      },
      {
        Name: "Monica Blanco",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKVo1OAHnLbffQz7hfuXhqdO2-2_UXTNLgbHd1Ltm_GHqKXRQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Optica excelente y con una formacion siempre al dia, tanto en investigacion nacional como internacional. Llevamos meses con ellos utilizando sus programas de intervencion auditivo y visual para el desarrollo de nuestro hijo y estamos muy contentos. Es un trabajo arduo y largo, pero nos sentimos muy acompañados por todo el equipo con su experiencia y profesionalidad y los resultados que estamos viendo. Excelente trato y equipo!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Optica2000 Hipercor Bahía Málaga",
    category: "Óptica",
    address: "Hipercor Bahía, C. Hamlet, 5, 29006 Málaga",
    description: "Esta óptica recibe opiniones diversas. Algunos destacan la profesionalidad y amabilidad del personal, mencionando nombres como Mariluz, Isabel, Esther, Elisabeth y Paqui. Se valora la atención detallada y la búsqueda de la mejor opción para cada persona. Sin embargo, una experiencia negativa relata la rotura de una montura durante el cambio de cristales y una respuesta insatisfactoria por parte de la tienda.",
    serviceRatings: {
      atencionCliente: 4.3,
      profesionalidad: 4.5,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://www.optica2000.com/buscar-opticas/malaga/optica-2000-el-corte-ingles-malaga?utm_campaign=gmb-website&utm_source=google&utm_medium=organic&utm_content=27-M%EF%BF%BDlaga-Calle-Hamlet-2&y_source=1_MTA4MTk3Mjg5Ny03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    phone: "952 04 01 21",
    review_count: 22,
    review_rating: 4.5,
    latitude: 36.709758,
    longitude: -4.462557,
    user_reviews: [
      {
        Name: "Alberto Aranda",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKy_CQ9UAkzwE62Fywpf-o8fFfVjiUt7FBQs0bA6l1X_G9wSA=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Fui a cambiar los cristales de mi montura al aire, manteniendo la montura, el trato fue muy agradable, pero al recoger la gafa, la patilla se había roto, la había pegado con pegamento, y en ningún momento me llamaron para informarme, su respuesta fue que la patilla estaba ya rota...(Mentira) Y la solución, que me comprara otra patilla (150 euros) o me comprara otra montura. La verdad que no me esperaba en ningún momento que iban a responder de esa manera. Muy educadamente me mordí la lengua y pagué los cerca de 400 euros que costaron los cristales. Pagué un sobrecoste pensando que tendría seriedad al ser una cadena grande y con recorrido y descubrí que todo son buenas palabras hasta que tienen un problema y se lavan las manos. Envié también un email a la central, y sigo sin respuesta...",
        Images: null,
        When: ""
      },
      {
        Name: "Jorge ortiz Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJhG9NY06sST_IimiwA7uRRknEVrqYp5Gg-JDCXr-AiijuhTbDF=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Hoy viernes 05/07/24, hemos recogido una compra de unas gafas\u00a0 online.Hemos ido a óptica 2000 donde nos ha atendido la encargada llamada Mariluz.\nHacía año que no nos atendían con tanta profesionalidad con una sonrisa en la cara se nota que le gusta su trabajo encantado de haberla conocido y que el corte inglés así como óptica 2000 tenga buen personal que es la filosofía y la base de una empresa",
        Images: null,
        When: ""
      },
      {
        Name: "Javier Morales",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWbHNPSt0P7VJs4yAzSwwC6k_j-IQJkodWijSWPgh82-tAPYRL7=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Recientemente he acudido a este centro para dos gafas, las de mi hijo y las mías propias, la atención en todo momento muy profesional y los plazos en pocos días las entregaron. Seguiré usando sus servicios. Gracias Isabel, Esther, Elisabeth y alguna otra compañera que ahora mismo no recuerdo el nombre.",
        Images: null,
        When: ""
      },
      {
        Name: "cecilia w",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVDJ6RGEYXb8J1D7ECSR0hLURtd3JSpWys9Io4ghe6hE5p5Df1s=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me atendieron muy bien sin prisa y haciendo un control de vista muy amplio. Luego me dieron mi tiempo a elegir que montura quieria... muy contenta ...",
        Images: null,
        When: ""
      },
      {
        Name: "david (Cartero)",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWu2o6QexVQ5Fom27vFjVBh1TbfEcxCChe6UxJgATYlZh-vOq2I9A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me atendió Paqui, muy amable y profesional. De diez.",
        Images: null,
        When: ""
      },
      {
        Name: "Charo Lopez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVchg6pvbHfM6Ciji8gLy_QB0Of5qr8yXelNKpUWqWGuhKSKHypRA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Sorprendida con el trato de Isabel ( simplemente espectacular) por estar situada dentro del bahía Corte Inglés digo veras la clavada y al revés te busca la mejor opción te da consejos según tu rostro según dioptrias vamos me a encantado sin duda la mejor óptica en la que me he graduado la vista además ella súper humana . Isabel te vuelvo a dar las gracias!!!! Lo que tu me hicistes pocas personas lo hacen!!!!! Fui con gafas rotas y sin lentillas y Isabel me pregunto... Pero como estas así, con las dioptrias que tienes no veras nada???? Ven que te apaño mientras llegue tus gafas y me dio unas lentillas lo más próximo a mi graduación que a mí me an válido y de mucho!!!!!! Gracias Isabel!!!! Paqui fantástica también!!!!! Besos para las dos!!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Vero F",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ85a21BpPV1zmqRBrr06SfFMNfN4L7wCU2QijAIcUIv4dGNw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Nos han atendido de forma exquisita. El Sr. De Linares ha sido muy agradable y de profesionalidad excelente.",
        Images: null,
        When: ""
      },
      {
        Name: "Rocío T",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJR-Z1_3qaW6YsVWIeP3f5wFiMcVOSPsTPwuTyAiPpqdOpuTQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Son unas profesionales y encantadoras. Concretamente Isabel, la óptica, es atenta e inspira confianza.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica la Luz",
    category: "Óptica",
    address: "Av. de Isaac Peral, 17, Carretera de Cádiz, 29004 Málaga",
    description: "Esta óptica de larga trayectoria es altamente recomendada por su excelente trato y profesionalismo. Los usuarios destacan la amabilidad y atención del personal, mencionando especialmente a Jose y Maxi. Se valora la calidad-precio y las facilidades de pago. Además, se percibe un cuidado especial hacia los más pequeños y la disposición para atender urgencias.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "Cerrado"
      ],
      lunes: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      martes: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "Cerrado"
      ]
    },
    website: "http://www.opticalaluz.net/",
    phone: "952 23 96 84",
    review_count: 49,
    review_rating: 4.8,
    latitude: 36.696222,
    longitude: -4.455825,
    user_reviews: [
      {
        Name: "DESIREE BELLIDO",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXN2kW94WwoQ7Oh_cIm8ofqC1wU9nDigguaP_PZT-eSFk8m2yM=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Son fabulosos, desde que llegas siempre super atentos con una sonrisa y buenas palabras. Mi familia vamos desde pequeña al tema de la óptica y hace poquito fui con mi madre para lo de los audífonos y es que le han cambiado la vida. Cómo trato Maxi a mí madre , fue una delicia.\nSois maravillosos de verdad. Os deseo todo lo bueno",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen Anaya Avesada",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUxFjJdkLpnlieRdDcDt2ncgvsQOIt0pQGjW5ljk7zxSysszHlp=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Gran profesional, calidad precio sin competencia. Siempre dispuestos ayudar. Vivo lejos pero siempre acudo a ellos.",
        Images: null,
        When: ""
      },
      {
        Name: "Yolanda Sanchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocII75XdjC2x7k8UjTGElbs-nj5CMYG_qpPRvnbH0U1dfFeItA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Soy una clienta de muchos años. Siempre me han atendido Jose o Maxi con amababilidad y profesionalidad. Los precios son muy buenos y las facilidades de pago también. Gracias chicos por atender a mi madre cada vez que tiene una urgencia.",
        Images: null,
        When: ""
      },
      {
        Name: "AdrianaCeNav",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW81VxI-CyaEfXK840Oi-TOwnf3eDXBKfgsE9Z1VHcMaUmV-n_a=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Debo señalar que el trato con sus clientes es espectacular, de 10. Yo los conozco de hace poquito, llevo a mis dos hijos y les han dado el mejor trato en una óptica desde que llevan gafas.\nMe recomendaron la óptica con las siguientes palabras, lleva a los niños alli que son unos máquinas, y lo confirmo👍👏👏 Unos muy buenos profesionales a los que se ve que les encanta su trabajo. Gracias!!",
        Images: null,
        When: ""
      },
      {
        Name: "Irene Santos",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV-IxvO199zaB2gbxrUneM7L_gKFSNrNijc38tyKZ243aA4Esy1=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo años comprando mis gafas y lentillas con ellos, la amabilidad con la que te tratan y las facilidades que ponen hacen que te sientas cómo en casa. Siempre tienen los últimos modelos en todo y saben aconsejarte y resolver todas las dudas que puedas tener.",
        Images: null,
        When: ""
      },
      {
        Name: "Juan David Lasanta García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWYIks2nuOA-rrj2JzoxWvXSBUvUzvJ0kOmlQDitzT-GDMGDKweFQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un servicio excelente en una óptica de las de toda la vida. Voy a ella aun teniendo que cruzar media Málaga para llegar.",
        Images: null,
        When: ""
      },
      {
        Name: "Leticia Rodríguez Martínez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXb2RMAYaOu5jTwfOU3Qn4y4jpDmGqcyYcCNjm_7Pc6wzOwUaef=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es mi óptica de confianza. Son grandes profesionales, muy amables y con un trato personalizado exquisito. Muy recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "MARIA JESUS RP",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI8HHOleaZrUDugYtsLFeBeEwAfaal8vaRHdgMf4SgsAAgCLw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor óptica de Málaga, mucha variedad de gafas y sobre todo el personal son super amables y el trato a los niños excelente!!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Barbarela",
    category: "Óptica",
    address: "Av. Imperio Argentina, 6, Carretera de Cádiz, 29004 Málaga",
    description: "Esta óptica es muy elogiada por su excelente atención y profesionalidad. Se destaca la dedicación y preocupación por la calidad visual, con menciones especiales a Rosa, Ana y Cristina. Los comentarios resaltan la eficacia para encontrar soluciones, incluso en casos complicados, así como el buen asesoramiento en la elección de monturas y la amabilidad del trato. Aunque una opinión menciona precios algo más elevados, considera que el servicio lo merece.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "16:00–20:00"
      ],
      lunes: [
        "9:30–13:30",
        "16:00–20:00"
      ],
      martes: [
        "9:30–13:30",
        "16:00–20:00"
      ],
      miércoles: [
        "9:30–13:30",
        "16:00–20:00"
      ],
      sábado: [
        "10:00–13:00"
      ],
      viernes: [
        "9:30–13:30",
        "16:00–20:00"
      ]
    },
    website: "http://barbarela.com/",
    phone: "952 17 63 29",
    review_count: 21,
    review_rating: 5,
    latitude: 36.682805,
    longitude: -4.455935,
    user_reviews: [
      {
        Name: "Paty Alba Dors",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVCLAkphzo9bDedwGxDE3_3smYZsWH-n7n7IgPIVIENTzhI34JD=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Quiero agradecer a Rosa por el trato, la atención y la profesionalidad que tiene. También al muchacho que me asesoró para mis gafas. Soy usuaria de gafas y lentes de contacto desde hace bastantes años, y hacia mucho tiempo que no encontraba a personas que se preocuparan tanto por la calidad visual del cliente. Gracias Rosa y compañía!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Salvador García Bravo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLm0n1NlXdW9mb3JYqphIKnb696SnDHHOjs3rv7czHpLVXIXQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Quiero agraceder a Ana Gonzalez (ese dia estaba en Imperio Argentina) su gran ayuda pues venia de otra optica con unos progresivos que no me terminaba de sentir cómodos con ellos.\nMe solucionó el problema con unas gafas digitales de 1,25 de adiccion, ella me decia que habia empezado muy pronto en los progresivos y que con mi graduacion me vendria mejor las otras.\nAcertó de lleno parece que en vez de gafas estoy estrenando ojos nuevos! Muchas gracias!\nTambien dar las gracias a Angel Donaire, que me asesoro muy bien en las monturas de las gafas, tanto\u00a0 en diseño como en comodidad 10 de 10!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Yolanda Jimenez Martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXjxDMneQT3v-rPo6DIGWV8kT_JkT4UrtsOB2XHe0w9q1hao32o=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He ido en dos ocasiones y ambas he sido atendida súper bien. Ana te hace unas revisiones muy muy completas lo cual da confianza para comprar las gafas allí. Los precios son algo más elevados que en otros sitios, pero el servicio lo merece la verdad. Lo recomiendo",
        Images: null,
        When: ""
      },
      {
        Name: "Rosa espada hinojosa",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLOuLt6nKCOCuIOR1vyn85BTOmxDTTbX_cySppq-vHUGNp0yw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me encantó el trato y la atención, muy contenta con mis gafas nuevas y lentillas. Son muy eficaces y profesionales. Mi caso era complicado y me supieron encontrar la solución. Gracias Cristina especialmente.",
        Images: null,
        When: ""
      },
      {
        Name: "Práxedes Martinez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLkvod5yEkTxc0cfmKrcAsm5lGHArSHhNW2sHS86K4FiU_2pw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Siempre que he ido me han tratado genial, han acertado con lo que necesitaba, buenas exploraciones y poseen de buena maquinaria. Cristina súper agradable y muy buena profesional. Una óptica de confianza. Gracias por vuestra atención",
        Images: null,
        When: ""
      },
      {
        Name: "Charly Lacambra",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXkPhrX8uQbiKCQcPlLCmkE4Zqau2lOtD66-2T9FFtlOX5nZlM=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hola\nHe ido a mirar unas gafas de sol y me han atendido con gran profesionalidad y me he llevado unas gafas muy buenas. Seguro repetiré\nGracias Cristina!",
        Images: null,
        When: ""
      },
      {
        Name: "Eduardo Lozano",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUGp8kwsU1xjwyIQ56HOFRXDw_U5tWk0Ql7P0rvz0bLtTVZhLAYkQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato maravilloso! Que ya eso hoy en día es muy necesario. Y además unos productos de primera calidad. La recomiendo y volveré. Muchas gracias",
        Images: null,
        When: ""
      },
      {
        Name: "Lourdes",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUeEvnoMXXJex1eJtHefrvNCbMM88_AW0zgm9CAkSY0e2xSic0=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Siempre voy a esta óptica porque me da mucha confianza, Cristina me gradúa genial y me aconseja estupendamente.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
{
    title: "Visionlab",
    category: "Óptica",
    address: "C. Prta del Mar, 13, Distrito Centro, 29005 Málaga",
    description: "Visionlab recibe opiniones diversas. Algunos clientes elogian la excelente atención y el buen asesoramiento, destacando la variedad de monturas. Sin embargo, otros reportan problemas como desidia en el servicio, retrasos en la entrega, gafas mal alineadas y falta de soluciones ante reclamaciones con lentillas.",
    serviceRatings: {
      atencionCliente: 3.5,
      profesionalidad: 3.5,
      precio: 3.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–21:00"
      ],
      lunes: [
        "10:00–21:00"
      ],
      martes: [
        "10:00–21:00"
      ],
      miércoles: [
        "10:00–21:00"
      ],
      sábado: [
        "10:00–21:00"
      ],
      viernes: [
        "10:00–21:00"
      ]
    },
    website: "http://bit.ly/2CX9OEZ",
    phone: "952 60 04 95",
    review_count: 142,
    review_rating: 4.6,
    latitude: 36.718247,
    longitude: -4.422676,
    user_reviews: [
      {
        Name: "paul marina",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXXqI8BeyAUJ4lPeW9kDz1h6m0wFz7CeS8ZHRBknoOBkq3nD3Vx=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Me atendieron estupendamente, muy amables y me asesoraron en todo a la hora de comprar unas gafas progresivas con el clip solar, que es muy práctico. Disponen de una gran variedad de monturas, mi madre va a ir pronto porque necesita un audífono.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNgAWOijattjKXyPSTKaZ2MrSq6Kj54vSUku6_0&fid=0x0:0x4c9320102c037695"
        ],
        When: "2024-7-16"
      },
      {
        Name: "Mónica María Ortega Fernández",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXZygz974MFrmmbm2m7rQwgpcEBqTQYGpfbGgYNJArx8VLN2hk58Q=s120-c-rp-mo-ba4-br100",
        Rating: 1,
        Description: "Desidia en general. Compro unas gafas, me dicen que tardarán 3-4 días, pasan los días y no están, pasan casi dos semanas y voy a quejarme y entonces sí que estaban pero guardadas en un sitio que no miraron la anterior vez. Luego me doy cuenta que están mal alineadas, voy a que me las corrijan, me dicen que las personas somos asimétricas... Le digo que he tenido ya muchas gafas y con ninguna me ha pasado, me miran como si estuviera loca y me dicen que si el color, que si el material..., le insisto que jamás me ha pasado con otras gafas, me dobla un poco la patilla y ya se quedan bien. ¿De verdad no le hubiera bastado con doblarla un poco al principio y me hubiera ido contenta? Ahora estoy cabreada con la tienda y no volveré ni la recomendaré",
        Images: null,
        When: ""
      },
      {
        Name: "Luismy Villa",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVFD-uHRs71UsFM_Gjlv77TE0vDW3xR-V1Hbnoc9cL9YAAh8lsR=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "¡Un trato excelente siempre que voy!\nLas dos chicas que me atendieron, geniales tanto en el asesoramiento como en el trato.\nMi óptica de referencia en Málaga.",
        Images: null,
        When: ""
      },
      {
        Name: "Katia Benko",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJJBS5IQUoVqdv6R2vfdFw7_rdVlBZyXeimZQf-8UJLX-AWnQ=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Me ofrecieron una caja de 3 pares de lentillas. Cuando las abro son solo 3 lentillas. Fui a reclamar y no me dieron ninguna solución y ningún arreglo",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipP9iaxpGxvDZ44twibkd6I8MQ9HTnfM6jKhbSxa&fid=0x0:0x4c9320102c037695"
        ],
        When: "2024-4-17"
      },
      {
        Name: "Juanma Rodriguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW8PrjeLH-Fjj5h6MDPZtAU74FKx3x4yLoGpGKUwPcEog8EnGdF=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buena atención tanto humana como profesionalmente.",
        Images: null,
        When: ""
      },
      {
        Name: "José Carlos López Romero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKt8-BTNlknJq7TFjVosolrYV8jYZ_s4GYeQ7myEU0jcIpfxg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Magnífico trato del personal cada vez que venimos. Una tranquilidad asegurada.",
        Images: null,
        When: ""
      },
      {
        Name: "Barbaa92",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWGGPJkWoAaWsHB8GoAqLgc9pdHoXSRfAIlDi0HNB9rm59CQgfD=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Fui a graduarme y el trato fue excepcional.",
        Images: null,
        When: ""
      },
      {
        Name: "Candelaria Palomo Carnero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLmz7xhvwW869zKv8qZPbf8WIKMMNhcezFOx9MGJeLwq3FCjA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estupendo trato y excelentes todas las trabajadoras.\nTe ofrecen soluciones hasta conseguir la opción mas adecuada.\nAconsejables 100%",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica y Centro Auditivo Soloptical Rosaleda",
    category: "Óptica",
    address: "Avenida Simón Bolívar, S/N, CC Rosaleda L B63A, 29011 Málaga",
    description: "Óptica y Centro Auditivo Soloptical Rosaleda, ubicada en el centro comercial Rosaleda, es muy recomendada por su calidad, precio, amabilidad y servicio. Los clientes destacan la buena variedad de monturas, la excelente atención de Carolina, Blanca, Rocío y Lara, y la buena relación calidad-precio. Valoran el tiempo dedicado a la atención, las recomendaciones útiles y las promociones.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 4.5,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://soloptical.net/es/optica-soloptical-en-centro-comercial-rosaleda/?utm_source=Google&utm_medium=google_my_business&utm_campaign=sitio+web",
    phone: "671 29 34 53",
    review_count: 381,
    review_rating: 4.9,
    latitude: 36.734189,
    longitude: -4.432709,
    user_reviews: [
      {
        Name: "José Carlos Ríos Gómez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWuomVxJLh-S0EjZDoNsM4NBawB5dL1ky35o0S3VwdjPqR5ffHUZg=s120-c-rp-mo-ba2-br100",
        Rating: 4,
        Description: "Pienso que de lo mejor que hay si buscas una buena óptica en tanto en cálida, precio, amabilidad y servicio. Chicas con buen trato conocimientos y siempre facilidades en todos los sentidos. Muy recomendable",
        Images: null,
        When: ""
      },
      {
        Name: "David J. Martín Hurtado",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWRRTcDLGt2OYz4Q3OiD58sC7zXpzfw-5R_-AjSJVRI4NcQQVQRbQ=s120-c-rp-mo-ba6-br100",
        Rating: 5,
        Description: "Un establecimiento genial para adquirir las gafas, tienen buena variedad de monturas, te atienden muy bien, y la relación calidad-precio es muy buena.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNb6VPbPaIv9ijJ5ErffE56gASaHbpXArxa25yz&fid=0x0:0x2dfb2632ee36034f"
        ],
        When: "2024-9-22"
      },
      {
        Name: "Lili Galván",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU8RllHHydxJc6q70o2xyYUX9Gtusn4elQs9qO3EX0660VeftsT=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente atención de Carolina y las demás chicas, se toman todo el tiempo necesario para atenderte.. Había promos así que triunfé, me gustó mucho el diseño elegido. En general muy recomendable. Gracias ! 😊",
        Images: null,
        When: ""
      },
      {
        Name: "Victor Albarracin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUui1ifDcba2eMVnKeVw_iVi4WobS4dBZCqn-g4DAG9ISk5myu1BQ=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Buena atención por parte de Carolina y Blanca.  Fui a por unas gafas y me asesoraron muy bien sobre los modelos, y me graduaron super bien.\n\nSobre las gafas, tienen mucha variedad. Para todos los gustos y colores.\n\nSin duda, repetiré.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOhCMiDJNqx4xfklsq-oKrYb5L8nbOf_z6PhFPN&fid=0x0:0x2dfb2632ee36034f"
        ],
        When: "2024-8-18"
      },
      {
        Name: "Gema Castillo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLSWe259OzOaCyqqJkZ5jzyc-y540c4_FQD_jU9Id3MxgpRqw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Había llamado por teléfono para informarme sobre el precio de unas lentillas y me habían recomendado que me pasara mejor por la tienda físicamente.\nHe sido atendida por Carolina y le he explicado mi caso y mi problema con las lentillas , como llevaba mucho tiempo sin graduarme la vista, me ha recomendado hacerlo ayi mismo en el momento y ya en base a eso ofrecerme algo más adecuado.\nMe ha graduado la vista la Óptica una chica llamada Blanca y me ha ofrecido la mejor opción para mi.\nFinalmente las he comprado , ya que tenía un descuento que podía usar en Soloptical.\nMe ha gustado el trato recibido por parte de ambas ,cuando uno va a comprar algo con dudas y recibe un trato agradable y cercano, ayuda a que se quiera volver a un negocio.",
        Images: null,
        When: ""
      },
      {
        Name: "Acuario Teatro",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUNjM50r4fCJ552YIfBGXzx3n5-qqE2Bj6TvkQnAie40TWZbbZMBg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención por parte de Carolina fue estupenda. Muy amable y simpática, nos informó de las ofertas y nos hizo recomendaciones según nuestras necesidades.",
        Images: null,
        When: ""
      },
      {
        Name: "Francisca Heredia",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJZhsoSJN-MX3KeerKCH6bqoRNBJ6vHYHsBkV3k7iHlrd6a7Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente trato de las chicas siempre. Super contenta con ir allí siempre. Rocío y Lara las chicas que me atendieron fueron muy amables y profesionales.",
        Images: null,
        When: ""
      },
      {
        Name: "Oscar Ivan Perez Lopez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI3AwIAVV2cK0e4dHPI6fNWvnTI4dl8OPiuVKfnl-YgN9-BLQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy contento con mi compra. Me recomendó Carolina unas gafas para hacer deporte y otras para vestir más de casual, me gustan como quedan y por una buena oferta. Muy recomendable. Siempre es muy importante quien te recomienda.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Opticalia Cuarteles",
    category: "Óptica",
    address: "C. Cuarteles, 17, Distrito Centro, 29002 Málaga",
    description: "Opticalia Cuarteles ofrece un trato exquisito, amable y muy profesional, asesorando lo mejor para el cliente y generando confianza. Muchos clientes son fieles a lo largo de los años, destacando el trato de Erminda. No obstante, una reseña reciente señala un cambio negativo en el servicio, mencionando el cobro de lentillas de prueba marcadas como \"Prohibida su Venta\".",
    serviceRatings: {
      atencionCliente: 4.0,
      profesionalidad: 4.5,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      martes: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:30–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "17:30–20:30"
      ]
    },
    website: "https://www.opticalia.com/es/tiendas/opticalia-cuarteles",
    phone: "952 33 23 00",
    review_count: 78,
    review_rating: 4.8,
    latitude: 36.714445,
    longitude: -4.427275,
    user_reviews: [
      {
        Name: "Rosa",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL7oIb4XKSWbAsL7guesVMuCMvOtAMm95LuJcKNRCarUrCRKw=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Llevo yendo a esta óptica desde enero del 2009, siempre me han tratado de lujo sobretodo Erminda que es la dueña, a mí y a mi familia entera.\nPero estos 2 últimos años voy por necesidad y por no cambiarme, ha cambiado muchísimo.\n\nEl colmo fue cuando el otro día pedí unas lentillas nuevas para probarlas a ver que tal me iban, y me cobraron 20€ por 2 lentillas de prueba, me pareció bastante raro y me dijeron “que ahora se cobran”, como tenía referencias positivas de estas lentillas decidí pagarlas porque tenía bastante interés en ellas.\n\nMi sorpresa fue que al recogerlas y llegar a casa, vi una anotación clara en las cajas de \"Lentes de Prueba\" \"Prohibida su Venta\".\nAún estoy flipando, este obviamente es el punto final, y no volveré.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMqIzYddZIFtBYKXJ7Cnl-tUFnhe9uSxeQX3rx1&fid=0x0:0xd56bcb42db1511a"
        ],
        When: "2024-7-2"
      },
      {
        Name: "Juan Pablo Diaz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKLl2qKTuJGlSYZrHL5BlvZNBe-1HviPwgLwWIksxxQLIrMNw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Trato exquisito, amable y muy profesional. Aconsejando lo mejor para el cliente.\nMi óptica de confianza.",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Ana",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJKDle3Aal8T9DIkldZUOSOgiCFqtacF7GCzgu7niYMroRQpQ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Óptica 100% recomendable tanto por la calidad de sus servicios como por los grandes profesionales que son. Acudimos desde hace años por un caso de grandes dioptrías, siempre nos han ayudado y facilitado todo, así como la fiabilidad en la revisión y eso nos da mucha tranquilidad. Gracias por todo.",
        Images: null,
        When: ""
      },
      {
        Name: "Vane Morales",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKlLYLJ46KbOaptxCwNb8wjAMvdpfvmVJS8fAtuB5wBYHR2NQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lo recomiendo 100%,  son grandes profesionales y su atención es estupenda.",
        Images: null,
        When: ""
      },
      {
        Name: "Rafael Sanchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWxAMzndBFoF15DMIQb8bcbULjzsqq7zAu71Q9K2rPHRXjPxzA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy simpática muy amables  atento y muy guapas las trabajadoras???recomendado",
        Images: null,
        When: ""
      },
      {
        Name: "Ana S",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK_M8M8DJnpHzUREL2MWpK9YswH_m_Z5Bl1-G7_GGApJN60Jg=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "La atención es de diez, no es una tienda de gafas sino una óptica donde priman los profesionales y buen hacer, encima con un trato y cercanía inmejorables. Muy muy satisfechos, tanto es así que detrás mío también han acudido mis padres, hermana y mi niña de sólo 4 años . Todos igual de satisfechos. Se ha convertido, sin dudarlo, en nuestra óptica de confianza para toda la familia",
        Images: null,
        When: ""
      },
      {
        Name: "Natividad Galvez Muñoz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKxuBaVCAgUf64T9YvqOwt4qXHlu1oa2jXL1PnZCgyjqJ65=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena atención!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Paco Fdez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKcrw6H_wdXmFrnLdLgmu7XlL1-sW7UhmGoPt2YoVR3qZQN9Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy contento por haberlos elegido como óptica. En todo momento me asesoraron y se notaba que no iban a intentar venderme lo más caro, al contrario, en lugar de unos cristales más caros me recomendaron otros más económicos que se ajustaban más a lo que yo necesitaba . Si duda lo recomiendo",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Evisión Ópticas & Audición Martínez Maldonado",
    category: "Óptica",
    address: "C. Martínez Maldonado, 59, Bailén-Miraflores, 29007 Málaga",
    description: "Evisión Ópticas & Audición Martínez Maldonado es muy recomendable por su excelente servicio, profesionalidad y amabilidad del personal, especialmente Carmen y Pepe. Los clientes destacan los buenos precios, la gran variedad de gafas y la atención personalizada. Muchos consideran que ofrece la mejor calidad y servicio en Málaga.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      martes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "10:30–13:30"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:00"
      ]
    },
    website: "http://www.opticasevision.com/",
    phone: "951 53 13 61",
    review_count: 107,
    review_rating: 4.9,
    latitude: 36.721194,
    longitude: -4.436514,
    user_reviews: [
      {
        Name: "antonio jesus garcia dominguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL90yKdFzKC1rUdjzkcQwv7sUQLHnq7oso7xMUfvrfGhtNu5g=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "¡ Genial ! Somos cliente de hace tiempo , son excepcionales tanto carmen como pepe , te atienden super bien y te asesoran en todo. Muy recomendable .",
        Images: null,
        When: ""
      },
      {
        Name: "Elena Garcia-sotoca aicart",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLtBrYWR1pTPLm-Q9QaRnnKg6UZsHVVq1WXG_3D_cWWARkcpw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Super profesionales, muy buenos precios y super atentos. Me he sentido muy agusto. Un trato de 10!!! A partir de ahora mi óptica de confianza!",
        Images: null,
        When: ""
      },
      {
        Name: "Sandrinha Galilei",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUIztZSDqduPGvSMZf4A4WQ5padOVizLIpHYUfUU4rbqGP8sds=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy recomendable, atención formidable, profesionales muy amables y atentos, gran variedad de gafas y precios.\nSin duda, volvería a repetir.",
        Images: null,
        When: ""
      },
      {
        Name: "Maru Sanchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLFKIPD4PcR06P7tb6Cp_j000A7M3WtBnV6bfM17KK1SQ0Acg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buenos profesionales, amables y atentos. Buena calidad y buenos precios. Sin duda la mejor óptica de Málaga",
        Images: null,
        When: ""
      },
      {
        Name: "disney love",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIb1FiY0TSuLF5jMuUvYHKMyEmvce0TdfFybJ81hHTeXV0d7A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Encantada con el descubrimiento de esta óptica. No puedo estar más contenta con mis gafas. Me costó mucho encontrar una óptica con marcas de gafas diferentes. Agradecimiento especial a Carmen y Pepe.",
        Images: null,
        When: ""
      },
      {
        Name: "Curro Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJjDmaP_Jn0DSKjnoY3Ll51QNNI27W9U6auYkO6qLxmG2rOug=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Fuimos a por unas gafas para mí hija de 8 años y nos atendió Pepe. Fue muy atento y nos ayudó muchísimo con recomendaciones y asesorandonos. Volveremos a repetir cuando nos haga falta.",
        Images: null,
        When: ""
      },
      {
        Name: "YAGÜE",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVnPToQ5awjeahXoNIbQk4tChRkqVjpRWn_46fmY2XpzsPxR_TI=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Pepe, es una persona maravillosa. Muy profesional y atento al detalle de todo. Me ha asesorado en todo desde hace unos años y estoy super contento de haber topado con esta optica. Recomendado 100%. Tienen calidad, profesionalidad y trato excelente. Ya soy cliente fijo y volveré siempre que necesite unas gafas, lentillas… gracias Pepe",
        Images: null,
        When: ""
      },
      {
        Name: "Noe M",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKKGjhblA1cy2stUF4ZOoCOIOc13rZJURwPX1LXO9QsW7mvVQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Necesitaba unas Orto K para las oposiciones y la verdad que todo ha sido fantástico. Unos grandísimos profesionales y el trato es de 10.\nPrecios muy económicos y puedes confiar en ellos.\nCalidad-precio insuperable.\nSe han convertido en mi óptica de confianza.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Miramar",
    category: "Óptica",
    address: "Av. Pío Baroja, 18, Málaga-Este, 29017 Málaga",
    description: "Este establecimiento óptico es reconocido por su estudio visual rápido y una atención magnífica para encontrar el estilo de gafas deseado. Se destaca la buena relación calidad-precio. Algunos mencionan un servicio muy agradable y profesional, mientras que una opinión señala precios elevados y otra indica que el local estaba cerrado sin previo aviso.",
    serviceRatings: {
      atencionCliente: 4.5,
      profesionalidad: 4.5,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:30–20:30"
      ],
      lunes: [
        "10:00–14:00",
        "17:30–20:30"
      ],
      martes: [
        "10:00–14:00",
        "17:30–20:30"
      ],
      miércoles: [
        "10:00–14:00",
        "17:30–20:30"
      ],
      sábado: [
        "10:00–14:00"
      ],
      viernes: [
        "10:00–14:00",
        "17:30–20:30"
      ]
    },
    website: "",
    phone: "952 29 36 33",
    review_count: 10,
    review_rating: 4.4,
    latitude: 36.72013,
    longitude: -4.362539,
    user_reviews: [
      {
        Name: "Mayte Ruiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVoEmZQVWfoWIJu_zD5RaVoDcDtz88ht15_D__p5p0D51dix2lr=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "En la mejor óptica que he estado nunca. Te hacen el estudio muy rápido. Y luego atendiendo magníficamente dan con el estilo de gafas que quieres. Y lo mejor los precios . Voy a volver a comprarme también las de sol .",
        Images: null,
        When: ""
      },
      {
        Name: "Vicente Gomez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK9r3Hrcr34un9XUMnDXLoaURahkHDeIu67aswbhMePzi6l-Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Todo perfecto!!!, muy buenos profesionales y excelente trato. Precios muy asequibles",
        Images: null,
        When: ""
      },
      {
        Name: "Miguel Hernández",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVS_fsk52kkQGf_QLE3XnzJfLCB_jRzONUUonCSdYzlroZmD9w2=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Soy cliente desde hace más de 10 años. Muy profesionales y buenos precios.",
        Images: null,
        When: ""
      },
      {
        Name: "Malaga Local Guide",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLhtoDlaLWaZWNs64a4r_kgnzqtbATuO9gWF3YkqONy0ehB6w=s120-c-rp-mo-ba5-br100",
        Rating: 4,
        Description: "Mu buen servicio pero muy caro.",
        Images: null,
        When: ""
      },
      {
        Name: "Rioko JM",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLhjuo7gEhID9WxJ-dTW73kLrts7uiTuy43YlY1bmGdF5rnvQ=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Está cerrado, ningún cartel de vacaciones o algo que indique cuándo abren.",
        Images: null,
        When: ""
      },
      {
        Name: "Théa Beauville",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIhaJpKkhM8tMt0_uWQqvOtWPLZnb8x2OWnYu_Q4_UGG3mekw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Muy agradables. Muy buen servicio.",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio García Alvarez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXc-h46WoRjddbxUVDKN6N08X9PFIqlZ9n46M9Rlt51-kOy3xfy=s120-c-rp-mo-ba5-br100",
        Rating: 4,
        Description: "Buen precio.",
        Images: null,
        When: ""
      },
      {
        Name: "Phil Regnauld",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWD0kS6isWpm8iBLDdWJuLmSt52fWP57n6OA8QKQ5dJZ-sMtp_JSQ=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Replaced the screw on my glasses for free. Note that I hadn't purchased the glasses there !",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "LA UNIÓN Ópticos - LA LUZ- Tu óptica en Málaga",
    category: "Óptica",
    address: "Av. de La Luz, 36, Carretera de Cádiz, 29004 Málaga",
    description: "Este establecimiento óptico es altamente valorado por su magnífica atención y trato genial. Se destaca la profesionalidad del personal, que informa detalladamente y ayuda a elegir lo necesario. Los comentarios resaltan la amabilidad, simpatía y cercanía, así como la calidad de las gafas y monturas a precios inmejorables. La gestión de citas también es calificada como excelente.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      martes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–14:00"
      ],
      viernes: [
        "9:30–14:00",
        "17:00–20:30"
      ]
    },
    website: "http://www.launionopticos.com/",
    phone: "951 74 27 82",
    review_count: 200,
    review_rating: 5,
    latitude: 36.697423,
    longitude: -4.455129,
    user_reviews: [
      {
        Name: "Gustavo Garcia",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWoK4NaosAPRrs0HLS-BEpnOZ6mu61HdRORvLa3OcFmtVyVajRF=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "No sé de precios, tampoco entiendo de problemas de visión, ni puedo comparar con otras ópticas ya que es la óptica de mi misma calle, a la que van mis hijos y mi pareja, pues eso... He ido y me han puesto gafas, su trato ha sido genial, me han informado de todo, y he sentido bien pagado cada euro que he dado... Y encima veo todo mucho mejor que antes. Muchas gracias",
        Images: null,
        When: ""
      },
      {
        Name: "Angie So",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVrCG5fRM93QocABtdVDPCjX-F6TkIOYevbsoVe8gp64img8Ao=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Vine para lentillas de contacto aunque antes no pude llevarlas por la incomodidad que me dieron.(Eran de otra óptica y probé todas las variedades que hubo allí y nada )Esta vez de la primera me aconsejaron unas y están fenomenal. Además es precio es más que económico. Salen 60€ para 6 meses . Estoy muy contenta con el trato profesional de las chicas . Os aconsejo esta óptica . Los materiales son de buena calidad y eso se siente , los ojos no pueden mentir - las lentillas son súper finas que no las siento nada .",
        Images: null,
        When: ""
      },
      {
        Name: "Nieves Rojano Portas",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWED-fa3KsYjJ-XWXvVHsXsz556CrQZwkt05x64yt6FroqNeraF=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Muy buena atención y muy buenas gafas/ monturas. Fui hace poco a través de gafas.es y me atendieron de maravilla, las dos trabajadoras son super amables y simpáticas, me hicieron una revisión de la vista fantástica y el precio de las gafas inmejorable. Sin duda se va a convertir en mi óptica de confianza ☺️",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Enrique Nieves Carrascosa",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX-fAKPNm7ayLH_IR7xZ1DZPzDYk4ED2nV5vh8gVncNwlH3UMjI=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Una atención al público magnífico. Personal amable, educado y muy profesional. Te ayudan a elegir lo que buscas y necesitas sin agobiarte ni dirigirte. Son duda está óptica es una buena elección.",
        Images: null,
        When: ""
      },
      {
        Name: "Francisco Muñoz Martín",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI4MXN0AUmE5LF9wwt_Ab3aik4mv9iDVj3kB1CGS6Rx9Wv5kw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy amables las personas que nos atendieron y muy buen trato seguiré iendo allí si me hiciera falta.",
        Images: null,
        When: ""
      },
      {
        Name: "JANT DHOM",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW7UYFHPWAEc5WMAza-Hfcurw8Awapf04FpL3enI1xp7PIgt6FM=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Atención de primera por parte de Rocio, cercana, profesional, simpática ... La gestión de la cita de 10. El local amplio y luminoso. Perfecto.",
        Images: null,
        When: ""
      },
      {
        Name: "Ainhoa Tellez Gamez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVraw2mvZoN5ZsuAFSWllOiveJbTI3a7UwSNv3fNNsnciiurA6v=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato al cliente inmejorable, hay muchas monturas para elegir y a precios de todo tipo. Las trabajadoras muy simpáticas y agradables.",
        Images: null,
        When: ""
      },
      {
        Name: "Jotafett",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXEKQpJexzMlgLv2w1dT1UZyo12oWh_6ixGd1SGasvYREv80ZQj=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención fue espectacular y el trato y la forma en la que me ayudaron a la hora de elegir la montura de mis gafas muy profesional. Gracias por todo chicos ✌🏽😄",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Cocóptica",
    category: "Óptica",
    address: "C. Armengual de la Mota, 21, Distrito Centro, 29007 Málaga",
    description: "Este establecimiento óptico es muy apreciado por sus buenos precios y una variedad de gafas atractivas. La atención recibida es calificada como realmente amable, destacando la cercanía y profesionalidad del personal, incluyendo a la dueña. Se valora la rapidez en la entrega de las gafas y la disponibilidad de diversas opciones, desde las más económicas hasta las de mayor calidad, con modelos de gafas originales.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      martes: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "10:00–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:00"
      ]
    },
    website: "http://www.cocoptica.com/",
    phone: "951 07 63 30",
    review_count: 110,
    review_rating: 5,
    latitude: 36.719798,
    longitude: -4.429323,
    user_reviews: [
      {
        Name: "Claudia Rodriguez Sanchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVNpVaev5HwgV1GzWKR4vFK_ZReTrctg_ciAFjmVE3CAKcqvV8R=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi pareja y yo estuvimos recientemente comprando gafas para ambas.\nTienen muy buenos precios y variedad de gafas muy chulas.\nTambién he de decir que las dos chicas que estaban allí trabajando (una de ellas, la dueña creo) son realmente amables!!\nHa sido un placer encontrarlas\n\nY también decir que nos llamaron para recoger las gafas a los dos días. Realmente rápido!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNI75cIJpPQBg7OShHYSwZsFqXMx5tsxwrpKc2_&fid=0x0:0xfa75b16defeade7e"
        ],
        When: "2024-12-13"
      },
      {
        Name: "Alejandro Portales",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLuzXxfdqA1ZfsZSReK8N59CDPig0bepkKlSWyRjOcVvsdfFQ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Encontré de casualidad esta óptica, pero la recomiendo muchísimo, buena variedad de gafas, con buena calidad y buenos precios. Aunque, lo más destacable fue la atención al cliente por parte del propietario, amable, atento y cercano. Conseguí una óptica de confianza en muy buena ubicación!!",
        Images: null,
        When: ""
      },
      {
        Name: "A Mari Caro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIxdND-yxIlJ46Ro9RHd_WR5dwlQsLoJU5NQz7cDjcnqA3sbA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Encantada!!! con mis gafas progresivas. Te asesoran y eliges la opción que tu quieras, entre las\u00a0 diferentes opciones que tienen desde el más económico al de mayor calidad. Y los modelos de gafas son super originales. Mi óptica de confianza y recomendable 100%",
        Images: null,
        When: ""
      },
      {
        Name: "jenmugo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVfMr6qR8ikkquMaFcy_JwQ9DI1taRUXi7Bv4YBrZDJMULKYcevdg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención desde el primero momento de 10, estoy encantada con mis gafas.\nExcelente profesional, gran variedad de estilos y el local es maravilloso.\u00a0 Un gusto como siempre volver allí.\nMil gracias por el mimo y la amabilidad.",
        Images: null,
        When: ""
      },
      {
        Name: "Evelyn 2",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXWhMku3H3ercrrcFZLMW8Vhysyqrj5dAHoiI3f_p8D67LSLkHD=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es de las mejores ópticas de Malaga, está bien situada, la atención y paciente fue increíble y sobre todo lo más impresionante el precio económico y la rapidez y eficacia que tuvieron al traerme las gafas, la recomiendo al 100%",
        Images: null,
        When: ""
      },
      {
        Name: "Manuel Jesús Pérez Márquez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWObHRbGISOuUWO2_45Y9w31JUdb5iaMMK8K7VbMncS21Vv4iML=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Increíble! Súper contento con el trato que he recibido!!!\nSe me rompieron unas gafas y del tirón han respondido dándome a elegir unas nuevas!!\nUnas de las mejores ópticas!\nLa recomiendo☺️☺️",
        Images: null,
        When: ""
      },
      {
        Name: "Bárbara Emilia Fuentes",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKjGgxCZWv0C1VRHzAcFPzQxLcE1X9bexIyYu80LbVLp8bnmQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Pasaba casualmente por esta óptica y entre ya que necesitaba unas gafas nuevas para cerca, me atendieron muy amablemente, una chica llamada Ángeles, y me dio una oferta la cual comparé con las demás opticas de la zona y regresé ya que comparativamente era la más óptima. Para el encargo de las gafas me brindaron toda la ayuda técnica, de manera fácil y amable. Al final gracias a su profesionalidad obtuve las gafas en la forma y graduación de acuerdo a mis necesidades. La recomiendo 100 por 100 pues si lo necesitas te ayudarán sin dudas",
        Images: null,
        When: ""
      },
      {
        Name: "Lorena Pallarés García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUsG8tk6K5fZeM0dKP8hLcNJ2xHSO0VjDpTuvfYhgNrJj3UyGBS=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me hablaron muy bien de esta óptica, pero al ir ha superado mis espectativas. El personal es un encanto, te tratan súper bien. Tienen muy buenas ofertas y dentro de ella una variedad infinita de gafas donde elegir. Recomendable 10000%",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "VISTALIA Óptica Málaga Este",
    category: "Óptica",
    address: "C. Cristo de la Epidemia, 49, Distrito Centro, 29013 Málaga",
    description: "Las opiniones sobre este establecimiento son dispares. Algunos destacan una atención muy profesional, precios competitivos y un trato amable por parte del personal. Sin embargo, otros reportan experiencias negativas, como citas no respetadas con el local cerrado, mala educación por parte del personal y problemas con la calidad de las gafas entregadas.",
    serviceRatings: {
      atencionCliente: 2.5,
      profesionalidad: 3.0,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:30–14:00"
      ],
      lunes: [
        "10:30–14:00",
        "17:30–20:30"
      ],
      martes: [
        "10:30–14:00",
        "17:30–20:30"
      ],
      miércoles: [
        "10:30–14:00",
        "17:30–20:30"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "10:30–14:00",
        "17:30–20:30"
      ]
    },
    website: "https://vistalia.es/opticas/opticas-en-malaga/optica-malaga-este/",
    phone: "952 26 56 20",
    review_count: 58,
    review_rating: 4.6,
    latitude: 36.729303,
    longitude: -4.414811,
    user_reviews: [
      {
        Name: "César de Burgos Serrano",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLXSMstKmoroURftuaIVVyBGoffn-lFgNeq7n7FG5ITg3-ksIs=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "MENOS VERGÜENZA NO SE PUEDE TENER.\nOs cuento: Me citan para graduarme la vista el viernes 21/12/24 a las 10:30.\nMe presento a las 10:20 y el establecimiento se encuentra cerrado.\nA las 10:50 siguen cerrado.\nPregunto en comercios vecinos y me informan que los horarios de apertura que tiene Óptica Vistalia son anárquicos: que igual abren a las 10:30, que a las 11:00, que a las...\nAnte esa incertidumbre, y teniendo que continuar con mi actividad laboral (abogado de profesión) decido marcharme. Y mi sorpresa es cuando unos minutos después recibo el siguiente mensaje de ellos: \"nos hemos dado cuenta que no acudiste a tu cita de hoy\"; \"nuestro personal óptico ha estado esperándote, ya que habíamos reservado esta cita especialmente para ti!!\"; \"es una pena que no hayas venido a visitarnos...\"; ante esto yo me pregunto: ¿se puede tener menos vergüenza?\nMi respuesta fue que, precisamente, el problema no estuvo en no acudir yo, lo que sí hice, sino que su establecimiento se encontraba cerrado a la hora de la cita acordada: 10,30.\nSu respuesta fue: \"lamento mucho que hayas tenido esta experiencia en nuestra tienda\". \"Entiendo lo frustrante que debe ser esperar y no encontrar el establecimiento abierto...\". ¿¿¿Que entiendes qué???\nComo se aprecia, ya han cambiado de un primer \"nuestro personal óptico ha estado esperándole para su cita especial\", a un \"lamento mucho que hayas tenido esta experiencia en nuestra tienda...\"; ¡¡¡pero si hasta los establecimientos vecinos conocen -e informan- del anárquico horario de apertura que tenéis...!!!\nLo dicho: ¡¡¡MENOS VERGÜENZA NO SE PUEDE TENER!!!\n¡¡¡ESTABLECIMIENTO TOTALMENTE INFORMAL Y NADA RECOMENDABLE!!!",
        Images: null,
        When: ""
      },
      {
        Name: "EnriqueR",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX4lcocBZTXam_NY1sibMUWr0WFfDHStLSUOZigeAxbAJyV-Izr=s120-c-rp-mo-ba5-br100",
        Rating: 1,
        Description: "El peor servicio y calidad que he visto en años. Aparte de la mala educación de la dependienta, las gafas bifocales que nos entrega estaban mal ajustadas, no me valen y las tengo metidas en un cajón sin utilizar. Puntuación de 0 a 10: menos 10. Estrellas: 1 (porque no es posible poner menos).\nÓPTICA NADA RECOMENDABLE.",
        Images: null,
        When: ""
      },
      {
        Name: "Joan Naro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKmnAlMhXGnk8AF436pIZAwqCSmTzFSa27TWTNmpg-g1UGsXw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Han tenido una atención muy profesional, los precios son super competitivos, conmigo ya tienen un cliente consolidado. Recomendables al 100%",
        Images: null,
        When: ""
      },
      {
        Name: "Houssam Bouchir",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXFEtDp5NfQEds5BgWltOXJS45pS2qE74AXQf_pkRTGv08Ow3aB=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Todo muy bien, la doctora muy amable te ayude con todo, siempre contento con su servicio un 5/5!!",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Cortes",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIyCz7oCS5JiJHlNplOxH7CWJ7mmwAiAGphQul1O47oQ3LARwU=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Siempre vengo aquí a sacarme mis gafas. Un trato exquisito y unas gafas a un precio excepcional. Te las hacen en muy pocos días y te vas siempre muy contento.\n\nI’m always coming to renew my glasses here.\u00a0 She offers a great customer service at a very competitive price. You will get your glasses done in a few days and will leave with a beautiful smile and pair of stunning glasses. All the best for her.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNJg2w1bClHPCNyJTObOeUT_QpxORu7bC65Zw7k&fid=0x0:0xe8923d70a3fff4ee"
        ],
        When: "2022-12-28"
      },
      {
        Name: "Katherine Barreto",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWln8c8CLgjwrjyc30Ss_BajX1aeHvTiRHNqnwJ9GG-XyWGUPMFXQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Recomiendo el lugar: Estoy agradecida con el trabajo y buen trato. Los tuve en menor tiempo de lo estimado y me quedaron fabulosos. Muchas Gracias.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPi1IJ03pH7W4Yfc2Me2EKUkp5uxyqk7yGlxPmL&fid=0x0:0xe8923d70a3fff4ee"
        ],
        When: "2023-10-18"
      },
      {
        Name: "Estemar Martín",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXwlYBCTvF42VTlekod1nQgnd80nhrTkdiTpRzUaI8qKo8vu4zF=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Siempre salgo contenta con el trato, me hago las gafas allí siempre",
        Images: null,
        When: ""
      },
      {
        Name: "German Exposito",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIwIsYvsr0r5owriMBWPv5h9qozgzpsFm7-kLhwhdDnNJHwrA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente trato de la dependienta, tanto con mi madre como conmigo. Dudas que teníamos nos la solucionaba en el acto. Y rapidez de entrega de las gafas.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "CENTRO ÓPTICO SELVISION (Antes Optica Balboa)",
    category: "Óptica",
    address: "P.º de Sancha, 18, Málaga-Este, 29016 Málaga",
    description: "Este centro óptico es muy apreciado por su trato excelente, cercano y amable. Se destaca la profesionalidad y el buen asesoramiento, explicando detalladamente las opciones para la corrección visual. Los comentarios resaltan la confianza generada y la calidad de las gafas y lentillas. Sin embargo, una experiencia negativa menciona problemas con el ajuste de las gafas y una reacción poco profesional al intentar cambiarlas.",
    serviceRatings: {
      atencionCliente: 4.8,
      profesionalidad: 4.5,
      precio: 3.5,
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
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:00"
      ]
    },
    website: "",
    phone: "952 91 45 70",
    review_count: 24,
    review_rating: 4.8,
    latitude: 36.721437,
    longitude: -4.40336,
    user_reviews: [
      {
        Name: "Nidia Cg",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLAquQVq20DdpWIdrwZjUe1FlNRBRH2mTPbgYSs2E4PqiVj4bgR=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor óptica a la que se puede acudir,que te trata con cariño y te puedes fiar 100% ,tanto Pablo que es estupendo como su mujer(a la que mi hija adora por explicarle tan bien y darle confianza en el uso de las lentillas)son maravillosos.\nLlevamos encargandoles gafas y ahora lentillas,como consultarles cualquier duda 10 años y no pensamos pisar otra óptica.",
        Images: null,
        When: ""
      },
      {
        Name: "Manu García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUQFAvWENE94WA9cV0IfgtY7vz4KGZaE-RIOCXb-_gB5_0YSgDIuA=s120-c-rp-mo-ba6-br100",
        Rating: 5,
        Description: "Llevamos ya muchos años con ellos y nos encantan,bueno a toda la familia realmente, cuando un sitio pasas por la puerta y te paras solo a saludar es que han dejado una huellita, encima podemos ir con nuestros peluditos, eso debería ser 10 estrellas.\n\nSiempre nos han asesorado genial ,son unos grandes profesionales.",
        Images: null,
        When: ""
      },
      {
        Name: "Roberto Rodriguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIqQemF7WZF93rlpdc8FTmrsU5kZA3PtQMz5lCPiddgNf_M6g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato excelente. Buen asesoramiento. Te advierten de los pros y los contras en todas las decisiones que conllevan la corrección mediante gafas o lentillas.\nEn mi opinión, si el proceso sale mal, es que no le has hecho caso ninguno a sus recomendaciones.\nUn 10 como profesionales",
        Images: null,
        When: ""
      },
      {
        Name: "Miguel Ángel Arráez Manrique",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIJA7A8qu28L5uuIk3ioY3WezAAT5_m2X6esiT3R9QdeRT37A=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Impecable el trato que dan. Rápidos y efectivos. Sin duda acudiré siempre que necesite algo.",
        Images: null,
        When: ""
      },
      {
        Name: "Laura Ávila Fernández",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLbnq6Tpo29xXm5g1WFsNjLGsKiFtK9HJQiAEj-4nZz8skdnA=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Me \"hicieron\" las gafas en un solo día, 170€ me quedan grandes y me mareo, creo que me han vendido unas que ya tenían hechas.\nCuando fui a cambiarlas se puso histérico me gritó y no quiso rellenar la hoja de reclamaciones, he tenido que llamar a la POLICIA LOCAL tres veces... Desaconsejable total...",
        Images: null,
        When: ""
      },
      {
        Name: "Amira Alalache",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXWEF696HB2CnLVaiQaGDlvAPUqwsCg-imUf9vGG1OAY-05Dq8R2w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es la mejor óptica de málaga!!!\n\nLa atención del Optico es inmejorable, me guié por ellos por las recomendaciones de Google y fui a probar, porque la tengo cerca de casa y así fue, un trato exquisito, familiar y atento. Utilizó gafas y lentillas y son una maravilla, los dos trabajadores son los mejores!!!!!\n\nPor cierto, el detalle de tener agua para los perritos es lo mejor.",
        Images: null,
        When: ""
      },
      {
        Name: "Alex Hewett",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUdpxfaMe8Tr9Q6_lbxJBsYo8Ev01krE84Oi94Rwnoa9c3fOBSY=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Profesionalidad y trato excelente. Gafas y cristales de calidad. La diferencia de calidad frente a gafas \"low cost\" es abismal. Muy contento con su atención y resultados.",
        Images: null,
        When: ""
      },
      {
        Name: "maria jose sel arias",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ693u6Bah2X6nEa5BjOClS1yqGuFEH0cfSqdI_7JBWwCnqyQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Grandes profesionales que te atienden y te asesoran con gran cercanía y amabilidad. Encantada que me atienda el mejor optometrista de Malaga. Muchiisimas gracias a ese gran equipo que hacen Pablo y Toté",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Alain Afflelou Óptico y Audiólogo, Calle Beethoven, Málaga",
    category: "Óptica",
    address: "C. Beethoven, 5, Carretera de Cádiz, 29004 Málaga",
    description: "Alain Afflelou Óptico y Audiólogo en Calle Beethoven es muy elogiada por su impecable servicio y la incorporación de un gabinete de audiología. Los clientes destacan la gran variedad de precios y lentes innovadoras, así como la atención atenta y bien informada del personal, que ofrece excelentes recomendaciones. La medición precisa y la amplia selección de monturas hacen que la experiencia sea cómoda y satisfactoria.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:30"
      ]
    },
    website: "https://www.afflelou.es/opticas/malaga/afflelou-calle-beethoven-5-29004?utm_campaign=gmb&utm_medium=organic&utm_source=google_gmb",
    phone: "951 21 27 70",
    review_count: 119,
    review_rating: 4.9,
    latitude: 36.69457,
    longitude: -4.45031,
    user_reviews: [
      {
        Name: "Maria Del Carmen Barranco Rabaneda",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKbTZQHQXzA4ErxkkWhxTolBZJdNWUoq4NMGE7-VoD8D_kAHA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hace poco acudí a mi revisión de óptica anual y quedé muy impresionada tanto porque habían abierto un gabinete de audiologia dentro de la óptica como por el impecable servicio. Ofreciendo una gran variedad de precios y lentes innovadoras, con una bonita presentación. El personal atento y bien informado se aseguró de que mi experiencia fuera memorable, ofreciéndonos excelentes recomendaciones y garantizando nuestra satisfacción. No puedo dejar de recomendarlo a todos mis conocidos y el gabinete a mis seres queridos",
        Images: null,
        When: ""
      },
      {
        Name: "David Cugar",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWe58MElP5J8qOIrTa_U4HYiaHmRKZbXVGH4oznKp7-83FQOz31=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "El personal demostró un conocimiento profundo y una atención personalizada para asegurarse de que obtuviera las lentes perfectas. La precisión en la medición y la amplia selección de monturas hicieron que el proceso fuera cómodo y satisfactorio. ¡Ahora veo el mundo con claridad y estilo gracias a su excelente servicio!, volveré a ir a por las próximas gafas",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMg0RHaKj7-3jGHcKLaDQm2WYUvzmvRsIGEK2HI&fid=0x0:0xeeae93fcf6fa70bf"
        ],
        When: "2024-1-16"
      },
      {
        Name: "SUPER YOX",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU9KAo693jwx_yTv5zTs_Rs9IbYN-z5TFjS3vnIqu-xOQn1vQiZ=s120-c-rp-mo-ba6-br100",
        Rating: 5,
        Description: "👓 Amplia gama de monturas, lentes y servicios audiológicos. 👂✨\n🔍 Atención profesional y personalizada. 👩‍💼👨‍💼\n🕒 Horario cómodo y flexible. ⏰👍\n\n💬 Atención al cliente:\n👨‍💼👩‍💼 Personal amable, experto y dispuesto a ayudar.\n🗣️ Explican detalladamente las opciones y soluciones. 💬👏\n\n💰 Precios:\n💸 Relación calidad-precio muy buena. 💯💰\n💳 Aceptan diferentes métodos de pago. 💳💼\n\n✅ Lo mejor:\n👓 Gran variedad de monturas modernas y clásicas. 👓🌟\n👂 Servicios audiológicos de alta calidad. 👂✨\n💼 Trato cercano y profesional. 👩‍💼💖\n\n🌟 Conclusión:\n¡Un lugar excelente para cuidar de tu visión y audición! 👓👂\nSi buscas un servicio óptico y audiológico de confianza, este es tu sitio. 👌✨",
        Images: null,
        When: ""
      },
      {
        Name: "Daniel Garcia Lara",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLGlcDhdkM5d2uD8MXAz1rk_ALcSyQ1flFTZrmxPImBDHPrkQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La mejor óptica, excelente trato y excelente equipo!!  Sois geniales, seguid con el gran trabajo que hacéis!",
        Images: null,
        When: ""
      },
      {
        Name: "Paula Medina",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU4KD_ZmIyLLWBNz6HeCqdIsNa3VdDVd5hPX_kqI7-dAH2j5Ke8=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He ido esta tarde de imprevisto porque se me ha roto una lentilla y solo tengo que decir que el sevicio estupendo, me han tratado muy bien y muy amables.  Me han revisado todo correctamente para asegurarse que esta todo bien.",
        Images: null,
        When: ""
      },
      {
        Name: "Diana Serrano Martín",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJiy84J7rRO617FJT6_GvXaPGKS70hpO7aadMTDjXJtwlZHNg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me compré dos pares de gafas hace un año y estoy encantada con la atención que me han proporcionado siempre. Hoy he ido a que me las ajustaran y han escuchado mis opiniones y   adaptado las gafas a mis características. Todo con una sonrisa y maravillosa predisposición por parte de las dos chicas que están por la mañana. Así da gusto. Óptica muy recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Dayme BM",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWA0GYcJ-hQSaopQP1270ekunPn_aF0CeB4jkYvHBDeOUEEbANZ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Solía ir a esta óptica a comprarme las gafas de sol, y he decidido probar esta vez con las gafas de cerca. Estoy encantada con el resultado, veo muy bien con mis nuevas gafas. También estoy encantada con la profesionalidad, con la explicación paciente a “todas” mis preguntas, y com el trato amable en general. Muchas gracias por todo!!!",
        Images: null,
        When: ""
      },
      {
        Name: "susana zurita",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLBWLs4hogI2rKhKCGZDKzY0-taHMXBonvgSRCBrFJQZ23Slg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lo recomiendo 100% el trato excepcional, el sitio súper limpio y bien cuidado. Ana y Aurora han sido de lo mejor con nosotras y nos han ayudado a elegir nuestras gafas. Gracias sois de 10....",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Teatinos",
    category: "Óptica",
    address: "C. de Antígona, 2, Puerto de la Torre, 29010 Málaga",
    description: "Óptica Teatinos es reconocida por su trato excepcional y profesionalidad. Los clientes destacan la disposición a ayudar sin cita previa y la rapidez para arreglar gafas rotas, en ocasiones de forma gratuita. El personal es muy atento, ofrece gafas de buena calidad y brinda un excelente asesoramiento. Se destaca la amabilidad y el cuidado mostrado hacia personas con necesidades especiales.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
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
        "10:30–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:00"
      ]
    },
    website: "http://opticateatinos.com/",
    phone: "952 39 71 96",
    review_count: 88,
    review_rating: 4.7,
    latitude: 36.719442,
    longitude: -4.47729,
    user_reviews: [
      {
        Name: "Jose Gil Pedrosa",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUCjrpJUrxN5OHTV_JlGaesnmKpqsV8z8RIoRMxqBz_n1dH9Xvc=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Sencilla mente mil gracias, ya que me pase porque era la más cercana al Hospital Clínico en el cual me encontraba y me atendieron si cita y al momento me solucionaron el problema y no me cobraron nada por la reparación de las gafas y no me quisieron cobrar",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMmYt5BQ3MclKKJt8nzMSAkgZiqCU2JXnKK7r56&fid=0x0:0xa9c32ee8f558adfe"
        ],
        When: "2024-11-11"
      },
      {
        Name: "antonio adarve castro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIIBd5kIen1TUVpI0MniUt8GaC4EVvpxg-kL8kjWfJjd11Myg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "No suelo escribir reseñas salvo en casos excepcionales como este. He llevado unas gafas rotas que daba por perdidas y las han arreglado super rápido dejándolas perfectas. Trato inmejorable, grandes profesionales, sin duda seguiremos siendo clientes",
        Images: null,
        When: ""
      },
      {
        Name: "Fimeo Palma",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX-_UyQpV9xMGIdAzdvttBsF0PycrmFCU-Deuwl8OLv_Ua9Aah6=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Acudí a por una graduación y el trato  ha sido excepcional. Me dieron las gafas muy pronto y muy buena calidad. Estoy super contento con el resultado. Si la edad os hacer perder la vista, no dudéis en visitarlos. Gracias por cuidar nuestra salud visual.",
        Images: null,
        When: ""
      },
      {
        Name: "Rafael Arquero",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXMqcTxVwHATIHr_9lvF7VqWzBeKK1tNZnB_jXuZcmzgWnHVTK8aA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hola,\nHe entrado por primera vez en esta optica y cuando he llegado la chica estaba atendiendo a mujer con chico en silla de ruedas y situación especial, en cualquier otro momento me hubiese ido pero me he quedado con gusto esperando al ver con la firmeza y a la vez con el cariño que lo atendia pese a las continuas interrupciones del chaval desde su silla y cuello doblado como le han adaptado sus gafas etc a la vez que se interesaba por mi, hasta llegar su compañero (intuyo que pareja) y le ha pedido me atienda el despues de sentarme y todo lo demás ya ha sido atenciones de cambiarme cristales y regalarme liquido especial y gamuza sin cobrarme el trabajo de mas de 20 min con una sonrisa en la cara de verdad e intesaeae por mi brazo en cabestrillo.\nSin palabras. Chapo!\nVolvere para mi, con mi pareja y los recomiendo tanto por el trabajo como por el trato que dispensan a sus clientes y a los que llegamos y con la tienda con mas gente. Que maravilla, ojala mis clientes y vendedores tomen buena nota… Asi he salido y os prometo que me hubiese encantado pagar. 😄",
        Images: null,
        When: ""
      },
      {
        Name: "Francisco Javier Vizcaino Martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXjrI7xShWNMGfAuuvw9Cea4d8bDUeVN3dJjStul48MO4wKg3Yi=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy contento con las gafas progresivas que me han realizado. Se ajustan perfectamente y me he acostumbrado a ellas en seguida. Un buen trabajo con una atención sobresaliente.",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIerSi3Uc8fLfZ_oFiDbQ8QVSQaLFQjLm5ZH2zIdor9cMQiCg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hemos llevado unas gafas de ver a reparar, y si impecable ha sido el resultado, más impecable ha sido el trato recibido.\n\nTotalmente recomendado y totalmente agradecidos.",
        Images: null,
        When: ""
      },
      {
        Name: "Blanca Vera Arroyo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV9wncPPec6HpK9kmFiEtfDYwtg4hDL9PehSmVabn8wx3GYJ30=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Una atencion estupenda, nos resolvieron la rotura de las gafas de la peque super rapido y genial. Un trato inmejorable, mucho interes en dar la mejor solucion posible.",
        Images: null,
        When: ""
      },
      {
        Name: "nuria gallego cobos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL41V4kREWm56uZZsgBJa_J4zFlf9RxuJbAoSFLu_4daI2h4A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Cuando tienes problemas de visión y encuentras un sitio, donde prima la mejoría, comodidad y atención al cliente, para mí es un lujo.\nEs un lugar donde no dudan en dedicarte tiempo hasta que ya están seguros de haber encontrado tu graduación perfecta.\nMe hice varias gafas de cerca, hasta que llegué por recomendación a esta optica y dieron en el clavo a la primera.\nCristina da gusto, llegar a tu establecimiento y que soluciones nuestros problemas que merman a veces nuestra calidad de vida.No pierdas tu ilusión por hacer las cosas como las haces.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Victoria",
    category: "Óptica",
    address: "C. Fernando el Católico, 22, Distrito Centro, 29013 Málaga",
    description: "Óptica Victoria es muy valorada por la excelente y personalizada atención de Victoria. Los clientes destacan los precios razonables, incluso más bajos que los de grandes cadenas, para la calidad ofrecida. Aprecian la rapidez en la entrega de las gafas y la satisfacción general con el servicio. Una reseña señala que, si bien la atención es amable, podría ser más caro en comparación con otras ópticas para las mismas lentes y monturas.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 4.5,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      lunes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      martes: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      miércoles: [
        "9:30–14:00",
        "17:00–20:30"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "9:30–14:00",
        "17:00–20:30"
      ]
    },
    website: "",
    phone: "951 35 69 17",
    review_count: 17,
    review_rating: 4.8,
    latitude: 36.729487,
    longitude: -4.413823,
    user_reviews: [
      {
        Name: "salva s",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWVYRsOoWhVk1WcY024g3l81JQooxQVY5wsQr7pMrj8UXDTS50=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "He recogido ésta semana la gafa de vista que  me han hecho y he quedado contento. Lo que más me ha gustado ha sido la rapidez en tener mi gafa lista, el trato recibido de la chica y el precio (en comparación con otras ópticas, donde por la misma calidad que yo buscaba me salían más caras).",
        Images: null,
        When: ""
      },
      {
        Name: "Joaquin Lopez de Zavala",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWvxWQDk4YD7rWsNp3viEsDtZjq55empEx02HBZNQ65SM0Yr6g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me he sentido muy complacido en la atención personal y en la clínica profesional. Muy recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Francisco Javier AV",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLpZKg85KvC3RQiD_PMGEc5T3w30K3ii2iF82CTn22itpubHA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi óptica de cabecera😁. Victoria es un encanto, profesional y tiene unos precios razonables, incluso menos que otras ópticas de grandes cadenas. La atención es excelente y personalizada. Muy recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "INMA ALAMOS",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW8BEm9Bh-Intkg2vriAxgiai4AtGatyGCMpRsyNXkg5Fs6m2Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mejor trato imposible, Victoria una gran profesional. Hay que apoyar el pequeño comercio y sobre todo cuando tienes un trato excelente!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Elle J.M",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVNbFUMpefsctqjKi6xSnvrNe3zL4eaL1zAJ_7rT0tnz5PDB8zJDA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "he ido ya varias veces y la muchacha es siempre encantadora, me revisó la vista y he comprado ya un par de gafas y todo estupendo",
        Images: null,
        When: ""
      },
      {
        Name: "Fernando Ruiz Corregidor",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWcohflmtBLl9ZWSFV0sOUF919xiC0GABX-GiXQjXDIB9TUvdcZnQ=s120-c-rp-mo-ba4-br100",
        Rating: 4,
        Description: "Participa en una plan que se llama Déjanos cuidar tus ojos que se preocupa por la salud de nuestros ojos y hace campañas informativas y preventivas muy interesantes... ¡recomendable al 100%!",
        Images: null,
        When: ""
      },
      {
        Name: "Nieves García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUiIX8Ol545mxO6vTedmczJ9eu9V2gC9l0d-okubaUOXQUBuGVw=s120-c-rp-mo-ba4-br100",
        Rating: 3,
        Description: "Destacan en amabilidad no obstante es cara en lo que ofrecen si comparas las mismas lentes con las mismas monturas en cualquier otra óptica.",
        Images: null,
        When: ""
      },
      {
        Name: "Tatiana Calle Martinez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV87NnlhV0bN3qLh94Nn3IZIqLDKQbgHWmd0hbCTX-mo4Dza3tC=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me encanta el trato de la profesional. Sin duda, seguirá siendk mi óptica de referencia.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Mario Haro",
    category: "Óptica",
    address: "C. Martínez de la Rosa, 118, Bailén-Miraflores, 29010 Málaga",
    description: "Esta óptica se caracteriza por su personal muy atento y amable, incluyendo a Jorge y Mario, quienes son rápidos en solucionar problemas con las monturas. Los clientes aprecian la atención personalizada, especialmente para niños que se adaptan a las lentillas. Ofrecen un buen servicio, productos de calidad y precios asequibles con facilidades de pago. Algunos usuarios destacaron un excelente servicio postventa, incluyendo reemplazos gratuitos para monturas rotas o gafas de sol descoloridas.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
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
        "10:30–13:00"
      ],
      viernes: [
        "10:00–14:00",
        "17:00–20:30"
      ]
    },
    website: "",
    phone: "615 02 14 70",
    review_count: 34,
    review_rating: 4.7,
    latitude: 36.728116,
    longitude: -4.443197,
    user_reviews: [
      {
        Name: "Inmaculada Partal",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLZlyFQ-DdouPWGlMJ-tYTAZ1ibx3PusC9Q8GLD0iuR9Oo8pA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Superantentos y amables. Llevo años comprando gafas en ésta óptica, tanto para mí, cómo para mi familia. Mi hijo decidió usar lentillas, y el tiempo de adaptación a ellas, estuvieron todo el tiempo que necesitó pendientes a él. Si tienes algún problema de montura, te lo solucionan rápido tanto Jorge como Mario.",
        Images: null,
        When: ""
      },
      {
        Name: "Javier Mengibar",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJjaxTNMeG5JBz6_-qlFJpp3O_Zkg84p87EWudST0J41wXmgA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Profesionales , cercanos en la atención al cliente , buen servicio y buena calidad en sus productos. Precios asequibles con\u00a0 facilidades de pago. Muy recomendable",
        Images: null,
        When: ""
      },
      {
        Name: "manu teseo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUMw0LKvT9hnQzKtJbjivH_Rx5TMzx_sMV5jum5H_Dpdp2r2Xc0eQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Compramos unas gafas hace año y medio y se partio la pasta de las gafas, sin poner ninguna pega me las acaban de cambiar por unas monturas nuevas, las de sol que también compré hace año y medio\u00a0 estaban algo descoloridas y lo mismo, monturas nuevas, ha adaptado el cristal y todo perfecto.\nAl momento\n\nTrato de 10! Y además unos precios muy económicos, sinceramente la mejor óptica a la que he ido, la recomiendo a todos mis conocidos.",
        Images: null,
        When: ""
      },
      {
        Name: "Lorena Madera Macias",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLL2WgtiWnRFmxSSY5ihJb4JwiCDodRwWqitcUuRAKl4L5Qog=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es una óptica estupenda, con muy buenos precios, y rapidez en el servicio, los chicos muy simpáticos.",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Nuñez Fernandez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJnvAmsjTsDu57oD9gFC_e078_wFXhtlFfdLFj_hGvNkh0kwA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Las gafas son de muy buenas calidad , tiene muy buenos precios y es una maravilla lo bien que te atienden valla un 10 no un 100",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOeF89JrHUawmgVAcurleGTsYkVwg_-qF7NgN1n&fid=0x0:0x3d2782b13e640f89"
        ],
        When: "2024-3-20"
      },
      {
        Name: "Pepe Pepe",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKdMHY29UL2BRDR_iL5b6LeBIc_mprTcs4QezDxGVfS3JEzlg=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Son un personal muy especial y profesional. Lo que no hagan ellos por el cliente no lo hace nadie. Enhora buena a los chicos y que tengan mucho exito,se lo merecen.",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen Jiménez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWvE_YoXIg4VM18B9G3Mmr0oqNm1o4B7E9ECpXBZjkb1RH_SjQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy atentos y agradables.\nGrandes profesionales.",
        Images: null,
        When: ""
      },
      {
        Name: "Eliana Jiménez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIuaMdt8fHTXw2WIu_1C8raIBgokWDe5xJEfrhM7ZAKda0SUNM=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Nos atendió un chico moreno con gafas muy amable, tuvo mucha paciencia con nosotros a la hora de elegir gafas (somos unos indecisos), cogimos una oferta de dos gafas por 110€, cada una co la graduación distinta y antirreflejos entre otras cosas. Las pedimos un lunes y el viernes ya estábamos recogiéndolas. Nos dió a cada uno el estuche para las gafas y nos dijo que si notábamos cualquier molestia que nos pasáramos, llevamos una semana con ellas sin problema.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Alain Afflelou Óptico y Audiólogo la Rosaleda Málaga",
    category: "Óptica",
    address: "Av. Simón Bolívar, s/n, Palma-Palmilla, 29011 Málaga",
    description: "Este establecimiento recibe elogios por su excepcional atención al cliente, con menciones frecuentes a Ana y José por su amabilidad, buenos consejos y profesionalismo. Los usuarios valoran la paciencia demostrada durante el proceso de selección de gafas. Además, la óptica participa en iniciativas como la Fundación Alain Afflelou. Un oftalmólogo confirmó la precisión de las graduaciones de las gafas adquiridas, y la tienda ofrece una buena y actualizada variedad de modelos atractivos.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 4.8,
      precio: 3.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://www.afflelou.es/opticas/malaga/afflelou-c-c-carrefour-la-rosaleda-29011?utm_campaign=gmb&utm_medium=organic&utm_source=google_gmb",
    phone: "952 61 05 49",
    review_count: 159,
    review_rating: 4.9,
    latitude: 36.733304,
    longitude: -4.4335,
    user_reviews: [
      {
        Name: "Meyerling Betancourt",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIAvvgk_-ONeJ_otBuWCib2j1qEyH_QQFSjruyO9QFy_Fei2A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He ido a cambiar mis gafas, y destaco la atención de su vendedora Ana, muy cercana, me ayudó a elegir mis gafas con buen criterio, me asesoró de una manera muy profesional, y me comentó todas las ventajas de mi elección. Salí muy contenta con mi compra. No duden en preguntarle a ella. 100% recomendada",
        Images: null,
        When: ""
      },
      {
        Name: "Sandra",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKrDMMIgm8fRN7wMyyDkP_HyF13Sv4LbTZsSi8keNW1vZF8kQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo varios años yendo a Afflelou Rosaleda por el excelente trato que José tiene con mi hija ,mi marido y conmigo .Antes íbamos a Afflelou Alameda pero un día que no tenían cita el día que me interesaba decidí probar en Rosaleda y nos sorprendió la profesionalidad,cercanía y el inmejorable trato\u00a0 de José .Así que seguiremos en Rosaleda aunque tengamos más distancia con nuestro domicilio",
        Images: null,
        When: ""
      },
      {
        Name: "Tony Ortiz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXGccd2p-yRzxAagsw-yFyQEoUCUyW-MFNtVjL6Bf0TNAWJLpy-=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lo aconsejo , fueron super amables y pacientes a la hora de elegir gafas , excelente servicio y estamos muy contentos con nuestras afflelou .",
        Images: null,
        When: ""
      },
      {
        Name: "Nerea Peña Carretero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJjJOCYZp2qaBGgZYYrpAtdzEwVCTPpNSSPINwH0XB5XWCZ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Todo genial un trato maravilloso fuimos por lo de la fundación alainafflelou y le dieron a mi hija a escoger entre un monton de gafas muy contenta!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMkravCY6DqZLt6wf2qBTHkJHkju_uL8Ecbbeg&fid=0x0:0xf1af7bb717d5cadc"
        ],
        When: "2024-10-19"
      },
      {
        Name: "Merc Fer",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI1Vz-RTd-mdXMmtSydvE0hUP9VNVpkLj4B8o4tRJmzCrRKRg=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Muy profesionales y simpáticos. El oftalmólogo cuando acudí para una revisión y vio las gafas que compré en este centro me dijo que estaban muy bien graduadas con las correcciones pertinentes. Gran variedad de modelos muy bonitos que renuevan continuamente.",
        Images: null,
        When: ""
      },
      {
        Name: "Noelia María Trujillo Collado",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX8LwKdCj4IgswqHrWEV2InA3-OAP61P3C57xJs_SXhpOwCTxns=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena experiencia siempre. Muy atentos y profesionales",
        Images: null,
        When: ""
      },
      {
        Name: "Cristina Formella",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLNUzwXglgM8AU5_-sl-Oapv_XEgqJ-CA5u1E0Q_kMswftt8A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Súper, tienen modelos variados pero no miles (mejor para las indecisos, unos cuantos bonitos y ya paren), la atención genial, el audiologo me ayudó muchísimo y fue muy amable, de 10! Las gafas son bellas, espero no perderlas pronto :)",
        Images: null,
        When: ""
      },
      {
        Name: "Lorena Dolz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJSwbef8liVX1ao7zdvz6AOOxi4OA-Qo0F61smxF26dZ3JLYZU=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "La atención, cuidado y profesional de José fue excelente. Feliz y encantada con mis nuevas gafas, sin duda seguir sus consejos\u00a0\u00a0 fue lo que más agradezco. Feliz y contenta con mis nuevas gafas, con estila o a tope! ❤️",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "General Optica - Visión y Audición",
    category: "Óptica",
    address: "Av. Juan Sebastián Elcano, 162, Málaga-Este, 29017 Málaga",
    description: "En esta óptica, las opiniones están divididas. Algunos usuarios reportaron experiencias negativas relacionadas con prácticas éticas y problemas de atención al cliente. Sin embargo, otros destacaron aspectos positivos como la ayuda recibida por el personal en situaciones urgentes, la minuciosidad de los exámenes de la vista y la claridad en las explicaciones de las ofertas. También se menciona que cuentan con un gabinete moderno y tecnológico. Algunos clientes apreciaron la atención personalizada y profesional por parte de ciertos empleados.",
    serviceRatings: {
      atencionCliente: 3.0,
      profesionalidad: 3.5,
      precio: 3.5,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:30"
      ]
    },
    website: "https://www.generaloptica.es/es/?utm_source=gmb&utm_medium=organic&utm_campaign=Malaga&utm_term=5507",
    phone: "952 20 74 88",
    review_count: 59,
    review_rating: 4.3,
    latitude: 36.721457,
    longitude: -4.363407,
    user_reviews: [
      {
        Name: "kArLiToSs GIA",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUoRzgjgRJhw30xVb-HGluGyAfgY7hzgjtU5Fh2DrAWuP4_QXAE=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Moral y ética más que reprobable por las empleadas de esta tienda en la que ayer se aprovecharon de una persona mayor con Alzheimer cobrándole la graduación al venderle unas gafas\u00a0 y ofreciéndole cosas que no necesita. No contentas con eso cuando la familia hemos ido a reclamar, en vez de asumir y pedir disculpas ponen quejas y no resuelven nada. Desde luego no volveremos a comprar nada aquí:",
        Images: null,
        When: ""
      },
      {
        Name: "Diego Gallardo Gómez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU1I22UHxgZSaAscHHpwffbQmYXJxhMA0jdQqZVjyD5-_tJ9OU=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Acudí a la óptica de El Palo, de forma extraordinaria, por un problema en un ojo. Era un viernes por la tarde, el día siguiente era festivo y no era fácil encontrar un oftalmólogo que me atendiese.\n\nRápidamente me atendieron en la óptica. Estuvieron revisando el ojo, haciéndome distintas pruebas, a lo que dedicaron un buen tiempo. Me dieron un diagnóstico que me tranquilizó y que me sirvió de mucho; todo esto de forma altruista. Les estoy muy agradecido. Magníficos profesionales y personas.",
        Images: null,
        When: ""
      },
      {
        Name: "Maria Garcia Martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUk0A9ILjbhE7KLHQlS61spvP0At-jGC7-62FxFY3-DLOVkJiDq=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Profesionalidad más que cuestionable. Vendiendo a una persona mayor con Alzheimer unas gafas que no necesitaba, y cobrándole 40€ por graduarle la vista, cosa que es obviamente necesaria para hacer unas gafas que ya se están pagando. Al intentar solucionarlo explicando la situación, no han ofrecido ninguna solución. En definitiva un engaño y poca empatía.",
        Images: null,
        When: ""
      },
      {
        Name: "N3 MÁLAGA",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWKy1sHBW2PRQnIphyn-4ODZ56FE7clg4jl-U6aAXkDZ-YE2dip=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Ayer estuve por primera vez en esta óptica. Nos atendieron varias chicas todas muy amables. Nos explicaron las diferentes ofertas con bastante seguridad y domino, se ve que saben lo que están haciendo. Muy profesionales. Nos graduaron en un gabinete muy bonito, todo muy nuevo y tecnológico. Personalmente me llevo la sensación que priorizan la atención y la salud del cliente que el vender como sea. Sin duda volveremos y con la estupenda oferta de la tarjeta VIP que nos hemos hecho, llevaremos a más familia. Muchas gracias.",
        Images: null,
        When: ""
      },
      {
        Name: "Eva María Aguilar Chinchilla",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVFPCXQVzSnJ_qEw6_v5tzcsZjHzmUTTDHm5r4N7rOuICHXT_g=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Mi experiencia ha sido buena. La optometrista super amable y me hizo la graduación de la vista de manera muy precisa. María Belén me sacó casi todas las gafas que me podían ir bien.. Iba a comprar por internet pero lo hicieron tan bien que las compré allí y en vez de una me compré dos! Muchas gracias 🙂",
        Images: null,
        When: ""
      },
      {
        Name: "jorgesw27",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWZ3T1e0jZ55urIQ6ny2KZLWuaJ91X5mYhw9b2UDU_FDcRnZxBB-w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Fui para comprar gafas nuevas y tengo que destacar a la chica que me atendió, Lucía. Muy profesional y muy buena vendedora! Todo genial!",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Agustin Dominguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWul-R51ntvI_l03iDAp6OxHSdiB1C1yWTaIymZr_xVW9Y5ruA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente servicio, me atendieron rápido, súper amables y dispuestas a ayudar. Recomiendo 100% la sucursal de El Palo.",
        Images: null,
        When: ""
      },
      {
        Name: "Alejandra E.",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLcVLoBrycCAPUuXOIAnjrAWZ9PdmKgJKYJmm_9GVVVBSdMhfcz=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Trato personalizado, amable y muy profesional.\nNo vivo en Málaga, pero intento organizar mi próxima visita para cuando tengo que renovar mis gafas de leer o de sol. Hasta ahora, siempre han acertado con sus consejos y dan en el punto exacto de lo que busco, y con productos de mucha calidad.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Visual Market Los Vegas Tu Óptica a Precio Justo",
    category: "Óptica",
    address: "Av. de los Vegas, 12, Cruz de Humilladero, 29006 Málaga",
    description: "Esta óptica es altamente recomendada por su excelente trato y profesionalidad. Los usuarios están muy satisfechos con la atención recibida y la calidad de los materiales. Destacan la buena disposición del personal y la eficacia en la resolución de problemas. Los precios son considerados justos, y muchos clientes expresan su intención de volver y recomiendan el establecimiento por su servicio y precios.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:45",
        "17:00–20:00"
      ],
      lunes: [
        "9:30–13:45",
        "17:00–20:00"
      ],
      martes: [
        "9:30–13:45",
        "17:00–20:00"
      ],
      miércoles: [
        "9:30–13:45",
        "17:00–20:00"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "9:30–13:45",
        "17:00–20:00"
      ]
    },
    website: "http://www.opticavisualmarket.com/",
    phone: "952 02 60 26",
    review_count: 47,
    review_rating: 4.5,
    latitude: 36.708326,
    longitude: -4.477143,
    user_reviews: [
      {
        Name: "Sebas",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV1scvc4mDUaMYwEsq7gLc9Cmx5-j97kMYI5W9OPYmp0cW3C4Th=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Lo tengo claro, ya se cual será mi optica de aquí en adelante. El trato y profesionalidad han sido excelentes. Fuí a por mis primeras progresivas y tenía mis miedos en cuanto a mi adaptación a ellas. El seguimiento y asesoramiento ha sido de diez y no puedo estar más contento con mis nuevas gafas, la adaptación ha sido perfecta y ahora solo me pregunto porque no lo hice antes. Muchas gracias!",
        Images: null,
        When: ""
      },
      {
        Name: "Marina García",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVEub-A3D2Nbes40Nv7J0a-HaHZr99lj6qYX3ceQ0Rf01jSoOAxaw=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Después de tener desde hace bastante tiempo cuatro productos ya de esta óptica puedo decir con confianza que la calidad en los materiales, el servicio y el trato es excelente. Marca la diferencia la buena actitud y disposición de las personas que te atienden. Sin duda volveré a por el quinto cuando lo necesite.",
        Images: null,
        When: ""
      },
      {
        Name: "Pilar P",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWscLhtbKVR8FzvXQCqA68Iggym5cnLrfb8AvnmbtHmlq_u_d4=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Somos cuatro en la familia y todos con gafas. Siempre nos han dado un magnífico trato y son muy profesionales además de tener un buen precio. Recomiendo esta óptica al 100% ya que somos clientes desde hace años",
        Images: null,
        When: ""
      },
      {
        Name: "Javier Gonzalez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX2oXlpNmS1u7ZvQisM3_ddjERnVt-zTpgu1hqP_VxxXFBgDO6u=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "No conocía esta óptica y me la recomendó un amigo. Uso progresivas y 2 que he tenido antes, siempre me daban problema. Aquí, la adaptación ha sido perfecta desde el primer día. Ahh y lo precios, bastante bien. Os recomiendo esta óptica",
        Images: null,
        When: ""
      },
      {
        Name: "Jose Enrique Diaz Rivera",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJD36jbwxksA_Ce48Ebuxp77H42G9rioLCq8HMjEtO8wJnkyQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "la atención por parte de francisco excelente ,he tenido un problema con unas gafas y problema resuelto y rápido.",
        Images: null,
        When: ""
      },
      {
        Name: "JUAN DIEGO MANZANARES FUSTER",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIYHsx8XVlt1okUIPQHgMMAtZeSYcnMAjLCgdlfZ-SG5nMY-Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Cliente de muuuchos años y siempre trato y precios excelentes. Súper reticente y cerrado a cal y canto a las gafas progresivas por lo que había oído, me convencieron para que las probara y en los dos meses que llevo con ellas no puedo estar más contento, y lo que más me preocupaba que era la adaptación, casi en el mismo día ya no tenía problemas. Cinco estrellas porque no hay más.",
        Images: null,
        When: ""
      },
      {
        Name: "juan Fernández Ortega",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocISoummtQ1WszCNUyCxlZ6CPIBbbEvKxm5mxKWr5z-vKUaHMg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Bueno, sólo decir que recomiendo, sin ninguna duda,\u00a0 esta óptica. El trato personal es muy bueno, y lo que es más importante, el tema profesional es aún mejor.\nY os aseguro que no es a la primera óptica donde voy, por eso aun estoy más contento.\nUn saludo.",
        Images: null,
        When: ""
      },
      {
        Name: "Aurelia Kawan",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJobw8EeMUW2t0dllLBUulfYYKlNtz_XxtomzEro5NPsDFubQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Sin lugar a duda, la mejor óptica de Málaga y alrededores. Atención impecable, muy profesionales, maquinaría de última generación, muy extensa gama de marcas y de modelos de gafas de todo tipo de precios, todos mucho más económicos que en otras tiendas. Mis gafas progresivas estaban listas en muy pocos días y están perfectas. Un 10!!!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
{
    title: "Roma Visión",
    category: "Óptica",
    address: "Av. de Carlos Haya, 63, Cruz de Humilladero, 29010 Málaga",
    description: "Roma Visión es altamente recomendada por su excelente atención y profesionalidad, especialmente por Rosario, descrita como increíblemente meticulosa y detallista. Los clientes están muy satisfechos con la calidad de sus gafas y el trato cercano y amable que reciben. Es considerada una óptica de confianza donde los clientes pueden obtener asesoramiento personalizado sin preocuparse por el presupuesto.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:00"
      ],
      martes: [
        "10:00–13:30"
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
    website: "",
    phone: "640 96 18 47",
    review_count: 36,
    review_rating: 4.8,
    latitude: 36.722217,
    longitude: -4.447946,
    user_reviews: [
      {
        Name: "Celeste Gómez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVZwNzqofF_bfLofAolPS35-KU2VAMSImtRaoRTlquhjaWNGXdb=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Tuve una excelente experiencia en esta óptica. Rosario es una profesional increíble, meticulosa y muy detallista en su trabajo. Mis gafas quedaron fabulosas, con un acabado pulcro y perfecto. Se nota el alto nivel de profesionalismo y dedicación en cada paso del proceso.\n\nAdemás, el trato fue muy cercano y amable, lo que hizo que todo el proceso fuera aún más agradable. Me sentí bien atendida en todo momento y realmente valoré la atención personalizada. Sin duda, recomiendo este lugar al 100%. ¡Volveré sin dudarlo!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPsUUOXoGAHBy7KOf7HVyKy3gK8gsYiEDdmFdrj&fid=0x0:0x1b6089e0addedc8c"
        ],
        When: "2025-3-11"
      },
      {
        Name: "Jose Gonzalez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLkIBGrmGf2_UKQ38ph-U4-_BcAU5MA6nEEb-ToraW3R0gTEw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi óptica de referencia y la de toda la familia desde hace mucho tiempo.\n\nUna atención cercana en la que siempre nos encuentra las gafas que se ajustan a nuestras necesidades.\n¡Muy recomendable!",
        Images: null,
        When: ""
      },
      {
        Name: "Salvador Gómez Sánchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV9PrUNOgMAIp61axkMNj2wLrJ7t2A-IYq0PCJAViHqH_crbg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Sin lugar a dudas, Rosario es una excelente persona y una gran profesional.\nEstamos muy contentos de haber encontrado una óptica de confianza, en la que puedes dejarte asesorar, sin miedo a salirte de tu presupuesto.\nPor eso la recomendamos encarecidamente.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipN9r7vWK-_Xg6nxSBUrarK4lWyJ7jB1Y9vX6JE&fid=0x0:0x1b6089e0addedc8c"
        ],
        When: "2025-1-1"
      },
      {
        Name: "RAMÓN A.",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIQdn-9-s7z-Ubbb9TxKvZuR1Br6b3yTx8EhE7YQ-3yKLbgnw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato personalizado. Combinando amabilidad y profesionalidad. Muy recomendable. Es mi óptica desde hace muchos años! 👍",
        Images: null,
        When: ""
      },
      {
        Name: "Lucía González",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUrRBzqsqvpFT_IRudFCaBa0Hx1ef3fd7mjsu-WET6wm1YYVlV7Lw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena profesional, muy agradable y da un gran servicio, todo lo explica muy bien. Yo ya llevo compradas unas cuantas gafas y varias lentillas.",
        Images: null,
        When: ""
      },
      {
        Name: "Encarnacion Jiménez de Rueda Plaza",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIYfypZ_snx3maz5cbpvomUB6XZu9JXYZDjtWCooTIZ1B9HCw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "En una gran profesional y te atiende muy amablemente. Muy buena relación calidad -precio. Es una gozada ponerte en sus manos",
        Images: null,
        When: ""
      },
      {
        Name: "kenichell manzanilla",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIAfD4Dj0-HnbO9YP0qy4uCc9FTzmVy4SvUWy8EWfQ6_jCfcA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Sin duda la Dra Rosario es una persona extremadamente maravillosa y muy noble. Y la atención es magnífica, sin duda la mejor Dra de toda málaga y mi amiga de confianza",
        Images: null,
        When: ""
      },
      {
        Name: "Benito Sanz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIhP0sSa7sbMWgTg9d-Fen9df6q3htJzBRelLKiufZqiYfvGA=s120-c-rp-mo-ba6-br100",
        Rating: 5,
        Description: "Un lugar ideal para solucionar todas tus necesidades visuales.\nAmplio abanico de gafas de todos los tipos y precios.\nSin duda volveré.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "General Óptica",
    category: "Óptica",
    address: "Calle Especería, 4, Distrito Centro, 29005 Málaga",
    description: "General Óptica en Calle Especería es muy elogiada por el trato excelente y profesional de su personal, incluyendo a Cristina, Ramiro, Lourdes, Rosa y Belén. Los clientes destacan el asesoramiento perfecto, la amabilidad y la paciencia para resolver dudas y ayudar en la elección de gafas. Se valora la calidad y variedad de los productos, así como la disposición para solucionar problemas y ofrecer buenos descuentos y coberturas de seguro.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      martes: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "16:30–20:30"
      ],
      sábado: [
        "9:30–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "16:30–20:30"
      ]
    },
    website: "https://www.generaloptica.es/es/?utm_source=gmb&utm_medium=organic&utm_campaign=Malaga&utm_term=1028",
    phone: "952 21 66 63",
    review_count: 87,
    review_rating: 4.7,
    latitude: 36.720965,
    longitude: -4.422489,
    user_reviews: [
      {
        Name: "Victoria Palma",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVmsdhp3_rGqJzeCT7L0AbaDo4nwDXI4fTlWOUb4jpeQBQPrjU=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Tanto Cristina como Ramiro me asesoraron perfectamente; me hice un examen de visión y Cristina fue muy amable y profesional, aclarando todas mis dudas y explicando con paciencia cada pregunta que me surgía... también me ayudó a elegir el modelo de gafas que más me favorecía, y la verdad es que todo el mundo me dice que me quedan estupendamente, aparte de que con ellas veo genial!! Se acabaron los dolores de cabeza debidos a la vista cansada!!Ramiro también fue muy cordial y me explicó todo lo relacionado con el uso y cuidado de mis nuevas gafas, así que estoy encantada con General Óptica de Calle Especerías.Sin duda lo recomiendo al 100%!!",
        Images: null,
        When: ""
      },
      {
        Name: "Silvia Melero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLNvNVYeLfJpfpEFSHUT021qTU2QFVrhYbzoeyxPxwLU4FQMw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Lourdes y Rosa dos grandísimas profesionales , se dedican en cuerpo y alma para que vayas contento y satisfecho . Me gusta mucho el trato y por eso siempre compro allí.",
        Images: null,
        When: ""
      },
      {
        Name: "Silvia Melero",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI0gJ21zLOaGos10LVij66Bp6wFrZqkgU0R1yTuCrbgj8V2Rw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevamos un tiempo desde que conocimos a Belén comprando en esta tienda de calle Cisneros .\nSomos 5 familiares y nos encanta el trato . Belén es súper profesional .\nEl equipo es estupendo !",
        Images: null,
        When: ""
      },
      {
        Name: "jose pardo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWVd6gzT6f_BGP77VdKOkmuceUNBDxHWXgoamgtb1fzQoF7E1NcCw=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Una óptica a un nivel muy superior al\nResto. Desde el trato humano y profesional de su personal a la resolución de cualquier problema además de sus descuentos y sus coberturas de seguro para estar siempre en la mejores manos. Un 10",
        Images: null,
        When: ""
      },
      {
        Name: "Manuel Rubio",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVWNY041rhc1JtX-YMUaeFwdEE15S5Yo5_ugEyVhKvo4-lhu8Wk=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Fui a graduarme la vista y resulta que me había equivocado al coger la cita y la cogí en el otro general Optica pero igualmente la chica me atendió de maravilla, creo que se llamaba Laura. Es una garantía de trato siempre, además hacen buenas promociones.",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen Ruiz Salazar",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLz6JMKdGlGtX07qHYrLEVT3_jegciVFeWCoIuUr2GtWERc0A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Siempre que he necesitado de sus servicios,  a lo largo de varios años, he quedado muy satisfecha tanto por los profesionales que tienen como por la calidad y variedad de sus productos. Muchas gracias Belén por tu profesionalidad, amabilidad y trato humano.",
        Images: null,
        When: ""
      },
      {
        Name: "José María Mesa Vera",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL9VQZzx0QXLfEt9FAJxNLMcYiXqN7ldhK5-r65n3zuOJywow=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Fui para acompañar a mis padres a recoger un par de gafas, que no acabaron de gustarle a mi madre una de ellas como quedaron. Estuvo Cristina con nosotros más de una hora, hasta encontrar el cristal deseado y además coger otras de sol. Inmejorable trato, súper amable y gran profesional!!! Además de buenos precios. De momento no utilizo gafas, pero si en un futuro las necesitara o me pidieran recomendar alguna óptica, tendría claro que sería la vuestra y en concreto asesorado por Cristina. Saludos",
        Images: null,
        When: ""
      },
      {
        Name: "Alberto Aguilar Vázquez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJGg2Lr8vo8YyfzvcbbmV9CHTVp7w9r_06Jq9Soqjacpwj2fA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Esta ha sido mi óptica desde hace años, y con razón. Ayer me atendió Manuel, el trato fue excepcional y me aconsejó de manera muy profesional. Una experiencia excelente.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Multiópticas (Óptica en Málaga)",
    category: "Óptica",
    address: "C. Alfonso Ponce de León, 3, Churriana, 29004 Málaga",
    description: "Multiópticas en Málaga (Churriana) es generalmente bien valorada por su atención cercana y profesional. Los clientes destacan la amabilidad, paciencia y claridad del personal, así como la rapidez del servicio. Se menciona una gran variedad de modelos y buenas ofertas. Sin embargo, una clienta expresa un fuerte descontento por problemas con la graduación de sus gafas y los costes adicionales para corregirlos.",
    serviceRatings: {
      atencionCliente: 4.5,
      profesionalidad: 4.0,
      precio: 4.0,
      variedad: 4.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "http://www.multiopticas.com/",
    phone: "952 12 40 45",
    review_count: 959,
    review_rating: 4.9,
    latitude: 36.655511,
    longitude: -4.478977,
    user_reviews: [
      {
        Name: "pili Gallegos Arcas",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUO84REK258SH833pvW1WwgRvdzfGbnp5BlUl_p529mOVJccSDg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hoy estuve en esta óptica con mi padres\ny la experiencia fue excelente. La atención fue cercana y profesional, se nota que les importa realmente el bienestar del cliente. La mujer que nos atendió fue muy amable, paciente y nos explicó todo con mucha claridad. Nos ayudó a encontrar la mejor opción y se tomó el tiempo necesario para resolver nuestras dudas. Sin duda, un servicio de calidad y un trato humano que se agradece. Muy recomendable",
        Images: null,
        When: ""
      },
      {
        Name: "Paola Segalerva",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU6rq-UzxcgzBgF8RzUsWTV8WR0WV9i-09afCc3LIGjB-gYmEiC=s120-c-rp-mo-ba2-br100",
        Rating: 1,
        Description: "Muy descontenta … me siento engañada…. Compré dos gafas , unas progresivas y otras de corta y media visión en septiembre del año pasado …. Tuve que volver a los dos meses porque no veía bien con ninguna de las dos y la misma chica que me volvió a tomar la graduación me hizo el comentario de que no entendía como me la habían graduado anteriormente pues no tenía nada que ver una con otra ….unos meses más tarde sigo sin ver bien con ninguna de las dos y he vuelto a que me mirasen la graduación y mi sorpresa es que primero me dicen que solo me ha variado un 25% y que tendría que pagar de nuevo 550 euros y elegir otras monturas nuevas …\nMe negué a hacerlo y después de unos días vuelvo a llamar y me dicen que me hacen el 50% ….\nHoy he ido y solo los cristales de una de las dos son 195 euros ….. solo de una de ellas !! Dónde está el 50 % ? Y además me vuelven a recomendar que con tan solo una diferencia del 25 % de la vista que no las cambie ….\nEn definitiva me las tengo que comer con patatas porque no me dan ninguna solución que no sea gastarme otros 550 euros y mis gafas tienen menos de un año y encima ni las uso porque no están bien graduadas……Menudo fracaso …. Y menudo timo …..Buscaré unos buenos profesionales y buena calidad de cristales y gafas en otro lado … está claro ….\nEsto ha sido en la tienda del Plaza Mayor en Málaga",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipN8CgrMaWn-Tjr0WamsO4Eia1aTvf_HyOVL7JGn&fid=0x0:0xc1d0111d69be5f66"
        ],
        When: "2024-9-18"
      },
      {
        Name: "Luciana Belizon",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX-L5fQ6fbqYmT7s_mcHMQaTDcWpGa5CviDaCJzsAMwr1o4YUcI1A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Pedí unas gafas y me llegaron súper rápido. Las chicas súper amables todas\nTe dan una funda chulisima también",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipM24qMLK_eCkKBgSTyet8TEmHkBGqMgdTgHG5VX&fid=0x0:0xc1d0111d69be5f66"
        ],
        When: "2024-12-26"
      },
      {
        Name: "Carolina A.",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjW8bnvzM9ujttArUY5v5UIE4pVZD1n4bQdvqDgH_fNmOKJe-XEj=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me encanta cómo me siento tan cómoda con las gafas y la atención de los profesionales es absolutamente maravillosa. Te adoro Patri!\nEn pocos sitios me he sentido tan bien. ¡Un equipo increíble que hace la diferencia! Recomiendo este lugar con todo mi corazón, 100%",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO2Bw2N4ZOansBbRaatIi9Uw5mwt96m1rtqC90f&fid=0x0:0xc1d0111d69be5f66"
        ],
        When: "2025-1-20"
      },
      {
        Name: "Alma Valma",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWEYf1h2g-56elp670XBBKRFrDZWvuL11mDzBSNnruV3AP-_osN_Q=s120-c-rp-mo-ba6-br100",
        Rating: 4,
        Description: "Entré para ir mirando y salí con dos pares de gafas. Gran variedad de modelos y muy buenas ofertas de montura con cristales. Allí mismo un oftalmólogo te saca la graduación y a decir verdad me miró más a fondo que cuando fui a la revisión de la vista una semana antes. Totalmente recomendable.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOSrc4KRwdepkI5kabbMrSPxMvIBDrV67FS6DpN&fid=0x0:0xc1d0111d69be5f66"
        ],
        When: "2023-9-15"
      },
      {
        Name: "mari serrano",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUfHdmTscXcHCVm2r6fYD8eHSizAHfGOMWEJoS5AqzQY-pC0es=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "El pasado Sábado 30 en la tarde, me atendió una chica morena de pelo liso (no caí en pregunte el nombre)\nViendo el centro comercial se me rompió una almohadilla de las gafas de sol, y tras preguntar en varias si me la cambiaban y todas decirme que no, entre a probar suerte.\nMe atendió la chica que comenté,  y no hay persona más amable!! Me dijo que se las dejara 10min, y yo le dije que se las pagaba ya, y me dijo que no.\nPues al ir a recogerlas, no sólo me cambió la rota, sino las 2, y de un material muy bueno!.\nY para colmo, no me quiso cobrar ni que le llevase un café ni nada, que vergüenza.\n\nYo puedo entender que a clientes habituales se lo hagan, pero yo llevaba el cartel de turista en la frente, y me sorprendió su amabilidad. Lástima que vivo en Canarias,  si no, sería mi óptica sin duda.\n\nY a ti, nuevamente muchísimas gracias. Eres una gran profesional de tu trabajo.  Saludos!!",
        Images: null,
        When: ""
      },
      {
        Name: "Mariana Burguette",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUDZwl9pp9EhJBgQx_Cnl2wb1zqRluTyE7EEvmIvXnJMXn74y7c=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Increíble experiencia, la señorita muy amable y buena 😊✨️ Hacen muy bien el examen de vista y toman de referencia tus gafas anteriores.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNsyaAtJ8a3Ia2qA5ZZBfORZR0zRMaEcla9jtdH&fid=0x0:0xc1d0111d69be5f66"
        ],
        When: "2024-10-16"
      },
      {
        Name: "angeles jimenez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWCORrCqnCfXj5lJ1xD2ObB7cJJfqki-PcNWjbMQjI2Q0SppA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Nos ha atendido Bea, tanto a mí como a mí papi nos ha tratado muy bien. Nos ha sacado dibujos para pintar. Y las gafas nos han gustado mucho.\nUn trato genial, preocupados en todo momento en que las gafas nos sean realmente útiles en todas las situaciones diarias",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Multiópticas",
    category: "Óptica",
    address: "Calle Goya, 2, Carretera de Cádiz, 29002 Málaga",
    description: "Este establecimiento es reconocido por su excelente atención, rapidez y precios competitivos. Los clientes destacan la eficiencia de profesionales como Laura, quien resolvió problemas y gestionó documentación de manera oportuna. Antonio y Laura también son mencionados por su trato cercano, profesionalidad y la calidad en la graduación y montaje de gafas. Además, la óptica ofrece precios competitivos y buenas marcas, con un personal paciente y amable que facilita la elección de monturas. Los usuarios también resaltan la limpieza y el buen ambiente del local.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      martes: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "17:15–20:30"
      ]
    },
    website: "https://www.multiopticas.com/es/tiendas-optica/?id=malaga",
    phone: "952 35 79 27",
    review_count: 55,
    review_rating: 4.9,
    latitude: 36.705377,
    longitude: -4.436806,
    user_reviews: [
      {
        Name: "Nieves *",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUnwRB-mImm81uO6JdAPGVAUMGd6jEOYo7XveXKcc-79xtR9mdo=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Quiero agradecer a Laura, me solucionó el problema de las gafas de mi hijo y me hizo la documentación para el seguro y el mismo día, tenía las gafas listas, son personas muy amables y profesionales y el trato y eficiencia, magníficos. Recomiendo 100%.",
        Images: null,
        When: ""
      },
      {
        Name: "mary jara Jaramillo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWVQHs5D3OyBnlrepUbdQjyZBiuN-_mIX0fPiXzgdArTDPEZX0p=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Maravillosos atención .rapidez y precio muy recomendable",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKUaP9dn39iLcFbVlSELBhaT-1Pcc_7AyhpE7cxrdbs1UOsnw=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Cuando ya casi tienes perdida la confianza de encontrar sitios donde la profesionalidad y la honestidad sean baluartes y pilares donde se asiente el know how, te topas con este establecimiento que a simple vista puede parecer una óptica cualquiera, pero que según tratas con ellos te vas dando cuenta que no es nada disimulado ni impostado, sino que verdaderamente son así: profesionales que te van a saber orientar y asesorar de una manera transparente y sincera.\nTodo mi agradecimiento por la gestión realizada en la adquisición de mis gafas y sin duda alguna, los recomiendo totalmente.\nNo dudo de que queden muchos establecimientos y empresas con este buen proceder pero en mi caso, es de lo mejorcito que me he encontrado en años.\nBarrio de Huelin, cuidadlos. Os lleváis una joya.",
        Images: null,
        When: ""
      },
      {
        Name: "V S S",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXRM3Rl7Ibq3bj_E7N4YMnrgZ4aEclNu6f8wmp40GWwiffz5s0=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Me encanta ir porque Laura y Antonio siempre nos tratan muy bien. Son cercanos y sobre todo, buenos profesionales. La graduación y el montaje de las gafas genial. Aparte, tienen un precio muy competitivo y buenas marcas: eso es un plus importante.",
        Images: null,
        When: ""
      },
      {
        Name: "Alejandro Chacón de Castro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI73RrdhcrgaYzk8y83ID4pMI0UzX0bHdtK9J0kcivMKxMdlA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me atendieron muy bien y tuvieron mucha paciencia conmigo probándome casi todas las monturas de la tienda para elegir unas. Eso se agradece.",
        Images: null,
        When: ""
      },
      {
        Name: "Aishana Makeup",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVkkGzqO7lLHq-Zj8OQBENP8B41DthCHEo9IEdSLkRWhXSDOYf8hg=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Me da igual lo lejos que me pille o tener ópticas más cerca porque aquí me atienden con muchísima profesionalidad, amabilidad y con un cuidado y cariño muy especial.\nSiempre huele a limpio y todo está reluciente.",
        Images: null,
        When: ""
      },
      {
        Name: "Mari Carmen Muñoz",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXySPgpeN3kzR3wqoyWWU7RFfKQPoZAJsAIEY3JT2hLPXA3xdOl=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Hace cuatro años estuve para hacerme unas gafas y quedé súper contenta con Antonio el chico que me atendió es súper agradable y ahora hemos vuelto otra vez mi consuegra y yo y nos ha aconsejado y además hemos comprado las gafas a un precio estupendo muchas gracias por el trato recibido",
        Images: null,
        When: ""
      },
      {
        Name: "Elvira Quijano",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXuAyXKHI5yUAznQ2YyOVGOjRoazJDUdKeIoNuNwhxtdQQnWx38=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Mi graduación es un poco difícil pero eso no ha sido un obstáculo para Antonio y Laura, su profesionalidad es evidente y si amabilidad un punto a tener en cuenta. Nos han fidelizado con su trato.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Barbarela SOHO | Málaga",
    category: "Óptica",
    address: "C/ Trinidad Grund, 21, Distrito Centro, 29001 Málaga",
    description: "Esta óptica genera opiniones diversas. Mientras que un usuario expresó su sorpresa por el precio de un repuesto en comparación con experiencias pasadas, la mayoría de los comentarios son muy positivos, resaltando el trato excelente y la gran profesionalidad del equipo. Los clientes mencionan una larga trayectoria de satisfacción con la óptica desde 1999, destacando la excepcionalidad del servicio recibido.",
    serviceRatings: {
      atencionCliente: 4.5,
      profesionalidad: 4.5,
      precio: 3.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–14:00",
        "16:30–20:00"
      ],
      lunes: [
        "9:30–14:00",
        "16:30–20:00"
      ],
      martes: [
        "9:30–14:00",
        "16:30–20:00"
      ],
      miércoles: [
        "9:30–14:00",
        "16:30–20:00"
      ],
      sábado: [
        "10:00–13:00"
      ],
      viernes: [
        "9:30–14:00",
        "16:30–20:00"
      ]
    },
    website: "https://barbarela.com/",
    phone: "952 21 85 60",
    review_count: 9,
    review_rating: 4.6,
    latitude: 36.716899,
    longitude: -4.422802,
    user_reviews: [
      {
        Name: "Yannick Busson",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWT055G34ll5tyPAc0cKNf5Aa7WsbSCzYO6POeGpR_ltqEK3zbK=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Necesitaba un recambio de ramas para las gafas que compré aillí. Me anunciaron 80 € con una rebaja que me aplicaban. Le dije que yo estaba sorprendido ya que la ultimas vez en Jaen capital me costo 35€. Me dijeron pero hace cuantos años. Es cierto era en 2017… las compre a 80€ ya que no me quedaba otro remedio… Ahora que tengo la referencia veo que las pudiera haber comprado por 23€.",
        Images: null,
        When: ""
      },
      {
        Name: "Dounia Naitlho",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJwahG3t69GOw_JOV7jCOAROIs0Ip5n12KJibfRWgc_fUbvNA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo comprando en óptica Barbarela desde 1999 (cuando estaban en calle Larios) y no tengo mas que palabras de agradecimiento para ellos.. Son maravillosos y sumamente profesionales! Un Gran Equipo y sin duda los mejores.",
        Images: null,
        When: ""
      },
      {
        Name: "ROSA REBEL GONZALEZ",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXVK79nngAjroHvQBg2iBcc_85rtIMjHexNTpt72YRQoDAHlNxE=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo muchos años comprando mis gafas en óptica barbarela y a cada gafa más bonita , un trato excelente y grandes profesionales .",
        Images: null,
        When: ""
      },
      {
        Name: "jose antonio garcia",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLww5vXnIQli0_soEsHk1Ri9e3UyzPAMawqihWaCPmLzuFS=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Genial, trato excelente y grandes profesionales. 👏👏👏",
        Images: null,
        When: ""
      },
      {
        Name: "NaturClimb",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVgPxaLTZeKbzE0kzKuk5Ah9NCpiE3lsQzUSpO7qDlbgXu2EOLT=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Como siempre el trato y el servicio excepcional",
        Images: null,
        When: ""
      },
      {
        Name: "chiqui haro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLsAbqJyewX16CqrmVP7X4en0L0_yBDhftGxbvjy327mtq4fw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Atención excelente. Grandes profesionales",
        Images: null,
        When: ""
      },
      {
        Name: "Alberto Alonso",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK0ud3qyeegAnuhU0BnzMgdms1Ucuym69irKbIGu4xSmVVfYlXO=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "",
        Images: null,
        When: ""
      },
      {
        Name: "maria del mar miguel arias",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK3M6KNTD0Nns4NFBOelMt5Dx8IsuQPsSXJ93avmIHA5z-z4Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "OPTICALIA VELÁZQUEZ",
    category: "Óptica",
    address: "Av. de Velázquez, 37, Carretera de Cádiz, 29003 Málaga",
    description: "En esta óptica, la atención al cliente es altamente valorada, destacando la amabilidad, paciencia, conocimiento y gran profesionalidad de Eva y Rosa. Los usuarios aprecian la disposición para solucionar problemas, como el cambio de lentes progresivas sin inconvenientes. Se menciona que disponen de monturas para todos los gustos y precios, y el personal se enfoca en asegurar la satisfacción del cliente y la elección del producto adecuado. El trato es descrito como familiar y atento, con un personal muy amable y profesional que ofrece muchas opciones de monturas y cristales a buenos precios.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:45",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:45",
        "17:00–20:30"
      ]
    },
    website: "https://www.opticalia.com/es/tiendas/optica-malaga-avenida-velazquez-37-opticalia-beethoven",
    phone: "951 24 50 10",
    review_count: 38,
    review_rating: 4.5,
    latitude: 36.698014,
    longitude: -4.447583,
    user_reviews: [
      {
        Name: "Margarita Martinez Coiduras",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLjdvS6zCPqyDpjC_iPrZB6Aia_Gcvj5Kuu_geUKbHS1VhHkg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Quiero destacar la atención al cliente, amabilidad,\u00a0 paciencia, conocimiento y gran profesionalidad tanto de Eva como de Rosa. Me hice unas gafas progresivas de alta tecnología y por las circunstancias que sean no me hacía a ellas. Sin problema alguno me han cambiado a otra marca, y estoy encantada.\nTienen monturas para todos los gustos y precios.\nPara ellas lo importante es que el cliente salga de contento y con el producto adecuado.\nRecomiendo a estas DOS GRANDES PROFESIONALES !!!!!!!!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMpx_lmSUbiTseQut135FWybr8yQem-qDAoFanT&fid=0x0:0xd7033e362c5a41db"
        ],
        When: "2022-6-15"
      },
      {
        Name: "Manuel Montero Rodriguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJU05OnFXHfdHZ-3Am0pia8Bblv98ff1pz1zWFsZOlHUB5NLA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Son muy amables y el trato es muy familiar lo recomiendo son muy profesionales estoy muy contento con ellos",
        Images: null,
        When: ""
      },
      {
        Name: "Luis Daniel",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWLPZtGWMfWn_Z1axlZVksD1WwlQDFmpIkWX4Dbq3POB0Jq_ETS=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La primera vez que vine a esta óptica fue por cercanía, pero me atendieron tan bien que siempre que necesito unas gafas me acerco aunque ya no me pille tan a mano. Las chicas son muy profesionales, muy amables y te consiguen lo que necesites. Tuve también un par de problemas y me los solucionaron en tiempo récord. Vamos, que si estás leyendo esto y necesitas unas gafas ya sabes dónde ir ;)",
        Images: null,
        When: ""
      },
      {
        Name: "Mónica Peña Porras",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLITv-ce8MWp4CA8Yzf2Mhm6Cis2oe6QSPgUKBGOtmGySJeow=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Contentísima desde el primer día con la atención y el cariño recibido por parte de esta empresa y sus trabajadoras. Da gusto ir en cualquier momento. Un abrazo",
        Images: null,
        When: ""
      },
      {
        Name: "Lola lopez nuñez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIIQZbEgTW9QSMLZ5c26xBhAH2nGI3sLExtE4VWm3YisOqelg=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Una óptica genial, de precios lo que te quieras gastar.\nEl trato como si estuvieses en casa, sobre todo con Marina, una persona de las que ya no se ven de cara al público, por su buen hacer y amabilidad.\nSin dudarlo la recomiendo .",
        Images: null,
        When: ""
      },
      {
        Name: "Loryan Rivas",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJBN7IhP5BZCNvW-Gg_v2IjMHJB_OQ5VMGSLPfI0o0C9RQZ8Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato super amable y muy profesional.\nEs la primera vez que vengo y me han asesorado estupendamente.\nEncantada con mi nueva gafa!",
        Images: null,
        When: ""
      },
      {
        Name: "Dani Su",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWZh7zYJ8waeR41Tjg3ERm-hUvOMqIMjeUYaKWvQdEJUlZubqI=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Óptica muy completa,con muchas opciones para adquirir cualquier montura y cristales a muy buen precio,trato del personal que sin muy amables,arentas y profesionales.",
        Images: null,
        When: ""
      },
      {
        Name: "Eglia",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJOXO-ouagGb2FEbHUBhtD888SCG0JwO3miYwYJ5zPk9POXcQ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Mucha variedad de gafas, y si no tienen lo que buscas te dan alternativas rápidamente. Son muy amables y te resuelven todo rápidamente.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica y Centro Auditivo Soloptical Vialia María Zambrano",
    category: "Óptica",
    address: "C. Explanada de la Estación, S/N, C.C. Vialia, Local A0-09, Distrito Centro, 29002 Málaga",
    description: "Este establecimiento cuenta con profesionales que recomiendan el tipo de lentes y monturas según las necesidades individuales. Los usuarios destacan la amabilidad y dedicación de empleados como Ylenia, quien se toma el tiempo necesario para atender y aconsejar. También se menciona la profesionalidad y amabilidad de Elena en las pruebas auditivas. Los clientes valoran la rapidez en la reposición de piezas de gafas y el excelente trato recibido, mostrando su intención de seguir comprando en este lugar. La revisión de la vista es realizada con un trato estupendo y gran profesionalidad, y el personal es encantador y muy profesional a la hora de recomendar y guiar en la elección de gafas. Los precios son considerados muy competitivos. Se destaca especialmente a Adrián por su amabilidad, profesionalidad, buena disposición y atención sin prisas.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://soloptical.net/es/soloptical-vialia-maria-zambrano/?utm_source=Google&utm_medium=google_my_business&utm_campaign=sitio+web",
    phone: "600 48 89 35",
    review_count: 631,
    review_rating: 4.9,
    latitude: 36.711927,
    longitude: -4.432917,
    user_reviews: [
      {
        Name: "Jacquelin Aguero",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVARWqh7VD7GvCrLLVfjAca4TFX5rgpYY5p0Ngi2VNd3D2liDqH=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buenos profesionales me han recomendado según mis necesidades el tipo de lentes y montura que necesitaba. Ylenia\nes muy amable, se ha tomado todo el tiempo necesario para atenderme y aconsejarme. También me ha hecho una prueba auditiva Elena, muy profesional y agradable.\n\nRecomendado 100%",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipNj4cLDgHZ1ctsmsGnDZmzETh0PBl4KS-FeGdeQ&fid=0x0:0x74035949a0d6e11e"
        ],
        When: "2025-2-12"
      },
      {
        Name: "lucia martos",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK7aDUcPz6RBwQHvB4o6MPd-Q2R8PW5p712tyMKG9cvTO3CjQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hice mi compra hace varios años, las gafas no había tenido ningún problema anteriormente con ellas, se me cayó una pieza y me la repusieron de inmediato. El trato que me dio el personal excelente. Seguiré comprando aquí sin duda.",
        Images: null,
        When: ""
      },
      {
        Name: "Isabel Bellido",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKr8cB1dZXqQRb0Blfypwxdy1TrVkqEChtQMJdPubVKm0tE-w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estuve esta mañana para graduarme y me atendió una chica súper amable y cariñosa, Rosa.\u00a0 Me supo escuchar y atender de la mejor manera, me recomendó también unas gafas de sol que también las gradué. Es un sol de niña.. ojalá más trabajadoras así en todos los establecimientos!!!!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPzbn6m1AeHeIHu86Tr_5ErjmQRWAk2Emc2ln0m&fid=0x0:0x74035949a0d6e11e"
        ],
        When: "2024-11-9"
      },
      {
        Name: "Ángela Acevedo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUNMiGneRwU9e47PngWi8GknHuk1ZzyKBDZ_x-YKe0uJ5PKgoM6=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Inmejorable. Me han realizado la revisión de la vista con un trato estupendo y mucha profesionalidad. La chica que luego me ha recomendado y guiado para elegir las gafas encantadora y también muy profesional. Recomiendo este sitio al 100% y con precios muy competitivos. Muchas gracias!!",
        Images: null,
        When: ""
      },
      {
        Name: "Patricia Málaga",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLoZHVpxtFOEuzEcOfYV6Wd4tf3tDji4uCEZXtVSoitlxhG_A=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es sin duda la mejor óptica a la que he acudido. Formada por un equipo amable, educado y con gran profesionalidad. Se toman el tiempo que sea necesario para atenderte y sus productos tienen una buena relación calidad/ precio. Quiero nombrar especialmente a Adrián, un chico que es un amor, simpático, atento y que te trata con cariño y sin prisas.",
        Images: null,
        When: ""
      },
      {
        Name: "Sergio Quintana Domínguez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJCxwXgVyWTQ5xDunaOgFbH-sHxJaNo_xbKvDvE_d7VrRV4ZA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Entrar a esta tienda fue todo un acierto. Adrián me atendió con una amabilidad y profesionalidad que realmente marcan la diferencia. No solo me explicó cada opción de forma clara y sencilla, sino que también supo recomendarme lo que mejor se ajustaba a mí, con muy buen gusto. Se nota cuando alguien disfruta de su trabajo. Muy recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Rocio Cp",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLghQkTeG9yHkixDliO1FJmMThjrj2pHCxBveIXIzMsayfqBg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato excelente por parte de las chicas, especialmente de Ylenia quien nos ha ayudado y orientado en todo momento a mí y a mi bebé de dos años a pesar de las dificultades con el niño a sabido cómo llevarlo en todo momento. Mucha gracias por todo. Volveremos!!",
        Images: null,
        When: ""
      },
      {
        Name: "Carmen PR",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXWAS2iNXnX7TObmCADxxuiEoAj2KTdya9JK24F7SnhRw5SVcpZ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He ido esta tarde a por unas gafas sin graduación y las dos chicas que había me han atendido súper bien! muy atentas y agradables! Me han aconsejado que gafas cubrían mejor\nmis necesidades y me han enseñado todas las\nopciones que había en tienda! La experiencia de compra ha sido satisfactoria 😊",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Opticalia Punto De Vista",
    category: "Óptica",
    address: "Cmo de S. Rafael, 11, Cruz de Humilladero, 29006 Málaga",
    description: "Opticalia Punto De Vista es altamente valorada por su excelente trato y profesionalidad. Los clientes destacan la competencia del equipo, especialmente de Alberto Cañamero y Juan Carlos, quienes han resuelto problemas de visión complejos como la diplopía y la presbicia. Se elogia la buena atención, la capacidad de hacer sentir cómodos a los clientes y la calidad de las explicaciones y el asesoramiento personalizado en la elección de gafas. Los precios también son considerados buenos.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      lunes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      martes: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      miércoles: [
        "10:00–13:30",
        "17:00–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:00–20:30"
      ]
    },
    website: "https://www.opticalia.com/es/tiendas/optica-malaga-camino-san-rafael-11-opticalia-punto-de-vista",
    phone: "952 04 09 50",
    review_count: 114,
    review_rating: 4.6,
    latitude: 36.710899,
    longitude: -4.442488,
    user_reviews: [
      {
        Name: "Juan R",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWhS7sxsFMuuEHd9y006s5xCMjeP8CaGWsEk1rHqvoJKC6OWj9GHQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Tuve un problema de diplopía ( visión doble) en 2021 y me aconsejaron esta óptica, sin exagerar las gafas y corrección con prisma que me pusieron me cambió la vida ya que tenía bastantes dolores de cabeza debido a la diplopía, ahora se le suma que he puesto gafas progresivas y la visión es también muy buena.Muchas gracias a Alberto Cañamero y todo su equipo",
        Images: null,
        When: ""
      },
      {
        Name: "Ismael",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLLDS9kexRY9HXf-JSQDwFK77lSAoEOQ7S82Pldqbg8yUZmaQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Todo estupendo,muy buen trato",
        Images: null,
        When: ""
      },
      {
        Name: "NOM4R. Nuñez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVQJNaOmM8-w2tXAs9MEFSlCM6ZQvbdUODah9Ev3awouVBFzWjZ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me resolvieron mi problema de presbicia . Muy buena atención y buenos precios.🤟🏻",
        Images: null,
        When: ""
      },
      {
        Name: "Nairoby De los Santos Vicente",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIYjh0J14ccgFRGJ-uRs5-I-hk0TCmrXcGy7V715_V2vlhm4Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Buen trato y muy profesionales, me he atendido en varias ópticas y definitivamente es en la que más a gusto me he sentido.",
        Images: null,
        When: ""
      },
      {
        Name: "Rubén Díaz Peña",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI0Tj1TqNNkr0kRaGys4eLEFGWiLpOjnCWIt3hplwGtfvmBWw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un equipo súper competente y lleno de grandes profesionales. Muy contento por el servicio recibido, destacando a Juan Carlos que me ayudo a solventar mis problemas con la vista. Muchas gracias.",
        Images: null,
        When: ""
      },
      {
        Name: "PEDRO RUBIO FIGUEROLA",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjU3BiyNWaUXIDyF1vIUGm79VSI-7fdsGaSvC03PckyPxTxmPMM=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un trato excelente, me explicaron los posibles motivos de mis problemas de visión y me ayudaron a elegir unas gafas acordes a mi estilo. La recomiendo 100%",
        Images: null,
        When: ""
      },
      {
        Name: "Ana Jimenez ojanguren",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIAHAhFM5p9boXiD_7nZdpVH96SK_1y6zhrguAx9skztHT1Gg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo muchos años asistiendo a Opticalia para mis revisiones de la vista, todo el equipo súper atento y amable. En concreto, Juan Carlos, quien me ha tratado todos estos años. Sin duda el mejor óptico que te puedes encontrar en todo Málaga.",
        Images: null,
        When: ""
      },
      {
        Name: "Rafael Blas Antonio Imbroda Gutiérrez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI3fCp1atyd1RlIdMOBq5xFa_pmj48imlVVV99Rq3WWaq3e2w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es una maravilla , ojalá hubiera sabido mucho antes de esa Óptica, pues más contento no puedo estar, yo, desde hace algunos años tenía un defecto en la visión, que doblaba la imagen, y el técnico de Opticália Punto de vista, ha conseguido corregírmelo, le estoy a todos ellos muy agradecido, muchas gracias......!!!!!, yo lo he llamado técnico, no se si se dice Óptico, en todo caso muchas gracias. Estoy muy contento que mi reseña haya servido a otras personas, pues con esas miras he escrito mi comunicado , con un sentido de satisfacción siempre , un gran abrazo a todos gracias👍👍👍👍👍👍",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Soloptical Plaza Mayor",
    category: "Óptica",
    address: "C. Alfonso Ponce de León, Churriana, 29004 Málaga",
    description: "Óptica Soloptical en Plaza Mayor es muy elogiada por la atención excepcional y amable de su personal, incluyendo a Irene, Cristina, Esteban, Sara y Mónica. Los clientes destacan su profesionalidad, conocimiento, paciencia y simpatía, así como su disposición para escuchar las necesidades y ayudar a encontrar las gafas adecuadas. Se valora la rapidez y la amabilidad del servicio, y se recomienda encarecidamente este establecimiento por su excelente trato al cliente.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–22:00"
      ],
      lunes: [
        "10:00–22:00"
      ],
      martes: [
        "10:00–22:00"
      ],
      miércoles: [
        "10:00–22:00"
      ],
      sábado: [
        "10:00–22:00"
      ],
      viernes: [
        "10:00–22:00"
      ]
    },
    website: "https://soloptical.net/es/soloptical-plazamayor",
    phone: "622 36 73 94",
    review_count: 1047,
    review_rating: 4.8,
    latitude: 36.658312,
    longitude: -4.47597,
    user_reviews: [
      {
        Name: "Ana Martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIDJRPL7aqeq9NNm3LzINmf-PMD5WK9NScDKX_fh3ciOgBIYg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Nos ha atendido Irene esta tarde, nos hemos llevado dos gafas y solo puedo decir que ha sido una atención estupenda. Una chica atenta, simpática y nos ha aconsejado muy bien. Da gusto tratar con alguien tan competente como ella!",
        Images: null,
        When: ""
      },
      {
        Name: "David Leiva moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWsLut8gx4wvGND523roKiOnyvADljrWbPFtkEDINt9bPen4Uo=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Quiero destacar la atención excepcional que recibí por parte de Cristina en Soloptical. Desde el primer momento, se mostró muy profesional y amable, escuchando mis necesidades y ayudándome a encontrar exactamente lo que buscaba. Su conocimiento sobre los productos y su paciencia para explicarme las opciones disponibles realmente me sorprendieron. Además, hizo que todo el proceso fuera rápido y agradable. Sin duda, volvería a este establecimiento gracias al excelente servicio de Cristina. ¡Totalmente recomendable!",
        Images: null,
        When: ""
      },
      {
        Name: "Patricia Antolin Moreno",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK-c75c1HVucXNk0vOdAdOC5ct0zbq5io1LetlK2M7h5UbHZQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente trato por parte de los profesionales. En concreto Esteban que fue el que me aconsejó y atendió sintiéndome muy cómoda y resolviendo mis dudas. I",
        Images: null,
        When: ""
      },
      {
        Name: "Leonardo Uhlenburg",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUP5oXYE-U2jucjTV5VIJPM5XvkzIWlTwCJgqscXXLANsK5PsLH=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevaba tiempo queriendome hacer unas gafas progresivas y he dado en la clave con Soloptical. Una atención profesional y muy amable. Las gafas quedaron genial y he solucionado mi problema de visión de cerca sin perder la de lejos. Estoy muy contento 🤓",
        Images: null,
        When: ""
      },
      {
        Name: "Neda El abdellaoui",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJPFixHlKC5k7F0jerFHlyhs5pknYv9T6MW36MOnBOLlpxfNw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi hija quiere iniciarse con las lentillas y fuimos para que nos aconsejen. Sara, nos atendió estupendamente! nos explicó todo, le graduó la vista y le regalaron unas lentillas para un mes, para que se acostumbre a usarlas.Tambien estuvo un rato largo enseñándole como se ponen y cómo se quitan. Muy aconsejable el sitio.\nMuchas gracias Sara por tu profesionalidad y amabilidad.",
        Images: null,
        When: ""
      },
      {
        Name: "Sandra Make Up",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVxFaHmgu1Kpp_NVBhd0xQMQYoz6Bp4AqxEt7sjAlsX2goFLg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Soy clienta fija de Soloptical y me he comprado dos gafas graduadas. Y unas de sol graduadas también .  Las chicas son súper apañadas, me atendió Mónica  y tiene un gusto exquisito y una paciencia infinita. Tenéis que venir a Plaza mayor sin duda!",
        Images: null,
        When: ""
      },
      {
        Name: "José María González",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJn3rSjRLTNGN7Gsho9OSnbTsA0t2uZvH6R1fG26mDW_Swv=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hoy me tocaba revisión anual de las lentillas, como siempre me avisan con antelación para concertar una cita, lo que es genial para no olvidarte. Mónica, que es la persona que me atiende lo hace fenomenal y a todo el personal lo veo muy pegado y atento con el cliente. Para mí un 10 por profesionalidad y atención al cliente. Los recomiendo totalmente!!!.",
        Images: null,
        When: ""
      },
      {
        Name: "Olga",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKo78__-9YKESjhLAteADJ4kquqs7hUwQl8stbvJGXxRsK0Bg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mónica es muy amable y atenta. Acudí porque doblé mi montura sin querer, y me la arregló en un segundo y sin ningún coste. ¡Encantada!",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "General Óptica",
    category: "Óptica",
    address: "Alameda Principal, 24, Distrito Centro, 29005 Málaga",
    description: "General Óptica en Alameda Principal tiene opiniones diversas. Algunos clientes están encantados con el servicio, mencionando los beneficios de la tarjeta Privilege y el trato exquisito y profesional de Mariló. Se valora la libertad para explorar la tienda y las buenas ofertas. Alberto y Javier también son destacados por su atención y paciencia. Sin embargo, un cliente expresa un gran descontento por problemas con la calidad de las gafas Rayban, los altos costes de reparación, la falta de apoyo de la garantía y una mala experiencia de atención al cliente.",
    serviceRatings: {
      atencionCliente: 4.0,
      profesionalidad: 4.0,
      precio: 3.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–20:30"
      ],
      lunes: [
        "9:30–20:30"
      ],
      martes: [
        "9:30–20:30"
      ],
      miércoles: [
        "9:30–20:30"
      ],
      sábado: [
        "9:30–20:30"
      ],
      viernes: [
        "9:30–20:30"
      ]
    },
    website: "https://www.generaloptica.es/es/?utm_source=gmb&utm_medium=organic&utm_campaign=Malaga&utm_term=1086",
    phone: "952 60 15 66",
    review_count: 93,
    review_rating: 4.5,
    latitude: 36.717695,
    longitude: -4.423956,
    user_reviews: [
      {
        Name: "Manu Losada Montesinos",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVXJMLf2IacLEMPb-5zXyZz11kv6yPLoyFKthnTTME1uSuQ1DFRQQ=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Encantado con el servicio que ofrecen. Merece la pena sacarse la tarjeta Privilege, todo son beneficios con descuentos y ofertas exclusivas. Por poner una pega, recientemente han rotado el personal entre varias tiendas que tienen en Málaga y no le veo sentido (finales de 2023). Llevamos años acudiendo a la misma tienda y siempre se tiene más confianza con el personal que te atiende siempre, y no quiero decir que es que los \"nuevos\" te atiendan mal.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPsXZHyYw0L-qbVLy2iJfMbsaD0nDZSg6DmQHKU&fid=0x0:0x79d462085f7a2cb3"
        ],
        When: "2024-1-24"
      },
      {
        Name: "Hamdany Mustang",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWTHwSaSC8dPYftMZUo6jmmJzPv_uqjy-jqFwieJppGdTyoQAk=s120-c-rp-mo-br100",
        Rating: 2,
        Description: "Las patillas de gafas graduadas de Rayban se le empezaron a desprender las gomas, cuando fui en persona me pedian 72 euros por cada patilla, esto es el coste de la propia montura. Ninguna mención de la garantía de fabricante de 3 años que figura en factura.\n\nAl agravarse contacto con atención al cliente adjuntando fotos claras del desgaste y pidiendo que me confirmen, repito: que me confirmen, si garantía del fabricante aplica en este caso, ellos me piden ir a la tienda, les informo que no es posible porque de momento estoy en el extranjero, y no tienen otra mejor forma de ayudar que decir lo mismo. Sólo pedía confirmación de si aplica la garantía de fabricante, las fotos eran claras.\n\nSi compro una montura cuyos cristales valen 300 euros y me piden cada 2 años el coste de la montura por reparararlas (que por cierto, compré el par de patillas originales por 42 euros) y me dan largas cuando pido y aún es vigente la garantía de fabricante no vuelvo a comprar más aquí ni la familia.",
        Images: null,
        When: ""
      },
      {
        Name: "Dionisio Blasco",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXK63nzLxGp2dAA0v4D3lhkodVCvEYiWVVrn3_NBVpbrwEkAqO_=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente calidad y eficacia, estupendo asesoramiento. Mariló es una gran profesional con un trato exquisito. Sin duda mi óptica de referencia",
        Images: null,
        When: ""
      },
      {
        Name: "Marcos",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVeISnaH7DwhOxrLwZdRD8JJm3mz_HYtxcdfHmUPJDuLf1BGDwSOA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Hace 3 años compré unas gafas y me gradué la vista, he de decir que soy una persona con cierta aprensión a los vendedores y me gusta que me dejen ir por libre en las tiendas y tener independencia para ver tranquilamente, elegir, etc.\n\nMi experiencia fue muy buena, la atención que recibí fue excelente, la confianza que me dieron superó todas mis expectativas y después de 3 años volvería aunque fuera solo para ver las gafas de graduación que tienen dentro, sin ninguna presión porque me pregunten.\n\nSin duda alguna cuando tenga que volver a una óptica voy a ir a ésta. Todo fue muy bien explicado y tienen muy buena ofertas y ventajas.\n\nSe han ganado mi confianza y merece la pena, son una óptica con variedad, buenos precios y calidad, pero por encima de todo son excelentes profesionales.",
        Images: null,
        When: ""
      },
      {
        Name: "Alexis Atencia",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL12lXTAa5_n1DQ0WXKQXtcHR4xKOrgnVF9NqPIGBPW5fbcNw=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Gran calidad a muy buen precio. Alberto es un chico genial y muy profesional además de todo el equipo.\nNos orientaron para gafas y lentillas para que nos saliera lo más económico posible.\nGracias",
        Images: null,
        When: ""
      },
      {
        Name: "--",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIXewIm-hJPm6j903uM4b0Fz5CxE2Z5cKciDirD1n-TJdXQSw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "He comprado unas gafas de sol graduadas. La atención, amabilidad y paciencia en la venta de la montura por parte de Javier y en la graduación y ajuste por parte de Alberto, han sido encomiables. Volveré sin duda en el futuro",
        Images: null,
        When: ""
      },
      {
        Name: "Isabel Nieto",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVsxcMqf1zmIvuo2ChAwy9FgZy3F3AnN3Rj0uDRNmVdfJme3r6Q=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Grandes profesionales con un trato exquisito.\nLa atención recibida ha sido excepcional, tanto de la optometrista que me revisó la visión como del “gran Ramiro” que me asesoró en la elección de mis gafas de sol graduadas. Un excelente profesional que cuida hasta el mínimo detalle para atender a sus clientes.\nSin duda, una óptica recomendable cien por cien.",
        Images: null,
        When: ""
      },
      {
        Name: "Lolo.",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLAdVE-Q-iZL-foCIOGZLd9r56W5wgm9Ukad-SugX-UbMBjUw=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Grandes profesionales,me quedo con Joaquín de Marbella y Elena de Sevilla.,Sierpes.Todos encantados pero ellos,lo más.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Multiópticas",
    category: "Óptica",
    address: "C. Cristo de la Epidemia, 56, Distrito Centro, 29013 Málaga",
    description: "Esta óptica recibe comentarios positivos sobre la excelente atención y amabilidad de su personal, especialmente Carmen y Manuel, quienes son destacados por su paciencia, buenos consejos y trato profesional. Los clientes se sienten en confianza y bien atendidos, encontrando soluciones efectivas para sus necesidades ópticas a precios competitivos. Sin embargo, también hay menciones negativas sobre problemas con la financiación y acusaciones de prácticas engañosas.",
    serviceRatings: {
      atencionCliente: 4.0,
      profesionalidad: 4.0,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      lunes: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      martes: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      miércoles: [
        "9:30–13:30",
        "17:15–20:30"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "9:30–13:30",
        "17:15–20:30"
      ]
    },
    website: "https://www.multiopticas.com/es/home",
    phone: "744 63 38 42",
    review_count: 58,
    review_rating: 4.5,
    latitude: 36.73011,
    longitude: -4.414812,
    user_reviews: [
      {
        Name: "Nuria Vázquez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWW8RbBT22EGoc_Ha0XaCQJzAKXHD_7n7KMvyr7hJk9oy4MvtkG=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Quiero agradecer a Carmen su excelente atención en la óptica. Desde el primer momento, me hizo sentir en confianza, escuchando con paciencia mi caso y dándome los mejores consejos para mi patología. Se nota que le apasiona su trabajo y realmente se preocupa por ayudar. Gracias a su asesoramiento, encontré la mejor opción óptica para mí. Da gusto encontrarse con profesionales así. Muchas gracias por todo.",
        Images: null,
        When: ""
      },
      {
        Name: "pedro ddlp",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL3_ILFtz54I5D31wsNu_6gFG0eA4vvUXq8Y4rEImgKmM1YDA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me han atendido muy bien, personal amable, y buena resolución con las gafas. Muy buena óptica la recomiendo.",
        Images: null,
        When: ""
      },
      {
        Name: "maria luisa reyes",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK1VfkK0pJGJNdoNVK6zAwQcc6II8jjRSsh3IJEoCgbyvb9jg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Súper amabilidad y muy simpáticos Mi hija alba del rocio siempre es allí. Es de agradecer porque son un gran equipo",
        Images: null,
        When: ""
      },
      {
        Name: "Laura Jiménez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIjk_9aL3XF1oIA7BaZ4SJQ6_uIVHO3VqPI1jv54zOGe49Pyw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Trato excepcional y muy buenos precios.",
        Images: null,
        When: ""
      },
      {
        Name: "Cristina Fernández muñoz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIglxlzAIiBubpbO0mgKScImKNxwFBBoYk8EO1KH-8rEXZ21g=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Fui para que me ayudaran con un oftalmólogo de pago y le explique lo q me pasaba y ellos mismo me ayudaron me explicaron todo gracias por el personal y el caballero que estuvo explicándome todo detalladamente",
        Images: null,
        When: ""
      },
      {
        Name: "Helio Rabadan Toro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLZb1IjREcBIJejwsU-4uT0Q06FqOCe_vkUqvhSPoVDubBhMA=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "No pienso ir nunca más a multiopticas.\n\nPedí financiacion para unas gafas y en cuanto tuve un problema con mi tarjeta me acusaron de moroso y me presionaron diciendo que si no por la vía judicial se iba a resolver, llevo 10 años yendo a esta tienda pero eso se acabó, no me he sentido más humillado en toda mi vida, mi tarjeta estaba bloqueada y por más que intentaba a la empresa de cobros llamar NADIE lo cogia formándome a pagar metiendo mis datos a ciegas en un sitio de pago que a saber si es fraudulento y encima con un recargo de 20 euros, es que esto es para no volver JAMAS",
        Images: null,
        When: ""
      },
      {
        Name: "Always Me",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX5dEbM7MP5fXMai5IxiRkGkhBn9H7zK10pQ7YI4pqcT0tWx9SoQA=s120-c-rp-mo-ba2-br100",
        Rating: 1,
        Description: "Son unos timadores. Hay ópticas mucho mejores, donde no os darán gato por liebre.",
        Images: null,
        When: ""
      },
      {
        Name: "Juan Manuel Corral Maldonado",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWWgoFyowVpFTD17q1c3zu9gQLf9NwniFC9XOnwsTr_LoSprFdA=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Esta mañana he ido a graduarme la vista y mirar un par de gafas. El trato ha sido espectacular. Manuel es un gran profesional, ha sido súper eficaz y tiene una capacidad de atención al cliente, increíble. Enhorabuena. Esta tarde nos pasaremos a decidir finalmente las monturas. 👓❤️",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Centro Óptico Andrómeda",
    category: "Óptica",
    address: "C. Andrés Bernáldez, 24, 29010 Málaga",
    description: "El Centro Óptico Andrómeda es reconocido por sus precios competitivos en lentillas y la rapidez en la reparación de gafas, además de un trato amable y familiar. Los clientes valoran la atención y comprensión del personal, especialmente con los niños. Tati es destacada por su excepcional servicio y paciencia en la graduación de la vista y la selección de gafas. Sin embargo, existen experiencias negativas sobre un trato deficiente y cargos inesperados por servicios que se esperaban gratuitos, así como presupuestos considerados elevados. También se menciona un trato excelente, profesionalidad, monturas modernas a buen precio y especialización en el cuidado visual infantil.",
    serviceRatings: {
      atencionCliente: 3.5,
      profesionalidad: 4.0,
      precio: 3.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "16:00–19:30"
      ],
      lunes: [
        "10:00–13:30",
        "16:00–19:30"
      ],
      martes: [
        "10:00–13:30",
        "16:00–19:30"
      ],
      miércoles: [
        "10:00–13:30",
        "16:00–19:30"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "10:00–13:30",
        "16:00–19:30"
      ]
    },
    website: "http://opticaandromeda.com/",
    phone: "952 28 36 59",
    review_count: 59,
    review_rating: 4.8,
    latitude: 36.722339,
    longitude: -4.46507,
    user_reviews: [
      {
        Name: "Marcos gamer 10",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJXCcJw4i6TrqEybDs-ZvM6k2OgEBDaZoBZT_K0CdA9vzQHXQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me aconsejaron está óptica y acertaron 💯. Precios de lentillas baratos, reparación de gafas rápido . Trato muy amable y familiar. Lo recomiendo 💯.",
        Images: null,
        When: ""
      },
      {
        Name: "Gala Gandarias",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUi4ClL27iBYauKGHJoyaCvMVkXUf780oIOF1kXqlOPh4tAq1qP9Q=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Mi niña estaba apenada por tener que estrenar gafas, pero gracias un magnífico trato y comprensión, ha salido súper contenta.\nMuy recomendable, sobre todo para peques.\n¡Muchas gracias por todo!",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipOIdwAmA_yt0wgUG0evY2lehDn1sCW3fKta0G86&fid=0x0:0x156e00c53cf50d94"
        ],
        When: "2025-1-29"
      },
      {
        Name: "Jorge Márquez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWOKqoQMBnF1t_V8NF_sAEjs8Tobd9Yz-cjFIXo585EZB5MK5Nh=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Después de aceptar que el tiempo no perdona y que necesitaba gafas para cerca, decidí visitar la óptica Andromeda. Desde el momento en que entré, me sentí en buenas manos. Tati me atendió, y el trato fue excepcional. Dedicó todo el tiempo que necesité para graduarme la vista y encontrar las gafas perfectas. Su paciencia y experiencia hicieron que el proceso fuera sencillo y sin complicaciones. Ahora, gracias a Tati y a la óptica Andromeda, tengo unas gafas que se adaptan perfectamente a mis necesidades. ¡Estoy encantado con la atención y el servicio que recibí",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPYjNxkC8oiWqBMakg5i3SqRdEooQ4NKgegBy2F&fid=0x0:0x156e00c53cf50d94"
        ],
        When: "2023-10-24"
      },
      {
        Name: "Juan Antonio Camero De Haro",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL5NEM08c-jNLVK0BxUMsDR8hyRQCNFwtY091_LIVk0-0UhVg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es la segunda vez que vamos y la verdad que estamos encantados , tanto por el trato como por la profesionalidad , además de por la rapidez del servicio.\nTotalmente recomendable !!!",
        Images: null,
        When: ""
      },
      {
        Name: "Manuela HC",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKxqQfs_vW-2Iflz2E5qXdHRATaG6Mi-StlSLYCrgi-Y6RoMA=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Trato pésimo. He ido a graduarme la vista y a comprar las gafas con un precio de 175€ y el trato de la chica ha sido pésimo y de una persona bastante mal educada. No se si esta chica es la dueña del establecimiento y o es una dependienta, pero tratar así al cliente deja mucho que desear.\nMe pido las gafas y me pide un adelanto algo que veo totalmente normal, le digo que lo único que tengo encima son 30 euros porque estoy en la biblioteca y no llevaba nada encima y me dice que no, que tendría que ser más, me mira con mala cara y termina riéndose en mi cara.\nPara no volver nunca más!!!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Fatima Ayat",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVJJC0mTRBJxXDUkxEmDe3DTiysaNuQaBXkemfgXpDYDrr8Wtk=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Me he sentido engañada. Quería un presupuesto de gafas y lentes y me informan de que para ajustar ese presupuesto es necesario contar con la valoración de la vista. Me la hicieron y resulta que me hacen pagar 35 € por la valoración. Me explican que para que me salga \"gratis\" la valoración, debo comprar las gafas y lentes. Y sólo después de hacerme la valoración, me dieron el presupuesto de gafas básicas y lentes progresivas de gama media, por nada menos que 769€. Me parece desorbitado y no accedí a comprarlas. Pero de pagar la valoración no me libraba ya: \"Tienes que pagar por el servicio que te hemos prestado\" me dijeron con unos modos ya muy desagradables, en comparación con la amabilidad con la que me recibieron. Salí decepcionada y con gana de llorar.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO2PnR1dt8TtZ7pZk6wmu7lI1K4tat-nZEwBUVP&fid=0x0:0x156e00c53cf50d94"
        ],
        When: "2024-5-20"
      },
      {
        Name: "Marisa Solano",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVWt2HtLdMj5QYFtBnNdBum35kWNQaq4b7O5mK_PJB9YnVtbsPJ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente trato, muy profesional. Siempre tuve problemas con las graduaciones de las gafas hasta que comencé a acudir a este centro.\n\nTiene monturas modernas y actuales a muy buen precio.\n\nAdemás, están especializadas en niños, el trato con ellos es genial, tanto en las\u00a0 revisiones, graduación o en los tratamientos. Mi hijo está encantado cuándo tenemos que ir. La recomiendo a todas las madres y padres.",
        Images: null,
        When: ""
      },
      {
        Name: "Car J R",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUq3HSh0XSUkUXow1a-0H-maUCXMwFkQ-8kP_3gHjFJPXjnh_s9=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Pues bueno, la verdad es que solo tenemos buenas palabras para esta óptica y su propietaria. Mi hija tiene gafitas desde que tenía un año y medio con una graduación muy alta y el trato por parte de la óptica ha sido perfecto. Siempre teniendo en cuenta todas las posibilidades económicas, todas las posibilidades emocionales para mi hija, dependiendo de una gafa u otra , un cristal u otro. Para un padre y una madre que traten de esa manera a tu hija te gana, por qué no solo piensa en que le va a quedar mejor estéticamente, sino como puede percibir todo eso de manera emocional ante cambios en su rostro como esos a la hora de llevar gafas. Tati se preocupa por tu hijo y eso es exactamente lo que busca un padre/madre cuando contrata a un profesional para tu pequeño.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "ÓPTICA MÁLAGA VISIÓN. Urgencias a Domicilio. Especialistas en PRÓTESIS OCULARES.",
    category: "Óptica",
    address: "C. Arenal, 1, izquierda, Málaga-Este, 29016 Málaga",
    description: "Óptica Málaga Visión es altamente valorada por la profesionalidad y amabilidad de Manuel y su esposa, quienes siempre están dispuestos a ayudar. Los clientes destacan la eficiencia y el trato encantador, considerándola una de las mejores ópticas de Málaga. Se resalta la capacidad para realizar graduaciones especiales y la resolución inmediata de problemas con las gafas. El trato profesional y humano es muy apreciado. Un aspecto distintivo es su especialización en prótesis oculares, con un trabajo meticuloso y detallado que resulta en prótesis de apariencia muy natural y un seguimiento continuo para su mantenimiento.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 3.5
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "10:00–13:30",
        "17:30–20:00"
      ],
      lunes: [
        "10:00–13:30",
        "17:30–20:00"
      ],
      martes: [
        "10:00–13:30",
        "17:30–20:00"
      ],
      miércoles: [
        "10:00–13:30",
        "17:30–20:00"
      ],
      sábado: [
        "10:00–13:30"
      ],
      viernes: [
        "10:00–13:30",
        "17:30–20:00"
      ]
    },
    website: "http://optica-malaga-vision.negocio.site/",
    phone: "952 21 88 50",
    review_count: 89,
    review_rating: 4.8,
    latitude: 36.719205,
    longitude: -4.410909,
    user_reviews: [
      {
        Name: "Encarna Morenate",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKKh6poK0AxMm07ow4vNiDQSSEsw6DueA1qetsywYjr6NsA3w=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buenos profesionales. Manuel y su esposa también son muy amables y siempre dispuestos a ayudar.\nMis últimas y favoritas, gafas de sol las compré aquí.\nProducto 10 , trato al cliente 10.\nGracias!!!",
        Images: null,
        When: ""
      },
      {
        Name: "marisa ayoso",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJsQaFBhTvtskhLXtxOtzlVweHwySmSLE0G6edvdlAYNYLayA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "La atención ha sido maravillosa, super eficientes ambos y sobre todo encantadores. Sin duda una de las mejores ópticas de Málaga.",
        Images: null,
        When: ""
      },
      {
        Name: "Pedro Campos Nieto",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ_uRGj4woGqqmNNpSAAgYiOM5uyVn_BEKUvbGZEnYmDjRPMQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Estoy muy satisfecho. Mi enfermedad precisa de graduación especial, y en esta óptica me la han hecho.\nSiempre me han resuelto en el momento, cuando he tenido algún incidente con las gafas.\nExcelente trato profesional y humano.",
        Images: null,
        When: ""
      },
      {
        Name: "Pepe Del Río",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJ_Egc6mAab1-bYg3orwHf-lK0QPk6hXzjcS90ZAV3Sgzstfw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente servicio. Me atendieron de manera estupenda; ambos muy majos y educados.",
        Images: null,
        When: ""
      },
      {
        Name: "Aleksander Hamadi",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL2lI-Bjh77HpBB0yZFpUOUxI1rskyw47JNjqyiAugc-DMDNA=s120-c-rp-mo-ba2-br100",
        Rating: 1,
        Description: "Es un lugar para recoger pedidos de Nike..\n\nPone horario de 17h a 20h por las tardes, de lunes a viernes.\n\nLlego un miércoles a las 17h21 y no hay nadie...",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipMtWmv_wxDnYTGgJMav2Nkb8By6U0otvRhqOiCh&fid=0x0:0x7b2de8a810767c14"
        ],
        When: "2024-2-7"
      },
      {
        Name: "Vanessa Rivas",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKUFISZkiiPrXMMutZwclceBC_YQ75cYS_JvYPOXv218QwZgw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Manuel es un excelente profesional, que me resolvió el problema con mis gafas inmediatamente. Me había sentado encima de las gafas y la patilla estaba casi rota, pero con su profesionalidad logró arreglarme la patilla. Lo recomiendo al 100%, el mejor óptico de Málaga. Gracias Manuel!",
        Images: null,
        When: ""
      },
      {
        Name: "Arantzazu Rivera Fernández",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJahjroM0xeGT6TUZBeW0y8Jz881iUOb70hHBZc_XrSOOsBGg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi madre, una mujer muy guapa y coqueta, perdió uno de sus preciosos ojos verdes alga, tras muchos años de tratamientos de todo tipo y operaciones. Fue necesario pero a la vez el miedo a verse sin un ojo, sin saber muy bien si se notaría o no la prótesis, en una mujer tan activa como ella, con sus corales, sus actividades, a pesar de tener 81 años, se ve más joven.\nNos hablaron en el mismo hospital de éste protésico, y muy bien sobre su trabajo. Allí que fuimos. Es lo mejor que pudimos hacer. Se toma su trabajo de forma muy seria y es muy metódico. Toma todo lo que necesita, y su tiempo, para que sea lo más perfecta posible la prótesis ocular, tan perfecta, que una vez puesta no fui capaz de diferenciar el ojo real de la prótesis. También hay que decir que la Cirujana hizo un trabajo espectacular, conservando el músculo, que permite en una prótesis bien hecha, mover el ojo. En cuanto a su tonalidad, es impresionante lo real que se acerca al ojo humano, y la imitación de las venillas. Si no lo hubiera visto, no lo creería. Un trabajo impecable, y lo mejor es que su hijo también continúa con la profesión. Tanto padre como hijo tienen unas manos profesionales espectaculares, esperamos que sigan ayudando a las personas a sentirse bien de nuevo, guapas y sin que se note la falta de un órgano tan visible como es el ojo. Gracias por vuestra labor.",
        Images: null,
        When: ""
      },
      {
        Name: "belen sanchez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX4B4G_syRp3J3GGqIxj4m173MgJU6NhDfewUd3f0IpDfRZnIvQMQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Conocí esta óptica cuando solicite mi segunda prótesis ocular, quise probar haber qué tal me iba. La primera diferencia fue que me tomaron medida de mi ojo , y me hicieron sentir como si conociera de toda la vida a Manolo. Me sentí muy cómoda y escucha toda las propuestas que le haces, intentando cumplir todas ellas. Después el seguimiento de tu prótesis para que siempre este como nueva . Y la más importante nadie nota que llevo prótesis. Cuando hago los reconocimientos médicos de mi trabajo, siempre les tengo que decir que es una prótesis porque ni el oftalmólogo lo descubre. En mi última revisión me pregunto el oftalmólogo por la óptica que me lo había hecho porque es un trabajo excelente para enviar a los demás pacientes. Mil gracias Manolo y familia por vuestra profesionalidad y cariño que nos dais. Venid a óptica Málaga visión no os arrepentiréis.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
{
    title: "Óptica Arango",
    category: "Óptica",
    address: "C. Arango, 15, Local 1, Distrito Centro, 29007 Málaga",
    description: "Óptica Arango es altamente recomendada como una óptica de confianza con un trato excelente y muy personal. Los clientes han confiado en esta óptica durante muchos años, destacando la profesionalidad y amabilidad de Jose Manuel. Se elogia la durabilidad de las gafas, los buenos precios y la atención recibida, especialmente cuando se trata de niños. Los clientes valoran la variedad de marcas y modelos disponibles y la recomiendan al 100%.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      lunes: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      martes: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      miércoles: [
        "9:30–13:30",
        "17:00–20:00"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "9:30–13:30",
        "17:00–20:00"
      ]
    },
    website: "",
    phone: "952 61 79 20",
    review_count: 43,
    review_rating: 5,
    latitude: 36.720723,
    longitude: -4.434208,
    user_reviews: [
      {
        Name: "Alberto Aguilar",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJlh3gAQiJSfDyKSzvW1vHk5vbDT-A7YrL1Pac4VjgUcavvXg=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "La óptica de confianza de toda la vida. Ya no solo las mías, si no las de toda la familia, que acabamos depositando nuestra confianza en Jose. Trato excelente y muy cercano. Las gafas son muy duraderas y siempre nos han aguantado hasta que nos ha cambiado la graduación. Recomendable 100%",
        Images: null,
        When: ""
      },
      {
        Name: "Mariola PASCUAL",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIR59GcRWYhZC7nXmPzq1pcxkuy_hQrHNlj33-A_BbN8WMEyw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Perdí mis gafas durante las últimas vacaciones en Málaga. Una amiga me recomendó esta óptica a la que ella va habitualmente. La graduación fue perfecta pues veo mejor con mis nuevas gafas que con las que había perdido. Muy buenos precios y excelente atención recibida por parte del profesional.",
        Images: null,
        When: ""
      },
      {
        Name: "Rebeca Ae",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWt0PeoPvGdHODEcW4i-wTzojokGCGb07WkREgVE41bQzy-TUgu=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Me recomendaron la Óptica Arango y, desde entonces, es mi óptica de confianza. José Manuel es un gran profesional, confío plenamente en su criterio y buen hacer (¡mis ojos dan fe de ello!); además, es una persona amabilísima y agradable, es un placer acudir a su óptica. ¡Gracias por todo!",
        Images: null,
        When: ""
      },
      {
        Name: "MARIA TERESA VERGARA",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIHlFo90stq909tuef1IuqBdRJbWATsdeCXhqjG3GaLf8SnwA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Sin duda Optica Arango ya es mi óptica de confianza! Jose es un gran profesional y nos atiende siempre con muchísima amabilidad! Siempre hablo del buen trato que recibo.He mandado a amigos que han necesitado sus servicios y todos vuelven!\nRecomendable 100%",
        Images: null,
        When: ""
      },
      {
        Name: "Daniel Vergara",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKTX_A8pcqbXqNNkTTm6gCuBscOFgLtBGWZ0Mn6mEe4lVRGTA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Optica Arango lleva tratándome desde hace más de 20 años. Tiene una gran variedad de marcas, modelos y accesorios para gafas.\nJose es un excelente profesional, que con un trato cercano te orienta y te da las mejores soluciones. 100% recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Oliva Moreno Muñoz",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKeFf7A_UsfXXoa3y1SVxS4tdvjYZOlyWgSBYSV62G3D2it=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Óptica Arango es una óptica muy recomendable por el trato tan profesional y humano de José Manuel. Precios muy competitivos y muchas gafas preciosas para elegir. Muy recomendable y por supuesto repetiré otra vez.",
        Images: null,
        When: ""
      },
      {
        Name: "Ina Georgescu",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXIm7OAZboLxfWyDMRsezBHhVjwFGpeukvPf1FWJChwj9LKNGW2=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Un trato excepcional muy familiar y especialmente muy paciente con los pequeños. Tienen productos de muy buena calidad. Hemos ido con nuestra hija para elegir unas gafas de vista. Primero le ha graduado la vista, le ha dado unas cuantas gafas para probar y la niña encantada admirándose en los espejos. Le ajusto las patillas. Una semana o así mas tarde hemos vuelto y la niña tenia sus gafas con su estuche y kit de limpieza. Ahora se los lleva orgullosa todos los días al cole.Las gafas son muy resistentes. Muchas gracias por todo! Volveremos seguro!",
        Images: null,
        When: ""
      },
      {
        Name: "Cristina Anton",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKuRVEWZXIs-XXZgqRBFAZi7ckKgh_gLoxgGrd3r9CCpRmXMA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Excelente trato y profesionalidad de diez . Somos cinco en mi familia y todos confiamos en el establecimiento tanto para lentes como para lentes de contacto. Mis hijas son muy pequeñas y se han adaptado perfectamente a las lentes de contacto gracias a la profesionalidad de Jose . El no duda en aconsejarte con lo que mejor se adapta a tus necesidades cada momento. Lo recomiendo siempre a conocidos y amigos .",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica y Centro Auditivo Ulloa Óptico Málaga",
    category: "Óptica",
    address: "Atarazanas 2 Esquina, C. Prta del Mar, 16, Distrito Centro, 29005 Málaga",
    description: "Óptica y Centro Auditivo Ulloa Óptico Málaga es elogiada por su excelente servicio y la confianza que genera en los clientes. Se destaca el trato personalizado y la atención a las necesidades individuales. La tienda ofrece una gran variedad de modelos de gafas de sol y monturas ópticas innovadoras. Los clientes están muy satisfechos con la calidad de las gafas, la rapidez en la entrega y la profesionalidad del personal, incluyendo menciones específicas a Rafa. La atención es calificada como exquisita, profesional y muy amable, con clientes que han confiado en esta óptica durante muchos años.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.0,
      variedad: 5.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:30–20:30"
      ],
      lunes: [
        "9:30–20:30"
      ],
      martes: [
        "9:30–20:30"
      ],
      miércoles: [
        "9:30–20:30"
      ],
      sábado: [
        "10:00–20:30"
      ],
      viernes: [
        "9:30–20:30"
      ]
    },
    website: "https://ulloaoptico.com/",
    phone: "952 12 12 69",
    review_count: 47,
    review_rating: 4.7,
    latitude: 36.718599,
    longitude: -4.423012,
    user_reviews: [
      {
        Name: "Rafael Moriana Benitez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIIU6_vQek_mIgcZIyuNidytYdB6MCrMuBKVJAwe2AYJatIoQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Un excelente servicio , creando una gran confianza/empatía con el comprador.\nTratando tus necesidades, gustos , y tiempo,  de forma personal.\nUna tienda espectacular, con unas  gafas de sol y/o monturas óptica muy NOVEDOSAS .\nMínimo tiempo de espera para recoger mis gafas graduadas ( 48h aproximadamente) .\nPuedo decir que: SOY UN CLIENTE MUY SATISFECHO CON EL SERVICIO,  Y COMPRA REALIZADA.\nGracias RAFA, por su tiempo y entender mis gustos.",
        Images: null,
        When: ""
      },
      {
        Name: "Flores Ojeda",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX0wZ8uQbt0TCgNnXnqceabZHpYLL7ySJ4nd0cuEpCnh7KgZgTnsA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Atención exquisita y profesional. Poseen una gran variedad de modelos, de muchas firmas y gafas exclusivas. Muy contenta con la compra. La atención por parte del personal ha sido perfecta y sobre todo, veo genial. Sin duda será mi óptica de referencia. Muchas gracias!",
        Images: null,
        When: ""
      },
      {
        Name: "Er tito dani xd",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWRc_LHTE0q5GuOE-LU1ObMMroofse5muCJFQgbyDAwEpf4msM=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena calidad de gafas y muy buen servicio por parte de las trabajadoras, me atendió una señora que hacía muy bien su trabajo y se notaba que tenía experiencia.\nLlevo ya casi 7 años pasándome por allí y sin ningún problema todavía",
        Images: null,
        When: ""
      },
      {
        Name: "Eduardo Palma",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIR4XpmpB-B_HACPPVb7QRWyX7y2q2IhVlRkFZdL_2MoHxnVA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Fueron muy amables, excelente atención y me resolvieron un problema con mis gafas. Sigan atendiendo así y continuará el éxito 👏🏼👏🏼👏🏼",
        Images: null,
        When: ""
      },
      {
        Name: "Arturo Moya Fernández",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWc7OTK6vWDVAe1th6W9Q6YYHk3zWcA3rF75ctJIXyTSSevZr2L=s120-c-rp-mo-ba4-br100",
        Rating: 5,
        Description: "Llevo más de 20 años siendo cliente y siempre el trato personal ha sido excelente y atento. Las revisiones periódicas y soluciones dadas también han sido siempre acertadas y ajustadas económicamente. Muchas gracias.",
        Images: null,
        When: ""
      },
      {
        Name: "Sandra",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWPtUcMUvIGkerGnK6yUqqr77ft8ImRyHe64YGNg_EDRvDTaVWj=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Muy buena ubicación, trato muy amable y profesional.\nMuy contenta con los productos comprados. Sin dudas 100% recomendable.",
        Images: null,
        When: ""
      },
      {
        Name: "Tito",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVQ7JMzXL6dtb-F7_aoJUEB_jXz_TsGwqA1Kibphh5KIhgGpCM0jQ=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "Paramos con mi hijo de 6 años porque se le rompieron sus gafas de sol favoritas. Fueron muy amables con él, se la repararon en un momento y no quisieron cobrarle.\n\nSu felicidad no tiene precio.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO2F7aPiGa_zRDNGUUoAK5uJ8EWImxGGMQ-Cy9D&fid=0x0:0xa8db31c198ed61e9"
        ],
        When: "2018-7-11"
      },
      {
        Name: "Maika Molina Martin",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocITQiE2NrTbirv-TMuQPRFLwzaSXVMgDu0SIKucJWurEaNdYA=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Es la primera vez que visitaba esta óptica y sin duda no será la última, la variedad de firmas es importante y el trato y la atención recibida fue excelente, me sentí muy cómoda.",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "gafas.es El Molinillo",
    category: "Óptica",
    address: "C. Salamanca, 3, Local 1-2, Distrito Centro, 29013 Málaga",
    description: "gafas.es El Molinillo tiene opiniones diversas. Algunos clientes elogian el trato exquisito y el buen asesoramiento del personal, destacando la amabilidad de María. También se valora la disposición para atender sin cita previa y la variedad de estilos y precios de las gafas. Sin embargo, varios clientes han reportado problemas significativos, incluyendo retrasos en la entrega de gafas, mala comunicación sobre los horarios de la tienda y el cierre inesperado, así como problemas con la calidad de los cristales y la falta de soluciones satisfactorias.",
    serviceRatings: {
      atencionCliente: 3.5,
      profesionalidad: 3.0,
      precio: 4.0,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:00–14:00",
        "17:00–20:00"
      ],
      lunes: [
        "9:00–14:00",
        "17:00–20:00"
      ],
      martes: [
        "9:00–14:00",
        "17:00–20:00"
      ],
      miércoles: [
        "9:00–14:00",
        "17:00–20:00"
      ],
      sábado: [
        "Cerrado"
      ],
      viernes: [
        "9:00–14:00",
        "17:00–20:00"
      ]
    },
    website: "https://marketing.net.gafas.es/ts/i4661476/tsc?amc=socialorg.brillende.501607.512285.55163&smc1=smc1=es-lp&rmd=3&trg=https%3A%2F%2Fwww.gafas.es%2Fstorepage%2F%3Fstore%3D23772",
    phone: "",
    review_count: 80,
    review_rating: 4.2,
    latitude: 36.727284,
    longitude: -4.424669,
    user_reviews: [
      {
        Name: "Isabel Corrales",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV-nCW5L0jXuCM4wk4FUcd4z22bYkqLBrrbkWnfr8yg1gqtvD4=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Las profesionales que atienden la óptica se interesan por el cliente más allá del puro interés comercial!  Trato exquisito y muy buen asesoramiento y servicio! El trato face to face nunca podrá ser sustituido por I.A. Gracias especialmente a María por esa bondad natural que hace tanta falta  en la sociedad!💝",
        Images: null,
        When: ""
      },
      {
        Name: "Dayana Abreu Camare",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUfeKsJWG_mnHdkojbhip-VRZ_gRjDH4aUCecm6NQBy7KB_636F=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Un trato genial... han sido muy amables.... normalmente atienden con cita... pero tuvieron la amabilidad de atenderme sin cita... fui a acompañar a mi marido que tenía una cita con ellos y han hecho tiempo y me han podido realizarme una valoración ... luego me han mostrado todos los modelos de gafas ... hay de todos los estilos y que se ajustan a todos los bolsillos.... muy recomendables",
        Images: null,
        When: ""
      },
      {
        Name: "Antonio Crespo",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocK2P31spZBFYfS3wqmzg58tZC98j5Hq4CAl5xiKUeDP8JfPdQ=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Aver lunes 12 pasé a recoger pues me avisaron por wasap que mis lentes estaban y hoy martes 13 no responden al teléfono fijo. No voy a recorrer 30 km igual que ayer para mirar el cartel de la foto y la persiana cerrada.\nNo escriban lo que no van a cumplir. Falta de seriedad=a escasez de buena clientela, esa fórmula es infalible y el tiempo la avala.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPArVwjoQbm0yMiA8L5C9A_7T7yCNAnsdiCH-ng&fid=0x0:0xbeb79c17c730f63a"
        ],
        When: "2024-8-13"
      },
      {
        Name: "Maricel Garcia",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKLczGaH5n9I4kvCndz9-kMlD4rZP8DUKEmKlS1R6PvTFTKSQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Encantada con precio,calidad de las gafas y profesionalidad del personal . Volveré y mi familia también.  Gracias por todo les deseo muchos éxitos como se merecen.",
        Images: null,
        When: ""
      },
      {
        Name: "Hac Ker",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIKcHFkSrJH2n913Ft5uDdsHZH3rLncMiAKqpLUrXses0cDBA=s120-c-rp-mo-ba5-br100",
        Rating: 5,
        Description: "Personal muy amable y atento. Productos de buena calidad y precio. Gracias",
        Images: null,
        When: ""
      },
      {
        Name: "Boowie Velco",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWjugN-r7Kff8pWWh6xtbqo6A-gSrWojoIqZDHBuR86UjkdQNJZ=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Llevo esperando desde el pasado 23 de octubre a qué me den aviso para recoger mis gafas, me dijeron que en 10 días me llamarían, no recibí ningún llamado, cerraron la tienda SIN AVISAR, fui por mi cuenta por esto mismo y me encontré con que la tienda habia cerrado PERMANENTEMENTE y que solo abririan los dias 8 y 13 de noviembre, nota de aviso que nunca se me informo ni por correo ni por llamada y que solo pude leer en un papel pegado al local. El 13 fueron los avisos por lluvias de la Dana y no iba a arriesgar mi vida por ir al local, que probablemente estaba cerrado, hablé con servicio al cliente y me dijeron que darían aviso a la tienda sobre esto y que se pondrían en contacto conmigo, han pasado 4 días desde eso y no he recibido NI INFORMACION NI MIS LENTES\n\nY pagué el mismo día que fui a la revisión",
        Images: null,
        When: ""
      },
      {
        Name: "Alros Málaga",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJKDARi2LE02nIbax4ZXYMwseelggiE0U5hYfF-ASMSg5FYzA=s120-c-rp-mo-ba3-br100",
        Rating: 5,
        Description: "El personal de tienda es amable y aconsejan bien a los clientes.",
        Images: null,
        When: ""
      },
      {
        Name: "289-77 Isaka392",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKVY0rYK-wTjP6bzhnaMJMNCpKu5lHg9Ak1LCJAtxQ0hKI8Cw=s120-c-rp-mo-br100",
        Rating: 1,
        Description: "Ponen los cristales mal , el enfoque de un ojo más alto que el otro , me di cuenta por que fui a óptica de amiga , allí se dieron cuenta después de dos años pensando que tenía muy mal la vista con unos agobios que solo se yo , les pido que arreglen y me quieren poner mismos cristales después de dos años no tengo que tener la misma diotria o como se llame no soy ofralmologa , pero bien que llevo culpandome dos años y han sido ellos y no quieren arreglar el desarreglo 1 estrella para poder comentar",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
    title: "Óptica Barbarela Av Juan XXIII | Málaga",
    category: "Óptica",
    address: "Av. Juan XXIII, 61, Cruz de Humilladero, 29006 Málaga",
    description: "Óptica Barbarela en Av Juan XXIII es altamente recomendada como una óptica de confianza con una amplia variedad de gafas a precios muy buenos y un trato especializado y excepcional. Los clientes destacan la profesionalidad y el buen gusto de Marina. Se valora la atención recibida, incluso para consultas sin intención de compra inmediata. Los clientes de larga data elogian la calidad, la profesionalidad y la atención exquisita del personal, incluyendo a Lorena, Rocío y Juanca, quienes brindan un servicio personalizado y están siempre atentos a las necesidades de los clientes.",
    serviceRatings: {
      atencionCliente: 5.0,
      profesionalidad: 5.0,
      precio: 4.5,
      variedad: 4.0
    },
    open_hours: {
      domingo: [
        "Cerrado"
      ],
      jueves: [
        "9:00–14:00",
        "16:00–20:00"
      ],
      lunes: [
        "9:00–14:00",
        "16:00–20:00"
      ],
      martes: [
        "9:00–14:00",
        "16:00–20:00"
      ],
      miércoles: [
        "9:00–14:00",
        "16:00–20:00"
      ],
      sábado: [
        "10:00–13:00"
      ],
      viernes: [
        "9:00–14:00",
        "16:00–20:00"
      ]
    },
    website: "http://www.barbarela.com/",
    phone: "952 33 57 45",
    review_count: 92,
    review_rating: 4.2,
    latitude: 36.712005,
    longitude: -4.446585,
    user_reviews: [
      {
        Name: "Gema Sojo",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXRxaHD_ZVu44jbBlFOSkw7eEQ01P61e8m7D_HN7txlAQ-rVrXj=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Óptica de confianza por excelencia, siempre voy a graduarme allí la vista. Los modelos de gafas son espectaculares y a un precio buenísimo. Trato especializado y excepcional!! Agradecerle  a Marina su profesionalidad  y buen gusto!! Volveré encantada!!! 10/10!!!",
        Images: null,
        When: ""
      },
      {
        Name: "Óscar Ms106",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWHzizVMJCdCGd9bVrYd2P__T86CXb5dxdAyMS8xhvUyZNavP1SPg=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Experiencia increíble, fui solo a hacerme una consulta debido a que estoy opositando, y me dieron muchísimos consejos y me contaron mil experiencias de otros opositores para sacar el mayor rendimiento de mi ojo, profesionales como la cabeza de un pino, sin buscar sacarte el dinero. Sin palabras por el trato.",
        Images: null,
        When: ""
      },
      {
        Name: "Tony Ramirez",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUlAl29WMDeIRt1jrdH15t6h3P0wzzNrCwtpNOJ5O1AbzMlkhc=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Ni recuerdo la de años que mis gafas graduadas y de sol no salen de otra óptica que no sea esta. Calidad, profesionalidad y atención exquisita antes, durante y después de ponerme gafas nuevas. Recomendadísimos.",
        Images: null,
        When: ""
      },
      {
        Name: "Cristina Iglesias",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocL-FFz8_bsgi_7TE8fyt02A0VYpYqgOMmrGQD8VrGjhHuDhfQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Hasta el momento, y ya van 10 años q llevo a mi hija, todo han sido experiencias buenas. Gracias a Lorena por tratarla siempre con cariño y a mi Rocío, que ya es como de la familia.",
        Images: null,
        When: ""
      },
      {
        Name: "Anuka Gar",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjWqDk6UGBwt1ZjXRjo8M8NAod5rwc9p5jRr028qj__hiSGHtCBjyQ=s120-c-rp-mo-ba2-br100",
        Rating: 5,
        Description: "Como siempre Juanca es un profesional y sus recomendaciones excelentes llevo varios años atendiéndome y todo el personal es Excelente.",
        Images: [
          "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO0xlgF7plsd-8dWbx_Si1jNSCdyxcrvuztrf-s&fid=0x0:0x7a72114373301d8f"
        ],
        When: "2025-1-30"
      },
      {
        Name: "Mari Paz Roselló López",
        ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVacuuQJBZu3Di1H7vCyWcn4qct9KV3j9DUJXGya461Z0oVmTycrw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Desde 2012 o quizás antes soy clienta de la óptica de calle Sevilla. Todo el personal de la óptica es muy responsable y prestan una atención excelente. Especialmente Juan Carlos es un profesional maravilloso con una paciencia infinita, amable, simpático y muy resolutivo.\nFelicidades a todo el personal",
        Images: null,
        When: ""
      },
      {
        Name: "Juan P",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJnAmgPZY-0fBybK9sLWd0NGNeJPfYNxkgGqx53hlxrwXufkw=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Llevo muchos años siendo cliente de Barbarela, en su óptica de calle Sevilla, donde Juan Carlos me da siempre una atención excepcional. Estaba preocupado por que mi hija de 5 años pudiera tener alguna dificultad de visión, y Juan Carlos me derivó a la óptica de Juan XXIII, donde su compañera Cristina es especialista en optometría infantil. Nos dio una atención excelente y muy profesional a la vez que cercana, y por suerte pudimos descartar que nuestra hija necesite gafas. Además, ya que estábamos allí, evaluó a mi hijo de 2 años y medio, descartando también cualquier problema. Por último, sus compañeras hicieron unos ajustes en mis gafas y las de mi mujer. Todo ello sin coste.\nRecomiendo que cualquier persona que pueda estar preocupada por la visión de sus hijos/as, que acuda a uno de sus centros, y con Cristina estarán en las mejores manos.",
        Images: null,
        When: ""
      },
      {
        Name: "Davinia Gallego ramirez",
        ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJuXKL5oiiKuTITJeahjKjREb_yyyJY6YbeR1y1d6sZ2Un2CQ=s120-c-rp-mo-br100",
        Rating: 5,
        Description: "Mi óptica de confianza !! Desde que con 16 años me pusieron gafas hasta día de hoy a mis 32 años  !! Una atención personalizada increíble y sobre todo ayudan en cualquier incidente ! Ayer rompí mis gafas de hace 4 años y una hora me han graduado vista, buscado unas que se adaptasen a los cristales , arreglado y todo dado en el momento!! La atención de todos pero en especial de Rocío y Juanca, siempre tan atentos y cercanos!! De 10!! Recomendado al 100%",
        Images: null,
        When: ""
      }
    ],
    emails: "",
    province:"málaga"
  },
  {
  title: "Centro Óptico Borges",
  category: "Óptica",
  address: "Av. Jorge Luis Borges, 10, 29010 Málaga",
  description: "El Centro Óptico Borges es altamente recomendado por su magnífica atención y asesoramiento profesional, destacando a Elena por su seguimiento en la adaptación de lentes de contacto y a MªÁngeles y Mariángeles por su excelente trato, paciencia y profesionalidad en la graduación de la vista y la elección de gafas. Los clientes están encantados con la calidad de las gafas, la rapidez del servicio y los precios insuperables. Se valora especialmente el enfoque independiente de la óptica, centrado en las necesidades reales del cliente.",
  serviceRatings: {
    atencionCliente: 5.0,
    profesionalidad: 5.0,
    precio: 5.0,
    variedad: 4.5
  },
  open_hours: {
    domingo: [
      "Cerrado"
    ],
    jueves: [
      "9:30–13:30",
      "17:00–20:30"
    ],
    lunes: [
      "9:30–13:30",
      "17:00–20:30"
    ],
    martes: [
      "9:30–13:30",
      "17:00–20:30"
    ],
    miércoles: [
      "9:30–13:30",
      "17:00–20:30"
    ],
    sábado: [
      "10:00–13:30"
    ],
    viernes: [
      "9:30–13:30",
      "17:00–20:30"
    ]
  },
  website: "http://www.centroopticoborges.com/",
  phone: "952 71 88 61",
  review_count: 109,
  review_rating: 5,
  latitude: 36.720107,
  longitude: -4.460746,
  user_reviews: [
    {
      Name: "Lesya Yakymovych",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIh_zdHYLmmEFyAqlrUMfsoxvBuDl8mV73ip_TNAxsIA_fdLA=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Magnífica atención y asesoramiento muy profesional de Elena. La adaptación a las lentes de contacto ha sido perfecta, con seguimiento estupendo. Estoy muy contenta. Muchas gracias.",
      Images: null,
      When: ""
    },
    {
      Name: "Jacobo Rosado",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXpY_MeyVTjb2oz4Cbd0JXofBabV_W6zcyMznCCC_O5C8gL91Rv=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Una atención excelente, me graduaron la vista y me asesoraron para elegir las gafas. En 2 días ya tenían mis gafas listas, además, quedé encantado con el trato de MªÁngeles. Volveré seguro!",
      Images: null,
      When: ""
    },
    {
      Name: "Alexandra M Pelaez Vasquez",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKslG3RnQ2DPWAl1eTP3t1AtmoK6C3Er5pTWv1gAiRAE6gT=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Optica Borges: ¡100% recomendada!\nLa atención es excelente. Mariángeles es muy amable y paciente, se nota su profesionalidad me ha explicado todo de manera clara y concisa.\u00a0 Y mis gafas me encantan, fue una elección muy acertada",
      Images: null,
      When: ""
    },
    {
      Name: "Mariuth Sandoval",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLLfZyvcWzlPI1Z_ogE8HUIh5a51cneYgVUgvrSgX4P9xuz_w=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "El trato es excelente, te hacen la graduación que necesitas para ver perfectamente tanto de lejos como de cerca, tienen variedad de monturas a cual más bonitas , te saben aconsejar las que te quedan mejor , las tienes en pocos días y todo perfecto, el precio es insuperable. Muy satisfecha de haber escogido esta óptica .",
      Images: null,
      When: ""
    },
    {
      Name: "Manuel Jesús Huertas Gutiérrez",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUnAVnwfOoo1QN8xMdrISN_SP-ukNfR23ujJto5xpwi2EHeCbA=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Trato excelente. Me hice una revisión y en todo momento la atención y el trato hacia mi fueron increíbles. Todo bien explicado. Sin dudo muy recomendable.",
      Images: null,
      When: ""
    },
    {
      Name: "Miguel Díaz",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocI6NebyRHaFxhWMP8sOxv9nu_znEZcgsIGOHcBAwye1QkV1Xw=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Sin lugar a dudas, el mejor servicio en ópticas en Málaga. He sido cliente de una de las cadenas de ópticas más conocida y grandes de España, pero me hablaron muy bien de Borges y vine a probar mi cambio de gafas allí. Nada que ver. Se nota que es una óptica independiente y que no vela por los objetivos de venta de la cadena, sino por satisfacer lo que de verdad el cliente necesita. Muy recomendable si quieres lo que de verdad necesitas y no lo que la cadena necesita vender. Enhorabuena!",
      Images: null,
      When: ""
    },
    {
      Name: "Angela Fontana",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIHvnwnY_rM88ASliKTDmCqReBUyNo8I30_vjD6FvEpH5OONw=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Magníficas profesionales !!! Un acierto haber encargado las gafas allí. Totalmente recomendable.",
      Images: null,
      When: ""
    },
    {
      Name: "Rosa María García Barroso",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUu0hNm_4EQFgiZpmjcPKidu8eai1HHeoZnRlCffZ5poRZ-EW4=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Es el lugar ideal para graduarte la vista con una magnífica profesional. La variedad de gafas que tienen es estupenda y te asesoran magníficame te en la elección de las que mejor te van. Súper recomendable !!!",
      Images: null,
      When: ""
    }
  ],
  emails: "",
  province:"málaga"
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
