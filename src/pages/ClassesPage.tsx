import { Programs } from '../components/Programs';
import { Schedule } from '../components/Schedule';

export function ClassesPage() {
  return (
    <>
      <header className="page-intro">
        <h1 className="section__heading">Classes</h1>
        <p className="section__lead">
          Weekly blocks, open gym, and pad rounds—check the rhythm below and call if
          you are unsure which night fits your level.
        </p>
      </header>
      <Programs />
      <Schedule />
    </>
  );
}
