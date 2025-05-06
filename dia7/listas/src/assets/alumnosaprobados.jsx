import React from "react";
import './alumnosaprobados.css';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";  // IMPORTADO DE https://www.npmjs.com/package/framer-motion

const AlumnosAprobados = ({ alumnos }) => {
    
    const aprobados = alumnos.filter(alumno => alumno.nota >= 5);
    const suspensos = alumnos.filter(alumno => alumno.nota < 5);
    
    
    const [showSuspensos, setShowSuspensos] = useState(false);

   
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const listVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0, y: 20 }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div 
            className="alumnos-aprobados"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2 
                className="title"
                key={showSuspensos ? "suspensos-title" : "aprobados-title"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {showSuspensos ? 'Alumnos suspensos' : 'Alumnos aprobados'}
            </motion.h2>
            
            <AnimatePresence mode="wait">
                <motion.ul
                    key={showSuspensos ? "suspensos-list" : "aprobados-list"}
                    className="alumnos-lista"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {(showSuspensos ? suspensos : aprobados).map((alumno, index) => (
                        <motion.li 
                            key={`${alumno.id || index}`}
                            className="alumno-item"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.03,
                                backgroundColor: "rgba(245, 245, 245, 0.8)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="alumno-nombre">{alumno.nombre}</span>
                            <span className={`alumno-nota ${alumno.nota >= 5 ? 'aprobado' : 'suspenso'}`}>
                                {alumno.nota}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
            
            <motion.button 
                className="show-button"
                onClick={() => setShowSuspensos(!showSuspensos)}
                whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#3a86ff",
                    color: "white"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                {showSuspensos ? 'Mostrar aprobados' : 'Mostrar suspensos'}
            </motion.button>
        </motion.div>
    );
};

export default AlumnosAprobados;