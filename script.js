* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #fde2e4 0%, #fbcfe8 100%) !important;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #4a5568;
    overflow-x: hidden;
}

.card {
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #ffffff;
    width: 100%;
    max-width: 400px;
    padding: 35px 25px;
    border-radius: 28px;
    box-shadow: 0 20px 40px rgba(244, 114, 182, 0.25);
    border: 2px solid #fbcfe8;
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.card.active {
    display: flex !important;
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

h1, h2 {
    color: #db2777;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 12px;
    text-transform: uppercase;
}

.highlight-name {
    color: #be185d;
    font-weight: 700;
}

.subtext {
    color: #718096;
    font-size: 14px;
    margin-bottom: 20px;
}

.btn-primary {
    background: #ec4899;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.35);
    transition: all 0.2s ease;
    margin-top: 10px;
}

.btn-primary:hover {
    background: #db2777;
    transform: translateY(-2px);
}

.btn-secondary {
    background: #fce7f3;
    color: #db2777;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 10px;
}

.btn-group {
    display: flex;
    gap: 12px;
    justify-content: center;
}

.hidden {
    display: none !important;
}

.bears-header {
    font-size: 45px;
    margin-bottom: 15px;
}

.balloon-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 20px 0;
}

.balloon-item {
    cursor: pointer;
    font-size: 60px;
    transition: transform 0.2s;
    user-select: none;
}

.balloon-item:hover {
    transform: scale(1.15);
}

.popped-word {
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    color: #be185d;
    margin-top: 10px;
    min-height: 40px;
}

.cake-wrapper {
    position: relative;
    cursor: pointer;
    margin: 20px 0;
    display: inline-block;
}

.cake-emoji { font-size: 90px; }

.flame-emoji {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    animation: flicker 0.6s infinite alternate;
}

@keyframes flicker {
    0% { transform: translateX(-50%) scale(1); opacity: 1; }
    100% { transform: translateX(-50%) scale(1.2); opacity: 0.8; }
}

.bouquet-img {
    font-size: 100px;
    margin: 15px 0;
}

.polaroid-stack {
    width: 250px;
    margin: 15px auto;
    cursor: pointer;
}

.polaroid-card {
    background: white;
    padding: 12px 12px 18px 12px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.12);
    border: 1px solid #f3f4f6;
}

.polaroid-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
}

.polaroid-caption {
    font-family: 'Dancing Script', cursive;
    font-size: 24px;
    color: #374151;
    margin-top: 8px;
}

.envelope-wrapper {
    font-size: 80px;
    cursor: pointer;
    margin: 15px 0;
}

.letter-paper {
    background: #fffdfa;
    border: 2px dashed #f472b6;
    padding: 20px;
    border-radius: 16px;
    margin-top: 15px;
    text-align: left;
}

.letter-text {
    font-family: 'Dancing Script', cursive;
    font-size: 22px;
    color: #831843;
    line-height: 1.5;
}

.gift-box-emoji {
    font-size: 85px;
    cursor: pointer;
    margin: 15px 0;
    animation: float 2s infinite ease-in-out;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.confetti-bears {
    font-size: 60px;
    margin-bottom: 10px;
    }
