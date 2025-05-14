import "./nav.css"
import React from 'react'
const menuItems = [
  { name: "Inicio", path: "/" },
  { 
    name: "Servicios", 
    path: "/servicios", 
    submenu: [
      { name: "Desarrollo Web", path: "/servicios/web" },
      { name: "Diseño UX/UI", path: "/servicios/design" },
      { name: "Marketing Digital", path: "/servicios/marketing" }
    ] 
  },
  { 
    name: "Productos", 
    path: "/productos",
    submenu: [
      { name: "Software", path: "/productos/software" },
      { name: "Apps Móviles", path: "/productos/mobile" },
      { name: "Consultoría", path: "/productos/consulting" }
    ]
  },
  { 
    name: "Recursos", 
    path: "/recursos",
    submenu: [
      { name: "Blog", path: "/recursos/blog" },
      { name: "Tutoriales", path: "/recursos/tutorials" },
      { name: "Documentación", path: "/recursos/docs" }
    ]
  },
  { name: "Contacto", path: "/contacto" }
];

function Menu() {    return (
        <nav>
            <ul className="menu">
                {menuItems.map((item, index) => (
                    <li className="menu__item" key={index}>
                        {item.name}
                        {item.submenu && (
                            <ul className="menu__item-submenu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li className="menu__item" key={subIndex}>
                                        {subItem.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Menu;