let displayName: string = "Samveg's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
// let originalCost: number = 425;
// originalCost = "hello"; // Error if line 5, 6 are uncommented
// let originalCost = 425 as number;
let originalCost = 425 as any;
// originalCost = "hello";//No error if uncommented


function getInventoryItem(trackingNumber: string): {
    displayName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    originalCost: number;
} {
    return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);