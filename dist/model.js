var displayName = "Samveg's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
// let originalCost: number = 425;
// originalCost = "hello"; // Error if line 5, 6 are uncommented
// let originalCost = 425 as number;
var originalCost = 425;
originalCost = "hello";
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
