import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  MessageSquare,
  Play,
  Send,
  Star,
  ThumbsUp,
  User,
  Video,
} from "lucide-react";
import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

interface Story {
  id: string;
  name: string;
  location: string;
  crop: string;
  income: string;
  avatar: string;
  quote: string;
  likes: number;
  color: string;
}

interface VideoLesson {
  id: string;
  title: string;
  duration: string;
  views: string;
  category: string;
  gradient: string;
}

interface ChatMsg {
  id: string;
  sender: string;
  role?: string;
  text: string;
  time: string;
  isExpert: boolean;
}

const SUCCESS_STORIES: Story[] = [
  {
    id: "s1",
    name: "Harpreet Singh",
    location: "Punjab",
    crop: "Wheat",
    income: "+₹1.3L",
    avatar: "HS",
    quote:
      "Increased income from ₹80K to ₹2.1L in one season using drip irrigation and AI crop advice. Never thought tech would work for a simple farmer like me.",
    likes: 142,
    color: "bg-primary",
  },
  {
    id: "s2",
    name: "Suresh Patil",
    location: "Maharashtra",
    crop: "Tomato",
    income: "+₹45K",
    avatar: "SP",
    quote:
      "Detected early blight with AI Crop Doctor, saved 2 acres of tomatoes worth ₹45,000. The photo diagnosis was instant and medicine suggestion was spot on.",
    likes: 98,
    color: "bg-accent",
  },
  {
    id: "s3",
    name: "Meena Devi",
    location: "Rajasthan",
    crop: "Wheat",
    income: "+₹35K",
    avatar: "MD",
    quote:
      "Sold wheat directly to BigBasket through marketplace — got ₹350 more per quintal than the mandi rate. My family eats better now.",
    likes: 76,
    color: "bg-secondary",
  },
  {
    id: "s4",
    name: "Ramesh Kumar",
    location: "Uttar Pradesh",
    crop: "Mixed",
    income: "+3 acres",
    avatar: "RK",
    quote:
      "Applied PM-KISAN and KCC loan, expanded farm from 1 to 3 acres in 2 years. Government schemes were easy to understand on this app.",
    likes: 88,
    color: "bg-primary",
  },
];

const VIDEO_LESSONS: VideoLesson[] = [
  {
    id: "v1",
    title: "How to Detect Wheat Rust Early",
    duration: "4:32",
    views: "12K",
    category: "Disease",
    gradient: "from-primary/40 to-primary/10",
  },
  {
    id: "v2",
    title: "Drip Irrigation Setup Guide",
    duration: "8:15",
    views: "8.5K",
    category: "Irrigation",
    gradient: "from-blue-500/30 to-blue-500/5",
  },
  {
    id: "v3",
    title: "Organic Pest Control Methods",
    duration: "6:20",
    views: "15K",
    category: "Pest",
    gradient: "from-primary/40 to-accent/10",
  },
  {
    id: "v4",
    title: "Smart Seed Selection for Rabi",
    duration: "5:45",
    views: "9.2K",
    category: "Seeds",
    gradient: "from-accent/30 to-accent/5",
  },
  {
    id: "v5",
    title: "Soil Testing at Home",
    duration: "3:50",
    views: "20K",
    category: "Soil",
    gradient: "from-secondary/40 to-secondary/10",
  },
  {
    id: "v6",
    title: "Maximum Yield with Minimum Water",
    duration: "7:10",
    views: "11K",
    category: "Water",
    gradient: "from-blue-500/20 to-primary/10",
  },
];

const INITIAL_MESSAGES: ChatMsg[] = [
  {
    id: "m1",
    sender: "You",
    text: "Meri fasal mein patte peele ho rahe hain, kya karu?",
    time: "10:25 AM",
    isExpert: false,
  },
  {
    id: "m2",
    sender: "Dr. Rajesh",
    role: "Agronomy Expert",
    text: "Nitrogen ki kami ho sakti hai. DAP khad dalein, 2 bag per acre. Agle hafte result dikhega. Pani bhi kam mat karo.",
    time: "10:28 AM",
    isExpert: true,
  },
];

