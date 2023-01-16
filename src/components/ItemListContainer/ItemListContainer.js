import "./itemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productos = [
    {
      id: 1,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427",
      price: 0,
      title: "Counter-Strike: Global Offensive",
      category: "Accion",
      launchment: "21/8/2012",
      description:
        "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años",
    },
    {
      id: 2,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009",
      price: 59.99,
      title: "Read Dead Redemption 2",
      category: "Accion",
      launchment: "5/12/2019",
      description:
        "Después de que un robo sale mal en la ciudad occidental de Blackwater, se ven obligados a huir. Con agentes federales y los mejores cazarrecompensas pisándoles los talones, la pandilla debe robar y abrirse camino para sobrevivir.",
    },
    {
      id: 3,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/851850/header.jpg?t=1673638283",
      price: 59.99,
      title: "Dragon Ball Z: Kakarot",
      category: "Rol",
      launchment: "17/1/2020",
      description:
        "¡Revive la historia de Son Goku y otros Guerreros Z en DRAGON BALL Z: KAKAROT! Conoce el mundo de DRAGON BALL Z no solo por sus épicos combates, sino también mientras luchas, pescas, comes y entrenas con Son Goku, Son Gohan, Vegeta y muchos más.",
    },
    {
      id: 4,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/469600/header.jpg?t=1672762896",
      price: 14.99,
      title: "Legion TD 2",
      category: "Estrategia",
      launchment: "1/10/2021",
      description:
        "Un juego de un solo jugador y de multijugador con infinita rejugabilidad. Defiéndete contra oleadas de enemigos y destruye al rey de tus oponentes antes que destruyan al tuyo. Agrupate hasta con 8 jugadores.",
    },
    {
      id: 5,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1647420/header.jpg?t=1673434308",
      price: 15.74,
      title: "GROSS",
      category: "Estrategia",
      launchment: "11/1/2023",
      description:
        "En un mundo donde la codicia ha tomado forma física y ha corrompido al hombre y a la máquina, embárcate en un épico viaje por carretera para salvar lo que queda. Usa tus armas, torretas, trampas y habilidades para mantener la línea.",
    },
    {
      id: 6,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1377380/header_alt_assets_6.jpg?t=1670896468",
      price: 20.99,
      title: "Night of the Dead",
      category: "Supervivencia",
      launchment: "28/8/2020",
      description:
        "Construye defensas contra las oleadas nocturnas de zombis. Sobrevive y escapa de la isla.",
    },
    {
      id: 7,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg?t=1667318479",
      price: 69.99,
      title: "Need for Speed: Heat",
      category: "Carreras",
      launchment: "8/11/2019",
      description:
        "No pares por el día y arriésgalo todo por la noche en Need for Speed™ Heat Deluxe Edition, un juego de carreras callejeras dinámico donde los límites de la ley se desvanecen cuando empieza a anochecer.",
    },
    {
      id: 8,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1673029404",
      price: 59.99,
      title: "Forza Horizon 5",
      category: "Carreras",
      launchment: "9/11/2021",
      description:
        "Explora los paisajes dinámicos en constante evolución de México gracias a la acción que vivirás al conducir los mejores coches del mundo de forma ilimitada y divertida.",
    },
    {
      id: 9,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/389730/header.jpg?t=1671085505",
      price: 39.99,
      title: "Tekken 7",
      category: "Lucha",
      launchment: "1/6/2017",
      description:
        "Descubre el épico final de la prolongada contienda entre miembros del clan Mishima. La legendaria saga de juegos de lucha vuelve a la carga con este título creado con Unreal Engine 4 que ofrece espectaculares batallas con cinemáticas narrativas.",
    },
    {
      id: 10,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg?t=1673585687",
      price: 59.99,
      title: "Street Fighter 6",
      category: "Lucha",
      launchment: "1/6/2023",
      description:
        "¡Aquí llega el peso pesado de Capcom! Street Fighter™ 6 sale a la venta en todo el mundo el 2 de junio de 2023, ¡y trae consigo una nueva evolución de la saga Street Fighter™! Street Fighter 6 incluye tres modos de juego: World Tour, Fighting Ground y Battle Hub.",
    },
    {
      id: 11,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/header_spanish.jpg?t=1672777947",
      price: 49.99,
      title: "UNCHARTED™: Colección Legado de los Ladrones",
      category: "Aventura",
      launchment: "18/10/2022",
      description:
        "Juega como Nathan Drake y Chloe Frazer en sus aventuras independientes, en las que deberán confrontar sus pasados y forjar sus propios legados.",
    },
    {
      id: 12,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1378990/header.jpg?t=1666113934",
      price: 39.99,
      title: "Crash Bandicoot 4: It's about time",
      category: "Aventura",
      launchment: "18/10/2022",
      description:
        "¡Ya era hora! El aclamado por la crítica Crash Bandicoot™ 4: It’s About Time ya está disponible en Steam.",
    },
    {
      id: 13,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg?t=1672758344",
      price: 69.99,
      title: "FIFA 23",
      category: "Deportes",
      launchment: "29/9/2022",
      description:
        "Vive la emoción del mayor torneo futbolístico con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, ¡disponible el 9 de noviembre sin coste adicional!",
    },
    {
      id: 14,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1760250/header.jpg?t=1670515215",
      price: 59.99,
      title: "MADEN NFL 23",
      category: "Deportes",
      launchment: "19/8/2022",
      description:
        "Cuélate en los libros de historia. Controla el impacto de tus decisiones de nuevas formas. Da órdenes en Franchise con actualizaciones de la lógica de traspasos y la agencia libre.",
    },
    {
      id: 15,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg?t=1671472823",
      price: 69.99,
      title: "Call of Duty: Modern Warfare II",
      category: "Shooter",
      launchment: "28/10/2022",
      description:
        "En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes que incluye el regreso de Operadores icónicos de la fuerza operativa 141.",
    },
    {
      id: 16,
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/47790/header.jpg?t=1615244654",
      price: 19.99,
      title: "Medal of Honor",
      category: "Shooter",
      launchment: "12/10/2010",
      description:
        "Esto es una nueva guerra. Hay un nuevo guerrero. Es de Nivel 1.",
    },
  ];

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  useEffect(() => {
    getProducts
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bienvenida">
      <ItemCount />
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
