import Image from 'next/image';
import LogoImg from '~/assets/images/logo.png';
const Logo = () => (
  <span className="self-center whitespace-nowrap text-sm text-gray-900 dark:text-white ">
    <div className="flex items-center">
      <Image src={LogoImg} alt="logo" width={32} height={32} className="mr-2" />
      <div className="flex flex-col">
        <span className="text-lg font-boldz">MA Unggulan Amanatul Ummah</span>
        <span className="text-xs">Program Madrasah Bertaraf Internasional</span>
      </div>
    </div>
  </span>
);

export default Logo;
