import Image from 'next/image';
import { UniversitiesProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Headline from '../common/Headline';

const Universities = ({ images, id, header, hasBackground = false }: UniversitiesProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="container flex flex-wrap justify-center mx-auto gap-4">
      {images &&
        images.map(({ src, alt, link }, index) => (
          <div
            key={`item-social-proof-${index}`}
            className="flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          >
            <a href={link} target="_blank" rel="noopener">
              <Image
                src={src}
                alt={alt}
                className="h-auto opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0"
                object-fit="contain"
                width={128}
                height={128}
              />
            </a>
          </div>
        ))}
    </div>
  </WidgetWrapper>
);

export default Universities;
