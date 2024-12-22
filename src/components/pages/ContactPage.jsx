import { useState, lazy, Suspense, useEffect } from 'react';

const Lottie = lazy(() => import('lottie-react'));
import animationData from '../../assets/ani2.json';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from: ${formData.name}`);
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    console.log('ContactPage mounted');
    return () => {
      console.log('ContactPage unmounted');
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-transparent backdrop-blur-md">
        <Suspense fallback={<div>Loading animation...</div>}>
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-1/2 h-1/2 mx-auto"
          />
        </Suspense>
      </div>

      <div className="relative z-10 p-6 max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">
          We would love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-gray-900"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
