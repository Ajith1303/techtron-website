import PageHeader from '../components/PageHeader';
import EventsSection from '../components/Events';

/* ==========================================
   Events page — upcoming TechTron events
   ========================================== */

export default function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Upcoming"
        highlight="Events"
        description="Mark your calendars — here's what's coming up from TechTron. Stay tuned for more events throughout the year."
      />
      <EventsSection />
    </>
  );
}