import { useState } from "react";

const mockCartItems = [
  { id: 1, title: "클린 코드", author: "로버트 C. 마틴", publisher: "인사이트", price: 33000, emoji: "📚" },
  { id: 2, title: "리팩터링 2판", author: "마틴 파울러", publisher: "한빛미디어", price: 36000, emoji: "📖" },
  { id: 3, title: "자바스크립트 딥다이브", author: "이웅모", publisher: "위키북스", price: 45000, emoji: "📕" },
];

const mockOrders = [
  { id: 101, title: "HTTP 완벽 가이드", date: "2025-01-15", price: 52000, status: "배송완료" },
  { id: 102, title: "운영체제", date: "2025-02-03", price: 28000, status: "배송완료" },
];

const NAV_ITEMS = [
  { key: "cart", label: "장바구니", icon: "🛒" },
  { key: "orders", label: "구매내역", icon: "📦" },
  { key: "profile", label: "내정보수정", icon: "👤" },
];

/* ─── Sidebar ─── */
function Sidebar({ active, onChange }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarAccent} />
      <div style={{ padding: "0 20px" }}>
        <p style={styles.sidebarLabel}>MY PAGE</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {NAV_ITEMS.map((item) => (
            <SidebarItem
              key={item.key}
              item={item}
              isActive={active === item.key}
              onClick={() => onChange(item.key)}
            />
          ))}
        </ul>
      </div>
      <div style={styles.sidebarFooterText}>BOOKSTORE</div>
    </aside>
  );
}

function SidebarItem({ item, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  const highlighted = isActive || hovered;

  return (
    <li
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.sidebarItem,
        background: highlighted ? "rgba(201,169,110,0.1)" : "transparent",
        color: highlighted ? "#e8c98a" : "rgba(255,255,255,0.5)",
        paddingLeft: highlighted ? 20 : 14,
        transition: "all 0.22s ease",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          ...styles.sidebarDot,
          background: highlighted ? "#c9a96e" : "rgba(255,255,255,0.2)",
          boxShadow: highlighted ? "0 0 6px rgba(201,169,110,0.6)" : "none",
        }}
      />
      <span style={{ fontSize: "0.875rem", letterSpacing: "0.02em" }}>
        {item.label}
      </span>
    </li>
  );
}

/* ─── Cart ─── */
function CartView() {
  const [items, setItems] = useState(mockCartItems);
  const total = items.reduce((s, i) => s + i.price, 0);

  return (
    <div>
      <h2 style={styles.pageTitle}>장바구니</h2>
      <p style={styles.pageSubtitle}>{items.length}개의 상품이 담겨 있습니다</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.length === 0 ? (
          <div style={styles.emptyBox}>장바구니가 비어있습니다 🛒</div>
        ) : (
          items.map((item, i) => (
            <CartItem
              key={item.id}
              item={item}
              delay={i * 0.07}
              onRemove={() => setItems((prev) => prev.filter((p) => p.id !== item.id))}
            />
          ))
        )}
      </div>

      {items.length > 0 && (
        <div style={styles.summaryBox}>
          <div>
            <div style={styles.summaryLabel}>총 결제금액</div>
            <div style={styles.summaryAmount}>{total.toLocaleString()}원</div>
          </div>
          <button
            style={styles.buyBtn}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            구매하기 →
          </button>
        </div>
      )}
    </div>
  );
}

function CartItem({ item, delay, onRemove }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.cartItem,
        boxShadow: hovered ? "0 8px 28px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.03)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        animation: `fadeUp 0.4s ease ${delay}s both`,
        transition: "box-shadow 0.22s ease, transform 0.22s ease",
      }}
    >
      <div style={styles.cartThumb}>{item.emoji}</div>
      <div style={{ flex: 1 }}>
        <div style={styles.cartTitle}>{item.title}</div>
        <div style={styles.cartMeta}>{item.author} · {item.publisher}</div>
      </div>
      <div style={styles.cartPrice}>{item.price.toLocaleString()}원</div>
      <button
        onClick={onRemove}
        style={styles.removeBtn}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#e00550";
          e.currentTarget.style.color = "#e00550";
          e.currentTarget.style.background = "#fff0f4";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
          e.currentTarget.style.color = "#bbb";
          e.currentTarget.style.background = "transparent";
        }}
      >
        ✕
      </button>
    </div>
  );
}

