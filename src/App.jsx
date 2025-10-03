// src/App.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Portfolio from './portfolio';

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-800 overflow-hidden bg-gradient-to-r from-neutral-100 to-teal-100 ">
     <Portfolio/>
    </div>
  );
}