function generateGroups() {
    const participantsInput = document.getElementById('participants').value;
    const groupSize = parseInt(document.getElementById('groupSize').value);
    const participants = participantsInput.split('\n').map(name => name.trim()).filter(name => name);

    if (groupSize <= 0 || isNaN(groupSize)) {
        alert("Số người mỗi nhóm phải lớn hơn 0!");
        return;
    }

    if (participants.length === 0) {
        alert("Hãy nhập ít nhất một người tham gia!");
        return;
    }

    // Xáo trộn danh sách người tham gia
    shuffle(participants);

    // Chia thành các nhóm
    const groups = [];
    for (let i = 0; i < participants.length; i += groupSize) {
        groups.push(participants.slice(i, i + groupSize));
    }

    // Hiển thị kết quả
    displayGroups(groups);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayGroups(groups) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Xóa kết quả cũ

    groups.forEach((group, index) => {
        const groupElement = document.createElement('div');
        groupElement.innerHTML = `<strong>Nhóm ${index + 1}:</strong> ${group.join(', ')}`;
        resultDiv.appendChild(groupElement);
    });
}
