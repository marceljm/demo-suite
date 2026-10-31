import { Page } from '../components/layout/SiteLayout';
export function meta() {
  return [
    { title: 'Contact DemoSuite' },
    {
      name: 'description',
      content: 'Contact the DemoSuite team. This demo form does not send email.',
    },
  ];
}
export default function Contact() {
  return (
    <Page eyebrow="SAY HELLO" title="We’re here to help.">
      <p>
        Questions about the demo? Use the form below. This mock form will not send email.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Demo submission received locally. Email delivery is not configured.');
        }}
      >
        <label>
          Your name
          <input required name="name" />
        </label>
        <label>
          Email address
          <input required type="email" name="email" />
        </label>
        <label>
          How can we help?
          <textarea required rows={5} />
        </label>
        <button className="button">Submit demo message</button>
      </form>
    </Page>
  );
}
