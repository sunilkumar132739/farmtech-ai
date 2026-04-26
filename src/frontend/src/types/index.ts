export type Language = "en" | "hi" | "mr" | "kn" | "te" | "pa";

export interface SensorReading {
  id: string;
  timestamp: number;
  moisture: number; // percentage 0-100
  nitrogen: number; // mg/kg
  phosphorus: number; // mg/kg
  potassium: number; // mg/kg
  ph: number; // 0-14
  temperature: number; // Celsius
  fieldId: string;
  fieldName: string;
}

export interface CropHealth {
  id: string;
  cropName: string;
  fieldId: string;
  healthScore: number; // 0-100
  detectedIssues: string[];
  recommendation: string;
  lastAnalyzed: number;
  imageUrl?: string;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  forecast: "sunny" | "cloudy" | "rainy" | "stormy";
  location: string;
  updatedAt: number;
}

export interface Alert {
  id: string;
  type: "warning" | "critical" | "info" | "success";
  title: string;
  message: string;
  fieldId?: string;
  timestamp: number;
  read: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TranslationSet {
  heroHeadline: string;
  heroSubheadline: string;
  heroCTA: string;
  heroSecondaryText: string;
  navHome: string;
  navDashboard: string;
  navFeatures: string;
  languageLabel: string;
  // Crop Doctor
  cropDoctorTitle: string;
  cropDoctorSubtitle: string;
  uploadPhoto: string;
  diagnoseNow: string;
  diseaseDetected: string;
  treatment: string;
  dosage: string;
  estimatedCost: string;
  // Marketplace
  marketplaceTitle: string;
  bestPriceToday: string;
  mandiPrice: string;
  buyerPrice: string;
  sellNow: string;
  // Income Tracker
  incomeTrackerTitle: string;
  addExpense: string;
  profitThisSeason: string;
  monthlyReport: string;
  // Daily Farm Plan
  farmPlanTitle: string;
  morningTasks: string;
  listenInstruction: string;
  taskIrrigation: string;
  taskSpray: string;
  taskHarvest: string;
  // Government Schemes
  schemesTitle: string;
  applyNow: string;
  checkEligibility: string;
  // Learning & Community
  learnTitle: string;
  successStories: string;
  askExpert: string;
  sendMessage: string;
  // Shared
  voiceAssistant: string;
  tapToListen: string;
  goodMorning: string;
  todayAdvice: string;
}

export interface UserProfile {
  principal: string;
  displayName: string;
  fullName: string;
  createdAt: bigint;
}
