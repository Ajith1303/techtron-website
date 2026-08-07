import PageHeader from '../components/PageHeader';
import ExecutiveCommitteeSection from '../components/ExecutiveCommittee';

/* Executive Committee page — leadership team */
export default function ExecutiveCommittee() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Executive"
        highlight="Committee"
        description="Meet the passionate students and faculty driving TechTron forward with dedication, creativity, and leadership."
      />
      {/* showHeading={false} — PageHeader already shows "Executive Committee" */}
      <ExecutiveCommitteeSection showHeading={false} />
    </>
  );
}