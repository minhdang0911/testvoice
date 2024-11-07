import React, { useState, useEffect } from 'react';

const Voice = () => {
    const [status, setStatus] = useState('Chưa bắt đầu đọc.');
    const [isSupported, setIsSupported] = useState(false);
    const message = `Khách hàng ngô văn tiến số thứ tự 1001 biển số xe 55x2-11122 vui lòng đến lấy xe.`;

    useEffect(() => {
        // Kiểm tra xem speechSynthesis có được hỗ trợ không
        if ('speechSynthesis' in window) {
            setIsSupported(true);
        } else {
            alert('Tính năng đọc văn bản không được hỗ trợ trên trình duyệt này.');
        }
    }, []);

    const readAloud = () => {
        if (!isSupported) return;

        const utterance = new SpeechSynthesisUtterance(message);

        // Khi bắt đầu đọc
        utterance.onstart = () => {
            setStatus('Đang đọc: ' + message);
        };

        // Khi đọc xong
        utterance.onend = () => {
            setStatus('Đã đọc xong.');
        };

        // Nếu có lỗi khi đọc
        utterance.onerror = (event) => {
            console.error('Lỗi khi đọc:', event.error);
            setStatus('Có lỗi xảy ra khi đọc.');
        };

        // Bắt đầu đọc
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div>
            <div>Đọc giọng nói từ văn bản</div>
            <button onClick={readAloud} disabled={!isSupported || status.includes('Đang đọc')}>
                📢 {status}
            </button>
            {!isSupported && <p>Trình duyệt của bạn không hỗ trợ tính năng này.</p>}
        </div>
    );
};

export default Voice;
