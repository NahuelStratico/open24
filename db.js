const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDLoIfphlKAWw1GSDfXFEV8sYosX7d8qyc",
  authDomain: "open24-6bfd2.firebaseapp.com",
  projectId: "open24-6bfd2",
});

var db = firebase.firestore();


var productos = [
    {
        "id":1,
        "titulo":'Gomitas',
        "descripcion":'Estas son gomitas',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 250,
        "img":"gomitas.png",
        "categoria":'drugstore'
    },
    {
        "id":2,
        "titulo":'Beldent',
        "descripcion":'Estas son Chicles Beldent',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 150,
        "img":"beldent.jpg",
        "categoria":'drugstore'
    },
    {
        "id":3,
        "titulo":'Caramelos',
        "descripcion":'Estas son Caramelos',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 50,
        "img":"caramelos",
        "categoria":'drugstore'
    },
    {
        "id":4,
        "titulo":'Helado',
        "descripcion":'Es un Helado',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 200,
        "img":"helado.jpg",
        "categoria":'helados-y-drinks'
    },
    {
        "id":5,
        "titulo":'habano',
        "descripcion":'Esto es un habano',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 250,
        "img":"habanos.jpg",
        "categoria":'tabaqueria-y-grow'
    },
    {
        "id":6,
        "titulo":'Deco',
        "descripcion":'Decoración',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 500,
        "img":"deco.jpg",
        "categoria":'deco-y-energetica'
    },
    {
        "id":7,
        "titulo":'Cuaderno',
        "descripcion":'Esto es un cuaderno',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 300,
        "img":"cuaderno.jpg",
        "categoria":'libreria-y-tecno'
    },
    {
        "id":8,
        "titulo":'Yerba mate',
        "descripcion":'yerba para mate',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 300,
        "img":"yeba.jpg",
        "categoria":'almacen-y-snack'
    },
    {
        "id":9,
        "titulo":'Rompecabezas',
        "descripcion":'Esto es un rompe cabezas',
        "content":'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
        "precio": 300,
        "img":"juguetes.jpg",
        "categoria":'jugueteria-y-relagos'
    }
];

productos.forEach((obj) => {
    db.collection("productos")
      .add({
        id: obj.id,
        titulo: obj.titulo,
        descripcion: obj.descripcion,
        content: obj.content,
        precio: obj.precio,
        img: obj.img,
        categoria: obj.categoria,        
      })
      .then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error al agregar un documento: ", error);
      });
  });