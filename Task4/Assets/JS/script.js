let items = Array.from(document.querySelectorAll(".item"));

let dropZones = Array.from(document.querySelectorAll(".dropZone"));

let dropItem = document.querySelector(".dropItem");

items.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
        console.log("drag start");
    })
    
    item.addEventListener("dragend", () => {
        console.log("drag end");
    })
})

dropZones.forEach(zone => {
    zone.addEventListener("dragenter", () => {
        zone.style.bacgroundColor = "red";
    })
    
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    zone.addEventListener("drop", (e) => {
        let droppedItemId = e.dataTransfer.getData("text");
        let droppedItem = document.getElementById(droppedItemId);
        zone.append(droppedItem);
    })
})