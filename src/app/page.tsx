"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={50}
        buttonText="Join Now"
        onButtonClick={() => console.log('Button Clicked')}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24" style={{ background: `linear-gradient(to right, #FF5733, #FFC300)` }}>
        <BillboardHero title="Welcome to Memecoin Mania" subtitle="Join the trend and ride the wave of fun!")
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="About Memecoin Mania" descriptions={["A vibrant community-driven memecoin.", "Fun, engaging, and full of rewards!"]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: "Step 1", description: "Create a wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Purchase Memecoins", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Join our community", image: "/images/placeholder3.avif", position: "right", isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics" description="Understanding the basics of our tokens" tokenData={[{ value: "1B", description: "Total Supply" }, { value: "60%", description: "Circulating Supply" }, { value: "0.01", description: "Price per Token" }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="Memecoin Mania" logoText="Memecoin Mania" items={[{ label: "Privacy Policy", onClick: () => console.log('Privacy Policy') }, { label: "Terms of Service", onClick: () => console.log('Terms of Service') }, { label: "Contact Us", onClick: () => console.log('Contact Us') }]} className="bg-gray-900 text-white" />
      </div>
    </SiteThemeProvider>
  );
}
