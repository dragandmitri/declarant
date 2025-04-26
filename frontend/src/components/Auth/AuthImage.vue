<template>
  <div class="splash-screen">
    <div class="waves-wrapper">
      <svg
        class="wave wave-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveFill" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4fc3f7" />
            <stop offset="25%" stop-color="#0d87c4" />
            <stop offset="50%" stop-color="#095e93" />
            <stop offset="75%" stop-color="#1a4277" />
            <stop offset="100%" stop-color="#0b2d5e" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4fc3f7" />
            <stop offset="50%" stop-color="#2196f3" />
            <stop offset="100%" stop-color="#1565c0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveFill)"
          stroke="url(#waveStroke)"
          stroke-width="1"
          d="M0,288L30,282.7C60,277,120,267,180,250.7C240,235,300,213,360,170.7C420,128,480,64,540,37.3C600,11,660,21,720,74.7C780,128,840,224,900,240C960,256,1020,192,1080,149.3C1140,107,1200,85,1260,101.3C1320,117,1380,171,1410,197.3L1440,224L1440,320L0,320Z"
        />
      </svg>

      <svg
        class="wave wave-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveFill" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0d87c4" />
            <stop offset="50%" stop-color="#095e93" />
            <stop offset="100%" stop-color="#1a4277" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4fc3f7" />
            <stop offset="50%" stop-color="#2196f3" />
            <stop offset="100%" stop-color="#1565c0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveFill)"
          stroke="url(#waveStroke)"
          stroke-width="1"
          d="M0,288L30,282.7C60,277,120,267,180,250.7C240,235,300,213,360,170.7C420,128,480,64,540,37.3C600,11,660,21,720,74.7C780,128,840,224,900,240C960,256,1020,192,1080,149.3C1140,107,1200,85,1260,101.3C1320,117,1380,171,1410,197.3L1440,224L1440,320L0,320Z"
        />
      </svg>

      <svg
        class="wave wave-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveFill" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0d87c4" />
            <stop offset="50%" stop-color="#095e93" />
            <stop offset="100%" stop-color="#1a4277" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4fc3f7" />
            <stop offset="50%" stop-color="#2196f3" />
            <stop offset="100%" stop-color="#1565c0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveFill)"
          stroke="url(#waveStroke)"
          stroke-width="1"
          d="M0,288L30,282.7C60,277,120,267,180,250.7C240,235,300,213,360,170.7C420,128,480,64,540,37.3C600,11,660,21,720,74.7C780,128,840,224,900,240C960,256,1020,192,1080,149.3C1140,107,1200,85,1260,101.3C1320,117,1380,171,1410,197.3L1440,224L1440,320L0,320Z"
        />
      </svg>

      <svg
        class="wave wave-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveFill" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0d87c4" />
            <stop offset="50%" stop-color="#095e93" />
            <stop offset="100%" stop-color="#1a4277" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4fc3f7" />
            <stop offset="50%" stop-color="#2196f3" />
            <stop offset="100%" stop-color="#1565c0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveFill)"
          stroke="url(#waveStroke)"
          stroke-width="1"
          d="M0,288L30,282.7C60,277,120,267,180,250.7C240,235,300,213,360,170.7C420,128,480,64,540,37.3C600,11,660,21,720,74.7C780,128,840,224,900,240C960,256,1020,192,1080,149.3C1140,107,1200,85,1260,101.3C1320,117,1380,171,1410,197.3L1440,224L1440,320L0,320Z"
        />
      </svg>
    </div>
    <div class="globus-wrapper">
      <div class="globus">
        <div class="globus-x"></div>
        <div class="globus-y"></div>
        <div class="globus-divider"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom left, #0d87c4, #095e93, #1a4277);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.globus-wrapper {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
}

.globus {
  position: relative;
  border: 2.5px solid;
  width: 100px;
  height: 100px;
  border-color: white;
  border-radius: 50%;
  z-index: 10;
  animation: rotate 3s linear infinite;
}

.globus-x {
  position: absolute;
  top: -2%;
  left: 22%;
  border: 2.5px solid;
  width: 50%;
  height: 100%;
  border-color: white;
  border-radius: 50%;
  z-index: 10;
}

.globus-y {
  position: absolute;
  top: 22%;
  left: -2%;
  border: 2.5px solid;
  width: 100%;
  height: 50%;
  border-color: white;
  border-radius: 50%;
  z-index: 10;
}

.globus-divider {
  position: absolute;
  height: 2%;
  width: 100%;
  background-color: white;
  top: 48%;
  left: 0;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.waves-wrapper {
  position: absolute;
  width: 100%;
  height: 70%;
  left: 0;
  bottom: 0;
  overflow: hidden;
}

.wave {
  position: absolute;
  width: 167%;
  height: 100%;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  left: -45%;
  opacity: 0.3;
}

.wave-1 {
  animation: waveMove1 8s infinite alternate;
  top: 0;
  width: 200%;
}
.wave-2 {
  animation: waveMove2 9s infinite alternate;
  top: 20px;
  width: 250%;
}
.wave-3 {
  animation: waveMove3 10s infinite alternate;
  top: 40px;
  width: 300%;
}
.wave-4 {
  animation: waveMove4 12s infinite alternate;
  top: 60px;
}

@keyframes waveMove1 {
  0% {
    transform: translateX(100px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(-150px);
  }
}

@keyframes waveMove2 {
  0% {
    transform: translateX(-200px);
  }
  50% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(-40px);
  }
}

@keyframes waveMove3 {
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(60px);
  }
  100% {
    transform: translateX(-30px);
  }
}

@keyframes waveMove4 {
  0% {
    transform: translateX(30px);
  }
  50% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(-60px);
  }
}
</style>
