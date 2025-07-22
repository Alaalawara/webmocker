import React from 'react';

export default function FAQSection() {
  const faqsLeft = [
    {
      id: 'item-1',
      question: 'What is WebMocker?',
      answer:
        "WebMocker lets you preview your website inside mockups. First, choose a device frame, then enter your site’s URL, and instantly see how it looks. It's perfect for portfolios, presentations, or marketing shots."
    },
    {
      id: 'item-2',
      question: 'How do I unlock mockups?',
      answer:
        "To access designs, simply log in with your Google account. Once you're logged in, you'll gain access to exclusive frames and features for your mockups."
    },
  ];

  const faqsRight = [
    {
      id: 'item-4',
      question: 'How do I use WebMocker?',
      answer:
        'Click on any mockup, paste your website URL, and see it load inside the device frame. You can change the background color also.',
    },
    {
      id: 'item-5',
      question: 'Why won’t some websites load?',
      answer:
        "Some websites block being embedded in an iframe due to their security settings. This is controlled by the website itself and cannot be bypassed.",
    },
  ];

  const AccordionItem = ({ question, answer, openItem, setOpenItem, id }) => {
    const isOpen = openItem === id;
    return (
      <div className={` text-white rounded-md mb-4 ${isOpen ? 'border border-blue-500' : ''}`}>
        <button
          onClick={() => setOpenItem(isOpen ? null : id)}
          className={`w-full text-left p-4 font-semibold transition-colors duration-300 ${isOpen ? '#1e2a78' : 'bg-[#1a1a3d]'
            }`}
        >
          {question}
        </button>
        {isOpen && (
          <div className="bg-white text-black text-sm p-4 border-t text-left">
            {answer}
          </div>
        )}
      </div>
    );
  };

  const Column = ({ data }) => {
    const [openItem, setOpenItem] = React.useState(data[0].id);
    return (
      <div className="flex flex-col w-full">
        {data.map((faq) => (
          <AccordionItem
            key={faq.id}
            {...faq}
            openItem={openItem}
            setOpenItem={setOpenItem}
          />
        ))}
      </div>
    );
  };

  return (
    <section style={{ display: "flex", flexDirection: "column", paddingTop: "100px" }}>
      <h3 className='text-white underline underline-offset-6 decoration-foreground'>faqs</h3>
      <div className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Column data={faqsLeft} />
        <Column data={faqsRight} />
      </div>
    </section>
  );
}
