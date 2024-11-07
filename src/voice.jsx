import React, { useState } from 'react';

const Voice = () => {
    const [status, setStatus] = useState('Chưa bắt đầu đọc.');

    const readAloud = () => {
        const message = `Khách hàng ngô văn tiến số thứ tự 1001 biển số xe 55x2-11122 vui lòng đến lấy xe.`;

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(message);

            // Khi bắt đầu đọc
            utterance.onstart = () => {
                console.log('Đang bắt đầu đọc: ', message);
                setStatus('Đang đọc: ' + message);
            };

            // Khi đọc xong
            utterance.onend = () => {
                console.log('Đã đọc xong.');
                setStatus('Đã đọc xong.');
            };

            // Nếu có lỗi khi đọc
            utterance.onerror = (event) => {
                console.error('Lỗi khi đọc:', event.error);
                setStatus('Có lỗi xảy ra khi đọc.');
            };

            // Bắt đầu đọc
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Tính năng đọc văn bản không được hỗ trợ trên trình duyệt này.');
        }
    };

    return (
        <>
            <div>Đọc giọng nói từ văn bản</div>
            <button className="status status-call" onClick={readAloud}>
                📢 {status}
            </button>
        </>
    );
};

export default Voice;
