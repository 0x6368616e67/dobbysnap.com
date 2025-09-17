import { useState } from 'react';

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <section id="subscribe" className="py-24 bg-[#12141C]">
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">订阅</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nickname" className="block text-sm font-medium mb-2">称呼：</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-[#12141C]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">邮箱：</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-[#12141C]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-2">需求描述：</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-[#12141C]"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-crypto-purple text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
        >
          提交
        </button>
      </form>
    </div>
    </section>
  );
};

export default SubscribeForm;