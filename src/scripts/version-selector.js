(function(){
    window.onload = function () {
        var versionSelect = document.getElementById("version-select");

        versionSelect.addEventListener('change', function () {
            var selectedVersion = versionSelect.options[versionSelect.selectedIndex].value;
            var host = window.location.host;
            var protocol = window.location.protocol;
            var url = protocol + "//" + host + "/" + selectedVersion + '.html';
            window.location.href = url;
        });
    };
})();