border:
    1px solid
    #e7ddd2;

  border-radius:4px;
}

.env-flap{
  position:absolute;

  left:0;
  right:0;
  top:10px;

  height:115px;

  background:#f9ddda;

  clip-path:
    polygon(
      0 0,
      100% 0,
      50% 78%
    );

  border:
    2px solid
    #e0c2b7;

  transform-origin:50% 0;

  transition:.7s ease;

  z-index:3;
}

.env-heart{
  position:absolute;

  z-index:4;

  top:70px;
  left:50%;

  transform:translateX(-50%);

  font-size:2rem;

  color:#d84c75;

  transition:.4s;
}

.envelope.open .env-flap{
  transform:rotateX(180deg);
  z-index:1;
}

.envelope.open .env-heart{
  opacity:0;
}

.tap{
  font-size:.8rem;
  color:#9b6a79;
}

.letter-card{
  max-width:440px;

  margin:
    24px auto
    16px;

  padding:
    28px
    24px
    25px;

  background:var(--paper);

  border:
    1px solid
    #e1dfc8;

  border-radius:10px;

  text-align:left;

  box-shadow:
    0 14px 28px
    rgba(90,64,46,.14);

  transform:rotate(-1deg);

  animation:
    letterIn .7s ease;

  position:relative;

  font-family:Caveat,cursive;

  font-size:1.25rem;

  line-height:1.3;
}

@keyframes letterIn{
  from{
    opacity:0;
    transform:
      translateY(30px)
      rotate(-4deg);
  }

  to{
    opacity:1;
    transform:rotate(-1deg);
  }
}

.letter-heart{
  position:absolute;

  right:14px;
  top:10px;

  background:#d83e72;

  color:#fff;

  border-radius:50%;

  width:32px;
  height:32px;

  display:grid;
  place-items:center;
}

.dear{
  font-size:1.45rem;
  margin-top:0;
}

.love{
  text-align:right;
  font-weight:700;
  color:#b13c64;
}

.gift{
  border:0;
  background:none;

  font-size:8rem;

  cursor:pointer;

  filter:
    drop-shadow(
      0 15px 12px
      rgba(110,42,66,.15)
    );

  animation:
    bob 1.8s
    infinite ease-in-out;
}

@keyframes bob{
  50%{
    transform:
      translateY(-12px)
      rotate(3deg);
  }
}

.final-card{
  padding:30px 20px 35px;

  background:
    rgba(255,255,255,.55);

  border:
    1px solid
    rgba(255,255,255,.7);

  border-radius:32px;

  box-shadow:var(--shadow);

  backdrop-filter:blur(8px);
}

.final-art{
  font-size:4.5rem;
  margin-bottom:8px;
}

.final-card h2{
  font-size:2.5rem;
}

.final-copy{
  line-height:1.75;
  font-size:.9rem;
  color:#795263;
}

.wide-btn{
  width:min(430px,100%);

  padding:
    14px 18px;

  border-radius:13px;

  margin:8px 0;
}

.mini-actions{
  display:flex;
  gap:10px;
  justify-content:center;
}

.mini-btn{
  background:#fff;
  color:#9a4865;

  padding:
    10px 14px;

  border-radius:12px;

  border:
    1px solid
    #efd5df;
}

.tiny-note{
  min-height:25px;

  margin:12px 0 0;

  font:
    1.3rem
    Caveat,
    cursive;

  color:#a34265;
}

#hearts{
  position:fixed;

  inset:0;

  pointer-events:none;

  overflow:hidden;

  z-index:0;
}

.float-heart{
  position:absolute;

  bottom:-30px;

  color:#e98ba9;

  opacity:.42;

  font-size:15px;

  animation:
    rise linear forwards;
}

@keyframes rise{
  to{
    transform:
      translateY(-110vh)
      rotate(25deg);

    opacity:0;
  }
}

.toast{
  position:fixed;

  left:50%;
  bottom:22px;

  transform:
    translate(-50%,20px);

  background:#6e334b;

  color:#fff;

  padding:
    10px 16px;

  border-radius:999px;

  font-size:.78rem;

  opacity:0;

  pointer-events:none;

  transition:.25s;

  z-index:50;
}

.toast.show{
  opacity:1;

  transform:
    translate(-50%,0);
}

@media(max-width:480px){

  .screen{
    padding:20px 12px 30px;
  }

  .birthday-art{
    height:215px;
  }

  .bear,
  .bunny{
    font-size:5.7rem;
    top:70px;
  }

  .cake{
    font-size:4.2rem;
    top:108px;
  }

  .balloon-area{
    height:300px;
  }

  .balloon{
    font-size:4.5rem;
  }

  .polaroid img{
    height:300px;
  }

  .letter-card{
    font-size:1.15rem;
  }
                       }
