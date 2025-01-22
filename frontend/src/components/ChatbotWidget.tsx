import React, { useEffect } from 'react';

export const ChatbotWidget = () => {
    useEffect(() => {
        // Inicializar chatbase
        const initChatbase = () => {
            if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...args: any[]) => {
                    if (!window.chatbase.q) {
                        window.chatbase.q = [];
                    }
                    window.chatbase.q.push(args);
                };

                window.chatbase = new Proxy(window.chatbase, {
                    get(target: any, prop: string) {
                        if (prop === "q") {
                            return target.q;
                        }
                        return (...args: any[]) => target(prop, ...args);
                    },
                });
            }
        };

        // Cargar el script de Chatbase
        const loadChatbaseScript = () => {
            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "NiznS3p1kmDxeoU9frXP0";
            script.defer = true;
            document.body.appendChild(script);
        };

        // Inicializar y cargar
        initChatbase();
        if (document.readyState === "complete") {
            loadChatbaseScript();
        } else {
            window.addEventListener("load", loadChatbaseScript);
        }

        // Limpiar al desmontar
        return () => {
            const script = document.getElementById("NiznS3p1kmDxeoU9frXP0");
            if (script) {
                document.body.removeChild(script);
            }
            window.removeEventListener("load", loadChatbaseScript);
        };
    }, []);

    // No necesitamos renderizar nada porque el script crea el botón del chat
    return null;
};
