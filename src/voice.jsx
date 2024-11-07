import React, { useState } from 'react';

const Voice = () => {
    const [status, setStatus] = useState('Chưa bắt đầu đọc.');

    const readAloud = () => {
        const message = `Khách hàng ngô văn tiến số thứ tự 1001 biển số xe 55x2-11122 vui lòng đến lấy xe.`;

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(message);

            utterance.onstart = () => {
                setStatus('Đang đọc: ' + message);
            };

            utterance.onend = () => {
                setStatus('Đã đọc xong.');
            };

            utterance.onerror = (event) => {
                setStatus('Có lỗi xảy ra khi đọc.');
            };

            window.speechSynthesis.speak(utterance);
        } else {
            alert('Tính năng đọc văn bản không được hỗ trợ trên trình duyệt này.');
        }
    };

    return (
        <div>
            <div>Đọc giọng nói từ văn bản</div>
            <button onClick={() => readAloud()}>📢 {status}</button>
        </div>
    );
};

export default Voice;
