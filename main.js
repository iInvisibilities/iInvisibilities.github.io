const notice = document.getElementById("notice");
const initNoticeContent = notice.textContent;
const root = document.documentElement;
        var moveNotice = true;

        function resetNotice() {
            moveNotice = true;
            notice.textContent = initNoticeContent;
            root.style.setProperty('--width', "20rem");
            root.style.setProperty('--height', "2.5rem");
        }

        function updateCoords(x, y) {
            if(!moveNotice) return;

            root.style.setProperty('--x', x + "px");
            root.style.setProperty('--y', y + "px");
        }

        function formatListToNode(soonToBeParent, list) {
            let listNode = document.createElement("div");
            listNode.classList.add("list-node");
            list.forEach(item => {
                let listItem = document.createElement("div");
                listItem.classList.add("list-item");
                listItem.textContent = item.textContent;
                listItem.onclick = function(ev) { window.open(item.textContent); };

                listNode.append(listItem);
            });
            soonToBeParent.appendChild(listNode);
        }

        document.getElementById("skills").addEventListener("mousemove",
         (event) => updateCoords(event.clientX, event.clientY + window.scrollY));

        Array.from(document.getElementsByClassName("skill")).forEach((element) => {
            element.addEventListener("click", (event) => {
                moveNotice = false;
                let projectsList = element.querySelectorAll(".projects-list > *");
                if(projectsList.length == 0) return;
                root.style.setProperty('--width', "30rem");
                root.style.setProperty('--height', (projectsList.length+1) *50 + "px");
                notice.textContent = "";
                formatListToNode(notice, projectsList);
            });
            
            element.addEventListener("mouseleave", (event) => {
                if(document.elementFromPoint(event.clientX, event.clientY).contains(notice)) return;
                
                resetNotice();
            });
        });