'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Message } from '@/@types/message';
import ReactMarkdown from 'react-markdown';


export default function ChatBubble({ isUser, message, timestamp }: Message) {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  return (

    isUser ?
      <div className="flex items-start gap-2.5 justify-end">
        <div className="flex flex-col gap-1 w-full max-w-[320px] items-end">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{formattedTime}</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Você</span>
          </div>
          <div className="p-4 bg-gray-600 text-white rounded-s-xl rounded-ee-xl dark:bg-gray-500 text-sm">
            <ReactMarkdown>
              {message}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      :
      <div className="flex items-start gap-2.5">
        <Avatar>
          <AvatarImage
            alt="Furia bot avatar"
            src="https://www.pinpng.com/pngs/m/115-1150187_furia-furia-esports-logo-hd-png-download.png"
          />
        </Avatar>
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Furia Bot</span>
            <span
              className="text-sm font-normal text-gray-500 dark:text-gray-400">{formattedTime}</span>
          </div>
          <div
            className="p-4 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white rounded-e-xl rounded-es-xl text-sm">
            <ReactMarkdown>
              {message}
            </ReactMarkdown>
          </div>
        </div>
      </div>

  );
}

