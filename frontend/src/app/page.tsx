import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import Chat from '@/components/chat';

export default function Home() {
  return (
    <>
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-border bg-background">
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
          <nav>
            <a
              href="https://www.furia.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-animate text-sm font-medium transition-colors"
            >
              Site Oficial
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-col items-center justify-center py-8">
        <Chat />
      </main>
      <footer
        className="w-full px-6 py-4  border-t border-border text-zinc-400 text-sm">
        <div className="flex flex-col items-center justify-between gap-2">
                    <span className="text-center">
                        Desenvolvido com 💻 e 💜 por{' '}
                      <a href="https://fip-dev.engineer/"
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
