'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import LoginButton from './ui/LoginButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <LoginButton
          key={id}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
        />
      ))}
    </>
  );
}
