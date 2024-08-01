import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Testimonials from '~/components/widgets/Testimonials';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToAction2Home,
  contentHomeOne,
  contentHomeTwo,
  featuresHome,
  heroHome,
  statHome,
  testimonialsHome,
  universitiesHome,
} from '~/shared/data/pages/home.data';
import Stats from '~/components/widgets/Stats';
import Universities from '../src/components/widgets/Universities';
import Hero from '~/components/widgets/Hero';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Stats {...statHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Universities {...universitiesHome} />
      <Testimonials {...testimonialsHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
