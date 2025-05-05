'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Message } from '@/@types/message';
import { getHistory, sendMessage } from '@/lib/api';
import ChatBubble from '@/components/chat-bubble';
import { Avatar } from '@/components/ui/avatar';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const guestId = localStorage.getItem('guest_id');

  const handleHistory = async (guestId: string): Promise<void> => {
    try {
      const data = await getHistory(guestId);
      setMessages(data);
    } catch (e) {
      console.error('Erro ao carregar histórico', e);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!guestId) return;
    if (!input) return;

    try {
      await sendMessage(guestId, input);
      setInput('');
      setIsBotTyping(true);
    } catch (e) {
      console.error('Erro ao enviar mensagem', e);
    } finally {
      setTimeout(() => {
        setIsBotTyping(false);
        handleHistory(guestId);
      }, 1000);
    }

  };

  useEffect(() => {
    let guestId = localStorage.getItem('guest_id');
    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem('guest_id', guestId);
    }

    handleHistory(guestId);
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isBotTyping]);


  return (
    <Card
      className="sm:w-[600px] bg-white dark:bg-gray-900 shadow-md rounded-lg px-2">
      <CardHeader>
        <CardTitle>
          Furia Chat
        </CardTitle>
        <CardDescription>
          Converse com Chatbot da Furia para obter informações sobre próximas partidas, resultados e
          muito mais!
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-y-auto h-[600px] sm:h-[500px]" ref={chatRef}>
        {
          messages.map((message: Message) => <ChatBubble key={message.id} isUser={message.isUser}
                                                         message={message.message} timestamp={message.timestamp}
                                                         id={message.id} />)
        }
        {isBotTyping && (
          <div className="flex justify-start mt-2">
            <Avatar></Avatar>
            <div
              className="bg-muted text-muted-foreground px-4 py-2 rounded-2xl rounded-bl-none max-w-xs animate-pulse">
              Furia Bot está digitando...
            </div>
          </div>
        )}

      </CardContent>
      <CardFooter>
        <form className="flex items-center gap-2 w-full" onSubmit={(e) => handleSubmit(e)}>
          <Input placeholder="Digite sua mensagem aqui..." className="w-full border border-border" value={input}
                 onChange={e => setInput(e.target.value)} />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}