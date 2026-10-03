* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #fce4ec;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    overflow-x: hidden;
}

.card {
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #ffffff;
    width: 100%;
    max-width: 380px;
    padding: 30px 20px;
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(244, 143, 177, 0.3);
    border: 2px solid #f8bbd0;
    animation: fadeIn 0.5s ease-in-out;
}

.card.active {
    display: flex;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

h1, h2 {
    color: #c2185b;
    margin-bottom: 15px;
    font-weight: 600;
}

.highlight {
    color: #e91e63;
}

.subtext {
    color: #888;
    font-size: 14px;
    margin-bottom: 20px;
}

.btn-primary {
    background: #ec407a;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(236, 64, 122, 0.4);
    transition: 0.3s;
    margin-top: 15px;
}

.btn-primary:hover {
    background: #d81b60;
    transform: scale(1.05);
}

.btn-secondary {
    background: #f8bbd0;
    color: #c2185b;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    border-radius: 25px;
    cursor: pointer;
    margin-top: 15px;
}

.btn-group {
    display: flex;
    gap: 10px;
}

.hidden {
    display: none !important;
}

/* Bears & Cake */
.bears-img { font-size: 50px; margin-bottom: 10px; }
.bouquet-icon { font-size: 90px; margin: 20px 0; }
.gift-box { font-size: 80px; cursor: pointer; margin: 20px 0; animation: bounce 1.5s infinite; }

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Balloons */
.balloon-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 45px;
    margin: 20px 0;
}

.balloon {
    cursor: pointer;
    transition: transform 0.2s;
}

.balloon:hover { transform: scale(1.2); }

.revealed-text {
    font-family: 'Caveat', cursive;
    font-size: 32px;
    color: #e91e63;
    min-height: 45px;
    margin-top: 10px;
}

/* Cake & Flame */
.cake-container {
    position: relative;
    font-size: 90px;
    cursor: pointer;
    margin: 20px 0;
}

.flame {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 35px;
    animation: flicker 0.5s infinite alternate;
}

@keyframes flicker {
    0% { opacity: 1; transform: translateX(-50%) scale(1); }
    100% { opacity: 0.8; transform: translateX(-50%) scale(1.1); }
}

/* Polaroid Card */
.polaroid-wrapper {
    cursor: pointer;
    margin: 15px 0;
}

.polaroid-card {
    background: white;
    padding: 12px 12px 20px 12px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    border: 1px solid #eee;
    transform: rotate(-2deg);
    transition: 0.3s;
}

.polaroid-card:hover {
    transform: rotate(0deg) scale(1.02);
}

.polaroid-card img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 6px;
}

.handwritten {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: #444;
    margin-top: 10px;
}

/* Letter */
.envelope { font-size: 70px; cursor: pointer; margin: 20px 0; }
.letter-box {
    background: #fff8fa;
    border: 2px dashed #f48fb1;
    padding: 20px;
    border-radius: 15px;
    margin-top: 10px;
}

.handwritten-letter {
    font-family: 'Caveat', cursive;
    font-size: 22px;
    color: #880e4f;
    line-height: 1.4;
    text-align: left;
}
