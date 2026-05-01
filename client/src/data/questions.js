// 60 Questions across 6 Life Aspects — 10 per category
// Types: slider | range | image-choice | emoji-scale | mcq

const questions = [
  // ─── SOCIAL (1–10) ───────────────────────────────────────────────────
  { id: 's01', category: 'social', text: 'How many meaningful conversations do you have per week?', type: 'slider', min: 0, max: 30, step: 1, unit: 'conversations' },
  { id: 's02', category: 'social', text: 'How comfortable are you in social gatherings?', type: 'emoji-scale', options: ['😰','😕','😐','🙂','🤩'], labels: ['Very Uncomfortable','Uncomfortable','Neutral','Comfortable','Love it'] },
  { id: 's03', category: 'social', text: 'Which social setting do you prefer?', type: 'mcq', options: ['Solo activities', 'Small group (2–5)', 'Medium group (6–15)', 'Large crowd (15+)'] },
  { id: 's04', category: 'social', text: 'Rate your daily online social media engagement (hours per day)', type: 'range', min: 0, max: 12, step: 0.5, unit: 'hrs' },
  { id: 's05', category: 'social', text: 'Which environment reflects your social life best?', type: 'image-choice', options: [{ label: 'Coffee chat', img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=120&fit=crop' },{ label: 'Party', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=200&h=120&fit=crop' },{ label: 'Solo walk', img: 'https://images.unsplash.com/photo-1499540633125-484965b60031?w=200&h=120&fit=crop' },{ label: 'Online call', img: 'https://images.unsplash.com/photo-1588702547923-7408a51c6791?w=200&h=120&fit=crop' }] },
  { id: 's06', category: 'social', text: 'How many close friends do you have?', type: 'slider', min: 0, max: 20, step: 1, unit: 'friends' },
  { id: 's07', category: 'social', text: 'How well do you resist peer pressure?', type: 'emoji-scale', options: ['😖','😟','😐','💪','🦁'], labels: ['Very poorly','Poorly','Sometimes','Well','Always'] },
  { id: 's08', category: 'social', text: 'How often do you take on leadership roles?', type: 'slider', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 's09', category: 'social', text: 'How often do you experience social anxiety?', type: 'mcq', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Almost always'] },
  { id: 's10', category: 'social', text: 'How deep are your friendships on average?', type: 'range', min: 1, max: 10, step: 1, unit: '/10' },

  // ─── EDUCATIONAL (11–20) ─────────────────────────────────────────────
  { id: 'e01', category: 'educational', text: 'How many hours do you study per day on average?', type: 'slider', min: 0, max: 16, step: 0.5, unit: 'hrs' },
  { id: 'e02', category: 'educational', text: 'Which learning style suits you best?', type: 'image-choice', options: [{ label: 'Videos', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=120&fit=crop' },{ label: 'Books', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=120&fit=crop' },{ label: 'Practice', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop' },{ label: 'Classroom', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&h=120&fit=crop' }] },
  { id: 'e03', category: 'educational', text: 'Do you prefer self-study or classroom learning?', type: 'mcq', options: ['Strongly prefer self-study', 'Lean self-study', 'No preference', 'Lean classroom', 'Strongly prefer classroom'] },
  { id: 'e04', category: 'educational', text: 'Rate your current academic stress level', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 'e05', category: 'educational', text: 'How curious are you about learning new subjects?', type: 'emoji-scale', options: ['😴','🥱','😐','🤔','🤓'], labels: ['Not at all','Slightly','Moderate','Curious','Very curious'] },
  { id: 'e06', category: 'educational', text: 'How many books/articles do you read per month?', type: 'slider', min: 0, max: 30, step: 1, unit: 'items' },
  { id: 'e07', category: 'educational', text: 'How clear are you about your career path?', type: 'mcq', options: ['Completely lost', 'Exploring options', 'Have some ideas', 'Fairly clear', 'Crystal clear'] },
  { id: 'e08', category: 'educational', text: 'How many online courses have you completed this year?', type: 'slider', min: 0, max: 20, step: 1, unit: 'courses' },
  { id: 'e09', category: 'educational', text: 'How accessible are mentors or guides in your field?', type: 'range', min: 1, max: 10, step: 1, unit: '/10' },
  { id: 'e10', category: 'educational', text: 'How often do you apply what you learn in real projects?', type: 'emoji-scale', options: ['😶','😕','😐','😊','🚀'], labels: ['Never','Rarely','Sometimes','Often','Always'] },

  // ─── EMOTIONAL (21–30) ───────────────────────────────────────────────
  { id: 'em01', category: 'emotional', text: 'Rate your overall emotional wellbeing this month', type: 'emoji-scale', options: ['😔','😕','😐','🙂','😄'], labels: ['Very Low','Low','Neutral','Good','Excellent'] },
  { id: 'em02', category: 'emotional', text: 'What is your biggest stress trigger?', type: 'mcq', options: ['Work/Studies', 'Relationships', 'Finances', 'Health', 'Future uncertainty'] },
  { id: 'em03', category: 'emotional', text: 'How well can you regulate your emotions under pressure?', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 'em04', category: 'emotional', text: 'How many hours of sleep do you get on average?', type: 'slider', min: 3, max: 12, step: 0.5, unit: 'hrs' },
  { id: 'em05', category: 'emotional', text: 'Do you journal or reflect on your thoughts regularly?', type: 'mcq', options: ['Never', 'Rarely', 'Weekly', 'Daily', 'Multiple times a day'] },
  { id: 'em06', category: 'emotional', text: 'How open are you to therapy or counseling?', type: 'emoji-scale', options: ['🚫','😤','🤷','👍','💯'], labels: ['Strongly against','Reluctant','Neutral','Open','Actively seeking'] },
  { id: 'em07', category: 'emotional', text: 'How often do you feel lonely in a typical week?', type: 'range', min: 0, max: 7, step: 1, unit: 'days' },
  { id: 'em08', category: 'emotional', text: 'Rate your optimism about your future (1–10)', type: 'slider', min: 1, max: 10, step: 1, unit: '/10' },
  { id: 'em09', category: 'emotional', text: 'How comfortable are you expressing your emotions?', type: 'emoji-scale', options: ['😶','😬','😐','😊','💬'], labels: ['Never','Rarely','Sometimes','Comfortable','Very open'] },
  { id: 'em10', category: 'emotional', text: 'Which describes your coping strategy best?', type: 'image-choice', options: [{ label: 'Exercise', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&h=120&fit=crop' },{ label: 'Music', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=120&fit=crop' },{ label: 'Friends', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=120&fit=crop' },{ label: 'Solitude', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=120&fit=crop' }] },

  // ─── CULTURAL (31–40) ────────────────────────────────────────────────
  { id: 'c01', category: 'cultural', text: 'Which environment makes you feel most at peace?', type: 'image-choice', options: [{ label: 'City', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=120&fit=crop' },{ label: 'Nature', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=200&h=120&fit=crop' },{ label: 'Ocean', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=120&fit=crop' },{ label: 'Village', img: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=200&h=120&fit=crop' }] },
  { id: 'c02', category: 'cultural', text: 'How proud are you of your cultural identity?', type: 'mcq', options: ['Not at all', 'Slightly', 'Moderately', 'Very proud', 'Extremely proud'] },
  { id: 'c03', category: 'cultural', text: 'Where do you stand on traditional vs modern values?', type: 'slider', min: 1, max: 10, step: 1, unit: '(1=Traditional, 10=Modern)' },
  { id: 'c04', category: 'cultural', text: 'How comfortable are you with language diversity?', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 'c05', category: 'cultural', text: 'How do you feel about cultural celebrations?', type: 'emoji-scale', options: ['😒','😕','😐','😊','🎉'], labels: ['Indifferent','Meh','Neutral','Enjoy','Love them'] },
  { id: 'c06', category: 'cultural', text: 'What type of media do you consume most?', type: 'image-choice', options: [{ label: 'Local content', img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=200&h=120&fit=crop' },{ label: 'International', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=120&fit=crop' },{ label: 'Mixed', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=200&h=120&fit=crop' },{ label: 'None/books', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=120&fit=crop' }] },
  { id: 'c07', category: 'cultural', text: 'How diverse is your diet across different cuisines?', type: 'slider', min: 1, max: 10, step: 1, unit: '/10' },
  { id: 'c08', category: 'cultural', text: 'How open are you to traveling and experiencing new cultures?', type: 'mcq', options: ['Not interested', 'Curious but hesitant', 'Somewhat open', 'Very open', 'Actively planning'] },
  { id: 'c09', category: 'cultural', text: 'How important is religion or spirituality in your life?', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 'c10', category: 'cultural', text: 'How often do you engage with art, music, or theater?', type: 'emoji-scale', options: ['🚫','🙁','😐','😊','🎭'], labels: ['Never','Rarely','Sometimes','Often','Always'] },

  // ─── DIGITAL / TECH (41–50) ──────────────────────────────────────────
  { id: 'd01', category: 'digital', text: 'How many hours per day do you spend on screens?', type: 'slider', min: 0, max: 18, step: 0.5, unit: 'hrs' },
  { id: 'd02', category: 'digital', text: 'What is the overall impact of social media on your life?', type: 'emoji-scale', options: ['😠','😕','😐','🙂','🚀'], labels: ['Very negative','Negative','Neutral','Positive','Very positive'] },
  { id: 'd03', category: 'digital', text: 'Rate your dependency on technology for daily tasks', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 'd04', category: 'digital', text: 'How often do you do a digital detox?', type: 'mcq', options: ['Never', 'Rarely', 'Monthly', 'Weekly', 'Daily'] },
  { id: 'd05', category: 'digital', text: 'How aware are you of AI and its impact on society?', type: 'slider', min: 1, max: 10, step: 1, unit: '/10' },
  { id: 'd06', category: 'digital', text: 'Which digital habit describes you best?', type: 'image-choice', options: [{ label: 'Content creator', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=120&fit=crop' },{ label: 'Gamer', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=120&fit=crop' },{ label: 'Scroller', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=120&fit=crop' },{ label: 'Worker', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=120&fit=crop' }] },
  { id: 'd07', category: 'digital', text: 'How concerned are you about your online privacy?', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 'd08', category: 'digital', text: 'How many hours per week do you game?', type: 'slider', min: 0, max: 40, step: 1, unit: 'hrs' },
  { id: 'd09', category: 'digital', text: 'How comfortable are you working/studying remotely?', type: 'mcq', options: ['Hate it', 'Prefer in-person', 'No preference', 'Prefer remote', 'Love it'] },
  { id: 'd10', category: 'digital', text: 'How interested are you in creating digital content?', type: 'emoji-scale', options: ['😶','😕','😐','😊','🎬'], labels: ['Not at all','Slightly','Somewhat','Interested','Passionate'] },

  // ─── ENVIRONMENTAL (51–60) ───────────────────────────────────────────
  { id: 'en01', category: 'environmental', text: 'How eco-conscious are your daily habits?', type: 'slider', min: 1, max: 10, step: 1, unit: '/10' },
  { id: 'en02', category: 'environmental', text: 'How frequently do you recycle?', type: 'range', min: 0, max: 7, step: 1, unit: 'days/week' },
  { id: 'en03', category: 'environmental', text: 'How concerned are you about climate change?', type: 'mcq', options: ['Not at all', 'Slightly', 'Moderately', 'Very concerned', 'Extremely concerned'] },
  { id: 'en04', category: 'environmental', text: 'Which describes your connection to nature?', type: 'image-choice', options: [{ label: 'Hiker', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=120&fit=crop' },{ label: 'Gardener', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=120&fit=crop' },{ label: 'City person', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=120&fit=crop' },{ label: 'Indoors', img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=200&h=120&fit=crop' }] },
  { id: 'en05', category: 'environmental', text: 'How many hours per week do you spend in nature?', type: 'slider', min: 0, max: 30, step: 0.5, unit: 'hrs' },
  { id: 'en06', category: 'environmental', text: 'How often do you choose sustainable products?', type: 'emoji-scale', options: ['🚫','😕','😐','♻️','🌿'], labels: ['Never','Rarely','Sometimes','Often','Always'] },
  { id: 'en07', category: 'environmental', text: 'How aware are you of your home energy consumption?', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
  { id: 'en08', category: 'environmental', text: 'How often do you use public transport?', type: 'slider', min: 0, max: 7, step: 1, unit: 'days/week' },
  { id: 'en09', category: 'environmental', text: 'How open are you to a plant-based diet?', type: 'mcq', options: ['Not at all', 'Slightly curious', 'Partially plant-based', 'Mostly plant-based', 'Fully vegan/vegetarian'] },
  { id: 'en10', category: 'environmental', text: 'Rate your overall lifestyle carbon footprint awareness', type: 'range', min: 0, max: 10, step: 1, unit: '/10' },
]

export default questions

export const CATEGORIES = [
  { key: 'social',        label: 'Social',        color: '#7c3aed', icon: '👥' },
  { key: 'educational',   label: 'Educational',   color: '#06b6d4', icon: '📚' },
  { key: 'emotional',     label: 'Emotional',     color: '#f59e0b', icon: '💛' },
  { key: 'cultural',      label: 'Cultural',      color: '#10b981', icon: '🌍' },
  { key: 'digital',       label: 'Digital/Tech',  color: '#3b82f6', icon: '💻' },
  { key: 'environmental', label: 'Environmental', color: '#84cc16', icon: '🌱' },
]
