import { Link } from 'react-router-dom';
import '../components/Hero.css';
import '../components/CardGrid.css';
import './AboutPage.css';
import './FAQPage.css';

const faqs = [
  {
    question: 'How do I start?',
    answer: (
      <>
        Come to Intro to Bowmont Boxing first. It is mandatory before attending any other
        classes and runs Mondays from 7:45 p.m. to 8:30 p.m.
      </>
    ),
  },
  {
    question: 'Do I need to register before my first class?',
    answer: (
      <>
        You do not need to register before attending your first class, but please fill out your
        contact information on MindBody before you arrive.
      </>
    ),
  },
  {
    question: 'Are there contracts or activation fees?',
    answer: (
      <>
        No. Bowmont does not have contracts and does not charge activation fees. Payments can be
        made through the MindBody website or app.
      </>
    ),
  },
  {
    question: "What happens if I don't use all the classes on a 10-class punch card?",
    answer: (
      <>
        The punch card is digital and never expires, so unused classes stay available for future
        visits.
      </>
    ),
  },
  {
    question: 'What should I bring?',
    answer: (
      <>
        Wear comfortable clothes and indoor shoes. You do not need hand wraps for your first
        class, but you can bring your own if you have them. Bowmont also sells 180-inch hand
        wraps for $15, which are strongly recommended to help prevent hand injuries.
      </>
    ),
  },
  {
    question: 'Can I borrow equipment?',
    answer: (
      <>
        Yes, but only for a short time. Bowmont has some gloves and headgear you can borrow when
        you first start, but if you are enjoying boxing and training consistently, you are highly
        encouraged to purchase your own gloves and headgear.
      </>
    ),
  },
  {
    question: 'Who can train at Bowmont?',
    answer: (
      <>
        Classes are available for ages 12 and up, provided younger boxers are mature enough for
        a class integrated with adults. Boxers under 18 need a parent or guardian signature.
      </>
    ),
  },
  {
    question: 'Do I have to spar?',
    answer: (
      <>
        No. Sparring is not required for members who are uncomfortable with contact, and safety
        is the priority for every class.
      </>
    ),
  },
  {
    question: 'Do I need to register with CABA?',
    answer: (
      <>
        <p>
          Yes. All boxers must be registered with the Canadian Amateur Boxing Association (CABA)
          to participate in boxing activities at Bowmont.
        </p>
        <ul>
          <li>Recreation: $20 per year.</li>
          <li>Non-Competitive Sparring: $60 per year for those wanting to spar but not fight.</li>
          <li>Competitive: $120 per year for those who want to fight.</li>
        </ul>
        <p>
          CABA charges a small transaction fee on each registration. Membership is due at the
          beginning of each calendar year. Medicals are annual from the date on the medical form,
          and no sparring or competition is permitted with expired medical forms.
        </p>
        <p>
          Recreation boxers can register on the CABA website and should bring their registration
          receipt number to the gym. Sparring and competitive boxers can register at the gym with
          the assistance of a coach and must bring a completed medical form.
        </p>
      </>
    ),
  },
  {
    question: 'Do you offer private training?',
    answer: (
      <>
        No. Bowmont is run by volunteer coaches and does not offer private lessons. Members take
        part in group classes as part of the skill development process.
      </>
    ),
  },
  {
    question: 'What are your hours?',
    answer: (
      <>
        Bowmont is a not-for-profit club, not a staffed business: everyone who is there is a
        volunteer. There are no set opening hours outside of scheduled classes. See the{' '}
        <Link to="/schedule">class schedule</Link> for when the gym is open for training.
      </>
    ),
  },
] as const;

export function FAQPage() {
  return (
    <div className="faq-page">
      <section
        className="hero hero--photo about-hero"
        aria-labelledby="faq-heading"
      >
        <h1 id="faq-heading" className="hero__title hero__title--text">
          FAQ
        </h1>
        <p className="hero__intro about-hero__tagline">
          Quick answers for first visits, training, and membership.
        </p>
      </section>

      <div className="about-page__body faq-page__body">
        <div className="card-grid faq-grid">
          {faqs.map((faq) => (
            <article key={faq.question} className="card faq-card">
              <h2 className="card__title faq-card__title">{faq.question}</h2>
              <div className="faq-card__answer">{faq.answer}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
