// GRIP — Global Reputation Information Platform
// Simple React dashboard — Portfolio, Per‑Celebrity Dashboard, Comparison View
// Uses plain React with inline styles.

import React from 'react';

const celebrities = [
  {
    name: 'Virat Kohli',
    handle: '@imVkohli',
    instagram: 'https://www.instagram.com/virat.kohli',
    image:
      'https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg?w=300',
  },
  {
    name: 'Shikhar Dhawan',
    handle: '@SDhawan',
    instagram:
      'https://www.bookmyartistindia.com/wp-content/uploads/2024/09/Shikhar-Dhawan.png',
    image:
      'https://www.bookmyartistindia.com/wp-content/uploads/2024/09/Shikhar-Dhawan.png',
  },
  {
    name: 'Yuzvendra Chahal',
    handle: '@yuzi_chahal23',
    instagram: 'https://www.instagram.com/yuzi_chahal23',
    image:
      'https://img.cricketnmore.com/uploads/2025/10/yuzi-chahal-conway-sign-up-with-northamptonshire-for-2026-campaign-mdl.jpg',
  },
  {
    name: 'Harbhajan Singh',
    handle: '@harbhajan3',
    instagram: 'https://www.instagram.com/harbhajan3',
    image:
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202509/harbhajan-singh-130715140-16x9_0.jpg?VersionId=f2wm4xbv8qlAVQiLy9hPOzljlZidVVbk&size=690:388',
  },
  {
    name: 'Yuvraj Singh',
    handle: '@YUVSTRONG12',
    instagram: 'https://www.instagram.com/yuvisofficial',
    image:
      'https://cdn.britannica.com/43/271843-050-59CD91FF/Yuvraj-Singh-poses-prior-to-February-2018-Laureus-World-Sports-Awards-Monaco.jpg?w=300',
  },
  {
    name: 'Irfan Pathan',
    handle: '@IrfanPathan',
    instagram: 'https://www.instagram.com/irfanpathan_official',
    image:
      'https://yt3.googleusercontent.com/ommpelsnyLLlXny0BQvP2VZ5uKJj7j7hFWeDD03hc2tgdH83BQJjFHI2otomLIYGbt77AYXqQo4=s160-c-k-c0x00ffffff-no-rj',
  },
];

const sampleMentions = [
  {
    id: 1,
    source: 'X',
    author: '@cricketfan101',
    sentiment: 'positive',
    text: 'King Kohli era continues! 🔥 Unbelievable form right now.',
    timestamp: 'Just now',
    likes: 2847,
    retweets: 612,
    replies: 203,
    url: 'https://x.com',
  },
  {
    id: 2,
    source: 'Instagram',
    author: 'sports.reels',
    sentiment: 'positive',
    text: 'Virat Kohli motivational reel trending worldwide 💪',
    timestamp: '5m ago',
    likes: 1200,
    retweets: 0,
    replies: 45,
    url: 'https://www.instagram.com',
  },
  {
    id: 3,
    source: 'Reddit',
    author: 'r/IndiaCricket',
    sentiment: 'negative',
    text: 'Robin Uthappa: "Virat Kohli played dirty politics"',
    timestamp: '12m ago',
    likes: 560,
    retweets: 0,
    replies: 190,
    url: 'https://www.reddit.com/r/IndiaCricket/comments/1i0hisj/robin_uthappa_virat_kohli_played_dirty_politics/',
  },
  {
    id: 4,
    source: 'Quora',
    author: 'Cricket Analyst',
    sentiment: 'neutral',
    text: 'Is Kohli the greatest ODI batsman? Discussion continues.',
    timestamp: '22m ago',
    likes: 87,
    retweets: 0,
    replies: 23,
    url: 'https://www.quora.com',
  },
  {
    id: 5,
    source: 'Times of India',
    author: 'TOI Sports Desk',
    sentiment: 'positive',
    text: 'Virat Kohli breaks another batting record — fans celebrate!',
    timestamp: '1h ago',
    likes: 0,
    retweets: 0,
    replies: 0,
    url: 'https://timesofindia.indiatimes.com',
  },
  {
    id: 6,
    source: 'Telegraph',
    author: 'The Telegraph',
    sentiment: 'neutral',
    text: 'Analysis: Kohli’s strike rotation in Test cricket this year.',
    timestamp: '2h ago',
    likes: 0,
    retweets: 0,
    replies: 0,
    url: 'https://www.telegraphindia.com',
  },
  {
    id: 7,
    source: 'Hindustan Times',
    author: 'HT Sports',
    sentiment: 'positive',
    text: 'Kohli receives standing ovation — goosebumps moment!',
    timestamp: '3h ago',
    likes: 0,
    retweets: 0,
    replies: 0,
    url: 'https://www.hindustantimes.com',
  },
  {
    id: 8,
    source: 'Cricbuzz',
    author: 'Cricbuzz Live',
    sentiment: 'neutral',
    text: 'Big match tomorrow — all eyes on Kohli.',
    timestamp: '5h ago',
    likes: 0,
    retweets: 0,
    replies: 0,
    url: 'https://www.cricbuzz.com',
  },
  {
    id: 9,
    source: 'Cricinfo',
    author: 'ESPN Cricinfo',
    sentiment: 'positive',
    text: 'Virat Kohli — the chase master returns!',
    timestamp: '6h ago',
    likes: 0,
    retweets: 0,
    replies: 0,
    url: 'https://www.espncricinfo.com',
  },
];

