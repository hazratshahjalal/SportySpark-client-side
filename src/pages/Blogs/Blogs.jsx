import React from 'react';

const Blogs = () => {
  const faqs = [
    {
      question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer: 'A refresh token just helps us re-validate a user without them having to re-enter their login credentials multiple times. The refresh token only goes back to the authorization server, the access token goes to the (RS) resource server. The refresh token is a long-lived token that can be used to obtain a new access token when the current one expires. It is usually stored securely on the client-side, such as in an HTTP-only cookie or local storage.',
    },
    {
      question: 'Compare SQL and NoSQL databases.',
      answer: 'SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. In addition to supporting data storage and queries, they both also allow one to retrieve, update, and delete stored data. ',
    },
    {
      question: 'What is Express JS? What is Nest JS ?',
      answer: 'Express.js is a popular web application framework for Node.js that simplifies the process of building robust and scalable web applications. Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.',
    },
    {
      question: 'What is MongoDB aggregate and how does it work ?',
      answer: 'MongoDB aggregate is a powerful framework for performing data aggregation operations on MongoDB collections.It is a way of processing a large number of documents in a collection by means of passing them through different stages. An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="mb-8" key={index}>
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
