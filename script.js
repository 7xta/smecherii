fetch('files.json')
.then(res => res.json())
.then(data => {
    const files = data["smecherii"];
    const btn = document.getElementById('download-velox-spammer-v2');
    const fileList = document.getElementById('file-list');

    // Setăm butonul să deschidă link-ul folderului
    btn.addEventListener('click', () => {
        if (files.length > 0) {
            window.open(files[0].link, '_blank');
        } else {
            alert("No folder available!");
        }
    });

    // Optional: lista fișierelor din folder (dacă vrei să le afișezi individual)
    files.forEach(file => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = file.link;
        a.textContent = file.name;
        a.target = "_blank";
        li.appendChild(a);
        fileList.appendChild(li);
    });
})
.catch(err => console.error('Error loading files.json:', err));