/* ─── Orders ─── */
function OrdersView() {
  return (
    <div>
      <h2 style={styles.pageTitle}>구매내역</h2>
      <p style={styles.pageSubtitle}>최근 주문 내역을 확인하세요</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {mockOrders.map((order, i) => (
          <div
            key={order.id}
            style={{
              ...styles.cartItem,
              animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
            }}
          >
            <div style={styles.cartThumb}>📦</div>
            <div style={{ flex: 1 }}>
              <div style={styles.cartTitle}>{order.title}</div>
              <div style={styles.cartMeta}>주문일: {order.date}</div>
            </div>
            <div style={styles.cartPrice}>{order.price.toLocaleString()}원</div>
            <span
              style={{
                fontSize: "0.72rem",
                padding: "4px 10px",
                borderRadius: 20,
                background: "rgba(26,185,110,0.1)",
                color: "#1ab96e",
                fontWeight: 500,
                letterSpacing: "0.03em",
              }}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Profile ─── */
function ProfileView() {
  const [form, setForm] = useState({ name: "홍길동", email: "hong@example.com", phone: "010-1234-5678" });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h2 style={styles.pageTitle}>내정보수정</h2>
      <p style={styles.pageSubtitle}>회원 정보를 수정할 수 있습니다</p>
      <div style={{ ...styles.cartItem, flexDirection: "column", gap: 20, animation: "fadeUp 0.4s ease both" }}>
        {[
          { label: "이름", key: "name", type: "text" },
          { label: "이메일", key: "email", type: "email" },
          { label: "전화번호", key: "phone", type: "tel" },
        ].map(({ label, key, type }) => (
          <div key={key} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.75rem", color: "#999", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {label}
            </label>
            <input
              type={type}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = "#c9a96e";
                e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(0,0,0,0.1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        ))}
        <button
          onClick={handleSave}
          style={{
            ...styles.buyBtn,
            alignSelf: "flex-end",
            background: saved ? "linear-gradient(135deg,#1ab96e,#2dd48a)" : "linear-gradient(135deg,#c9a96e,#e8c98a)",
          }}
        >
          {saved ? "저장됨 ✓" : "저장하기"}
        </button>
      </div>
    </div>
  );
}

/* ─── Header ─── */
function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        Book<span style={{ color: "#c9a96e" }}>.</span>store
      </div>
      <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {["홈", "도서목록"].map((t) => (
          <a key={t} href="#" style={styles.navLink}>{t}</a>
        ))}
        <button style={styles.logoutBtn}>로그아웃</button>
      </nav>
    </header>
  );
}

/* ─── Root ─── */
export default function MyPage() {
  const [activeTab, setActiveTab] = useState("cart");

  const renderContent = () => {
    if (activeTab === "cart") return <CartView />;
    if (activeTab === "orders") return <OrdersView />;
    if (activeTab === "profile") return <ProfileView />;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Noto+Sans+KR:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f0ede8; font-family: 'Noto Sans KR', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={styles.root}>
        <div style={styles.container}>
          <Header />
          <div style={styles.main}>
            <Sidebar active={activeTab} onChange={setActiveTab} />
            <main style={styles.content}>{renderContent()}</main>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Styles ─── */
const styles = {
  root: {
    minHeight: "100vh",
    background: "#f0ede8",
    display: "flex",
    justifyContent: "center",
    paddingBottom: 60,
  },
  container: {
    width: "100%",
    maxWidth: 1200,
    background: "#fff",
    boxShadow: "0 0 80px rgba(0,0,0,0.07)",
    minHeight: "100vh",
  },
  header: {
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    borderBottom: "1px solid rgba(0,0,0,0.07)",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 100,
  },
  logo: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.5rem",
    color: "#1a1a2e",
    letterSpacing: "0.04em",
  },
  navLink: {
    fontSize: "0.83rem",
    color: "#666",
    textDecoration: "none",
    letterSpacing: "0.03em",
    transition: "color 0.2s",
  },
  logoutBtn: {
    background: "#1a1a2e",
    color: "#fff",
    border: "none",
    padding: "8px 20px",
    borderRadius: 7,
    fontSize: "0.8rem",
    cursor: "pointer",
    letterSpacing: "0.04em",
  },
  main: {
    display: "flex",
    minHeight: "calc(100vh - 70px)",
  },
  sidebar: {
    width: 220,
    flexShrink: 0,
    background: "#1a1a2e",
    display: "flex",
    flexDirection: "column",
    padding: "36px 0",
    position: "sticky",
    top: 70,
    height: "calc(100vh - 70px)",
    overflowY: "auto",
  },
  sidebarAccent: {
    width: 40,
    height: 3,
    background: "linear-gradient(90deg,#c9a96e,#e8c98a)",
    borderRadius: 2,
    margin: "0 20px 28px",
  },
  sidebarLabel: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "0.62rem",
    letterSpacing: "0.2em",
    color: "#c9a96e",
    marginBottom: 14,
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 8,
    margin: "2px 0",
    userSelect: "none",
  },
  sidebarDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    flexShrink: 0,
    transition: "all 0.22s ease",
  },
  sidebarFooterText: {
    marginTop: "auto",
    padding: "24px 20px 0",
    fontSize: "0.58rem",
    letterSpacing: "0.26em",
    color: "rgba(255,255,255,0.1)",
    fontFamily: "'DM Serif Display', serif",
  },
  content: {
    flex: 1,
    padding: "44px 52px",
    background: "#f8f7f4",
  },
  pageTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.9rem",
    color: "#1a1a2e",
    marginBottom: 6,
    letterSpacing: "0.01em",
  },
  pageSubtitle: {
    fontSize: "0.82rem",
    color: "#aaa",
    marginBottom: 36,
    letterSpacing: "0.02em",
  },
  cartItem: {
    background: "#fff",
    borderRadius: 14,
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    gap: 20,
    border: "1px solid rgba(0,0,0,0.05)",
  },
  cartThumb: {
    width: 60,
    height: 76,
    background: "linear-gradient(135deg,#e8e0d4,#d5c9bb)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.6rem",
    flexShrink: 0,
  },
  cartTitle: {
    fontSize: "0.95rem",
    color: "#1a1a2e",
    fontWeight: 500,
    marginBottom: 4,
  },
  cartMeta: {
    fontSize: "0.8rem",
    color: "#bbb",
  },
  cartPrice: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.1rem",
    color: "#1a1a2e",
    flexShrink: 0,
  },
  removeBtn: {
    width: 32,
    height: 32,
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "50%",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "0.7rem",
    color: "#bbb",
    flexShrink: 0,
    transition: "all 0.2s",
  },
  summaryBox: {
    background: "#1a1a2e",
    borderRadius: 14,
    padding: "28px 32px",
    marginTop: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryLabel: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  summaryAmount: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.8rem",
    color: "#e8c98a",
  },
  buyBtn: {
    background: "linear-gradient(135deg,#c9a96e,#e8c98a)",
    color: "#1a1a2e",
    border: "none",
    padding: "14px 36px",
    borderRadius: 10,
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.04em",
    transition: "opacity 0.2s",
  },
  emptyBox: {
    textAlign: "center",
    padding: "60px 0",
    color: "#ccc",
    fontSize: "1rem",
    background: "#fff",
    borderRadius: 14,
    border: "1px solid rgba(0,0,0,0.05)",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 8,
    fontSize: "0.9rem",
    color: "#1a1a2e",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
    background: "#fafaf9",
  },
};