const sampleVideos = [
  {
    id: 1,
    title: 'Fans go crazy — goosebumps moment!',
    source: 'Reddit',
    sentiment: 'positive',
    url: 'https://packaged-media.redd.it/lp92qlun4d4g1/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1764511200&s=3fc925e7cf319acef87a80d9b247def87940531a',
  },
  {
    id: 2,
    title: 'Instagram reel celebrating Kohli',
    source: 'Instagram',
    sentiment: 'positive',
    url: 'https://www.instagram.com/reel/DQqWWgDAS_n/?hl=en',
  },
  {
    id: 3,
    title: 'Robin Uthappa negative take on Kohli',
    source: 'Reddit',
    sentiment: 'negative',
    url: 'https://www.reddit.com/r/IndiaCricket/comments/1i0hisj/robin_uthappa_virat_kohli_played_dirty_politics/',
  },
  {
    id: 4,
    title: 'Kohli smashes century in style',
    source: 'X',
    sentiment: 'positive',
    url: 'https://x.com/BCCI/status/example1',
  },
  {
    id: 5,
    title: 'Behind the scenes training session',
    source: 'Instagram',
    sentiment: 'positive',
    url: 'https://www.instagram.com/p/example2/',
  },
  {
    id: 6,
    title: 'Press conference highlights',
    source: 'YouTube',
    sentiment: 'neutral',
    url: 'https://youtube.com/watch?v=example3',
  },
  {
    id: 7,
    title: 'Fan reactions compilation',
    source: 'X',
    sentiment: 'positive',
    url: 'https://x.com/CricketFans/status/example4',
  },
  {
    id: 8,
    title: 'Kohli fitness routine reveal',
    source: 'Instagram',
    sentiment: 'positive',
    url: 'https://www.instagram.com/reel/example5/',
  },
];

const taggedPosts = [
  {
    id: 1,
    platform: 'Instagram',
    author: '@paborofficial',
    handle: 'Puma India',
    verified: true,
    text: 'The King wears the crown. @virat.kohli in the new Puma One8 collection. #ForeverFaster #One8',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400',
    likes: 245000,
    comments: 3420,
    timestamp: '2h ago',
    sentiment: 'positive',
    url: 'https://www.instagram.com/p/tagged1/',
  },
  {
    id: 2,
    platform: 'X',
    author: '@BCCI',
    handle: 'BCCI',
    verified: true,
    text: 'What a knock by @imVkohli! 💯 Another masterclass in chasing. #INDvAUS #TeamIndia',
    image: null,
    likes: 89000,
    comments: 5600,
    retweets: 12400,
    timestamp: '4h ago',
    sentiment: 'positive',
    url: 'https://x.com/BCCI/status/tagged1',
  },
  {
    id: 3,
    platform: 'Instagram',
    author: '@audiin',
    handle: 'Audi India',
    verified: true,
    text: 'Driven by excellence. @virat.kohli takes the new Audi Q8 for a spin. #AudiIndia #ProgressYouCanFeel',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
    likes: 156000,
    comments: 2100,
    timestamp: '1d ago',
    sentiment: 'positive',
    url: 'https://www.instagram.com/p/tagged2/',
  },
  {
    id: 4,
    platform: 'X',
    author: '@ESPNcricinfo',
    handle: 'ESPNcricinfo',
    verified: true,
    text: 'Stats thread: @imVkohli now has the most centuries in successful run chases in ODI history 🏏📊',
    image: null,
    likes: 45000,
    comments: 2300,
    retweets: 8900,
    timestamp: '6h ago',
    sentiment: 'positive',
    url: 'https://x.com/ESPNcricinfo/status/tagged2',
  },
  {
    id: 5,
    platform: 'Instagram',
    author: '@maborwrongn',
    handle: 'WROGN',
    verified: true,
    text: 'Style that speaks volumes. @virat.kohli rocking the new WROGN summer collection. #StayWROGN',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400',
    likes: 98000,
    comments: 1540,
    timestamp: '2d ago',
    sentiment: 'positive',
    url: 'https://www.instagram.com/p/tagged3/',
  },
  {
    id: 6,
    platform: 'X',
    author: '@cricaboruzz',
    handle: 'Cricbuzz',
    verified: true,
    text: 'Controversial take: Is @imVkohli being too aggressive with the umpires? The debate continues... #Cricket',
    image: null,
    likes: 12000,
    comments: 4500,
    retweets: 3200,
    timestamp: '8h ago',
    sentiment: 'negative',
    url: 'https://x.com/cricbuzz/status/tagged3',
  },
  {
    id: 7,
    platform: 'Instagram',
    author: '@anaborshkasharma',
    handle: 'Anushka Sharma',
    verified: true,
    text: 'My forever cheerleader 💕 @virat.kohli #Family #Love',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400',
    likes: 2450000,
    comments: 34200,
    timestamp: '3d ago',
    sentiment: 'positive',
    url: 'https://www.instagram.com/p/tagged4/',
  },
  {
    id: 8,
    platform: 'X',
    author: '@iaborSunilGavaskar',
    handle: 'Sunil Gavaskar',
    verified: true,
    text: 'Watching @imVkohli bat is poetry in motion. The dedication, the focus, the hunger - simply unmatched. #Legend',
    image: null,
    likes: 67000,
    comments: 1890,
    retweets: 9800,
    timestamp: '12h ago',
    sentiment: 'positive',
    url: 'https://x.com/SunilGavaskar/status/tagged4',
  },
];

