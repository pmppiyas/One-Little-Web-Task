import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/app/components/shared/Header';

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Absolutely! You can upgrade or downgrade your plan at any time from your dashboard settings. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We offer a flexible cancellation policy. You can cancel your subscription at any time without any hidden fees or penalties.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can add your company name, VAT number, and specific billing address to your invoices from the billing profile section.',
  },
  {
    question: 'How does billing work?',
    answer:
      "We bill monthly or annually depending on your preference. All payments are processed securely, and you'll receive an automated invoice every month.",
  },
  {
    question: 'How do I change my account email?',
    answer:
      "You can update your email address in the 'Account Settings' section. For security reasons, you'll need to verify the new email address.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 px-4 bg-[#F9FAFB] rounded-3xl max-w-7xl mx-auto my-10">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Header
            black="Frequently asked"
            primary="questions"
            sub=" Everything you need to know about the product and billing."
          />
        </div>

        {/* Accordion Section */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 py-2 last:border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary transition-all text-base md:text-lg py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-sm md:text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
