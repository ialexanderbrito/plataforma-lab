import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import codeMockup from 'assets/code-mockup.png';
import { useCreateSubscriberMutation } from 'graphql/types';

import { Logo } from 'components/Logo';
import { ReactLogo } from 'components/ReactLogo';

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="desktop:min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="flex sm:flex-col desktop:flex-row w-full max-w-[1100px] items-center justify-between mt-20 mx-auto">
        <div className="sm:max-w-sm desktop:max-w-[640px]">
          <div className="hidden desktop:flex absolute items-center justify-center ml-60">
            <ReactLogo />
          </div>
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="sm:w-full h-80 mt-5 desktop:w-[390px] p-8 bg-gray-700 border border-gray-500 rounded relative">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockup} className="mt-10" alt="" />
    </div>
  );
}
