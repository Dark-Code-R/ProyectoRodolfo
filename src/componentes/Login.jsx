'use client';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { Eye, EyeOff, Lock, Mail, UserCircle2 } from 'lucide-react';

import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import './style/Login.css';

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleGuestLogin = () => {
    navigate('/home');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B3A57] to-[#123347] animate-fade-in">
      <div className="relative bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full max-w-md m-4 transition-all duration-300 ease-in-out hover:shadow-[0_20px_50px_rgba(27,58,87,0.3)] z-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#1B3A57]">Bienvenido</h2>
        <div className="w-full h-48 mb-6 overflow-hidden flex justify-center animate-fade-in-up">
          <Spline 
            scene="https://prod.spline.design/i7cx4-oqO1ig1-MC/scene.splinecode"
            style={{ 
              width: '100%', 
              height: '350px',
              transform: 'scale(1) translateY(-28%)',
            }}        
          />
        </div>
        <form className="space-y-6">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-[#333333] text-sm font-medium">Correo Electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5]" size={20} />
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@ejemplo.com"
                className="pl-10 pr-4 w-full border-b-2 border-[#B0BEC5] text-[#333333] placeholder-[#B0BEC5] focus:border-[#FFD166] transition-all duration-300 rounded-none focus:ring-0 animate-fade-in-up"
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password" className="text-[#333333] text-sm font-medium">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5]" size={20} />
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-10 pr-10 w-full border-b-2 border-[#B0BEC5] text-[#333333] placeholder-[#B0BEC5] focus:border-[#FFD166] transition-all duration-300 rounded-none focus:ring-0 animate-fade-in-up"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B0BEC5] hover:text-[#FFD166] transition-colors duration-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#FFD166] hover:brightness-110 text-[#1B3A57] font-semibold py-3 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD166] focus:ring-opacity-50"
          >
            Iniciar Sesión
          </Button>
        </form>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <a href="#" className="text-[#1B3A57] hover:text-[#FFD166] transition-colors duration-300">
            ¿Olvidaste tu contraseña?
          </a>
          <div className="w-full border-t border-[#B0BEC5]"></div>
          <button 
            onClick={handleGuestLogin}
            className="flex items-center justify-center space-x-2 text-[#1B3A57] hover:text-[#FFD166] transition-colors duration-300"
          >
            <UserCircle2 size={20} className="text-[#B0BEC5]" />
            <span>Ingresar como invitado</span>
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
