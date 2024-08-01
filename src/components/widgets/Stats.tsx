import { StatsProps } from '~/shared/types';
import { getSuffixNumber } from '~/utils/utils';
import Headline from '~/components/common/Headline';
import WidgetWrapper from '~/components/common/WidgetWrapper';
const Stats = ({ header, items, id, hasBackground = false }: StatsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map(({ title, description }, index) => (
        <div
          key={`item-stat-${index}`}
          className="mb-12 text-center md:mb-0 md:border-r md:last:border-none dark:md:border-slate-500"
        >
          <div className="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
            {getSuffixNumber(title as number)}
          </div>
          <p className="text-lg font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-xl">
            {description}
          </p>
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Stats;
