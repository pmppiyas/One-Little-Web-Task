import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/app/components/shared/Header';
import { faqs } from '@/assets/assets';

export default function FAQ() {
  return (
    <section className="px-4  max-w-7xl mx-auto  bg-background">
      <div className="bg-[#F9FAFB] shadow-sm w-full py-8 px-4">
        {' '}
        <div className="max-w-3xl mx-auto space-y-12  ">
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
      </div>
    </section>
  );
}
