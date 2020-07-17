let displayName: string = "Samveg's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
// let originalCost: number = 425;
// originalCost = "hello"; // Error if line 5, 6 are uncommented
// let originalCost = 425 as number;
let originalCost = 425 as any;
// originalCost = "hello";//No error if uncommented

enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture"
}

interface InventoryItem{
    displayName: string;
    // inventoryType: InventoryItemType;//Can also be used
    inventoryType: "computer" | "furniture";
    trackingNumber: string;
    createDate: Date;
    originalCost?: number;//Original cost is not compulsory but should be a number if exist

    // addNote(note: string): string;//Same as below
    addNote?:(note: string)=> string;
}

function getInventoryItem(trackingNumber: string): InventoryItem{
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();

// saveInventoryItem(inventoryItem);
saveInventoryItem({
    displayName: "macBook pro 15 inch",
    // inventoryType: InventoryItemType.Computer,
    inventoryType: "computer",
    trackingNumber: "FD123456",
    createDate: new Date(),
    originalCost: 199000
});