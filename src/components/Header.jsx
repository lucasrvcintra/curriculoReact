export function Header({ name, email, phone, social, photoUrl }) {
  return (
    <header className="flex items-center justify-start p-6 bg-zinc-700 rounded-b-lg shadow-md w-[80%] m-auto">
      <div className="flex-1">
        <img
        src={photoUrl}
        alt="Foto de perfil"
        className="w-24 h-32 object-cover rounded-md border-2 border-gray-300"
      />
      </div>
      <div className="ml-6 text-left min-w-[50%]">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-200">{email}</p>
        <p className="text-gray-200">{phone}</p>
        <a
          href={social}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {social}
        </a>
      </div>
    </header>
  );
}