const trendingHashtagsToday = ['#KingKohli', '#INDvAUS', '#RunMachine', '#ViratKohli'];
const trendingTopicsThisWeek = [
  'Form & fitness',
  'Captaincy decisions',
  'Brand collaborations',
  'Strike-rate debate',
];

const timesOfIndiaCritical = {
  title:
    "The problem with Virat Kohli: ex-India cricketer exposes star batter's struggles",
  url:
    'https://timesofindia.indiatimes.com/sports/cricket/news/the-problem-with-virat-kohli-ex-india-cricketer-exposes-star-batters-struggles/articleshow/123353246.cms',
};

const viratBrandCategories = [
  {
    label: 'Key brand endorsements & ventures',
    items: [
      'Puma, Audi India, Manyavar (key endorsements)',
      'One8 (lifestyle brand)',
      'Blue Tribe (plant-based meat)',
      'Hyperice (wellness technology)',
    ],
  },
  {
    label: 'Apparel & accessories',
    items: [
      'Puma',
      'Wrogn',
      'Manyavar',
      'American Tourister',
      'Myntra',
      'Noise',
      'Tissot',
      'Luxor',
    ],
  },
  {
    label: 'Automotive',
    items: ['Audi India', 'Hero MotoCorp', 'MRF Tyres'],
  },
  {
    label: 'Food & beverage',
    items: ['Blue Tribe', 'Too Yumm', 'Rage Coffee', 'Boost'],
  },
  {
    label: 'Sports & fitness',
    items: [
      'Chisel Fitness',
      'Volini',
      'Mobile Premier League (MPL)',
      'Herbalife',
      'Hyperice',
      'Batwrap',
    ],
  },
  {
    label: 'Technology & electronics',
    items: ['Vivo', 'Philips', 'Blue Star', 'Noise'],
  },
  {
    label: 'Health & wellness',
    items: ['Volini', 'Wellman', 'Himalaya'],
  },
  {
    label: 'Financial services',
    items: ['HSBC', 'Digit Insurance'],
  },
  {
    label: 'Other sectors',
    items: [
      'Toothsi (personal care)',
      'Duroflex (mattress)',
      'Great Learning (education)',
      'Essilor (eyewear)',
      'Asian Paints (home decor)',
    ],
  },
];

