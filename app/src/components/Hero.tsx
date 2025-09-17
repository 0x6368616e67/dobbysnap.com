
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Dobby Snap</span> 
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              多比响指啪一声，陪你从灵光一闪到方向大转弯，全生命周期迭代守护，MVP魔法始终在线！
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/subscribe">
              <Button size="lg" className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6">
                打响指 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              {/* <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-white/5 py-6">
                View Demo
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white">1 天</p>
                <p className="text-sm text-gray-400">沟通需求</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">1 周</p>
                <p className="text-sm text-gray-400">初版方案</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">1 月</p>
                <p className="text-sm text-gray-400">体验 Demo</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              <img 
                src="./images/background.png"
                alt="Trading platform dashboard" 
                className="rounded-xl shadow-2xl border border-white/10"
              />
              <div className="absolute -right-6 -bottom-6 bg-crypto-purple/20 backdrop-blur-md rounded-lg p-4 border border-crypto-purple/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M11 21H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v2M19 15v6M16 18h6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">To Your</p>
                    <p className="text-lg font-bold text-green-500">MVPs</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-6 -top-6 bg-crypto-purple/20 backdrop-blur-md rounded-lg p-4 border border-crypto-purple/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-crypto-purple/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">From Your</p>
                    <p className="text-lg font-bold text-white">Ideas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
