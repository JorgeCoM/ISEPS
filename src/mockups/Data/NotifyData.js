const opcionesFecha = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

export const NotifyData = [
    {
        image: "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg",
        icon: "pi pi-credit-card",
        description: 'Se a realizado exitosamente el pago de los creditos',
        formatDate: new Date().toLocaleString("es-ES", opcionesFecha),
        tagValue: 'Pago',
        tagIcon: "pi pi-credit-card",
    },
    {
        image: "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg",
        icon: "pi pi-megaphone",
        description: 'Charla sombre el internet seguro',
        formatDate: new Date().toLocaleString("es-ES", opcionesFecha),
        tagValue: 'Anuncio',
        tagIcon: "pi pi-megaphone",
    },
    {
        image: "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg",
        icon: "pi pi pi-desktop",
        description: 'Se a detectado un nuevo inicio de seción',
        formatDate: new Date().toLocaleString("es-ES", opcionesFecha),
        tagValue: 'Cuenta',
        tagIcon: "pi pi-desktop",
    },
    // {
    //     image: "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg",
    //     icon: "pi pi pi-megaphone",
    //     description: 'Conferencia sobre buenas practicas de programación',
    //     formatDate: new Date().toLocaleString("es-ES", opcionesFecha),
    //     tagValue: 'Anuncio',
    //     tagIcon: "pi pi-megaphone",
    // },
]