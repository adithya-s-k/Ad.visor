import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex items-center justify-center flex-col gap-10'>
      <h1 className='text-4xl font-bold mt-20'>Welcome Back!!</h1>
      <SignIn />
      <div className="text-sm mt-2 flex">
        <p>Forgot Password?</p>
        <Link href="/forget-password" className="text-blue-400 ml-2">
          Reset here
        </Link>
      </div>
    </div>
  );
}