import {v4 as uuidv4} from 'uuid' // para obtener un id random

export const pixar = {
    header: {
        h1: {
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/0755a48b-bbaf-4dff-8e78-9b489106eec6/logo022.jpg?format=1500w",
            href: "/",
            title: "Disney Pixar"
        },
        nav: [
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Featured Films"
            },
            {
                id: uuidv4(),
                href: "/feature-films.html",
                text: "Short Films",
                submenu: [
                    {id: uuidv4(), text: "Theatrical"},
                    {id: uuidv4(), text: "Disney"},
                    {id: uuidv4(), text: "Sparkshorts"},
                ]
            },
            {
                id: uuidv4(),
                href: "/technology.html",
                text: "Technology",
                submenu: [
                    {id: uuidv4(), text: "item1"},
                    {id: uuidv4(), text: "item2"},
                    {id: uuidv4(), text: "item3"},
                ]
            },
        ]
    },
    hero: {
        id: uuidv4(),
        background_image:"https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1699472929056-R6KDN8SAAXSJBT45V866/io2bg.jpg?format=2500w",
        image: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/11db2edf-cfab-45f3-b825-6eb0933f16f9/io2_logo.png?format=750w"
    },
    columns:[
        {
            id: uuidv4(),
            image: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489515186655-LQ8Q6L0MFGETKRSTD0UW/image-asset.jpeg?format=500w",
            text: "CAREERS AT PIXAR"
        },   {
            id: uuidv4(),
            image: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/14d587cf-008b-403e-aa2d-78a0d91c98cf/Home_Lower-elio.jpg?format=750w",
            text: "ELIO"
        },
        {
            id: uuidv4(),
            image: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/9c25e4d4-ad11-421d-ab84-afda6157e3a5/wl_lower.jpg?format=500w",
            text: "WIN OR LOSE"
        }
    ] ,
    footer: {
        logos:[
            "fa-brands fa-facebook","fa-brands fa-twitter","fa-brands fa-youtube","fa-brands fa-instagram"
        ],
        enlaces:[{
            text:"PRIVACY POLICY",
            href:"/"
        },{
            text:"TERMS OF USE",
            href:"/"
        },{
            text:"YOUR US STATE PRIVACY RIGHTS",
            href:"/"
        },{
            text:"CHILDREN’S ONLINE PRIVACY POLICY",
            href:"/"
        },{
            text:"TINTEREST-BASED ADS",
            href:"/"
        }],
        copyright:"© 1986-2023 DISNEY / PIXAR",
        boton: "Do Not Share or Sell My Personal Information"
    }

}