export default function LearnCommunity() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"videos" | "stories" | "expert">(
    "videos",
  );
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set());
  const [messages, setMessages] = useState<ChatMsg[]>(INITIAL_MESSAGES);
  const [inputMsg, setInputMsg] = useState("");
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  function toggleLike(id: string) {
    setLikedStories((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function sendMessage() {
    if (!inputMsg.trim()) return;
    const now = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const userMsg: ChatMsg = {
      id: Date.now().toString(),
      sender: "You",
      text: inputMsg.trim(),
      time: now,
      isExpert: false,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputMsg("");

    setTimeout(() => {
      const reply: ChatMsg = {
        id: (Date.now() + 1).toString(),
        sender: "Dr. Rajesh",
        role: "Agronomy Expert",
        text: "Expert will respond within 30 minutes. WhatsApp reminder sent! 📱",
        time: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isExpert: true,
      };
      setMessages((prev) => [...prev, reply]);
      setTimeout(
        () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }),
        100,
      );
    }, 1000);
  }

  const tabs = [
    { key: "videos" as const, label: "Videos", icon: Video },
    { key: "stories" as const, label: t.successStories, icon: Star },
    { key: "expert" as const, label: t.askExpert, icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 mb-4">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            {t.learnTitle}
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn from experts, share success, grow together
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-2 mb-8 overflow-x-auto pb-1"
          data-ocid="learn-tabs"
        >
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-smooth ${
                activeTab === key
                  ? "bg-primary text-primary-foreground"
                  : "glass border border-white/15 text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
              data-ocid={`learn-tab-${key}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="videos-grid"
          >
            {VIDEO_LESSONS.map((video) => (
              <Card
                key={video.id}
                className="glass border-white/15 hover:border-primary/40 transition-smooth group cursor-pointer"
                onClick={() => setVideoModal(video.id)}
                data-ocid={`video-card-${video.id}`}
              >
                <CardContent className="p-0">
                  <div
                    className={`relative h-40 bg-gradient-to-br ${video.gradient} rounded-t-2xl flex items-center justify-center overflow-hidden`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-primary/60 transition-smooth">
                      <Play className="w-6 h-6 text-foreground ml-0.5" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-card/80 text-foreground border-white/20 text-xs">
                      {video.category}
                    </Badge>
                    <span className="absolute bottom-3 right-3 text-xs text-foreground bg-card/70 rounded px-1.5 py-0.5 font-medium">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2 leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {video.views} views
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Video Modal */}
        {videoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            onClick={() => setVideoModal(null)}
            onKeyDown={(e) => e.key === "Escape" && setVideoModal(null)}
            tabIndex={-1}
            data-ocid="video-modal"
          >
            <div
              className="glass border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 text-center"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {VIDEO_LESSONS.find((v) => v.id === videoModal)?.title}
              </h3>
              <p className="text-muted-foreground mb-5">
                This video will be available soon. We're adding fresh farming
                content every week!
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setVideoModal(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === "stories" && (
          <div className="grid sm:grid-cols-2 gap-5" data-ocid="stories-grid">
            {SUCCESS_STORIES.map((story) => (
              <Card
                key={story.id}
                className="glass border-white/15 hover:border-primary/40 transition-smooth"
                data-ocid={`story-card-${story.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${story.color} flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0`}
                    >
                      {story.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm truncate">
                        {story.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {story.location} · {story.crop}
                      </p>
                    </div>
                    <Badge className="ml-auto bg-accent/20 text-accent border border-accent/30 shrink-0 font-bold">
                      {story.income}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">
                    "{story.quote}"
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleLike(story.id)}
                    className={`flex items-center gap-2 text-sm transition-smooth ${
                      likedStories.has(story.id)
                        ? "text-accent"
                        : "text-muted-foreground hover:text-accent"
                    }`}
                    data-ocid={`story-like-${story.id}`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {story.likes + (likedStories.has(story.id) ? 1 : 0)} Helpful
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Ask Expert Tab */}
        {activeTab === "expert" && (
          <div className="max-w-2xl mx-auto" data-ocid="expert-chat">
            <Card className="glass border-white/15">
              <CardHeader className="border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">
                      Dr
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-base text-foreground">
                      Dr. Rajesh
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Agronomy Expert · Online
                    </p>
                  </div>
                  <Badge className="ml-auto bg-primary/20 text-primary border border-primary/30">
                    🟢 Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div
                  className="p-4 space-y-4 max-h-80 overflow-y-auto"
                  data-ocid="chat-messages"
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${!msg.isExpert ? "flex-row-reverse" : ""}`}
                      data-ocid={`chat-msg-${msg.id}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                          msg.isExpert
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/10 text-foreground"
                        }`}
                      >
                        {msg.isExpert ? "Dr" : <User className="w-4 h-4" />}
                      </div>
                      <div
                        className={`max-w-[78%] flex flex-col gap-1 ${!msg.isExpert ? "items-end" : ""}`}
                      >
                        {msg.isExpert && (
                          <p className="text-xs font-semibold text-primary">
                            {msg.sender}
                          </p>
                        )}
                        <div
                          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                            msg.isExpert
                              ? "glass border border-white/10 text-foreground"
                              : "bg-primary/20 border border-primary/30 text-foreground"
                          }`}
                        >
                          {msg.text}
                        </div>
                        <p className="text-xs text-muted-foreground px-1">
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-4 border-t border-white/10 flex gap-3">
                  <Input
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    placeholder="Type your farming question..."
                    className="flex-1 bg-white/5 border-white/15 text-foreground placeholder:text-muted-foreground"
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    data-ocid="expert-chat-input"
                  />
                  <Button
                    size="icon"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                    onClick={sendMessage}
                    data-ocid="expert-chat-send"
                    aria-label={t.sendMessage}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
