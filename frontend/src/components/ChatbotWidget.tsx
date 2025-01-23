import React, { useEffect } from 'react';

export const ChatbotWidget = () => {
    useEffect(() => {
        // Obtener la autenticación del servidor
        const getChatbaseAuth = async () => {
            try {
                const response = await fetch('/api/chatbase-auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Error getting Chatbase auth');
                }
                
                const { userId, hash } = await response.json();
                return { userId, hash };
            } catch (error) {
                console.error('Error getting Chatbase auth:', error);
                return null;
            }
        };

        // Inicializar chatbase con autenticación
        const initChatbase = async () => {
            if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                // Obtener autenticación
                const auth = await getChatbaseAuth();
                
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

                // Si tenemos autenticación, inicializar con ella
                if (auth) {
                    window.chatbase("init", {
                        userId: auth.userId,
                        userHash: auth.hash
                    });
                }
            }
        };

        // Cargar el script de Chatbase
        const loadChatbaseScript = () => {
            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "NiznS3p1kmDxeoU9frXP0";
            script.defer = true;
            
            script.onload = () => {
                initChatbase();
            };
            
            document.body.appendChild(script);
        };

        // Inicializar y cargar
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

    return null;
};
