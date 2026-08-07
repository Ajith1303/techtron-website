import PageHeader from '../components/PageHeader';
import GallerySection from '../components/Gallery';

/* Gallery page — event moments */
export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Moments"
        title="Event"
        highlight="Gallery"
        description="A glimpse into the energy, innovation, and community behind every TechTron event."
      />
      {/* showHeading={false} — PageHeader already shows "Event Gallery" */}
      <GallerySection showHeading={false} />
    </>
  );
}