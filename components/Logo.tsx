import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/logo-light.png"
        alt="Voyage"
        width={40}
        height={40}
        className="dark:hidden"
      />

      <Image
        src="/logo-dark.png"
        alt="Voyage"
        width={40}
        height={40}
        className="hidden dark:block"
      />
    </>
  );
}