function CelebrityCard({ celeb, onOpenDashboard, disabled }) {
  const canOpen = !disabled;
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        cursor: canOpen ? 'pointer' : 'default',
        opacity: canOpen ? 1 : 0.7,
      }}
      onClick={() => {
        if (canOpen) onOpenDashboard(celeb);
      }}
    >
      <img
        src={celeb.image}
        alt={celeb.name}
        style={{ width: '100%', height: 220, objectFit: 'cover' }}
      />
      <div style={{ padding: 16 }}>
        <h2
          style={{
            margin: 0,
            marginBottom: 4,
            fontSize: '1.05rem',
            fontWeight: 600,
            color: '#111827',
          }}
        >
          {celeb.name}
        </h2>
        <p
          style={{
            margin: 0,
            marginBottom: 12,
            fontSize: 13,
            color: '#6b7280',
          }}
        >
          {celeb.handle}
        </p>
        <a
          href={celeb.instagram}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            fontSize: 12,
            color: '#ea580c',
            textDecoration: 'none',
            marginBottom: 8,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          View Instagram ↗
        </a>
        <button
          type="button"
          style={{
            width: '100%',
            marginTop: 8,
            padding: '8px 10px',
            borderRadius: 9999,
            border: 'none',
            background: canOpen
              ? 'linear-gradient(to right, #f97316, #ea580c)'
              : '#e5e7eb',
            color: canOpen ? '#ffffff' : '#9ca3af',
            fontSize: 13,
            fontWeight: 600,
            cursor: canOpen ? 'pointer' : 'not-allowed',
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (canOpen) onOpenDashboard(celeb);
          }}
        >
          {canOpen ? 'Open Dashboard' : 'Dashboard disabled in demo'}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = React.useState('portfolio'); // 'portfolio' | 'dashboard' | 'compare'
  const [selectedCelebrity, setSelectedCelebrity] = React.useState(null);
  const [sentimentFilter, setSentimentFilter] = React.useState('all');
  const [sourceFilter, setSourceFilter] = React.useState('all');
  const [visibleMentions, setVisibleMentions] = React.useState(4);
  const [showBrands, setShowBrands] = React.useState(false);

  const openDashboard = (celeb) => {
    setSelectedCelebrity(celeb);
    setView('dashboard');
    setVisibleMentions(4);
    setSentimentFilter('all');
    setSourceFilter('all');
    setShowBrands(false);
  };

  const goBackToPortfolio = () => {
    setView('portfolio');
  };

  const goToComparison = () => {
    setView('compare');
  };

  const handleDownloadReport = () => {
    const text = `Weekly Reputation Report\n\nCelebrity: ${
      selectedCelebrity ? selectedCelebrity.name : 'Virat Kohli'
    }\nTotal Mentions: ${sampleMentions.length}\nPositive: ${
      sampleMentions.filter((m) => m.sentiment === 'positive').length
    }\nNeutral: ${
      sampleMentions.filter((m) => m.sentiment === 'neutral').length
    }\nNegative: ${
      sampleMentions.filter((m) => m.sentiment === 'negative').length
    }`;

    if (typeof window !== 'undefined') {
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'weekly-report.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  // Derived data for dashboard
  const filteredMentions = sampleMentions.filter((m) => {
    const sentimentOk =
      sentimentFilter === 'all' ? true : m.sentiment === sentimentFilter;
    const sourceOk = sourceFilter === 'all' ? true : m.source === sourceFilter;
    return sentimentOk && sourceOk;
  });

  const visibleMentionsList = filteredMentions.slice(0, visibleMentions);

  const totalMentions = sampleMentions.length;
  const negativeCount = sampleMentions.filter(
    (m) => m.sentiment === 'negative'
  ).length;
  const negativeRatio = totalMentions
    ? Math.round((negativeCount / totalMentions) * 100)
    : 0;
  const negativeSpike = negativeRatio >= 30; // simple rule

  const sentimentOptions = ['all', 'positive', 'neutral', 'negative'];
  const sourceOptions = ['all', ...Array.from(new Set(sampleMentions.map((m) => m.source)))];

  // DASHBOARD VIEW
  if (view === 'dashboard' && selectedCelebrity) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#f3f4f6',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top bar */}
        <header
          style={{
            background: 'linear-gradient(to right, #f97316, #ea580c)',
            color: '#ffffff',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={goBackToPortfolio}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            ← Back
          </button>
          <h1 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
            {selectedCelebrity.name} — Dashboard
          </h1>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              onClick={handleDownloadReport}
              style={{
                padding: '6px 10px',
                borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.7)',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 11,
                cursor: 'pointer',
              }}
            >
              Download Weekly Report
            </button>
          </div>
        </header>

        <main
          style={{
            flex: 1,
            padding: 24,
            maxWidth: 1120,
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* Critical message about TOI article */}
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#991b1b',
              fontSize: 13,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 12,
            }}
          >
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>
                Reputation risk: critical coverage on Times of India
              </div>
              <div style={{ marginBottom: 4 }}>
                A recent article on Times of India titled "{timesOfIndiaCritical.title}" highlights
                Virat's on-field struggles and can negatively impact brand perception.
              </div>
              <a
                href={timesOfIndiaCritical.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 12,
                  color: '#b91c1c',
                  textDecoration: 'underline',
                  fontWeight: 500,
                }}
              >
                View article →
              </a>
            </div>
            <span style={{ fontSize: 18 }}>⚠</span>
          </div>

          {/* Compact hero row with small icon instead of big banner */}
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img
                src={selectedCelebrity.image}
                alt={selectedCelebrity.name}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '9999px',
                  objectFit: 'cover',
                  border: '2px solid #e5e7eb',
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#111827',
                  }}
                >
                  {selectedCelebrity.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: '#6b7280',
                  }}
                >
                  {selectedCelebrity.handle}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontSize: 11,
                  color: '#6b7280',
                  marginBottom: 4,
                }}
              >
                Full analytics: sentiment, trends, mentions, videos.
              </div>
              <button
                type="button"
                onClick={() => setShowBrands((v) => !v)}
                style={{
                  padding: '6px 10px',
                  borderRadius: 9999,
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff',
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                {showBrands ? 'Hide brands & ventures' : 'Show brands & ventures'}
              </button>
            </div>
          </div>

          {/* Trending hashtags & topics */}
          <div
            style={{
              marginTop: 16,
              padding: 14,
              borderRadius: 12,
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#1d4ed8',
                }}
              >
                Hashtags & topics trending around {selectedCelebrity.name}
              </div>
              <div style={{ fontSize: 11, color: '#4b5563' }}>
                Today · This week
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {trendingHashtagsToday.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 9999,
                    backgroundColor: '#ffffff',
                    border: '1px solid #dbeafe',
                    fontSize: 11,
                    color: '#1d4ed8',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginTop: 10,
              }}
            >
              {trendingTopicsThisWeek.map((topic) => (
                <span
                  key={topic}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 9999,
                    backgroundColor: '#e0f2fe',
                    fontSize: 11,
                    color: '#0f172a',
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Collapsible brands & companies tab */}
          <div style={{ marginTop: 16 }}>
            <div
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                fontSize: 13,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onClick={() => setShowBrands((v) => !v)}
            >
              <span style={{ fontWeight: 600 }}>
                Companies, brands & business ventures associated with {selectedCelebrity.name}
              </span>
              <span style={{ fontSize: 16 }}>{showBrands ? '▴' : '▾'}</span>
            </div>
            {showBrands && (
              <div
                style={{
                  marginTop: 8,
                  padding: 14,
                  borderRadius: 10,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  fontSize: 12,
                  color: '#374151',
                }}
              >
                {viratBrandCategories.map((cat) => (
                  <div key={cat.label} style={{ marginBottom: 10 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: 4,
                        color: '#111827',
                      }}
                    >
                      {cat.label}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 6,
                      }}
                    >
                      {cat.items.map((b) => (
                        <span
                          key={b}
                          style={{
                            padding: '3px 8px',
                            borderRadius: 9999,
                            backgroundColor: '#f3f4f6',
                            border: '1px solid #e5e7eb',
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Alert for negative spike */}
          {negativeSpike && (
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 12,
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#b91c1c',
                fontSize: 13,
              }}
            >
              ⚠ Negative sentiment is at {negativeRatio}% of tracked mentions. Consider
              reviewing top negative threads.
            </div>
          )}

          {/* Sentiment widgets */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 24,
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'Positive', value: 68, color: '#16a34a', bg: '#dcfce7' },
              { label: 'Neutral', value: 22, color: '#ca8a04', bg: '#fef9c3' },
              { label: 'Negative', value: 10, color: '#dc2626', bg: '#fee2e2' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  flex: '1 1 200px',
                  backgroundColor: item.bg,
                  borderRadius: 12,
                  padding: 16,
                  border: `1px solid ${item.color}55`,
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: item.color,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: item.color,
                    marginTop: 4,
                  }}
                >
                  {item.value}%
                </div>
                <div
                  style={{
                    fontSize: 11,
                    marginTop: 6,
                    color: '#374151',
                  }}
                >
                  {(12847 * item.value / 100).toLocaleString()} mentions
                </div>
              </div>
            ))}
          </div>

          {/* 7‑Day Trend Chart (enhanced multi-line chart) */}
          <div style={{ marginTop: 40 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Sentiment Trend — Last 7 Days
              </h3>
              <div style={{ display: 'flex', gap: 16, fontSize: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#16a34a' }} />
                  <span style={{ color: '#374151' }}>Positive</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ca8a04' }} />
                  <span style={{ color: '#374151' }}>Neutral</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#dc2626' }} />
                  <span style={{ color: '#374151' }}>Negative</span>
                </div>
              </div>
            </div>
            <div
              style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
                borderRadius: 16,
                padding: 24,
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              }}
            >
              {(() => {
                const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const positiveData = [68, 72, 75, 71, 78, 74, 72];
                const neutralData = [18, 16, 14, 17, 12, 15, 16];
                const negativeData = [14, 12, 11, 12, 10, 11, 12];
                const chartHeight = 180;
                const chartWidth = 100;
                
                const getY = (value) => chartHeight - (value / 100) * chartHeight;
                
                const createPath = (data) => {
                  return data.map((v, i) => {
                    const x = (i / (data.length - 1)) * chartWidth;
                    const y = getY(v);
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ');
                };
                
                const createAreaPath = (data) => {
                  const linePath = data.map((v, i) => {
                    const x = (i / (data.length - 1)) * chartWidth;
                    const y = getY(v);
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ');
                  return `${linePath} L 100 ${chartHeight} L 0 ${chartHeight} Z`;
                };

                return (
                  <div style={{ position: 'relative' }}>
                    {/* Y-axis labels */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 30,
                        width: 35,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        fontSize: 10,
                        color: '#9ca3af',
                      }}
                    >
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>
                    
                    {/* Chart area */}
                    <div style={{ marginLeft: 40 }}>
                      {/* Grid lines */}
                      <div style={{ position: 'relative', height: chartHeight }}>
                        {[0, 25, 50, 75, 100].map((line) => (
                          <div
                            key={line}
                            style={{
                              position: 'absolute',
                              left: 0,
                              right: 0,
                              top: `${100 - line}%`,
                              borderBottom: line === 0 ? '1px solid #d1d5db' : '1px dashed #e5e7eb',
                            }}
                          />
                        ))}
                        
                        {/* SVG Chart */}
                        <svg
                          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                          preserveAspectRatio="none"
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                          }}
                        >
                          <defs>
                            <linearGradient id="positiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.02" />
                            </linearGradient>
                            <linearGradient id="neutralGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.02" />
                            </linearGradient>
                            <linearGradient id="negativeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#dc2626" stopOpacity="0.02" />
                            </linearGradient>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          
                          {/* Area fills */}
                          <path d={createAreaPath(positiveData)} fill="url(#positiveGradient)" />
                          <path d={createAreaPath(neutralData)} fill="url(#neutralGradient)" />
                          <path d={createAreaPath(negativeData)} fill="url(#negativeGradient)" />
                          
                          {/* Lines */}
                          <path
                            d={createPath(positiveData)}
                            fill="none"
                            stroke="#16a34a"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#glow)"
                          />
                          <path
                            d={createPath(neutralData)}
                            fill="none"
                            stroke="#ca8a04"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d={createPath(negativeData)}
                            fill="none"
                            stroke="#dc2626"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Data points for positive line */}
                          {positiveData.map((v, i) => (
                            <circle
                              key={`pos-${i}`}
                              cx={(i / (positiveData.length - 1)) * chartWidth}
                              cy={getY(v)}
                              r="1.5"
                              fill="#16a34a"
                            />
                          ))}
                          
                          {/* Data points for neutral line */}
                          {neutralData.map((v, i) => (
                            <circle
                              key={`neu-${i}`}
                              cx={(i / (neutralData.length - 1)) * chartWidth}
                              cy={getY(v)}
                              r="1.5"
                              fill="#ca8a04"
                            />
                          ))}
                          
                          {/* Data points for negative line */}
                          {negativeData.map((v, i) => (
                            <circle
                              key={`neg-${i}`}
                              cx={(i / (negativeData.length - 1)) * chartWidth}
                              cy={getY(v)}
                              r="1.5"
                              fill="#dc2626"
                            />
                          ))}
                        </svg>
                      </div>
                      
                      {/* X-axis labels */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: 12,
                          fontSize: 11,
                          color: '#6b7280',
                          fontWeight: 500,
                        }}
                      >
                        {days.map((day, i) => (
                          <div key={day} style={{ textAlign: 'center', flex: 1 }}>
                            <div>{day}</div>
                            <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>
                              {positiveData[i]}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Summary stats */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: 20,
                        paddingTop: 16,
                        borderTop: '1px solid #e5e7eb',
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>Weekly Avg</div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#16a34a' }}>
                          {Math.round(positiveData.reduce((a, b) => a + b, 0) / positiveData.length)}%
                        </div>
                        <div style={{ fontSize: 10, color: '#16a34a' }}>Positive</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>Peak Day</div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#3b82f6' }}>Friday</div>
                        <div style={{ fontSize: 10, color: '#3b82f6' }}>78% positive</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>Trend</div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                          <span>↑</span> +4%
                        </div>
                        <div style={{ fontSize: 10, color: '#16a34a' }}>vs last week</div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Recent Mentions – Filters */}
          <section style={{ marginTop: 40 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                }}
              >
                Recent Mentions
              </h3>
              <span style={{ fontSize: 12, color: '#6b7280' }}>
                Showing {visibleMentionsList.length} of {filteredMentions.length}{' '}
                filtered mentions
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 12,
                marginBottom: 16,
                fontSize: 12,
                color: '#4b5563',
                flexWrap: 'wrap',
              }}
            >
              <div>Filters:</div>
              <select
                value={sentimentFilter}
                onChange={(e) => {
                  setSentimentFilter(e.target.value);
                  setVisibleMentions(4);
                }}
                style={{
                  padding: '4px 8px',
                  borderRadius: 9999,
                  border: '1px solid #e5e7eb',
                  background: '#fff',
                }}
              >
                {sentimentOptions.map((s) => (
                  <option key={s} value={s}>
                    {s === 'all'
                      ? 'All Sentiment'
                      : s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={sourceFilter}
                onChange={(e) => {
                  setSourceFilter(e.target.value);
                  setVisibleMentions(4);
                }}
                style={{
                  padding: '4px 8px',
                  borderRadius: 9999,
                  border: '1px solid #e5e7eb',
                  background: '#fff',
                }}
              >
                {sourceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s === 'all' ? 'All Sources' : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Masonry grid for mentions */}
            <div
              style={{
                columnCount: 2,
                columnGap: 16,
              }}
            >
              {visibleMentionsList.map((m) => {
                const sentimentColor =
                  m.sentiment === 'positive'
                    ? '#16a34a'
                    : m.sentiment === 'negative'
                    ? '#dc2626'
                    : '#ca8a04';
                const sentimentBg =
                  m.sentiment === 'positive'
                    ? '#dcfce7'
                    : m.sentiment === 'negative'
                    ? '#fee2e2'
                    : '#fef9c3';

                return (
                  <div
                    key={m.id}
                    style={{
                      breakInside: 'avoid',
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        background: '#ffffff',
                        borderRadius: 12,
                        border: '1px solid #e5e7eb',
                        padding: 14,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: 6,
                          fontSize: 12,
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            color: '#111827',
                          }}
                        >
                          <span style={{ fontSize: 12 }}>💬</span>
                          <span style={{ fontWeight: 600 }}>{m.author}</span>
                          <span style={{ color: '#9ca3af' }}>· {m.timestamp}</span>
                        </div>
                        <span
                          style={{
                            padding: '2px 8px',
                            borderRadius: 9999,
                            background: sentimentBg,
                            color: sentimentColor,
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          {m.sentiment.charAt(0).toUpperCase() + m.sentiment.slice(1)}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          color: '#4b5563',
                          marginTop: 4,
                          marginBottom: 8,
                        }}
                      >
                        {m.text}
                      </p>
                      {(m.likes || m.retweets || m.replies) && (
                        <div
                          style={{
                            display: 'flex',
                            gap: 12,
                            fontSize: 11,
                            color: '#6b7280',
                            marginBottom: 6,
                          }}
                        >
                          {m.likes ? <span>❤️ {m.likes.toLocaleString()}</span> : null}
                          {m.retweets ? (
                            <span>🔁 {m.retweets.toLocaleString()}</span>
                          ) : null}
                          {m.replies ? (
                            <span>💬 {m.replies.toLocaleString()}</span>
                          ) : null}
                        </div>
                      )}
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: 12,
                          color: '#2563eb',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        Open Source →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {visibleMentions < filteredMentions.length && (
              <div
                style={{
                  marginTop: 16,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <button
                  type="button"
                  onClick={() => setVisibleMentions((n) => n + 4)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 9999,
                    border: '1px solid #d1d5db',
                    background: '#ffffff',
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  Load more mentions
                </button>
              </div>
            )}
          </section>

          {/* Video Feed – Pinterest-style grid */}
          <section style={{ marginTop: 40, marginBottom: 40 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                }}
              >
                Videos mentioning {selectedCelebrity.name}
              </h3>
              <div style={{ fontSize: 12, color: '#6b7280' }}>
                {sampleVideos.length} curated clips
              </div>
            </div>

            <div
              style={{
                columnCount: 2,
                columnGap: 16,
              }}
            >
              {sampleVideos.map((v) => {
                const isMp4 = v.url.includes('.mp4');
                const sentimentColor =
                  v.sentiment === 'positive'
                    ? '#16a34a'
                    : v.sentiment === 'negative'
                    ? '#dc2626'
                    : '#ca8a04';
                const sentimentBg =
                  v.sentiment === 'positive'
                    ? '#dcfce7'
                    : v.sentiment === 'negative'
                    ? '#fee2e2'
                    : '#fef9c3';

                return (
                  <div
                    key={v.id}
                    style={{
                      breakInside: 'avoid',
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        background: '#ffffff',
                        borderRadius: 12,
                        border: '1px solid #e5e7eb',
                        padding: 12,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                      }}
                    >
                      <div style={{ marginBottom: 8 }}>
                        {isMp4 ? (
                          <video
                            controls
                            style={{
                              width: '100%',
                              borderRadius: 10,
                              display: 'block',
                            }}
                          >
                            <source src={v.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <a
                            href={v.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'none' }}
                          >
                            <div
                              style={{
                                borderRadius: 10,
                                height: 160,
                                background:
                                  v.source === 'Instagram'
                                    ? 'linear-gradient(135deg, #fb7185, #ec4899, #8b5cf6)'
                                    : 'linear-gradient(135deg, #0ea5e9, #6366f1, #f97316)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#f9fafb',
                              }}
                            >
                              <div
                                style={{
                                  position: 'absolute',
                                  top: 10,
                                  left: 10,
                                  fontSize: 11,
                                  padding: '3px 8px',
                                  borderRadius: 9999,
                                  backgroundColor: 'rgba(15,23,42,0.65)',
                                }}
                              >
                                {v.source}
                              </div>
                              <div
                                style={{
                                  width: 44,
                                  height: 44,
                                  borderRadius: '9999px',
                                  background: 'rgba(15,23,42,0.85)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: 20,
                                }}
                              >
                                ▶
                              </div>
                            </div>
                          </a>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: '#111827',
                          marginBottom: 4,
                        }}
                      >
                        {v.title}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: 6,
                          fontSize: 11,
                          color: '#6b7280',
                        }}
                      >
                        <span>{v.source}</span>
                        <span
                          style={{
                            padding: '2px 8px',
                            borderRadius: 9999,
                            background: sentimentBg,
                            color: sentimentColor,
                            fontWeight: 600,
                          }}
                        >
                          {v.sentiment.charAt(0).toUpperCase() + v.sentiment.slice(1)}
                        </span>
                      </div>
                      {!isMp4 && (
                        <a
                          href={v.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: 12,
                            color: '#2563eb',
                            textDecoration: 'none',
                            fontWeight: 500,
                          }}
                        >
                          Open on {v.source} →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tagged Posts Section */}
          <section style={{ marginTop: 40, marginBottom: 40 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Tagged Posts on Instagram & X
              </h3>
              <div style={{ display: 'flex', gap: 8 }}>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: 9999,
                    backgroundColor: '#E1306C',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  Instagram
                </span>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: 9999,
                    backgroundColor: '#000',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  X
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 16,
              }}
            >
              {taggedPosts.map((post) => {
                const isInstagram = post.platform === 'Instagram';
                const platformColor = isInstagram ? '#E1306C' : '#000';
                const platformBg = isInstagram ? '#fce7f3' : '#f3f4f6';
                const sentimentColor =
                  post.sentiment === 'positive'
                    ? '#16a34a'
                    : post.sentiment === 'negative'
                    ? '#dc2626'
                    : '#ca8a04';
                const sentimentBg =
                  post.sentiment === 'positive'
                    ? '#dcfce7'
                    : post.sentiment === 'negative'
                    ? '#fee2e2'
                    : '#fef9c3';

                return (
                  <div
                    key={post.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: 12,
                      border: '1px solid #e5e7eb',
                      overflow: 'hidden',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                    }}
                  >
                    {post.image && (
                      <div
                        style={{
                          height: 160,
                          background: `url(${post.image}) center/cover`,
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            padding: '4px 10px',
                            borderRadius: 9999,
                            backgroundColor: platformColor,
                            color: '#fff',
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          {post.platform}
                        </span>
                      </div>
                    )}
                    <div style={{ padding: 14 }}>
                      {!post.image && (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 8,
                          }}
                        >
                          <span
                            style={{
                              padding: '4px 10px',
                              borderRadius: 9999,
                              backgroundColor: platformBg,
                              color: platformColor,
                              fontSize: 11,
                              fontWeight: 600,
                            }}
                          >
                            {post.platform}
                          </span>
                          <span
                            style={{
                              padding: '2px 8px',
                              borderRadius: 9999,
                              background: sentimentBg,
                              color: sentimentColor,
                              fontSize: 11,
                              fontWeight: 600,
                            }}
                          >
                            {post.sentiment.charAt(0).toUpperCase() + post.sentiment.slice(1)}
                          </span>
                        </div>
                      )}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          marginBottom: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: isInstagram
                              ? 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
                              : '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: 700,
                          }}
                        >
                          {post.handle.charAt(0)}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: '#111827',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4,
                            }}
                          >
                            {post.handle}
                            {post.verified && (
                              <span
                                style={{
                                  color: '#3b82f6',
                                  fontSize: 12,
                                }}
                              >
                                ✓
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: 11, color: '#6b7280' }}>
                            {post.author} · {post.timestamp}
                          </div>
                        </div>
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          color: '#374151',
                          marginBottom: 12,
                          lineHeight: 1.5,
                        }}
                      >
                        {post.text}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          gap: 16,
                          fontSize: 12,
                          color: '#6b7280',
                          marginBottom: 10,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span>❤️ {post.likes.toLocaleString()}</span>
                        <span>💬 {post.comments.toLocaleString()}</span>
                        {post.retweets && <span>🔁 {post.retweets.toLocaleString()}</span>}
                      </div>
                      {post.image && (
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '2px 8px',
                            borderRadius: 9999,
                            background: sentimentBg,
                            color: sentimentColor,
                            fontSize: 11,
                            fontWeight: 600,
                            marginBottom: 10,
                          }}
                        >
                          {post.sentiment.charAt(0).toUpperCase() + post.sentiment.slice(1)}
                        </span>
                      )}
                      <div>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: 12,
                            color: platformColor,
                            textDecoration: 'none',
                            fontWeight: 500,
                          }}
                        >
                          View on {post.platform} →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  }

  // COMPARISON VIEW
  if (view === 'compare') {
    const metrics = celebrities.map((c, index) => {
      // Mock values just for demo
      const base = 60 + index * 4;
      const positive = Math.min(90, base);
      const negative = 100 - positive - 10;
      const neutral = 10;
      return { name: c.name, positive, neutral, negative };
    });

    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#f3f4f6',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header
          style={{
            background: 'linear-gradient(to right, #f97316, #ea580c)',
            color: '#ffffff',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={goBackToPortfolio}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            ← Back
          </button>
          <h1 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
            Celebrity Comparison
          </h1>
          <div />
        </header>

        <main
          style={{
            flex: 1,
            padding: 24,
            maxWidth: 1120,
            width: '100%',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: '#4b5563',
              marginBottom: 16,
            }}
          >
            High‑level comparison of sentiment split across all tracked celebrities.
          </p>

          <div
            style={{
              overflowX: 'auto',
              borderRadius: 12,
              border: '1px solid #e5e7eb',
              background: '#ffffff',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  <th style={{ textAlign: 'left', padding: 10 }}>Celebrity</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Positive %</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Neutral %</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Negative %</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((m) => (
                  <tr key={m.name}>
                    <td style={{ padding: 10, borderTop: '1px solid #e5e7eb' }}>{m.name}</td>
                    <td
                      style={{
                        padding: 10,
                        borderTop: '1px solid #e5e7eb',
                        color: '#16a34a',
                      }}
                    >
                      {m.positive}%
                    </td>
                    <td
                      style={{
                        padding: 10,
                        borderTop: '1px solid #e5e7eb',
                        color: '#ca8a04',
                      }}
                    >
                      {m.neutral}%
                    </td>
                    <td
                      style={{
                        padding: 10,
                        borderTop: '1px solid #e5e7eb',
                        color: '#dc2626',
                      }}
                    >
                      {m.negative}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }

  // PORTFOLIO VIEW
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          background: 'linear-gradient(to right, #f97316, #ea580c)',
          color: '#ffffff',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
            GRIP — Global Reputation Information Platform
          </h1>
          <p
            style={{
              margin: 0,
              marginTop: 4,
              fontSize: 12,
              opacity: 0.9,
            }}
          >
            Celebrity Reputation Command Center
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            onClick={goToComparison}
            style={{
              padding: '6px 12px',
              borderRadius: 9999,
              border: '1px solid rgba(255,255,255,0.7)',
              backgroundColor: 'transparent',
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Compare Celebrities
          </button>
          <button
            type="button"
            style={{
              padding: '6px 12px',
              borderRadius: 9999,
              border: '1px solid rgba(255,255,255,0.7)',
              backgroundColor: 'transparent',
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            My Account
          </button>
        </div>
      </header>

      <main
        style={{
          flex: 1,
          padding: '24px 24px 32px',
          maxWidth: 1120,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#111827',
          }}
        >
          Celebrity Portfolio
        </h2>
        <p
          style={{
            margin: 0,
            marginBottom: 24,
            fontSize: 13,
            color: '#4b5563',
          }}
        >
          As a brand manager you can monitor multiple celebrities from a single workspace.
          Click a card to open their reputation dashboard.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {celebrities.map((celeb) => (
            <CelebrityCard
              key={celeb.name}
              celeb={celeb}
              onOpenDashboard={openDashboard}
              disabled={celeb.name !== 'Virat Kohli'}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
