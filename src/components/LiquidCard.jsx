// LiquidCard.jsx
// WebGL image card with real ripple distortion driven by mouse position.
// Vanilla WebGL — no extra libs. Drop into galleries and culture grids.
//
//   <LiquidCard image="/images/visit-sudan/meroe-hero.png"
//               title="01 — Ancient Nubia" caption="Where the pyramids outnumber Egypt's." />

import { useRef, useEffect } from "react";

export default function LiquidCard({ image, title, caption }) {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const gl = c.getContext("webgl");
    if (!gl) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    img.onload = () => init(gl, c, img);
  }, [image]);

  function init(gl, c, img) {
    const vs = `attribute vec2 p; varying vec2 v;
                void main(){ v = p * 0.5 + 0.5; gl_Position = vec4(p, 0, 1); }`;
    const fs = `
      precision mediump float;
      varying vec2 v;
      uniform sampler2D u;
      uniform vec2 m;
      uniform float t;
      void main() {
        vec2 uv = v;
        float d = distance(uv, m);
        float ripple = sin(20.0 * d - t * 3.0) * 0.012 / (d + 0.1);
        uv += ripple;
        vec4 col = texture2D(u, vec2(uv.x, 1.0 - uv.y));
        col.rgb *= 1.0 + 0.3 * ripple * 20.0;
        gl_FragColor = col;
      }`;
    const shader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src); gl.compileShader(s); return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, shader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog); gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const uM = gl.getUniformLocation(prog, "m");
    const uT = gl.getUniformLocation(prog, "t");
    let mx = 0.5, my = 0.5;
    c.onmousemove = (e) => {
      const r = c.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = 1 - (e.clientY - r.top) / r.height;
    };
    const start = performance.now();
    (function loop() {
      gl.uniform2f(uM, mx, my);
      gl.uniform1f(uT, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(loop);
    })();
  }

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-ivory/10">
      <canvas ref={canvas} width={900} height={600} className="block h-full w-full" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-ink/80 to-transparent">
        <p className="eyebrow">{title}</p>
        <h3 className="font-serif text-3xl mt-2 text-ivory">{caption}</h3>
      </div>
    </div>
  );
}
