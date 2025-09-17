import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';


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
     const url = 'https://script.google.com/macros/s/AKfycbxPWBK3C0ZQLUkdAVhR1jUN2irgJ6f8jrOtvrxr48eFy2YOa2ccKeauWBRWJQfz7Tmu2A/exec';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to submit form');
        }
        return res.json?.() ?? Promise.resolve({});
      })
      .then((data) => {
        // Open success dialog
        setIsSuccessOpen(true);
      })
      .catch((err) => {
        // Open failure dialog
        setIsErrorOpen(true);
      });
  };

  const navigate = useNavigate();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

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
      {/* Success dialog */}
      <AlertDialog open={isSuccessOpen} onOpenChange={(open) => setIsSuccessOpen(open)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>提交成功</AlertDialogTitle>
            <AlertDialogDescription>感谢你的订阅，我们会尽快与您联系。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => { setIsSuccessOpen(false); navigate('/'); }}>
              确定
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error dialog */}
      <AlertDialog open={isErrorOpen} onOpenChange={(open) => setIsErrorOpen(open)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>提交失败</AlertDialogTitle>
            <AlertDialogDescription>提交过程中出现问题，请稍后重试。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => { setIsErrorOpen(false); navigate('/'); }}>
              确定
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default SubscribeForm;