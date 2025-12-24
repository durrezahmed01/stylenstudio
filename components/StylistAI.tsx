
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getFashionAdvice } from '../services/geminiService';

const StylistAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const advice = await getFashionAdvice(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setIsTyping(false);
  };

  return (
    <div className="bg-black/80 border border-yellow-500/20 rounded-2xl overflow-hidden flex flex-col h-[500px] shadow-2xl shadow-yellow-500/5">
      <div className="bg-yellow-500 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-yellow-200">
            <i className="fa-solid fa-wand-magic-sparkles text-yellow-500"></i>
          </div>
          <div>
            <h3 className="text-black font-bold uppercase tracking-tighter">AI Studio Stylist</h3>
            <p className="text-black/60 text-xs font-semibold">Ready to elevate your look</p>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-yellow-500/20"
      >
        {messages.length === 0 && (
          <div className="text-center py-12 px-6">
            <i className="fa-solid fa-sparkles text-4xl text-yellow-500/20 mb-4 block"></i>
            <p className="text-gray-500 italic">"Style is a way to say who you are without having to speak."</p>
            <p className="text-yellow-500/50 mt-2 text-sm uppercase tracking-widest font-bold">Ask for styling advice</p>
          </div>
        )}
        
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
              ? 'bg-yellow-500 text-black font-medium rounded-tr-none shadow-lg' 
              : 'bg-white/5 border border-white/10 text-white rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 text-white p-4 rounded-2xl rounded-tl-none">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-black/40 border-t border-yellow-500/10">
        <div className="flex space-x-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What should I wear to a gala?"
            className="flex-1 bg-white/5 border border-yellow-500/30 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors text-sm"
          />
          <button 
            type="submit"
            disabled={isTyping}
            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all shadow-lg shadow-yellow-500/20"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default StylistAI;
