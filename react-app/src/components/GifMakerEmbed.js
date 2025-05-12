import React, { useRef, useEffect, useState } from 'react';

const PoolServiceAnimation = () => {
    const canvasRef = useRef(null);
    const width = 500;
    const height = 300;
    const duration = 3000; // duration in ms for full animation
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let start = null;
        let animationFrameId;

        const draw = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            // Ripple water background
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = `#0077b6`;
            ctx.fillRect(0, 0, width, height);

            ctx.strokeStyle = '#00b4d8';
            ctx.lineWidth = 2;

            for (let y = 0; y < height; y += 20) {
                ctx.beginPath();
                for (let x = 0; x <= width; x += 10) {
                    const wave = Math.sin((x + elapsed / 10) / 20) * 5;
                    if (x === 0) {
                        ctx.moveTo(x, y + wave);
                    } else {
                        ctx.lineTo(x, y + wave);
                    }
                }
                ctx.stroke();
            }

            // Animate text fade-in
            if (elapsed >= 1000) {
                setShowText(true);
                const textAlpha = Math.min(1, (elapsed - 1000) / 1000); // fade in over 1s

                ctx.globalAlpha = textAlpha;
                ctx.fillStyle = 'white';
                ctx.font = 'bold 32px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Clearly 1 Pool Service', width / 2, height / 2);
                ctx.globalAlpha = 1;
            }

            if (elapsed < duration + 1000) {
                animationFrameId = requestAnimationFrame(draw);
            }
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <canvas
                ref={canvasRef}
                width={500}
                height={300}
                style={{
                    borderRadius: '10px',
                    border: '2px solid #0077b6',
                    backgroundColor: '#0077b6',
                }}
            />
        </div>
    );
};

export default PoolServiceAnimation;
