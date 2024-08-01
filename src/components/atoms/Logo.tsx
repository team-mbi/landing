import Image from 'next/image';
import LogoImg from '~/assets/images/logo.png';
const Logo = () => (
  <span className="self-center whitespace-nowrap text-gray-900 dark:text-white ">
    <div className="flex items-center">
      <Image src={LogoImg} alt="logo" width={48} height={48} className="mr-3" />
      <div className="flex flex-col">
        <span className="text-lg font-bold">Madrasah Bertaraf Internasional</span>
        <span className="text-md">Amanatul Ummah Pacet - Mojokerto</span>
      </div>
    </div>
  </span>
);

export default Logo;
