import {v4 as uuidv4} from 'uuid' // para obtener un id random

export const pixar = {
    header: {
        h1: {
            src: "logo.png",
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
    hero: {},
    columns: {},
    footer: {}

}