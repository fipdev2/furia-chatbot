import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ThemeToggle} from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <header
                className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-300 dark:border-gray-800 bg-background">
                <div className="flex items-center gap-3">
                    <Image
                        src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&v=202503171541"
                        alt="FURIA Esports"
                        width={100}
                        height={36}
                        className="dark:invert"
                        priority
                    />
                    <h1 className="text-xl font-bold text-zinc-800 dark:text-white tracking-tight">
                        Chatbot FURIA
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    {/* Adiciona aqui ícones, notificação ou perfil se quiser */}
                    <ThemeToggle/>
                </div>
            </header>

            <main className="flex flex-col items-center justify-center p-24">
                <Card
                    className={"w-[600px] h-[700px] bg-white dark:bg-gray-900 shadow-md rounded-lg grid grid-rows-[min-content_1fr_min-content]"}>
                    <CardHeader>
                        <CardTitle>
                            Furia Chat
                        </CardTitle>
                        <CardDescription>
                            Converse com Chatbot da Furia para obter informações sobre próximas partidas, resultados e
                            muito
                            mais!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Mensagens</p>
                    </CardContent>
                    <CardFooter className={"space-x-2"}>
                        <Input placeholder="Digite sua mensagem aqui..." className="w-full"/>
                        <Button type="submit" variant="outline" className="bg-gray-900 text-accent hover:bg-gray-700 hover:text-accent dark:text-foreground">Enviar</Button>
                    </CardFooter>
                </Card>
            </main>
            <footer className="w-full border-t border-gray-300 dark:border-gray-800 text-zinc-400 py-4 px-6 mt-10 text-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span>
                        Desenvolvido com 💻 e 💜 por{' '}
                        <a href="https://fipdev.vercel.app"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-purple-400 hover:text-purple-300 font-semibold transition">
                            fipdev
                          </a>
                    </span>
                    <span className="text-xs text-zinc-500">
                      Não oficial – apenas um projeto fã da FURIA Esports 🐆
                    </span>
                </div>
            </footer>
        </>
    );
}
