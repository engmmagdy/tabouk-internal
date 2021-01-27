const FileDrop = () => {
    if (document.getElementById('photo-label') && document.getElementById('photo-picker')) {
        var dropContainer = document.getElementById('photo-label')
        var fileInput = document.getElementById('photo-picker')
        const loadFile = function (event) {
            var output = document.getElementById('file-name');
            output.innerHTML = event.target.files[0].name
            // output.src = URL.createObjectURL(event.target.files[0]);
            // output.onload = function () {
            //     URL.revokeObjectURL(output.src) // free memory
            // }
        };
        const initName = () => {
            if (fileInput.files[0])
                loadFile({
                    target: {
                        files: fileInput.files
                    }
                })
        }
        initName()
        fileInput.onchange = (e) => {
            loadFile(e)
        }
        dropContainer.ondragover = dropContainer.ondragenter = function (evt) {
            evt.preventDefault();
            dropContainer.classList.add('drag')
        };
        dropContainer.ondragleave = function (e) {
            e.preventDefault()
            dropContainer.classList.remove('drag')

        }
        dropContainer.ondrop = function (evt) {
            evt.preventDefault()
            dropContainer.classList.remove('drag')
            // pretty simple -- but not for IE :(
            fileInput.files = evt.dataTransfer.files;

            // If you want to use some of the dropped files
            var dT = new DataTransfer();
            dT.items.add(evt.dataTransfer.files[0]);
            fileInput.files = dT.files;
            loadFile({
                target: {
                    files: fileInput.files
                }
            })
            evt.preventDefault();
        };



    }
}
