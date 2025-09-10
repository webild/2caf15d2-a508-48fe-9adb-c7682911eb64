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
        navItems={[{ name: "hero", id: "hero" }, { name: "about", id: "about" }, { name: "how-to-buy", id: "how-to-buy" }, { name: "tokenomics", id: "tokenomics" }, { name: "footer", id: "footer" }]}
        logoSrc="/images/logo.svg"
        logoWidth={50}
        logoHeight={50}
        buttonText="Join Now"
        onButtonClick={() => {}}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to Memecoin Mania!"
          subtitle="Join the fun and explore the future of currency"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Memecoin Mania"
          descriptions={["Engaging community-driven memecoins.", "Explore features and enjoy benefits!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Setup your wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose an exchange", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Make your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Explore our token distribution and key statistics"
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "40M", description: "Circulating Supply" },
            { value: "20M", description: "Market Cap" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="Memecoin Mania Logo"
          logoText="Memecoin Mania"
          items={[
            { label: "About Us", onClick: () => {} },
            { label: "Privacy Policy", onClick: () => {} },
            { label: "Terms of Service", onClick: () => {} },
          ]}
          className="footer-class"
          containerClassName="footer-container-class"
          gradientClassName="footer-gradient-class"
          gradientStyle={{ background: 'linear-gradient(to right, #FF5733, #FFC300)' }}
        />
      </div>
    </SiteThemeProvider>
  );
}