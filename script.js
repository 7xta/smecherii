fetch('files.json')
    .then(response => response.json())
    .then(data => {
        const fileList = document.getElementById('file-list');

        const files = data["script"];
        const file = files[0]; 

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = file.link;
        a.textContent = file.name;
        a.setAttribute('download', '');
        li.appendChild(a);
        fileList.appendChild(li);
    })
    .catch(err => console.error('error while downloading:', err));
