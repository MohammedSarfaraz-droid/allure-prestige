/**
 * Centralized Unsplash image URLs (with srcset sizes) used across the site.
 * Keeping them here makes it easy to swap or audit imagery.
 */
const u = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export type EditorialImage = {
  id: string;
  alt: string;
  src: string;
  srcSet: string;
  sizes: string;
};

const make = (id: string, alt: string, sizes = "100vw"): EditorialImage => ({
  id,
  alt,
  src: u(id, 1600),
  srcSet: `${u(id, 800)} 800w, ${u(id, 1600)} 1600w`,
  sizes,
});

export const IMG = {
  heroBuilding: make(
    "photo-1545324418-cc1a3fa10c00",
    "Luxury residential building exterior in morning light",
    "(min-width: 1024px) 45vw, 100vw",
  ),
  storyAerial: make(
    "photo-1568605114967-8130f3a36994",
    "Luxury residential community aerial view",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  storyBoardroom: make(
    "photo-1497366216548-37526070297c",
    "Professional business meeting in a boardroom",
    "(min-width: 1024px) 25vw, 50vw",
  ),
  storyHallway: make(
    "photo-1560448204-e02f11c3d0e2",
    "Modern condominium hallway interior",
    "(min-width: 1024px) 25vw, 50vw",
  ),
  servicePM: make(
    "photo-1448630360428-65456885c650",
    "Luxury residential apartment complex exterior facade",
    "(min-width: 1024px) 58vw, 100vw",
  ),
  stripLobby: make(
    "photo-1600585154340-be6161a56a0c",
    "Luxury apartment building lobby with marble interior",
    "33vw",
  ),
  stripCommunity: make(
    "photo-1572120360610-d971b9d7767c",
    "Residential community park with residents walking",
    "33vw",
  ),
  stripDocs: make(
    "photo-1554224155-6726b3ff858f",
    "Financial documents on a professional desk",
    "33vw",
  ),
  whyManager: make(
    "photo-1573496359142-b8d87734a5a2",
    "Property manager speaking with residents",
    "(min-width: 1024px) 45vw, 100vw",
  ),
  whyAccountant: make(
    "photo-1554224154-26032ffc0d07",
    "Accountant reviewing financial spreadsheets on a laptop",
    "(min-width: 1024px) 45vw, 100vw",
  ),
  ctaEstate: make(
    "photo-1613977257363-707ba9348227",
    "Aerial view of a luxury estate with green landscape",
    "100vw",
  ),
  aboutHero: make(
    "photo-1486406146926-c627a92ad1ab",
    "Architectural detail of a stately building",
    "100vw",
  ),
  valueCommunity: make(
    "photo-1577962917302-cd874c4e31d2",
    "Residents gathering at a community event",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  valueIntegrity: make(
    "photo-1450101499163-c8848c66ca85",
    "Calligraphy pen on a clean ledger",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  valueLicensed: make(
    "photo-1521737604893-d14cc237f11d",
    "Licensed professionals in formal attire",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  contactOffice: make(
    "photo-1486406146923-c433d7b6b3b1",
    "Office building exterior",
    "(min-width: 1024px) 40vw, 100vw",
  ),
  aboutHeroWide: make(
    "photo-1431576901776-e539bd916ba2",
    "Stately architectural facade in warm light",
    "100vw",
  ),
  servicesPropertyChapter: make(
    "photo-1582407947304-fd86f028f716",
    "Elegant residential building with manicured landscaping",
    "100vw",
  ),
  servicesFinancialChapter: make(
    "photo-1554224155-8d04cb21cd6c",
    "Financial reports and analytics on a polished desk",
    "100vw",
  ),
  membershipCAI: make(
    "photo-1521791136064-7986c2920216",
    "Professional handshake symbolizing community partnership",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  membershipIREM: make(
    "photo-1554224154-22dec7ec8818",
    "Real estate professional reviewing portfolio",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  membershipNJAA: make(
    "photo-1545324418-cc1a3fa10c00",
    "Multifamily apartment building exterior",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  membershipCoop: make(
    "photo-1493809842364-78817add7ffb",
    "Cooperative residential community",
    "(min-width: 1024px) 50vw, 100vw",
  ),
  testimonialThornton: make(
    "photo-1494790108377-be9c29b29330",
    "Portrait of HOA board president",
    "200px",
  ),
  testimonialReyes: make(
    "photo-1507003211169-0a1dd7228f2d",
    "Portrait of property owner",
    "200px",
  ),
  testimonialWalsh: make(
    "photo-1573496359142-b8d87734a5a2",
    "Portrait of board treasurer",
    "200px",
  ),
  introBandImage: make(
    "photo-1600596542815-ffad4c1539a9",
    "Tree-lined residential street in golden hour",
    "100vw",
  ),
};
