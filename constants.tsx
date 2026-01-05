
import React from 'react';
import { Palette, PenTool, Layout, Monitor, Heart, Share2, MessageCircle, Bookmark, Apple, Disc, Chrome, Box } from 'lucide-react';
import { Project, Skill, EducationEntry } from './types';

export const PROJECTS: Project[] = [
  // Logo Design
  { id: '1', title: 'Zephyr Tech Identity', category: 'Logo Design', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Evergreen Organics', category: 'Logo Design', image: 'https://images.unsplash.com/photo-1626785774625-ddc7c82a1e5c?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Nordic Peak Branding', category: 'Logo Design', image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Quantum Dynamics', category: 'Logo Design', image: 'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Silver Lining Studio', category: 'Logo Design', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Vanguard Systems', category: 'Logo Design', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },

  // Social Media Design
  { id: '7', title: 'Aura Summer Campaign', category: 'Social Media Design', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
  { id: '8', title: 'Foodies IG Strategy', category: 'Social Media Design', image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad39?auto=format&fit=crop&q=80&w=800' },
  { id: '9', title: 'Fitness App Visuals', category: 'Social Media Design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: '10', title: 'Tech News Layouts', category: 'Social Media Design', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
  { id: '11', title: 'Fashion Pulse Kit', category: 'Social Media Design', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { id: '12', title: 'Coffee Brew Promos', category: 'Social Media Design', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800' },

  // Branding Design
  { id: '13', title: 'Urban Loft Full ID', category: 'Branding Design', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d7?auto=format&fit=crop&q=80&w=800' },
  { id: '14', title: 'Horizon Travel Kit', category: 'Branding Design', image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800' },
  { id: '15', title: 'Studio Mono Brand', category: 'Branding Design', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800' },
  { id: '16', title: 'Gourmet Box Series', category: 'Branding Design', image: 'https://images.unsplash.com/photo-1530519729491-acf5b5adfd69?auto=format&fit=crop&q=80&w=800' },
  { id: '17', title: 'Neon Pulse Visuals', category: 'Branding Design', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
  { id: '18', title: 'Atlas Ventures Book', category: 'Branding Design', image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=800' },

  // Vector Design
  { id: '19', title: 'Cyber City Vector', category: 'Vector Design', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800' },
  { id: '20', title: 'Geometric Wildlife', category: 'Vector Design', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800' },
  { id: '21', title: 'Modern Icon Suite', category: 'Vector Design', image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=800' },
  { id: '22', title: 'Abstract Light Paths', category: 'Vector Design', image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=800' },
  { id: '23', title: 'Isometric Workspaces', category: 'Vector Design', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800' },
  { id: '24', title: 'Infinite Grid Lines', category: 'Vector Design', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800' },
];

export const SKILLS: Skill[] = [
  { name: 'Adobe Creative Cloud', level: 98 },
  { name: 'Visual Identity Systems', level: 95 },
  { name: 'Print & Publication Design', level: 90 },
  { name: 'Motion Visuals', level: 82 },
  { name: 'Digital Ad Campaigns', level: 94 },
  { name: 'Typography & Layout', level: 96 },
  { name: 'Vector Mastery', level: 97 },
  { name: 'Strategic Branding', level: 88 },
];

export const EDUCATION: EducationEntry[] = [
  { degree: 'Masters in Global Design Strategy', institution: 'Parsons School of Design', year: '2019 - 2021' },
  { degree: 'BFA in Graphic Communications', institution: 'California Institute of the Arts', year: '2015 - 2019' },
  { degree: 'Executive Creative Leadership', institution: 'Harvard Extension School', year: '2022' },
];

export const CLIENTS = [
  { name: 'TechFlow', icon: <Apple className="w-8 h-8 opacity-40 hover:opacity-100 transition-opacity" /> },
  { name: 'VibeStudio', icon: <Disc className="w-8 h-8 opacity-40 hover:opacity-100 transition-opacity" /> },
  { name: 'PulseMedia', icon: <Chrome className="w-8 h-8 opacity-40 hover:opacity-100 transition-opacity" /> },
  { name: 'CubeLink', icon: <Box className="w-8 h-8 opacity-40 hover:opacity-100 transition-opacity" /> },
];

export const SERVICES = [
  { title: 'Brand Identity', icon: <Palette className="w-8 h-8" />, desc: 'End-to-end identity systems including logos, color theory, and guidelines.' },
  { title: 'Digital Social', icon: <Share2 className="w-8 h-8" />, desc: 'Strategic high-impact visuals for Instagram, LinkedIn, and global campaigns.' },
  { title: 'Graphic Layouts', icon: <Layout className="w-8 h-8" />, desc: 'Professional editorial design, brochures, and large-scale print production.' },
  { title: 'Custom Vectors', icon: <PenTool className="w-8 h-8" />, desc: 'Bespoke illustrations and scalable assets for high-end digital platforms.' },
];
