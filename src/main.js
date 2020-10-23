
// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => console.log(json));
}

// main
// promise가 성공적으로 값을 전달해주면, 전달받은 items를 이용해서 displayItems를 보여주고
// EventListeners를 등록해서 적절한 item을 filterling해주는 것까지!
loadItems()
.then(items => {
    // displayItems(items);
    // setEventListeners(items)
})
.catch(console.log);