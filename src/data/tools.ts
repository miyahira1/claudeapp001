import type { AITool } from '../types'

export const tools: AITool[] = [
  { id: '1', name: 'ChatGPT', category: 'Escritura', description: 'El asistente de IA más popular del mundo. Ideal para redacción, brainstorming y automatización de tareas.', rating: 4.9, logoColor: 'from-emerald-400 to-teal-500', featured: true },
  { id: '2', name: 'Claude', category: 'Escritura', description: 'IA de Anthropic con razonamiento avanzado. Perfecta para análisis, código y contenido largo.', rating: 4.8, logoColor: 'from-orange-400 to-amber-500' },
  { id: '3', name: 'Make.com', category: 'Automatización', description: 'Plataforma de automatización visual sin código. Conecta miles de apps y crea workflows potentes.', rating: 4.7, logoColor: 'from-violet-400 to-purple-500' },
  { id: '4', name: 'Midjourney', category: 'Imágenes', description: 'Generador de imágenes IA de alta calidad para diseño, marketing y contenido creativo.', rating: 4.8, logoColor: 'from-blue-400 to-indigo-500' },
  { id: '5', name: 'Runway ML', category: 'Video', description: 'Suite de herramientas IA para edición y generación de video profesional.', rating: 4.6, logoColor: 'from-pink-400 to-rose-500' },
  { id: '6', name: 'Notion AI', category: 'Productividad', description: 'IA integrada en Notion para redactar, resumir y organizar tu conocimiento automáticamente.', rating: 4.5, logoColor: 'from-slate-400 to-gray-500' },
  { id: '7', name: 'Zapier', category: 'Automatización', description: 'La herramienta de automatización más usada del mundo. Conecta +5,000 aplicaciones.', rating: 4.6, logoColor: 'from-orange-400 to-red-500' },
  { id: '8', name: 'DALL-E 3', category: 'Imágenes', description: 'Generador de imágenes de OpenAI con alta fidelidad al prompt y calidad fotorrealista.', rating: 4.7, logoColor: 'from-cyan-400 to-blue-500' },
  { id: '9', name: 'Perplexity AI', category: 'Productividad', description: 'Motor de búsqueda con IA que cita fuentes y responde preguntas complejas en tiempo real.', rating: 4.6, logoColor: 'from-teal-400 to-emerald-500' },
  { id: '10', name: 'HeyGen', category: 'Video', description: 'Crea videos con avatares IA realistas. Ideal para cursos, marketing y comunicación corporativa.', rating: 4.5, logoColor: 'from-yellow-400 to-orange-500' },
  { id: '11', name: 'Copy.ai', category: 'Escritura', description: 'Plataforma de copywriting con IA para crear textos de marketing, emails y anuncios.', rating: 4.4, logoColor: 'from-indigo-400 to-violet-500' },
  { id: '12', name: 'n8n', category: 'Automatización', description: 'Alternativa open-source a Make.com. Automatización avanzada con código y sin código.', rating: 4.6, logoColor: 'from-red-400 to-pink-500' },
  { id: '13', name: 'Eleven Labs', category: 'Video', description: 'Síntesis de voz IA ultra-realista en múltiples idiomas. Perfecta para podcasts y videos.', rating: 4.7, logoColor: 'from-lime-400 to-green-500' },
  { id: '14', name: 'Gamma', category: 'Productividad', description: 'Crea presentaciones y documentos profesionales con IA en segundos.', rating: 4.5, logoColor: 'from-fuchsia-400 to-pink-500' },
  { id: '15', name: 'GrowthBar', category: 'Negocios', description: 'Herramienta de SEO y contenido con IA para escalar el tráfico orgánico.', rating: 4.3, logoColor: 'from-green-400 to-emerald-500' },
  { id: '16', name: 'Jasper', category: 'Negocios', description: 'Plataforma de marketing con IA para equipos. Genera contenido on-brand a escala.', rating: 4.4, logoColor: 'from-blue-400 to-cyan-500' },
]

export const toolCategories = ['Todos', 'Escritura', 'Automatización', 'Imágenes', 'Video', 'Productividad', 'Negocios']
