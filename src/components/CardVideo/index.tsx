import { YoutubeLogo } from 'phosphor-react';

export function CardVideo() {
  return (
    <div className="flex-1 items-center justify-center flex max-h-[60vh] flex-col bg-gray-700">
      <YoutubeLogo size={47} color="gray" />
      <h1 className="text-2xl bold mt-5">
        Selecione um conteúdo para ver o vídeo
      </h1>
    </div>
  );
}
