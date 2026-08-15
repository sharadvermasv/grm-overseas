import { HomeHero } from '@/components/home/home-hero'
import { HomeStats } from '@/components/home/home-stats'
import { HomeIntro } from '@/components/home/home-intro'
import { HomeGlobal } from '@/components/home/home-global'
import { HomeAmbassador } from '@/components/home/home-ambassador'
import { HomeTour } from '@/components/home/home-tour'
import { HomeTrust } from '@/components/home/home-trust'
import { CompanyProfileBand } from '@/components/company-profile-band'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeIntro />
      <HomeAmbassador />
      <HomeGlobal />
      <HomeTour />
      <HomeTrust />
      <CompanyProfileBand />
    </>
  )
}
